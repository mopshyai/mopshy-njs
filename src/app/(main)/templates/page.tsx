'use client';

import Link from 'next/link';
import { Target } from 'lucide-react';

export default function TemplatesSection() {
  const templates = [
    {
      icon: '🏠',
      title: 'Real Estate Agent Follow-Up Bot',
      description: 'Automatically nurture property leads with personalized follow-ups and schedule viewings.',
      impact: 'Increases lead conversion by 40% while saving 15 hours per week on manual outreach.',
      features: ['Lead Qualification', 'Viewing Scheduler', 'Market Updates'],
    },
    {
      icon: '🦷',
      title: 'Dental Clinic Appointment Closer',
      description: 'Convert website visitors into booked appointments with intelligent scheduling assistance.',
      impact: 'Reduces no-shows by 35% and increases appointment bookings by 60% through smart reminders.',
      features: ['Smart Scheduling', 'Reminder System', 'Insurance Verification'],
    },
    {
      icon: '🔧',
      title: 'Local Service Lead Qualifier',
      description: 'Qualify home service leads instantly and route urgent requests to available technicians.',
      impact: 'Improves response time by 85% and increases job completion rates through better qualification.',
      features: ['Urgency Detection', 'Tech Routing', 'Quote Generator'],
    },
  ];

  return (
    <section id="templates" className="relative py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 sm:mb-8">
            <Target className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-medium text-blue-600">Industry Templates</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2 leading-tight">
            Tailored AI Agents by Industry
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Pre-built AI automation templates designed for specific industries and use cases
          </p>
        </div>

        {/* Template Cards */}
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-7xl mx-auto">
          {templates.map((template, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 transition-all duration-300 hover:border-blue-400 hover:shadow-2xl lg:hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-5 sm:mb-6 text-center">
                <div className="inline-flex w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl items-center justify-center text-2xl sm:text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110">
                  {template.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 text-center leading-tight">
                {template.title}
              </h3>
              <p className="text-sm text-slate-600 mb-2.5 sm:mb-3 leading-relaxed">
                {template.description}
              </p>
              <p className="text-sm text-slate-600 mb-5 sm:mb-6 leading-relaxed">
                {template.impact}
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-5 sm:mb-6 justify-center sm:justify-start">
                {template.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 sm:px-3 py-1 bg-blue-50 text-blue-600 text-xs font-semibold rounded-full border border-blue-100"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Button */}
              <Link
                href={`mailto:mopshyai@gmail.com?subject=${encodeURIComponent(template.title)} Template Preview`}
                className="flex items-center justify-center gap-2 w-full px-5 sm:px-6 py-3 bg-slate-100 text-slate-900 rounded-lg font-semibold hover:bg-slate-200 transition-colors text-sm sm:text-base active:scale-95"
              >
                <span>Preview Template</span>
                <span>👁️</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-slate-50 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 leading-tight px-2">
            Need a Custom Template?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 mb-6 sm:mb-8 px-2">
            We can create industry-specific AI agents tailored to your unique business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
            <Link
              href="https://cal.com/mopshyai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base active:scale-95 w-full sm:w-auto"
            >
              <span>Request Custom Template</span>
              <span>🎨</span>
            </Link>
            <Link
              href="mailto:mopshyai@gmail.com?subject=Template Consultation"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-colors text-sm sm:text-base active:scale-95 w-full sm:w-auto"
            >
              <span>Browse All Templates</span>
              <span>📋</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}