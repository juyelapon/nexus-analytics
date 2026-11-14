import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import portfolioDash from '../assets/extracted/portfolio_dash.png';
import caseStocks from '../assets/extracted/case_stocks.png';
import caseBlockchain from '../assets/extracted/case_blockchain.png';

export default function Portfolio({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Quantitative Trading', 'Predictive AI', 'Blockchain'];

  const projects = [
    {
      id: 1,
      title: 'Real-Time Quantitative Trading Engine',
      category: 'Quantitative Trading',
      description: 'Ultra-low latency microsecond order execution and algorithmic risk modeling for institutional hedge funds.',
      metrics: '340% Execution Speedup',
      image: caseStocks,
      tags: ['C++', 'Python', 'MLOps', 'AWS HPC'],
    },
    {
      id: 2,
      title: 'Enterprise Predictive Analytics Suite',
      category: 'Predictive AI',
      description: 'Full-funnel forecasting engine predicting multi-tier supply chain anomalies 60 days in advance.',
      metrics: '99.4% Forecast Precision',
      image: portfolioDash,
      tags: ['PyTorch', 'Databricks', 'Snowflake', 'React'],
    },
    {
      id: 3,
      title: 'Decentralized Audit & Settlement Protocol',
      category: 'Blockchain',
      description: 'High-throughput cryptographic verification protocol securing multi-asset cross-border institutional settlements.',
      metrics: '$2.4B+ Verified Volume',
      image: caseBlockchain,
      tags: ['Rust', 'Zero-Knowledge', 'Web3', 'Solidity'],
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="portfolio" className="w-full bg-[#030303] py-20 md:py-28 relative">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[36px] text-white leading-tight">
              Featured Case Studies & Work
            </h2>
            <p className="font-barlow font-normal text-[18px] text-white/70 mt-3 max-w-xl">
              Proven enterprise implementations delivering measurable competitive advantage.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`font-barlow text-[14px] px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#0A84FF] text-white font-medium shadow-md shadow-[#0A84FF]/25'
                    : 'bg-[#141414] text-white/70 hover:text-white border border-[#262626]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenCaseStudy && onOpenCaseStudy(project)}
              className="bg-[#141414] rounded-[36px] border border-[#262626]/60 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#0A84FF]/50 hover:shadow-2xl hover:shadow-[#0A84FF]/10 group cursor-pointer"
            >
              {/* Image Preview Container */}
              <div className="w-full h-56 bg-[#0E0E0E] relative overflow-hidden flex items-center justify-center p-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute top-4 right-4 bg-[#0A84FF] text-white font-barlow font-bold text-[11px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
                  {project.metrics}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-barlow text-[13px] text-[#0A84FF] uppercase tracking-wider font-semibold">
                    {project.category}
                  </span>
                  <h3 className="font-barlow font-semibold text-[22px] text-white leading-snug mt-2 mb-3 group-hover:text-[#0A84FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-barlow font-normal text-[15px] leading-[22px] text-white/70 mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-barlow text-[12px] bg-[#1C1C1C] border border-[#262626] text-white/80 px-2.5 py-1 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-[#0A84FF] font-barlow font-semibold text-[14px] group-hover:translate-x-1 transition-transform">
                    <span>Explore Case Study</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
