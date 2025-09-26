"use client"
import Link from 'next/link';

export default function CareersPage() {
  const cultureItems = [
    { icon: "🌍", title: "Remote-First Culture", desc: "Work from anywhere in the world with flexible hours and a focus on results, not location" },
    { icon: "🚀", title: "Cutting-Edge Technology", desc: "Work with the latest AI and automation technologies, pushing the boundaries of what's possible" },
    { icon: "📈", title: "High-Impact Work", desc: "Your work directly transforms businesses and helps entrepreneurs achieve their dreams" },
    { icon: "🎓", title: "Continuous Learning", desc: "Generous learning budget and time for professional development and skill advancement" },
    { icon: "💰", title: "Competitive Compensation", desc: "Top-tier salaries, equity participation, and comprehensive benefits package" },
    { icon: "🤝", title: "Collaborative Team", desc: "Work alongside brilliant minds from top institutions and high-growth companies" }
  ];

  const positions = [
    {
      title: "Senior AI Engineer",
      type: "Full-Time • Remote",
      desc: "Lead the development of our AI-powered automation systems and machine learning models",
      skills: ["Python", "TensorFlow", "NLP", "MLOps"],
      email: "Senior AI Engineer Application"
    },
    {
      title: "Full-Stack Developer",
      type: "Full-Time • Remote",
      desc: "Build scalable web applications and automation platforms using modern technologies",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      email: "Full-Stack Developer Application"
    },
    {
      title: "Automation Specialist",
      type: "Full-Time • Remote",
      desc: "Design and implement automation workflows for client businesses across various industries",
      skills: ["Zapier", "Make", "APIs", "CRM"],
      email: "Automation Specialist Application"
    },
    {
      title: "Growth Marketing Manager",
      type: "Full-Time • Remote",
      desc: "Drive growth through data-driven marketing strategies and automation campaigns",
      skills: ["Growth Hacking", "Analytics", "A/B Testing", "SEO"],
      email: "Growth Marketing Manager Application"
    },
    {
      title: "UX/UI Designer",
      type: "Full-Time • Remote",
      desc: "Create beautiful, conversion-focused designs for our automation platforms and client projects",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      email: "UX/UI Designer Application"
    },
    {
      title: "Customer Success Manager",
      type: "Full-Time • Remote",
      desc: "Ensure client success and drive adoption of our automation solutions",
      skills: ["Client Relations", "Project Management", "Training", "Analytics"],
      email: "Customer Success Manager Application"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>🚀</span>
              <span className="text-sm font-semibold">Join Our Team</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              Shape the Future of Business Automation
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Join our world-class team of AI engineers, automation specialists, and growth strategists as we transform how businesses operate and scale
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { number: "10+", label: "Team Members" },
              { number: "100%", label: "Remote-First" },
              { number: "127+", label: "Businesses Transformed" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Why Work at Mopshy?
            </h2>
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
              We're building the future of business automation with a team that values innovation, growth, and impact
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {cultureItems.map((item, i) => (
              <div key={i} className="bg-white p-6 lg:p-8 rounded-2xl shadow-lg border border-slate-200 text-center hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positions Section */}
      <section className="bg-slate-50 py-16 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Open Positions
            </h2>
            <p className="text-lg sm:text-xl text-slate-600">
              We're always looking for exceptional talent to join our mission
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {positions.map((pos, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-blue-600 transition-all">
                <div className="bg-slate-50 p-6 border-b border-slate-200">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pos.title}</h3>
                  <div className="text-sm font-semibold text-blue-600">{pos.type}</div>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-6 leading-relaxed">{pos.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pos.skills.map((skill, j) => (
                      <span key={j} className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link 
                    href={`mailto:mopshyai@gmail.com?subject=${pos.email}`}
                    className="inline-block w-full px-6 py-3 bg-blue-50 text-blue-600 font-semibold rounded-lg border border-blue-200 hover:bg-blue-600 hover:text-white text-center transition-colors"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-12 text-center border border-slate-200">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute to our mission
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="mailto:mopshyai@gmail.com?subject=General Application - Tell Us About Yourself"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                Send General Application 📧
              </Link>
              <Link 
                href="https://cal.com/mopshyai/30min"
                target="_blank"
                className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                Schedule Chat 💬
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