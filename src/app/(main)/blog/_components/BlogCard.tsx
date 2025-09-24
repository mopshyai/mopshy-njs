
// 'use client';

// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { Calendar, Edit2, Eye, Bookmark, ArrowUpRight } from 'lucide-react';

// export default function BlogCard({ blog, allBlogs, setBlogs }) {
//   const router = useRouter();

//   const handleView = (e) => {
//     e.preventDefault();
//     localStorage.setItem('currentBlogId', blog.id);
//     router.push('/blog/blog-preview');
//   };

//   const handleEdit = (e) => {
//     e.preventDefault();
//     localStorage.setItem('currentBlogId', blog.id);
//     router.push('/blog/blog-editor');
//   };

//   // Get a short excerpt from the content
//   const getExcerpt = (content, maxLength = 120) => {
//     if (!content) return '';
//     // Remove HTML tags and get plain text
//     const plainText = content.replace(/<[^>]+>/g, '');
//     return plainText.length > maxLength
//       ? plainText.substring(0, maxLength) + '...'
//       : plainText;
//   };

//   // Format date in a more readable way
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   const handleDeleteBlog = async (id: string) => {
//     // /api/blogs/[id]
//     if (!confirm('Are you sure you want to delete this blog?')) return;
//     const response = await fetch(`/api/blogs/${id}`, {
//       method: 'DELETE'
//     });
//     if (response.ok) {
//       // Remove the blog from the UI
//       setBlogs(allBlogs.filter(blog => blog.id !== id));
//     }
//   }

//   return (
//     <div className="group h-full bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
//       {/* Blog Image with Gradient Overlay */}
//       <div className="relative h-48 overflow-hidden">
//         {blog.bannerImage ? (
//           <img
//             src={blog.bannerImage}
//             alt={blog.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         ) : (
//           <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600"></div>
//         )}
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>

//         {/* Status Badge */}
//         <div className="flex items-center justify-between w-full absolute top-4 px-6">
//           <div>
//             <span className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer 
//             ${blog.published
//                 ? 'bg-green-500/90 text-white'
//                 : 'bg-yellow-500/90 text-white'}`}
//             >
//               {blog.published ? 'Published' : 'Draft'}
//             </span>
//           </div>
//           <div>
//             <span
//               onClick={() => handleDeleteBlog(blog.id)}
//               className={"px-3 py-1 rounded-full text-xs font-medium cursor-pointer bg-red-500/90 text-white"}
//             >
//               Delete
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="p-6">
//         <h2 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
//           {blog.title}
//         </h2>

//         {/* Date */}
//         <div className="flex items-center text-sm text-gray-500 mb-3">
//           <Calendar size={14} className="mr-1" />
//           <span>{formatDate(blog.createdAt)}</span>
//         </div>

//         {/* Excerpt */}
//         {blog.content && (
//           <p className="text-gray-600 text-sm mb-5 line-clamp-3">
//             {getExcerpt(blog.content)}
//           </p>
//         )}

//         {/* Action Buttons */}
//         <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
//           <button
//             onClick={handleEdit}
//             className="flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
//           >
//             <Edit2 size={16} />
//             <span>Edit</span>
//           </button>

//           <button
//             onClick={handleView}
//             className="flex items-center gap-1 text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
//           >
//             <Eye size={16} />
//             <span>Preview</span>
//           </button>

//           {blog.published && (
//             <Link
//               href={`/blog/${blog.slug}`}
//               className="flex items-center gap-1 text-green-600 hover:text-green-800 font-medium text-sm transition-colors"
//               target="_blank"
//             >
//               <ArrowUpRight size={16} />
//               <span>View</span>
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar, Edit2, Eye, Trash2, ArrowUpRight, Clock, BookOpen } from 'lucide-react';

export default function BlogCard({ blog, allBlogs, setBlogs }) {
  const router = useRouter();

  const handleView = (e) => {
    e.preventDefault();
    localStorage.setItem('currentBlogId', blog.id);
    router.push('/blog/blog-preview');
  };

  const handleEdit = (e) => {
    e.preventDefault();
    localStorage.setItem('currentBlogId', blog.id);
    router.push('/blog/blog-editor');
  };

  // Get a short excerpt from the content
  const getExcerpt = (content, maxLength = 120) => {
    if (!content) return 'No content preview available...';
    // Remove HTML tags and get plain text
    const plainText = content.replace(/<[^>]+>/g, '');
    return plainText.length > maxLength
      ? plainText.substring(0, maxLength) + '...'
      : plainText;
  };

  // Format date in a more readable way
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDeleteBlog = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog? This action cannot be undone.')) return;
    
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE'
      });
      
      if (response.ok) {
        // Remove the blog from the UI
        setBlogs(allBlogs.filter(blog => blog.id !== id));
      } else {
        alert('Failed to delete blog. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('An error occurred while deleting the blog.');
    }
  }

  return (
    <div className="group h-full bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10">
      {/* Blog Image with Gradient Overlay */}
      <div className="relative h-48 overflow-hidden">
        {blog.bannerImage ? (
          <img
            src={blog.bannerImage}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-500/80 to-purple-600/80 flex items-center justify-center">
            <BookOpen className="w-16 h-16 text-white/70" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>

        {/* Status and Action Badges */}
        <div className="flex items-center justify-between w-full absolute top-4 px-4">
          <div>
            <span className={`px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border transition-all duration-300 cursor-default ${
              blog.published
                ? 'bg-green-500/20 text-green-300 border-green-500/30 shadow-lg shadow-green-500/10'
                : 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30 shadow-lg shadow-yellow-500/10'
            }`}>
              {blog.published ? 'Published' : 'Draft'}
            </span>
          </div>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleDeleteBlog(blog.id);
              }}
              className="px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border bg-red-500/20 text-red-300 border-red-500/30 shadow-lg shadow-red-500/10 hover:bg-red-500/30 hover:text-red-200 transition-all duration-300"
            >
              Delete
            </button>
          </div>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-full">
        <h2 className="text-xl font-bold mb-3 text-white line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
          {blog.title}
        </h2>

        {/* Date and Reading Time */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{formatDate(blog.createdAt)}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>5 min read</span>
          </div>
        </div>

        {/* Excerpt */}
        <div className="flex-1 mb-6">
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {getExcerpt(blog.content)}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-700/50 mt-auto">
          <button
            onClick={handleEdit}
            className="group/btn flex items-center gap-2 px-3 py-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 font-medium text-sm rounded-lg transition-all duration-300"
          >
            <Edit2 className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Edit</span>
          </button>

          <button
            onClick={handleView}
            className="group/btn flex items-center gap-2 px-3 py-2 text-slate-400 hover:text-slate-300 hover:bg-slate-700/50 font-medium text-sm rounded-lg transition-all duration-300"
          >
            <Eye className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
            <span>Preview</span>
          </button>

          {blog.published && (
            <Link
              href={`/blog/${blog.slug}`}
              className="group/btn flex items-center gap-2 px-3 py-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 font-medium text-sm rounded-lg transition-all duration-300"
              target="_blank"
            >
              <ArrowUpRight className="w-4 h-4 group-hover/btn:scale-110 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              <span>View Live</span>
            </Link>
          )}
        </div>
      </div>

      {/* Subtle Border Animation */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl border border-blue-500/20 animate-pulse"></div>
      </div>
    </div>
  );
}