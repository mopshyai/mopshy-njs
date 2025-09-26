'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function NewsletterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interests: [] as string[]
  });
  const [formState, setFormState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    try {
      // Fallback to email
      const emailBody = `
Newsletter Subscription Request:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company || 'Not provided'}
Interests: ${formData.interests.length > 0 ? formData.interests.join(', ') : 'None selected'}
      `;
      
      window.location.href = `mailto:mopshyai@gmail.com?subject=Newsletter Subscription Request&body=${encodeURIComponent(emailBody)}`;
      setFormState('success');
    } catch (error) {
      setFormState('error');
    }
  };

  const benefits = [
    { icon: "🚀", title: "AI Automation Trends", desc: "Stay updated with the latest developments in AI and automation technology" },
    { icon: "💡", title: "Actionable Strategies", desc: "Practical tips and strategies you can implement immediately" },
    { icon: "📊", title: "Case Studies & Success Stories", desc: "Real-world examples of businesses transforming with AI automation" },
    { icon: "🔍", title: "Industry Insights", desc: "Expert analysis of industry trends and future predictions" },
    { icon: "🎁", title: "Exclusive Resources", desc: "Access to templates, guides, and tools only available to subscribers" }
  ];

  const testimonials = [
    {
      quote: "The weekly insights have been invaluable for our business. We've implemented several of the automation strategies and seen a 40% increase in qualified leads.",
      author: "Michael Johnson",
      title: "Marketing Director, TechSolutions Inc.",
      avatar: "MJ"
    },
    {
      quote: "This is the only newsletter I actually look forward to reading. Practical, actionable advice without the fluff. Worth every minute of my time.",
      author: "Sarah Lee",
      title: "CEO, GrowthWorks Agency",
      avatar: "SL"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>📧</span>
              <span className="text-sm font-semibold">AI Automation Newsletter</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Stay Ahead with AI Automation Insights
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Get the latest trends, strategies, and case studies on AI automation, lead generation, and business growth delivered to your inbox
            </p>
          </div>

          {/* Form and Benefits Grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Form Section */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-3">Subscribe to Our Newsletter</h2>
                <p className="text-slate-300">Join 5,000+ business leaders receiving our weekly insights</p>
              </div>

              {formState === 'idle' && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name*</label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="interests" className="block text-sm font-medium mb-2">Topics of Interest</label>
                    <select
                      id="interests"
                      multiple
                      value={formData.interests}
                      onChange={(e) => setFormData({...formData, interests: Array.from(e.target.selectedOptions, option => option.value)})}
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white focus:bg-white/15 transition-all"
                    >
                      <option value="lead-generation">Lead Generation</option>
                      <option value="sales-automation">Sales Automation</option>
                      <option value="crm-integration">CRM Integration</option>
                      <option value="ai-chatbots">AI Chatbots</option>
                      <option value="business-growth">Business Growth</option>
                    </select>
                    <span className="text-xs text-slate-400 mt-1 block">Hold Ctrl/Cmd to select multiple</span>
                  </div>

                  <button type="submit" className="w-full px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors inline-flex items-center justify-center gap-2">
                    Subscribe Now 📩
                  </button>

                  <div className="text-center text-sm text-slate-400 space-y-1">
                    <p>We respect your privacy. Unsubscribe at any time.</p>
                    <p>You'll receive one email per week with valuable insights.</p>
                  </div>
                </form>
              )}

              {formState === 'success' && (
                <div className="text-center py-8 px-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                  <div className="text-5xl mb-6">✅</div>
                  <h3 className="text-xl font-bold mb-4">Thank You for Subscribing!</h3>
                  <p className="text-slate-300">You've been added to our newsletter. Check your inbox for a confirmation email and exclusive content.</p>
                </div>
              )}

              {formState === 'error' && (
                <div className="text-center py-8 px-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <div className="text-5xl mb-6">❌</div>
                  <h3 className="text-xl font-bold mb-4">Subscription Error</h3>
                  <p className="text-slate-300">There was a problem processing your subscription. Please try again or contact us directly.</p>
                </div>
              )}
            </div>

            {/* Benefits Section */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 lg:p-10 border border-white/10">
              <h3 className="text-2xl font-bold text-center mb-8">What You'll Receive:</h3>
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:translate-x-1 transition-all">
                    <span className="text-2xl flex-shrink-0">{benefit.icon}</span>
                    <div>
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">What Our Subscribers Say:</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/20">
                  <p className="text-slate-300 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <cite className="block font-semibold not-italic">{testimonial.author}</cite>
                      <div className="text-sm text-slate-400">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              ))}
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