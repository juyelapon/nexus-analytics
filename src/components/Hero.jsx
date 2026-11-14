import React from 'react';
import { motion } from 'framer-motion';
import heroRobot from '../assets/figma/hero_robot.png';
import client1 from '../assets/figma/client1.png';
import client2 from '../assets/figma/client2.png';
import client3 from '../assets/figma/client3.png';
import company1 from '../assets/figma/company1.svg';
import company2 from '../assets/figma/company2.svg';
import company3 from '../assets/figma/company3.svg';
import company4 from '../assets/figma/company4.svg';
import company5 from '../assets/figma/company5.svg';
import company6 from '../assets/figma/company6.svg';

export default function Hero({ onBookMeeting }) {
  const companies = [
    { id: 1, src: company1, alt: 'Partner Brand 1', width: 100 },
    { id: 2, src: company2, alt: 'Partner Brand 2', width: 146 },
    { id: 3, src: company3, alt: 'Partner Brand 3', width: 102 },
    { id: 4, src: company4, alt: 'Partner Brand 4', width: 126 },
    { id: 5, src: company5, alt: 'Partner Brand 5', width: 115 },
    { id: 6, src: company6, alt: 'Partner Brand 6', width: 139 },
  ];

  return (
    <section className="relative w-full bg-[#030303] overflow-hidden pt-8 md:pt-14 pb-12 font-barlow">
      {/* Background Ambient Glows from Figma */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.65, 0.5]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-40px] right-[10%] w-[420px] h-[420px] rounded-full pointer-events-none blur-[160px]"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 194, 255, 0.4) 0%, rgba(154, 192, 236, 0.8) 100%)'
        }}
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.4, 0.55, 0.4]
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[160px] right-[18%] w-[260px] h-[300px] rounded-full pointer-events-none blur-[100px]"
        style={{
          background: 'linear-gradient(180deg, rgba(24, 75, 255, 0.1) 0%, rgba(23, 74, 255, 0.9) 100%)'
        }}
      />

      {/* Main Hero Container */}
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-h-[580px]">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-start z-10 max-w-[712px]"
          >
            {/* Title with Figma Accent Box */}
            <h1 className="font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[72px] text-white leading-[1.08] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block"
              >
                Transforming
              </motion.span>{' '}
              <motion.span 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="inline-block relative my-1"
              >
                <span 
                  className="bg-[#0A84FF] text-white px-4 py-1 rounded-[16px] inline-block shadow-lg shadow-[#0A84FF]/30"
                >
                  Data into
                </span>
              </motion.span>{' '}
              <br className="hidden sm:inline" />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block"
              >
                Decisions
              </motion.span>
            </h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-barlow font-normal text-[18px] sm:text-[20px] leading-[30px] sm:leading-[32px] text-white/80 mt-6 sm:mt-8 max-w-[547px]"
            >
              Leverage the power of machine learning and AI to unlock insights and drive business growth
            </motion.p>

            {/* CTA Button */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8"
            >
              <button
                onClick={onBookMeeting}
                className="w-[165px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] leading-[14px] text-center rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/30 cursor-pointer"
              >
                Book a Meeting
              </button>
            </motion.div>

            {/* Social Proof / Clients Avatars */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex items-center gap-4 mt-8 pt-2"
            >
              <div className="flex items-center -space-x-2">
                <img 
                  src={client1} 
                  alt="Client avatar 1" 
                  className="w-7 h-7 rounded-full border-2 border-[#030303] object-cover ring-2 ring-[#0A84FF]/20" 
                />
                <img 
                  src={client2} 
                  alt="Client avatar 2" 
                  className="w-7 h-7 rounded-full border-2 border-[#030303] object-cover ring-2 ring-[#0A84FF]/20" 
                />
                <img 
                  src={client3} 
                  alt="Client avatar 3" 
                  className="w-7 h-7 rounded-full border-2 border-[#030303] object-cover ring-2 ring-[#0A84FF]/20" 
                />
              </div>
              <p className="font-inter text-[14px] text-white/80">
                Over <strong className="font-semibold text-white">100+</strong> clients have worked with us
              </p>
            </motion.div>
          </motion.div>

          {/* Right Hero Visual Area with Floating Mascot Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative z-10"
          >
            <div className="relative w-full max-w-[480px] lg:max-w-[560px] aspect-square flex items-center justify-center">
              {/* Subtle back ring glow */}
              <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-2xl transform scale-90" />
              
              <motion.img 
                animate={{ 
                  y: [0, -12, 0],
                  rotate: [0, 1, 0, -1, 0]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                src={heroRobot} 
                alt="Catalyst Analytics AI Intelligence Visualization" 
                className="w-full h-auto max-h-[500px] object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(10,132,255,0.25)]" 
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Companies / Partner Logos Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full mt-16 md:mt-24 py-10 relative"
        style={{
          borderTop: '1px solid transparent',
          borderBottom: '1px solid transparent',
          backgroundImage: 'linear-gradient(#030303, #030303), linear-gradient(90deg, rgba(10, 132, 255, 1) 0%, rgba(137, 97, 255, 1) 100%)',
          backgroundOrigin: 'border-box',
          backgroundClip: 'padding-box, border-box'
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="flex flex-wrap items-center justify-center sm:justify-between gap-8 md:gap-12">
            {companies.map((company, cIdx) => (
              <motion.div 
                key={company.id} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: cIdx * 0.08 }}
                whileHover={{ scale: 1.08 }}
                className="flex items-center justify-center px-4 py-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer"
              >
                <img 
                  src={company.src} 
                  alt={company.alt} 
                  style={{ width: `${company.width}px` }}
                  className="h-10 sm:h-12 object-contain filter brightness-110" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
