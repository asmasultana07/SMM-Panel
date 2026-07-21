// src/components/WorkingProcess.jsx
import React from 'react';
import { workingProcessSteps } from '@/constants/data';
import { FiUserPlus, FiCreditCard, FiSettings, FiShoppingBag } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';


// import Image from "next/image";
// import vec1 from "@/assets/vector1.png";
// import vec2 from "@/assets/Vector2.png";
// import vec3 from "@/assets/vector3.png";
// import vec4 from "@/assets/vector4.png";
// import vector from "@/assets/Vector 1670.png";

const icons = [FiUserPlus, FiCreditCard, FiSettings, FiShoppingBag];

export default function WorkingProcess() {
  return (
    <section className="py-20 bg-[#fdfaf7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-3 mb-20">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-gray-700 uppercase">
            <HiSparkles className="text-orange-500" />
            WORKING PROCESS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
            Easy Steps to Social Media <br className="hidden sm:block" /> Growth By HQ PROMO
          </h2>
        </div>

        {/* Process Cards Wrapper */}
        <div className="relative">

          {/* Connecting Line (Only visible on desktop lg screen) */}
          <div className="hidden lg:block absolute top-[18px] left-[10%] right-[10%] h-[1px] bg-gray-300 -z-0" />

          {/* Cards Grid System */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {workingProcessSteps.map((item, index) => {
              const IconComponent = icons[index];

              return (
                <div key={index} className="flex flex-col items-center">

                  {/* Step Pill Badge */}
                  <div
                    className="px-5 py-1.5 rounded-full text-white text-xs font-bold uppercase tracking-wider transform -rotate-12 shadow-md mb-6"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.step}
                  </div>

                  {/* Vertical Connecting Pin Line */}
                  <div
                    className="w-0 h-6 border-l-2 border-dashed mb-2 hidden lg:block"
                    style={{ borderColor: item.color }}
                  />

                  {/* Card Container */}
                  <div
                    className={`w-full min-h-[360px] rounded-3xl transition-all duration-300 flex flex-col items-center text-center justify-between shadow-lg overflow-hidden ${
                      item.isActive
                        ? 'p-8 bg-gradient-to-b from-[#2a1708] via-[#421c03] to-[#d95d00] text-white shadow-orange-950/20'
                        : 'text-gray-800 border border-gray-100 hover:shadow-xl'
                    }`}
                  >
                    {/* Top Icon Area */}
                    <div className={`relative w-full flex justify-center ${item.isActive ? 'pt-2' : 'pt-10 pb-4'}`}>
                      {!item.isActive && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140%] h-28 bg-gray-100 rounded-b-[100%]" />
                      )}
                      <div
                        className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transform rotate-45 transition-transform hover:rotate-0 duration-300 ${
                          item.isActive ? 'shadow-lg' : 'bg-white border border-gray-100 shadow-sm'
                        }`}
                        style={item.isActive ? { background: `linear-gradient(135deg, ${item.color}, #8B1A4A)` } : {}}
                      >
                        <div className="transform -rotate-45">
                          <IconComponent size={24} color={item.isActive ? '#ffffff' : item.color} />
                        </div>
                      </div>
                    </div>

                    {/* Card Body (Title & Description) */}
                    <div className={`space-y-3 my-auto ${item.isActive ? 'pt-6' : 'px-6 pb-8'}`}>
                      <h3 className={`text-lg font-bold ${item.isActive ? 'text-white' : 'text-gray-900'}`}>
                        {item.title}
                      </h3>
                      <p className={`text-xs leading-relaxed ${item.isActive ? 'text-orange-100/80' : 'text-gray-500'}`}>
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
