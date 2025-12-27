"use client"
import NavHeader from '@/components/common/NavHeader'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const About = () => {
  return (
       <div className="mb-10">
      <NavHeader path="/about-us" className="header_bg" navigationData={[]} />
      <div className='w-full h-[290px] bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://travelvaidya.com/wp-content/uploads/2025/02/Untitled-design-2025-02-12T183029.253.webp)] bg-cover bg-center'>
        <p className='pl-8 text-5xl font-extrabold text-white pt-20'>About Travel Vaidya</p>
        <p className='pl-8 text-xl pt-4 text-white'>Trusted Travel Partner for Char Dham & Uttarakhand Tours</p>
      </div>
      <FloatingWhatsApp phoneNumber="7676" accountName="sdfd" />
      </div>
  )
}

export default About