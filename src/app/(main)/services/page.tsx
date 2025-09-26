'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const serviceCategories = [
    {
      icon: "🧠",
      title: "AI & Workflow Automation",
      description: "Turn time-consuming tasks into hands-free systems",
      services: [
        { icon: "⚙️", title: "CRM & Sales Automation", desc: "HubSpot, Salesforce, Zoho integrations with intelligent lead routing" },
        { icon: "📧", title: "Automated Email & Inbox Management", desc: "AI-powered follow-ups and intelligent email categorization" },
        { icon: "🏢", title: "Google Workspace & Microsoft 365 Automations", desc: "Streamline document workflows and team collaboration" },
        { icon: "📄", title: "AI Data Extraction", desc: "Extract insights from PDFs, forms, and websites automatically" },
        { icon: "🔗", title: "API Integrations & Workflow Orchestration", desc: "Zapier, Make, n8n implementations for seamless data flow" },
        { icon: "🤖", title: "AI Virtual Assistants", desc: "Inbox management, social media, and call center AI agents" }
      ]
    },
    {
      icon: "🌐",
      title: "Website & Web App Development",
      description: "Build conversion-focused digital experiences",
      services: [
        { icon: "💻", title: "Modern Website Development", desc: "Fast, mobile-optimized websites that convert visitors to customers" },
        { icon: "⚡", title: "No-Code MVPs & Web Apps", desc: "Rapid prototyping with Bubble, Glide, and Webflow" },
        { icon: "🏪", title: "Client Portals & Booking Systems", desc: "Self-service platforms that reduce support burden" },
        { icon: "🔍", title: "SEO Optimization & Performance Tuning", desc: "Technical SEO and speed optimization for better rankings" },
        { icon: "💬", title: "AI Chatbots & Lead Capture Tools", desc: "Intelligent conversation systems with advanced analytics" }
      ]
    },
    {
      icon: "🎨",
      title: "UI/UX & Design Services",
      description: "Design that converts and delights users",
      services: [
        { icon: "📱", title: "Web & Mobile UI Design", desc: "Professional designs in Figma and Adobe XD" },
        { icon: "🎯", title: "Landing Pages & Website Redesigns", desc: "Conversion-optimized designs that drive results" },
        { icon: "🏷️", title: "Brand Identity & Logo Creation", desc: "Complete brand packages that stand out" },
        { icon: "📊", title: "Dashboards & SaaS Interfaces", desc: "Intuitive data visualization and user interfaces" },
        { icon: "📈", title: "Marketing Graphics & Content", desc: "Presentation decks, social media assets, and visual content" }
      ]
    },
    {
      icon: "📈",
      title: "Digital Marketing & Growth",
      description: "Scale your reach with smart, automated campaigns",
      services: [
        { icon: "🎯", title: "Paid Advertising Management", desc: "Meta, Google, LinkedIn campaigns with AI optimization" },
        { icon: "🔄", title: "Conversion Funnel Optimization", desc: "Data-driven funnel improvements and A/B testing" },
        { icon: "✍️", title: "AI-Powered Content Generation", desc: "Blogs, social posts, and marketing copy at scale" },
        { icon: "📧", title: "Email Marketing Automation", desc: "Sophisticated sequences and behavioral triggers" },
        { icon: "📱", title: "Social Media Growth & Influencer Outreach", desc: "Automated engagement and partnership strategies" }
      ]
    },
    {
      icon: "🤖",
      title: "AI Agents & Virtual Teams",
      description: "24/7 AI-powered teams for complete automation",
      premium: true,
      services: [
        { icon: "📧", title: "AI Email Assistants", desc: "Auto-reply, lead nurturing, and intelligent email management" },
        { icon: "📱", title: "AI Social Media Managers", desc: "Content creation, posting, and community engagement" },
        { icon: "📞", title: "AI Call Agents", desc: "Inbound/outbound calls and appointment setting" },
        { icon: "🎯", title: "AI CRM Agents", desc: "Follow-ups, reminders, and intelligent lead scoring" },
        { icon: "🧠", title: "Custom-Trained AI Agents", desc: "GPT-4, Claude integration with secure cloud hosting" }
      ]
    },
    {
      icon: "📊",
      title: "Data Analytics & Business Intelligence",
      description: "Turn data into actionable business insights",
      services: [
        { icon: "📈", title: "Dashboard Development", desc: "Power BI, Tableau, Looker implementations" },
        { icon: "🎯", title: "KPI Tracking & Cohort Analysis", desc: "Real-time metrics and customer behavior insights" },
        { icon: "🔮", title: "Predictive Analytics", desc: "Customer segmentation and churn prediction" },
        { icon: "🔗", title: "Data Integration", desc: "CRM, Analytics, Stripe, and third-party connections" },
        { icon: "🧹", title: "Data Cleaning & Automation", desc: "Automated reporting and data quality management" }
      ]
    },
    {
      icon: "🏗️",
      title: "Custom SaaS Development",
      description: "Build and launch software products fast",
      enterprise: true,
      services: [
        { icon: "🚀", title: "MVP to Scale-Ready Platforms", desc: "Full-stack development with modern architecture" },
        { icon: "🏢", title: "Multi-Tenant Architecture", desc: "Scalable SaaS with integrated billing systems" },
        { icon: "👥", title: "Admin Dashboards & User Portals", desc: "Complete management interfaces with analytics" },
        { icon: "💳", title: "Subscription & Billing Setup", desc: "Stripe, Paddle, RevenueCat integration" },
        { icon: "🤖", title: "Built-in AI Features", desc: "Chat, summarization, and intelligent insights" }
      ]
    },
    {
      icon: "🧭",
      title: "Strategy & Consulting",
      description: "Build and grow with clarity and confidence",
      services: [
        { icon: "💡", title: "Product & MVP Planning", desc: "Strategic roadmaps and feature prioritization" },
        { icon: "🎯", title: "Go-to-Market Strategy", desc: "Launch strategies and market positioning" },
        { icon: "🔍", title: "Competitive Research & Positioning", desc: "Market analysis and differentiation strategies" },
        { icon: "💼", title: "Business Model Innovation", desc: "Revenue optimization and growth strategies" },
        { icon: "🌍", title: "Digital Transformation", desc: "Complete business automation and modernization" }
      ]
    }
  ];

  return (
    <section id="services" className="relative pt-32 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20 bg-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-50 border border-blue-200 rounded-full mb-6 sm:mb-8">
            <span className="text-lg">🚀</span>
            <span className="text-xs sm:text-sm font-medium text-blue-600">Complete AI Ecosystem</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 px-2 leading-tight">
            Comprehensive AI & Automation Services
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Transform every aspect of your business with our enterprise-grade AI solutions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-7xl mx-auto">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Premium/Enterprise Badge */}
              {(category.premium || category.enterprise) && (
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full text-white ${
                    category.premium ? 'bg-gradient-to-r from-orange-400 to-orange-500' : 'bg-gradient-to-r from-indigo-500 to-purple-600'
                  }`}>
                    {category.premium ? 'Premium' : 'Enterprise'}
                  </span>
                </div>
              )}

              {/* Category Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <span className="text-2xl sm:text-3xl">{category.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                    {category.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Services List - Responsive Grid */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="flex items-start gap-3 p-3 sm:p-4 bg-slate-50 rounded-lg border border-slate-100 hover:bg-slate-100 hover:border-slate-300 transition-all duration-200"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 border border-blue-200">
                      <span className="text-sm sm:text-base">{service.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 leading-tight">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-slate-900 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="text-sm sm:text-base lg:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss which services will have the biggest impact on your growth
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
            <Link
              href="mailto:mopshyai@gmail.com?subject=Custom Proposal Request"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Get Custom Proposal</span>
              <span>🎯</span>
            </Link>
            <Link
              href="https://cal.com/mopshyai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Schedule Consultation</span>
              <span>📅</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}