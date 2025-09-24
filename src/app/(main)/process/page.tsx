'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: 1,
      title: 'Strategy Call',
      duration: 'Week 1',
      tagline: '15-minute focused discussion—no generic sales pitch',
      description: 'We\'ll ask about your current lead generation challenges, biggest bottlenecks, and revenue goals. You\'ll leave with a clear understanding of what\'s possible and what it would take to get there.',
      deliverable: 'Priority action plan with 3 specific opportunities',
      emoji: '📋',
    },
    {
      number: 2,
      title: 'Technical Audit',
      duration: 'Week 1-2',
      tagline: 'Deep dive into your current systems and processes',
      description: 'We analyze your website traffic, conversion rates, lead sources, and existing tools to identify the highest-impact improvements.',
      deliverable: '10-page audit report with ROI projections for each recommendation',
      emoji: '📊',
    },
    {
      number: 3,
      title: 'Solution Design',
      duration: 'Week 2-3',
      tagline: 'Custom blueprint created specifically for your business',
      description: 'No cookie-cutter approaches. We design workflows, automation sequences, and user experiences based on your unique customer journey and business model.',
      deliverable: 'Detailed mockups, workflow diagrams, and implementation timeline',
      emoji: '🎨',
    },
    {
      number: 4,
      title: 'Development & Testing',
      duration: 'Week 3-6',
      tagline: 'Built with regular check-ins and your feedback',
      description: 'We build in 2-week sprints with demos at each milestone. You see progress continuously and can request adjustments before final deployment.',
      deliverable: 'Fully functional system with documented processes',
      emoji: '⚙️',
    },
    {
      number: 5,
      title: 'Launch & Optimization',
      duration: 'Week 6+',
      tagline: 'Go-live support plus performance monitoring',
      description: 'We don\'t just hand over the keys. Our team monitors performance for the first 30 days, makes adjustments based on real data, and trains your team on ongoing management.',
      deliverable: 'Performance dashboard, training materials, and 30-day optimization report',
      emoji: '🚀',
    },
  ];

  return (
    <section id="process" className="relative overflow-hidden">
      {/* Dark header section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven Implementation Methodology
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-2">
            A proven 5-phase approach that delivers results without disrupting your daily operations.
          </p>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Designed for busy business owners who need results, not complications.
          </p>
        </div>
      </div>

      {/* Light content section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6 sm:mb-8">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-600">Proven Implementation Process</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Process - Designed for Busy Business Owners
            </h3>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
              A proven 5-phase approach that delivers results without disrupting your daily operations
            </p>
          </div>

          {/* Desktop Timeline - Hidden on mobile */}
          <div className="hidden lg:block max-w-6xl mx-auto mb-20">
            <div className="relative">
              {/* Vertical center line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform -translate-x-1/2" />

              {/* Steps */}
              {steps.map((step, index) => (
                <div key={step.number} className="relative mb-16 last:mb-0">
                  {/* Horizontal connecting line */}
                  <div className={`absolute top-16 w-24 h-0.5 bg-blue-200 ${index % 2 === 0 ? 'right-1/2' : 'left-1/2'}`} />
                  
                  <div className={`flex items-start ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-[45%] ${index % 2 === 0 ? 'pr-24' : 'pl-24 text-right'}`}>
                      {/* Card */}
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                        <div className={`flex items-center justify-between mb-4 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                          <h4 className="text-xl font-bold text-slate-900">{step.title}</h4>
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold whitespace-nowrap">
                            {step.duration}
                          </span>
                        </div>
                        <p className={`text-sm font-semibold text-blue-600 mb-3 ${index % 2 === 1 ? 'text-right' : ''}`}>
                          {step.tagline}
                        </p>
                        <p className={`text-slate-600 mb-6 leading-relaxed ${index % 2 === 1 ? 'text-right' : ''}`}>
                          {step.description}
                        </p>
                        <div className={`flex gap-3 p-4 bg-slate-50 border-l-4 border-blue-500 rounded-lg ${index % 2 === 1 ? 'flex-row-reverse border-l-0 border-r-4' : ''}`}>
                          <span className="text-2xl flex-shrink-0">{step.emoji}</span>
                          <div className={index % 2 === 1 ? 'text-right' : ''}>
                            <span className="text-sm font-semibold text-slate-900">Deliverable: </span>
                            <span className="text-sm text-slate-700">{step.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step number circle - centered */}
                  <div className="absolute left-1/2 top-12 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline - Vertical stack */}
          <div className="lg:hidden max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  {/* Mobile: Simple vertical line between cards */}
                  <div className="flex gap-4">
                    {/* Step number */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xl sm:text-2xl font-bold text-white">{step.number}</span>
                      </div>
                    </div>

                    {/* Card */}
                    <div className="flex-1 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h4 className="text-lg sm:text-xl font-bold text-slate-900">{step.title}</h4>
                        <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-blue-600 mb-3">
                        {step.tagline}
                      </p>
                      <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-start gap-3 p-3 sm:p-4 bg-slate-50 border-l-4 border-blue-500 rounded-lg">
                        <span className="text-xl sm:text-2xl flex-shrink-0">{step.emoji}</span>
                        <div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-900">Deliverable: </span>
                          <span className="text-xs sm:text-sm text-slate-700">{step.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ongoing Support Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/20">
                    <span className="text-3xl sm:text-4xl">🛠️</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Ongoing Support Available
                  </h4>
                  <p className="text-base sm:text-lg text-slate-200 mb-6">
                    Monthly optimization packages starting at $1,500/month
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="mailto:mopshyai@gmail.com?subject=Ongoing Support Inquiry"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                    >
                      Learn More
                    </Link>
                    <Link
                      href="https://cal.com/mopshyai/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                    >
                      Book Call
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}