'use client';

import Link from 'next/link';
import { Trophy } from 'lucide-react';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      company: 'TechVision Global',
      industry: 'B2B Software Company',
      logo: 'TV',
      challenge: 'Missing 60% of inbound leads due to slow response times',
      solution: 'AI chat qualification system + automated email sequences',
      timeframe: '90 Days',
      results: [
        { value: '347%', label: 'increase in qualified lead conversations', icon: '↗️', color: 'blue' },
        { value: '45s', label: 'response time (from 4 hours)', icon: '⚡', color: 'green' },
        { value: '$180k', label: 'additional revenue attributed', icon: '💰', color: 'orange' },
      ],
      quote: "We went from losing prospects to competitors to having them specifically mention how impressed they were with our quick, thoughtful responses. It's been a complete game-changer for our sales process.",
      author: { name: 'Sarah Chen', title: 'VP of Sales', avatar: 'SC' },
      featured: false,
    },
    {
      company: 'InnovatePro Solutions',
      industry: 'Professional Services',
      logo: 'IP',
      challenge: 'Spending 15 hours/week on appointment scheduling and follow-ups',
      solution: 'Automated scheduling system + CRM integration + nurture campaigns',
      timeframe: '6 Months',
      results: [
        { value: '87%', label: 'reduction in manual scheduling tasks', icon: '📉', color: 'blue' },
        { value: '215%', label: 'ROI on automation investment', icon: '📈', color: 'green' },
        { value: '15hrs', label: 'saved per week', icon: '⏰', color: 'orange' },
      ],
      quote: "I got my evenings back. The system handles all the repetitive work while maintaining the personal touch our clients expect. Our client satisfaction scores actually went up.",
      author: { name: 'Marcus Rodriguez', title: 'Founder', avatar: 'MR' },
      featured: true,
    },
    {
      company: 'FutureScale Tech',
      industry: 'SaaS Startup',
      logo: 'FS',
      challenge: 'Needed to scale lead generation without hiring additional sales staff',
      solution: 'Complete lead qualification and nurturing system',
      timeframe: '4 Months',
      results: [
        { value: '412%', label: 'more qualified leads', icon: '🚀', color: 'blue' },
        { value: '63%', label: 'reduced cost per qualified lead', icon: '💸', color: 'green' },
        { value: '2mo', label: 'ahead of break-even projections', icon: '📅', color: 'orange' },
      ],
      quote: "Mopshy's system let us compete with companies 10x our size. We're closing deals that would have gone to bigger competitors because we respond faster and provide better initial experiences.",
      author: { name: 'Emily Thompson', title: 'CEO', avatar: 'ET' },
      featured: false,
    },
  ];

  return (
    <section id="case-studies" className="relative pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 bg-slate-50 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 sm:mb-8">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600">Proven Results</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2 leading-tight">
            Success Stories - Real Results from Global Businesses
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            See how our AI lead generation systems have transformed businesses worldwide
          </p>
        </div>

        {/* Case Studies */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-7xl mx-auto">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`relative group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border transition-all duration-500 hover:shadow-2xl lg:hover:-translate-y-3 ${
                study.featured
                  ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300'
                  : 'border-slate-200 hover:border-blue-400'
              }`}
            >
              {/* Featured Badge */}
              {study.featured && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full text-xs font-semibold shadow-lg">
                  <span>⭐</span>
                  <span className="hidden xs:inline">Featured Success</span>
                  <span className="xs:hidden">Featured</span>
                </div>
              )}

              {/* Top border animation */}
              <div className={`absolute top-0 left-0 right-0 h-1 sm:h-1.5 ${study.featured ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-indigo-600'} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-t-2xl sm:rounded-t-3xl`} />

              {/* Header */}
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <div className="flex-1 min-w-0 pr-3">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1 leading-tight">{study.company}</h3>
                  <div className="text-xs sm:text-sm font-semibold text-blue-600">{study.industry}</div>
                </div>
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0 text-sm sm:text-base">
                  {study.logo}
                </div>
              </div>

              {/* Challenge */}
              <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-red-50 rounded-lg sm:rounded-xl border border-red-100 mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-red-100 rounded-lg flex items-center justify-center text-lg sm:text-xl flex-shrink-0">⚠️</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Challenge:</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{study.challenge}</p>
                </div>
              </div>

              {/* Solution */}
              <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl border border-green-100 mb-5 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 rounded-lg flex items-center justify-center text-lg sm:text-xl flex-shrink-0">💡</div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-1">Solution:</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-5 sm:mb-6">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 text-center mb-3 sm:mb-4">
                  Results After {study.timeframe}:
                </h4>
                <div className="space-y-2.5 sm:space-y-3">
                  {study.results.map((result, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-lg sm:rounded-xl border ${
                        result.color === 'blue' ? 'bg-blue-50 border-blue-200' :
                        result.color === 'green' ? 'bg-green-50 border-green-200' :
                        'bg-orange-50 border-orange-200'
                      }`}
                    >
                      <div className={`text-xl sm:text-2xl font-bold ${
                        result.color === 'blue' ? 'text-blue-600' :
                        result.color === 'green' ? 'text-green-600' :
                        'text-orange-600'
                      }`}>
                        {result.value}
                      </div>
                      <div className="flex-1 min-w-0 text-xs text-slate-700 leading-tight">{result.label}</div>
                      <div className="text-lg sm:text-xl flex-shrink-0">{result.icon}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="p-3 sm:p-4 bg-slate-50 rounded-lg sm:rounded-xl border-l-4 border-blue-500 mb-4">
                <p className="text-xs sm:text-sm italic text-slate-700 mb-3 sm:mb-4 leading-relaxed">"{study.quote}"</p>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {study.author.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 truncate">{study.author.name}</div>
                    <div className="text-xs text-slate-600">{study.author.title}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-[#1a1f3a] rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
            Ready to Join These Success Stories?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 px-2">
            Get your free lead generation analysis and see how we can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
            <Link
              href="mailto:mopshyai@gmail.com?subject=Free Lead Analysis Request"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all text-sm sm:text-base active:scale-95 w-full sm:w-auto"
            >
              <span>Get Your Free Analysis</span>
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
    </section>
  );
}