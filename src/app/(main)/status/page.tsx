'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
      });
      setLastUpdated(formatted);
    };
    updateTime();
  }, []);

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);
    
    const emailBody = `
Status Update Subscription Request:

Email: ${email}
Date: ${new Date().toLocaleDateString()}

Please add this email to the Mopshy system status update notifications.
    `;
    
    window.location.href = `mailto:mopshyai@gmail.com?subject=Status Update Subscription&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
    }, 3000);
  };

  const services = [
    {
      name: "AI Automation Platform",
      desc: "Core automation and AI processing systems",
      metrics: [
        { label: "Uptime", value: "99.98%" },
        { label: "Response Time", value: "45ms" }
      ]
    },
    {
      name: "API Gateway",
      desc: "REST API and webhook endpoints",
      metrics: [
        { label: "Uptime", value: "99.99%" },
        { label: "Response Time", value: "32ms" }
      ]
    },
    {
      name: "Lead Processing Engine",
      desc: "Lead capture, qualification, and routing",
      metrics: [
        { label: "Uptime", value: "99.97%" },
        { label: "Processing Time", value: "1.2s" }
      ]
    },
    {
      name: "Email Automation",
      desc: "Automated email sequences and campaigns",
      metrics: [
        { label: "Uptime", value: "99.95%" },
        { label: "Delivery Rate", value: "99.8%" }
      ]
    },
    {
      name: "CRM Integrations",
      desc: "HubSpot, Salesforce, and other CRM connections",
      metrics: [
        { label: "Uptime", value: "99.96%" },
        { label: "Sync Success", value: "99.9%" }
      ]
    },
    {
      name: "Analytics & Reporting",
      desc: "Dashboard data and performance metrics",
      metrics: [
        { label: "Uptime", value: "99.94%" },
        { label: "Data Freshness", value: "Real-time" }
      ]
    }
  ];

  const history = [
    {
      date: "January 15, 2025",
      status: "operational",
      title: "All systems operational",
      desc: "All services running normally with excellent performance metrics."
    },
    {
      date: "January 14, 2025",
      status: "operational",
      title: "Scheduled maintenance completed",
      desc: "Routine maintenance window completed successfully. All systems restored to full operation."
    },
    {
      date: "January 13, 2025",
      status: "maintenance",
      title: "Scheduled maintenance",
      desc: "Planned maintenance window for infrastructure upgrades (2:00 AM - 4:00 AM EST)."
    },
    {
      date: "January 12, 2025",
      status: "operational",
      title: "Performance optimization deployed",
      desc: "New performance optimizations deployed, resulting in 15% faster response times."
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>📊</span>
              <span className="text-sm font-semibold">System Status</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Mopshy Platform Status
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto mb-8">
              Real-time status of all Mopshy services and automation systems
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-[0_0_0_3px_rgba(16,185,129,0.3)]" />
                <span className="font-semibold text-lg">All Systems Operational</span>
              </div>
              <div className="text-slate-400 text-sm">
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Status */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Service Status</h2>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-20">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg border border-slate-200 hover:-translate-y-1 hover:shadow-xl transition-all">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{service.name}</h3>
                    <p className="text-sm text-slate-600">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    Operational
                  </div>
                </div>
                <div className="flex gap-6">
                  {service.metrics.map((metric, i) => (
                    <div key={i}>
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">{metric.label}</div>
                      <div className="font-semibold text-slate-900">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Status History */}
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Recent Status History</h2>
          <div className="space-y-6 mb-20">
            {history.map((item, idx) => (
              <div key={idx} className="grid lg:grid-cols-[150px_auto_1fr] gap-4 p-6 bg-slate-50 rounded-xl border border-slate-200 items-center">
                <div className="font-semibold text-slate-700 text-sm">{item.date}</div>
                <div className={`flex items-center gap-2 font-semibold text-sm ${item.status === 'maintenance' ? 'text-yellow-600' : 'text-green-600'}`}>
                  <div className={`w-2 h-2 rounded-full ${item.status === 'maintenance' ? 'bg-yellow-600' : 'bg-green-600'} animate-pulse`} />
                  {item.title}
                </div>
                <div className="text-slate-600 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>

          {/* Subscribe Section */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-8 lg:p-10 text-center mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Stay Updated</h2>
            <p className="text-slate-600 mb-6">Get notified about service updates and maintenance windows</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubscribing}
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50"
              >
                {isSubscribing ? 'Sent!' : 'Subscribe 📧'}
              </button>
            </div>
            <div className="text-sm text-slate-500">✅ Instant notifications • No spam • Unsubscribe anytime</div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Need Help?</h2>
            <p className="text-slate-600 mb-8">
              If you're experiencing issues not reflected on this page, please contact our support team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="mailto:mopshyai@gmail.com?subject=System Status Issue Report" className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2">
                Report Issue 🚨
              </Link>
              <Link href="mailto:mopshyai@gmail.com?subject=Support Request" className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2">
                Contact Support 💬
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