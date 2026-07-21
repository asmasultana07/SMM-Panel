"use client";
import React from 'react'
import { motion } from "framer-motion";
import Image from "next/image";
import Character from "@/assets/hero.png";
import Rocket from "@/assets/rocket-model 1.png";
import Users from "@/assets/users.png";
import plus from "@/assets/plus.png";
import check from "@/assets/check.png";
import Button from "@/components/ui/Button";


const AboutUs = () => {

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden ">
         
          <div className="px-6 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: */}
           <div className="lg:col-span-6 space-y-4">
            <div className='flex gap-2 text-sm font-semibold'>
               <Image src={plus} alt="plus" /> 
               <p>About SMM PANEL</p>
            </div>
            <h1 className='font-bold text-2xl'>Who We Are</h1>
            <p className='text-[#494949]'>At SMM PANEL, we believe social media growth is more than just likes and followers. We provide fast, reliable, and affordable SMM services that help creators, businesses, agencies, and resellers build a stronger online presence across every major platform.</p>
            <div className='text-lg text-[#494949] flex gap-2'>
              <Image src={check} alt="check" /><p>Fast Delivery with Smooth and Reliable Performance</p>
            </div>
              <div className='text-lg text-[#494949] flex gap-2'>
                <Image src={check} alt="check" /><p>Real & High-Quality Engagement to Build Strong Social Proof</p>
              </div>
              <div className='text-lg text-[#494949] flex gap-2 mb-6'>
              <Image src={check} alt="check" className="" /><p>Safe, Secure & High Retention for Long-Term Growth</p>
            </div>
            <Button> Learn More About Us {'>'} </Button>
           </div>
    
            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-6 py-4 flex justify-center lg:justify-center relative w-full"
            >
              
              <div className="relative w-full max-w-[360px] sm:max-w-[450px] sm:max-h-[500px] aspect-[4/5]  bg-[linear-gradient(to_bottom,#9D2F0E_27%,#070405_82%)] 
                        rounded-[2.5rem] shadow-2xl transition-shadow cursor-pointer overflow-visible" >
                {/* Character */}
                <Image
                  src={Character}
                  alt="character"
                  width={420}
                  height={620}
                  priority
                  className="absolute left-1/2 -translate-x-1/2 -top-20 z-10"
                /> 
    
                {/* Trusted Users */}
                <div className="absolute -bottom-10 left-10 md:left-22 z-20 bg-white/40 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl">
                  <Image src={Users} alt="users" className="w-24" />
                  <h4 className="font-bold mt-2"> Trusted by 68K users </h4>
                </div>
    
                {/* Rocket */}
                <Image 
                  src={Rocket}
                  alt="rocket"
                  className="absolute -right-20 -bottom-20 z-20 w-60 md:w-70"
                />
              </div>
            </motion.div>
          </div>
        </section>
  )
}

export default AboutUs