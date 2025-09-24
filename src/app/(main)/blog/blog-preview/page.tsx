
// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// // import { ArrowLeft, Edit, Check, Calendar, Clock, List, ExternalLink, AlertTriangle } from 'lucide-react';
// import { ArrowLeft, Edit, Check, Calendar, Clock, List, ExternalLink, AlertTriangle, Plus } from 'lucide-react';

// // Enhanced blog styles for the preview page with improved image alignment
// const blogStyles = `
//   .blog-content {
//     font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
//     color: #374151;
//     line-height: 1.8;
//   }

//   .blog-content h1 {
//     font-size: 2.25rem;
//     font-weight: 700;
//     margin-top: 2rem;
//     margin-bottom: 1rem;
//     color: #111827;
//     scroll-margin-top: 80px;
//   }

//   .blog-content h2 {
//     font-size: 1.75rem;
//     font-weight: 600;
//     margin-top: 1.5rem;
//     margin-bottom: 0.75rem;
//     color: #1f2937;
//     scroll-margin-top: 80px;
//   }

//   .blog-content h3 {
//     font-size: 1.375rem;
//     font-weight: 600;
//     margin-top: 1.25rem;
//     margin-bottom: 0.75rem;
//     color: #374151;
//     scroll-margin-top: 80px;
//   }

//   .blog-content p {
//     margin-bottom: 1.25rem;
//   }

//   .blog-content ul, .blog-content ol {
//     margin-bottom: 1.25rem;
//     padding-left: 1.5rem;
//   }

//   .blog-content ul li {
//     list-style-type: disc;
//     margin-bottom: 0.5rem;
//   }

//   .blog-content ol li {
//     list-style-type: decimal;
//     margin-bottom: 0.5rem;
//   }

//   .blog-content a {
//     color: #2563eb;
//     text-decoration: underline;
//     text-underline-offset: 2px;
//     transition: color 0.2s;
//   }
  
//   .blog-content a:hover {
//     color: #1e40af;
//   }

//   .blog-content blockquote {
//     border-left: 4px solid #e5e7eb;
//     padding-left: 1rem;
//     margin-left: 0;
//     margin-right: 0;
//     font-style: italic;
//     color: #6b7280;
//     background-color: #f9fafb;
//     padding: 1rem;
//     border-radius: 0.5rem;
//   }

//   .blog-content img {
//     border-radius: 0.5rem;
//     max-width: 100%;
//     height: auto;
//     margin: 1.5rem 0;
//     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
//   }

//   /* Enhanced image alignment classes that respect the alignment attribute */
//   .blog-content img.img-align-left, 
//   .blog-content img.blog-image.img-align-left {
//     float: left;
//     margin-right: 1.5rem;
//     margin-bottom: 1rem;
//     clear: left;
//   }

//   .blog-content img.img-align-center,
//   .blog-content img.blog-image.img-align-center {
//     display: block !important;
//     margin-left: auto !important;
//     margin-right: auto !important;
//     float: none !important;
//     clear: both !important;
//   }

//   .blog-content img.img-align-right,
//   .blog-content img.blog-image.img-align-right {
//     float: right;
//     margin-left: 1.5rem;
//     margin-bottom: 1rem;
//     clear: right;
//   }

//   /* Clear fix for paragraphs after floating images */
//   .blog-content p:after {
//     content: "";
//     display: table;
//     clear: both;
//   }

//   .blog-content table {
//     width: 100%;
//     border-collapse: collapse;
//     margin: 1.5rem 0;
//     overflow-x: auto;
//     display: block;
//   }

//   .blog-content table th,
//   .blog-content table td {
//     border: 1px solid #e5e7eb;
//     padding: 0.75rem;
//   }

//   .blog-content table th {
//     background-color: #f9fafb;
//     font-weight: 600;
//     text-align: left;
//   }

//   .blog-content table tr:nth-child(even) {
//     background-color: #f9fafb;
//   }
  
//   .blog-content code {
//     background-color: #f3f4f6;
//     padding: 0.2rem 0.4rem;
//     border-radius: 0.25rem;
//     font-family: 'Courier New', Courier, monospace;
//     font-size: 0.875em;
//   }

