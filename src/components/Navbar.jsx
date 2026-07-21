'use client';
import React, { useState } from 'react';
import { navLinks } from '@/constants/data';
import { motion } from "framer-motion";
import { FiLock } from "react-icons/fi";
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Button from '@/components/ui/Button';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='sticky top-0 z-50 mt-8 bg-white border border-gray-100 rounded-xl shadow-sm'>
     <div className='flex gap-4 justify-between items-center px-4 py-2 md:px-6 md:py-3'>
       {/* logo */}
       <div className='shrink-0'>
        <h1 className='text-[#0b0b0b] font-bold text-lg md:text-3xl cursor-pointer'>SMM Panel</h1>
      </div>
      {/* desktop */}
      <div className="hidden md:flex gap-4 md:gap-6 items-center">
          {navLinks.map((link) => (
            <a key={link.name}
               href={link.path}
               onClick={() => setActive(link.name)}
               className={`relative font-semibold transition-colors duration-300 ${
               active === link.name ? 'text-[#F47B20]' : 'text-[#0B0B0B] hover:font-bold'
              }`}
            >
              {link.name} 
            </a>
          ))}
      </div>
      {/* sign button - desktop */}
      <div className="hidden md:block">
        <Button><FiLock /> <span className='pl-2'>Sign In</span>
        </Button>
      </div>

      {/* MObile & tablet - button*/}
      <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 text-2xl p-2">
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
      </div>
     </div>




      
      {/* MObile & tablet -dropdown */}
           {isMenuOpen && (
        <div className="md:hidden border-b w-full border-gray-100 bg-white rounded-b-xl">
          <div className="flex flex-col px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="text-sm font-semibold text-gray-700 hover:text-[#F47B20] p-1 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="flex gap-2 justify-center items-center px-4 py-2 my-2 bg-[linear-gradient(to_right,#FBBD08_0%,#F47B20_25%,#C4272E_50%,#8B1A4A_75%,#3D1053_100%)]
                hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-300 shrink-0">
              <FiLock /> Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar