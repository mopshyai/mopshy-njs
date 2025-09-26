
"use client"
import Link from 'next/link';

export default function AboutPage() {
  const achievements = [
    { number: "127+", label: "Businesses Transformed" },
    { number: "$2.4M+", label: "Revenue Generated" },
    { number: "347%", label: "Avg Lead Increase" },
    { number: "15+", label: "Industries Served" },
    { number: "5", label: "Years of Excellence" }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Results-Driven",
      desc: "Every system we build is designed to deliver measurable business impact and exceptional ROI. We focus on outcomes that matter: increased revenue, reduced costs, and improved efficiency. Our clients see an average 347% increase in qualified leads and 215% ROI improvement within six months of implementation."
    },
    {
      icon: "🔬",
      title: "Innovation-First",
      desc: "We stay at the cutting edge of AI and automation technology, continuously researching and implementing the latest advances to give our clients sustainable competitive advantages. Our team regularly attends industry conferences, participates in beta programs, and collaborates with technology leaders to ensure our solutions leverage the most advanced capabilities available."
    },
    {
      icon: "🤝",
      title: "Partnership-Focused",
      desc: "We work as an extension of your team, not just a vendor, building long-term partnerships that ensure sustained success and growth. Our collaborative approach includes ongoing optimization, strategic consulting, and dedicated support to help you maximize the value of your automation investments over time."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>🚀</span>
              <span className="text-sm font-semibold">About Mopshy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Transforming Businesses Through Intelligent Automation
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
              We help modern businesses automate, scale, and convert with AI systems that work 24/7
            </p>
          </div>

          {/* Mission Card */}
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20">
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <span className="text-5xl sm:text-6xl flex-shrink-0">🎯</span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-slate-200 leading-relaxed">
                  To transform every business into a smart machine that scales itself through intelligent automation and AI-powered systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-[#1a1f3a] text-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/10">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">Our Story</h2>
            
            <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
              <p>
                Founded in 2020 by Manvendra Kumar, who brings extensive experience from global brands like Beats by Dre, Volvo, and HP, Mopshy was born from a critical observation: too many businesses lose substantial revenue due to manual processes that could be intelligently automated. After witnessing countless organizations struggle with inefficient lead management, slow response times, and missed opportunities, Manvendra assembled a world-class team to solve these fundamental business challenges.
              </p>
              
              <p>
                Today, Mopshy is a team of world-class engineers, designers, and growth strategists from prestigious institutions like Carnegie Mellon University and IIT Bombay, united by our shared passion for helping businesses achieve exponential growth with intelligent automation. Our diverse team brings expertise from Fortune 500 companies, high-growth startups, and leading technology firms, combining deep technical knowledge with practical business experience.
              </p>
              
              <p>
                Since our founding, we've helped over 127 businesses across 15+ industries transform their operations through AI automation, generating over $2.4 million in additional revenue for our clients while saving thousands of hours in manual work. Our proven methodologies and cutting-edge technology solutions have established us as a trusted partner for businesses seeking to scale efficiently and compete effectively in today's digital marketplace.
              </p>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-12">
              {achievements.map((achievement, i) => (
                <div key={i} className="text-center p-4 sm:p-6 bg-white/10 rounded-xl border border-white/20">
                  <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                  <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#1a1f3a] text-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-slate-300 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#1a1f3a] text-white pb-16 sm:pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-white/20 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Join 127+ businesses worldwide already using our AI to scale their operations and revenue.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book Strategy Call 📅
              </Link>
              <Link 
                href="mailto:mopshyai@gmail.com?subject=About Mopshy Inquiry"
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get in Touch 💬
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