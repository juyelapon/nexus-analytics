import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import BookMeetingModal from '../components/BookMeetingModal';
import ServiceDetailModal from '../components/ServiceDetailModal';
import CaseStudyModal from '../components/CaseStudyModal';

export default function Home() {
  const [isMeetingOpen, setIsMeetingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  return (
    <div className="w-full bg-[#030303] text-white overflow-hidden">
      {/* 1. Hero Section with Figma Typography, 3D Robot & Partner Logos */}
      <Hero onBookMeeting={() => setIsMeetingOpen(true)} />

      {/* 2. Services Section: Predictive Analytics, AI Consulting, Data Engineering */}
      <Services onSelectService={(service) => setSelectedService(service)} />

      {/* 3. About Section: Why Choose Us (Innovation, Collaboration, Excellence, Integrity) */}
      <About />

      {/* 4. Portfolio Section: Enterprise Case Studies */}
      <Portfolio onOpenCaseStudy={(study) => setSelectedCaseStudy(study)} />

      {/* 5. Testimonials Section: Why We Started */}
      <Testimonials onLearnMore={() => setIsMeetingOpen(true)} />

      {/* 6. FAQ Section: Interactive Accordion */}
      <FAQ />

      {/* 7. Call To Action Banner */}
      <CTA onOpenContact={() => setIsMeetingOpen(true)} />

      {/* Interactive Modals */}
      <BookMeetingModal
        isOpen={isMeetingOpen}
        onClose={() => setIsMeetingOpen(false)}
      />

      <ServiceDetailModal
        item={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <CaseStudyModal
        project={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </div>
  );
}