//   /* For larger screens */
//   @media (min-width: 768px) {
//     .blog-content {
//       font-size: 1.125rem;
//     }
//   }
// `;

// export default function BlogPreviewPage() {
//   const router = useRouter();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [publishing, setPublishing] = useState(false);
//   const [publishSuccess, setPublishSuccess] = useState(false);

//   useEffect(() => {
//     async function loadBlog() {
//       const blogId = localStorage.getItem('currentBlogId');
      
//       if (!blogId) {
//         router.push('/blog/new-blog');
//         return;
//       }
      
//       try {
//         const response = await fetch(`/api/blogs/${blogId}`);
        
//         if (!response.ok) {
//           throw new Error('Failed to load blog preview');
//         }
        
//         const blog = await response.json();
//         setBlog(blog);
//       } catch (err) {
//         setError(err.message || 'An unexpected error occurred');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     loadBlog();
//   }, [router]);

//   const handlePublish = async () => {
//     setPublishing(true);
//     const blogId = localStorage.getItem('currentBlogId');
    
//     try {
//       const response = await fetch(`/api/blogs/${blogId}/publish`, {
//         method: 'POST',
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to publish blog');
//       }
      
//       const updatedBlog = await response.json();
//       setBlog(updatedBlog);
//       setPublishSuccess(true);
      
