"use client"
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: "Free Trial",
      price: "$0",
      period: "for 7 days",
      description: "Perfect for testing our AI automation capabilities",
      features: [
        "25 AI conversations included",
        "2 platform integrations",
        "Real-time analytics dashboard",
        "Email & chat support",
        "Lead capture & qualification",
        { text: "Branded footer on outputs", isLimitation: true }
      ],
      cta: "Start Free Trial",
      ctaLink: "https://cal.com/mopshyai/30min",
      note: "No credit card required",
      badge: "🚀 Start Here",
      isFeatured: true
    },
    {
      name: "Starter Package",
      price: "$2,500",
      period: "per month",
      description: "AI Lead Generation Engine for growing businesses",
      features: [
        "Unlimited AI conversations",
        "5 platform integrations",
        "Advanced lead scoring",
        "Automated follow-up sequences",
        "Custom chatbot training",
        "Priority support",
        "White-label outputs"
      ],
      cta: "Get Started",
      ctaLink: "mailto:mopshyai@gmail.com?subject=Starter Package Inquiry",
      note: "2-3 weeks implementation"
    },
    {
      name: "Enterprise Package",
      price: "$4,000",
      period: "per month",
      description: "Sales Automation Command Center for scaling teams",
      features: [
        "Everything in Starter",
        "Unlimited integrations",
        "Advanced pipeline automation",
        "6-month nurture campaigns",
        "Custom workflow builder",
        "Dedicated success manager",
        "Advanced analytics & reporting"
      ],
      cta: "Contact Sales",
      ctaLink: "mailto:mopshyai@gmail.com?subject=Enterprise Package Inquiry",
      note: "3-4 weeks implementation"
    },
    {
      name: "Custom Solutions",
      price: "Custom",
      period: "pricing",
      description: "Bespoke AI applications for unique business needs",
      features: [
        "Everything in Enterprise",
        "Custom AI model development",
        "Bespoke application development",
        "API & webhook development",
        "White-glove implementation",
        "Ongoing optimization",
        "24/7 priority support"
      ],
      cta: "Discuss Requirements",
      ctaLink: "https://cal.com/mopshyai/30min",
      note: "6-12 weeks development"
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle."
    },
    {
      question: "What's included in the implementation?",
      answer: "All plans include setup, integration with your existing tools, custom configuration, team training, and ongoing support."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with the results. Most clients see positive ROI within the first month."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary by plan complexity: Free Trial (instant), Starter (2-3 weeks), Enterprise (3-4 weeks), Custom (6-12 weeks)."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>💰</span>
              <span className="text-sm font-semibold">Transparent Pricing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Choose Your AI Automation Plan
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Start with our free trial and scale as you grow. No hidden fees, no long-term contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-20 max-w-7xl mx-auto">
            {plans.map((plan, idx) => (
              <div 
                key={idx}
                className={`relative bg-white rounded-3xl p-8 shadow-lg border transition-all hover:-translate-y-2 hover:shadow-xl ${
                  plan.isFeatured 
                    ? 'border-purple-500 scale-105 lg:scale-100' 
                    : 'border-slate-200 hover:border-blue-600'
                }`}
              >
                {plan.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {plan.badge}
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-slate-600">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => {
                    const isLimitation = typeof feature === 'object' && feature.isLimitation;
                    const text = typeof feature === 'string' ? feature : feature.text;
                    
                    return (
                      <div key={i} className={`flex items-center gap-3 text-sm ${isLimitation ? 'text-slate-500' : 'text-slate-700'}`}>
                        <span className="flex-shrink-0 font-bold">{isLimitation ? '⚠️' : '✅'}</span>
                        <span>{text}</span>
                      </div>
                    );
                  })}
                </div>

                <div>
                  <Link
                    href={plan.ctaLink}
                    target={plan.ctaLink.startsWith('http') ? '_blank' : undefined}
                    className={`block w-full px-6 py-4 rounded-lg font-semibold text-center transition-colors mb-3 ${
                      plan.isFeatured
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white border-2 border-slate-300 text-slate-900 hover:border-slate-400 hover:bg-slate-50'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                  <div className="text-center text-sm text-slate-500 italic">{plan.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Lead Generation?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Start with our free trial and see the difference AI automation can make for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Start Free Trial 🚀
              </Link>
              <Link 
                href="mailto:mopshyai@gmail.com?subject=Pricing Questions"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Have Questions? 💬
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