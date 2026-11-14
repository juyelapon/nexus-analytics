import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MapPin, Briefcase, X, Check } from 'lucide-react';
import { jobPositions } from '../data/jobs';

export default function CareerDetails() {
  const { id } = useParams();
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    linkedin: '',
    coverNote: ''
  });

  const job = jobPositions.find(j => j.id === id) || jobPositions[0];

  const handleApply = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden font-barlow py-12 md:py-20">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        {/* Back navigation */}
        <Link 
          to="/careers" 
          className="inline-flex items-center gap-2 text-white/70 hover:text-[#0A84FF] transition-colors mb-8 font-semibold text-[15px]"
        >
          <ArrowLeft size={18} />
          <span>Back to All Open Positions</span>
        </Link>

        {/* Role Header Banner */}
        <div className="bg-[#141414] border border-[#262626] rounded-[36px] p-8 sm:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div 
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(circle, #0A84FF 0%, transparent 70%)' }}
          />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/30 text-[12px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                  {job.department}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/70 text-[14px] flex items-center gap-1.5">
                  <MapPin size={14} className="text-[#0A84FF]" />
                  {job.location}
                </span>
                <span className="text-white/40">•</span>
                <span className="text-white/70 text-[14px] flex items-center gap-1.5">
                  <Briefcase size={14} className="text-[#0A84FF]" />
                  {job.type}
                </span>
              </div>

              <h1 className="font-barlow font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
                {job.title}
              </h1>
            </div>

            <button
              onClick={() => setIsApplyOpen(true)}
              className="w-full sm:w-auto px-8 py-4 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[15px] rounded-[10px] transition-all shadow-xl shadow-[#0A84FF]/30 cursor-pointer shrink-0"
            >
              Apply for this Position
            </button>
          </div>
        </div>

        {/* Details Grid: Left Content (65%), Right Specifications Card (35%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Description & Breakdown */}
          <div className="lg:col-span-8 space-y-12">
            {/* About this position */}
            <div className="bg-[#141414] border border-[#262626]/70 rounded-[32px] p-8 sm:p-10">
              <h2 className="font-barlow font-semibold text-2xl text-white mb-4">
                About this Position
              </h2>
              <p className="font-barlow font-normal text-[16px] sm:text-[17px] leading-[28px] text-white/80">
                {job.about}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="bg-[#141414] border border-[#262626]/70 rounded-[32px] p-8 sm:p-10">
              <h2 className="font-barlow font-semibold text-2xl text-white mb-6">
                Key Responsibilities
              </h2>
              <div className="space-y-4">
                {job.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A84FF] shrink-0 mt-1" />
                    <span className="font-barlow text-[16px] text-white/80 leading-[26px]">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div className="bg-[#141414] border border-[#262626]/70 rounded-[32px] p-8 sm:p-10">
              <h2 className="font-barlow font-semibold text-2xl text-white mb-6">
                Candidate Requirements
              </h2>
              <div className="space-y-4">
                {job.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#0A84FF] shrink-0 mt-1" />
                    <span className="font-barlow text-[16px] text-white/80 leading-[26px]">
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-[#141414] border border-[#262626]/70 rounded-[32px] p-8 sm:p-10">
              <h2 className="font-barlow font-semibold text-2xl text-white mb-6">
                What We Offer & Benefits
              </h2>
              <div className="space-y-4">
                {job.benefits.map((ben, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-emerald-400 shrink-0 mt-1" />
                    <span className="font-barlow text-[16px] text-white/80 leading-[26px]">
                      {ben}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sticky Sidebar: Quick Job Overview */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#141414] border border-[#262626] rounded-[32px] p-8 space-y-6 shadow-xl">
              <h3 className="font-barlow font-semibold text-[20px] text-white pb-4 border-b border-[#262626]">
                Role Specifications
              </h3>

              <div>
                <div className="text-[13px] text-white/50 uppercase tracking-wider mb-1">
                  Salary Range
                </div>
                <div className="text-[18px] font-semibold text-[#0A84FF]">
                  {job.salary}
                </div>
              </div>

              <div>
                <div className="text-[13px] text-white/50 uppercase tracking-wider mb-1">
                  Experience Level
                </div>
                <div className="text-[17px] font-medium text-white">
                  {job.experience}
                </div>
              </div>

              <div>
                <div className="text-[13px] text-white/50 uppercase tracking-wider mb-1">
                  Application Deadline
                </div>
                <div className="text-[17px] font-medium text-white">
                  {job.deadline}
                </div>
              </div>

              <div>
                <div className="text-[13px] text-white/50 uppercase tracking-wider mb-2">
                  Required Core Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="text-[12px] bg-[#1E1E1E] border border-[#2A2A2A] text-white px-2.5 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="w-full py-4 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[15px] rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/25 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {isApplyOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#141414] border border-[#262626] rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => { setIsApplyOpen(false); setSubmitted(false); }}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-[#1F1F1F] text-white/70 hover:text-white flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>

              {!submitted ? (
                <>
                  <div className="mb-6">
                    <span className="text-[12px] text-[#0A84FF] uppercase tracking-wider font-semibold">
                      Application Submission
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-1">
                      Apply for {job.title}
                    </h3>
                  </div>

                  <form onSubmit={handleApply} className="space-y-4">
                    <div>
                      <label className="block text-[13px] text-white/70 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-2.5 text-white text-[14px] focus:outline-none focus:border-[#0A84FF]"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] text-white/70 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-2.5 text-white text-[14px] focus:outline-none focus:border-[#0A84FF]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] text-white/70 mb-1">Portfolio or GitHub URL</label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-2.5 text-white text-[14px] focus:outline-none focus:border-[#0A84FF]"
                        placeholder="https://github.com/..."
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] text-white/70 mb-1">LinkedIn Profile</label>
                      <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-2.5 text-white text-[14px] focus:outline-none focus:border-[#0A84FF]"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>

                    <div>
                      <label className="block text-[13px] text-white/70 mb-1">Why Catalyst Analytics?</label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-2.5 text-white text-[14px] focus:outline-none focus:border-[#0A84FF]"
                        placeholder="Briefly introduce yourself and what excites you about this role..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[15px] rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/25 cursor-pointer mt-2"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Application Received!</h3>
                  <p className="text-white/70 text-[15px] max-w-sm mx-auto">
                    Thank you for applying to Catalyst Analytics. Our talent engineering team will review your credentials and contact you within 48 hours.
                  </p>
                  <button
                    onClick={() => { setIsApplyOpen(false); setSubmitted(false); }}
                    className="px-6 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white rounded-xl text-[14px] font-semibold transition"
                  >
                    Close Window
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
