import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Briefcase, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { jobPositions } from '../data/jobs';
import careerHeroImg from '../assets/figma/career_hero.png';

export default function Careers() {
  const [selectedDept, setSelectedDept] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const departments = ['All', 'Design & Frontend', 'AI & Engineering', 'Quantitative Research', 'Data Engineering'];

  const filteredJobs = jobPositions.filter((job) => {
    const matchesDept = selectedDept === 'All' || job.department === selectedDept;
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden font-barlow">
      {/* 1. HERO BANNER - Exact Figma Node 31:14389 */}
      <section className="relative pt-12 md:pt-20 pb-20 border-b border-[#262626]/40">
        <div 
          className="absolute top-10 left-1/4 w-[500px] h-[300px] rounded-full pointer-events-none opacity-25 blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(10, 132, 255, 0.9) 0%, rgba(137, 97, 255, 0.4) 100%)' }}
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
                <span>Join Our Engineering Elite</span>
              </div>
              <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.12] tracking-tight">
                Build the Future <span className="text-[#0A84FF]">with Us</span>
              </h1>
              <p className="font-barlow font-normal text-[17px] sm:text-[18px] leading-[28px] text-white/80 mt-6 max-w-2xl">
                We’re a team of builders, thinkers, and explorers using AI, machine learning, and high-performance computing to solve the hardest problems in software.
              </p>
              <div className="mt-8">
                <a
                  href="#positions"
                  className="inline-block w-[185px] py-[14px] bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] text-center rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/30"
                >
                  Explore Open Positions
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
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-[#0A84FF]/15 rounded-full blur-2xl" />
                <motion.img 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  src={careerHeroImg} 
                  alt="Catalyst Analytics Careers" 
                  className="w-full h-auto max-h-[380px] object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(10,132,255,0.25)]" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. OPEN POSITIONS SEARCH & LISTINGS */}
      <section id="positions" className="py-24 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          {/* Section Heading & Filters */}
          <div className="mb-14">
            <h2 className="font-barlow font-semibold text-3xl sm:text-4xl lg:text-[40px] text-white mb-8">
              Open Positions ({filteredJobs.length})
            </h2>

            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Department Pills */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`font-barlow text-[14px] px-4 py-2 rounded-full transition-all cursor-pointer ${
                      selectedDept === dept
                        ? 'bg-[#0A84FF] text-white font-medium shadow-md shadow-[#0A84FF]/25'
                        : 'bg-[#141414] text-white/70 hover:text-white border border-[#262626]'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-72">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search role or skill..."
                  className="w-full bg-[#141414] border border-[#262626] rounded-xl pl-10 pr-4 py-2.5 text-white text-[14px] placeholder-white/40 focus:outline-none focus:border-[#0A84FF]"
                />
              </div>
            </div>
          </div>

          {/* Jobs List Grid */}
          <div className="space-y-6">
            {filteredJobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-[#141414] border border-[#262626]/70 rounded-[32px] p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 hover:border-[#0A84FF]/50 transition-all duration-300 shadow-xl group"
              >
                <div className="max-w-2xl">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="text-[#0A84FF] text-[13px] font-semibold uppercase tracking-wider">
                      {job.department}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/70 text-[13px] flex items-center gap-1">
                      <MapPin size={13} className="text-[#0A84FF]" />
                      {job.location}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/70 text-[13px] flex items-center gap-1">
                      <Briefcase size={13} className="text-[#0A84FF]" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="font-barlow font-semibold text-2xl sm:text-[26px] text-white group-hover:text-[#0A84FF] transition-colors mb-3">
                    {job.title}
                  </h3>
                  <p className="font-barlow font-normal text-[15px] sm:text-[16px] leading-[24px] text-white/70 mb-4">
                    {job.summary}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span key={s} className="text-[12px] bg-[#1C1C1C] text-white/80 border border-[#262626] px-2.5 py-1 rounded-md">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col items-start lg:items-end gap-3 shrink-0 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-[#222]">
                  <div className="text-white/90 font-barlow font-semibold text-[17px]">
                    {job.salary}
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="w-full sm:w-auto px-6 py-3 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] text-center rounded-[10px] transition-all flex items-center justify-center gap-2 shadow-md shadow-[#0A84FF]/25"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
