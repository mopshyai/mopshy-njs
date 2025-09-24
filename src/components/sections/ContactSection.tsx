'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    leadVolume: '0-50',
    challenge: 'slow-response',
    message: '',
    honeypot: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    try {
      const emailBody = `
New Lead Generation Audit Request:

Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Monthly Lead Volume: ${formData.leadVolume}
Biggest Challenge: ${formData.challenge}
Message: ${formData.message}
      `.trim();

      window.location.href = `mailto:mopshyai@gmail.com?subject=Free Lead Generation Audit Request&body=${encodeURIComponent(emailBody)}`;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', leadVolume: '0-50', challenge: 'slow-response', message: '', honeypot: '' });
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-[#1a1f3a] text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="text-sm sm:text-base">🚀</span>
            <span className="text-xs sm:text-sm font-semibold">Get Started Today</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-4">Ready to Stop Losing Leads?</h2>
          <p className="text-base sm:text-lg text-slate-300 px-4">Choose your path to automated lead generation success</p>
        </div>

        {/* Main Contact Options */}
        <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Option 1: Free Audit Form */}
          <div className="flex-[2] bg-white/10 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl border border-white/30 flex-shrink-0">
                🎯
              </div>
              <div>
                <div className="text-xs font-bold text-white/70 uppercase mb-2">Option 1</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Free Lead Generation Audit</h3>
                <p className="text-sm sm:text-base text-slate-300">Get a custom analysis of your current lead generation process</p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                { icon: '📞', text: '15-minute strategy call to understand your challenges' },
                { icon: '🔍', text: 'Technical audit of your website and current tools' },
                { icon: '📊', text: 'Custom report with 3 specific improvement opportunities' },
                { icon: '✅', text: 'No obligation—valuable insights whether you work with us or not' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                  <span className="text-lg sm:text-xl mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            {submitStatus === 'idle' ? (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Schedule Your Free Audit</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name*</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white text-sm sm:text-base focus:border-white focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address*</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white text-sm sm:text-base focus:border-white focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company Name*</label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white text-sm sm:text-base focus:border-white focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Current Monthly Lead Volume</label>
                    <select
                      value={formData.leadVolume}
                      onChange={(e) => setFormData({...formData, leadVolume: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white text-sm sm:text-base focus:border-white focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    >
                      <option value="0-50">0-50</option>
                      <option value="51-200">51-200</option>
                      <option value="201-500">201-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Biggest Challenge</label>
                    <select
                      value={formData.challenge}
                      onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white text-sm sm:text-base focus:border-white focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                    >
                      <option value="slow-response">Slow response time</option>
                      <option value="low-quality">Low-quality leads</option>
                      <option value="manual-work">Too much manual work</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message*</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your current lead generation challenges..."
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/10 border border-white/30 rounded-lg text-white text-sm sm:text-base placeholder:text-white/60 focus:border-white focus:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
                  />
                </div>

                <input type="text" className="hidden" value={formData.honeypot} onChange={(e) => setFormData({...formData, honeypot: e.target.value})} tabIndex={-1} />

                <button type="submit" className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold text-sm sm:text-base hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                  <span>Get My Free Audit</span>
                  <span>🎯</span>
                </button>
              </form>
            ) : submitStatus === 'success' ? (
              <div className="text-center py-6 sm:py-8 bg-green-500/10 rounded-xl border border-green-500/30">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">✅</div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">Thank You!</h4>
                <p className="text-sm sm:text-base">Your audit request has been submitted successfully. We'll be in touch within 24 hours.</p>
              </div>
            ) : (
              <div className="text-center py-6 sm:py-8 bg-red-500/10 rounded-xl border border-red-500/30">
                <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">❌</div>
                <h4 className="text-lg sm:text-xl font-bold mb-2">Submission Error</h4>
                <p className="text-sm sm:text-base">There was a problem submitting your request. Please try again or contact us directly.</p>
              </div>
            )}
          </div>

          {/* Option 2: Strategy Session */}
          <div className="flex-[1] md:min-w-[300px] bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl md:rounded-3xl p-6 sm:p-8 hover:from-orange-600 hover:to-orange-700 transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl border border-white/30 flex-shrink-0">
                ⚡
              </div>
              <div>
                <div className="text-xs font-bold text-white/90 uppercase mb-2">Option 2</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Strategy Session</h3>
                <p className="text-sm sm:text-base">For businesses ready to move quickly</p>
              </div>
            </div>

            <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {[
                { icon: '🎯', text: '30-minute deep-dive discussion' },
                { icon: '📋', text: 'Custom solution proposal within 48 hours' },
                { icon: '⏰', text: 'Clear timeline and investment requirements' },
                { icon: '🚀', text: 'Option to start implementation immediately' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm sm:text-base">
                  <span className="mt-0.5">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            <div className="text-center mb-5 sm:mb-6">
              <div className="text-3xl sm:text-4xl font-bold mb-1">$200</div>
              <div className="text-xs sm:text-sm opacity-90 italic">(credited toward any project)</div>
            </div>

            <Link href="https://cal.com/mopshyai/30min" target="_blank" className="block w-full px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 rounded-lg font-semibold text-sm sm:text-base text-center hover:bg-slate-100 transition-colors">
              Book Strategy Session 📅
            </Link>
          </div>
        </div>

        {/* Quick Booking Section */}
        {/* <div className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Need to Talk Right Away?</h3>
            <p className="text-sm sm:text-base text-slate-300">Book a 30-minute strategy call directly with our team</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <Link href="https://cal.com/mopshyai/30min" target="_blank" className="w-full lg:w-auto px-6 sm:px-8 py-5 sm:py-6 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-4 flex-shrink-0">
              <span className="text-xl sm:text-2xl">📅</span>
              <div className="text-left">
                <div className="font-semibold text-base sm:text-lg">Schedule 30-Min Call</div>
                <div className="text-xs sm:text-sm opacity-70">Available today</div>
              </div>
            </Link>

            <div className="flex flex-col gap-2.5 sm:gap-3 flex-1 text-center lg:text-left w-full lg:w-auto">
              {[
                { icon: '⚡', text: 'Instant booking confirmation' },
                { icon: '🎯', text: 'Tailored to your business needs' },
                { icon: '💡', text: 'Actionable insights guaranteed' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 justify-center lg:justify-start">
                  <span className="text-lg sm:text-xl">{item.icon}</span>
                  <span className="text-xs sm:text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 mb-12 sm:mb-16">
  <div className="text-center mb-8 sm:mb-10">
    <h3 className="text-xl sm:text-2xl font-bold mb-2">Need to Talk Right Away?</h3>
    <p className="text-sm sm:text-base text-slate-300">Book a 30-minute strategy call directly with our team</p>
  </div>

  {/* Centered Button */}
  <div className="flex justify-center mb-8 sm:mb-10">
    <Link 
      href="https://cal.com/mopshyai/30min" 
      target="_blank" 
      className="inline-flex items-center gap-4 px-6 sm:px-8 py-5 sm:py-6 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
    >
      <span className="text-xl sm:text-2xl">📅</span>
      <div className="text-left">
        <div className="font-semibold text-base sm:text-lg">Schedule 30-Min Call</div>
        <div className="text-xs sm:text-sm opacity-70">Available today</div>
      </div>
    </Link>
  </div>

  {/* Three Items in Single Row - Centered */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
    <div className="flex items-center gap-3">
      <span className="text-lg sm:text-xl">⚡</span>
      <span className="text-xs sm:text-sm">Instant booking confirmation</span>
    </div>
    
    <div className="flex items-center gap-3">
      <span className="text-lg sm:text-xl">🎯</span>
      <span className="text-xs sm:text-sm">Tailored to your business needs</span>
    </div>
    
    <div className="flex items-center gap-3">
      <span className="text-lg sm:text-xl">💡</span>
      <span className="text-xs sm:text-sm">Actionable insights guaranteed</span>
    </div>
  </div>
</div>
        {/* Direct Contact */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 mb-12 sm:mb-16">
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Direct Contact</h3>
            <p className="text-sm sm:text-base text-slate-300">Prefer to reach out directly? We're here to help</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { icon: '📧', label: 'Email', value: 'mopshyai@gmail.com', href: 'mailto:mopshyai@gmail.com' },
              { icon: '📞', label: 'Phone', value: '(412) 214-3460', href: 'tel:+14122143460' },
              { icon: '📍', label: 'Location', value: 'Pittsburgh, PA' },
              { icon: '🕒', label: 'Office Hours', value: 'Monday-Friday: 9 AM - 6 PM EST', note: 'Response time: Under 2 hours during business hours' },
            ].map((item, i) => (
              <div key={i} className="p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all">
                <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{item.icon}</div>
                <div className="text-xs text-white/70 uppercase tracking-wide mb-2">{item.label}</div>
                {item.href ? (
                  <a href={item.href} className="font-medium text-sm sm:text-base hover:text-cyan-400 transition-colors break-words">{item.value}</a>
                ) : (
                  <div className="font-medium text-sm sm:text-base">{item.value}</div>
                )}
                {item.note && <div className="text-xs text-white/70 italic mt-2">{item.note}</div>}
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/20 text-center">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Ready to Transform Your Business?</h3>
          <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join 127+ businesses worldwide already using our AI to capture, qualify, and convert more leads than ever before.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link href="mailto:mopshyai@gmail.com?subject=Free Lead Analysis Request" className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-slate-900 rounded-lg font-semibold text-sm sm:text-base hover:bg-slate-100 transition-colors">
              Get Free Analysis 📊
            </Link>
            <Link href="https://cal.com/mopshyai/30min" target="_blank" className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-sm sm:text-base hover:bg-white hover:text-slate-900 transition-colors">
              Book Strategy Call 📅
            </Link>
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