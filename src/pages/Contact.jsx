import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Sparkles, Check, Calendar } from 'lucide-react';
import BookMeetingModal from '../components/BookMeetingModal';

// Figma downloaded assets
import contactHeroImg from '../assets/figma/contact_hero.png';

export default function Contact() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: 'Machine Learning Solutions',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  const stats = [
    { label: 'CLIENTS', value: '200+' },
    { label: 'PROJECTS', value: '280+' },
    { label: 'HAPPY CLIENTS', value: '100%' },
    { label: 'COMMUNITY', value: '420K' },
    { label: 'YEARS EXPERIENCE', value: '10+' }
  ];

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden font-barlow">
      {/* 1. HERO BANNER - Exact Figma Node 31:17799 */}
      <section className="relative pt-12 md:pt-20 pb-20 border-b border-[#262626]/40">
        <div 
          className="absolute top-10 right-1/3 w-[500px] h-[300px] rounded-full pointer-events-none opacity-25 blur-[140px]"
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
                <span>Direct Executive Connect</span>
              </div>
              <h1 className="font-barlow font-bold text-4xl sm:text-5xl lg:text-[60px] text-white leading-[1.12] tracking-tight">
                Contact <span className="text-[#0A84FF]">Us</span>
              </h1>
              <p className="font-barlow font-normal text-[17px] sm:text-[18px] leading-[28px] text-white/80 mt-6 max-w-2xl">
                Get in touch with our team to discuss how we can help transform your business. We’re here to help architect, optimize, and scale your technology.
              </p>
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
                  src={contactHeroImg} 
                  alt="Contact Catalyst Analytics" 
                  className="w-full h-auto max-h-[380px] object-contain relative z-10 drop-shadow-[0_20px_40px_rgba(10,132,255,0.25)]" 
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & CONTACT CARDS - Exact Figma Layout */}
      <section className="py-20 relative">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Form: Figma Frame 31:20764 (width 642px) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 bg-[#141414] border border-[#262626] rounded-[24px] p-8 sm:p-12 shadow-2xl"
            >
              <h2 className="font-barlow font-semibold text-2xl sm:text-3xl text-white mb-2">
                Send Us a Message
              </h2>
              <p className="font-barlow text-[15px] text-white/70 mb-8">
                Fill out the details below and an engineering partner will reply within 24 hours.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] text-white/80 font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="John"
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/40 focus:outline-none focus:border-[#0A84FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-white/80 font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Doe"
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/40 focus:outline-none focus:border-[#0A84FF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[13px] text-white/80 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/40 focus:outline-none focus:border-[#0A84FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] text-white/80 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Corp"
                        className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-3 text-white text-[15px] placeholder-white/40 focus:outline-none focus:border-[#0A84FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[13px] text-white/80 font-medium mb-2">
                      Primary Area of Interest
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl px-4 py-3 text-white text-[15px] focus:outline-none focus:border-[#0A84FF]"
                    >
                      <option value="Machine Learning Solutions">Machine Learning Solutions</option>
                      <option value="Predictive Analytics Suite">Predictive Analytics Suite</option>
                      <option value="Blockchain & Smart Contracts">Blockchain & Smart Contracts</option>
                      <option value="Data Engineering & Lakehouse">Data Engineering & Lakehouse</option>
                      <option value="Quantitative Trading Infrastructure">Quantitative Trading Infrastructure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[13px] text-white/80 font-medium mb-2">
                      Project Overview & Objectives *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current tech stack, target timeline, and specific goals..."
                      className="w-full bg-[#0D0D0D] border border-[#262626] rounded-xl p-4 text-white text-[15px] placeholder-white/40 focus:outline-none focus:border-[#0A84FF]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[15px] rounded-[10px] transition-all flex items-center justify-center gap-2 shadow-xl shadow-[#0A84FF]/25 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={16} />
                  </button>
                </form>
              ) : (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <Check size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched</h3>
                  <p className="text-white/70 text-[15px] max-w-md mx-auto">
                    Thank you, {formData.firstName}. Your inquiry has been routed to our enterprise solutions desk. We will contact you shortly.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', company: '', service: 'Machine Learning Solutions', message: '' }); }}
                    className="px-6 py-2.5 bg-[#1F1F1F] hover:bg-[#2A2A2A] text-white rounded-xl text-[14px] font-semibold transition mt-2"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </motion.div>

            {/* Right Side: Contact Information & Consultation Cards */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Card 1: Direct Information */}
              <div className="bg-[#141414] border border-[#262626] rounded-[24px] p-8 sm:p-10 shadow-xl space-y-6">
                <h3 className="font-barlow font-semibold text-2xl text-white pb-4 border-b border-[#262626]">
                  Direct Contact
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/30 flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="text-[12px] text-white/50 uppercase tracking-wider">Email</div>
                      <a href="mailto:contact@catalystanalytics.io" className="text-[16px] text-white font-medium hover:text-[#0A84FF] transition">
                        contact@catalystanalytics.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/30 flex items-center justify-center shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <div className="text-[12px] text-white/50 uppercase tracking-wider">Phone</div>
                      <a href="tel:+14697124672" className="text-[16px] text-white font-medium hover:text-[#0A84FF] transition">
                        +1 (469) 712-4672
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/30 flex items-center justify-center shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="text-[12px] text-white/50 uppercase tracking-wider">Headquarters</div>
                      <div className="text-[16px] text-white font-medium">
                        5511 Parkcrest Dr, Suite 103<br />Austin, TX 78731
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#0A84FF]/10 text-[#0A84FF] border border-[#0A84FF]/30 flex items-center justify-center shrink-0">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="text-[12px] text-white/50 uppercase tracking-wider">Operating Hours</div>
                      <div className="text-[16px] text-white font-medium">
                        Mon – Fri: 9:00 AM – 6:00 PM CST
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: 30-Minute Consultation CTA - Figma Node 31:20823 */}
              <div className="bg-[#141414] border border-[#0A84FF]/40 rounded-[24px] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
                <div 
                  className="absolute -top-10 -right-10 w-44 h-44 rounded-full opacity-20 blur-2xl pointer-events-none"
                  style={{ background: '#0A84FF' }}
                />

                <div className="flex items-center gap-2 text-[#0A84FF] text-[13px] font-semibold uppercase tracking-wider mb-2">
                  <Calendar size={15} />
                  <span>Discovery Session</span>
                </div>
                <h3 className="font-barlow font-semibold text-2xl text-white mb-3">
                  Schedule a Consultation
                </h3>
                <p className="font-barlow text-[14px] leading-[22px] text-white/80 mb-6">
                  Want to discuss your project in detail? Schedule a free 30-minute consultation with our team of experts. We'll help you understand how our solutions can benefit your business.
                </p>
                <button
                  onClick={() => setIsMeetingOpen(true)}
                  className="w-full py-3.5 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-bold text-[14px] rounded-[10px] transition-all shadow-lg shadow-[#0A84FF]/30 cursor-pointer"
                >
                  Book 30-Min Discovery Call
                </button>
              </div>
            </motion.div>
          </div>

          {/* 3. TRACK RECORD STATS BAR - Exact Figma Node 31:20829 - 31:20843 */}
          <div className="mt-24 pt-12 border-t border-[#262626]/50">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
              {stats.map((s) => (
                <div key={s.label} className="p-6 bg-[#0E0E0E] rounded-2xl border border-[#222]">
                  <div className="font-barlow font-bold text-3xl sm:text-4xl text-[#0A84FF] mb-1">
                    {s.value}
                  </div>
                  <div className="font-mono text-[11px] sm:text-[12px] text-white/60 tracking-widest uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book Meeting Modal */}
      <BookMeetingModal 
        isOpen={isMeetingOpen} 
        onClose={() => setIsMeetingOpen(false)} 
      />
    </div>
  );
}
