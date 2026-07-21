
'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { services } from '@/constants/data';
import { FaStar } from 'react-icons/fa';
import Button from '@/components/ui/Button';

const PromotionServices = () => {
  // Container variant for staggering children animations smoothly
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  // Individual card variant (uses hardware-accelerated opacity & y-axis translation)
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: 'easeOut' } 
    }
  };

  return (
    <section className="py-20">   
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className=" text-3xl sm:text-4xl font-bold leading-tight"
          >
            <p>Promotion Services for </p>
            <p>Every Stage of Your Growth</p>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm sm:text-base text-[#494949] max-w-2xl mx-auto leading-relaxed"
          >
            Supporting artists, creators, businesses, and brands with professional promotion across social media, music, radio, digital publications, and marketing channels.
          </motion.p>
        </div>


        {/* Mobile: 1 col | Tablet: 2 cols | Laptop: 3 cols | Desktop: 4 or 5 cols dynamic split */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
 
      {services.slice(0, 4).map((service, index) => {
      return (
      <motion.div
      key={index}
      variants={cardVariants}
      whileHover={{ y: -8, shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
      className="bg-white p-6 rounded-2xl border border-gray-200 flex flex-col justify-between transition-shadow duration-300
       shadow-md shadow-gray-500/10  
        opacity-95 group-hover:opacity-100 transition-opacity cursor-pointer"
    >
      <div className="space-y-5 text-center">        
        <div className="flex flex-col items-center gap-3">
          <Image 
            src={service.image} 
            alt={service.platform}
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110" 
          />
          <h3 className="text-lg font-bold text-gray-900">{service.platform}</h3>
        </div>
        
        {/* Rating Profile */}
        <div className="flex items-center gap-1 justify-center">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-[#ff8e00]" size={13} />
          ))}
          <span className="text-[11px] font-semibold text-[#494949] ml-1">(2,725)</span>
        </div>

        {/* Pricing Details */}
        <div>
          <div className="text-xl font-bold mb-4">
            ${service.price.toFixed(2)} per month
          </div> 
          <p className="text-xs text-[#494949] rounded-lg px-2 py-1 bg-[#00B65C]/15 ">
            {service.details}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="pt-6">
        <div className=" bg-[linear-gradient(to_right,#fbbd08_0%,#F47B20_25%,#C4272E_50%,#8B1A4A_75%,#3D1053_100%)]
       hover:bg-[linear-gradient(to_right,#F47B20,#fbbd08)] shadow-[4px_4px_10px_rgba(251,189,8,0.2)] 
       rounded-full text-white flex items-center justify-center  w-full py-2.5 text-xs font-semibold"
        >
          Buy now
          </div>
       </div>
    </motion.div>
  )
})}
        </motion.div>

        {/* Carousel */}
        <div className="flex justify-center gap-2 pt-12">
          <div className="w-8 h-3 rounded-full bg-[linear-gradient(to_right,#fbbd08_0%,#F47B20_25%,#C4272E_50%,#8B1A4A_75%,#3D1053_100%)]
           transition-all duration-300" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-5 h-3 rounded-full bg-gray-300 hover:bg-gray-400 cursor-pointer transition-colors" />
          ))}
        </div>
    </section>
  );
}

export default PromotionServices;