'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function PortalPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const emailBody = `
Client Portal Access Request:

Email: ${email}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

Please provide portal access for this client account.

Note: This is an automated request from the portal login form.
    `;
    
    window.location.href = `mailto:mopshyai@gmail.com?subject=Client Portal Access Request&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      setIsSubmitting(false);
    }, 5000);
  };

  const features = [
    { icon: "📊", title: "Real-Time Analytics", desc: "Monitor lead generation, conversion rates, and ROI in real-time" },
    { icon: "🎯", title: "Performance Metrics", desc: "Track key performance indicators and automation effectiveness" },
    { icon: "⚙️", title: "System Management", desc: "Configure settings, update workflows, and manage integrations" },
    { icon: "📈", title: "Growth Insights", desc: "Detailed reports and recommendations for optimization" },
    { icon: "🔔", title: "Smart Notifications", desc: "Get alerts for important events and system updates" },
    { icon: "💬", title: "Direct Support", desc: "Chat directly with your dedicated automation specialist" }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white py-16 sm:py-20 lg:py-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>🏢</span>
              <span className="text-sm font-semibold">Client Portal</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Access Your Automation Dashboard
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Monitor your AI automation performance, view detailed analytics, and manage your systems from one centralized dashboard
            </p>
          </div>

          {/* Login Form and Features Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Login Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">Client Portal Access</h2>
                <p className="text-slate-300">Secure login to your personalized automation dashboard</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/10 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">Password</label>
                  <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 focus:ring-2 focus:ring-white/10 transition-all"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Access request sent! Check your email.' : 'Access Portal 🔐'}
                </button>
              </form>

              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 text-center sm:text-left">
                <Link href="mailto:mopshyai@gmail.com?subject=Portal Access Request" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Request Access
                </Link>
                <Link href="mailto:mopshyai@gmail.com?subject=Password Reset Request" className="text-slate-300 hover:text-white transition-colors text-sm">
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* Portal Features */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">What's Inside Your Portal</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, i) => (
                  <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 hover:-translate-y-1 transition-all">
                    <div className="text-4xl mb-3">{feature.icon}</div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-slate-300">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">New Client?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                If you're a new Mopshy client, your portal access will be set up during your onboarding process. You'll receive login credentials via email once your automation systems are deployed.
              </p>
              <Link href="mailto:mopshyai@gmail.com?subject=New Client Portal Setup" className="inline-block px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help?</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our support team is available to help you navigate your portal, understand your analytics, and optimize your automation performance.
              </p>
              <Link href="mailto:mopshyai@gmail.com?subject=Portal Support Request" className="inline-block px-6 py-3 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors">
                Contact Support
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-12 text-center border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Join 127+ businesses already using our AI automation platform to scale their operations and revenue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Book Strategy Call 📞
              </Link>
              <Link 
                href="mailto:mopshyai@gmail.com?subject=Portal Demo Request"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Request Demo 🎥
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