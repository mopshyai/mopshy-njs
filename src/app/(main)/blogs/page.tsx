// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';

// export default function BlogPage() {
//   const [email, setEmail] = useState('');
//   const [isSubscribing, setIsSubscribing] = useState(false);

//   const handleSubscribe = () => {
//     if (!email.trim()) {
//       alert('Please enter your email address');
//       return;
//     }

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert('Please enter a valid email address');
//       return;
//     }

//     setIsSubscribing(true);
    
//     const emailBody = `
// Newsletter Subscription Request:

// Email: ${email}
// Date: ${new Date().toLocaleDateString()}

// Please add this email to the Mopshy AI automation insights newsletter.
//     `;
    
//     window.location.href = `mailto:mopshyai@gmail.com?subject=Newsletter Subscription Request&body=${encodeURIComponent(emailBody)}`;
    
//     setTimeout(() => {
//       setIsSubscribing(false);
//       setEmail('');
//     }, 3000);
//   };

//   const featuredPost = {
//     title: "The Future of AI-Powered Lead Generation in 2025",
//     excerpt: "Discover how artificial intelligence is revolutionizing the way businesses capture, qualify, and convert leads. Learn the strategies that are driving 300% increases in conversion rates.",
//     date: "2025-01-15",
//     readTime: "8 min read",
//     image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
//     tags: ["AI", "Lead Generation", "Automation"],
//     slug: "future-of-ai-lead-generation-2025"
//   };

//   const posts = [
//     {
//       title: "10 Marketing Automation Workflows That Convert",
//       excerpt: "Step-by-step guide to implementing high-converting automation workflows that nurture leads and drive sales on autopilot.",
//       date: "2025-01-12",
//       readTime: "6 min read",
//       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//       tags: ["Automation", "Marketing"],
//       category: "Guide",
//       slug: "marketing-automation-workflows"
//     },
//     {
//       title: "Case Study: How TechCorp Increased Leads by 347%",
//       excerpt: "Real results from implementing our AI lead generation system. See the exact strategies that transformed their sales pipeline.",
//       date: "2025-01-10",
//       readTime: "5 min read",
//       image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
//       tags: ["Case Study", "Results"],
//       category: "Case Study",
//       slug: "techcorp-case-study"
//     },
//     {
//       title: "AI Chatbots vs. Traditional Forms: What Converts Better?",
//       excerpt: "Data-driven comparison of conversion rates, user engagement, and ROI between AI chatbots and traditional lead capture forms.",
//       date: "2025-01-08",
//       readTime: "7 min read",
//       image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=250&fit=crop",
//       tags: ["Chatbots", "Comparison"],
//       category: "Comparison",
//       slug: "chatbots-vs-forms"
//     },
//     {
//       title: "Complete Guide to CRM Integration & Automation",
//       excerpt: "Everything you need to know about integrating your automation systems with HubSpot, Salesforce, and other popular CRMs.",
//       date: "2025-01-05",
//       readTime: "9 min read",
//       image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
//       tags: ["CRM", "Integration"],
//       category: "Tutorial",
//       slug: "crm-integration-guide"
//     },
//     {
//       title: "5 Email Automation Sequences That Actually Work",
//       excerpt: "Proven email sequences that nurture leads from first contact to closed deal. Includes templates and best practices.",
//       date: "2025-01-03",
//       readTime: "6 min read",
//       image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=250&fit=crop",
//       tags: ["Email", "Automation"],
//       category: "Guide",
//       slug: "email-automation-sequences"
//     },
//     {
//       title: "The ROI of AI Automation: What to Expect",
//       excerpt: "Break down the costs, timeline, and expected returns from implementing AI automation in your business operations.",
//       date: "2025-01-01",
//       readTime: "8 min read",
//       image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
//       tags: ["ROI", "Strategy"],
//       category: "Blog",
//       slug: "roi-ai-automation"
//     }
//   ];

//   return (
//     <main>
//       {/* Hero Section */}
//       <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
//         <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
//               <span>📝</span>
//               <span className="text-sm font-semibold">Blog & Insights</span>
//             </div>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
//               AI Automation Insights & Industry Trends
//             </h1>
//             <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
//               Stay ahead of the curve with expert insights on AI automation, lead generation strategies, and business growth tactics
//             </p>
//           </div>

