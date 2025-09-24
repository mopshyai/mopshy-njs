'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);
  
    const faqs = [
      {
        question: "What is Mopshy.ai and how does it help businesses?",
        answer: "Mopshy.ai is an AI automation agency specializing in building 24/7 lead generation and sales systems. We help businesses capture, qualify, and nurture prospects instantly, eliminating slow response times and excessive manual work to convert visitors into qualified prospects in under 60 seconds."
      },
      {
        question: "How does Mopshy.ai's AI system generate and qualify leads so quickly?",
        answer: "Our AI leverages hyper-intelligent lead capture, advanced behavioral analysis, and intelligent lead scoring to identify buying intent. It then uses conversational AI to engage prospects with human-like interactions and predictive nurture sequences to guide them through the sales funnel, all in real-time."
      },
      {
        question: "What types of businesses are Mopshy.ai's solutions best suited for?",
        answer: "Our solutions are ideal for service businesses, B2B companies, professional services, sales teams with 5+ reps, and growing SaaS companies. We also offer custom solutions for businesses with unique or complex workflows."
      },
      {
        question: "Does Mopshy.ai replace my existing sales team or CRM?",
        answer: "No, Mopshy.ai's systems are designed to augment and empower your sales team by handling repetitive tasks like lead qualification, initial responses, and nurturing. This allows your human team to focus on closing pre-qualified, high-value leads. We also offer robust integrations with popular CRMs like HubSpot, Salesforce, and Zoho."
      },
      {
        question: "What is the typical cost of Mopshy.ai's AI automation solutions?",
        answer: "Mopshy.ai offers several packages: the 'Starter Package' for AI Lead Generation Engine starts at $2,500/month, and the 'Enterprise Package' for Sales Automation Command Center starts at $4,000/month. Custom Solutions for bespoke applications begin at $15,000 per project. We offer a free solution assessment to help determine the best fit for your business."
      },
      {
        question: "How long does it take to implement Mopshy.ai's AI systems?",
        answer: "The implementation timeline varies by solution: the Starter Package typically takes 2-3 weeks to full operation, and the Enterprise Package requires 3-4 weeks for full deployment. Custom Solutions involve a longer development period of 6-12 weeks, following our proven 5-phase process."
      },
      {
        question: "What kind of results can I expect after implementing Mopshy.ai's solutions?",
        answer: "Clients have seen significant improvements, including a 347% average increase in qualified conversations, 215% average ROI improvement within 6 months, and reductions in response times from hours to seconds. Case studies show additional revenue generated and substantial savings in labor costs."
      },
    ];
  
    return (
      <section id="faq" className="py-12 sm:py-16 md:py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]" />
  
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 sm:mb-8">
              <span className="text-sm sm:text-base">❓</span>
              <span className="text-xs sm:text-sm font-medium text-blue-600">Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent px-4">
              Common Questions About Our AI Automation Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Get answers to the most frequently asked questions about our services, implementation process, and results
            </p>
          </div>
  
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-16 max-w-6xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg sm:rounded-xl shadow-md border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full p-4 sm:p-6 text-left flex items-start justify-between gap-3 sm:gap-4"
                >
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-tight pr-2 sm:pr-4">
                    {faq.question}
                  </h3>
                  <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 transition-transform ${openIndex === idx ? 'rotate-45' : ''}`}>
                    <span className="text-lg sm:text-xl leading-none">+</span>
                  </div>
                </button>
                {openIndex === idx && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
  
          <div className="bg-[#1a1f3a] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 text-center">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4">Have More Questions?</h3>
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 px-4">
              Our team is ready to answer any questions you have about our AI automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link href="https://cal.com/mopshyai/30min" target="_blank" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-sm sm:text-base">
                Book Strategy Call 📅
              </Link>
              <Link href="mailto:mopshyai@gmail.com?subject=AI Automation Questions" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors text-sm sm:text-base">
                Email Your Questions 📧
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }