'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';

export default function FreeAuditPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    industry: '',
    leadVolume: '',
    biggestChallenge: '',
    currentTools: '',
    additionalInfo: '',
    honeypot: '', // spam prevention
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Check honeypot
    if (formData.honeypot) {
      return; // Likely spam
    }

    setIsSubmitting(true);

    try {
      // Create email body
      const emailBody = `
Free Lead Generation Audit Request:

CONTACT INFORMATION:
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Company: ${formData.company}
Website: ${formData.website || 'Not provided'}
Phone: ${formData.phone || 'Not provided'}

BUSINESS DETAILS:
Industry: ${formData.industry}
Monthly Lead Volume: ${formData.leadVolume}
Biggest Challenge: ${formData.biggestChallenge}
Current Tools/CRM: ${formData.currentTools || 'Not specified'}

ADDITIONAL INFORMATION:
${formData.additionalInfo || 'None provided'}

---
Please provide comprehensive audit report within 24 hours.
      `.trim();

      // Use mailto as primary method
      const mailtoLink = `mailto:mopshyai@gmail.com?subject=Free Lead Generation Audit Request - ${encodeURIComponent(formData.company)}&body=${encodeURIComponent(emailBody)}`;
      
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        website: '',
        phone: '',
        industry: '',
        leadVolume: '',
        biggestChallenge: '',
        currentTools: '',
        additionalInfo: '',
        honeypot: '',
      });
      
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    { icon: '📊', title: 'Comprehensive Analysis Report', desc: 'Detailed breakdown of your current lead generation performance and conversion bottlenecks' },
    { icon: '🎯', title: '3 Specific Improvement Opportunities', desc: 'Prioritized action items that can immediately impact your lead quality and conversion rates' },
    { icon: '💰', title: 'Revenue Impact Projections', desc: 'Estimated revenue increase from implementing our recommended improvements' },
    { icon: '📞', title: '15-Minute Strategy Call', desc: 'Optional discussion to walk through your results and answer any questions' },
  ];

  const testimonials = [
    {
      content: "The audit revealed we were losing 60% of our leads due to slow response times. After implementing their recommendations, our conversion rate doubled.",
      author: "Sarah Chen",
      title: "VP of Sales, TechVision Global",
      avatar: "SC"
    },
    {
      content: "The insights were incredibly valuable. We identified $50k in lost revenue opportunities and now have a clear roadmap to fix them.",
      author: "Marcus Rodriguez",
      title: "Founder, InnovatePro Solutions",
      avatar: "MR"
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6">
              <span>🎯</span>
              <span className="text-sm font-semibold">Free Lead Generation Audit</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Discover Where You're Losing 73% of Your Potential Revenue
            </h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto">
              Get a comprehensive analysis of your lead generation process and receive a custom action plan to capture more qualified prospects
            </p>
          </div>

          {/* Form Section */}
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Form */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Get Your Free Lead Generation Audit</h2>
                <p className="text-slate-300">Takes 2 minutes • Receive results within 24 hours</p>
              </div>

              {submitStatus === 'idle' ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name*</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name*</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Business Email*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name*</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>

                  {/* Website & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-2">Website URL</label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                      />
                    </div>
                  </div>

                  {/* Industry */}
                  <div>
                    <label htmlFor="industry" className="block text-sm font-medium mb-2">Industry*</label>
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white focus:bg-white/15"
                    >
                      <option value="">Select your industry</option>
                      <option value="professional-services">Professional Services</option>
                      <option value="saas">SaaS/Technology</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="real-estate">Real Estate</option>
                      <option value="financial-services">Financial Services</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="education">Education</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Lead Volume */}
                  <div>
                    <label htmlFor="leadVolume" className="block text-sm font-medium mb-2">Current Monthly Lead Volume*</label>
                    <select
                      id="leadVolume"
                      name="leadVolume"
                      value={formData.leadVolume}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white focus:bg-white/15"
                    >
                      <option value="">Select lead volume</option>
                      <option value="0-50">0-50 leads</option>
                      <option value="51-200">51-200 leads</option>
                      <option value="201-500">201-500 leads</option>
                      <option value="500+">500+ leads</option>
                    </select>
                  </div>

                  {/* Biggest Challenge */}
                  <div>
                    <label htmlFor="biggestChallenge" className="block text-sm font-medium mb-2">What's your biggest lead generation challenge?*</label>
                    <select
                      id="biggestChallenge"
                      name="biggestChallenge"
                      value={formData.biggestChallenge}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white focus:outline-none focus:border-white focus:bg-white/15"
                    >
                      <option value="">Select your biggest challenge</option>
                      <option value="slow-response">Slow response times</option>
                      <option value="low-quality">Low-quality leads</option>
                      <option value="manual-work">Too much manual work</option>
                      <option value="poor-conversion">Poor conversion rates</option>
                      <option value="lead-nurturing">Ineffective lead nurturing</option>
                      <option value="tracking">Difficulty tracking ROI</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Current Tools */}
                  <div>
                    <label htmlFor="currentTools" className="block text-sm font-medium mb-2">Current Tools/CRM</label>
                    <input
                      type="text"
                      id="currentTools"
                      name="currentTools"
                      value={formData.currentTools}
                      onChange={handleChange}
                      placeholder="e.g., HubSpot, Salesforce, none"
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>

                  {/* Additional Info */}
                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium mb-2">Additional Information</label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us more about your specific challenges or goals..."
                      className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-white focus:bg-white/15"
                    />
                  </div>

                  {/* Honeypot */}
                  <input
                    type="text"
                    name="honeypot"
                    value={formData.honeypot}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                  />

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Audit Report 🎯'}
                  </button>

                  {/* Guarantee */}
                  <div className="flex items-start gap-3 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                    <span className="text-xl flex-shrink-0">✅</span>
                    <div className="text-sm text-slate-300">
                      <strong>100% Free • No Obligation</strong><br />
                      We'll analyze your current setup and provide actionable insights whether you work with us or not.
                    </div>
                  </div>
                </form>
              ) : submitStatus === 'success' ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
                  <p className="text-slate-300">Your audit request has been submitted successfully. We'll be in touch within 24 hours with your custom analysis.</p>
                </div>
              ) : (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">❌</div>
                  <h3 className="text-2xl font-bold mb-3">Submission Error</h3>
                  <p className="text-slate-300 mb-4">There was a problem submitting your request. Please try again or contact us directly at mopshyai@gmail.com.</p>
                  <button onClick={() => setSubmitStatus('idle')} className="text-white underline">Try Again</button>
                </div>
              )}
            </div>

            {/* Benefits Sidebar */}
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-6 text-center">What You'll Receive:</h3>
              <div className="space-y-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0">{benefit.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-300">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-900">
            What Business Owners Say About Our Audits:
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
                <p className="text-slate-700 italic mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.author}</div>
                    <div className="text-sm text-slate-600">{testimonial.title}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}