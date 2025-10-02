"use client";
export default function NewsletterSection() {
    return (
      <section className="relative py-12 sm:py-16 lg:py-24 xl:py-32 bg-[#1a1f3a] text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-full mb-6 sm:mb-8 backdrop-blur-sm">
              <span className="text-sm sm:text-base">📬</span>
              <span className="text-xs sm:text-sm font-semibold">Stay Updated</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 px-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-base sm:text-lg text-slate-300 px-4 max-w-2xl mx-auto">
              Get the latest insights on lead generation, AI automation, and business growth strategies
            </p>
          </div>
  
          {/* Wide Rectangle Iframe Container */}
          <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-10 border border-white/20 hover:bg-white/15 transition-all">
            <div className="flex justify-center">
              <iframe 
                src="https://mopshy.substack.com/embed" 
                width="100%" 
                height="320"
                style={{
                  border: "1px solid rgba(255, 255, 255, 0.2)", 
                  background: "white",
                  borderRadius: "12px",
                  maxWidth: "600px"
                }} 
                frameBorder="0" 
                scrolling="no"
              />
            </div>
          </div>
  
          {/* Bottom Info */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-3xl mx-auto mb-6">
              <div className="flex items-center gap-3">
                <span className="text-lg sm:text-xl">✉️</span>
                <span className="text-xs sm:text-sm text-slate-300">Weekly insights and tips</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg sm:text-xl">🎯</span>
                <span className="text-xs sm:text-sm text-slate-300">Exclusive strategies</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg sm:text-xl">🚀</span>
                <span className="text-xs sm:text-sm text-slate-300">Case studies</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400">
              Join hundreds of businesses. Unsubscribe anytime.
            </p>
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