//           {/* Featured Post */}
//           <Link href={`/blog/${featuredPost.slug}`} className="block bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all mb-16">
//             <div className="grid lg:grid-cols-2 gap-0 items-center">
//               <div className="relative h-64 lg:h-96">
//                 <img
//                   src={featuredPost.image}
//                   alt={featuredPost.title}
//                 //   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
//                   Featured
//                 </div>
//               </div>
//               <div className="p-8 lg:p-10">
//                 <div className="flex gap-4 text-sm text-slate-300 mb-4">
//                   <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                   <span>•</span>
//                   <span>{featuredPost.readTime}</span>
//                 </div>
//                 <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
//                 <p className="text-slate-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
//                 <div className="flex gap-2 flex-wrap">
//                   {featuredPost.tags.map((tag, i) => (
//                     <span key={i} className="px-3 py-1 bg-white/10 text-slate-200 text-xs font-medium rounded-full border border-white/20">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </Link>

//           {/* Blog Posts Grid */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {posts.map((post, idx) => (
//               <Link key={idx} href={`/blog/${post.slug}`} className="block bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all">
//                 <div className="relative h-48">
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     // fill
//                     className="object-cover"
//                   />
//                   <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
//                     {post.category}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex gap-4 text-sm text-slate-300 mb-3">
//                     <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
//                     <span>•</span>
//                     <span>{post.readTime}</span>
//                   </div>
//                   <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
//                   <p className="text-slate-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
//                   <div className="flex gap-2 flex-wrap">
//                     {post.tags.slice(0, 2).map((tag, i) => (
//                       <span key={i} className="px-2 py-1 bg-white/10 text-slate-200 text-xs font-medium rounded-full border border-white/20">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>

//           {/* Newsletter Section */}
//           <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/20 text-center">
//             <div className="text-5xl mb-6">📧</div>
//             <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Automation Insights</h3>
//             <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
//               Get weekly insights on AI automation, lead generation strategies, and business growth tactics delivered to your inbox.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
//                 placeholder="Enter your email address"
//                 className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 backdrop-blur-sm"
//               />
//               <button
//                 onClick={handleSubscribe}
//                 disabled={isSubscribing}
//                 className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50"
//               >
//                 {isSubscribing ? 'Sent!' : 'Subscribe →'}
//               </button>
//             </div>
//             <div className="text-sm text-slate-400">✅ Weekly insights • No spam • Unsubscribe anytime</div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-white py-16 sm:py-20">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
//             Ready to Implement What You've Learned?
//           </h2>
//           <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
//             Turn insights into action with our expert team. Let's discuss how AI automation can transform your business.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link 
//               href="https://cal.com/mopshyai/30min"
//               target="_blank"
//               className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
//             >
//               Book Strategy Call 📅
//             </Link>
//             <Link 
//               href="mailto:mopshyai@gmail.com?subject=Blog Consultation Request"
//               className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
//             >
//               Get Expert Consultation 💬
//             </Link>
//           </div>
//         </div>
//       </section>

//       <style jsx>{`
//         @keyframes gridMove {
//           0% { transform: translate(0, 0); }
//           100% { transform: translate(60px, 60px); }
//         }
//       `}</style>
//     </main>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import NewsletterSection from '@/components/sections/Newsletter';

