'use client';

import Link from 'next/link';

export default function FreeTrialSection() {
  const benefits = [
    {
      icon: '⚡',
      title: 'AI Lead Capture & Qualification',
      desc: 'Intelligent chatbots that engage visitors and qualify prospects in real-time'
    },
    {
      icon: '🎯',
      title: 'Automated Follow-up Sequences',
      desc: 'Personalized email campaigns that nurture leads automatically'
    },
    {
      icon: '📊',
      title: 'Real-time Analytics Dashboard',
      desc: 'Track performance, conversion rates, and ROI in real-time'
    },
    {
      icon: '🔗',
      title: 'CRM Integration',
      desc: 'Seamless connection with HubSpot, Salesforce, and other platforms'
    },
    {
      icon: '💬',
      title: '24/7 AI Support',
      desc: 'Round-the-clock lead engagement and customer support automation'
    },
  ];

  const features = [
    '25 AI conversations included',
    '2 platform integrations',
    'Full dashboard access',
    'Email & chat support',
  ];

  const limitations = [
    { icon: '📊', text: 'Maximum 25 conversations' },
    { icon: '🔗', text: 'Up to 2 integrations' },
    { icon: '🏷️', text: 'Branded footer on outputs' },
  ];

  return (
    <section id="free-trial" className="relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-[#1a1f3a] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50 sm:opacity-100 animate-[gridMove_30s_linear_infinite]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="text-sm sm:text-base">🚀</span>
            <span className="text-xs sm:text-sm font-semibold">Free Trial</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
            Try Mopshy AI Free for 7 Days
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto px-4">
            Experience the power of AI automation with no commitment. Start capturing and converting leads instantly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Benefits List */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">What's Included in Your Free Trial:</h3>
            
            <div className="space-y-4 sm:space-y-6">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:translate-x-1 transition-all"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h4 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trial Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="inline-block px-4 sm:px-6 py-2 bg-gradient-to-r from-green-400 to-cyan-400 text-slate-900 rounded-full font-semibold mb-4 sm:mb-6 shadow-lg text-sm sm:text-base">
                7-Day Free Trial
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Get Started Today</h3>
              <p className="text-sm sm:text-base text-slate-300">No credit card required • Full access • Cancel anytime</p>
            </div>

            {/* Features */}
            <div className="mb-6 sm:mb-8 text-left space-y-2 sm:space-y-3">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <span className="text-green-400 font-bold flex-shrink-0">✅</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Limitations */}
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 text-left">
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Trial Limitations:</h4>
              <div className="space-y-2">
                {limitations.map((limitation, idx) => (
                  <div key={idx} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400">
                    <span className="flex-shrink-0">{limitation.icon}</span>
                    <span>{limitation.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://cal.com/mopshyai/30min"
              target="_blank"
              className="block w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-all mb-3 sm:mb-4 text-sm sm:text-base"
            >
              <span>Start Free Trial 🚀</span>
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 italic">✨ Setup takes less than 5 minutes</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
      `}</style>
    </section>
  );
}