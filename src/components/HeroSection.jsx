"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff, FiStar } from "react-icons/fi";
import Image from "next/image";
import Button from "@/components/ui/Button";

import Character from "@/assets/hero.png";
import Rocket from "@/assets/rocket-model 1.png";
import Users from "@/assets/users.png";
import Instagram from "@/assets/skill-icons_instagram.png";


const HeroSection = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Animation variants (Performance friendly - translation & opacity uses hardware acceleration)
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageHover = {
    hover: {
      y: -10,
      rotate: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden ">
     
      <div className="px-6 sm:px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading, Subtext & Form */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="lg:col-span-6 space-y-6"
        >
          <Image src={Instagram} alt="" className="absolute top-10 md:top-30 md:left-140 z-10"/>
          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15]"
          >
            Grow Faster with SMM PANEL Across Every Social Platform
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-sm sm:text-base text-[#494949] leading-relaxed"
          >
            SMM PANEL helps you grow on Instagram, TikTok, YouTube, Facebook, X,
            Spotify, Telegram, Discord, Twitch, and more with fast delivery,
            affordable pricing, and reliable SMM services.
          </motion.p>

          {/* Form Card */}
          <motion.div variants={fadeInUp} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Username Input */}
              <div className="">
                <label className="text-xs font-semibold">User Name</label>
                <input
                  type="text"
                  placeholder="username"
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-[#F47B20] text-[#494949] text-sm bg-white focus:outline-none   "
                />
              </div>

              {/* Password Input */}
              <div className="space-y-1.5 relative">
                <label className="text-xs font-semibold">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="w-full mt-2 px-4 py-3 pr-10 rounded-xl border border-[#F47B20] text-[#494949] text-sm bg-white focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#494949] hover:text-gray-600"
                  >
                    {showPassword ? (
                      <FiEyeOff size={16} />
                    ) : (
                      <FiEye size={16} />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs font-medium text-[#494949]">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="appearance-none w-4 h-4 rounded-full border border-[#F47B20]
                              bg-white cursor-pointer checked:bg-[#F47B20] checked:border-[#F47B20]
                              focus:outline-none focus:ring-2 focus:ring-[#F47B20]/20 transition-all"
                />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-[#F94346] hover:underline">
                Forgot password?
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
              <Button className="px-6 py-6"> Sign In</Button>
              <div
                className="w-full flex items-center justify-center gap-2.5 px-4 py-2 border border-[#F47B20] rounded-xl 
                                text-sm font-semibold bg-white shadow-sm transition-colors"
              >
                <FcGoogle size={22} /> Sign Up with Google
              </div>
            </div>

            {/* Create Account Link */}
            <p className="text-[14px] text-[#494949] pt-1">
              Don't have an account?
              <a
                href="#"
                className="font-semibold text-[#F47B20] hover:underline"
              >
                Create an Account
              </a>
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column: Visual Layout & Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-6 py-4 flex justify-center lg:justify-end relative w-full"
        >
          {/* Main Showcase Image Wrapper with micro-interaction */}
          <motion.div
            variants={imageHover}
            whileHover="hover"
            className="relative w-full max-w-[360px] sm:max-w-[450px] sm:max-h-[500px] aspect-[4/5]  bg-[linear-gradient(to_bottom,#9D2F0E_27%,#070405_82%)] 
            rounded-[2.5rem] shadow-2xl transition-shadow cursor-pointer overflow-visible"
          >
            {/* Character */}
            <Image
              src={Character}
              alt="character"
              width={420}
              height={620}
              priority
              className="absolute left-1/2 -translate-x-1/2 -top-20 z-10"
            />
            {/* Google Review */}
            <div className="absolute -left-5 md:-left-35 top-8 z-20 bg-white rounded-2xl shadow-xl p-2 md:px-6 md:py-4 flex items-center gap-4">
              <FcGoogle size={40} />
              <div>
                <div className="text-[#FFC53D] font-bold text-lg"> ★★★★★ </div>
                <p className="text-sm font-semibold">
                  <span className="text-[#FFC53D]">4.9</span> Reviews
                </p>
              </div>
            </div>

            {/* Trusted Users */}
            <div className="absolute -bottom-10 left-10 md:left-25 z-20 bg-white/40 backdrop-blur-md rounded-2xl px-8 py-6 shadow-xl">
              <Image src={Users} alt="users" className="w-24" />
              <h4 className="font-bold mt-2"> Trusted by 68K users </h4>
            </div>

            {/* Rocket */}
            <Image 
              src={Rocket}
              alt="rocket"
              className="absolute -right-20 -bottom-20 z-20 w-60 md:w-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
