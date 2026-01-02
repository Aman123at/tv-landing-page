import { openai as openaiClient } from '@/lib/openai';
import { supabase } from '@/lib/supabaseClient';
import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  // 1. Get the user's latest query
  const lastMessage = messages[messages.length - 1];
  const userQuery = lastMessage.content;

  // 2. Generate embedding for the user's query
  const embeddingResponse = await openaiClient.embeddings.create({
    model: 'text-embedding-3-small',
    input: userQuery.replace(/\n/g, ' '),
  });

  const queryEmbedding = embeddingResponse.data[0].embedding;

  // 3. Search Supabase for similar documents
  const { data: documents, error } = await supabase.rpc('match_documents', {
    query_embedding: queryEmbedding,
    match_threshold: 0.5, // Similarity threshold (0 to 1)
    match_count: 5,       // Top 5 relevant chunks
  });

  if (error) {
    console.error(error);
    return new Response('Error searching documents', { status: 500 });
  }

  // 4. Construct the context block
  const contextText = documents?.map((doc: any) => doc.content).join('\n---\n') || '';

  const systemPrompt = `
    You are a helpful travel assistant. 
    Use the following context to answer the user's question. 
    If the answer is not in the context, politely say you don't have that information.
    Keep the response short and concise.
    Try to provide a clear and concise answer in very short sentences.
    
    Context:
    ${contextText}
  `;

  // 5. Generate response using generateText
  const result = await generateText({
    model: openai('gpt-4o-mini'),
    messages,
    system: systemPrompt,
  });

  // 6. Return text response
  return Response.json(result.text);
}