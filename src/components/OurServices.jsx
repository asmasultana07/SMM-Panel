'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { platforms } from '@/constants/data';
import plus from '@/assets/plus.png';
import Character from '@/assets/hero3.png';

const OurServices = () => {
  const [activeKey, setActiveKey] = useState(platforms[0].key);
  const active = platforms.find((p) => p.key === activeKey);

  return (
    <section className="relative py-16 lg:py-24 overflow-hidden">
      <div className="px-6 sm:px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center gap-2 font-semibold">
            <Image src={plus} alt="" className="w-4 h-4" />
            <p className="text-sm">our services</p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight" >
            Powerful SMM Services for Fast Growth
          </h2>
          <p className="text-sm sm:text-base text-[#494949] max-w-3xl mx-auto leading-relaxed" >
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all major platforms. From Facebook to TikTok, we've got you covered.
          </p>
        </div>

        {/* Platform Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-center gap-2 mb-10">
          {platforms.map((platform) => {
            const isActive = platform.key === activeKey;
            const Icon = platform.icon;
            return (
              <button
                key={platform.key}
                type="button"
                onClick={() => setActiveKey(platform.key)}
                className={`flex items-center gap-2.5 pl-2.5 pr-5 py-2 rounded-lg border text-sm font-semibold transition-colors duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white border-transparent bg-[linear-gradient(to_right,#fbbd08_0%,#F47B20_25%,#C4272E_50%,#8B1A4A_75%,#3D1053_100%)] shadow-[4px_4px_10px_rgba(251,189,8,0.2)]'
                    : 'text-gray-800 bg-white border-[#F47B20]/50'
                }`}
              >
                <span
                  className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.2)' : platform.iconBg }}
                >
                  <Icon
                    size={13}
                    className={isActive ? 'text-white' : platform.key === 'snapchat' ? 'text-black' : 'text-white'}
                  />
                </span>
                {platform.name}
              </button>
            );
          })}
        </div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="bg-white border border-gray-100 rounded-3xl shadow-lg shadow-gray-100/60 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* left- Image */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[260px] aspect-square bg-[linear-gradient(to_bottom,#df681b_13%,#9c0d13_47%,#37092a_79%,#000000_93%)] rounded-2xl overflow-hidden">
                  <Image
                    src={Character}
                    alt={active.name}
                    className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[85%] h-auto object-contain"
                  />
                </div>
              </div>

              {/*right-  Content */}
              <div className="lg:col-span-8 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{active.heading}</h3>
                <p className="text-sm sm:text-base text-[#494949] leading-relaxed">{active.description}</p>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-lg
                  bg-[linear-gradient(to_right,#fbbd08_0%,#F47B20_25%,#C4272E_50%,#8B1A4A_75%,#3D1053_100%)]
                  hover:bg-[linear-gradient(to_right,#F47B20,#fbbd08)] shadow-[4px_4px_10px_rgba(251,189,8,0.2)] transition-colors duration-300"
                >
                  View {active.name} Services
                  <FaArrowRight size={12} />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OurServices;
