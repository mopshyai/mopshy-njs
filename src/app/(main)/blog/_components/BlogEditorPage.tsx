
// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import { useRouter } from 'next/navigation';
// import dynamic from 'next/dynamic';
// import Link from 'next/link';
// import { motion } from 'framer-motion';
// import { ArrowLeft, Eye, Save, LinkIcon, Image as ImageIcon, Globe, Calendar, AlertTriangle, Edit, Check, X, Upload, FileSearch } from 'lucide-react';

// // Dynamically import TipTapEditor to avoid SSR issues
// const TipTapEditor = dynamic(() => import('./TipTapEditor'), { 
//   ssr: false,
//   loading: () => (
//     <div className="border rounded-xl shadow-md p-6 min-h-[500px] flex items-center justify-center">
//       <div className="flex flex-col items-center">
//         <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
//         <p className="mt-4 text-blue-600">Loading editor...</p>
//       </div>
//     </div>
//   )
// });

// const BlogEditorPage = () => {
//   const router = useRouter();
//   const fileInputRef = useRef(null);
  
//   const [blogInfo, setBlogInfo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [extractedToc, setExtractedToc] = useState([]);
//   const [saving, setSaving] = useState(false);
//   const [saveSuccess, setSaveSuccess] = useState(false);
  
//   // Add state for editing header
//   const [isEditingHeader, setIsEditingHeader] = useState(false);
//   const [editedBlogInfo, setEditedBlogInfo] = useState(null);
//   const [headerSaving, setHeaderSaving] = useState(false);
  
//   // Add state for meta data modal
//   const [isMetaDataModalOpen, setIsMetaDataModalOpen] = useState(false);
//   const [metaDataSaving, setMetaDataSaving] = useState(false);
  
//   // Image upload state
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [imagePreviewError, setImagePreviewError] = useState(false);
//   const [ogImagePreviewError, setOgImagePreviewError] = useState(false);
//   const ogImageFileInputRef = useRef(null);

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
//           throw new Error('Failed to load blog data');
//         }
        
//         const blog = await response.json();
//         setBlogInfo(blog);
//         setEditedBlogInfo(blog); // Initialize editedBlogInfo with blog data
        
//         // Convert tocItems from DB to the format expected by our components
//         if (blog.tocItems && blog.tocItems.length > 0) {
//           setExtractedToc(blog.tocItems.map(item => ({
//             level: item.level,
//             content: item.content,
//             id: item.slug
//           })));
//         }
//       } catch (err) {
//         setError(err.message || 'An unexpected error occurred');
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     loadBlog();
//   }, [router]);

//   const handleSave = async (content, tableOfContents) => {
//     setSaving(true);
//     setSaveSuccess(false);
//     const blogId = localStorage.getItem('currentBlogId');
    
//     if (!blogId) {
//       setError('No blog ID found. Please create a new blog.');
//       setSaving(false);
//       return;
//     }
    
//     try {
//       // Combine the metadata with the blog content
//       const updatedBlog = {
//         ...blogInfo,
//         content,
//         extractedToc: tableOfContents
//       };
      
//       const response = await fetch(`/api/blogs/${blogId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedBlog),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to save blog');
//       }
      
//       setSaveSuccess(true);
//       setTimeout(() => setSaveSuccess(false), 3000);

//       // Update state with latest content
//       const updatedResponse = await fetch(`/api/blogs/${blogId}`);
//       if (updatedResponse.ok) {
//         const updatedBlog = await updatedResponse.json();
//         setBlogInfo(updatedBlog);
//         setEditedBlogInfo(updatedBlog);
//       }
//     } catch (err) {
//       setError(err.message || 'An unexpected error occurred');
//       console.error(err);
//     } finally {
//       setSaving(false);
//     }
//   };

//   // Handle saving header info
//   const handleSaveHeader = async () => {
//     setHeaderSaving(true);
//     setSaveSuccess(false);
//     const blogId = localStorage.getItem('currentBlogId');
    
//     if (!blogId) {
//       setError('No blog ID found. Please create a new blog.');
//       setHeaderSaving(false);
//       return;
//     }
    
//     try {
//       // Prepare the updated blog data
//       const updatedBlog = {
//         ...blogInfo,
//         ...editedBlogInfo
//       };
      
//       const response = await fetch(`/api/blogs/${blogId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updatedBlog),
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to save blog header');
//       }
      
//       setSaveSuccess(true);
//       setTimeout(() => setSaveSuccess(false), 3000);

//       // Update blog info state with the edited data
//       setBlogInfo(editedBlogInfo);
//       setIsEditingHeader(false);
      
//       // Refresh data from the server
//       const updatedResponse = await fetch(`/api/blogs/${blogId}`);
//       if (updatedResponse.ok) {
//         const updatedBlog = await updatedResponse.json();
//         setBlogInfo(updatedBlog);
//         setEditedBlogInfo(updatedBlog);
//       }
//     } catch (err) {
//       setError(err.message || 'An unexpected error occurred');
//       console.error(err);
//     } finally {
//       setHeaderSaving(false);
//     }
//   };

//   // Handle saving meta data
//   // const handleSaveMetaData = async () => {
//   //   setMetaDataSaving(true);
//   //   setSaveSuccess(false);
//   //   const blogId = localStorage.getItem('currentBlogId');
    
//   //   if (!blogId) {
//   //     setError('No blog ID found. Please create a new blog.');
//   //     setMetaDataSaving(false);
//   //     return;
//   //   }
    
//   //   try {
//   //     // Prepare the updated blog data
//   //     const updatedBlog = {
//   //       ...blogInfo,
//   //       ...editedBlogInfo
//   //     };
      
//   //     const response = await fetch(`/api/blogs/${blogId}`, {
//   //       method: 'PUT',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify(updatedBlog),
//   //     });
      
//   //     if (!response.ok) {
//   //       throw new Error('Failed to save meta data');
//   //     }
      
//   //     setSaveSuccess(true);
//   //     setTimeout(() => setSaveSuccess(false), 3000);

//   //     // Update blog info state with the edited data
//   //     setBlogInfo(editedBlogInfo);
//   //     setIsMetaDataModalOpen(false);
      
//   //     // Refresh data from the server
//   //     const updatedResponse = await fetch(`/api/blogs/${blogId}`);
//   //     if (updatedResponse.ok) {
//   //       const updatedBlog = await updatedResponse.json();
//   //       setBlogInfo(updatedBlog);
//   //       setEditedBlogInfo(updatedBlog);
//   //     }
//   //   } catch (err) {
//   //     setError(err.message || 'An unexpected error occurred');
//   //     console.error(err);
//   //   } finally {
//   //     setMetaDataSaving(false);
//   //   }
//   // };
//   // Update the handleSaveMetaData function in the BlogEditorPage component

// const handleSaveMetaData = async () => {
//   setMetaDataSaving(true);
//   setSaveSuccess(false);
//   const blogId = localStorage.getItem('currentBlogId');
  
//   if (!blogId) {
//     setError('No blog ID found. Please create a new blog.');
//     setMetaDataSaving(false);
//     return;
//   }
  
//   try {
//     // Extract only meta data fields for the API call
//     const metaData = {
//       htmlTitle: editedBlogInfo.htmlTitle,
//       metaDescription: editedBlogInfo.metaDescription,
//       ogTitle: editedBlogInfo.ogTitle,
//       ogUrl: editedBlogInfo.ogUrl,
//       ogImage: editedBlogInfo.ogImage
//     };
    
//     // Call the dedicated meta data API endpoint
//     const response = await fetch(`/api/blogs/${blogId}/meta`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(metaData),
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to save meta data');
//     }
    
//     const updatedMetaData = await response.json();
    
//     // Update only the meta data in the blog state
//     setBlogInfo(prev => ({
//       ...prev,
//       ...updatedMetaData
//     }));
    
