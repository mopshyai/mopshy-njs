'use client';

import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      package: 'STARTER PACKAGE',
      icon: '🧠',
      iconColor: 'from-blue-500 to-indigo-600',
      title: 'AI Lead Generation Engine',
      tagline: 'Transform website visitors into qualified sales prospects in under 60 seconds with AI automation',
      metric: '347%',
      metricLabel: 'Average increase in qualified lead conversations with AI automation',
      metricBg: 'bg-blue-50',
      metricColor: 'text-blue-600',
      sectionLabel: 'Revolutionary Capabilities:',
      capabilities: [
        { icon: '⚡', title: 'Hyper-Intelligent Chat AI', desc: 'Qualifies leads using your exact criteria with human-like conversations' },
        { icon: '🎯', title: 'Predictive Lead Scoring', desc: 'AI prioritizes your hottest prospects automatically' },
        { icon: '📧', title: 'Instant Personalization', desc: 'Auto-responders with personalized next steps in seconds' },
        { icon: '📊', title: 'Smart Form Optimization', desc: '35% higher completion rates through AI-driven UX' },
      ],
      perfectFor: 'Service businesses, B2B companies, professional services',
      timeLabel: 'Deployment',
      timeValue: '2-3 weeks to full operation',
      investment: 'Starting at $2,500/month',
      cta: 'Launch Your AI Engine →',
      ctaHref: 'mailto:mopshyai@gmail.com?subject=AI Lead Generation Engine Inquiry',
      btnClass: 'bg-blue-600 hover:bg-blue-700',
    },
    {
      package: 'ENTERPRISE PACKAGE',
      icon: '🚀',
      iconColor: 'from-orange-500 to-orange-600',
      title: 'Sales Automation Command Center',
      tagline: 'End manual follow-ups forever with intelligent pipeline automation',
      metric: '215%',
      metricLabel: 'Average ROI improvement within 6 months',
      metricBg: 'bg-orange-50',
      metricColor: 'text-orange-600',
      featured: true,
      sectionLabel: 'Enterprise Capabilities:',
      capabilities: [
        { icon: '🔄', title: 'Intelligent Pipeline Automation', desc: 'HubSpot/Salesforce integration that moves leads automatically' },
        { icon: '📈', title: '6-Month Nurture Sequences', desc: 'AI-powered email campaigns that convert over time' },
        { icon: '📅', title: 'Smart Scheduling Engine', desc: 'Calendar sync with automated reminders and follow-ups' },
        { icon: '📊', title: 'Pipeline Intelligence', desc: 'Real-time reporting shows exactly where leads get stuck' },
      ],
      perfectFor: 'Sales teams with 5+ reps, growing SaaS companies',
      timeLabel: 'Implementation',
      timeValue: '3-4 weeks full deployment',
      investment: 'Starting at $4,000/month',
      cta: 'Deploy Enterprise System →',
      ctaHref: 'mailto:mopshyai@gmail.com?subject=Enterprise Sales Automation Inquiry',
      btnClass: 'bg-orange-600 hover:bg-orange-700',
    },
    {
      package: 'CUSTOM SOLUTIONS',
      icon: '⚙️',
      iconColor: 'from-purple-500 to-purple-600',
      title: 'Bespoke Application Development',
      tagline: 'When off-the-shelf solutions can\'t handle your unique processes',
      metric: '60%',
      metricLabel: 'Reduction in support tickets with client portals',
      metricBg: 'bg-purple-50',
      metricColor: 'text-purple-600',
      sectionLabel: 'Custom Capabilities:',
      capabilities: [
        { icon: '🏢', title: 'Intelligent Client Portals', desc: 'Self-service platforms that reduce support burden' },
        { icon: '📱', title: 'Smart Booking Systems', desc: 'Availability optimization with automated confirmations' },
        { icon: '📊', title: 'Unified Dashboards', desc: 'Consolidate data from multiple tools into one view' },
        { icon: '🌐', title: 'Mobile-First Design', desc: 'Responsive applications that work on any device' },
      ],
      perfectFor: 'Professional services with complex workflows',
      timeLabel: 'Development',
      timeValue: '6-12 weeks custom build',
      investment: 'Starting at $15,000 project',
      cta: 'Build Custom Solution →',
      ctaHref: 'mailto:mopshyai@gmail.com?subject=Custom Application Development Inquiry',
      btnClass: 'bg-purple-600 hover:bg-purple-700',
    },
  ];

  return (
<section id="solutions" className="relative overflow-hidden pt-16">

      {/* Dark Header */}
      <div className="bg-[#1a1f3a] py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Transform Your Business with Intelligent Automation
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 max-w-3xl mx-auto px-2">
            Enterprise-grade AI systems designed to transform your business into a lead generation powerhouse
          </p>
        </div>
      </div>

      {/* Light Content Section */}
      <div className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 sm:mb-8">
              <Rocket className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-600">Revolutionary AI Solutions</span>
            </div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 sm:mb-4 px-2 leading-tight">
              Choose Your Revenue Acceleration Path
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Enterprise-grade AI systems designed to transform your business into a lead generation powerhouse
            </p>
          </div>

          {/* Solution Cards */}
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-7xl mx-auto">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`relative group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:shadow-2xl lg:hover:-translate-y-3 ${
                  solution.featured
                    ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300'
                    : 'border-slate-200 hover:border-blue-400'
                }`}
              >
                {/* Featured Badge */}
                {solution.featured && (
                  <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full text-xs font-semibold shadow-lg">
                    <span>👑</span>
                    <span className="hidden xs:inline">Most Popular</span>
                    <span className="xs:hidden">Popular</span>
                  </div>
                )}

                {/* Top border animation */}
                <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 bg-gradient-to-r ${solution.iconColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl sm:rounded-t-3xl`} />

                {/* Header with Icon */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${solution.iconColor} rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 group-hover:scale-110 flex-shrink-0`}>
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1.5 sm:mb-2 ${
                      solution.featured ? 'text-orange-600' : 
                      solution.package === 'CUSTOM SOLUTIONS' ? 'text-purple-600' : 'text-blue-600'
                    }`}>
                      {solution.package}
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">{solution.title}</h4>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm text-slate-600 mb-5 sm:mb-6 leading-relaxed">{solution.tagline}</p>

                {/* Metric */}
                <div className={`${solution.metricBg} rounded-xl p-4 sm:p-5 text-center mb-5 sm:mb-6`}>
                  <div className={`text-4xl sm:text-5xl font-bold ${solution.metricColor} mb-2 leading-none`}>{solution.metric}</div>
                  <div className="text-xs text-slate-700 leading-tight px-2">{solution.metricLabel}</div>
                </div>

                {/* Capabilities */}
                <div className="mb-5 sm:mb-6">
                  <h5 className="text-sm font-bold text-slate-900 mb-3 sm:mb-4">{solution.sectionLabel}</h5>
                  <div className="space-y-2.5 sm:space-y-3">
                    {solution.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 sm:gap-3">
                        <span className="text-base sm:text-lg flex-shrink-0 mt-0.5">{cap.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900 leading-tight mb-0.5 sm:mb-1">{cap.title}</div>
                          <div className="text-xs text-slate-600 leading-relaxed">{cap.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specs */}
                <div className="mb-5 sm:mb-6 space-y-2">
                  <div className="flex justify-between items-start text-xs sm:text-sm py-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">Perfect For</span>
                    <span className="text-slate-900 text-right text-xs max-w-[60%] sm:max-w-[55%] leading-tight">{solution.perfectFor}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">{solution.timeLabel}</span>
                    <span className="text-slate-900 text-xs text-right">{solution.timeValue}</span>
                  </div>
                  <div className="flex justify-between items-center text-xs sm:text-sm py-2">
                    <span className="font-semibold text-slate-700">Investment</span>
                    <span className="text-slate-900 text-xs">{solution.investment}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={solution.ctaHref}
                  className={`flex items-center justify-center gap-2 w-full px-5 sm:px-6 py-3 sm:py-3.5 ${solution.btnClass} text-white rounded-lg font-semibold transition-all text-sm sm:text-base active:scale-95`}
                >
                  <span>{solution.cta}</span>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-[#1a1f3a] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
              Not Sure Which Solution Fits Your Business?
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 px-2">
              Get a personalized recommendation based on your specific needs and growth stage
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
              <Link
                href="mailto:mopshyai@gmail.com?subject=Free Solution Assessment Request"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all text-sm sm:text-base active:scale-95 w-full sm:w-auto"
              >
                <span>Get Free Solution Assessment</span>
                <span>🎯</span>
              </Link>
              <Link
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all text-sm sm:text-base active:scale-95 w-full sm:w-auto"
              >
                <span>Book Strategy Call</span>
                <span>📅</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}