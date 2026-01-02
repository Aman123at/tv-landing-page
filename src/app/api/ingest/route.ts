import { NextResponse } from 'next/server';
import { openai } from '@/lib/openai';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req: Request) {
  const { title } = await req.json();

//   if (!text) {
//     return NextResponse.json({ error: 'No text provided' }, { status: 400 });
//   }

  // 1. Split text into chunks (Simple splitting by period for demo)
  // In production, use a library like 'langchain' text splitters
  const chunks = [
    `Char Dham Yatra by Helicopter Packages
Char Dham Yatra by helicopter is the most time-efficient and comfortable way to visit Yamunotri, Gangotri, Kedarnath, and Badrinath. This 5 night & 6 day spiritual journey starts from Dehradun and includes VIP assistance, helicopter transfers, hotel stays, meals, and dedicated ground support.

Read Less
The cost of Char Dham Yatra by helicopter is ₹2,30,000 per person. Ideal for senior citizens, families, and NRIs, this hassle-free tour avoids long treks and altitude fatigue. You’ll complete the sacred circuit with ease, making lifelong memories. Advance helicopter booking for Char Dham Yatra is recommended due to high demand. For those short on time but seeking divine blessings, this Char Dham helicopter tour is the perfect choice.

Tour Highlights

• 5-Nights stay at scenic hotels.
• All-inclusive meals with best services.
• Dedicated VIP assistance at each temple.
• Benefit from the expertise of professional guides at every location.
• Convenient transportation provided at each destination.

Why Everyone is choosing Char Dham Yatra by Helicopter
Time Efficiency : Complete Char Dham Yatra in days instead of weeks.
Safety : Experienced pilots and reputable operators ensure high safety standards.
VIP Darshan : Skip long queues with VIP access to temples.
Well-Organized Itinerary : Efficient and structured travel plans.
Stress-Free Travel : All logistics, including accommodations and meals, are managed for you.
Convenience : Avoid long and tiring road journeys.
Comfort : Enjoy a less exhausting travel experience.`,
`Kedarnath Badrinath Yatra by Helicopter Packages
If you want to visit both Kedarnath and Badrinath without the long road journeys and steep treks, the 2 Dham Yatra by Helicopter to Kedarnath and Badrinath is the most convenient way to do it. It’s quick, comfortable, and specially designed for spiritual travelers—especially senior citizens, families with small children, or those short on time.

Read Less
This helicopter package allows you to complete darshan at both Kedarnath and Badrinath in just 1 or 2 days, depending on the itinerary you choose.

Let’s break it down.

Starting Point: Dehradun (Sahastradhara Helipad)

Most 2 Dham helicopter tours begin from Dehradun, where you’ll be briefed by ground staff and escorted to your chartered helicopter. The service is smooth, well-managed, and ideal for first-time flyers or elderly passengers.

From here, the journey is divided into two legs:

Kedarnath Darshan by Helicopter

• You’ll fly from Dehradun to Guptkashi or Sersi, depending on weather and permissions.
• From there, a connecting shuttle takes you directly to the Kedarnath helipad, just 500 meters from the temple.
• You’ll be escorted to the temple for VIP darshan, with minimal walking and no long queues.

Optional:
If you choose an overnight stay package, you can spend the night near Kedarnath and do a peaceful morning darshan the next day.

Badrinath Darshan by Helicopter

• After completing Kedarnath darshan, you’ll board a helicopter to Badrinath.
• Upon arrival, you’ll be transferred to the temple area by car or on foot (depending on the helipad).
• Like Kedarnath, you’ll get priority darshan with personalized assistance.

After darshan and some rest or prasad at the temple, you’ll be flown back to Dehradun the same day—or the next day, if your package includes a stay at Badrinath.

What’s Included in the Package?

• Helicopter ride from Dehradun to Kedarnath & Badrinath
• Shuttle connections and ground transfers
• VIP darshan assistance at both temples
• Pick-up and drop from Sahastradhara Helipad, Dehradun
• Packed meals or hot lunch (depending on itinerary)
• Night stay (optional: at Guptkashi, Kedarnath, or Badrinath)
• All permits and helipad charges

Who Should Choose This Tour?

This package is ideal for:

Senior citizens who cannot trek
Pilgrims short on time (can’t do full Char Dham)
Families with kids or elderly parents
NRIs and foreigners visiting Uttarakhand

Anyone seeking a peaceful, spiritual experience without crowd and chaos

How Long Is the Tour?

You can choose from:

Same-Day Return Package
Darshan at both Kedarnath and Badrinath with helicopter drop and return within one day

1-Night, 2-Day Package
Includes stay at either Kedarnath or Badrinath for a relaxed darshan and more comfort

Best Time to Book

This tour runs mostly between May and June, and again briefly in September and October (post-monsoon). Helicopter slots are very limited and fill up fast, especially around weekends and auspicious dates.

Advance booking is highly recommended, especially if you’re traveling with a group or family.

Why Travel by Helicopter?

• No trekking
• No long queues
• Saves 2–3 days of travel time
• Comfortable for seniors and kids
• Peaceful darshan with proper assistance
• Scenic Himalayan views from the sky`,
`Char Dham Yatra Packages by Road
Char Dham Yatra packages make it easier to visit the four sacred temples — Badrinath, Kedarnath, Gangotri, and Yamunotri — in the mountains of Uttarakhand. It’s a peaceful and powerful journey that brings in a lot of devotees every year.

Read Less
The whole trip usually takes around 10 to 12 days, depending on the route and how long you stop at each place. Most people plan it between April and June or September to early November — that’s when the weather’s nice and the roads are open. During summer, the days are pleasant and the nights can get chilly, especially in Kedarnath.

With a bit of planning, the yatra can go pretty smoothly. This guide will walk you through when to go, which routes to take, what kind of costs to expect, and some handy tips to keep things easy along the way.

What is Char Dham Yatra?
Located in the Garhwal region of Uttarakhand, four temples—Yamunotri, Gangotri, Kedarnath, and Badrinath which makes up the Hindu pilgrimage known as Char Dham Yatra. Starting at Yamunotri and ending at Badrinath, the route goes clockwise. Many people believe that completing Char Dham Yatra brings them peace and guides them towards moksha. The route passes through rivers, forests, and hills—all of which can be challenging. Adi Shankaracharya began this yatra in order to bring back ancient Hindu customs.

Why Choose a Char Dham Yatra Package?
Booking a Char Dham Yatra package ensures a hassle-free pilgrimage. With proper accommodation, transportation, and meal plans, a well-organized package helps travelers focus on devotion rather than logistics. Whether you’re traveling with family, senior citizens, or solo, the right package makes all the difference.

Benefits of Booking a Char Dham Package:

• Smooth logistics: Pre-arranged hotels, transfers, and permits.
• Safe and comfortable transport: AC and non-AC vehicle options available.
• Ideal for all age groups: Senior-friendly and family-friendly options.
• Customized itineraries: Choose from budget, deluxe, or helicopter packages.
• Expert-guided tours: Ensures a fulfilling spiritual journey with local insights.


Best Time to Visit Char Dham Yatra
The best time for Char Dham Yatra is from May to June and September to October. These months offer pleasant weather, clear skies, and safe road conditions.

Seasonal Guide:

• Summer (May-June): Ideal for first-time travelers, with clear weather and accessible routes.
• Monsoon (July-August): Not recommended due to heavy rains and landslides.
• Post-Monsoon (September-October): Less crowded, perfect for a peaceful journey.
• Winter (November-April): Temples remain closed due to heavy snowfall.

Different Char Dham Yatra Packages
Char Dham Yatra packages cater to various budgets and travel preferences, covering Badrinath, Kedarnath, Gangotri, and Yamunotri over 8 to 12 days. Budget options start at ₹25,000, while luxury and helicopter packages offer faster, more comfortable travel. Packages include meals, transport, and accommodation, with departures from Delhi, Haridwar, and Dehradun. Choose the best Char Dham Yatra package for a smooth and spiritual journey!

Budget Char Dham Yatra Packages

Budget Char Dham Yatra packages offer an affordable way to visit Badrinath, Kedarnath, Gangotri, and Yamunotri in 9 to 12 days, covering around 1,600 km by road. Starting from ₹25,000 per person, these packages include basic accommodation, meals, and transportation from Haridwar, Delhi, or Dehradun. Ideal for pilgrims seeking a cost-effective spiritual journey, budget packages ensure a fulfilling Char Dham Yatra without overspending.

• Duration: 10-12 days
• Transport: Non-AC buses or shared cabs
• Accommodation: Basic guesthouses/lodges
• Meals: Vegetarian meals included
• Ideal for: Budget-conscious travelers, young pilgrims

Deluxe Char Dham Yatra Package

Deluxe Char Dham Yatra packages offer a comfortable pilgrimage experience with premium hotels, hygienic meals, and private transportation. Covering Badrinath, Kedarnath, Gangotri, and Yamunotri in 9 to 12 days, these packages start from ₹35,000-40,000 per person. Travel by SUVs, tempo travelers, or helicopters for a hassle-free journey. Ideal for those seeking extra comfort, Deluxe Char Dham Yatra packages ensure a smooth, well-organized, and spiritually enriching trip.

• Duration: 9-11 days
• Transport: AC Tempo Traveler or private cab
• Accommodation: Deluxe hotels with scenic views
• Meals: Buffet breakfast & dinner
• Ideal for: Families, small groups

Premium Char Dham Yatra Package

Premium Char Dham Yatra packages offer a luxurious pilgrimage experience with Premium accommodations, VIP darshan, and private transport. Spanning 9 to 12 days, these packages start from ₹50,000 per person, ensuring utmost comfort and convenience. Travel by luxury SUVs, helicopters, or charter flights, enjoy gourmet meals, and experience the best hospitality. Perfect for those seeking a high-end, stress-free Char Dham Yatra, these packages provide top-tier services for a divine journey.

• Duration: 8-10 days
• Transport: Private SUV or luxury coach
• Accommodation: Premium stays with top-notch services
• Meals: Premium vegetarian meals
• Ideal for: Senior citizens, high-comfort seekers

Char Dham Yatra by Helicopter
Char Dham Yatra by helicopter packages offer a fast, comfortable, and hassle-free pilgrimage to the four sacred shrines. These 4 to 6-day packages start from ₹2.3 lakh per person, including VIP darshan, luxury stays, and smooth transfers. Ideal for senior citizens and time-conscious travelers, helicopter tours ensure safe and efficient travel, covering all temples with breathtaking aerial views of the Himalayas. Experience a divine journey with ultimate convenience

• Duration: 2-5 days
• Transport: Helicopter & private vehicles
• Accommodation: Top rated properties
• Meals: VIP darshan and premium meals
• Ideal for: Time-sensitive travelers, elderly pilgrims

How to Reach Char Dham?

By Air:

• The nearest airport is Jolly Grant Airport, Dehradun (DED).
• Helicopter services available from Dehradun to Kedarnath & Badrinath.

By Train:

• The nearest railway stations are Haridwar, Rishikesh, and Dehradun.
• From there, you can hire taxis or take buses to the base locations.

By Road:

• Well-connected highways from Delhi, Haridwar, and Rishikesh.
• Popular route: Delhi → Haridwar → Barkot → Yamunotri → Uttarkashi → Gangotri → Guptkashi → Kedarnath → Badrinath → Rishikesh → Delhi.


Road Conditions and Accessibility
• Yamunotri Route: Narrow mountain roads; last 6 km on foot or by pony.
• Gangotri Route: Well-paved, accessible by road.
• Kedarnath Route: Requires a 16 km trek from Gaurikund (pony, palki, and helicopter options available).
• Badrinath Route: Accessible by motorable road; last few meters require a short walk.`,
`Top Places to See In Uttarakhand
Uttarakhand is a state full of nature, spirituality, and culture. From the holy banks of the Ganga to snow-covered peaks and quiet mountain towns, there are many beautiful places to see in Uttarakhand. Whether you want a peaceful holiday, a spiritual journey, or a mountain adventure, this guide will help you choose the best places for your next trip.

Read Less
Haridwar

Haridwar is one of the holiest cities in India and a popular starting point for spiritual journeys in Uttarakhand. The city sits on the banks of the Ganges River and is best known for the evening Ganga Aarti at Har Ki Pauri. Many travelers come here for blessings and to begin their Char Dham Yatra. It is also one of the most senior-friendly places to see in Uttarakhand.

Rishikesh

Rishikesh is a peaceful town known for yoga, meditation, and river adventure. Located just 20 km from Haridwar, it is often called the Yoga Capital of the World. Travelers visit for spiritual learning, Ganga Aarti, and white-water rafting. Rishikesh is a great destination for both young backpackers and those looking for spiritual places to see in Uttarakhand near the holy river.

Char Dham Yatra

The Char Dham Yatra is a sacred journey to four important temples: Yamunotri, Gangotri, Kedarnath, and Badrinath. It is one of the most meaningful spiritual experiences in India. The route takes you through high Himalayan roads, beautiful valleys, and ancient pilgrimage spots. If you’re looking for religious places to see in Uttarakhand, this yatra is a life-changing journey for many.

Yamunotri

Yamunotri is the starting point of the Char Dham Yatra and the origin of the Yamuna River. It involves a short trek from Janki Chatti, and offers hot water springs and beautiful mountain views. Surrounded by peaceful nature, this temple is visited by devotees and adventure lovers alike. Yamunotri is one of the lesser-crowded spiritual places to see in Uttarakhand.

Gangotri

Gangotri is a quiet temple town located on the banks of the Bhagirathi River. It marks the origin of the holy Ganga and is a key stop on the Char Dham route. The journey to Gangotri offers breathtaking views of snow-capped mountains and pine forests. It’s a great choice for travelers looking for high-altitude religious places to see in Uttarakhand.

Kedarnath

Kedarnath is one of the most important Shiva temples in India, located high in the Himalayas at over 11,000 feet. The 16 km trek from Gaurikund is both challenging and rewarding. With snowy peaks all around, it is one of the most visited sacred places to see in Uttarakhand. Helicopter services and pony rides make it accessible for older travelers as well.

Badrinath

Badrinath is a peaceful temple town located between the Nar and Narayan mountains. It is dedicated to Lord Vishnu and is the last stop in the Char Dham Yatra. The town is easily reachable by road and is known for its natural hot springs and scenic beauty. For a relaxed and spiritual break, Badrinath is among the top places to see in Uttarakhand.

Harsil

Harsil is a hidden gem near Gangotri, ideal for those who love quiet mountain villages. Surrounded by pine trees and apple orchards, this place is perfect for slow travel and peace seekers. It offers clean air, simple homestays, and the real feel of the Himalayas. If you’re searching for offbeat places to see in Uttarakhand, Harsil is a wonderful option.

Mussoorie

Mussoorie is one of the most famous hill stations in Uttarakhand, known for its British-era charm and beautiful views of the Doon Valley. From Mall Road walks to Kempty Falls and Gun Hill viewpoints, Mussoorie has something for everyone. Families, couples, and honeymooners often choose Mussoorie for a relaxing vacation in the hills. It remains one of the easiest places to see in Uttarakhand near Dehradun.

Auli

Auli is a snow-covered mountain town known for skiing and panoramic Himalayan views. In winter, it becomes a ski paradise, and in summer, it offers green meadows and peaceful forests. The ropeway from Joshimath to Auli is one of the longest in Asia. If you love snow places to see in Uttarakhand, Auli should be high on your list.

Chopta

Chopta is a quiet place surrounded by forests and meadows, often called the Mini Switzerland of Uttarakhand. It is the base for the famous Tungnath Temple trek and the Chandrashila summit. This region is perfect for people who enjoy nature walks and simple mountain life. For short Himalayan treks and scenic sunrises, Chopta is one of the best places to see in Uttarakhand.

Nainital

Nainital is a beautiful lake town set in a valley, with Naini Lake at its center. Visitors can enjoy boating, visit nearby viewpoints, and walk around the lively Mall Road. It’s well-connected by road and rail, making it a popular weekend getaway. Among all the places to see in Uttarakhand, Nainital is one of the easiest and most family-friendly destinations.

Jim Corbett National Park

Jim Corbett National Park is India’s first tiger reserve and a great spot for wildlife lovers. Visitors come here for jeep safaris, birdwatching, and forest stays. The park is rich in flora and fauna, including tigers, elephants, and deer. If you’re looking for nature-based places to see in Uttarakhand, Corbett offers a wild and exciting experience in the jungle.

Kausani

Kausani is a peaceful hill town with wide views of Himalayan peaks like Nanda Devi and Trishul. Known for its slow pace and fresh air, it’s great for relaxing with family or older travelers. The town is also home to the Anasakti Ashram, where Mahatma Gandhi once stayed. For panoramic views and quiet holidays, Kausani is among the best scenic places to see in Uttarakhand.`,
`Top Selling Uttarakhand Tour Packages
At Travel Vaidya, we curate Uttarakhand tour packages with local expertise, making sure every itinerary feels smooth and practical. Families, couples, and senior travelers trust us because our holidays balance sightseeing, comfortable hotels, private cars, and authentic local experiences. These top-selling tours are the most booked year after year.

Read Less
Perfect Weekend Tour Packages to Uttarakhand (3–4 Days)
Ideal for quick weekend getaways from Delhi or Dehradun, these short packages cover the best-known hill towns and temples. Families enjoy safe travel and neat hotels, while couples find just enough time for a refreshing break.

Haridwar, Rishikesh & Mussoorie Tour Package – 4 Days
Evening Ganga Aarti & temple visits at Haridwar
Yoga & adventure activities in Rishikesh
Mussoorie sightseeing including Kempty Falls & Mall Road
Starting from ₹20,000/person
View Itinerary & Price
Jim Corbett, Nainital Package – 4 Days
Jeep safari at Corbett
Nainital lake boating & Mall Road
Starting from ₹20,000/person
View Itinerary & Price
Weeklong Holiday Packages (5–7 Days)
Weeklong tours allow visitors to explore Uttarakhand’s highlights at a relaxed pace. Perfect for couples seeking leisure and families wanting a mix of temples, hills, and activities.
Nainital, Almora & Ranikhet – 6 Days
Lake views, Kumaon heritage, peaceful stays
Starting from ₹25,000/person
View Itinerary & Price
Best Of Garhwal – 7 Days
Begin at Haridwar with sacred Ganga Aarti & temple visits
2 days in Mussoorie with Kempty Falls, Mall Road & Gun Hill
Drive to Chopta for Tungnath trek
Stay in Auli with cable car ride & skiing/snowplay (Dec–Feb)
Starting from ₹24,000/person
View Itinerary & Price
Luxury Uttarakhand Packages
For travelers who prefer premium stays, fine dining, and exclusive services, our luxury packages include private transfers, handpicked resorts, and curated local experiences. Couples, NRIs, and honeymooners choose these for a comfortable holiday.
Luxury Nainital Tour with Lakeview Resorts
Premium Mussoorie & Dhanaulti Hill Escape
Luxury Auli Ski Resort Holiday (with Ropeway Stay)
Char Dham Yatra Luxury Package with Premium Hotels
Budget Uttarakhand Packages
Designed for students, pilgrims, and cost-conscious travelers, these tours keep expenses low while covering the essentials — safe lodges, local food, and cab transfers. Families and groups often pick these for a no-frills Himalayan holiday.
Budget Haridwar & Rishikesh Family Tour
Low-Cost Mussoorie & Dehradun Weekend Trip
Affordable Jim Corbett Safari Package
Budget Nainital Tour (2 Nights/3 Days)`,
`Spiritual Tours in Uttarakhand
If your heart is seeking more than a regular holiday – a quiet space for reflection, faith, or healing, then spiritual tours in Uttarakhand offer a path worth walking. Known as Dev Bhoomi, this sacred region has drawn saints, seekers, and pilgrims for centuries. The mountains don’t just tower — they shelter. The rivers don’t just flow — they purify.

Read Less
Whether you’re taking part in the Char Dham Yatra, sitting in silence by the Ganga in Rishikesh, or visiting the peaceful Kaichi Dham near Nainital, these are more than destinations. These are moments of connection — to nature, to your own spirit, and to a sense of divine presence.

At Travel Vaidya, we offer thoughtfully planned spiritual travel packages across Uttarakhand. From pilgrimage tours for families and senior citizens, to quieter yoga and meditation retreats in the Himalayan foothills, every journey is designed with care. We manage the logistics — clean hotels, sattvic meals, well-paced transport — so you can focus on what truly matters: your spiritual experience.


Why Uttarakhand is the Heart of Spiritual India
Uttarakhand is called Dev Bhoomi — the Land of the Gods — and it’s not just a nickname. From the Himalayan shrines of Kedarnath and Badrinath to the peaceful ashrams along the Ganga in Rishikesh, this region has been attracting saints, seekers, and everyday pilgrims for centuries.

What makes spiritual tours in Uttarakhand special is the mix of nature and energy. The rivers feel alive. The mountains feel sacred. Even the simple act of walking here feels more grounded. Whether you’re a first-time visitor or a returning devotee, this land has something personal to offer. You just have to listen.

The Char Dham Yatra: A Life-Changing Spiritual Journey
The Char Dham Yatra is one of India’s most important spiritual circuits — and Uttarakhand is where it all happens. Covering Yamunotri, Gangotri, Kedarnath, and Badrinath, this journey takes you through some of the most powerful and remote temples in the country.

Each dham is connected to a river, a deity, and a deeper purpose:

Yamunotri – Source of the Yamuna
Gangotri – Origin of the Ganga
Kedarnath – Sacred to Lord Shiva
Badrinath – Dedicated to Lord Vishnu

The yatra typically runs from May to October. We offer full support for pilgrims — whether you’re traveling with elders, want helicopter options, or need a slower, private itinerary. Our team ensures your Char Dham tour is safe, well-paced, and spiritually meaningful.

Rishikesh: The Spiritual Capital by the Ganga
You can’t talk about spiritual tours in Uttarakhand without mentioning Rishikesh. This riverside town is where many seekers begin their journey. It’s not just a yoga hub — it’s a place where life feels quiet, even when it’s busy. Morning chants, temple bells, the sound of the river — everything here pulls you inward.

Top spiritual experiences in Rishikesh:

• Evening Ganga Aarti at Parmarth Niketan
• Meditation at Vashishta Gufa
• Visits to ancient temples like Neelkanth Mahadev
• Walking through Swarg Ashram and the old bridges

We arrange personalized Rishikesh spiritual retreats, combining peaceful stays, Ganga-side activities, and optional yoga or Ayurveda sessions.

Haridwar: Where Pilgrimage Begins
Just downstream from Rishikesh is Haridwar, another key stop for anyone exploring the spiritual circuit of Uttarakhand. It’s one of the seven holiest cities in Hinduism, and it’s often the first stop for pilgrims heading to the hills. The Ganga Aarti at Har Ki Pauri is iconic. Every evening, thousands gather on the ghats as flames, chants, and devotion fill the air. But Haridwar is more than just that.

You can also:

• Ride ropeways to Mansa Devi and Chandi Devi temples
• Visit Bharat Mata Mandir and Daksha Mahadev Temple
• Take a purifying dip in the Ganga
• Explore local ashrams for satsangs or spiritual talks

We often combine Haridwar with Rishikesh or Char Dham packages, depending on how long you’re planning to stay.

Kaichi Dham: The Peaceful Power of Neem Karoli Baba
In the hills near Nainital, there’s a small temple that has quietly become a global magnet for spiritual seekers. Kaichi Dham, the ashram of Neem Karoli Baba, is not a tourist place. It’s simple, pure, and powerful. Visitors from across the world — including big names like Steve Jobs and Mark Zuckerberg — have come here looking for answers. Many say they found them.

You can visit Kaichi Dham as a standalone tour or combine it with:

Nainital for a relaxed mountain stay
Mukteshwar for temples and peace
Jageshwar for deeper spiritual vibes

We arrange everything from local transport to basic stays, with full support for families, solo travelers, or foreigners looking for deeper connection.

Jageshwar: The Temple Town in the Pines
Near Almora, hidden in a dense pine forest, lies Jageshwar Dham — an ancient temple complex with over 100 stone shrines. It’s quiet, untouched, and full of old-world energy. This place isn’t about crowds. It’s about presence. Most travelers leave feeling lighter — like something inside has shifted. A lot of people combine Kasar Devi with Jageshwar, staying in simple homestays or heritage guesthouses. If you’re looking for a peaceful spiritual retreat in Uttarakhand that’s off the tourist trail, this is it.

Panch Kedar: For True Shiva Devotees
If you’re up for a deeper, more rugged spiritual tour, consider the Panch Kedar temples. These five remote shrines are all dedicated to Lord Shiva:

Kedarnath
Tungnath – the highest Shiva temple on Earth
Madhyamaheshwar
Rudranath
Kalpeshwar

Some of these require trekking, but the experience is rare and personal. These are journeys that leave a mark on the heart, not just the memory card. We handle all trekking logistics, porters, basic stays, and route planning for safe and smooth travel.

Other Sacred Spots Worth Visiting
There’s no shortage of powerful places in Uttarakhand. A few more to consider:

Hemkund Sahib – high-altitude Sikh shrine near Valley of Flowers
Patal Bhuvaneshwar – mystical underground cave temple in Kumaon
Golu Devta Temple (Ghorakhal) – where devotees write letters for justice
Surkanda Devi – a beautiful temple with panoramic Himalayan views

These can be added to custom spiritual itineraries depending on your interest and comfort level.

Why Choose Us for Spiritual Tours in Uttarakhand?
We’re not just booking agents. We’re locals who’ve spent years helping people navigate the spiritual side of this land. We offer:

• Senior-friendly tour plans
• Private or small group travel
• Comfortable hotels and clean vegetarian food
• Flexible plans that move at your pace
• Honest advice and full support — no drama`,
`Top Snowfall Spots in Uttarakhand
Uttarakhand has some of the best places to enjoy snowfall in India. Auli is great for skiing and snow views, while Mussoorie gets all cozy with snow-covered streets. Nainital looks even more beautiful with snow around the lake, and Chopta is perfect if you want a peaceful, snow-filled getaway. Each spot offers a chance to relax and enjoy the snow without the crowds.

Read Less
If you’ve ever dreamed of waking up to a blanket of snow, building snowmen with your kids, or simply sipping hot cocoa by a warm fire while watching the snowflakes fall, Uttarakhand is the place to be. This beautiful state in the Himalayas offers some of the best snowfall spots in India, perfect for a relaxing family vacation.

Uttarakhand’s snow-covered peaks, picturesque towns, and peaceful surroundings make it an ideal destination for families who want to enjoy a laid-back, snowy getaway. Whether you’re looking for fun snow activities or just a quiet spot to enjoy the beauty of winter, Uttarakhand has something special for everyone.

At Travel Vaidya, we specialize in helping families plan the perfect snowy escape. We take care of all the details so you can focus on what really matters—making memories with your loved ones. Here are some of the best snowfall spots in Uttarakhand where you can enjoy a winter holiday like no other.

Auli: Skiing, Snow, and Fun for the Whole Family

If you’re looking for a spot that offers a mix of adventure and relaxation, Auli should be at the top of your list. Known for its skiing slopes, Auli is a great place for families to enjoy snow, even if you’re not into skiing. The beautiful snow-capped mountains, especially the views of Nanda Devi and Trishul, are something you’ll never forget.

Auli’s gentle slopes make it perfect for beginners, and you can take a skiing lesson as a family. If skiing isn’t your thing, there’s still plenty to do. You can take a peaceful walk through the snow-covered meadows, enjoy a cable car ride with a stunning view, or just relax at one of the cozy resorts with a cup of tea while the snow falls outside. The best time to visit Auli for snow is from December to March, when the whole place is blanketed in white, making it look like something out of a postcard. It’s a perfect spot for some winter family fun.

Mussoorie: Snowfall with a View

Mussoorie, also known as the “Queen of the Hills,” is one of Uttarakhand’s most charming hill stations. When it snows here, the whole town takes on a magical charm. The town is bustling in summer, but in winter, it turns into a peaceful snow-covered paradise, especially from December to February.

Take a stroll on The Mall Road with snowflakes falling around you, and enjoy the calm, festive atmosphere. Head to Kempty Falls for a unique winter experience, where the waterfall is surrounded by snow, and the whole area feels like a hidden winter wonderland. If you’re looking for a more peaceful spot, Dhanaulti (just a short drive from Mussoorie) is perfect. It’s quieter and less crowded, making it ideal for families who want to enjoy the snow in peace. You can build snowmen, have snowball fights, and just enjoy the winter scenery.

Nainital: A Snowy Lakefront Escape

Nainital is well-known for its serene lakes and beautiful hill views, but it turns into a winter wonderland when the snow falls. From December to February, the town gets covered in a light dusting of snow, creating a picture-perfect scene, especially around Naini Lake.

The best way to experience Nainital in the winter is by taking a boat ride on Naini Lake, with the snow-covered hills surrounding the water. The snow-covered Snow View Point offers some of the best views of the Himalayas, and it’s a great spot for families to relax, take photos, and enjoy the beauty of winter. For a quieter snow experience, head to Tiffin Top, a hilltop spot that gives you a panoramic view of Nainital and the surrounding snow-capped peaks. It’s a perfect place to spend time with your family and enjoy the peaceful atmosphere.

Kausani: Peace, Snow, and Stunning Views

If you’re looking for a more peaceful, off-the-beaten-path destination for snowfall, Kausani is a hidden gem. Located in the Almora district, Kausani offers spectacular views of the Himalayas, especially during the winter months (from December to February).

While Kausani may not be as popular as other destinations, its beauty makes up for it. You can relax in one of the cozy guesthouses or cottages, take a walk through the snow, and simply enjoy the views of the snow-covered peaks. The town is calm, quiet, and perfect for families who want to get away from the crowds.

Munsyari: Snow and Seclusion

For families who love nature and want to enjoy snowfall without the crowds, Munsyari is a fantastic choice. Located in the Pithoragarh district, this remote destination offers breathtaking views of the Trishul and Nanda Devi peaks, making it a dream destination for nature lovers.

Munsyari’s snowfall season is from December to March, and the area is perfect for families who enjoy a more secluded experience. The town has a peaceful vibe, making it an ideal place to escape the hustle and bustle of everyday life. You can take leisurely walks in the snow, relax by the river, or enjoy a simple day with your family in the midst of snow-capped mountains.

Chopta: The Mini Switzerland of India

If you’re looking for a snowy adventure, Chopta is often called the “Mini Switzerland of India” for good reason. This beautiful destination, located in the Garhwal region, offers plenty of snow, especially from December to March. Whether you’re trekking, skiing, or simply exploring, Chopta is great for families looking to enjoy the snow and have some fun.

The Tungnath Temple trek is popular here, and it’s a perfect spot for families who want to enjoy a spiritual experience along with snow activities. You can also try skiing or just enjoy a peaceful snow walk with your family. The untouched beauty of Chopta makes it an amazing spot to relax, have fun, and enjoy nature.

Snowy Family Fun in Uttarakhand

Uttarakhand has a lot to offer for families looking to enjoy a laid-back winter holiday surrounded by snow. Whether you’re skiing in Auli, relaxing in Mussoorie, or enjoying the peaceful beauty of Kausani, there’s no shortage of places to explore. The snow-covered landscapes, fresh mountain air, and cozy accommodations make Uttarakhand the perfect family destination.

At Travel Vaidya, we specialize in helping families plan the best snowy vacations in Uttarakhand. We’ll take care of the details so you can focus on having fun and making memories with your family. So, pack your bags, get ready for some snowy adventures, and let Uttarakhand show you the magic of winter!`
];

  try {
    // 2. Process each chunk
    for (const chunk of chunks) {
      // Generate Embedding
      const embeddingResponse = await openai.embeddings.create({
        model: 'text-embedding-3-small',
        input: chunk.replace(/\n/g, ' '),
      });

      const embedding = embeddingResponse.data[0].embedding;

      // Save to Supabase
      const { error } = await supabase.from('documents').insert({
        content: chunk,
        metadata: { title },
        embedding,
      });

      if (error) throw error;
    }

    return NextResponse.json({ success: true, message: `Added ${chunks.length} chunks.` });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(req: Request) {
    return NextResponse.json({ success: true, message: 'Ingest endpoint' });
}