//     // Also update in editedBlogInfo
//     setEditedBlogInfo(prev => ({
//       ...prev,
//       ...updatedMetaData
//     }));
    
//     setSaveSuccess(true);
//     setTimeout(() => setSaveSuccess(false), 3000);
//     setIsMetaDataModalOpen(false);
//   } catch (err) {
//     setError(err.message || 'An unexpected error occurred');
//     console.error(err);
//   } finally {
//     setMetaDataSaving(false);
//   }
// };

//   // Handle canceling header edit
//   const handleCancelHeaderEdit = () => {
//     setEditedBlogInfo(blogInfo);
//     setIsEditingHeader(false);
//   };

//   // Handle header field changes
//   const handleHeaderChange = (field, value) => {
//     setEditedBlogInfo(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   // Handle file upload for banner image
//   const handleFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
//     if (!validTypes.includes(file.type)) {
//       setError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
//       return;
//     }
    
//     // Validate file size (max 5MB)
//     if (file.size > 5 * 1024 * 1024) {
//       setError('Image size should be less than 5MB');
//       return;
//     }
    
//     setIsUploading(true);
//     setUploadProgress(0);
//     setError('');
    
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
      
//       // Setup XHR for progress tracking
//       const xhr = new XMLHttpRequest();
      
//       // Track upload progress
//       xhr.upload.addEventListener('progress', (event) => {
//         if (event.lengthComputable) {
//           const percentComplete = Math.round((event.loaded / event.total) * 100);
//           setUploadProgress(percentComplete);
//         }
//       });
      
//       // Handle response
//       xhr.onload = () => {
//         if (xhr.status === 200) {
//           try {
//             const response = JSON.parse(xhr.responseText);
//             handleHeaderChange('bannerImage', response.url);
//             setImagePreviewError(false);
//           } catch (error) {
//             setError('Error parsing server response');
//           }
//         } else {
//           setError('Failed to upload image');
//         }
//         setIsUploading(false);
//       };
      
//       // Handle errors
//       xhr.onerror = () => {
//         setError('Network error occurred during upload');
//         setIsUploading(false);
//       };
      
//       // Send the upload request
//       xhr.open('POST', '/api/blogs/upload');
//       xhr.send(formData);
      
//     } catch (err) {
//       setError(err.message || 'An unexpected error occurred during upload');
//       console.error(err);
//       setIsUploading(false);
//     }
//   };

//   // Handle file upload for OG image
//   const handleOgImageFileChange = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
    
//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
//     if (!validTypes.includes(file.type)) {
//       setError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
//       return;
//     }
    
//     // Validate file size (max 5MB)
//     if (file.size > 5 * 1024 * 1024) {
//       setError('Image size should be less than 5MB');
//       return;
//     }
    
//     setIsUploading(true);
//     setUploadProgress(0);
//     setError('');
    
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
      
//       // Setup XHR for progress tracking
//       const xhr = new XMLHttpRequest();
      
//       // Track upload progress
//       xhr.upload.addEventListener('progress', (event) => {
//         if (event.lengthComputable) {
//           const percentComplete = Math.round((event.loaded / event.total) * 100);
//           setUploadProgress(percentComplete);
//         }
//       });
      
//       // Handle response
//       xhr.onload = () => {
//         if (xhr.status === 200) {
//           try {
//             const response = JSON.parse(xhr.responseText);
//             handleHeaderChange('ogImage', response.url);
//             setOgImagePreviewError(false);
//           } catch (error) {
//             setError('Error parsing server response');
//           }
//         } else {
//           setError('Failed to upload image');
//         }
//         setIsUploading(false);
//       };
      
//       // Handle errors
//       xhr.onerror = () => {
//         setError('Network error occurred during upload');
//         setIsUploading(false);
//       };
      
//       // Send the upload request
//       xhr.open('POST', '/api/blogs/upload');
//       xhr.send(formData);
      
