"use client"
import Link from 'next/link';

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      items: [
        {
          icon: "📋",
          title: "Installation & Setup",
          description: "Complete setup guide for integrating Mopshy's automation platform",
          link: "mailto:mopshyai@gmail.com?subject=Installation Guide Request"
        },
        {
          icon: "🔑",
          title: "Authentication",
          description: "API key management and authentication methods",
          link: "mailto:mopshyai@gmail.com?subject=Authentication Guide Request"
        },
        {
          icon: "⚙️",
          title: "Configuration",
          description: "Platform configuration and customization options",
          link: "mailto:mopshyai@gmail.com?subject=Configuration Guide Request"
        }
      ]
    },
    {
      title: "API Reference",
      items: [
        {
          icon: "🔗",
          title: "REST API",
          description: "Complete REST API documentation with examples",
          link: "mailto:mopshyai@gmail.com?subject=REST API Documentation Request"
        },
        {
          icon: "📡",
          title: "Webhooks",
          description: "Real-time event notifications and webhook setup",
          link: "mailto:mopshyai@gmail.com?subject=Webhooks Documentation Request"
        },
        {
          icon: "🔄",
          title: "Rate Limits",
          description: "API rate limiting and best practices",
          link: "mailto:mopshyai@gmail.com?subject=Rate Limits Documentation Request"
        }
      ]
    },
    {
      title: "Integrations",
      items: [
        {
          icon: "🏢",
          title: "CRM Integrations",
          description: "HubSpot, Salesforce, Pipedrive integration guides",
          link: "mailto:mopshyai@gmail.com?subject=CRM Integration Documentation Request"
        },
        {
          icon: "📧",
          title: "Email Platforms",
          description: "Mailchimp, ConvertKit, ActiveCampaign integrations",
          link: "mailto:mopshyai@gmail.com?subject=Email Platform Integration Request"
        },
        {
          icon: "🔗",
          title: "Zapier & Make",
          description: "No-code automation platform integrations",
          link: "mailto:mopshyai@gmail.com?subject=Zapier Integration Documentation Request"
        }
      ]
    },
    {
      title: "Advanced Features",
      items: [
        {
          icon: "🤖",
          title: "AI Model Training",
          description: "Custom AI model training and optimization",
          link: "mailto:mopshyai@gmail.com?subject=AI Model Training Documentation Request"
        },
        {
          icon: "📊",
          title: "Analytics & Reporting",
          description: "Custom analytics and reporting capabilities",
          link: "mailto:mopshyai@gmail.com?subject=Analytics Documentation Request"
        },
        {
          icon: "🔧",
          title: "Custom Workflows",
          description: "Building custom automation workflows",
          link: "mailto:mopshyai@gmail.com?subject=Custom Workflows Documentation Request"
        }
      ]
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>📖</span>
              <span className="text-sm font-semibold">Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Complete Technical Documentation
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Comprehensive API references, integration guides, and technical documentation for Mopshy's AI automation platform
            </p>
          </div>

          {/* Quick Access Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: "🚀", title: "Quick Start", desc: "Get up and running in minutes", link: "mailto:mopshyai@gmail.com?subject=Quick Start Guide Request" },
              { icon: "🔗", title: "API Reference", desc: "Complete API documentation", link: "mailto:mopshyai@gmail.com?subject=API Documentation Request" },
              { icon: "🛠️", title: "Integration Guides", desc: "Step-by-step integration tutorials", link: "mailto:mopshyai@gmail.com?subject=Integration Guides Request" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300 mb-6">{item.desc}</p>
                <Link href={item.link} className="inline-block px-6 py-2 bg-white/20 border border-white/30 rounded-lg font-semibold hover:bg-white/30 transition-colors">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Documentation Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b-2 border-blue-600">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 hover:bg-slate-100 hover:-translate-y-1 hover:shadow-md transition-all">
                      <span className="text-2xl flex-shrink-0">{item.icon}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-slate-600 text-sm mb-3">{item.description}</p>
                        <Link href={item.link} className="text-blue-600 font-semibold text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                          View Guide <span>→</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 text-center border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Need Technical Support?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our technical team is ready to help you implement and optimize your automation systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:mopshyai@gmail.com?subject=Technical Support Request" className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                Get Technical Support 🛠️
              </Link>
              <Link href="https://cal.com/mopshyai/30min" target="_blank" className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2">
                Schedule Technical Call 📞
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