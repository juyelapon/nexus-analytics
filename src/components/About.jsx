import React from 'react';
import { motion } from 'framer-motion';
import qualityIcon from '../assets/figma/quality_icon.svg';

export default function About() {
  const pillars = [
    {
      id: 'innovation',
      title: 'Innovation',
      description: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.',
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      description: 'Working closely with clients to develop tailored solutions that drive measurable success.',
    },
    {
      id: 'excellence',
      title: 'Excellence',
      description: 'Maintaining the highest standards in code quality, system performance, and client outcomes.',
    },
    {
      id: 'integrity',
      title: 'Integrity',
      description: 'Operating with transparency and ethical considerations at the forefront of all decisions.',
    },
  ];

  return (
    <section id="about" className="w-full bg-[#030303] py-20 md:py-28 relative overflow-hidden font-barlow">
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
            Why Choose Us
          </h2>
        </motion.div>

        {/* 4 Circular Cards - Figma Node 31:3897 */}
        <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-6 lg:gap-[-15px] xl:gap-2">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.06, y: -6 }}
              className="w-[280px] h-[280px] rounded-full bg-[#141414] border-[10px] border-[#000000] px-[42px] flex flex-col justify-center items-center text-center gap-4 transition-colors duration-300 hover:border-[#0A84FF]/40 shadow-xl group cursor-default"
              style={{
                zIndex: idx + 1,
              }}
            >
              {/* Quality Icon from Figma */}
              <div className="w-[34px] h-[34px] flex items-center justify-center transform group-hover:scale-115 transition-transform duration-300">
                <img 
                  src={qualityIcon} 
                  alt={`${pillar.title} icon`} 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(10,132,255,0.4)]" 
                />
              </div>

              {/* Title */}
              <h3 className="font-barlow font-medium text-[20px] text-white leading-tight group-hover:text-[#0A84FF] transition-colors">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="font-barlow font-normal text-[14px] leading-[20px] text-white/80">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