//     } catch (err) {
//       setError(err.message || 'An unexpected error occurred during upload');
//       console.error(err);
//       setIsUploading(false);
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const triggerOgImageFileInput = () => {
//     ogImageFileInputRef.current?.click();
//   };

//   const handleTocUpdate = (headings) => {
//     setExtractedToc(headings);
//   };

//   const formatDate = (dateString) => {
//     if (!dateString) return 'Not published yet';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-blue-600 font-medium">Loading editor...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!blogInfo) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white flex flex-col items-center justify-center p-4">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//         </svg>
//         <div className="text-2xl text-gray-700 mb-4 font-bold">No blog data found</div>
//         <p className="text-gray-600 mb-8 text-center max-w-md">
//           We couldn't find any blog to edit. This might happen if you haven't created a blog yet.
//         </p>
//         <Link href="/blog/new-blog" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition shadow-lg">
//           Create a New Blog
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50/50 to-white">
//       {/* Success message */}
//       {saveSuccess && (
//         <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
//           <Save className="mr-2" size={20} />
//           Blog saved successfully!
//         </div>
//       )}
      
//       {/* Error message display */}
//       {error && (
//         <div className="fixed top-4 right-4 z-50 bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center">
//           <AlertTriangle className="mr-2" size={20} />
//           {error}
//           <button 
//             className="ml-3 bg-red-600 rounded-full p-1 hover:bg-red-700"
//             onClick={() => setError('')}
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//               <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </button>
//         </div>
//       )}
      
//       {/* Meta Data Modal */}
//       {isMetaDataModalOpen && (
//         <div className="fixed inset-0 z-50 overflow-y-auto">
//           <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//               <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//             </div>
            
//             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
//             <div 
//               className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full"
//             >
//               <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                 <div className="sm:flex sm:items-start">
//                   <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
//                     <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4">
//                       SEO & Meta Data
//                     </h3>
//                     <div className="space-y-4">
//                       {/* HTML Title */}
//                       <div>
//                         <label htmlFor="html-title" className="block text-sm font-medium text-gray-700 mb-1">
//                           HTML Title <span className="text-xs text-gray-500">(recommended: 50-60 characters)</span>
//                         </label>
//                         <input
//                           id="html-title"
//                           type="text"
//                           value={editedBlogInfo.htmlTitle || ''}
//                           onChange={(e) => handleHeaderChange('htmlTitle', e.target.value)}
//                           placeholder={blogInfo.title || 'Enter HTML title for SEO'}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         />
//                         <p className="text-xs text-gray-500 mt-1">
//                           {editedBlogInfo.htmlTitle ? editedBlogInfo.htmlTitle.length : 0} characters
//                           {editedBlogInfo.htmlTitle && editedBlogInfo.htmlTitle.length > 60 && (
//                             <span className="text-yellow-500"> (too long)</span>
//                           )}
//                         </p>
//                       </div>
                      
//                       {/* Meta Description */}
//                       <div>
//                         <label htmlFor="meta-description" className="block text-sm font-medium text-gray-700 mb-1">
//                           Meta Description <span className="text-xs text-gray-500">(recommended: 150-160 characters)</span>
//                         </label>
//                         <textarea
//                           id="meta-description"
//                           value={editedBlogInfo.metaDescription || ''}
//                           onChange={(e) => handleHeaderChange('metaDescription', e.target.value)}
//                           placeholder="Enter meta description for SEO"
//                           rows="3"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         ></textarea>
//                         <p className="text-xs text-gray-500 mt-1">
//                           {editedBlogInfo.metaDescription ? editedBlogInfo.metaDescription.length : 0} characters
//                           {editedBlogInfo.metaDescription && editedBlogInfo.metaDescription.length > 160 && (
//                             <span className="text-yellow-500"> (too long)</span>
//                           )}
//                         </p>
//                       </div>
                      
//                       {/* Open Graph Title */}
//                       <div>
//                         <label htmlFor="og-title" className="block text-sm font-medium text-gray-700 mb-1">
//                           Open Graph Title <span className="text-xs text-gray-500">(for social media sharing)</span>
//                         </label>
//                         <input
//                           id="og-title"
//                           type="text"
//                           value={editedBlogInfo.ogTitle || ''}
//                           onChange={(e) => handleHeaderChange('ogTitle', e.target.value)}
//                           placeholder={blogInfo.title || 'Enter Open Graph title'}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         />
//                       </div>
                      
//                       {/* Open Graph URL */}
//                       <div>
//                         <label htmlFor="og-url" className="block text-sm font-medium text-gray-700 mb-1">
//                           Open Graph URL <span className="text-xs text-gray-500">(canonical URL for sharing)</span>
//                         </label>
//                         <input
//                           id="og-url"
//                           type="url"
//                           value={editedBlogInfo.ogUrl || ''}
//                           onChange={(e) => handleHeaderChange('ogUrl', e.target.value)}
//                           placeholder="https://example.com/blog/your-post"
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         />
//                       </div>
                      
//                       {/* Open Graph Image */}
//                       <div>
//                         <label htmlFor="og-image" className="block text-sm font-medium text-gray-700 mb-1">
//                           Open Graph Image <span className="text-xs text-gray-500">(ideal: 1200×630 pixels)</span>
//                         </label>
                        
//                         {/* Current OG image preview */}
//                         {editedBlogInfo.ogImage && !isUploading && (
//                           <div className="mb-3 relative">
//                             <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
//                               <img 
//                                 src={editedBlogInfo.ogImage} 
//                                 alt="OG image preview" 
//                                 className="w-full h-32 object-contain"
//                                 onError={() => setOgImagePreviewError(true)}
//                               />
//                               {ogImagePreviewError && (
//                                 <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                                   <div className="text-center text-gray-500 p-4">
//                                     <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
//                                     <p className="text-sm">Image cannot be loaded</p>
//                                   </div>
//                                 </div>
//                               )}
//                             </div>
                            
//                             <button
//                               type="button"
//                               onClick={() => handleHeaderChange('ogImage', '')}
//                               className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full hover:bg-red-600 transition shadow-sm"
//                             >
//                               <X className="h-3.5 w-3.5" />
//                             </button>
//                           </div>
//                         )}
                        
//                         {/* Image upload UI */}
//                         <div 
//                           onClick={triggerOgImageFileInput}
//                           className={`w-full h-24 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition bg-gray-50`}
//                         >
//                           <input 
//                             type="file" 
//                             ref={ogImageFileInputRef} 
//                             onChange={handleOgImageFileChange} 
//                             accept="image/jpeg,image/png,image/gif,image/webp"
//                             className="hidden"
//                           />
                          
//                           {isUploading ? (
//                             <div className="w-full px-8">
//                               <div className="text-center mb-2">
//                                 <p className="text-gray-600 text-sm">Uploading... {uploadProgress}%</p>
//                               </div>
//                               <div className="w-full bg-gray-200 rounded-full h-2">
//                                 <div 
//                                   className="bg-blue-600 h-2 rounded-full" 
//                                   style={{ width: `${uploadProgress}%` }}
//                                 ></div>
//                               </div>
//                             </div>
//                           ) : (
//                             <>
//                               <Upload className="h-5 w-5 text-gray-400 mb-1" />
//                               <p className="text-gray-600 text-xs">
//                                 {editedBlogInfo.ogImage ? 'Change OG image' : 'Upload an image for social media'}
//                               </p>
//                             </>
//                           )}
//                         </div>
                        
//                         {/* Optional URL input as fallback */}
//                         <div className="mt-2">
//                           <div className="relative">
//                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                               <ImageIcon size={14} className="text-gray-400" />
//                             </div>
//                             <input
//                               type="url"
//                               value={editedBlogInfo.ogImage || ''}
//                               onChange={(e) => handleHeaderChange('ogImage', e.target.value)}
//                               className="w-full pl-9 pr-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-xs outline-none transition"
//                               placeholder="Or enter image URL: https://example.com/image.jpg"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                 <button
//                   type="button"
//                   onClick={handleSaveMetaData}
//                   className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
//                   disabled={metaDataSaving}
//                 >
//                   {metaDataSaving ? (
//                     <>
//                       <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
//                       Saving...
//                     </>
//                   ) : 'Save Changes'}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setIsMetaDataModalOpen(false)}
//                   className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                   disabled={metaDataSaving}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
      
//       <div className="max-w-7xl mx-auto p-6 pt-24">
//         {/* Navigation bar */}
//         <motion.div 
//           initial={{ opacity: 0, y: -10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="flex justify-between mb-8"
//         >
//           <a href="/blog/new-blog" className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all text-blue-600 hover:text-blue-800">
//             <ArrowLeft size={18} />
//             <span>Back to Blog Info</span>
//           </a>
//           <a href="/blog/blog-preview" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-700 transition-all">
//             <Eye size={18} />
//             <span>Preview</span>
//           </a>
//           </motion.div>
        
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {/* Blog header info */}
//           <div className="bg-white rounded-xl shadow-lg p-6 mb-6 relative">
//             {!isEditingHeader ? (
//               <>
//                 <div className="flex justify-between items-start mb-4">
//                   <h1 className="text-3xl font-bold text-gray-800">{blogInfo.title}</h1>
//                   {editedBlogInfo.slug && (
//     <div className="text-xs text-gray-600">
//       <span className="font-medium">Slug:</span> {editedBlogInfo.slug || ''} 
//     </div>
//   )}
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={() => setIsMetaDataModalOpen(true)}
//                       className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg text-gray-600"
//                       title="Edit SEO & Meta Data"
//                     >
//                       <FileSearch size={18} />
//                     </button>
//                     <button 
//                       onClick={() => setIsEditingHeader(true)}
//                       className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg text-gray-600"
//                       title="Edit blog info"
//                     >
//                       <Edit size={18} />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
//                   {blogInfo.bannerImage && (
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <ImageIcon size={16} className="text-blue-500" />
//                       <span className="truncate max-w-xs">Banner image added</span>
//                     </div>
//                   )}
                  
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Calendar size={16} className="text-blue-500" />
//                     <span>Created: {formatDate(blogInfo.createdAt)}</span>
//                   </div>
                  
//                   <div className="flex items-center gap-2 text-gray-600">
//                     <Globe size={16} className={blogInfo.published ? "text-green-500" : "text-yellow-500"} />
//                     <span className={blogInfo.published ? "text-green-600 font-medium" : "text-yellow-600"}>
//                       {blogInfo.published ? "Published" : "Draft"}
//                     </span>
//                   </div>
                  
//                   {blogInfo.refLinks && blogInfo.refLinks.length > 0 && (
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <LinkIcon size={16} className="text-blue-500" />
//                       <span>{blogInfo.refLinks.length} reference{blogInfo.refLinks.length !== 1 ? 's' : ''}</span>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* SEO Meta Data Summary */}
//                 {(blogInfo.htmlTitle || blogInfo.metaDescription || blogInfo.ogTitle || blogInfo.ogImage) && (
//                   <div className="mt-4 pt-4 border-t border-gray-100">
//                     <div className="flex items-center gap-2 text-gray-700 mb-2">
//                       <FileSearch size={16} className="text-blue-500" />
//                       <span className="font-medium">SEO & Meta Data</span>
//                     </div>
//                     {/* <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
//                       {blogInfo.htmlTitle && (
//                         <div className="text-xs text-gray-600">
//                           <span className="font-medium">HTML Title:</span> {blogInfo.htmlTitle}
//                         </div>
//                       )}
//                       {blogInfo.metaDescription && (
//                         <div className="text-xs text-gray-600 md:col-span-2">
//                           <span className="font-medium">Meta Description:</span> {blogInfo.metaDescription}
//                         </div>
//                       )}
//                       {blogInfo.ogTitle && (
//                         <div className="text-xs text-gray-600">
//                           <span className="font-medium">OG Title:</span> {blogInfo.ogTitle}
//                         </div>
//                       )}
//                       {blogInfo.ogImage && (
//                         <div className="text-xs text-gray-600">
//                           <span className="font-medium">OG Image:</span>
//                           <img src={blogInfo.ogImage} alt="OG Image" className="w-full h-32 object-contain mt-1" />
//                         </div>
//                       )}
//                     </div> */}
//                     <div className="flex flex-col space-y-3">
//   {blogInfo.htmlTitle && (
//     <div className="text-xs text-gray-600">
//       <span className="font-medium">HTML Title:</span> {blogInfo.htmlTitle}
//     </div>
//   )}
 
//   {blogInfo.metaDescription && (
//     <div className="text-xs text-gray-600">
//       <span className="font-medium">Meta Description:</span> {blogInfo.metaDescription}
//     </div>
//   )}
//   {blogInfo.ogTitle && (
//     <div className="text-xs text-gray-600">
//       <span className="font-medium">OG Title:</span> {blogInfo.ogTitle}
//     </div>
//   )}
//   {blogInfo.ogUrl && (
//     <div className="text-xs text-gray-600">
//       <span className="font-medium">OG Url:</span> {blogInfo.ogUrl}
//     </div>
//   )}
//   {blogInfo.ogImage && (
//     <div className="text-xs text-gray-600">
//       <span className="font-medium">OG Image:</span>
//       <img src={blogInfo.ogImage} alt="OG Image" className="w-full h-32 object-contain mt-1" />
//     </div>
//   )}
// </div>
//                   </div>
//                 )}
//               </>
//             ) : (
//               <>
//                 <div className="flex justify-between items-center mb-4">
//                   <h2 className="text-xl font-semibold text-gray-700">Edit Blog Information</h2>
//                   <div className="flex gap-2">
//                     <button 
//                       onClick={handleCancelHeaderEdit}
//                       className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg text-gray-600 flex items-center gap-1"
//                       disabled={headerSaving}
//                     >
//                       <X size={18} />
//                       <span className="hidden sm:inline">Cancel</span>
//                     </button>
//                     <button 
//                       onClick={handleSaveHeader}
//                       className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg text-white flex items-center gap-1"
//                       disabled={headerSaving}
//                     >
//                       {headerSaving ? (
//                         <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-1"></div>
//                       ) : (
//                         <Check size={18} />
//                       )}
//                       <span className="hidden sm:inline">Save</span>
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="space-y-4">
//                   {/* Title input */}
//                   <div>
//                     <label htmlFor="blog-title" className="block text-sm font-medium text-gray-700 mb-1">
//                       Blog Title
//                     </label>
//                     <input
//                       id="blog-title"
//                       type="text"
//                       value={editedBlogInfo.title || ''}
//                       onChange={(e) => handleHeaderChange('title', e.target.value)}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       placeholder="Enter blog title"
//                     />
//                   </div>
//                   {/* slug  */}
//                   <div>
//                     <label htmlFor="blog-slug" className="block text-sm font-medium text-gray-700 mb-1">
//                       Blog Slug
//                     </label>
//                     <input
//                       id="blog-slug"
//                       type="text"
//                       value={editedBlogInfo.slug || ''}
//                       onChange={(e) => handleHeaderChange('slug', e.target.value)}
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       placeholder="Enter blog slug"
//                     />
//                   </div>
                  
//                   {/* Banner image upload */}
//                   <div>
//                     <label htmlFor="banner-image" className="block text-sm font-medium text-gray-700 mb-1">
//                       Banner Image
//                     </label>
                    
//                     {/* Current banner image preview */}
//                     {editedBlogInfo.bannerImage && !isUploading && (
//                       <div className="mb-3 relative">
//                         <div className="rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
//                           <img 
//                             src={editedBlogInfo.bannerImage} 
//                             alt="Banner preview" 
//                             className="w-full h-48 object-cover"
//                             onError={() => setImagePreviewError(true)}
//                           />
//                           {imagePreviewError && (
//                             <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
//                               <div className="text-center text-gray-500 p-4">
//                                 <AlertTriangle className="h-10 w-10 mx-auto mb-2" />
//                                 <p>Image cannot be loaded.<br />Please try uploading again.</p>
//                               </div>
//                             </div>
//                           )}
//                         </div>
                        
//                         <button
//                           type="button"
//                           onClick={() => handleHeaderChange('bannerImage', '')}
//                           className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-sm"
//                         >
//                           <X className="h-4 w-4" />
//                         </button>
//                       </div>
//                     )}
                    
//                     {/* Image upload UI */}
//                     <div 
//                       onClick={triggerFileInput}
//                       className={`w-full ${editedBlogInfo.bannerImage ? 'h-16' : 'h-32'} border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition bg-gray-50`}
//                     >
//                       <input 
//                         type="file" 
//                         ref={fileInputRef} 
//                         onChange={handleFileChange} 
//                         accept="image/jpeg,image/png,image/gif,image/webp"
//                         className="hidden"
//                       />
                      
//                       {isUploading ? (
//                         <div className="w-full px-8">
//                           <div className="text-center mb-2">
//                             <p className="text-gray-600">Uploading... {uploadProgress}%</p>
//                           </div>
//                           <div className="w-full bg-gray-200 rounded-full h-2.5">
//                             <div 
//                               className="bg-blue-600 h-2.5 rounded-full" 
//                               style={{ width: `${uploadProgress}%` }}
//                             ></div>
//                           </div>
//                         </div>
//                       ) : (
//                         <>
//                           <Upload className="h-6 w-6 text-gray-400 mb-1" />
//                           <p className="text-gray-600 text-sm">
//                             {editedBlogInfo.bannerImage ? 'Change banner image' : 'Upload a banner image'}
//                           </p>
//                           {!editedBlogInfo.bannerImage && (
//                             <p className="text-gray-500 text-xs mt-1">JPG, PNG, GIF or WEBP (max. 5MB)</p>
//                           )}
//                         </>
//                       )}
//                     </div>
                    
//                     {/* Optional URL input as fallback */}
//                     <div className="mt-3">
//                       <label htmlFor="banner-url" className="block text-xs font-medium text-gray-500 mb-1">
//                         Or enter an image URL directly:
//                       </label>
//                       <div className="relative">
//                         <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                           <ImageIcon size={16} className="text-gray-400" />
//                         </div>
//                         <input
//                           id="banner-url"
//                           type="url"
//                           value={editedBlogInfo.bannerImage || ''}
//                           onChange={(e) => handleHeaderChange('bannerImage', e.target.value)}
//                           className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm outline-none transition"
//                           placeholder="https://example.com/image.jpg"
//                         />
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="flex flex-col sm:flex-row gap-4">
//                     {/* Publication status */}
//                     <div className="flex-1">
//                       <label htmlFor="publish-status" className="block text-sm font-medium text-gray-700 mb-1">
//                         Publication Status
//                       </label>
//                       <select
//                         id="publish-status"
//                         value={editedBlogInfo.published ? 'published' : 'draft'}
//                         onChange={(e) => handleHeaderChange('published', e.target.value === 'published')}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                       >
//                         <option value="draft">Draft</option>
//                         <option value="published">Published</option>
//                       </select>
//                     </div>
                    
//                     {/* Category selection (if applicable) */}
//                     {blogInfo.category !== undefined && (
//                       <div className="flex-1">
//                         <label htmlFor="blog-category" className="block text-sm font-medium text-gray-700 mb-1">
//                           Category
//                         </label>
//                         <input
//                           id="blog-category"
//                           type="text"
//                           value={editedBlogInfo.category || ''}
//                           onChange={(e) => handleHeaderChange('category', e.target.value)}
//                           className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                           placeholder="Enter blog category"
//                         />
//                       </div>
//                     )}
//                   </div>
                  
//                   {/* Tags/Keywords input (if applicable) */}
//                   {blogInfo.tags !== undefined && (
//                     <div>
//                       <label htmlFor="blog-tags" className="block text-sm font-medium text-gray-700 mb-1">
//                         Tags (comma separated)
//                       </label>
//                       <input
//                         id="blog-tags"
//                         type="text"
//                         value={Array.isArray(editedBlogInfo.tags) ? editedBlogInfo.tags.join(', ') : ''}
//                         onChange={(e) => handleHeaderChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
//                         placeholder="Enter tags separated by commas"
//                       />
//                     </div>
//                   )}
                  
//                   {/* SEO & Meta Data Button */}
//                   <div className="mt-2">
//                     <button
//                       type="button"
//                       onClick={() => setIsMetaDataModalOpen(true)}
//                       className="w-full flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 py-2 rounded-lg text-gray-700 border border-gray-200"
//                     >
//                       <FileSearch size={18} />
//                       <span>Edit SEO & Meta Data</span>
//                     </button>
//                   </div>
//                 </div>
//               </>
//             )}
//           </div>
//         </motion.div>
        
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Main Editor */}
//           <motion.div 
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.1 }}
//             className="w-full lg:w-3/4"
//           >
//             <TipTapEditor 
//               onSave={handleSave} 
//               onTocUpdate={handleTocUpdate} 
//               initialContent={blogInfo.content || '<p>Start writing your blog post...</p>'}
//               isSaving={saving}
//             />
//           </motion.div>
          
