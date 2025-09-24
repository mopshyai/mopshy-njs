'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '/solutions',  label: 'Solutions' },
    { href: '/templates', label: 'Templates' },
    // { href: '/services', label: 'Services' },
    { href: '/automations', label: 'Automations' },
    { href: '/process', label: 'Process' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/team', label: 'Team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-xl shadow-lg border-b border-blue-500/20'
          : 'bg-slate-950/80 backdrop-blur-md border-b border-blue-500/10'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-black text-xl font-mono">M</span>
              <div className="absolute inset-0 bg-blue-400/20 rounded-xl blur-xl group-hover:bg-blue-400/30 transition-all duration-300" />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-bold text-xl leading-none">
                Mopshy<span className="text-blue-400">.ai</span>
              </span>
              <span className="text-xs text-slate-400 uppercase tracking-wider">
                Enterprise AI Solutions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3 pl-6 border-l border-slate-700">
              <Link
                href="mailto:mopshyai@gmail.com?subject=Quick Question"
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-all duration-200"
              >
                Contact
              </Link>
              <Link
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                Book Call →
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-800">
                <Link
                  href="mailto:mopshyai@gmail.com?subject=Quick Question"
                  className="px-4 py-3 text-center text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  href="https://cal.com/mopshyai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 text-center text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Call →
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}