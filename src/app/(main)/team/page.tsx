import Link from 'next/link';
import { Calendar, Briefcase, BarChart3, Cog, Rocket, Users, Award, Globe } from 'lucide-react';

export default function TeamPage() {
  const expertise = [
    {
      icon: <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Enterprise Strategy',
      desc: 'Product strategy and business transformation at Fortune 500 companies',
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Data Analytics',
      desc: 'Advanced analytics and AI implementation for business optimization',
    },
    {
      icon: <Cog className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Process Automation',
      desc: 'Designing and implementing scalable automation systems',
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Growth Engineering',
      desc: 'Building systems that scale revenue without scaling complexity',
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />, number: '10+', label: 'Team Members', desc: 'Engineers, designers, and strategists' },
    { icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />, number: '50+', label: 'Years Combined Experience', desc: 'In AI, automation, and growth' },
    { icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />, number: '127+', label: 'Businesses Transformed', desc: 'Across 15+ industries worldwide' },
  ];

  const institutions = [
    {
      abbr: 'CMU',
      name: 'Carnegie Mellon University',
      program: 'Computer Science & Engineering',
      note: 'Leading AI and robotics research',
      color: 'from-blue-500 to-blue-600',
    },
    {
      abbr: 'IIT',
      name: 'IIT Bombay',
      program: 'Technology & Innovation',
      note: 'Premier engineering institute',
      color: 'from-purple-500 to-purple-600',
    },
    {
      abbr: '🌍',
      name: 'Top Global Universities',
      program: 'MIT, Stanford, Berkeley, and more',
      note: 'World-class technical education',
      color: 'from-orange-500 to-orange-600',
    },
    {
      abbr: '🚀',
      name: 'High-Growth Startups',
      program: 'Y Combinator, Techstars alumni',
      note: 'Proven scale-up experience',
      color: 'from-pink-500 to-pink-600',
    },
  ];

  const specialties = [
    { icon: '🤖', title: 'AI & Machine Learning', desc: 'Advanced AI systems, natural language processing, and predictive analytics' },
    { icon: '⚙️', title: 'Automation Engineering', desc: 'Workflow automation, API integrations, and process optimization' },
    { icon: '🎨', title: 'UX/UI Design', desc: 'Conversion-focused design and user experience optimization' },
    { icon: '📈', title: 'Growth Strategy', desc: 'Revenue optimization, funnel analysis, and performance marketing' },
    { icon: '🔧', title: 'Full-Stack Development', desc: 'Modern web applications, mobile apps, and cloud infrastructure' },
    { icon: '📊', title: 'Data Science', desc: 'Business intelligence, analytics, and data-driven insights' },
  ];

  const values = [
    { icon: '🎯', title: 'Results-Driven', desc: 'Every system we build is designed to deliver measurable business impact' },
    { icon: '🔬', title: 'Innovation-First', desc: 'We stay at the cutting edge of AI and automation technology' },
    { icon: '🤝', title: 'Partnership-Focused', desc: 'We work as an extension of your team, not just a vendor' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6 sm:mb-8">
              <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
              <span className="text-xs sm:text-sm font-semibold text-blue-400">Meet Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 leading-tight">
              The Minds Behind Mopshy
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto px-4">
              A world-class team of AI engineers, automation specialists, and growth strategists from top institutions and high-growth startups
            </p>
          </div>

          {/* Founder Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-700 mb-12 sm:mb-20">
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-start">
              <div className="lg:col-span-3">
                <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-30" />
                  <img
                    src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Manvendra Kumar"
                    className="relative w-full h-full object-cover rounded-full border-4 border-slate-700"
                  />
                </div>
              </div>

              <div className="lg:col-span-9">
                <div className="mb-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Manvendra Kumar</h2>
                  <div className="text-lg sm:text-xl text-blue-400 font-semibold mb-2">Founder & CEO</div>
                  <div className="text-sm sm:text-base text-slate-400">📍 Pittsburgh, PA</div>
                </div>

                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-slate-300 mb-6 sm:mb-8">
                  <p>
                    With hands-on experience at global brands like <strong className="text-white">Beats by Dre</strong>, <strong className="text-white">Volvo</strong>, and <strong className="text-white">HP</strong>, Manvendra has worked across product strategy, data analytics, and automation — helping businesses go from scattered systems to streamlined growth engines.
                  </p>
                  <p>
                    His vision for Mopshy emerged from seeing countless businesses struggle with manual processes that could be intelligently automated. Today, he leads a team of world-class engineers and strategists who share his passion for transforming how businesses operate.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Areas of Expertise:</h3>
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    {expertise.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-900/50 rounded-xl border border-slate-700">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Overview */}
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-slate-700 mb-12 sm:mb-20">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Our World-Class Team</h2>
              <p className="text-base sm:text-xl text-slate-300 px-2">10+ specialists from top institutions and high-growth companies</p>
            </div>

            {/* Stats */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex items-center gap-3 sm:gap-4 p-4 sm:p-6 bg-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-700">
                  <div className="text-blue-400 flex-shrink-0">{stat.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{stat.number}</div>
                    <div className="font-semibold text-white text-xs sm:text-sm mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-400">{stat.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Institutions */}
            <div className="mb-12 sm:mb-16">
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Our Team's Background</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {institutions.map((inst, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${inst.color} rounded-xl flex items-center justify-center text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4`}>
                      {inst.abbr}
                    </div>
                    <h4 className="font-bold text-white mb-2 text-sm sm:text-base">{inst.name}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 mb-2">{inst.program}</p>
                    <p className="text-xs text-slate-400 italic">{inst.note}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialties */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8">Our Core Specialties</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {specialties.map((spec, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-slate-900/50 rounded-xl sm:rounded-2xl border border-slate-700 hover:border-slate-600 transition-colors text-center">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{spec.icon}</div>
                    <h4 className="font-bold text-white mb-2 sm:mb-3 text-sm sm:text-base">{spec.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{spec.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 text-center">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 rounded-full text-xs sm:text-sm font-semibold text-white mb-6 sm:mb-8">
              Our Mission
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 max-w-4xl mx-auto px-2 leading-tight">
              Turn Your Business Into a Smart Machine That Scales Itself
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg text-blue-50 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
              <p>
                We believe every business should have access to enterprise-grade automation and AI, regardless of size or technical expertise. Our team combines deep technical knowledge with practical business experience to create systems that actually work in the real world.
              </p>
              <p>
                We're not just building tools—we're architecting the future of how businesses operate, grow, and succeed in an AI-driven world.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {values.map((value, idx) => (
                <div key={idx} className="p-4 sm:p-6 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/20 text-left">
                  <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{value.icon}</div>
                  <h4 className="font-bold text-white mb-2 text-sm sm:text-base">{value.title}</h4>
                  <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Ready to Work with Our Team?</h3>
              <p className="text-sm sm:text-base text-blue-100 mb-6 sm:mb-8 px-2">Let's discuss how we can transform your business with intelligent automation</p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto">
                <Link
                  href="https://cal.com/mopshyai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm sm:text-base active:scale-95 w-full sm:w-auto"
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                  Meet the Team
                </Link>
                <Link
                  href="mailto:mopshyai@gmail.com?subject=Team Consultation Request"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-sm sm:text-base active:scale-95 w-full sm:w-auto"
                >
                  <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}