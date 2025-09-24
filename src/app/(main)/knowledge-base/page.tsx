'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function KnowledgeBasePage() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim()) {
      const emailBody = `
Knowledge Base Search Request:

Search Query: ${searchQuery}
Date: ${new Date().toLocaleDateString()}

Please provide relevant guides and resources for this topic.
      `;
      
      window.location.href = `mailto:mopshyai@gmail.com?subject=Knowledge Base Search: ${searchQuery}&body=${encodeURIComponent(emailBody)}`;
    }
  };

  const categories = [
    {
      title: "Getting Started",
      articles: [
        {
          icon: "🚀",
          title: "AI Automation Fundamentals",
          desc: "Learn the basics of AI automation and how it can transform your business operations.",
          subject: "AI Automation Fundamentals Guide"
        },
        {
          icon: "⚙️",
          title: "Setting Up Your First Automation",
          desc: "Step-by-step guide to implementing your first AI-powered automation system.",
          subject: "First Automation Setup Guide"
        },
        {
          icon: "📊",
          title: "Measuring Automation ROI",
          desc: "How to track and measure the return on investment of your automation initiatives.",
          subject: "Automation ROI Guide"
        }
      ]
    },
    {
      title: "Lead Generation",
      articles: [
        {
          icon: "🎯",
          title: "AI Lead Qualification Best Practices",
          desc: "Advanced strategies for qualifying leads using AI and machine learning.",
          subject: "Lead Qualification Guide"
        },
        {
          icon: "💬",
          title: "Chatbot Optimization Strategies",
          desc: "How to optimize your AI chatbots for maximum lead capture and conversion.",
          subject: "Chatbot Optimization Guide"
        },
        {
          icon: "📧",
          title: "Automated Email Sequences",
          desc: "Creating effective email automation sequences that nurture and convert leads.",
          subject: "Email Automation Guide"
        }
      ]
    },
    {
      title: "Technical Implementation",
      articles: [
        {
          icon: "🔗",
          title: "CRM Integration Guide",
          desc: "How to integrate AI automation with popular CRM platforms like HubSpot and Salesforce.",
          subject: "CRM Integration Guide"
        },
        {
          icon: "🛠️",
          title: "API Documentation",
          desc: "Complete API documentation for integrating with Mopshy's automation platform.",
          subject: "API Documentation Request"
        },
        {
          icon: "🔧",
          title: "Troubleshooting Common Issues",
          desc: "Solutions to common problems and how to resolve them quickly.",
          subject: "Troubleshooting Guide"
        }
      ]
    },
    {
      title: "Advanced Strategies",
      articles: [
        {
          icon: "🧠",
          title: "AI Model Training & Optimization",
          desc: "Advanced techniques for training and optimizing AI models for your specific use case.",
          subject: "AI Model Training Guide"
        },
        {
          icon: "📈",
          title: "Scaling Automation Systems",
          desc: "How to scale your automation systems as your business grows.",
          subject: "Scaling Automation Guide"
        },
        {
          icon: "🎨",
          title: "Custom Automation Workflows",
          desc: "Building custom workflows tailored to your unique business processes.",
          subject: "Custom Workflows Guide"
        }
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white py-16 sm:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>📚</span>
              <span className="text-sm font-semibold">Knowledge Base</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              AI Automation Guides & Resources
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Comprehensive guides, tutorials, and best practices for implementing and optimizing AI automation systems
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search guides and tutorials..."
                className="w-full px-6 py-4 pr-16 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white focus:bg-white/15 transition-all"
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-4 py-2 rounded-lg font-medium hover:bg-slate-100 transition-colors"
              >
                🔍
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category, idx) => (
              <div key={idx}>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-600">
                  {category.title}
                </h2>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.articles.map((article, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all">
                      <div className="text-4xl mb-4">{article.icon}</div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{article.title}</h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">{article.desc}</p>
                      <Link 
                        href={`mailto:mopshyai@gmail.com?subject=${article.subject}`}
                        className="text-blue-600 font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read Guide <span>→</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mt-16 bg-slate-50 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our experts are ready to help you implement the strategies from our knowledge base
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book Expert Consultation 👨‍💼
              </Link>
              <Link 
                href="mailto:mopshyai@gmail.com?subject=Knowledge Base Question"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Ask a Question ❓
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