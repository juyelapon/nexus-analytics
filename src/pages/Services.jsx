import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import BookMeetingModal from '../components/BookMeetingModal';
import ServiceDetailModal from '../components/ServiceDetailModal';

// Figma downloaded assets
import servicesHeroImg from '../assets/figma/services_hero.png';
import servMlImg from '../assets/figma/serv_ml.png';
import servBlockchainImg from '../assets/figma/serv_blockchain.png';
import servDataImg from '../assets/figma/serv_data.png';
import indFinImg from '../assets/figma/ind_fin.png';
import indHealthImg from '../assets/figma/ind_health.png';
import indLogisticsImg from '../assets/figma/ind_logistics.png';

export default function Services() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const coreServices = [
    {
      id: 'ml-solutions',
      title: 'Machine Learning Solutions',
      image: servMlImg,
      description: 'Custom ML models designed and optimized for your specific business challenges, leveraging state-of-the-art algorithms and rigorous production pipelines.',
      features: [
        'Deep learning model development',
        'Computer vision solutions',
        'Model optimization and scaling',
        'Neural network architecture design',
        'Natural language processing (LLMs & RAG)'
      ]
    },
    {
      id: 'blockchain-dev',
      title: 'Blockchain Development',
      image: servBlockchainImg,
      description: 'End-to-end blockchain solutions from smart contract development to decentralized application architecture with mathematical security guarantees.',
      features: [
        'Smart contract development',
        'Blockchain protocol integration',
        'Decentralized applications (dApps)',
        'Cryptographic security audits',
        'Consensus & tokenomics engineering'
      ]
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering & Infrastructure',
      image: servDataImg,
      description: 'Robust, scalable data pipelines and enterprise cloud architectures designed for high-concurrency real-time analytics and predictive workloads.',
      features: [
        'High-throughput streaming pipelines',
        'Cloud data warehouse architecture (Snowflake/BigQuery)',
        'Automated ETL/ELT workflows',
        'Distributed database management',
        'Sub-second query optimization'
      ]
    }
  ];

  const industries = [
    {
      id: 'finance',
      title: 'Finance & Quantitative Trading',
      image: indFinImg,
      description: 'Algorithmic trading engines, automated risk management, real-time market sentiment analysis, and regulatory compliance protocols for hedge funds.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare & Life Sciences',
      image: indHealthImg,
      description: 'Diagnostic predictive models, clinical workflow automation, HIPAA-compliant patient telemetry, and genomic sequencing analytics.'
    },
    {
      id: 'supply-chain',
      title: 'Supply Chain & Logistics',
      image: indLogisticsImg,
      description: 'Demand forecasting, multi-node route optimization, real-time freight tracking, and predictive inventory rebalancing algorithms.'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Retail',
      image: servDataImg,
      description: 'Personalized recommendation engines, dynamic pricing algorithms, customer churn prediction, and intelligent fraud mitigation.'
    },
    {
      id: 'iot',
      title: 'Energy & Smart Manufacturing',
      image: servMlImg,
      description: 'Predictive equipment maintenance, automated visual quality inspection, smart grid optimization, and operational efficiency analytics.'
    },
    {
      id: 'web3',
      title: 'Web3 & Decentralized Protocols',
      image: servBlockchainImg,
      description: 'Zero-knowledge verification protocols, multi-chain liquidity aggregation, on-chain analytics, and smart contract security verification.'
    }
  ];

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden font-barlow">
      {/* 1. HERO BANNER - Exact Figma Node 31:4092 */}
      <section className="relative pt-12 md:pt-20 pb-20 border-b border-[#262626]/40">
        {/* Ambient Glows */}
        <div 
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none opacity-30 blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(10, 132, 255, 0.8) 0%, rgba(137, 97, 255, 0.3) 100%)' }}
        />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-[#0A84FF]/10 border border-[#0A84FF]/30 px-3.5 py-1.5 rounded-full text-[#0A84FF] text-[13px] font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                <span>Enterprise Technology Suite</span>
              </div>
              <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.12] tracking-tight">
                Our Comprehensive{' '}
                <span className="text-[#0A84FF] underline decoration-[#0A84FF]/40 underline-offset-8">
                  Digital Solutions
                </span>
              </h1>
              <p className="font-barlow font-normal text-[17px] sm:text-[18px] leading-[28px] text-white/80 mt-6 max-w-2xl">
                At Catalyst Analytics, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsMeetingOpen(true)}
                  className="w-[165px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] leading-[14px] text-center rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/30 cursor-pointer"
                >
                  Book a Meeting
                </button>
                <a
                  href="#core-services"
                  className="px-6 py-[14px] bg-[#141414] hover:bg-[#1C1C1C] border border-[#262626] text-white font-barlow font-medium text-[14px] rounded-[10px] transition-all"
                >
                  Explore Capabilities
                </a>
              </div>
            </motion.div>

            {/* Right Graphic */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative w-full max-w-[460px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0A84FF]/15 rounded-full blur-3xl" />
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  src={servicesHeroImg} 
                  alt="Catalyst Analytics Solutions" 
                  className="w-full h-auto max-h-[420px] object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(10,132,255,0.25)]" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CORE SERVICES SECTION - Exact Figma Node 31:6997 */}
      <section id="core-services" className="py-24 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight">
              Our Services
            </h2>
            <p className="font-barlow font-normal text-[17px] sm:text-[18px] text-white/70 mt-4 leading-relaxed">
              Comprehensive AI, blockchain, and analytics solutions powered by deep expertise in machine learning and data engineering
            </p>
          </div>

          <div className="space-y-12">
            {coreServices.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-[#141414] border border-[#262626]/70 rounded-[36px] p-8 sm:p-12 lg:p-16 flex flex-col ${
                    isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  } items-center gap-10 lg:gap-16 hover:border-[#0A84FF]/40 transition-all duration-300 shadow-xl`}
                >
                  {/* Service Graphic */}
                  <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <div className="relative w-full max-w-[400px] h-[280px] sm:h-[320px] flex items-center justify-center bg-[#0D0D0D] rounded-3xl p-6 border border-[#262626]/40 overflow-hidden group">
                      <div className="absolute inset-0 bg-[#0A84FF]/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500 relative z-10" 
                      />
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="w-full lg:w-1/2 flex flex-col items-start">
                    <span className="text-[#0A84FF] font-barlow font-semibold text-[14px] uppercase tracking-wider mb-2">
                      Core Discipline 0{index + 1}
                    </span>
                    <h3 className="font-barlow font-semibold text-2xl sm:text-3xl lg:text-[32px] text-white leading-tight mb-4">
                      {service.title}
                    </h3>
                    <p className="font-barlow font-normal text-[16px] sm:text-[17px] leading-[26px] text-white/80 mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-3 w-full mb-8">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-[#0A84FF] shrink-0 mt-1" />
                          <span className="font-barlow text-[15px] sm:text-[16px] text-[#E6E6E6]">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="inline-flex items-center gap-2 text-[#0A84FF] hover:text-white font-barlow font-semibold text-[15px] group cursor-pointer transition-colors"
                    >
                      <span>Explore Technical Specs</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INDUSTRIES WE SERVE - Exact Figma Node 31:7199 */}
      <section className="py-24 bg-[#0A0A0A] border-t border-[#262626]/40 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight">
              Industries We Serve
            </h2>
            <p className="font-barlow font-normal text-[17px] sm:text-[18px] text-white/70 mt-4 leading-relaxed">
              Delivering innovative solutions across diverse industries with deep domain expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, iIdx) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: iIdx * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-[#141414] border border-[#262626]/60 rounded-[32px] p-8 flex flex-col justify-between hover:border-[#0A84FF]/50 transition-all duration-300 shadow-xl group"
              >
                <div>
                  <div className="w-full h-44 bg-[#0A0A0A] rounded-2xl p-4 flex items-center justify-center mb-6 overflow-hidden border border-[#222]">
                    <img 
                      src={ind.image} 
                      alt={ind.title} 
                      className="w-full h-full object-contain filter group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                  <h3 className="font-barlow font-semibold text-[22px] text-white leading-snug mb-3 group-hover:text-[#0A84FF] transition-colors">
                    {ind.title}
                  </h3>
                  <p className="font-barlow font-normal text-[15px] leading-[23px] text-white/70">
                    {ind.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#222] flex items-center justify-between text-[#0A84FF] text-[14px] font-semibold">
                  <span>Custom Architecture</span>
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="py-20 bg-[#030303]">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div 
            className="rounded-[36px] p-10 sm:p-14 md:p-16 text-center flex flex-col items-center border border-[#262626] relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #161616 0%, #0A0A0A 100%)' }}
          >
            <h2 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-[44px] text-white leading-tight max-w-2xl mb-4">
              Ready to Accelerate Your Enterprise with Custom AI?
            </h2>
            <p className="font-barlow font-normal text-[17px] text-white/80 max-w-xl mb-8">
              Speak with our principal data architects to map out your implementation roadmap.
            </p>
            <button
              onClick={() => setIsMeetingOpen(true)}
              className="w-[180px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] text-center rounded-[10px] transition-all shadow-xl shadow-[#0A84FF]/30 cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <BookMeetingModal 
        isOpen={isMeetingOpen} 
        onClose={() => setIsMeetingOpen(false)} 
      />
      <ServiceDetailModal 
        item={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </div>
  );
}