//           {/* Sidebar */}
//           <motion.div 
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="w-full lg:w-1/4 mt-6 lg:mt-0"
//           >
//             {/* Table of Contents */}
//             <div className="bg-white p-6 rounded-xl border shadow-sm sticky top-24">
//               <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center gap-2">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
//                 </svg>
//                 Table of Contents
//               </h3>
//               <p className="text-sm text-gray-600 mb-4">
//                 Create H1, H2, or H3 headings in your content to automatically generate a table of contents.
//               </p>
              
//               {extractedToc.length > 0 ? (
//                 <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
//                   {extractedToc.map((item, index) => (
//                     <div 
//                       key={index} 
//                       className={`
//                         ${item.level === 1 ? 'ml-0 font-medium' : 
//                           item.level === 2 ? 'ml-3 text-sm' : 
//                           'ml-6 text-sm text-gray-600'}
//                         p-2 hover:bg-blue-50 rounded-lg transition-colors
//                       `}
//                     >
//                       <div className="hover:text-blue-600 cursor-pointer truncate flex items-start gap-1.5">
//                         {item.level === 1 && (
//                           <span className="w-1.5 h-1.5 bg-blue-600 rounded-full inline-block mt-2"></span>
//                         )}
//                         <span>{item.content}</span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div className="p-4 bg-gray-50 rounded-lg text-gray-500 text-sm">
//                   No headings found yet. Add H1, H2, or H3 headings to your content.
//                 </div>
//               )}
              
