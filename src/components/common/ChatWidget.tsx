"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, PlaneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ReactMarkdown from 'react-markdown';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || input.length > 200) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Optimization: Keep only the last 6 messages (approx 3 turns) to save tokens
      const fullHistory = [...messages, userMessage];
      const recentHistory = fullHistory.slice(-6);

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: recentHistory }),
      });

      if (!response.ok) throw new Error("Failed to fetch response");

      const data = await response.json();
      // Expecting standard JSON response: "The response text" or { content: "..." }
      // Based on route.ts returning Response.json(result.text), data is the string itself.
      const botMessage = { role: "assistant", content: data };
      
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      // Optional: Add error message to chat
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-8 z-50">
      <Popover 
        open={open} 
        onOpenChange={(isOpen) => {
            if (isOpen) setOpen(true);
        }}
      >
        <PopoverTrigger asChild>
            <Button
            size="icon"
            className="h-14 w-14 cursor-pointer rounded-full shadow-lg bg-blue-500 text-white hover:bg-blue-700/90 transition-all duration-300 hover:scale-105"
            >
            <MessageCircle className="h-6 w-6" />
            <span className="sr-only">Open chat</span>
            </Button>
        </PopoverTrigger>
        <PopoverContent 
            className="w-80 p-0 mr-4 mb-2 shadow-2xl border-2" 
            side="top" 
            align="end"
            onInteractOutside={(e) => {
                e.preventDefault();
            }}
        >
            <Card className="border-0 shadow-none p-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 h-11 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-lg">
                    <CardTitle className="text-sm font-medium text-white flex items-center gap-2">
                         <MessageCircle size={18} />
                        Travel Vaidya <PlaneIcon />
                    </CardTitle>
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-white hover:bg-white/20 hover:text-white"
                        onClick={() => setOpen(false)}
                    >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                    </Button>
                </CardHeader>
                <CardContent className="p-4 h-[300px] flex flex-col gap-4 overflow-y-auto bg-gray-50">
                    <div className="flex gap-2 justify-start">
                         <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-sm border">
                            Hello! 👋 How can we help you to plan your trip?
                        </div>
                    </div>
                    {messages.map((m, index) => (
                        <div key={index} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`${m.role === 'user' ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-white border rounded-tl-none'} p-3 rounded-lg shadow-sm max-w-[80%] text-sm`}>
                                <ReactMarkdown 
                                    components={{
                                        ul: ({node, ...props}) => <ul className="list-disc ml-4" {...props} />,
                                        ol: ({node, ...props}) => <ol className="list-decimal ml-4" {...props} />,
                                        li: ({node, ...props}) => <li className="mt-1" {...props} />,
                                        strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
                                    }}
                                >
                                    {m.content}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex gap-2 justify-start">
                             <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%] text-sm border italic">
                                Typing...
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </CardContent>
                <CardFooter className="p-3 bg-white border-t flex-col items-end gap-1">
                    <div className="flex w-full items-center gap-2">
                        <Input 
                            placeholder="Type your message..." 
                            className="flex-1" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') handleSend();
                            }}
                        />
                        <Button 
                            size="icon" 
                            onClick={handleSend} 
                            disabled={isLoading || input.length > 200 || input.length === 0} 
                            className="h-9 w-9"
                        >
                            <Send className="h-4 w-4" />
                            <span className="sr-only">Send</span>
                        </Button>
                    </div>
                    <span className={`text-xs ${input.length > 200 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                        {input.length}/200
                    </span>
                </CardFooter>
            </Card>
        </PopoverContent>
      </Popover>
    </div>
  );
}
