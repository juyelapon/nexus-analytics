import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logoImg from '../assets/figma/logo.png';

export const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <motion.img 
      whileHover={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.5 }}
      src={logoImg} 
      alt="Catalyst Analytics Logo" 
      className="w-10 h-10 md:w-11 md:h-11 object-contain transition-transform group-hover:scale-105" 
    />
    <div className="flex flex-col text-left leading-tight">
      <span className="text-white font-barlow font-bold text-lg md:text-xl tracking-tight leading-[1.05]">
        Catalyst
      </span>
      <span className="text-white font-barlow font-bold text-lg md:text-xl tracking-tight leading-[1.05]">
        Analytics
      </span>
    </div>
  </Link>
);

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-[#030303]/95 backdrop-blur-md border-b border-[#262626]/40"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px] h-20 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-[22px]">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `font-barlow text-[16px] px-2.5 py-2 transition-all relative ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-white/80 hover:text-white'
                  }`
                }
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#0A84FF] rounded-full" 
                  />
                )}
              </NavLink>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="w-[140px] py-[14px] px-2.5 bg-[#0A84FF] hover:bg-[#0070df] active:scale-[0.98] text-white font-barlow font-semibold text-[14px] leading-[14px] text-center rounded-[10px] transition-all shadow-md shadow-[#0A84FF]/25"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white/80 hover:text-white p-2 focus:outline-none cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#262626] px-6 py-6 space-y-4 overflow-hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-barlow text-[18px] py-2 transition-colors ${
                  location.pathname === link.path ? 'text-[#0A84FF] font-semibold' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-[14px] bg-[#0A84FF] hover:bg-[#0070df] text-white font-barlow font-semibold text-[14px] text-center rounded-[10px] transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