//               {/* Reference Links */}
//               {blogInfo.refLinks && blogInfo.refLinks.length > 0 && (
//                 <div className="mt-8 pt-4 border-t border-gray-200">
//                   <h4 className="text-lg font-bold mb-3 text-gray-800 flex items-center gap-2">
//                     <LinkIcon size={16} className="text-blue-600" />
//                     Reference Links
//                   </h4>
//                   <ul className="space-y-2">
//                     {blogInfo.refLinks.map((link, index) => (
//                       <li key={index} className="bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors">
//                         <a
//                           href={link.url}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                           className="text-blue-600 hover:underline text-sm truncate block"
//                           title={link.title}
//                         >
//                           {link.title}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogEditorPage;
'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Save, Link2, Image, Globe, Calendar, AlertTriangle, Edit, Check, X, Upload, FileSearch, BookOpen } from 'lucide-react';

// Dynamically import TipTapEditor to avoid SSR issues
const TipTapEditor = dynamic(() => import('./TipTapEditor'), { 
  ssr: false,
  loading: () => (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 min-h-[500px] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500/20 border-t-blue-500"></div>
        <p className="mt-6 text-slate-300 text-lg">Loading editor...</p>
        <p className="mt-2 text-slate-400 text-sm">Preparing your writing environment</p>
      </div>
    </div>
  )
});

