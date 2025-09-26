import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sales Automation Services | End Manual Follow-ups Forever – Mopshy',
  description: 'Transform your sales process with intelligent automation. Our AI-powered systems handle lead nurturing, follow-ups, and pipeline management 24/7.',
};

export default function SalesAutomationPage() {
  const features = [
    {
      icon: '🔄',
      title: 'Intelligent Pipeline Management',
      desc: 'AI automatically moves leads through your sales stages based on behavior and engagement',
      items: [
        'Automatic lead scoring and prioritization',
        'Smart stage progression triggers',
        'Deal probability predictions',
        'Pipeline health monitoring',
      ],
    },
    {
      icon: '📧',
      title: '6-Month Nurture Sequences',
      desc: 'Sophisticated email campaigns that build relationships and drive conversions over time',
      items: [
        'Behavioral trigger campaigns',
        'Dynamic content personalization',
        'A/B tested messaging',
        'Engagement tracking and optimization',
      ],
    },
    {
      icon: '📅',
      title: 'Smart Scheduling Engine',
      desc: 'Seamless calendar integration with intelligent booking and reminder systems',
      items: [
        'Automated meeting scheduling',
        'Time zone optimization',
        'Reminder sequences',
        'No-show follow-up automation',
      ],
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      desc: 'Comprehensive insights into your sales performance and optimization opportunities',
      items: [
        'Conversion rate tracking',
        'Revenue attribution',
        'Performance forecasting',
        'Bottleneck identification',
      ],
    },
    {
      icon: '🔗',
      title: 'CRM Integration',
      desc: 'Seamless connection with HubSpot, Salesforce, Pipedrive, and other major platforms',
      items: [
        'Two-way data synchronization',
        'Custom field mapping',
        'Workflow automation',
        'Data enrichment',
      ],
    },
    {
      icon: '🎯',
      title: 'Lead Qualification AI',
      desc: 'Intelligent scoring and routing to ensure your team focuses on the highest-value prospects',
      items: [
        'Predictive lead scoring',
        'Automatic lead routing',
        'Intent signal detection',
        'Qualification workflows',
      ],
    },
  ];

  const flowSteps = [
    { icon: '📧', title: 'Lead Captured', desc: 'AI instantly qualifies and scores new prospect', status: 'Complete', statusIcon: '✅', active: true },
    { icon: '🤖', title: 'Personalized Outreach', desc: 'Custom email sequence initiated based on lead profile', status: 'Processing', statusIcon: '🔄', processing: true },
    { icon: '📅', title: 'Meeting Scheduled', desc: 'Calendar integration with automated reminders', status: 'Pending', statusIcon: '⏳', pending: true },
  ];

  const beforeItems = [
    'Manual follow-ups taking 15+ hours/week',
    '73% of leads never get followed up',
    '4+ hour response times losing prospects',
    'Inconsistent messaging and timing',
    'No visibility into pipeline health',
  ];

  const afterItems = [
    '100% automated follow-up sequences',
    'Every lead nurtured for 6+ months',
    '60-second response times guaranteed',
    'Personalized messaging at scale',
    'Real-time pipeline insights',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      
{/* Hero Section */}
<section className="relative bg-[#1a1f3a] text-white pt-28 sm:pt-32 lg:pt-40 pb-12 sm:pb-16 lg:pb-32 overflow-hidden">
{/* Background */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Content */}
      <div className="text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-6 sm:mb-8">
          <span className="text-base sm:text-lg">🚀</span>
          <span className="text-xs sm:text-sm font-semibold">Sales Automation Command Center</span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          End Manual Follow-ups Forever
        </h1>
        
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed">
          Intelligent pipeline automation that nurtures leads, schedules meetings, and converts prospects while you focus on closing deals
        </p>

        {/* Stats - Stack on mobile, grid on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto lg:mx-0">
          {[
            { number: '215%', label: 'Average ROI Improvement' },
            { number: '87%', label: 'Reduction in Manual Tasks' },
            { number: '24/7', label: 'Automated Operations' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center p-3 sm:p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1">{stat.number}</div>
              <div className="text-xs text-slate-300 uppercase tracking-wide leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Demo - Hidden on small mobile, visible on tablet+ */}
      <div className="flex justify-center mt-8 lg:mt-0">
        <div className="w-full max-w-sm sm:max-w-md bg-white/95 rounded-2xl shadow-2xl overflow-hidden">
          {/* Demo Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-3 sm:p-4 flex items-center justify-between">
            <div className="flex gap-1 sm:gap-1.5">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-xs sm:text-sm font-semibold">Sales Automation Dashboard</div>
            <div className="flex items-center gap-1 sm:gap-1.5 text-xs">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="hidden sm:inline">Live</span>
            </div>
          </div>

          {/* Flow Steps */}
          <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
            {flowSteps.map((step, idx) => (
              <div key={idx}>
                <div className={`flex items-center gap-3 p-3 sm:p-4 rounded-lg ${
                  step.active ? 'bg-green-50 border border-green-200' :
                  step.processing ? 'bg-blue-50 border border-blue-200' :
                  'bg-slate-50 border border-slate-200'
                }`}>
                  <div className="text-xl sm:text-2xl flex-shrink-0">{step.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs sm:text-sm font-semibold text-slate-900 mb-0.5 sm:mb-1">{step.title}</h4>
                    <p className="text-xs text-slate-600 leading-tight">{step.desc}</p>
                  </div>
                  <div className="text-xs font-semibold px-2 sm:px-3 py-1 bg-white rounded-md border border-slate-200 whitespace-nowrap">
                    {step.statusIcon} <span className="hidden sm:inline">{step.status}</span>
                  </div>
                </div>
                {idx < flowSteps.length - 1 && (
                  <div className="text-center text-slate-400 text-lg sm:text-xl py-1 sm:py-2">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Complete Sales Automation Ecosystem
            </h2>
            <p className="text-lg text-slate-600">
              Every aspect of your sales process, intelligently automated
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-6">{feature.desc}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-16 sm:py-20 lg:py-32 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Transform Your Sales Process
            </h2>
            <p className="text-lg text-slate-600">
              See the dramatic impact of intelligent automation on your revenue
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
            {/* Before */}
            <div className="bg-white p-8 rounded-2xl border border-red-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Before Automation</h3>
                <span className="text-3xl">😰</span>
              </div>
              <div className="space-y-3">
                {beforeItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                    <span className="text-red-500 flex-shrink-0">❌</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow - Hidden on mobile, vertical on tablet, horizontal on desktop */}
            {/* <div className="hidden lg:flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">→</div>
                <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Transform with AI</div>
              </div>
            </div> */}

            {/* After */}
            <div className="bg-white p-8 rounded-2xl border border-green-200 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900">With Our Automation</h3>
                <span className="text-3xl">🚀</span>
              </div>
              <div className="space-y-3">
                {afterItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-green-500 flex-shrink-0">✅</span>
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-[#1a1f3a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Automate Your Sales Process?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto">
            Join 127+ businesses already using our automation to scale their revenue without scaling their team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:mopshyai@gmail.com?subject=Sales Automation Implementation Request"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              <span>Get Implementation Plan</span>
              <span>🚀</span>
            </Link>
            <Link
              href="https://cal.com/mopshyai/30min"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors"
            >
              <span>Book Strategy Call</span>
              <span>📅</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
