'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSections = [
    {
      title: "General Questions",
      questions: [
        {
          q: "What is Mopshy.ai and how does it help businesses?",
          a: "Mopshy.ai is an AI automation agency specializing in building 24/7 lead generation and sales systems. We help businesses capture, qualify, and nurture prospects instantly, eliminating slow response times and excessive manual work to convert visitors into qualified prospects in under 60 seconds."
        },
        {
          q: "How does Mopshy.ai's AI system generate and qualify leads so quickly?",
          a: "Our AI leverages hyper-intelligent lead capture, advanced behavioral analysis, and intelligent lead scoring to identify buying intent. It then uses conversational AI to engage prospects with human-like interactions and predictive nurture sequences to guide them through the sales funnel, all in real-time."
        },
        {
          q: "What types of businesses are Mopshy.ai's solutions best suited for?",
          a: "Our solutions are ideal for service businesses, B2B companies, professional services, sales teams with 5+ reps, and growing SaaS companies. We also offer custom solutions for businesses with unique or complex workflows."
        }
      ]
    },
    {
      title: "Implementation & Integration",
      questions: [
        {
          q: "Does Mopshy.ai replace my existing sales team or CRM?",
          a: "No, Mopshy.ai's systems are designed to augment and empower your sales team by handling repetitive tasks like lead qualification, initial responses, and nurturing. This allows your human team to focus on closing pre-qualified, high-value leads. We also offer robust integrations with popular CRMs like HubSpot, Salesforce, and Zoho."
        },
        {
          q: "How long does it take to implement Mopshy.ai's AI systems?",
          a: "The implementation timeline varies by solution: the Starter Package typically takes 2-3 weeks to full operation, and the Enterprise Package requires 3-4 weeks for full deployment. Custom Solutions involve a longer development period of 6-12 weeks, following our proven 5-phase process."
        }
      ]
    },
    {
      title: "Pricing & Results",
      questions: [
        {
          q: "What is the typical cost of Mopshy.ai's AI automation solutions?",
          a: "Mopshy.ai offers several packages: the 'Starter Package' for AI Lead Generation Engine starts at $2,500/month, and the 'Enterprise Package' for Sales Automation Command Center starts at $4,000/month. Custom Solutions for bespoke applications begin at $15,000 per project. We offer a free solution assessment to help determine the best fit for your business."
        },
        {
          q: "What kind of results can I expect after implementing Mopshy.ai's solutions?",
          a: "Clients have seen significant improvements, including a 347% average increase in qualified conversations, 215% average ROI improvement within 6 months, and reductions in response times from hours to seconds. Case studies show additional revenue generated and substantial savings in labor costs."
        }
      ]
    }
  ];

  // Flatten all questions for easier indexing
  const allQuestions = faqSections.flatMap(section => section.questions);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>❓</span>
              <span className="text-sm font-semibold">Frequently Asked Questions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Common Questions About Our AI Automation Solutions
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Get answers to the most frequently asked questions about our services, implementation process, and results
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-16">
            {faqSections.map((section, sectionIdx) => {
              const startIdx = faqSections.slice(0, sectionIdx).reduce((acc, s) => acc + s.questions.length, 0);
              
              return (
                <div key={sectionIdx}>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-600">
                    {section.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {section.questions.map((faq, questionIdx) => {
                      const globalIdx = startIdx + questionIdx;
                      const isOpen = openIndex === globalIdx;
                      
                      return (
                        <div 
                          key={questionIdx}
                          className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-600 hover:shadow-md transition-all"
                        >
                          <button
                            onClick={() => setOpenIndex(isOpen ? -1 : globalIdx)}
                            className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-white"
                          >
                            <h3 className="text-base sm:text-lg font-semibold text-slate-900 pr-4">
                              {faq.q}
                            </h3>
                            <div className={`w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl flex-shrink-0 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                              +
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-slate-50 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Have More Questions?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team is ready to answer any questions you have about our AI automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book Strategy Call 📅
              </Link>
              <Link 
                href="mailto:mopshyai@gmail.com?subject=AI Automation Questions"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Email Your Questions 📧
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </main>
  );
}