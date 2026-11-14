import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Shield, Cpu, Users, Award } from 'lucide-react';
import BookMeetingModal from '../components/BookMeetingModal';

// Figma downloaded assets
import aboutStory1Img from '../assets/figma/about_story1.png';
import aboutStory2Img from '../assets/figma/about_story2.png';
import aboutStory3Img from '../assets/figma/about_story3.png';

export default function About() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  const stats = [
    { label: 'Enterprise Clients', value: '200+', detail: 'Fortune 500 & scaling fintechs' },
    { label: 'Projects Shipped', value: '280+', detail: 'In production across 14 countries' },
    { label: 'Client Retention', value: '100%', detail: 'SLA-backed continuous delivery' },
    { label: 'Years Experience', value: '10+', detail: 'In high-throughput computing' },
  ];

  const values = [
    {
      title: 'Innovation',
      icon: Cpu,
      desc: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions that outpace competition.'
    },
    {
      title: 'Collaboration',
      icon: Users,
      desc: 'Working as embedded technical partners alongside client engineering teams to build tailored, scalable architectures.'
    },
    {
      title: 'Excellence',
      icon: Award,
      desc: 'Maintaining the highest standards in code quality, low-latency performance, and deterministic mathematical accuracy.'
    },
    {
      title: 'Integrity',
      icon: Shield,
      desc: 'Operating with complete transparency, zero-data-retention security protocols, and ethical AI considerations.'
    }
  ];

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden font-barlow">
      {/* 1. HERO BANNER - Exact Figma Node 31:11317 */}
      <section className="relative pt-12 md:pt-20 pb-20 border-b border-[#262626]/40">
        <div 
          className="absolute top-10 left-1/3 w-[550px] h-[300px] rounded-full pointer-events-none opacity-30 blur-[150px]"
          style={{ background: 'radial-gradient(circle, rgba(10, 132, 255, 0.9) 0%, rgba(137, 97, 255, 0.3) 100%)' }}
        />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-[#0A84FF]/10 border border-[#0A84FF]/30 px-3.5 py-1.5 rounded-full text-[#0A84FF] text-[13px] font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                <span>Our Identity & Mission</span>
              </div>
              <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-[64px] text-white leading-[1.1] tracking-tight">
                We’re Engineers of <br className="hidden sm:inline" />
                <span className="text-[#0A84FF]">Intelligent Change</span>
              </h1>
              <p className="font-barlow font-normal text-[18px] sm:text-[20px] leading-[32px] text-white/80 mt-6 max-w-2xl mx-auto">
                Pioneering the intersection of AI, blockchain, and quantitative finance to deliver transformative technological breakthroughs for global enterprises.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-16 border-b border-[#262626]/40 bg-[#080808]">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {stats.map((stat, sIdx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: sIdx * 0.1 }}
                className="text-center"
              >
                <div className="font-barlow font-bold text-4xl sm:text-5xl lg:text-[56px] text-[#0A84FF] leading-none mb-2">
                  {stat.value}
                </div>
                <div className="font-barlow font-semibold text-[17px] text-white">
                  {stat.label}
                </div>
                <div className="font-barlow text-[13px] text-white/60 mt-1">
                  {stat.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="py-24 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Visuals Stack */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 grid grid-cols-2 gap-4"
            >
              <div className="col-span-2 h-72 sm:h-80 rounded-3xl overflow-hidden border border-[#262626] bg-[#111]">
                <img 
                  src={aboutStory1Img} 
                  alt="Catalyst Analytics Headquarters" 
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#262626] bg-[#111]">
                <img 
                  src={aboutStory2Img} 
                  alt="Engineering team collaboration" 
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="h-44 sm:h-48 rounded-2xl overflow-hidden border border-[#262626] bg-[#111]">
                <img 
                  src={aboutStory3Img} 
                  alt="High performance computing lab" 
                  className="w-full h-full object-cover filter brightness-95 hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </motion.div>

            {/* Story Text */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <span className="text-[#0A84FF] font-barlow font-semibold text-[14px] uppercase tracking-wider">
                Our Genesis
              </span>
              <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight mt-2 mb-6">
                Bridging Academic AI with Battle-Tested Enterprise Reliability
              </h2>
              <div className="space-y-4 font-barlow text-[16px] sm:text-[17px] leading-[28px] text-white/80">
                <p>
                  Founded in Austin, Texas, Catalyst Analytics was born out of a single obsession: to bridge the vast gap between academic AI research and resilient, scalable enterprise execution.
                </p>
                <p>
                  While machine learning advancements were publishing at breakneck speed, enterprise organizations struggled to transition prototypes into secure, low-latency production pipelines. We assembled a world-class team of quantitative researchers, distributed systems architects, and cryptography veterans to change that paradigm.
                </p>
                <p>
                  Today, we power the computational intelligence behind top hedge funds, healthcare diagnostic networks, and global supply chains.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. OUR VALUES */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#262626]/40">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight">
              Our Core Values
            </h2>
            <p className="font-barlow font-normal text-[17px] sm:text-[18px] text-white/70 mt-4">
              The fundamental principles guiding every architectural decision and client partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, vIdx) => {
              const IconComp = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: vIdx * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#141414] border border-[#262626] rounded-[32px] p-8 flex flex-col items-center text-center hover:border-[#0A84FF]/50 transition-all duration-300 shadow-xl group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/30 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform">
                    <IconComp size={24} />
                  </div>
                  <h3 className="font-barlow font-semibold text-[22px] text-white mb-3">
                    {val.title}
                  </h3>
                  <p className="font-barlow font-normal text-[15px] leading-[24px] text-white/70">
                    {val.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 bg-[#030303]">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div 
            className="rounded-[36px] p-10 sm:p-14 text-center flex flex-col items-center border border-[#262626] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #161616 0%, #0A0A0A 100%)' }}
          >
            <h2 className="font-barlow font-bold text-3xl sm:text-4xl text-white mb-4">
              Partner with Catalyst Analytics
            </h2>
            <p className="font-barlow text-[17px] text-white/80 max-w-xl mb-8">
              Let's build intelligent systems that define the future of your industry.
            </p>
            <button
              onClick={() => setIsMeetingOpen(true)}
              className="w-[180px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] text-center rounded-[10px] transition-all shadow-xl shadow-[#0A84FF]/30 cursor-pointer"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <BookMeetingModal 
        isOpen={isMeetingOpen} 
        onClose={() => setIsMeetingOpen(false)} 
      />
    </div>
  );
}
