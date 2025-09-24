'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ROICalculatorPage() {
  const [inputs, setInputs] = useState({
    monthlyLeads: 1000,
    conversionRate: 2,
    leadValue: 500,
    responseTime: 4,
    followUpRate: 30,
  });

  const [results, setResults] = useState({
    currentLeads: 20,
    currentRevenue: 3000,
    currentAnnual: 36000,
    improvedLeads: 30,
    improvedRevenue: 24300,
    improvedAnnual: 291600,
    additionalRevenue: 255600,
    roiPercentage: 710,
    paybackPeriod: 2.3,
  });

  useEffect(() => {
    calculateROI();
  }, [inputs]);

  const calculateROI = () => {
    const { monthlyLeads, conversionRate, leadValue, responseTime, followUpRate } = inputs;

    const currentLeads = Math.round(monthlyLeads * (conversionRate / 100));
    const currentMonthlyRevenue = currentLeads * leadValue * (followUpRate / 100);
    const currentAnnualRevenue = currentMonthlyRevenue * 12;

    let conversionImprovement = 1.5;
    let responseImprovement = 1.0;

    if (responseTime > 24) responseImprovement = 3.0;
    else if (responseTime > 4) responseImprovement = 2.5;
    else if (responseTime > 1) responseImprovement = 1.8;
    else responseImprovement = 1.2;

    const followUpImprovement = 3.0;
    const improvedConversionRate = Math.min(conversionRate * conversionImprovement, 15);
    const improvedFollowUpRate = Math.min(followUpRate * followUpImprovement, 95);

    const improvedLeads = Math.round(monthlyLeads * (improvedConversionRate / 100));
    const improvedMonthlyRevenue = improvedLeads * leadValue * (improvedFollowUpRate / 100) * responseImprovement;
    const improvedAnnualRevenue = improvedMonthlyRevenue * 12;

    const additionalAnnualRevenue = improvedAnnualRevenue - currentAnnualRevenue;
    const roiPercentage = currentAnnualRevenue > 0 ? Math.round(((improvedAnnualRevenue - currentAnnualRevenue) / currentAnnualRevenue) * 100) : 0;
    const monthlyInvestment = 4000;
    const paybackMonths = additionalAnnualRevenue > 0 ? (monthlyInvestment * 12) / additionalAnnualRevenue * 12 : 0;

    setResults({
      currentLeads,
      currentRevenue: Math.round(currentMonthlyRevenue),
      currentAnnual: Math.round(currentAnnualRevenue),
      improvedLeads,
      improvedRevenue: Math.round(improvedMonthlyRevenue),
      improvedAnnual: Math.round(improvedAnnualRevenue),
      additionalRevenue: Math.round(additionalAnnualRevenue),
      roiPercentage,
      paybackPeriod: Math.max(0.1, paybackMonths),
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({ ...prev, [field]: parseFloat(value) || 0 }));
  };

  return (
    <div className="min-h-screen bg-[#1a1f3a] text-white">
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span>📊</span>
              <span className="text-sm font-semibold">ROI Calculator</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Calculate Your Lead Generation ROI
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Discover how much additional revenue you could generate with AI-powered lead generation automation
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-12 items-start">
            {/* Left Form */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 lg:sticky lg:top-8">
              <div className="mb-6">
                <h2 className="text-xl font-bold mb-2">Your Current Situation</h2>
                <p className="text-sm text-slate-400">Enter your current metrics to see potential improvements</p>
              </div>

              <div className="space-y-5">
                {[
                  { id: 'monthlyLeads', label: 'Monthly Website Visitors', help: 'Average monthly visitors to your website' },
                  { id: 'conversionRate', label: 'Current Conversion Rate (%)', help: 'Percentage of visitors who become leads', step: '0.1' },
                  { id: 'leadValue', label: 'Average Lead Value ($)', help: 'Average revenue per converted lead' },
                  { id: 'responseTime', label: 'Current Response Time (hours)', help: 'How quickly you respond to new leads', step: '0.5' },
                  { id: 'followUpRate', label: 'Follow-up Rate (%)', help: 'Percentage of leads you successfully follow up with' },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-sm font-medium mb-2">{field.label}</label>
                    <input
                      type="number"
                      step={field.step}
                      value={inputs[field.id as keyof typeof inputs]}
                      onChange={(e) => handleInputChange(field.id, e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-slate-500 focus:bg-slate-700/50 transition-all"
                    />
                    <p className="text-xs text-slate-500 mt-1.5 italic">{field.help}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Results */}
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Your Potential with AI Automation</h2>
                <p className="text-slate-400">Based on average improvements from our clients</p>
              </div>

              {/* Results Cards */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-slate-700/50">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Current Performance</h3>
                    <span className="text-2xl">📈</span>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">{results.currentLeads}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Monthly Leads</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">${results.currentRevenue.toLocaleString()}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Monthly Revenue</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">${results.currentAnnual.toLocaleString()}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Annual Revenue</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-green-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">With AI Automation</h3>
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">{results.improvedLeads}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Monthly Leads</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">${results.improvedRevenue.toLocaleString()}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Monthly Revenue</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">${results.improvedAnnual.toLocaleString()}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Annual Revenue</div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border border-orange-500/30">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-bold text-lg">Your ROI Impact</h3>
                    <span className="text-2xl">💰</span>
                  </div>
                  <div className="space-y-4">
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">${results.additionalRevenue.toLocaleString()}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Additional Annual Revenue</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">{results.roiPercentage}%</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Improvement</div>
                    </div>
                    <div className="text-center py-2">
                      <div className="text-3xl font-bold mb-1">{results.paybackPeriod.toFixed(1)}</div>
                      <div className="text-xs text-slate-400 uppercase tracking-wide">Months to ROI</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* How We Achieve */}
              <div className="bg-slate-800/30 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/30">
                <h3 className="text-xl font-bold mb-6">How We Achieve These Results:</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: '⚡', title: '60-Second Response Time', desc: 'AI responds instantly, increasing conversion by 9x compared to 4+ hour delays' },
                    { icon: '🎯', title: 'Intelligent Lead Qualification', desc: 'AI identifies and prioritizes high-value prospects automatically' },
                    { icon: '🔄', title: 'Automated Follow-up Sequences', desc: 'Never miss a lead with 6-month nurture campaigns that run 24/7' },
                    { icon: '📊', title: 'Conversion Optimization', desc: 'AI continuously improves forms, messaging, and user experience' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="text-2xl flex-shrink-0 w-10 h-10 flex items-center justify-center bg-slate-700/30 rounded-lg">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl p-10 border border-slate-700/50 text-center">
                <h3 className="text-2xl font-bold mb-3">Ready to Achieve These Results?</h3>
                <p className="text-slate-400 mb-8">Get a custom implementation plan based on your specific business needs</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="mailto:mopshyai@gmail.com?subject=ROI Calculator Results" className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                    Get Custom Implementation Plan
                  </Link>
                  <Link href="https://cal.com/mopshyai/30min" target="_blank" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                    Book Strategy Call
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}