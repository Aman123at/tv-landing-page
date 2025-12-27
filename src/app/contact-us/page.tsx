"use client"
import NavHeader from '@/components/common/NavHeader'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Contact = () => {
  return (
    <div className="mb-10">
      <NavHeader path="/contact-us" className="header_bg" navigationData={[]} />
      <div className='w-full h-[190px] bg-no-repeat bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://travelvaidya.com/wp-content/uploads/2022/09/Mask-Group-1.jpg.webp)] bg-cover bg-center'>
        <p className='pl-8 text-5xl font-extrabold text-white pt-16'>Contact Us</p>
      </div>
      <FloatingWhatsApp phoneNumber="7676" accountName="sdfd" />
      </div>
  )
}

export default Contact