export default function BlogPage() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [featuredPost, setFeaturedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs data
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch featured blog and regular blogs in parallel
        const [featuredResponse, blogsResponse] = await Promise.all([
          fetch('/api/blog?featured=true'),
          fetch('/api/blog?limit=6')
        ]);

        if (!featuredResponse.ok || !blogsResponse.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const featuredData = await featuredResponse.json();
        const blogsData = await blogsResponse.json();

        if (featuredData.success) {
          setFeaturedPost(featuredData.data);
        }

        if (blogsData.success) {
          // Exclude featured post from regular posts list
          const regularPosts = featuredData.data 
            ? blogsData.data.filter(post => post.id !== featuredData.data.id)
            : blogsData.data;
          setPosts(regularPosts);
        }

      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
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
Newsletter Subscription Request:

Email: ${email}
Date: ${new Date().toLocaleDateString()}

Please add this email to the Mopshy AI automation insights newsletter.
    `;
    
    window.location.href = `mailto:mopshyai@gmail.com?subject=Newsletter Subscription Request&body=${encodeURIComponent(emailBody)}`;
    
    setTimeout(() => {
      setIsSubscribing(false);
      setEmail('');
    }, 3000);
  };

  // Loading state
  if (loading) {
    return (
      <main>
        <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                <span>📝</span>
                <span className="text-sm font-semibold">Blog & Insights</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                AI Automation Insights & Industry Trends
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on AI automation, lead generation strategies, and business growth tactics
              </p>
            </div>

            {/* Loading Animation */}
            <div className="flex justify-center items-center py-20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                <p className="text-white/70">Loading latest insights...</p>
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

  // Error state
  if (error) {
    return (
      <main>
        <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                <span>📝</span>
                <span className="text-sm font-semibold">Blog & Insights</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                AI Automation Insights & Industry Trends
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on AI automation, lead generation strategies, and business growth tactics
              </p>
            </div>

            {/* Error State */}
            <div className="flex justify-center items-center py-20">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
                <div className="text-6xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold mb-4">Oops! Something went wrong</h3>
                <p className="text-slate-300 mb-6">We couldn't load the blog posts. Please try refreshing the page.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Refresh Page
                </button>
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

  // Empty state
  if (!featuredPost && posts.length === 0) {
    return (
      <main>
        <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                <span>📝</span>
                <span className="text-sm font-semibold">Blog & Insights</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
                AI Automation Insights & Industry Trends
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
                Stay ahead of the curve with expert insights on AI automation, lead generation strategies, and business growth tactics
              </p>
            </div>

            {/* Empty State */}
            <div className="flex justify-center items-center py-20">
              <div className="text-center bg-white/10 backdrop-blur-xl rounded-2xl p-12 border border-white/20 max-w-lg">
                <div className="text-6xl mb-6">📝</div>
                <h3 className="text-2xl font-bold mb-4">Coming Soon!</h3>
                <p className="text-slate-300 mb-6">We're working on some amazing content about AI automation and business growth. Stay tuned!</p>
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                    placeholder="Get notified when we publish"
                    className="px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 backdrop-blur-sm"
                  />
                  <button
                    onClick={handleSubscribe}
                    disabled={isSubscribing}
                    className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50"
                  >
                    {isSubscribing ? 'Sent!' : 'Notify Me →'}
                  </button>
                </div>
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

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#1a1f3a] text-white pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px] animate-[gridMove_30s_linear_infinite]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
              <span>📝</span>
              <span className="text-sm font-semibold">Blog & Insights</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              AI Automation Insights & Industry Trends
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto">
              Stay ahead of the curve with expert insights on AI automation, lead generation strategies, and business growth tactics
            </p>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.slug}`} className="block bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all mb-16">
              <div className="grid lg:grid-cols-2 gap-0 items-center">
                <div className="relative h-64 lg:h-96">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-10">
                  <div className="flex gap-4 text-sm text-slate-300 mb-4">
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex gap-2 flex-wrap">
                    {featuredPost.tags?.slice(0, 3).map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 text-slate-200 text-xs font-medium rounded-full border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Blog Posts Grid */}
          {posts.length > 0 && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {posts.map((post, idx) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="block bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 hover:-translate-y-1 transition-all">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex gap-4 text-sm text-slate-300 mb-3">
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                    <div className="flex gap-2 flex-wrap">
                      {post.tags?.slice(0, 2).map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 text-slate-200 text-xs font-medium rounded-full border border-white/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Newsletter Section */}
          {/* <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 lg:p-10 border border-white/20 text-center">
            <div className="text-5xl mb-6">📧</div>
            <h3 className="text-2xl font-bold mb-4">Stay Updated with AI Automation Insights</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Get weekly insights on AI automation, lead generation strategies, and business growth tactics delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSubscribe()}
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/15 backdrop-blur-sm"
              />
              <button
                onClick={handleSubscribe}
                disabled={isSubscribing}
                className="px-6 py-3 bg-white text-slate-900 rounded-lg font-semibold hover:bg-slate-100 transition-colors disabled:opacity-50"
              >
                {isSubscribing ? 'Sent!' : 'Subscribe →'}
              </button>
            </div>
            <div className="text-sm text-slate-400">✅ Weekly insights • No spam • Unsubscribe anytime</div>
          </div> */}
          <NewsletterSection />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ready to Implement What You've Learned?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            Turn insights into action with our expert team. Let's discuss how AI automation can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://cal.com/mopshyai/30min"
              target="_blank"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              Book Strategy Call 📅
            </Link>
            <Link 
              href="mailto:mopshyai@gmail.com?subject=Blog Consultation Request"
              className="px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold hover:border-slate-400 hover:bg-slate-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Get Expert Consultation 💬
            </Link>
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