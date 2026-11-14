import React from 'react';
import { motion } from 'framer-motion';
import servicePredictive from '../assets/figma/service_predictive.png';
import serviceConsulting from '../assets/figma/service_consulting.png';
import serviceDataeng from '../assets/figma/service_dataeng.png';

export default function Services({ onSelectService }) {
  const services = [
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions with our advanced ML models.',
      image: servicePredictive,
      badge: 'Machine Learning',
      metrics: '99.4% Forecast Precision'
    },
    {
      id: 'ai-consulting',
      title: 'AI Consulting',
      description: 'Expert guidance on implementing AI solutions for your business needs.',
      image: serviceConsulting,
      badge: 'Strategy & Architecture',
      metrics: 'Enterprise Ready'
    },
    {
      id: 'data-engineering',
      title: 'Data Engineering',
      description: 'Build robust data pipelines and infrastructure for ML operations.',
      image: serviceDataeng,
      badge: 'Big Data & MLOps',
      metrics: 'Sub-second Latency'
    },
  ];

  return (
    <section id="services" className="w-full bg-[#030303] py-20 md:py-28 relative font-barlow">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-[700px] mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[36px] text-white leading-[1.3] lg:leading-[56px]">
            Our Ultimate Set of Services for Your Ideas Implementation
          </h2>
        </motion.div>

        {/* 3 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -8 }}
              onClick={() => onSelectService && onSelectService(service)}
              className="w-full max-w-[390px] bg-[#141414] rounded-[36px] py-[42px] px-6 flex flex-col items-center text-center border border-[#262626]/60 transition-all duration-300 hover:border-[#0A84FF]/50 hover:shadow-2xl hover:shadow-[#0A84FF]/15 group cursor-pointer"
            >
              {/* Service 3D Graphic */}
              <div className="w-[220px] h-[220px] flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-[#0A84FF]/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.3 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain relative z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
              </div>

              {/* Title */}
              <h3 className="font-barlow font-semibold text-[24px] text-white leading-tight mb-4 group-hover:text-[#0A84FF] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-barlow font-normal text-[16px] leading-[24px] text-white/80 max-w-[265px]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
