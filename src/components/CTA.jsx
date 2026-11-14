import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA({ onOpenContact }) {
  return (
    <section className="w-full bg-[#030303] py-20 md:py-28 relative overflow-hidden font-barlow">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        {/* Glow behind the CTA card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[36px] p-8 sm:p-12 md:p-16 lg:p-20 overflow-hidden text-center flex flex-col items-center border border-[#262626]/80"
          style={{
            background: 'linear-gradient(180deg, #181818 0%, #0E0E0E 100%)',
          }}
        >
          {/* Radial Ambient Accent */}
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.35, 0.5, 0.35]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full pointer-events-none blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(10, 132, 255, 0.9) 0%, rgba(137, 97, 255, 0.4) 100%)'
            }}
          />

          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-[#0A84FF]/10 border border-[#0A84FF]/30 px-4 py-1.5 rounded-full text-[#0A84FF] font-barlow font-semibold text-[13px] uppercase tracking-wider mb-6 relative z-10">
            <Sparkles size={14} />
            <span>Ready for Breakthrough Results?</span>
          </div>

          {/* Title */}
          <h2 className="font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-white leading-tight tracking-tight max-w-3xl relative z-10 mb-6">
            Transform Your Enterprise Data into Unfair Competitive Advantage
          </h2>

          {/* Description */}
          <p className="font-barlow font-normal text-[18px] sm:text-[20px] leading-[30px] text-white/80 max-w-2xl relative z-10 mb-10">
            Get in touch with our team to discuss how we can help architect, build, and deploy production-grade AI systems tailored to your business goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 bg-[#0A84FF] hover:bg-[#0070df] text-white font-barlow font-bold text-[15px] leading-tight text-center rounded-[10px] transition-all shadow-xl shadow-[#0A84FF]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get In Touch Now</span>
              <ArrowRight size={18} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#services"
              className="w-full sm:w-auto px-8 py-4 bg-[#1C1C1C] hover:bg-[#252525] border border-[#262626] text-white font-barlow font-semibold text-[15px] leading-tight text-center rounded-[10px] transition-all"
            >
              Explore Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
