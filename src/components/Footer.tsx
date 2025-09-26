'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Clock, Calendar, ExternalLink } from 'lucide-react';

export default function Footer() {
  const stats = [
    { number: '127+', label: 'Businesses Served' },
    { number: '$2.4M+', label: 'Revenue Generated' },
    { number: '347%', label: 'Avg Lead Increase' },
  ];

  const solutions = [
    { href: '/#solutions', label: 'AI Lead Generation' },
    { href: '/sales-automation', label: 'Sales Automation' },
    { href: '/#solutions', label: 'Custom Applications' },
    { href: '/#services', label: 'CRM Integration' },
    { href: '/#services', label: 'Conversion Optimization' },
  ];

  const company = [
    { href: '/team', label: 'Our Team' },
    { href: '/#case-studies', label: 'Success Stories' },
    { href: '/#process', label: 'Our Process' },
    { href: '/blogs', label: 'Blog & Insights' },
    { href: 'mailto:mopshyai@gmail.com?subject=Career Inquiry', label: 'Careers' },
  ];

  const resources = [
    { href: '/free-lead-audit', label: 'Free Lead Audit' },
    { href: '/roi-calculator', label: 'ROI Calculator' },
    { href: '/#case-studies', label: 'Case Studies' },
  ];

  const support = [
    { href: 'mailto:mopshyai@gmail.com?subject=Support Request', label: 'Support Center' },
    { href: 'mailto:mopshyai@gmail.com?subject=Support Request', label: 'Contact Support' },
  ];

  const socials = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/company/mopshy-ai', 
      icon: 'linkedin',
      desc: 'Professional insights & automation tips' 
    },
    { 
      name: 'Twitter', 
      href: 'https://twitter.com/mopshyai', 
      icon: 'twitter',
      desc: 'Daily lead generation insights' 
    },
    { 
      name: 'YouTube', 
      href: 'https://youtube.com/@mopshyai', 
      icon: 'youtube',
      desc: 'Case studies & implementation tutorials' 
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/mopshy-ai', 
      icon: 'github',
      desc: 'Open source tools & integrations' 
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-5">
              {/* Logo */}
              <div className="flex items-center gap-3 mb-8">
                <img
                  src="/logo/logo.png"
                  alt="Mopshy.ai Logo"
                  className="w-16 h-16 rounded-2xl shadow-lg shadow-blue-500/30"
                />
                <div>
                  <h2 className="text-2xl font-bold">
                    Mopshy<span className="text-blue-400">.ai</span>
                  </h2>
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Enterprise AI Solutions</p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700/50">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="text-xs text-slate-400 uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-8 leading-relaxed">
                Transforming businesses worldwide into lead generation machines through intelligent automation. 
                We don't just build systems—we architect revenue growth engines that work 24/7.
              </p>

              {/* Contact Info */}
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 mb-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase mb-1">Email</div>
                      <div className="text-sm text-white">mopshyai@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase mb-1">Phone</div>
                      <div className="text-sm text-white">(412) 214-3460</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase mb-1">Location</div>
                      <div className="text-sm text-white">Pittsburgh, PA</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400 uppercase mb-1">Office Hours</div>
                      <div className="text-sm text-white">Mon-Fri: 9AM-6PM EST</div>
                      <div className="text-xs text-slate-400 italic mt-1">Response: Under 2 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold mb-2">Ready to Transform Your Business?</h3>
                <p className="text-slate-300 mb-6">Book a strategy call or get your free lead analysis today</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="https://cal.com/mopshyai/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Strategy Call
                  </Link>
                  <Link
                    href="mailto:mopshyai@gmail.com?subject=Free Lead Analysis Request"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-slate-600 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    Get Free Analysis
                  </Link>
                </div>
              </div>
            </div>

            {/* Links Section */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Solutions</h3>
                  <ul className="space-y-3">
                    {solutions.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Company</h3>
                  <ul className="space-y-3">
                    {company.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Resources</h3>
                  <ul className="space-y-3">
                    {resources.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Support</h3>
                  <ul className="space-y-3">
                    {support.map((link) => (
                      <li key={link.href}>
                        <Link href={link.href} className="text-slate-400 hover:text-white text-sm transition-colors">
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-12">
                <h4 className="font-semibold text-lg mb-6">Connect & Follow</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:bg-slate-800 hover:border-slate-600 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        social.icon === 'linkedin' ? 'bg-[#0077B5]' :
                        social.icon === 'twitter' ? 'bg-[#1DA1F2]' :
                        social.icon === 'youtube' ? 'bg-[#FF0000]' :
                        'bg-[#333]'
                      }`}>
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white mb-1">{social.name}</div>
                        <div className="text-xs text-slate-400">{social.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Legal & Certifications */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
                <Link href="/disclaimer" className="text-slate-400 hover:text-white transition-colors">
                  Disclaimer
                </Link>
                <Link href="mailto:mopshyai@gmail.com?subject=Security Inquiry" className="text-slate-400 hover:text-white transition-colors">
                  Security
                </Link>
                <Link href="mailto:mopshyai@gmail.com?subject=Compliance Inquiry" className="text-slate-400 hover:text-white transition-colors">
                  Compliance
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20">
                  <span className="font-semibold">SOC 2</span> Type II
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20">
                  <span className="font-semibold">GDPR</span> Compliant
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 text-blue-400 rounded-lg text-xs border border-blue-500/20">
                  <span className="font-semibold">ISO</span> 27001
                </span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-slate-400 md:text-right">
              <p>&copy; 2025 Mopshy.ai. All rights reserved.</p>
              <p className="text-xs mt-2">
                Trusted by 127+ companies worldwide since 2020
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}