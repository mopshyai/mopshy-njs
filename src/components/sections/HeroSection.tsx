'use client';

import Link from 'next/link';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center bg-[#1a1f3a] text-white overflow-hidden pt-20 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-16">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 sm:opacity-100" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-500/15 border border-blue-500/30 rounded-full mb-4 sm:mb-6 backdrop-blur-sm">
              <span className="text-base sm:text-lg">⚡</span>
              <span className="text-xs sm:text-sm font-semibold text-cyan-400">Trusted by 127+ Businesses | 347% More Leads</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
              Transform Website Visitors Into Qualified Sales Prospects{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
                  In Under 60 Seconds With AI
                </span>
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-semibold text-slate-200 mb-4 sm:mb-6 px-2 sm:px-0">
              While competitors take hours to respond, our AI automation captures, qualifies, and converts your prospects instantly—24/7 with zero manual work
            </p>

            <p className="text-sm sm:text-base text-slate-300 mb-6 sm:mb-8 lg:max-w-[90%] leading-relaxed px-2 sm:px-0">
              Stop losing $50k+ annually to slow response times and manual processes. Our intelligent AI automation systems work while you sleep, turning every website visitor into a qualified revenue opportunity with human-like conversations, instant lead qualification, and automated follow-up sequences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start px-2 sm:px-0">
              <Link
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>Start Free Trial</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-slate-600 text-white rounded-lg font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all inline-flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Strategy Call</span>
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm">
                <span className="text-lg sm:text-xl">🏆</span>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white">90%</span>
                  <span className="text-[10px] sm:text-xs text-slate-400">Client Retention</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm">
                <span className="text-lg sm:text-xl">⚡</span>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white">60s</span>
                  <span className="text-[10px] sm:text-xs text-slate-400">Response Time</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-slate-800/50 border border-slate-700 rounded-lg backdrop-blur-sm">
                <span className="text-lg sm:text-xl">🎯</span>
                <div className="flex flex-col">
                  <span className="text-sm sm:text-base font-bold text-white">24/7</span>
                  <span className="text-[10px] sm:text-xs text-slate-400">AI Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Dashboard Mockup */}
          <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-[500px] bg-white/95 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 sm:p-4 flex items-center justify-between">
                <div className="flex gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-[10px] sm:text-sm font-semibold hidden sm:block">AI Lead Generation Command Center</div>
                <div className="text-xs sm:text-sm font-semibold sm:hidden">AI Command Center</div>
                <div className="flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span>Live</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 text-slate-900">
                {/* Metric Cards */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-3 sm:p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-lg sm:text-xl">🚀</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">+347%</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold mb-1">2,847</div>
                    <div className="text-[10px] sm:text-xs text-slate-600 mb-2 sm:mb-3">Qualified Leads Generated</div>
                    <div className="flex items-end gap-1 h-3 sm:h-4">
                      {[20, 40, 60, 80, 100].map((height, i) => (
                        <div key={i} className="flex-1 bg-blue-500 rounded-sm opacity-80" style={{ height: `${height}%` }}></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 p-3 sm:p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-lg sm:text-xl">⚡</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">-92%</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold mb-1">45s</div>
                    <div className="text-[10px] sm:text-xs text-slate-600 mb-2 sm:mb-3">Average Response Time</div>
                    <div className="h-1 bg-blue-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-3 sm:p-4 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <span className="text-lg sm:text-xl">💰</span>
                      <span className="text-[10px] sm:text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-1 rounded">+$180k</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold mb-1">$847k</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">Revenue Generated</div>
                  </div>
                </div>

                {/* Activity Feed */}
                <div className="border-t border-slate-200 pt-3 sm:pt-4">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h4 className="text-xs sm:text-sm font-semibold">Real-Time AI Activity</h4>
                    <div className="flex items-center gap-1">
                      <span className="text-sm sm:text-base font-bold text-blue-600">12</span>
                      <span className="text-[10px] sm:text-xs text-slate-500">leads</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start gap-2 sm:gap-3 p-2 rounded-md hover:bg-slate-50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs font-medium text-slate-900">AI captured & qualified new lead</div>
                        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-500">
                          <span className="font-medium">Website Chat</span>
                          <span>2 min ago</span>
                        </div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded whitespace-nowrap">$12k</div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 p-2 rounded-md hover:bg-slate-50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs font-medium text-slate-900">Follow-up sequence initiated</div>
                        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-500">
                          <span className="font-medium">AI Assistant</span>
                          <span>5 min ago</span>
                        </div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded whitespace-nowrap">#3</div>
                    </div>

                    <div className="flex items-start gap-2 sm:gap-3 p-2 rounded-md hover:bg-slate-50 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1 flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] sm:text-xs font-medium text-slate-900">Meeting auto-scheduled</div>
                        <div className="flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-500">
                          <span className="font-medium">Calendar AI</span>
                          <span>12 min ago</span>
                        </div>
                      </div>
                      <div className="text-[9px] sm:text-[10px] font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded whitespace-nowrap">Tomorrow</div>
                    </div>
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