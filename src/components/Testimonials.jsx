import React, { useState } from 'react';
import { motion } from 'framer-motion';
import quoteIcon from '../assets/figma/quote_icon.svg';
import arrowIcon from '../assets/figma/arrow_icon.svg';

export default function Testimonials({ onLearnMore }) {
  const testimonials = [
    {
      id: 1,
      quote: "That’s when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
      author: "John Doe",
      role: "Founder & CEO",
    },
    {
      id: 2,
      quote: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
      author: "John Doe",
      role: "Founder & CEO",
      isPrimary: true,
    },
    {
      id: 3,
      quote: "We’re here to make intelligent systems accessible, actionable, and aligned with real business goals.",
      author: "John Doe",
      role: "Founder & CEO",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#030303] py-20 md:py-28 relative overflow-hidden font-barlow">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[36px] text-white leading-tight">
            Why We Started
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-between gap-4 md:gap-8 max-w-[1280px] mx-auto">
          {/* Previous Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="w-12 h-12 shrink-0 rounded-full bg-[#1C1C1C] border border-[#262626] flex items-center justify-center text-white hover:border-[#0A84FF] hover:bg-[#252525] transition-all cursor-pointer z-20 group"
            aria-label="Previous quote"
          >
            <img 
              src={arrowIcon} 
              alt="Previous" 
              className="w-7 h-7 object-contain transform rotate-180 opacity-80 group-hover:opacity-100" 
            />
          </motion.button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 w-full relative z-10 py-4">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] border border-[#0A84FF]/40 shadow-2xl shadow-[#0A84FF]/10 scale-[1.02]'
                      : 'bg-[#0E0E0E] border border-[#262626]/50 opacity-80 hover:opacity-100'
                  }`}
                >
                  {/* Flanked Quote Icon */}
                  <div className="flex items-center justify-center gap-4 w-full mb-6">
                    <div 
                      className={`h-[1px] flex-1 ${
                        isActive ? 'bg-[#616161]' : 'bg-[#262626]'
                      }`} 
                    />
                    <img 
                      src={quoteIcon} 
                      alt="Quote icon" 
                      className="w-11 h-11 object-contain" 
                    />
                    <div 
                      className={`h-[1px] flex-1 ${
                        isActive ? 'bg-[#616161]' : 'bg-[#262626]'
                      }`} 
                    />
                  </div>

                  {/* Quote text */}
                  <p className="font-lexend font-normal text-[16px] leading-[1.6em] text-white mb-8 min-h-[76px] flex items-center justify-center">
                    "{item.quote}"
                  </p>

                  {/* Author */}
                  <div className="flex flex-col items-center">
                    <span className="font-lexend font-medium text-[16px] text-[#0A84FF] leading-tight">
                      {item.author}
                    </span>
                    <span className="font-lexend font-normal text-[11px] text-[#0A84FF]/80 tracking-wider uppercase mt-1">
                      {item.role}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Next Arrow Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="w-12 h-12 shrink-0 rounded-full bg-[#1C1C1C] border border-[#262626] flex items-center justify-center text-white hover:border-[#0A84FF] hover:bg-[#252525] transition-all cursor-pointer z-20 group"
            aria-label="Next quote"
          >
            <img 
              src={arrowIcon} 
              alt="Next" 
              className="w-7 h-7 object-contain opacity-80 group-hover:opacity-100" 
            />
          </motion.button>
        </div>

        {/* Learn More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12 md:mt-16"
        >
          <button
            onClick={onLearnMore}
            className="w-[165px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] leading-[14px] text-center rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/30 cursor-pointer"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
