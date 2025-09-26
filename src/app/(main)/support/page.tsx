"use client"
import Link from 'next/link';

export default function SupportPage() {
  const supportOptions = [
    {
      icon: "📞",
      title: "Direct Support",
      desc: "Speak directly with our automation experts",
      link: "mailto:mopshyai@gmail.com?subject=Support Request",
      linkText: "Contact Support"
    },
    {
      icon: "📚",
      title: "Documentation",
      desc: "Comprehensive guides and tutorials",
      link: "/docs",
      linkText: "View Docs"
    },
    {
      icon: "🎥",
      title: "Video Tutorials",
      desc: "Step-by-step video walkthroughs",
      link: "mailto:mopshyai@gmail.com?subject=Video Tutorial Request",
      linkText: "Watch Videos"
    }
  ];

  const quickHelp = [
    {
      title: "System Status",
      desc: "Check the current status of all Mopshy services",
      link: "/status",
      linkText: "Check Status"
    },
    {
      title: "Getting Started",
      desc: "New to Mopshy? Start here for setup guides",
      link: "mailto:mopshyai@gmail.com?subject=Getting Started Guide",
      linkText: "Get Started"
    },
    {
      title: "Troubleshooting",
      desc: "Common issues and their solutions",
      link: "mailto:mopshyai@gmail.com?subject=Troubleshooting Help",
      linkText: "Get Help"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              We're Here to Help You Succeed
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Get expert support for your AI automation systems with our comprehensive help center and dedicated team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportOptions.map((option, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 text-center hover:bg-white/15 hover:-translate-y-1 transition-all">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-3">{option.title}</h3>
                <p className="text-slate-300 mb-6">{option.desc}</p>
                <Link 
                  href={option.link}
                  className="inline-block px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  {option.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help & Contact Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Quick Help */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Quick Help</h2>
              <div className="space-y-6">
                {quickHelp.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-6 hover:border-blue-600 hover:shadow-md transition-all">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.desc}</p>
                    <Link href={item.link} className="text-blue-600 font-semibold hover:underline">
                      {item.linkText} →
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="border border-slate-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Email Support</h3>
                      <Link href="mailto:mopshyai@gmail.com" className="text-blue-600 hover:underline">
                        mopshyai@gmail.com
                      </Link>
                      <p className="text-sm text-slate-500 mt-1">Response time: Under 2 hours</p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Phone Support</h3>
                      <Link href="tel:+14122143460" className="text-blue-600 hover:underline">
                        (412) 214-3460
                      </Link>
                      <p className="text-sm text-slate-500 mt-1">Monday-Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>

                <div className="border border-slate-200 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl">💬</div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Live Chat</h3>
                      <p className="text-slate-600">Available on our website</p>
                      <p className="text-sm text-slate-500 mt-1">Instant responses during business hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Need Immediate Assistance?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Our team is ready to help you resolve any issues and optimize your automation systems
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:mopshyai@gmail.com?subject=Immediate Support Request"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Get Immediate Help 🚀
              </Link>
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule Support Call 📅
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