"use client";
import NavHeader from "@/components/common/NavHeader";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import '../components/common/NavHeader.css';
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function Home() {
  return (
    <div className="mb-10">
      <NavHeader path="/" className="header_bg" navigationData={[]} />
      <div className="flex justify-center">
        <Image className="my-4 rounded-md" src={"https://travelvaidya.com/wp-content/uploads/2025/08/Travel-vaidya-banner-image.webp"} alt="TV" width={1290} height={600} />
      </div>
      <div className="text-center bg-[#FFF7E1] py-16 rounded-md max-w-322.5 self-center mx-auto my-8">
        <p className="text-[28px] font-bold tracking-[-.5px] font-['Poppins',sans-serif]">Why Thousands trust Travel Vaidya for Uttarakhand Tours?</p>
        <div className="max-w-22.5 mx-auto">
          <Separator className="border border-black" />
        </div>
        <p className="my-8 max-w-222.5 text-center mx-auto">Travel Vaidya is a Dehradun-based helicopter tour agency specializing in Char Dham Yatra by helicopter and road tour packages across Uttarakhand. Since 2015, we’ve supported families, NRIs, and elderly travellers with safe Kedarnath and Badrinath helicopter tours, private taxis, verified hotels, and smooth temple visits. We also plan customised trips to Mussoorie, Auli, Chopta, Nainital, and Jim Corbett with trusted local expertise and reliable on-ground support.</p>
        <p className="text-[15px] tracking-[5.5px] font-thin font-['Poppins',sans-serif] mt-16">FEATURED IN MEDIA</p>
        <div className="max-w-52.5 mx-auto">
          <Separator className="border border-black" />
        </div>
        <div className="my-8">
          <div className="flex gap-16 items-center justify-center">
            <Image src={"https://travelvaidya.com/wp-content/uploads/2025/03/3-3.png.webp"} alt="sdf" width={200} height={75} />
            <Image src={"https://travelvaidya.com/wp-content/uploads/2025/03/Adobe-Express-file.png.webp"} alt="sdf" width={200} height={75} />
            <Image src={"https://travelvaidya.com/wp-content/uploads/2025/03/4-1-1.png.webp"} alt="sdf" width={200} height={75} />
          </div>
          <div className="flex gap-16 items-center justify-center mt-8">
            <Image src={"https://travelvaidya.com/wp-content/uploads/2025/04/Adobe-Express-file.png.webp"} alt="sdf" width={200} height={75} />
            <Image className="mt-4" src={"https://travelvaidya.com/wp-content/uploads/2025/04/Adobe-Express-file-1.png.webp" } alt="sdf" width={200} height={75} />
          </div>
        </div>
      </div>
      <div className="my-16 max-w-322.5 self-center mx-auto">
        <p className="text-3xl font-extrabold tracking-[-.5px] font-['Poppins',sans-serif]">Discover Uttarakhand: Region by Region</p>
        <p className="mt-8">Garhwal and Kumaon are the two iconic regions of Uttarakhand each offering diverse landscapes and experiences. This map helps you to identify which key destinations are located each region. Get a clear view of the state’s geography to plan your next Himalayan journey.</p>
        <p className="flex mt-4 items-center font-bold text-blue-500 hover:text-black cursor-pointer">Read More <ArrowRight className="ml-2" size={18} /></p>
        <div className="my-8">
          <Image className="self-center mx-auto" src={"https://travelvaidya.com/wp-content/uploads/2025/04/ChatGPT-Image-Apr-25-2025-01_43_43-PM.webp"} alt="sdf" width={800} height={550} />
        </div>
      </div>
      <div className="my-16 max-w-322.5 self-center mx-auto">
        <p className="text-3xl font-extrabold tracking-[-.5px] font-['Poppins',sans-serif]">Char Dham Yatra by Helicopter Packages</p>
        <p className="mt-8">Char Dham Yatra by helicopter is the most time-efficient and comfortable way to visit Yamunotri, Gangotri, Kedarnath, and Badrinath. This 5 night & 6 day spiritual journey starts from Dehradun and includes VIP assistance, helicopter transfers, hotel stays, meals, and dedicated ground support.</p>
        <p className="flex mt-4 items-center font-bold text-blue-500 hover:text-black cursor-pointer">Read More <ArrowRight className="ml-2" size={18} /></p>
        <div className="my-8">
          <Carousel className="w-full self-center mx-auto">
            <CarouselContent className="-ml-1">
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2024/12/12-8.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025-2.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025-1.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2024/12/12-8.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025-2.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselIndicator />
          </Carousel>
          <div className="px-8 py-2 border-black border-1 max-w-fit rounded-full flex justify-center items-center ml-auto mt-8">
            <p className="text-xl">View All Tours</p>
          </div>
        </div>
      </div>
      <div className="my-16 max-w-322.5 self-center mx-auto">
        <p className="text-3xl font-extrabold tracking-[-.5px] font-['Poppins',sans-serif]">Char Dham Yatra Packages by Road</p>
        <p className="mt-8">Char Dham Yatra packages make it easier to visit the four sacred temples — Badrinath, Kedarnath, Gangotri, and Yamunotri — in the mountains of Uttarakhand. It’s a peaceful and powerful journey that brings in a lot of devotees every year.</p>
        <p className="flex mt-4 items-center font-bold text-blue-500 hover:text-black cursor-pointer">Read More <ArrowRight className="ml-2" size={18} /></p>
        <div className="my-8">
          <Carousel className="w-full self-center mx-auto">
            <CarouselContent className="-ml-1">
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2024/12/12-8.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025-2.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025-1.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2024/12/12-8.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
                <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div  className={`w-100 h-62.5 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/04/CD2025-2.png.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <div className="px-3 py-1 text-bold text-black bg-white rounded-md max-w-fit">6-Day Tour</div>
                      <p className="text-2xl font-bold text-white mt-2 max-w-80">Char Dham Yatra by Helicopter from Dehradun</p>
                    </div>
                  </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselIndicator />
          </Carousel>
          <div className="px-8 py-2 border-black border-1 max-w-fit rounded-full flex justify-center items-center ml-auto mt-8">
            <p className="text-xl">View All Tours</p>
          </div>
        </div>
      </div>
      <div className="my-16 max-w-322.5 self-center mx-auto bg-gradient-to-b from-[#D6EAFF] to-[#F0F9FF] rounded-md py-16 px-8">
        <p className="text-3xl font-extrabold tracking-[-.5px] font-['Poppins',sans-serif]">Top Places to See In Uttarakhand</p>
        <p className="mt-8">Uttarakhand is a state full of nature, spirituality, and culture. From the holy banks of the Ganga to snow-covered peaks and quiet mountain towns, there are many beautiful places to see in Uttarakhand. Whether you want a peaceful holiday, a spiritual journey, or a mountain adventure, this guide will help you choose the best places for your next trip.</p>
        <p className="flex mt-4 items-center font-bold text-blue-500 hover:text-black cursor-pointer">Read More <ArrowRight className="ml-2" size={18} /></p>
        <div className="my-8">
          <Carousel className="w-full self-center mx-auto">
            <CarouselContent className="-ml-1">
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
               <CarouselItem  className="pl-1 md:basis-1/2 lg:basis-1/3 max-w-fit mr-6">
                  <div className="max-w-fit">
                    <div  className={`w-[255px] h-[280px] object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pt-30 pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-28 text-center">Haridwar</p>
                    </div>
                    <div className={`w-[255px] h-[280px] mt-4 object-cover bg-[url(https://travelvaidya.com/wp-content/uploads/2025/02/1-31.webp)] bg-cover bg-center bg-no-repeat rounded-md pl-4`}>
                      <p className="text-3xl font-extrabold text-white pt-58 text-center">Char Dham</p>
                    </div>
                  </div>
                </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <FloatingWhatsApp phoneNumber="7676" accountName="sdfd" />
    </div>
  );
}
