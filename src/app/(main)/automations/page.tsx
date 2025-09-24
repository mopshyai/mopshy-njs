'use client';

import Link from 'next/link';
import { Workflow } from 'lucide-react';

export default function AutomationsSection() {
  const integrations = [
    { name: 'Zapier', color: 'bg-[#FF4A00]' },
    { name: 'Make', color: 'bg-[#6366F1]' },
    { name: 'HubSpot', color: 'bg-[#FF7A59]' },
    { name: 'Calendly', color: 'bg-[#006BFF]' },
    { name: 'Notion', color: 'bg-black' },
    { name: 'Slack', color: 'bg-[#4A154B]' },
  ];

  const workflows = [
    {
      title: 'Calendly → CRM → Follow-Up',
      badge: { text: 'Popular', color: 'bg-teal-500' },
      steps: [
        { icon: '📅', label: 'Meeting\nBooked', color: 'bg-blue-500' },
        { icon: '📝', label: 'CRM Updated', color: 'bg-orange-500' },
        { icon: '✉️', label: 'Auto Follow-\nUp', color: 'bg-green-500' },
      ],
      description: 'Automatically update your CRM when meetings are booked and trigger personalized follow-up sequences.',
      stats: [
        { value: '95%', label: 'MEETING SHOW RATE' },
        { value: '3hrs', label: 'SAVED WEEKLY' },
      ],
    },
    {
      title: 'Lead Form → Mopshy → Email Series',
      badge: { text: 'AI', color: 'bg-cyan-500' },
      steps: [
        { icon: '📋', label: 'Form\nSubmitted', color: 'bg-purple-500' },
        { icon: '🤖', label: 'AI\nQualification', color: 'bg-amber-500' },
        { icon: '📧', label: 'Nurture Series', color: 'bg-red-500' },
      ],
      description: 'Qualify leads instantly with AI and automatically enroll them in targeted email nurture campaigns.',
      stats: [
        { value: '347%', label: 'LEAD QUALITY BOOST' },
        { value: '60s', label: 'RESPONSE TIME' },
      ],
    },
    {
      title: 'Sheet → AI Enrichment → Slack Ping',
      badge: { text: 'New', color: 'bg-cyan-500' },
      steps: [
        { icon: '📊', label: 'Data Added', color: 'bg-green-600' },
        { icon: '🔍', label: 'AI Enrichment', color: 'bg-blue-500' },
        { icon: '💬', label: 'Team Notified', color: 'bg-purple-700' },
      ],
      description: 'Automatically enrich lead data with AI insights and notify your team via Slack when high-value prospects are identified.',
      stats: [
        { value: '87%', label: 'DATA ACCURACY' },
        { value: '5hrs', label: 'SAVED WEEKLY' },
      ],
    },
  ];

  return (
    <section id="automations" className="relative overflow-hidden">
      {/* Dark Header */}
      <div className="bg-[#1a1f3a] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Plug & Play Automation Workflows
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto">
            Ready-made automation flows that integrate seamlessly with your existing tools. Deploy proven workflows in minutes, not weeks.
          </p>
        </div>
      </div>

      {/* Light Content Section */}
      <div className="bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-8">
              <Workflow className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-600">Automation Hub</span>
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Plug & Play Automations
            </h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
              Ready-made automation flows that integrate seamlessly with your existing tools
            </p>

            {/* Trusted Integrations */}
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-8">Trusted Integrations</h4>
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {integrations.slice(0, 5).map((integration) => (
                  <div
                    key={integration.name}
                    className="bg-white rounded-xl px-6 py-4 shadow-sm border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1"
                  >
                    <div className={`${integration.color} text-white text-sm font-bold px-4 py-1.5 rounded-md`}>
                      {integration.name}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center">
                <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-slate-200 transition-all hover:shadow-md hover:-translate-y-1">
                  <div className={`${integrations[5].color} text-white text-sm font-bold px-4 py-1.5 rounded-md`}>
                    {integrations[5].name}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 max-w-7xl mx-auto">
            {workflows.map((workflow, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-200 transition-all duration-300 hover:border-blue-400 hover:shadow-xl hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <h4 className="text-lg font-bold text-slate-900 pr-2">{workflow.title}</h4>
                  <span className={`${workflow.badge.color} text-white px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap`}>
                    {workflow.badge.text}
                  </span>
                </div>

                {/* Flow Diagram */}
                <div className="flex items-center justify-between mb-6 p-6 bg-slate-50 rounded-xl">
                  {workflow.steps.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex flex-col items-center flex-1">
                      <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-xl mb-2 transition-transform hover:scale-110`}>
                        {step.icon}
                      </div>
                      <div className="text-xs text-center text-slate-700 font-medium leading-tight whitespace-pre-line">
                        {step.label}
                      </div>
                      {stepIndex < workflow.steps.length - 1 && (
                        <div className="absolute left-1/2 text-blue-500 font-bold transform translate-x-8 -translate-y-6 hidden sm:block">→</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  {workflow.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {workflow.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center p-4 bg-slate-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                      <div className="text-xs text-slate-600 font-medium tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#1a1f3a] rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Automate Your Workflows?
            </h3>
            <p className="text-lg text-slate-300 mb-8">
              Browse our library of 50+ ready-made automation flows or request a custom solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:mopshyai@gmail.com?subject=Browse Ready-Made Flows"
                className="px-8 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all"
              >
                Browse Ready-Made Flows 🔍
              </Link>
              <Link
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all"
              >
                Request Custom Flow ➔
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}