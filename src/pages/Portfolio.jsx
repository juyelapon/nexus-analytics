import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import CaseStudyModal from '../components/CaseStudyModal';
import BookMeetingModal from '../components/BookMeetingModal';

// Figma downloaded assets
import portHeroImg from '../assets/figma/port_hero.png';
import portCase1Img from '../assets/figma/port_case1.png';
import portCase2Img from '../assets/figma/port_case2.png';
import portCase3Img from '../assets/figma/port_case3.png';
import portCase4Img from '../assets/figma/port_case4.png';
import portCase5Img from '../assets/figma/port_case5.png';
import portCase6Img from '../assets/figma/port_case6.png';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCase, setSelectedCase] = useState(null);
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);

  const categories = ['All', 'Machine Learning', 'Data Engineering', 'Blockchain', 'Quant Trading'];

  const projects = [
    {
      id: 1,
      title: 'Real-Time Quantitative Trading Platform',
      category: 'Quant Trading',
      image: portCase1Img,
      metric: '340% Speedup',
      description: 'Ultra-low latency microsecond order execution and algorithmic risk modeling engine for institutional hedge funds.',
      fullDescription: 'We engineered an ultra-low latency execution engine capable of sub-microsecond tick processing and automated dynamic hedging across global spot and derivatives venues. The platform delivers algorithmic execution with guaranteed deterministic performance.',
      techStack: ['C++', 'Rust', 'CUDA', 'AWS Outposts', 'MLOps'],
      client: 'Tier-1 Institutional Fund'
    },
    {
      id: 2,
      title: 'Enterprise Supply Chain Predictive Suite',
      category: 'Machine Learning',
      image: portCase2Img,
      metric: '99.4% Accuracy',
      description: 'Multi-echelon inventory forecasting and anomaly detection engine predicting supply chain shocks 60 days in advance.',
      fullDescription: 'Built with distributed deep learning architectures on Databricks and Snowflake, this platform ingests over 200 external risk vectors to anticipate logistics bottlenecks, saving over $18M in inventory write-downs.',
      techStack: ['PyTorch', 'Databricks', 'Snowflake', 'React', 'FastAPI'],
      client: 'Global Logistics Conglomerate'
    },
    {
      id: 3,
      title: 'Decentralized Cross-Border Settlement Protocol',
      category: 'Blockchain',
      image: portCase3Img,
      metric: '$2.4B+ Settled',
      description: 'High-throughput cryptographic verification protocol securing multi-asset cross-border institutional settlements with mathematical finality.',
      fullDescription: 'Designed an EVM-compatible layer leveraging zero-knowledge proofs for instantaneous settlement, privacy preservation, and strict AML/KYC cryptographic compliance.',
      techStack: ['Solidity', 'Rust', 'Circom (ZK)', 'Go-Ethereum'],
      client: 'FinTech Consortium'
    },
    {
      id: 4,
      title: 'Computer Vision Manufacturing Quality Control',
      category: 'Machine Learning',
      image: portCase4Img,
      metric: '99.98% Defect Rate',
      description: 'High-speed automated optical inspection running on edge TPU nodes detecting micro-defects in aerospace semiconductor manufacturing.',
      fullDescription: 'Deployed custom vision transformer models on edge hardware processing 120 frames per second on automated assembly lines, cutting false rejection rates by 82%.',
      techStack: ['TensorFlow', 'OpenCV', 'TensorRT', 'Edge TPU'],
      client: 'Aerospace Components Manufacturer'
    },
    {
      id: 5,
      title: 'Clinical Diagnostic Genomics Pipeline',
      category: 'Data Engineering',
      image: portCase5Img,
      metric: '60x Faster',
      description: 'HIPAA-compliant high-performance computational pipeline analyzing whole-genome sequencing datasets in minutes instead of days.',
      fullDescription: 'Architected a distributed cloud pipeline utilizing Apache Spark and Nextflow to process petabyte-scale genomic variant calling with deterministic reproducibility and audit logs.',
      techStack: ['Nextflow', 'Apache Spark', 'AWS Batch', 'Python'],
      client: 'Biotech Research Institute'
    },
    {
      id: 6,
      title: 'High-Concurrency Streaming Data Lakehouse',
      category: 'Data Engineering',
      image: portCase6Img,
      metric: '1.2M Events/sec',
      description: 'Unified real-time analytical engine combining streaming Kafka ingestion with sub-second querying across historical data lakes.',
      fullDescription: 'Consolidated fragmented data pipelines into an automated Lakehouse with Delta Lake, powering live predictive executive dashboards with sub-second query latency.',
      techStack: ['Apache Kafka', 'Delta Lake', 'dbt', 'Kubernetes'],
      client: 'Retail Telemetry Network'
    }
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden font-barlow">
      {/* 1. HERO BANNER - Exact Figma Node 31:8159 */}
      <section className="relative pt-12 md:pt-20 pb-20 border-b border-[#262626]/40">
        <div 
          className="absolute top-10 right-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-25 blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(10, 132, 255, 0.9) 0%, rgba(137, 97, 255, 0.4) 100%)' }}
        />

        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Header */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-2 bg-[#0A84FF]/10 border border-[#0A84FF]/30 px-3.5 py-1.5 rounded-full text-[#0A84FF] text-[13px] font-semibold uppercase tracking-wider mb-6">
                <Sparkles size={14} />
                <span>Proven Technical Excellence</span>
              </div>
              <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.12] tracking-tight">
                Our Work, <span className="text-[#0A84FF]">Your Future</span>
              </h1>
              <p className="font-barlow font-normal text-[17px] sm:text-[18px] leading-[28px] text-white/80 mt-6 max-w-2xl">
                From machine learning platforms to blockchain protocols and predictive analytics tools, here’s a selection of real-world solutions we’ve delivered for forward-thinking enterprises.
              </p>
              <div className="mt-8">
                <button
                  onClick={() => setIsMeetingOpen(true)}
                  className="w-[165px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] text-center rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/30 cursor-pointer"
                >
                  Discuss Your Project
                </button>
              </div>
            </motion.div>

            {/* Right Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:col-span-5 flex justify-center items-center"
            >
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0A84FF]/15 rounded-full blur-2xl" />
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  src={portHeroImg} 
                  alt="Catalyst Analytics Case Studies" 
                  className="w-full h-auto max-h-[380px] object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(10,132,255,0.25)]" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. CASE STUDIES SHOWCASE - Exact Figma Node 31:11069 */}
      <section className="py-24 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white leading-tight">
                Our Case Studies
              </h2>
              <p className="font-barlow font-normal text-[17px] text-white/70 mt-3">
                Measurable business transformation delivered through rigorous engineering.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 bg-[#0E0E0E] p-1.5 rounded-full border border-[#262626]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-barlow text-[14px] px-4 py-2 rounded-full transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#0A84FF] text-white font-semibold shadow-md shadow-[#0A84FF]/30'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Projects */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setSelectedCase(project)}
                  className="bg-[#141414] rounded-[36px] border border-[#262626]/70 overflow-hidden flex flex-col justify-between hover:border-[#0A84FF]/50 transition-all duration-300 shadow-xl cursor-pointer group"
                >
                  <div>
                    {/* Image Preview Container */}
                    <div className="w-full h-56 bg-[#0B0B0B] relative overflow-hidden flex items-center justify-center p-6 border-b border-[#222]">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" 
                      />
                      <div className="absolute top-4 right-4 bg-[#0A84FF] text-white font-barlow font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                        {project.metric}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="text-[13px] font-semibold text-[#0A84FF] uppercase tracking-wider mb-2">
                        {project.category}
                      </div>
                      <h3 className="font-barlow font-semibold text-[22px] text-white leading-snug mb-3 group-hover:text-[#0A84FF] transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-barlow font-normal text-[15px] leading-[23px] text-white/70 mb-6">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Footer & Tags */}
                  <div className="px-8 pb-8 pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="text-[12px] bg-[#1C1C1C] text-white/80 border border-[#262626] px-2.5 py-1 rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-[#222] text-[#0A84FF] text-[14px] font-semibold">
                      <span>View Case Study</span>
                      <ArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modals */}
      <CaseStudyModal 
        project={selectedCase} 
        onClose={() => setSelectedCase(null)} 
      />
      <BookMeetingModal 
        isOpen={isMeetingOpen} 
        onClose={() => setIsMeetingOpen(false)} 
      />
    </div>
  );
}
