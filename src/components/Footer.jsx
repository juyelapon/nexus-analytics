import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import logoImg from '../assets/figma/logo.png';

// Inline SVGs for social brands
const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.5a1.63 1.63 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63 0-.9-.73-1.62-1.63-1.62z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

export default function Footer() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Careers', path: '/careers' },
  ];

  return (
    <footer className="w-full bg-[#030303] border-t border-[#858585]/30 pt-12 pb-10">
      <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 lg:px-[86px]">
        {/* Top Row: Logo, Navigation, Social Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-[#262626]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Catalyst Analytics Logo" 
              className="w-10 h-10 object-contain transition-transform group-hover:scale-105" 
            />
            <div className="flex flex-col text-left leading-tight">
              <span className="text-white font-rajdhani font-bold text-[20px] leading-[20px]">
                Catalyst
              </span>
              <span className="text-white font-rajdhani font-bold text-[20px] leading-[20px]">
                Analytics
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="font-barlow font-medium text-[18px] text-[#E6E6E6] hover:text-[#0A84FF] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social Icons Container */}
          <div className="flex items-center gap-3.5 p-2 rounded-[12px] border border-[#262626] bg-[#0c0c0c]">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[8px] flex items-center justify-center text-white/80 hover:text-[#0A84FF] transition-all"
              style={{
                background: 'linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 0) 100%)',
                border: '1px solid rgba(46, 46, 46, 1)',
              }}
              aria-label="Twitter / X"
            >
              <TwitterIcon />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[8px] flex items-center justify-center text-white/80 hover:text-[#0A84FF] transition-all"
              style={{
                background: 'linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 0) 100%)',
                border: '1px solid rgba(46, 46, 46, 1)',
              }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-[8px] flex items-center justify-center text-white/80 hover:text-[#0A84FF] transition-all"
              style={{
                background: 'linear-gradient(180deg, rgba(36, 36, 36, 1) 0%, rgba(36, 36, 36, 0) 100%)',
                border: '1px solid rgba(46, 46, 46, 1)',
              }}
              aria-label="GitHub"
            >
              <GithubIcon />
            </a>
          </div>
        </div>

        {/* Middle Row: Contact Details & Legal Links */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 py-8 border-b border-[#262626]">
          {/* Contact Details with Underline Accent */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
            <a
              href="mailto:contact@catalystanalytics.io"
              className="flex items-center gap-2.5 pb-1 border-b border-[#262626] text-[#E6E6E6] hover:text-[#0A84FF] hover:border-[#0A84FF] transition-all font-barlow text-[16px] sm:text-[18px]"
            >
              <Mail size={18} className="text-[#0A84FF]" />
              <span>contact@catalystanalytics.io</span>
            </a>
            <a
              href="tel:+14697124672"
              className="flex items-center gap-2.5 pb-1 border-b border-[#262626] text-[#E6E6E6] hover:text-[#0A84FF] hover:border-[#0A84FF] transition-all font-barlow text-[16px] sm:text-[18px]"
            >
              <Phone size={18} className="text-[#0A84FF]" />
              <span>+1 (469) 712-4672</span>
            </a>
            <div className="flex items-center gap-2.5 pb-1 border-b border-[#262626] text-[#E6E6E6] font-barlow text-[16px] sm:text-[18px]">
              <MapPin size={18} className="text-[#0A84FF]" />
              <span>5511 Parkcrest Dr, Suite 103, Austin, TX 78731</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-barlow text-[16px] text-[#98989A] hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-barlow text-[16px] text-[#98989A] hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom Row: Copyright Notice */}
        <div className="pt-8 text-center">
          <p className="font-barlow font-normal text-[16px] sm:text-[18px] text-[#98989A]">
            © 2025 Catalyst Analytics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
