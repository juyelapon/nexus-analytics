import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages directly mapped to Figma nodes
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import PortfolioPage from './pages/Portfolio';
import AboutPage from './pages/About';
import CareersPage from './pages/Careers';
import CareerDetailsPage from './pages/CareerDetails';
import ContactPage from './pages/Contact';

// Helper to scroll to top whenever route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#030303] text-white selection:bg-[#0A84FF] selection:text-white antialiased font-barlow">
        {/* Figma Header Navbar */}
        <Navbar />

        {/* Dynamic Main Route Views */}
        <main className="flex-1 w-full">
          <AnimatePresence mode="wait">
            <Routes>
              {/* Home Page: Figma Node 31-1999 */}
              <Route path="/" element={<Home />} />

              {/* Services Page: Figma Node 31-4074 */}
              <Route path="/services" element={<ServicesPage />} />

              {/* Portfolio Page: Figma Node 31-7417 */}
              <Route path="/portfolio" element={<PortfolioPage />} />

              {/* About Page: Figma Node 31-11317 */}
              <Route path="/about" element={<AboutPage />} />

              {/* Careers Page: Figma Node 31-14389 */}
              <Route path="/careers" element={<CareersPage />} />

              {/* Career Details Page: Figma Node 31-17488 */}
              <Route path="/careers/:id" element={<CareerDetailsPage />} />

              {/* Contact Page: Figma Node 31-17799 */}
              <Route path="/contact" element={<ContactPage />} />

              {/* Fallback to Home */}
              <Route path="*" element={<Home />} />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Figma Footer Section */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
