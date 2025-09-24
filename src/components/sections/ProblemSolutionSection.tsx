
'use client';

import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function ProblemSolutionSection() {
  const problems = [
    {
      icon: '⏰',
      title: 'The 5-Minute Rule is Killing Your Revenue',
      desc: 'Research shows that companies responding to leads within 5 minutes are 9x more likely to convert them. Yet 78% of businesses take over 24 hours to respond. Your prospects aren\'t waiting—they\'re buying from faster competitors.',
      stats: [
        { number: '73%', label: 'of leads never get followed up' },
        { number: '$50k+', label: 'annual revenue lost' },
      ],
    },
    {
      icon: '💸',
      title: 'Manual Processes Are Bleeding Your Profits',
      desc: 'Your team spends 15+ hours weekly on repetitive tasks: answering the same questions, scheduling calls, sending follow-ups. That\'s $78,000 annually in wasted labor costs—money that should be driving growth, not maintaining status quo.',
      stats: [
        { number: '15hrs', label: 'wasted per week' },
        { number: '$78k', label: 'in labor costs' },
      ],
    },
    {
      icon: '🎯',
      title: 'Unqualified Leads Are Destroying Your ROI',
      desc: 'Without intelligent qualification, your sales team wastes 60% of their time on tire-kickers and unqualified prospects. Meanwhile, real buyers slip through the cracks because they don\'t get the immediate attention they expect.',
      stats: [
        { number: '2-5%', label: 'conversion rate' },
        { number: '60%', label: 'time wasted' },
      ],
    },
  ];

  const solutions = [
    {
      icon: '🧠',
      title: 'Hyper-Intelligent Lead Capture & Qualification',
      desc: 'Our AI doesn\'t just capture leads—it thinks like your best salesperson. It asks the right questions, identifies buying intent, and routes high-value prospects directly to your calendar. Every visitor becomes a qualified opportunity.',
      features: [
        '30-second guaranteed response time',
        'Advanced behavioral analysis',
        'Intelligent lead scoring algorithm',
        'Automatic calendar integration',
        'Custom qualification workflows',
      ],
      result: { metric: '347%', label: 'increase in qualified conversations' },
    },
    {
      icon: '🚀',
      title: 'Predictive Nurture Sequences That Convert',
      desc: 'Not ready to buy today? Our AI predicts the perfect moment to re-engage. Using behavioral triggers and timing optimization, we nurture prospects with personalized content until they\'re ready to purchase—automatically.',
      features: [
        'Behavioral trigger campaigns',
        'Predictive timing optimization',
        'Multi-channel orchestration',
        'Dynamic content personalization',
        'Intent-based segmentation',
      ],
      result: { metric: '6+ months', label: 'automated relationship building' },
    },
    {
      icon: '💬',
      title: 'Conversational AI That Feels Human',
      desc: 'Your prospects experience natural, contextual conversations that build trust and rapport. Our AI understands nuance, maintains your brand voice, and seamlessly hands off to humans when needed—creating the perfect customer experience.',
      features: [
        'Natural language understanding',
        'Context-aware responses',
        'Brand voice consistency',
        'Emotional intelligence',
        'Seamless human handoff',
      ],
      result: { metric: '24/7', label: 'human-quality availability' },
    },
    {
      icon: '📊',
      title: 'Predictive Analytics & Revenue Intelligence',
      desc: 'See the future of your pipeline with AI-powered insights. Our system predicts which leads will convert, identifies bottlenecks before they happen, and optimizes your entire revenue process for maximum growth.',
      features: [
        'Predictive lead scoring',
        'Revenue forecasting',
        'Conversion optimization',
        'Pipeline intelligence',
        'ROI attribution modeling',
      ],
      result: { metric: '215%', label: 'average ROI improvement' },
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 xl:py-32 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Problems Section */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent px-4">
              The Hidden Revenue Leak in Your Business
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Every day, qualified prospects are choosing your competitors—not because they offer better services, but because they respond faster
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="group bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                
                <div className="text-center mb-4 sm:mb-6">
                  <div className="text-5xl sm:text-6xl mb-3 sm:mb-4 inline-block relative">
                    {problem.icon}
                    <div className="absolute inset-0 bg-orange-400/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-slate-900">{problem.title}</h3>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">{problem.desc}</p>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {problem.stats.map((stat, i) => (
                    <div key={i} className="p-3 sm:p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <div className="text-xl sm:text-2xl font-bold text-orange-600 mb-1">{stat.number}</div>
                      <div className="text-xs text-slate-700 leading-tight">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solutions Section */}
        <div className="relative bg-[#1a1f3a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 xl:p-24 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 sm:opacity-100"></div>

          <div className="relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent px-4">
                Revolutionary AI That Never Sleeps, Never Misses a Lead
              </h2>
              <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4">
                Imagine if your best salesperson worked 24/7, responded in seconds, and never took a day off. That's what our AI delivers.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {solutions.map((solution, idx) => (
                <div
                  key={idx}
                  className="group bg-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/20 hover:bg-white/15 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl sm:text-4xl mb-4 sm:mb-6 border border-white/30 group-hover:scale-110 group-hover:bg-white/30 transition-all">
                    {solution.icon}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{solution.title}</h3>
                  <p className="text-sm sm:text-base text-slate-300 mb-4 sm:mb-6 leading-relaxed">{solution.desc}</p>

                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                        <span className="text-green-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-3 p-3 sm:p-4 bg-white/10 rounded-lg border border-white/20">
                    <div className="text-xl sm:text-2xl font-bold text-green-400">{solution.result.metric}</div>
                    <div className="text-xs sm:text-sm text-slate-300 leading-tight">{solution.result.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center p-6 sm:p-8 lg:p-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 px-4">
                Ready to Transform Your Lead Generation?
              </h3>
              <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Join 127+ businesses worldwide already using our AI to capture, qualify, and convert more leads than ever before.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                <Link
                  href="mailto:mopshyai@gmail.com?subject=Free AI Analysis Request"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm sm:text-base"
                >
                  <span>Get Your Free AI Analysis</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <Link
                  href="https://cal.com/mopshyai/30min"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors text-sm sm:text-base"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Book Strategy Call</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}