const BlogEditorPage = () => {
  const router = useRouter();
  const fileInputRef = useRef(null);
  
  const [blogInfo, setBlogInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [extractedToc, setExtractedToc] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  // Add state for editing header
  const [isEditingHeader, setIsEditingHeader] = useState(false);
  const [editedBlogInfo, setEditedBlogInfo] = useState(null);
  const [headerSaving, setHeaderSaving] = useState(false);
  
  // Add state for meta data modal
  const [isMetaDataModalOpen, setIsMetaDataModalOpen] = useState(false);
  const [metaDataSaving, setMetaDataSaving] = useState(false);
  
  // Image upload state
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [imagePreviewError, setImagePreviewError] = useState(false);
  const [ogImagePreviewError, setOgImagePreviewError] = useState(false);
  const ogImageFileInputRef = useRef(null);

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
          throw new Error('Failed to load blog data');
        }
        
        const blog = await response.json();
        setBlogInfo(blog);
        setEditedBlogInfo(blog); // Initialize editedBlogInfo with blog data
        
        // Convert tocItems from DB to the format expected by our components
        if (blog.tocItems && blog.tocItems.length > 0) {
          setExtractedToc(blog.tocItems.map(item => ({
            level: item.level,
            content: item.content,
            id: item.slug
          })));
        }
      } catch (err) {
        setError(err.message || 'An unexpected error occurred');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadBlog();
  }, [router]);

  const handleSave = async (content, tableOfContents) => {
    setSaving(true);
    setSaveSuccess(false);
    const blogId = localStorage.getItem('currentBlogId');
    
    if (!blogId) {
      setError('No blog ID found. Please create a new blog.');
      setSaving(false);
      return;
    }
    
    try {
      // Combine the metadata with the blog content
      const updatedBlog = {
        ...blogInfo,
        content,
        extractedToc: tableOfContents
      };
      
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save blog');
      }
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      // Update state with latest content
      const updatedResponse = await fetch(`/api/blogs/${blogId}`);
      if (updatedResponse.ok) {
        const updatedBlog = await updatedResponse.json();
        setBlogInfo(updatedBlog);
        setEditedBlogInfo(updatedBlog);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  // Handle saving header info
  const handleSaveHeader = async () => {
    setHeaderSaving(true);
    setSaveSuccess(false);
    const blogId = localStorage.getItem('currentBlogId');
    
    if (!blogId) {
      setError('No blog ID found. Please create a new blog.');
      setHeaderSaving(false);
      return;
    }
    
    try {
      // Prepare the updated blog data
      const updatedBlog = {
        ...blogInfo,
        ...editedBlogInfo
      };
      
      const response = await fetch(`/api/blogs/${blogId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedBlog),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save blog header');
      }
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);

      // Update blog info state with the edited data
      setBlogInfo(editedBlogInfo);
      setIsEditingHeader(false);
      
      // Refresh data from the server
      const updatedResponse = await fetch(`/api/blogs/${blogId}`);
      if (updatedResponse.ok) {
        const updatedBlog = await updatedResponse.json();
        setBlogInfo(updatedBlog);
        setEditedBlogInfo(updatedBlog);
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
      console.error(err);
    } finally {
      setHeaderSaving(false);
    }
  };

const handleSaveMetaData = async () => {
  setMetaDataSaving(true);
  setSaveSuccess(false);
  const blogId = localStorage.getItem('currentBlogId');
  
  if (!blogId) {
    setError('No blog ID found. Please create a new blog.');
    setMetaDataSaving(false);
    return;
  }
  
  try {
    // Extract only meta data fields for the API call
    const metaData = {
      htmlTitle: editedBlogInfo.htmlTitle,
      metaDescription: editedBlogInfo.metaDescription,
      ogTitle: editedBlogInfo.ogTitle,
      ogUrl: editedBlogInfo.ogUrl,
      ogImage: editedBlogInfo.ogImage
    };
    
    // Call the dedicated meta data API endpoint
    const response = await fetch(`/api/blogs/${blogId}/meta`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(metaData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to save meta data');
    }
    
    const updatedMetaData = await response.json();
    
    // Update only the meta data in the blog state
    setBlogInfo(prev => ({
      ...prev,
      ...updatedMetaData
    }));
    
    // Also update in editedBlogInfo
    setEditedBlogInfo(prev => ({
      ...prev,
      ...updatedMetaData
    }));
    
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
    setIsMetaDataModalOpen(false);
  } catch (err) {
    setError(err.message || 'An unexpected error occurred');
    console.error(err);
  } finally {
    setMetaDataSaving(false);
  }
};

  // Handle canceling header edit
  const handleCancelHeaderEdit = () => {
    setEditedBlogInfo(blogInfo);
    setIsEditingHeader(false);
  };

  // Handle header field changes
  const handleHeaderChange = (field, value) => {
    setEditedBlogInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle file upload for banner image
  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    setError('');
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // Setup XHR for progress tracking
      const xhr = new XMLHttpRequest();
      
      // Track upload progress
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(percentComplete);
        }
      });
      
      // Handle response
      xhr.onload = () => {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            handleHeaderChange('bannerImage', response.url);
            setImagePreviewError(false);
          } catch (error) {
            setError('Error parsing server response');
          }
        } else {
          setError('Failed to upload image');
        }
        setIsUploading(false);
      };
      
      // Handle errors
      xhr.onerror = () => {
        setError('Network error occurred during upload');
        setIsUploading(false);
      };
      
      // Send the upload request
      xhr.open('POST', '/api/blogs/upload');
      xhr.send(formData);
      
    } catch (err) {
      setError(err.message || 'An unexpected error occurred during upload');
      console.error(err);
      setIsUploading(false);
    }
  };

  // Handle file upload for OG image
  const handleOgImageFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    setIsUploading(true);
    setUploadProgress(0);
    setError('');
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      // Setup XHR for progress tracking
      const xhr = new XMLHttpRequest();
      
      // Track upload progress
      xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded / event.total) * 100);
          setUploadProgress(percentComplete);
        }
      });
      
      // Handle response
      xhr.onload = () => {
        if (xhr.status === 200) {
          try {
            const response = JSON.parse(xhr.responseText);
            handleHeaderChange('ogImage', response.url);
            setOgImagePreviewError(false);
          } catch (error) {
            setError('Error parsing server response');
          }
        } else {
          setError('Failed to upload image');
        }
        setIsUploading(false);
      };
      
      // Handle errors
      xhr.onerror = () => {
        setError('Network error occurred during upload');
        setIsUploading(false);
      };
      
      // Send the upload request
      xhr.open('POST', '/api/blogs/upload');
      xhr.send(formData);
      
    } catch (err) {
      setError(err.message || 'An unexpected error occurred during upload');
      console.error(err);
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const triggerOgImageFileInput = () => {
    ogImageFileInputRef.current?.click();
  };

  const handleTocUpdate = (headings) => {
    setExtractedToc(headings);
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'Not published yet';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1f3a] text-white">
        {/* Background Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold text-white mb-3">Loading Blog Editor...</h3>
            <p className="text-slate-400 text-lg">Setting up your writing workspace</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blogInfo) {
    return (
      <div className="min-h-screen bg-[#1a1f3a] text-white">
        {/* Background Grid */}
        <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">No Blog Data Found</h2>
          <p className="text-slate-400 mb-8 text-center max-w-md leading-relaxed">
            We couldn't find any blog to edit. This might happen if you haven't created a blog yet or the blog ID is invalid.
          </p>
          <Link 
            href="/blog/new-blog" 
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Create a New Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1a1f3a] text-white pt-16">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Success message */}
      {saveSuccess && (
        <div className="fixed top-4 right-4 z-50 bg-green-500/20 border border-green-500/30 text-green-300 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-xl flex items-center">
          <Check className="mr-3 w-5 h-5" />
          Blog saved successfully!
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
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      {/* Meta Data Modal */}
      {isMetaDataModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            </div>
            
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div className="inline-block align-bottom bg-slate-800/95 backdrop-blur-xl rounded-2xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full border border-slate-700/50">
              <div className="bg-slate-800/50 px-6 pt-6 pb-4 sm:p-8 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 className="text-2xl leading-6 font-bold text-white mb-6 flex items-center gap-3">
                      <FileSearch className="w-6 h-6 text-blue-400" />
                      SEO & Meta Data
                    </h3>
                    <div className="space-y-6">
                      {/* HTML Title */}
                      <div>
                        <label htmlFor="html-title" className="block text-sm font-medium text-slate-300 mb-2">
                          HTML Title <span className="text-xs text-slate-400">(recommended: 50-60 characters)</span>
                        </label>
                        <input
                          id="html-title"
                          type="text"
                          value={editedBlogInfo.htmlTitle || ''}
                          onChange={(e) => handleHeaderChange('htmlTitle', e.target.value)}
                          placeholder={blogInfo.title || 'Enter HTML title for SEO'}
                          className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                        <p className="text-xs text-slate-400 mt-2">
                          {editedBlogInfo.htmlTitle ? editedBlogInfo.htmlTitle.length : 0} characters
                          {editedBlogInfo.htmlTitle && editedBlogInfo.htmlTitle.length > 60 && (
                            <span className="text-yellow-400"> (too long)</span>
                          )}
                        </p>
                      </div>
                      
                      {/* Meta Description */}
                      <div>
                        <label htmlFor="meta-description" className="block text-sm font-medium text-slate-300 mb-2">
                          Meta Description <span className="text-xs text-slate-400">(recommended: 150-160 characters)</span>
                        </label>
                        <textarea
                          id="meta-description"
                          value={editedBlogInfo.metaDescription || ''}
                          onChange={(e) => handleHeaderChange('metaDescription', e.target.value)}
                          placeholder="Enter meta description for SEO"
                          rows="3"
                          className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                        ></textarea>
                        <p className="text-xs text-slate-400 mt-2">
                          {editedBlogInfo.metaDescription ? editedBlogInfo.metaDescription.length : 0} characters
                          {editedBlogInfo.metaDescription && editedBlogInfo.metaDescription.length > 160 && (
                            <span className="text-yellow-400"> (too long)</span>
                          )}
                        </p>
                      </div>
                      
                      {/* Open Graph Title */}
                      <div>
                        <label htmlFor="og-title" className="block text-sm font-medium text-slate-300 mb-2">
                          Open Graph Title <span className="text-xs text-slate-400">(for social media sharing)</span>
                        </label>
                        <input
                          id="og-title"
                          type="text"
                          value={editedBlogInfo.ogTitle || ''}
                          onChange={(e) => handleHeaderChange('ogTitle', e.target.value)}
                          placeholder={blogInfo.title || 'Enter Open Graph title'}
                          className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                      
                      {/* Open Graph URL */}
                      <div>
                        <label htmlFor="og-url" className="block text-sm font-medium text-slate-300 mb-2">
                          Open Graph URL <span className="text-xs text-slate-400">(canonical URL for sharing)</span>
                        </label>
                        <input
                          id="og-url"
                          type="url"
                          value={editedBlogInfo.ogUrl || ''}
                          onChange={(e) => handleHeaderChange('ogUrl', e.target.value)}
                          placeholder="https://example.com/blog/your-post"
                          className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                      </div>
                      
                      {/* Open Graph Image */}
                      <div>
                        <label htmlFor="og-image" className="block text-sm font-medium text-slate-300 mb-2">
                          Open Graph Image <span className="text-xs text-slate-400">(ideal: 1200×630 pixels)</span>
                        </label>
                        
                        {/* Current OG image preview */}
                        {editedBlogInfo.ogImage && !isUploading && (
                          <div className="mb-4 relative">
                            <div className="rounded-xl overflow-hidden bg-slate-700/30 border border-slate-600/50">
                              <img 
                                src={editedBlogInfo.ogImage} 
                                alt="OG image preview" 
                                className="w-full h-32 object-contain"
                                onError={() => setOgImagePreviewError(true)}
                              />
                              {ogImagePreviewError && (
                                <div className="absolute inset-0 flex items-center justify-center bg-slate-700/50">
                                  <div className="text-center text-slate-400 p-4">
                                    <AlertTriangle className="h-8 w-8 mx-auto mb-2" />
                                    <p className="text-sm">Image cannot be loaded</p>
                                  </div>
                                </div>
                              )}
                            </div>
                            
                            <button
                              type="button"
                              onClick={() => handleHeaderChange('ogImage', '')}
                              className="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300 p-2 rounded-full transition-colors"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        )}
                        
                        {/* Image upload UI */}
                        <div 
                          onClick={triggerOgImageFileInput}
                          className="w-full h-24 border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 transition bg-slate-700/20 hover:bg-slate-700/30"
                        >
                          <input 
                            type="file" 
                            ref={ogImageFileInputRef} 
                            onChange={handleOgImageFileChange} 
                            accept="image/jpeg,image/png,image/gif,image/webp"
                            className="hidden"
                          />
                          
                          {isUploading ? (
                            <div className="w-full px-8">
                              <div className="text-center mb-2">
                                <p className="text-slate-300 text-sm">Uploading... {uploadProgress}%</p>
                              </div>
                              <div className="w-full bg-slate-600/50 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300" 
                                  style={{ width: `${uploadProgress}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            <>
                              <Upload className="h-6 w-6 text-slate-400 mb-2" />
                              <p className="text-slate-300 text-sm font-medium">
                                {editedBlogInfo.ogImage ? 'Change OG image' : 'Upload an image for social media'}
                              </p>
                              <p className="text-slate-500 text-xs mt-1">JPG, PNG, GIF or WEBP (max. 5MB)</p>
                            </>
                          )}
                        </div>
                        
                        {/* Optional URL input as fallback */}
                        <div className="mt-3">
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Image size={16} className="text-slate-400" />
                            </div>
                            <input
                              type="url"
                              value={editedBlogInfo.ogImage || ''}
                              onChange={(e) => handleHeaderChange('ogImage', e.target.value)}
                              className="w-full pl-10 pr-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
                              placeholder="Or enter image URL: https://example.com/image.jpg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-700/30 px-6 py-4 sm:px-8 sm:flex sm:flex-row-reverse border-t border-slate-600/50">
                <button
                  type="button"
                  onClick={handleSaveMetaData}
                  className="w-full inline-flex justify-center rounded-xl border border-transparent shadow-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-base font-bold text-white hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto transition-all duration-300"
                  disabled={metaDataSaving}
                >
                  {metaDataSaving ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                      Saving...
                    </>
                  ) : 'Save Changes'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMetaDataModalOpen(false)}
                  className="mt-3 w-full inline-flex justify-center rounded-xl border border-slate-600/50 shadow-sm px-6 py-3 bg-slate-700/30 text-base font-medium text-slate-300 hover:bg-slate-700/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto transition-all duration-300"
                  disabled={metaDataSaving}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto p-6 space-y-8">
        {/* Navigation bar */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-between items-center"
        >
          <Link 
            href="/blog/new-blog" 
            className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-xl px-6 py-3 rounded-xl border border-slate-700/50 hover:bg-slate-700/50 transition-all text-slate-300 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog Info</span>
          </Link>
          <a 
            onClick={() => window.location.href = "/blog/blog-preview"} 
            className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:from-blue-600 hover:to-purple-700 transition-all font-bold cursor-pointer"
          >
            <Eye className="w-5 h-5" />
            <span>Preview</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Blog header info */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 mb-8 relative">
            {!isEditingHeader ? (
              <>
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-white mb-2">{blogInfo.title}</h1>
                    {editedBlogInfo.slug && (
                      <div className="text-sm text-slate-400">
                        <span className="font-medium">Slug:</span> {editedBlogInfo.slug || ''} 
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setIsMetaDataModalOpen(true)}
                      className="bg-slate-700/50 hover:bg-slate-700/70 p-3 rounded-xl text-slate-300 hover:text-white border border-slate-600/50 transition-all"
                      title="Edit SEO & Meta Data"
                    >
                      <FileSearch className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => setIsEditingHeader(true)}
                      className="bg-slate-700/50 hover:bg-slate-700/70 p-3 rounded-xl text-slate-300 hover:text-white border border-slate-600/50 transition-all"
                      title="Edit blog info"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  {blogInfo.bannerImage && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <Image className="w-4 h-4 text-blue-400" />
                      <span className="truncate max-w-xs">Banner image added</span>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 text-slate-300">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span>Created: {formatDate(blogInfo.createdAt)}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-slate-300">
                    <Globe className={`w-4 h-4 ${blogInfo.published ? "text-green-400" : "text-yellow-400"}`} />
                    <span className={`font-medium ${blogInfo.published ? "text-green-300" : "text-yellow-300"}`}>
                      {blogInfo.published ? "Published" : "Draft"}
                    </span>
                  </div>
                  
                  {blogInfo.refLinks && blogInfo.refLinks.length > 0 && (
                    <div className="flex items-center gap-2 text-slate-300">
                      <Link2 className="w-4 h-4 text-blue-400" />
                      <span>{blogInfo.refLinks.length} reference{blogInfo.refLinks.length !== 1 ? 's' : ''}</span>
                    </div>
                  )}
                </div>
                
                {/* SEO Meta Data Summary */}
                {(blogInfo.htmlTitle || blogInfo.metaDescription || blogInfo.ogTitle || blogInfo.ogImage) && (
                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-200 mb-4">
                      <FileSearch className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold">SEO & Meta Data</span>
                    </div>
                    <div className="flex flex-col space-y-3">
                      {blogInfo.htmlTitle && (
                        <div className="text-sm text-slate-300">
                          <span className="font-medium text-slate-200">HTML Title:</span> {blogInfo.htmlTitle}
                        </div>
                      )}
                      {blogInfo.metaDescription && (
                        <div className="text-sm text-slate-300">
                          <span className="font-medium text-slate-200">Meta Description:</span> {blogInfo.metaDescription}
                        </div>
                      )}
                      {blogInfo.ogTitle && (
                        <div className="text-sm text-slate-300">
                          <span className="font-medium text-slate-200">OG Title:</span> {blogInfo.ogTitle}
                        </div>
                      )}
                      {blogInfo.ogUrl && (
                        <div className="text-sm text-slate-300">
                          <span className="font-medium text-slate-200">OG URL:</span> {blogInfo.ogUrl}
                        </div>
                      )}
                      {blogInfo.ogImage && (
                        <div className="text-sm text-slate-300">
                          <span className="font-medium text-slate-200">OG Image:</span>
                          <img src={blogInfo.ogImage} alt="OG Image" className="w-full max-w-md h-32 object-contain mt-2 rounded-lg bg-slate-700/30" />
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-semibold text-white">Edit Blog Information</h2>
                  <div className="flex gap-3">
                    <button 
                      onClick={handleCancelHeaderEdit}
                      className="bg-slate-700/50 hover:bg-slate-700/70 px-4 py-2 rounded-xl text-slate-300 hover:text-white flex items-center gap-2 border border-slate-600/50 transition-all"
                      disabled={headerSaving}
                    >
                      <X className="w-4 h-4" />
                      <span className="hidden sm:inline">Cancel</span>
                    </button>
                    <button 
                      onClick={handleSaveHeader}
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-4 py-2 rounded-xl text-white flex items-center gap-2 font-bold transition-all"
                      disabled={headerSaving}
                    >
                      {headerSaving ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-1"></div>
                      ) : (
                        <Check className="w-4 h-4" />
                      )}
                      <span className="hidden sm:inline">Save</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Title input */}
                  <div>
                    <label htmlFor="blog-title" className="block text-sm font-medium text-slate-300 mb-2">
                      Blog Title
                    </label>
                    <input
                      id="blog-title"
                      type="text"
                      value={editedBlogInfo.title || ''}
                      onChange={(e) => handleHeaderChange('title', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter blog title"
                    />
                  </div>
                  {/* slug  */}
                  <div>
                    <label htmlFor="blog-slug" className="block text-sm font-medium text-slate-300 mb-2">
                      Blog Slug
                    </label>
                    <input
                      id="blog-slug"
                      type="text"
                      value={editedBlogInfo.slug || ''}
                      onChange={(e) => handleHeaderChange('slug', e.target.value)}
                      className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter blog slug"
                    />
                  </div>
                  
                  {/* Banner image upload */}
                  <div>
                    <label htmlFor="banner-image" className="block text-sm font-medium text-slate-300 mb-2">
                      Banner Image
                    </label>
                    
                    {/* Current banner image preview */}
                    {editedBlogInfo.bannerImage && !isUploading && (
                      <div className="mb-4 relative">
                        <div className="rounded-xl overflow-hidden bg-slate-700/30 border border-slate-600/50">
                          <img 
                            src={editedBlogInfo.bannerImage} 
                            alt="Banner preview" 
                            className="w-full h-48 object-cover"
                            onError={() => setImagePreviewError(true)}
                          />
                          {imagePreviewError && (
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-700/50">
                              <div className="text-center text-slate-400 p-4">
                                <AlertTriangle className="h-10 w-10 mx-auto mb-2" />
                                <p>Image cannot be loaded.<br />Please try uploading again.</p>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <button
                          type="button"
                          onClick={() => handleHeaderChange('bannerImage', '')}
                          className="absolute top-2 right-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-300 p-2 rounded-full transition-colors"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                    
                    {/* Image upload UI */}
                    <div 
                      onClick={triggerFileInput}
                      className={`w-full ${editedBlogInfo.bannerImage ? 'h-20' : 'h-32'} border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 transition bg-slate-700/20 hover:bg-slate-700/30`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleFileChange} 
                        accept="image/jpeg,image/png,image/gif,image/webp"
                        className="hidden"
                      />
                      
                      {isUploading ? (
                        <div className="w-full px-8">
                          <div className="text-center mb-2">
                            <p className="text-slate-300">Uploading... {uploadProgress}%</p>
                          </div>
                          <div className="w-full bg-slate-600/50 rounded-full h-2.5">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-300" 
                              style={{ width: `${uploadProgress}%` }}
                            ></div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <Upload className="h-6 w-6 text-slate-400 mb-2" />
                          <p className="text-slate-300 font-medium">
                            {editedBlogInfo.bannerImage ? 'Change banner image' : 'Upload a banner image'}
                          </p>
                          {!editedBlogInfo.bannerImage && (
                            <p className="text-slate-500 text-sm mt-1">JPG, PNG, GIF or WEBP (max. 5MB)</p>
                          )}
                        </>
                      )}
                    </div>
                    
                    {/* Optional URL input as fallback */}
                    <div className="mt-3">
                      <label htmlFor="banner-url" className="block text-xs font-medium text-slate-400 mb-1">
                        Or enter an image URL directly:
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <ImageIcon className="w-4 h-4 text-slate-400" />
                        </div>
                        <input
                          id="banner-url"
                          type="url"
                          value={editedBlogInfo.bannerImage || ''}
                          onChange={(e) => handleHeaderChange('bannerImage', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="https://example.com/image.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Publication status */}
                    <div>
                      <label htmlFor="publish-status" className="block text-sm font-medium text-slate-300 mb-2">
                        Publication Status
                      </label>
                      <select
                        id="publish-status"
                        value={editedBlogInfo.published ? 'published' : 'draft'}
                        onChange={(e) => handleHeaderChange('published', e.target.value === 'published')}
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                      </select>
                    </div>
                    
                    {/* Category selection (if applicable) */}
                    {blogInfo.category !== undefined && (
                      <div>
                        <label htmlFor="blog-category" className="block text-sm font-medium text-slate-300 mb-2">
                          Category
                        </label>
                        <input
                          id="blog-category"
                          type="text"
                          value={editedBlogInfo.category || ''}
                          onChange={(e) => handleHeaderChange('category', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="Enter blog category"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* Tags/Keywords input (if applicable) */}
                  {blogInfo.tags !== undefined && (
                    <div>
                      <label htmlFor="blog-tags" className="block text-sm font-medium text-slate-300 mb-2">
                        Tags (comma separated)
                      </label>
                      <input
                        id="blog-tags"
                        type="text"
                        value={Array.isArray(editedBlogInfo.tags) ? editedBlogInfo.tags.join(', ') : ''}
                        onChange={(e) => handleHeaderChange('tags', e.target.value.split(',').map(tag => tag.trim()))}
                        className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter tags separated by commas"
                      />
                    </div>
                  )}
                  
                  {/* SEO & Meta Data Button */}
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsMetaDataModalOpen(true)}
                      className="w-full flex items-center justify-center gap-3 bg-slate-700/30 hover:bg-slate-700/50 py-3 rounded-xl text-slate-300 hover:text-white border border-slate-600/50 hover:border-slate-500/50 transition-all"
                    >
                      <FileSearch className="w-5 h-5" />
                      <span className="font-medium">Edit SEO & Meta Data</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
        
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Editor */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full xl:w-3/4"
          >
            <TipTapEditor 
              onSave={handleSave} 
              onTocUpdate={handleTocUpdate} 
              initialContent={blogInfo.content || '<p>Start writing your blog post...</p>'}
              isSaving={saving}
            />
          </motion.div>
          
          {/* Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full xl:w-1/4"
          >
            {/* Table of Contents */}
            <div className="bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 sticky top-8">
              <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-blue-400" />
                Table of Contents
              </h3>
              <p className="text-sm text-slate-400 mb-4">
                Create H1, H2, or H3 headings in your content to automatically generate a table of contents.
              </p>
              
              {extractedToc.length > 0 ? (
                <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
                  {extractedToc.map((item, index) => (
                    <div 
                      key={index} 
                      className={`
                        ${item.level === 1 ? 'ml-0 font-medium text-white' : 
                          item.level === 2 ? 'ml-4 text-sm text-slate-300' : 
                          'ml-8 text-sm text-slate-400'}
                        p-3 hover:bg-slate-700/30 rounded-xl transition-colors cursor-pointer
                      `}
                    >
                      <div className="hover:text-blue-400 truncate flex items-start gap-2">
                        {item.level === 1 && (
                          <span className="w-2 h-2 bg-blue-400 rounded-full inline-block mt-2 flex-shrink-0"></span>
                        )}
                        {item.level === 2 && (
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full inline-block mt-2.5 flex-shrink-0"></span>
                        )}
                        <span>{item.content}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 bg-slate-700/30 rounded-xl text-slate-400 text-sm text-center">
                  <BookOpen className="w-8 h-8 mx-auto mb-3 opacity-50" />
                  <p className="font-medium mb-1">No headings found yet</p>
                  <p className="text-xs">Add H1, H2, or H3 headings to your content</p>
                </div>
              )}
              
              {/* Reference Links */}
              {blogInfo.refLinks && blogInfo.refLinks.length > 0 && (
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <h4 className="text-lg font-bold mb-4 text-white flex items-center gap-2">
                    <Link2 className="w-4 h-4 text-blue-400" />
                    Reference Links
                  </h4>
                  <div className="space-y-2">
                    {blogInfo.refLinks.map((link, index) => (
                      <div key={index} className="bg-slate-700/20 p-3 rounded-lg hover:bg-slate-700/40 transition-colors">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 text-sm truncate block transition-colors"
                          title={link.title}
                        >
                          {link.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BlogEditorPage;