//       // Auto-hide success message after 5 seconds
//       setTimeout(() => {
//         setPublishSuccess(false);
//       }, 5000);
//     } catch (err) {
//       setError(err.message || 'An unexpected error occurred');
//       console.error(err);
//     } finally {
//       setPublishing(false);
//     }
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return '';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const getReadingTime = (content) => {
//     if (!content) return '1 min read';
//     // Remove HTML tags
//     const text = content.replace(/<[^>]+>/g, '');
//     // Average reading speed: 200 words per minute
//     const words = text.split(/\s+/).length;
//     const minutes = Math.max(1, Math.round(words / 200));
//     return `${minutes} min read`;
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-blue-600 font-medium">Loading preview...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!blog) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white flex flex-col items-center justify-center p-4">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//         </svg>
//         <div className="text-2xl text-gray-700 mb-4 font-bold">No blog data found</div>
//         <p className="text-gray-600 mb-8 text-center max-w-md">
//           We couldn't find any blog content to preview. This might happen if you haven't created a blog yet.
//         </p>
//         <Link href="/blog/new-blog" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg flex items-center gap-2">
//           <Plus size={18} />
//           Create a New Blog
//         </Link>
//       </div>
//     );
//   }

//   // Use extracted ToC from the editor
//   const tocItems = blog.tocItems || [];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white pb-16">
//       <style>{blogStyles}</style>
      
//       {/* Success message */}
//       {publishSuccess && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
//           <Check className="mr-2" size={20} />
//           Blog published successfully!
//         </div>
//       )}
      
//       {/* Error message display */}
//       {error && (
//         <div className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
//           <AlertTriangle className="mr-2" size={20} />
//           {error}
//         </div>
//       )}
      
//       <div className="max-w-7xl mx-auto p-6 pt-24">
//         {/* Navigation */}
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="flex justify-between mb-8 sticky top-4 z-20"
//         >
//           <Link href="/blog/blog-editor" className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all text-blue-600 hover:text-blue-800">
//             <ArrowLeft size={18} />
//             <span>Back to Editor</span>
//           </Link>
          
//           <div className="flex gap-2">
//             <button
//               onClick={() => router.push('/blog/blog-editor')}
//               className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all text-gray-700 hover:text-gray-900"
//             >
//               <Edit size={18} />
//               <span>Edit</span>
//             </button>
//             <button
//               onClick={handlePublish}
//               disabled={publishing || blog.published}
//               className={`flex items-center gap-2 px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all ${
//                 blog.published 
//                   ? 'bg-green-100 text-green-800 cursor-not-allowed' 
//                   : 'bg-blue-600 text-white hover:bg-blue-700'
//               }`}
//             >
//               {publishing ? (
//                 <>
//                   <span className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></span>
//                   Publishing...
//                 </>
//               ) : blog.published ? (
//                 <>
//                   <Check size={18} />
//                   Published
//                 </>
//               ) : (
//                 <>
//                   <Check size={18} />
//                   Publish
//                 </>
//               )}
//             </button>
//             {blog.published && (
//               <Link 
//                 href={`/blog/${blog.slug}`}
//                 target="_blank"
//                 className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:bg-green-700 transition-all"
//               >
//                 <ExternalLink size={18} />
//                 <span>View Live</span>
//               </Link>
//             )}
//           </div>
//         </motion.div>
      
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Main Blog Content */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="w-full lg:w-3/4"
//           >
//             {/* Blog Header */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//               <h1 className="text-4xl font-bold mb-4 text-gray-900">{blog.title}</h1>
              
//               <div className="flex flex-wrap gap-4 text-gray-500 mb-6">
//                 <div className="flex items-center gap-1">
//                   <Calendar size={16} />
//                   <span>{formatDate(blog.createdAt)}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Clock size={16} />
//                   <span>{getReadingTime(blog.content)}</span>
//                 </div>
//                 <div className={`px-2 py-1 rounded-full text-xs font-medium ${
//                   blog.published 
//                     ? 'bg-green-100 text-green-800' 
//                     : 'bg-yellow-100 text-yellow-800'
//                 }`}>
//                   {blog.published ? 'Published' : 'Draft'}
//                 </div>
//               </div>
              
//               {blog.bannerImage && (
//                 <img
//                   src={blog.bannerImage}
//                   alt={blog.title}
//                   className="w-full h-80 object-cover rounded-xl shadow-md"
//                 />
//               )}
//             </div>
            
//             {/* Blog Content */}
//             <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//               <div 
//                 className="blog-content"
//                 dangerouslySetInnerHTML={{ __html: blog.content }}
//               />
//             </div>
            
//             {/* Reference Links */}
//             {blog.refLinks && blog.refLinks.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
//                 <h3 className="text-2xl font-bold mb-4 text-gray-800">References</h3>
//                 <ul className="space-y-3">
//                   {blog.refLinks.map((link, index) => (
//                     <li key={index} className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
//                       <span className="mr-3 text-blue-500 mt-1">•</span>
//                       <div>
//                         <p className="font-medium text-gray-900">{link.title}</p>
//                         <a
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 hover:underline text-sm break-all"
//                         >
//                           {link.url}
//                         </a>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </motion.div>
          
//           {/* Table of Contents Sidebar */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="w-full lg:w-1/4"
//           >
//             <div className="sticky top-24">
//               <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
//                 <div className="flex items-center gap-2 mb-4 text-gray-900 font-bold text-xl">
//                   <List size={20} />
//                   <h3>Table of Contents</h3>
//                 </div>
                
//                 {tocItems && tocItems.length > 0 ? (
//                   <ul className="space-y-3">
//                     {tocItems.map((item, index) => (
//                       <li 
//                         key={index}
//                         className={`
//                           ${item.level === 1 ? 'ml-0 font-medium text-base' :
//                           item.level === 2 ? 'ml-3 text-sm' :
//                           'ml-6 text-sm text-gray-600'}
//                         `}
//                       >
//                         <a 
//                           href={`#${item.slug}`} 
//                           className="text-blue-600 hover:text-blue-800 hover:underline transition-colors flex items-center gap-1"
//                         >
//                           {item.level === 1 && <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block"></span>}
//                           {item.content}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 ) : (
//                   <p className="text-gray-500 italic bg-gray-50 p-3 rounded-xl text-sm">
//                     No table of contents available. Add headings (H1, H2, H3) to your content to generate a table of contents.
//                   </p>
//                 )}
//               </div>
              
//               {/* Action Buttons */}
//               <div className="bg-white p-6 rounded-2xl shadow-lg space-y-3">
//                 <button
//                   onClick={() => router.push('/blog/blog-editor')}
//                   className="w-full bg-white text-blue-600 border border-blue-200 px-4 py-3 rounded-xl hover:bg-blue-50 transition flex items-center justify-center gap-2"
//                 >
//                   <Edit size={18} />
//                   Edit Blog
//                 </button>
//                 <button
//                   onClick={handlePublish}
//                   disabled={publishing || blog.published}
//                   className={`w-full px-4 py-3 rounded-xl transition flex items-center justify-center gap-2 ${
//                     blog.published 
//                       ? 'bg-green-100 text-green-800 cursor-not-allowed' 
//                       : 'bg-blue-600 text-white hover:bg-blue-700'
//                   }`}
//                 >
//                   <Check size={18} />
//                   {publishing ? 'Publishing...' : blog.published ? 'Published' : 'Publish'}
//                 </button>
//                 {blog.published && (
//                   <Link 
//                     href={`/blog/${blog.slug}`}
//                     target="_blank"
//                     className="w-full bg-green-600 text-white px-4 py-3 rounded-xl hover:bg-green-700 transition flex items-center justify-center gap-2"
//                   >
//                     <ExternalLink size={18} />
//                     View Published Blog
//                   </Link>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Edit, Check, Calendar, Clock, List, ExternalLink, AlertTriangle, Plus, BookOpen, Eye } from 'lucide-react';

// Enhanced blog styles for the preview page with dark theme
const blogStyles = `
  .blog-content {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #e2e8f0;
    line-height: 1.8;
  }

  .blog-content h1 {
    font-size: 2.25rem;
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #ffffff;
    scroll-margin-top: 80px;
  }

  .blog-content h2 {
    font-size: 1.75rem;
    font-weight: 600;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
    color: #f1f5f9;
    scroll-margin-top: 80px;
  }

  .blog-content h3 {
    font-size: 1.375rem;
    font-weight: 600;
    margin-top: 1.25rem;
    margin-bottom: 0.75rem;
    color: #cbd5e1;
    scroll-margin-top: 80px;
  }

  .blog-content p {
    margin-bottom: 1.25rem;
  }

  .blog-content ul, .blog-content ol {
    margin-bottom: 1.25rem;
    padding-left: 1.5rem;
  }

  .blog-content ul li {
    list-style-type: disc;
    margin-bottom: 0.5rem;
  }

  .blog-content ol li {
    list-style-type: decimal;
    margin-bottom: 0.5rem;
  }

  .blog-content a {
    color: #60a5fa;
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s;
  }
  
  .blog-content a:hover {
    color: #93c5fd;
  }

  .blog-content blockquote {
    border-left: 4px solid #475569;
    padding-left: 1rem;
    margin-left: 0;
    margin-right: 0;
    font-style: italic;
    color: #94a3b8;
    background-color: rgba(51, 65, 85, 0.3);
    padding: 1rem;
    border-radius: 0.5rem;
    backdrop-filter: blur(12px);
  }

  .blog-content img {
    border-radius: 0.75rem;
    max-width: 100%;
    height: auto;
    margin: 1.5rem 0;
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(71, 85, 105, 0.5);
  }

  /* Enhanced image alignment classes that respect the alignment attribute */
  .blog-content img.img-align-left, 
  .blog-content img.blog-image.img-align-left {
    float: left;
    margin-right: 1.5rem;
    margin-bottom: 1rem;
    clear: left;
  }

  .blog-content img.img-align-center,
  .blog-content img.blog-image.img-align-center {
    display: block !important;
    margin-left: auto !important;
    margin-right: auto !important;
    float: none !important;
    clear: both !important;
  }

  .blog-content img.img-align-right,
  .blog-content img.blog-image.img-align-right {
    float: right;
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    clear: right;
  }

  /* Clear fix for paragraphs after floating images */
  .blog-content p:after {
    content: "";
    display: table;
    clear: both;
  }

  .blog-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
    overflow-x: auto;
    display: block;
    background-color: rgba(51, 65, 85, 0.3);
    border-radius: 0.5rem;
  }

  .blog-content table th,
  .blog-content table td {
    border: 1px solid #475569;
    padding: 0.75rem;
  }

  .blog-content table th {
    background-color: rgba(51, 65, 85, 0.5);
    font-weight: 600;
    text-align: left;
    color: #f1f5f9;
  }

  .blog-content table tr:nth-child(even) {
    background-color: rgba(51, 65, 85, 0.2);
  }
  
  .blog-content code {
    background-color: rgba(51, 65, 85, 0.5);
    padding: 0.2rem 0.4rem;
    border-radius: 0.25rem;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.875em;
    color: #e2e8f0;
    border: 1px solid rgba(71, 85, 105, 0.5);
  }

  /* For larger screens */
  @media (min-width: 768px) {
    .blog-content {
      font-size: 1.125rem;
    }
  }
`;

export default function BlogPreviewPage() {
  const router = useRouter();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [publishing, setPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);

  useEffect(() => {
    async function loadBlog() {
      const blogId = localStorage.getItem('currentBlogId');
      
      if (!blogId) {
        router.push('/blog/new-blog');
        return;
      }
      
      try {
        const response = await fetch(`/api/blogs/${blogId}`);
        
        if (!response.ok) {
          throw new Error('Failed to load blog preview');
        }
        
        const blog = await response.json();
        setBlog(blog);
      } catch (err) {
        setError(err.message || 'An unexpected error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadBlog();
  }, [router]);

  const handlePublish = async () => {
    setPublishing(true);
    const blogId = localStorage.getItem('currentBlogId');
    
    try {
      const response = await fetch(`/api/blogs/${blogId}/publish`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Failed to publish blog');
      }
      
      const updatedBlog = await response.json();
      setBlog(updatedBlog);
      setPublishSuccess(true);
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => {
        setPublishSuccess(false);
      }, 5000);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
      console.error(err);
    } finally {
      setPublishing(false);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReadingTime = (content) => {
    if (!content) return '1 min read';
    // Remove HTML tags
    const text = content.replace(/<[^>]+>/g, '');
    // Average reading speed: 200 words per minute
    const words = text.split(/\s+/).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1f3a] text-white">
        {/* Background Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-white mb-3">Loading Preview...</h3>
            <p className="text-slate-400 text-lg">Preparing your blog preview</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#1a1f3a] text-white">
        {/* Background Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Eye className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">No Blog Data Found</h2>
          <p className="text-slate-400 mb-8 text-center max-w-md leading-relaxed">
            We couldn't find any blog content to preview. This might happen if you haven't created a blog yet.
          </p>
          <Link 
            href="/blog/new-blog" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <Plus className="w-5 h-5" />
            Create a New Blog
          </Link>
        </div>
      </div>
    );
  }

  // Use extracted ToC from the editor
  const tocItems = blog.tocItems || [];

  return (
    <div className="min-h-screen bg-[#1a1f3a] text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <style dangerouslySetInnerHTML={{ __html: blogStyles }} />
      
      {/* Success message */}
      {publishSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500/20 border border-green-500/30 text-green-300 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl flex items-center">
          <Check className="mr-3 w-5 h-5" />
          Blog published successfully!
        </div>
      )}
      
      {/* Error message display */}
      {error && (
        <div className="fixed top-4 right-4 z-50 bg-red-500/20 border border-red-500/30 text-red-300 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl flex items-center">
          <AlertTriangle className="mr-3 w-5 h-5" />
          <span className="flex-1">{error}</span>
          <button 
            className="ml-4 bg-red-500/20 hover:bg-red-500/30 rounded-full p-1.5 transition-colors"
            onClick={() => setError('')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto p-6 pt-24 pb-16">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between mb-8 sticky top-4 z-20"
        >
          <Link 
            href="/blog/blog-editor" 
            className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all text-slate-300 hover:text-white shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Editor</span>
          </Link>
          
          <div className="flex gap-3">
            <button
              onClick={() => router.push('/blog/blog-editor')}
              className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all text-slate-300 hover:text-white shadow-lg"
            >
              <Edit className="w-5 h-5" />
              <span className="font-medium">Edit</span>
            </button>
            <button
              onClick={handlePublish}
              disabled={publishing || blog.published}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg transition-all font-bold ${
                blog.published 
                  ? 'bg-green-500/20 border border-green-500/30 text-green-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl'
              }`}
            >
              {publishing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                  Publishing...
                </>
              ) : blog.published ? (
                <>
                  <Check className="w-5 h-5" />
                  Published
                </>
              ) : (
                <>
                  <Check className="w-5 h-5" />
                  Publish
                </>
              )}
            </button>
            {blog.published && (
              <Link 
                href={`/blog/${blog.slug}`}
                target="_blank"
                className="flex items-center gap-3 bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 px-6 py-3 rounded-xl shadow-lg transition-all font-bold"
              >
                <ExternalLink className="w-5 h-5" />
                <span>View Live</span>
              </Link>
            )}
          </div>
        </motion.div>
      
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Blog Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-3/4"
          >
            {/* Blog Header */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 mb-8 shadow-2xl">
              <h1 className="text-4xl font-bold mb-6 text-white">{blog.title}</h1>
              
              <div className="flex flex-wrap gap-4 text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  <span>{formatDate(blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>{getReadingTime(blog.content)}</span>
                </div>
                <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${
                  blog.published 
                    ? 'bg-green-500/20 border-green-500/30 text-green-300' 
                    : 'bg-yellow-500/20 border-yellow-500/30 text-yellow-300'
                }`}>
                  {blog.published ? 'Published' : 'Draft'}
                </div>
              </div>
              
              {blog.bannerImage && (
                <img
                  src={blog.bannerImage}
                  alt={blog.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg border border-slate-700/50"
                />
              )}
            </div>
            
            {/* Blog Content */}
            <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 mb-8 shadow-2xl">
              <div 
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </div>
            
            {/* Reference Links */}
            {blog.refLinks && blog.refLinks.length > 0 && (
              <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 mb-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white">References</h3>
                <ul className="space-y-3">
                  {blog.refLinks.map((link, index) => (
                    <li key={index} className="flex items-start p-4 bg-slate-700/30 rounded-xl hover:bg-slate-700/50 transition-colors border border-slate-600/50">
                      <span className="mr-3 text-blue-400 mt-1 font-bold">•</span>
                      <div>
                        <p className="font-medium text-white mb-1">{link.title}</p>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm break-all transition-colors"
                        >
                          {link.url}
                        </a>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
          
          {/* Table of Contents Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-1/4"
          >
            <div className="sticky top-24 space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 text-white font-bold text-xl">
                  <List className="w-6 h-6 text-blue-400" />
                  <h3>Table of Contents</h3>
                </div>
                
                {tocItems && tocItems.length > 0 ? (
                  <ul className="space-y-3">
                    {tocItems.map((item, index) => (
                      <li 
                        key={index}
                        className={`
                          ${item.level === 1 ? 'ml-0 font-medium text-base border-l-4 border-blue-400 pl-4' :
                          item.level === 2 ? 'ml-4 text-sm border-l-2 border-blue-300/70 pl-4' :
                          'ml-8 text-sm text-slate-400 pl-4'}
                        `}
                      >
                        <a 
                          href={`#${item.slug}`} 
                          className="block py-2 text-slate-300 hover:text-blue-300 transition-colors"
                        >
                          {item.level === 1 && <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mr-2"></span>}
                          {item.content}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-slate-400 bg-slate-700/30 p-4 rounded-xl text-sm text-center border border-slate-600/50">
                    <BookOpen className="w-8 h-8 mx-auto mb-3 opacity-50" />
                    <p className="font-medium mb-1">No table of contents available</p>
                    <p className="text-xs">Add headings (H1, H2, H3) to your content to generate a table of contents.</p>
                  </div>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 shadow-2xl space-y-4">
                <button
                  onClick={() => router.push('/blog/blog-editor')}
                  className="w-full bg-slate-700/50 hover:bg-slate-700/70 text-slate-300 hover:text-white border border-slate-600/50 hover:border-slate-500/50 px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-3 font-medium"
                >
                  <Edit className="w-5 h-5" />
                  Edit Blog
                </button>
                <button
                  onClick={handlePublish}
                  disabled={publishing || blog.published}
                  className={`w-full px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-3 font-bold ${
                    blog.published 
                      ? 'bg-green-500/20 border border-green-500/30 text-green-300 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 hover:shadow-lg'
                  }`}
                >
                  {publishing ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                      Publishing...
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5" />
                      {blog.published ? 'Published' : 'Publish'}
                    </>
                  )}
                </button>
                {blog.published && (
                  <Link 
                    href={`/blog/${blog.slug}`}
                    target="_blank"
                    className="w-full bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 px-6 py-3 rounded-xl transition-all flex items-center justify-center gap-3 font-bold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    View Published Blog
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}