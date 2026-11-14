import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqData = [
    {
      num: '01',
      question: 'What services does Catalyst Analytics provide?',
      answer: 'Catalyst Analytics offers a comprehensive range of enterprise AI services including Predictive Analytics, AI Consulting, and Data Engineering. We specialize in architecting custom machine learning models, modern data warehouses, real-time analytics streaming, and enterprise AI transformation.',
    },
    {
      num: '02',
      question: 'How do you ensure enterprise data privacy and security?',
      answer: 'Security is embedded into our core architecture. We operate under SOC 2 Type II, ISO 27001, and HIPAA compliance protocols. We deploy within your private cloud (AWS, Azure, GCP) or on-premises infrastructure, ensuring zero telemetry or model retraining on proprietary customer data.',
    },
    {
      num: '03',
      question: 'What is your typical project timeline and deployment methodology?',
      answer: 'Our agile engagements typically launch with a 2-to-4 week rapid Discovery & Proof-of-Concept sprint. Following validation, production-grade solutions are delivered in bi-weekly iterative releases with automated CI/CD and MLOps deployment pipelines.',
    },
    {
      num: '04',
      question: 'Can Catalyst Analytics integrate with existing data stacks?',
      answer: 'Yes. Our platform and custom solutions integrate seamlessly with modern data stacks including Snowflake, Databricks, Apache Kafka, dbt, BigQuery, and legacy enterprise ERP/CRM environments with minimal disruption to ongoing operations.',
    },
    {
      num: '05',
      question: 'Do you offer ongoing post-deployment support and model monitoring?',
      answer: 'Yes. We provide 24/7 SLA-backed managed operations, continuous drift detection, model retraining pipelines, latency monitoring, and dedicated quarterly AI roadmap planning.',
    },
  ];

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="w-full bg-[#030303] py-20 md:py-28 relative font-barlow">
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
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* Accordion Container */}
        <div className="max-w-[840px] mx-auto space-y-6">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                onClick={() => toggleItem(idx)}
                className={`w-full rounded-[36px] transition-all duration-300 border cursor-pointer ${
                  isOpen
                    ? 'bg-[#1E1E1E] border-[#0A84FF]/40 shadow-xl shadow-[#0A84FF]/10 p-6 sm:p-10'
                    : 'bg-[#141414] border-[#262626]/50 hover:border-[#383838] p-6 sm:px-10 sm:py-8'
                }`}
              >
                <div className="flex items-start gap-5 sm:gap-8">
                  {/* Number Badge with Figma Gradient */}
                  <div
                    className="w-14 h-14 shrink-0 rounded-[12px] flex items-center justify-center transition-colors"
                    style={{
                      background: 'linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 0) 100%)',
                      border: '1px solid rgba(46, 46, 46, 1)',
                    }}
                  >
                    <span
                      className={`font-barlow font-semibold text-[26px] sm:text-[28px] ${
                        isOpen ? 'text-[#0A84FF]' : 'text-white'
                      }`}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Question and Expandable Answer */}
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center justify-between gap-4">
                      <h3
                        className={`font-barlow font-medium text-[19px] sm:text-[22px] leading-snug transition-colors ${
                          isOpen ? 'text-[#0A84FF]' : 'text-white'
                        }`}
                      >
                        {item.question}
                      </h3>
                      <div className="shrink-0 text-white/70">
                        {isOpen ? (
                          <div className="w-8 h-8 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF]">
                            <Minus size={18} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60">
                            <Plus size={18} />
                          </div>
                        )}
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="font-barlow font-normal text-[16px] sm:text-[18px] leading-[1.6em] text-[#E6E6E6] mt-4 sm:mt-5 pt-3 border-t border-[#2a2a2a]">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
