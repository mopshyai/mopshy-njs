// 'use client';

// import React, { useState, useCallback, useEffect, useRef } from 'react';
// import FontSize from '@tiptap/extension-font-size';
// import { useEditor, EditorContent } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';
// import Image from '@tiptap/extension-image';
// import Placeholder from '@tiptap/extension-placeholder';
// import { Table } from '@tiptap/extension-table';
// import TableRow from '@tiptap/extension-table-row';
// import TableCell from '@tiptap/extension-table-cell';
// import TableHeader from '@tiptap/extension-table-header';
// import Heading from '@tiptap/extension-heading';
// import Link from '@tiptap/extension-link';
// import { TextStyle } from '@tiptap/extension-text-style';
// import Color from '@tiptap/extension-color';
// import Underline from '@tiptap/extension-underline';
// import TextAlign from '@tiptap/extension-text-align';
// import Dropcursor from '@tiptap/extension-dropcursor';
// import Typography from '@tiptap/extension-typography';
// import CharacterCount from '@tiptap/extension-character-count';
// import {
//   Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight,
//   Link2, Image as ImageIcon, Table as TableIcon, List, ListOrdered, RefreshCw, Save,
//   Upload, X, AlertTriangle
// } from 'lucide-react';

// // Enhanced Image Modal with S3 upload capability
// const ImageModal = ({ onClose, onInsert }) => {
//   const fileInputRef = useRef(null);
//   const [imageUrl, setImageUrl] = useState('');
//   const [width, setWidth] = useState('100%');
//   const [height, setHeight] = useState('auto');
//   const [alignment, setAlignment] = useState('center');
//   const [isValidUrl, setIsValidUrl] = useState(false);
//   const [isImageLoading, setIsImageLoading] = useState(false);

//   // S3 Upload States
//   const [isUploading, setIsUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [uploadError, setUploadError] = useState('');

//   // Check if URL is valid
//   const checkImageUrl = (url) => {
//     if (!url) {
//       setIsValidUrl(false);
//       return;
//     }

//     setIsImageLoading(true);

//     // Use the browser's built-in Image constructor
//     const imgElement = new window.Image();
//     imgElement.onload = () => {
//       setIsValidUrl(true);
//       setIsImageLoading(false);
//     };
//     imgElement.onerror = () => {
//       setIsValidUrl(false);
//       setIsImageLoading(false);
//     };
//     imgElement.src = url;
//   };

//   // Handle URL change
//   const handleUrlChange = (e) => {
//     const url = e.target.value;
//     setImageUrl(url);
//     checkImageUrl(url);
//   };

//   // Handle file upload to S3
//   const handleFileUpload = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     // Validate file type
//     const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
//     if (!validTypes.includes(file.type)) {
//       setUploadError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
//       return;
//     }

//     // Validate file size (max 5MB)
//     if (file.size > 5 * 1024 * 1024) {
//       setUploadError('Image size should be less than 5MB');
//       return;
//     }

//     setIsUploading(true);
//     setUploadProgress(0);
//     setUploadError('');

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
//             setImageUrl(response.url);
//             setIsValidUrl(true);
//             setIsUploading(false);
//           } catch (error) {
//             setUploadError('Error parsing server response');
//             setIsUploading(false);
//           }
//         } else {
//           setUploadError('Failed to upload image');
//           setIsUploading(false);
//         }
//       };

//       // Handle errors
//       xhr.onerror = () => {
//         setUploadError('Network error occurred during upload');
//         setIsUploading(false);
//       };

//       // Send the upload request
//       xhr.open('POST', '/api/blogs/upload');
//       xhr.send(formData);

//     } catch (err) {
//       setUploadError(err.message || 'An unexpected error occurred during upload');
//       setIsUploading(false);
//     }
//   };

//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };

//   const handleInsert = () => {
//     if (imageUrl && isValidUrl) {
//       onInsert(imageUrl, width, height, alignment);
//     }
//   };

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
//       onClick={onClose}
//     >
//       <div
//         className="bg-white p-6 rounded-lg w-full max-w-xl"
//         onClick={e => e.stopPropagation()}
//       >
//         <h3 className="text-xl font-bold mb-4 text-gray-800">Insert Image</h3>

//         {/* S3 Image Upload */}
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-gray-700">Upload Image</label>

//           <div
//             onClick={triggerFileInput}
//             className="w-full h-32 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition bg-gray-50"
//           >
//             <input
//               type="file"
//               ref={fileInputRef}
//               onChange={handleFileUpload}
//               accept="image/jpeg,image/png,image/gif,image/webp"
//               className="hidden"
//             />

//             {isUploading ? (
//               <div className="w-full px-8">
//                 <div className="text-center mb-2">
//                   <p className="text-gray-600">Uploading... {uploadProgress}%</p>
//                 </div>
//                 <div className="w-full bg-gray-200 rounded-full h-2.5">
//                   <div
//                     className="bg-blue-600 h-2.5 rounded-full"
//                     style={{ width: `${uploadProgress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ) : (
//               <>
//                 <Upload className="h-8 w-8 text-gray-400 mb-2" />
//                 <p className="text-gray-600 font-medium">Click to upload image</p>
//                 <p className="text-gray-500 text-sm">JPG, PNG, GIF or WEBP (max. 5MB)</p>
//               </>
//             )}
//           </div>

//           {uploadError && (
//             <div className="mt-2 p-2 bg-red-50 text-red-600 rounded text-sm">
//               <div className="flex items-start">
//                 <AlertTriangle className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
//                 <span>{uploadError}</span>
//               </div>
//             </div>
//           )}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-1 text-gray-700">Or Enter Image URL</label>
//           <input
//             type="url"
//             value={imageUrl}
//             onChange={handleUrlChange}
//             className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             placeholder="https://example.com/image.jpg"
//           />
//         </div>

//         {/* Image Preview */}
//         {imageUrl && (
//           <div className="mb-4 relative">
//             {isImageLoading && (
//               <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 rounded">
//                 <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//               </div>
//             )}

//             {isValidUrl ? (
//               <div className={`relative p-3 bg-gray-50 rounded border ${alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'}`}>
//                 <img
//                   src={imageUrl}
//                   alt="Preview"
//                   className={`img-align-${alignment} rounded max-h-40 border`}
//                   style={{
//                     width: width !== '100%' ? width : null,
//                     height: height !== 'auto' ? height : null,
//                     maxWidth: '100%',
//                     objectFit: 'contain'
//                   }}
//                 />
//               </div>
//             ) : !isImageLoading && (
//               <div className="p-3 bg-red-50 text-red-700 rounded border border-red-200">
//                 Unable to load image. Please check the URL.
//               </div>
//             )}
//           </div>
//         )}

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700">Width</label>
//             <select
//               value={width}
//               onChange={e => setWidth(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="100%">Full width</option>
//               <option value="300px">Small (300px)</option>
//               <option value="500px">Medium (500px)</option>
//               <option value="700px">Large (700px)</option>
//               <option value="200px">Extra Small (200px)</option>
//             </select>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1 text-gray-700">Height</label>
//             <select
//               value={height}
//               onChange={e => setHeight(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="auto">Auto</option>
//               <option value="200px">Small (200px)</option>
//               <option value="300px">Medium (300px)</option>
//               <option value="400px">Large (400px)</option>
//               <option value="500px">Extra Large (500px)</option>
//             </select>
//           </div>
//         </div>

//         {/* <div className="mb-6">
//           <label className="block text-sm font-medium mb-1 text-gray-700">Alignment</label>
//           <div className="flex gap-2">
//             <button
//               type="button"
//               onClick={() => setAlignment('left')}
//               className={`px-3 py-2 rounded flex-1 ${alignment === 'left' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//             >
//               <div className="flex items-center justify-center">
//                 <AlignLeft size={16} className="mr-1" />
//                 Left
//               </div>
//             </button>
//             <button
//               type="button"
//               onClick={() => setAlignment('center')}
//               className={`px-3 py-2 rounded flex-1 ${alignment === 'center' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//             >
//               <div className="flex items-center justify-center">
//                 <AlignCenter size={16} className="mr-1" />
//                 Center
//               </div>
//             </button>
//             <button
//               type="button"
//               onClick={() => setAlignment('right')}
//               className={`px-3 py-2 rounded flex-1 ${alignment === 'right' ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//             >
//               <div className="flex items-center justify-center">
//                 <AlignRight size={16} className="mr-1" />
//                 Right
//               </div>
//             </button>
//           </div>
//         </div> */}

//         <div className="flex justify-end gap-3">
//           <button
//             type="button"
//             onClick={onClose}
//             className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
//           >
//             Cancel
//           </button>
//           <button
//             type="button"
//             onClick={handleInsert}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
//             disabled={!imageUrl || !isValidUrl}
//           >
//             Insert Image
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Function to extract headings from the editor content
// const extractHeadings = (editor) => {
//   if (!editor) return [];

//   const headings = [];
//   const content = editor.getJSON();

//   const processNode = (node) => {
//     if (node.type === 'heading') {
//       const text = node.content?.[0]?.text || 'Untitled';
//       const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
//       headings.push({
//         level: node.attrs.level,
//         content: text,
//         id
//       });
//     }

//     if (node.content) {
//       node.content.forEach(child => processNode(child));
//     }
//   };

//   if (content.content) {
//     content.content.forEach(node => processNode(node));
//   }

//   return headings;
// };

// // Enhanced toolbar with better styling and organization
// const EditorToolbar = ({ editor, onImageAdd, onExtractToc }) => {
//   if (!editor) return null;

//   // Use mousedown instead of click to prevent focus loss
//   const handleMouseDown = (action) => (e) => {
//     e.preventDefault();
//     action();
//     editor.view.focus();
//   };

//   // Function to handle heading application
//   const applyHeading = (level) => {
//     // Simpler approach - use the standard toggleHeading
//     // Headings are block-level elements and will apply to the whole paragraph
//     editor.chain().focus().toggleHeading({ level }).run();
    
//     // Add an informative tooltip that appears temporarily
//     const toolbarEl = document.querySelector('.editor-toolbar');
//     if (toolbarEl) {
//       const tooltip = document.createElement('div');
//       tooltip.className = 'bg-gray-800 text-white px-3 py-1.5 rounded text-sm absolute -bottom-8 z-20 editor-toolbar-tooltip';
//       tooltip.innerText = 'Headings apply to entire paragraphs';
//       tooltip.style.left = '50%';
//       tooltip.style.transform = 'translateX(-50%)';
//       toolbarEl.appendChild(tooltip);
      
//       // Remove tooltip after 2 seconds
//       setTimeout(() => {
//         if (tooltip.parentNode === toolbarEl) {
//           toolbarEl.removeChild(tooltip);
//         }
//       }, 2000);
//     }
//   };

//   // Function to apply heading-like styling to selected text only
//   const applyTextStyle = (fontSize, isBold = true) => {
//     editor.chain()
//       .focus()
//       .setFontSize(fontSize)
//       .setTextStyle({ fontWeight: isBold ? 'bold' : 'normal' })
//       .run();
//   };

//   return (
//     <div className="flex flex-wrap gap-2 p-3 mb-2 border-b sticky top-4 bg-white z-10 shadow-sm rounded-t-lg relative editor-toolbar">
//       <div className="flex gap-1 border-r pr-2 mr-2">
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => applyHeading(1))}
//           className={`p-2 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Heading 1 - Applies to entire paragraph"
//         >
//           H1
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => applyHeading(2))}
//           className={`p-2 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Heading 2 - Applies to entire paragraph"
//         >
//           H2
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => applyHeading(3))}
//           className={`p-2 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Heading 3 - Applies to entire paragraph"
//         >
//           H3
//         </button>
//       </div>
      
//       {/* Text Style buttons that work on selections */}
//       <div className="flex gap-1 border-r pr-2 mr-2">
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => applyTextStyle('24px'))}
//           className="p-2 rounded bg-black hover:bg-black"
//           title="Large text - Applies to selected text only"
//         >
//           T1
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => applyTextStyle('20px'))}
//           className="p-2 rounded bg-black hover:bg-black"
//           title="Medium text - Applies to selected text only"
//         >
//           T2
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => applyTextStyle('16px'))}
//           className="p-2 rounded bg-black hover:bg-black"
//           title="Small text - Applies to selected text only"
//         >
//           T3
//         </button>
//       </div>

//       <div className="flex gap-1 border-r pr-2 mr-2">
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().toggleBold().run())}
//           className={`p-2 rounded ${editor.isActive('bold') ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Bold"
//         >
//           <Bold size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().toggleItalic().run())}
//           className={`p-2 rounded ${editor.isActive('italic') ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Italic"
//         >
//           <Italic size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().toggleUnderline().run())}
//           className={`p-2 rounded ${editor.isActive('underline') ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Underline"
//         >
//           <UnderlineIcon size={18} />
//         </button>
//       </div>

//       <div className="flex gap-1 border-r pr-2 mr-2">
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().setTextAlign('left').run())}
//           className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Align Left"
//         >
//           <AlignLeft size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().setTextAlign('center').run())}
//           className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Align Center"
//         >
//           <AlignCenter size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().setTextAlign('right').run())}
//           className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Align Right"
//         >
//           <AlignRight size={18} />
//         </button>
//       </div>

//       <div className="flex gap-1 border-r pr-2 mr-2">
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().toggleBulletList().run())}
//           className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Bullet List"
//         >
//           <List size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().toggleOrderedList().run())}
//           className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Numbered List"
//         >
//           <ListOrdered size={18} />
//         </button>
//       </div>

//       <div className="flex gap-1">
//         <button
//           type="button"
//           onMouseDown={(e) => {
//             e.preventDefault();
//             const url = window.prompt('Enter the URL:');
//             if (url) {
//               editor.chain().focus().setLink({ href: url }).run();
//             }
//             editor.view.focus();
//           }}
//           className={`p-2 rounded ${editor.isActive('link') ? 'bg-blue-600 text-white' : 'bg-black hover:bg-black'}`}
//           title="Insert Link"
//         >
//           <Link2 size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={(e) => {
//             e.preventDefault();
//             onImageAdd();
//           }}
//           className="p-2 rounded bg-black hover:bg-black"
//           title="Insert Image"
//         >
//           <ImageIcon size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={handleMouseDown(() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run())}
//           className="p-2 rounded bg-black hover:bg-black"
//           title="Insert Table"
//         >
//           <TableIcon size={18} />
//         </button>
//         <button
//           type="button"
//           onMouseDown={(e) => {
//             e.preventDefault();
//             if (onExtractToc) {
//               const headings = extractHeadings(editor);
//               onExtractToc(headings);
//             }
//             editor.view.focus();
//           }}
//           className="ml-2 px-3 py-2 rounded bg-indigo-600 text-white flex items-center gap-2 hover:bg-indigo-700"
//           title="Update Table of Contents"
//         >
//           <RefreshCw size={16} />
//           Update TOC
//         </button>
//       </div>
//     </div>
//   );
// };

// // Custom Image Extension with proper alignment and size support
// const CustomImage = Image.extend({
//   addAttributes() {
//     return {
//       ...this.parent?.(),
//       width: {
//         default: null,
//         parseHTML: element => element.getAttribute('width'),
//         renderHTML: attributes => {
//           if (!attributes.width) {
//             return {};
//           }
//           return {
//             width: attributes.width,
//           };
//         },
//       },
//       height: {
//         default: null,
//         parseHTML: element => element.getAttribute('height'),
//         renderHTML: attributes => {
//           if (!attributes.height) {
//             return {};
//           }
//           return {
//             height: attributes.height,
//           };
//         },
//       },
//       alignment: {
//         default: 'center',
//         parseHTML: element => {
//           const className = element.getAttribute('class') || '';
//           if (className.includes('img-align-left')) return 'left';
//           if (className.includes('img-align-center')) return 'center';
//           if (className.includes('img-align-right')) return 'right';
//           return 'center';
//         },
//         renderHTML: attributes => {
//           return {
//             class: `blog-image img-align-${attributes.alignment || 'center'}`,
//           };
//         },
//       },
//     };
//   },
// });

// // CSS for editor styling
// const customStyles = `
// /* Fix for scroll jumping */
// .ProseMirror {
//   min-height: 400px;
//   border-radius: 0.5rem;
//   position: relative;
//   padding: 1rem;
// }

// /* Editor toolbar tooltip */
// .editor-toolbar {
//   position: relative;
// }

// /* Custom tooltip animation */
// @keyframes fadeInOut {
//   0% { opacity: 0; }
//   20% { opacity: 1; }
//   80% { opacity: 1; }
//   100% { opacity: 0; }
// }

// .editor-toolbar-tooltip {
//   animation: fadeInOut 2s ease-in-out forwards;
// }

// .ProseMirror:focus {
//   outline: none;
// }

// .ProseMirror p.is-editor-empty:first-child::before {
//   content: attr(data-placeholder);
//   float: left;
//   color: #adb5bd;
//   pointer-events: none;
//   height: 0;
// }

// .ProseMirror img {
//   max-width: 100%;
//   height: auto;
//   border-radius: 0.375rem;
//   box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
// }

// /* Image alignment classes */
// .ProseMirror img.img-align-left {
//   float: left;
//   margin-right: 1rem;
//   margin-bottom: 0.5rem;
//   clear: left;
// }

// .ProseMirror img.img-align-center {
//   display: block !important;
//   margin-left: auto !important;
//   margin-right: auto !important;
//   float: none !important;
//   clear: both !important;
// }

// .ProseMirror img.img-align-right {
//   float: right;
//   margin-left: 1rem;
//   margin-bottom: 0.5rem;
//   clear: right;
// }

// .ProseMirror table {
//   border-collapse: collapse;
//   table-layout: fixed;
//   width: 100%;
//   margin: 1rem 0;
//   overflow: hidden;
// }

// .ProseMirror table td,
// .ProseMirror table th {
//   border: 2px solid #ced4da;
//   padding: 0.5rem;
//   position: relative;
//   vertical-align: top;
// }

// .ProseMirror table th {
//   background-color: #f8f9fa;
//   font-weight: bold;
// }

// .ProseMirror ul,
// .ProseMirror ol {
//   padding-left: 1.5rem;
// }

// .ProseMirror ul li {
//   list-style-type: disc;
// }

// .ProseMirror ol li {
//   list-style-type: decimal;
// }

// .ProseMirror h1 {
//   font-size: 2rem;
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
// }

// .ProseMirror h2 {
//   font-size: 1.5rem;
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
// }

// .ProseMirror h3 {
//   font-size: 1.25rem;
//   margin-top: 1rem;
//   margin-bottom: 0.5rem;
// }

// .ProseMirror p {
//   margin-bottom: 0.75rem;
// }

// .ProseMirror .selectedCell:after {
//   background: rgba(200, 200, 255, 0.4);
//   content: "";
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
//   pointer-events: none;
//   position: absolute;
//   z-index: 2;
// }
// `;

// const TipTapEditor = ({
//   onSave,
//   initialContent = '<p>Start writing your blog post...</p>',
//   onTocUpdate,
//   isSaving = false
// }) => {
//   const [content, setContent] = useState('');
//   const [showImageModal, setShowImageModal] = useState(false);
//   const editorRef = useRef(null);
//   const editorWrapperRef = useRef(null);

//   // Add function to add heading IDs
//   const addHeadingIds = (editor) => {
//     if (!editor) return;

//     // Wait for the editor to be ready
//     setTimeout(() => {
//       const editorElement = document.querySelector('.ProseMirror');
//       if (!editorElement) return;

//       // Find all heading elements in the editor
//       const headings = editorElement.querySelectorAll('h1, h2, h3');

//       // Apply IDs to each heading based on its content
//       headings.forEach(heading => {
//         if (!heading.id) {
//           const text = heading.textContent || 'heading';
//           const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
//           heading.id = id;
//         }
//       });
//     }, 100);
//   };

//   // Initialize editor with all required extensions
//   const editor = useEditor({
//     immediatelyRender: false, 
//     extensions: [
//       StarterKit.configure({
//         // Configure history for better paste handling
//         history: {
//           depth: 100,
//           newGroupDelay: 500
//         },
//         // Configure heading to be more intelligent with selections
//         heading: {
//           levels: [1, 2, 3]
//         }
//       }),
//       Placeholder.configure({
//         placeholder: 'Start writing your blog here...',
//         emptyEditorClass: 'is-editor-empty',
//       }),
//       // Use the CustomImage extension instead of the standard Image
//       CustomImage.configure({
//         inline: false,
//         HTMLAttributes: {
//           class: 'blog-image',
//         },
//       }),
//       Table.configure({
//         resizable: true,
//       }),
//       TableRow,
//       TableHeader,
//       TableCell,
//       // Custom heading configuration to work better with text selections
//       Heading.configure({
//         levels: [1, 2, 3],
//       }),
//       Link.configure({
//         openOnClick: false,
//         HTMLAttributes: {
//           class: 'text-blue-600 underline',
//         },
//       }),
//       FontSize,
//       TextStyle,
//       Color,
//       Underline,
//       TextAlign.configure({
//         types: ['heading', 'paragraph', 'image'],
//       }),
//       Dropcursor,
//       Typography,
//       CharacterCount.configure({
//         limit: 50000, // Optional: set a character limit
//       }),
//     ],
//     content: initialContent,
//     onUpdate: ({ editor }) => {
//       setContent(editor.getHTML());
      
//       // Extract headings on each update
//       if (onTocUpdate) {
//         const headings = extractHeadings(editor);
//         onTocUpdate(headings);
//       }
//     },
//     editorProps: {
//       attributes: {
//         class: 'prose focus:outline-none w-full max-w-full',
//         spellcheck: 'false',
//       },
//     },
//   });

//   // Store editor reference
//   useEffect(() => {
//     if (editor) {
//       editorRef.current = editor;
//     }
//   }, [editor]);

//   // Extract TOC when editor is initialized
//   useEffect(() => {
//     if (editor && onTocUpdate) {
//       const headings = extractHeadings(editor);
//       onTocUpdate(headings);
//     }
//   }, [editor, onTocUpdate]);

//   // Apply heading IDs when editor updates
//   useEffect(() => {
//     if (editor) {
//       editor.on('update', () => {
//         addHeadingIds(editor);
//       });

//       // Also apply when editor is ready
//       addHeadingIds(editor);
//     }

//     return () => {
//       if (editor) {
//         editor.off('update');
//       }
//     };
//   }, [editor]);

//   // Set up MutationObserver to track content changes
//   useEffect(() => {
//     if (!editor) return;

//     // Set up a MutationObserver to detect changes to the editor content
//     const editorElement = document.querySelector('.ProseMirror');
//     if (!editorElement) return;

//     // Store the editor DOM element reference
//     editorWrapperRef.current = editorElement;

//     const observer = new MutationObserver(() => {
//       // When content changes, reapply heading IDs
//       addHeadingIds(editor);
//     });

//     observer.observe(editorElement, {
//       childList: true,
//       subtree: true,
//       characterData: true
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [editor]);

//   // Handle image insertion with proper attributes
//   const handleImageInsert = useCallback((url, width, height, alignment) => {
//     if (!editor || !url) return;

//     // Insert the image with explicit attributes
//     editor.chain().focus().setImage({
//       src: url,
//       alt: 'Blog image',
//       width: width,
//       height: height,
//       alignment: alignment
//     }).run();

//     setShowImageModal(false);
//   }, [editor]);

//   function addIdsToHeadingsWithRegex(htmlContent) {
//     const headingRegex = /<(h[1-6])>(.*?)<\/\1>/gi;
//     return htmlContent.replace(headingRegex, (match, tag, content) => {
//       const textContent = content.replace(/<\/?[^>]+(>|$)/g, '').trim();
//       const slug = textContent
//         // .toLowerCase()
//         .replace(/[^\w\s-]/g, '')
//         .replace(/\s+/g, '-')
//         .replace(/-+/g, '-');
//       if (slug) {
//         return `<${tag} id="${slug}">${content}</${tag}>`;
//       }
//       return match;
//     });
//   }

//   // Save content and TOC
//   const handleSave = useCallback(() => {
//     if (onSave && editor) {
//       const headings = extractHeadings(editor);
//       const updatedContent = addIdsToHeadingsWithRegex(content);
//       onSave(updatedContent, headings);
//     }
//   }, [content, editor, onSave]);

//   if (!editor) {
//     return <div className="border rounded-lg shadow-md p-4">Loading editor...</div>;
//   }

//   return (
//     <div className="border rounded-lg shadow-md overflow-hidden">
//       <style>{customStyles}</style>

//       <EditorToolbar
//         editor={editor}
//         onImageAdd={() => setShowImageModal(true)}
//         onExtractToc={(headings) => {
//           if (onTocUpdate) {
//             onTocUpdate(headings);
//           }
//         }}
//       />

//       <div className="min-h-[400px] bg-white">
//         <EditorContent editor={editor} />
//       </div>

//       <div className="flex justify-between p-4 bg-gray-50 border-t">
//         <div className="text-gray-500 text-sm">
//           {editor.storage.characterCount ? `${editor.storage.characterCount.characters()} characters` : '0 characters'}
//         </div>
//         <button
//           type="button"
//           onClick={handleSave}
//           className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition shadow-md flex items-center gap-2"
//           disabled={isSaving}
//         >
//           {isSaving ? 'Saving...' : (
//             <>
//               <Save size={16} />
//               Save Blog
//             </>
//           )}
//         </button>
//       </div>

//       {showImageModal && (
//         <ImageModal
//           onClose={() => setShowImageModal(false)}
//           onInsert={handleImageInsert}
//         />
//       )}
//     </div>
//   );
// };

// export default TipTapEditor;
'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import FontSize from '@tiptap/extension-font-size';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import Heading from '@tiptap/extension-heading';
import Link from '@tiptap/extension-link';
import { TextStyle } from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Dropcursor from '@tiptap/extension-dropcursor';
import Typography from '@tiptap/extension-typography';
import CharacterCount from '@tiptap/extension-character-count';
import {
  Bold, Italic, Underline as UnderlineIcon, AlignLeft, AlignCenter, AlignRight,
  Link2, Image as ImageIcon, Table as TableIcon, List, ListOrdered, RefreshCw, Save,
  Upload, X, AlertTriangle
} from 'lucide-react';

// Enhanced Image Modal with S3 upload capability
const ImageModal = ({ onClose, onInsert }) => {
  const fileInputRef = useRef(null);
  const [imageUrl, setImageUrl] = useState('');
  const [width, setWidth] = useState('100%');
  const [height, setHeight] = useState('auto');
  const [alignment, setAlignment] = useState('center');
  const [isValidUrl, setIsValidUrl] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);

  // S3 Upload States
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');

  // Check if URL is valid
  const checkImageUrl = (url) => {
    if (!url) {
      setIsValidUrl(false);
      return;
    }

    setIsImageLoading(true);

    // Use the browser's built-in Image constructor
    const imgElement = new window.Image();
    imgElement.onload = () => {
      setIsValidUrl(true);
      setIsImageLoading(false);
    };
    imgElement.onerror = () => {
      setIsValidUrl(false);
      setIsImageLoading(false);
    };
    imgElement.src = url;
  };

  // Handle URL change
  const handleUrlChange = (e) => {
    const url = e.target.value;
    setImageUrl(url);
    checkImageUrl(url);
  };

  // Handle file upload to S3
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      setUploadError('Please upload a valid image file (JPEG, PNG, GIF, WEBP)');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('Image size should be less than 5MB');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setUploadError('');

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
            setImageUrl(response.url);
            setIsValidUrl(true);
            setIsUploading(false);
          } catch (error) {
            setUploadError('Error parsing server response');
            setIsUploading(false);
          }
        } else {
          setUploadError('Failed to upload image');
          setIsUploading(false);
        }
      };

      // Handle errors
      xhr.onerror = () => {
        setUploadError('Network error occurred during upload');
        setIsUploading(false);
      };

      // Send the upload request
      xhr.open('POST', '/api/blogs/upload');
      xhr.send(formData);

    } catch (err) {
      setUploadError(err.message || 'An unexpected error occurred during upload');
      setIsUploading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleInsert = () => {
    if (imageUrl && isValidUrl) {
      onInsert(imageUrl, width, height, alignment);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-slate-800/95 backdrop-blur-xl p-8 rounded-2xl w-full max-w-2xl border border-slate-700/50 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
          <ImageIcon className="w-6 h-6 text-blue-400" />
          Insert Image
        </h3>

        {/* S3 Image Upload */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3 text-slate-300">Upload Image</label>

          <div
            onClick={triggerFileInput}
            className="w-full h-36 border-2 border-dashed border-slate-600/50 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-500/50 transition bg-slate-700/20 hover:bg-slate-700/30"
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/jpeg,image/png,image/gif,image/webp"
              className="hidden"
            />

            {isUploading ? (
              <div className="w-full px-8">
                <div className="text-center mb-3">
                  <p className="text-slate-300 font-medium">Uploading... {uploadProgress}%</p>
                </div>
                <div className="w-full bg-slate-600/50 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            ) : (
              <>
                <Upload className="h-10 w-10 text-slate-400 mb-3" />
                <p className="text-slate-300 font-semibold text-lg">Click to upload image</p>
                <p className="text-slate-400 text-sm mt-1">JPG, PNG, GIF or WEBP (max. 5MB)</p>
              </>
            )}
          </div>

          {uploadError && (
            <div className="mt-3 p-3 bg-red-500/20 border border-red-500/30 text-red-300 rounded-xl text-sm">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{uploadError}</span>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-3 text-slate-300">Or Enter Image URL</label>
          <input
            type="url"
            value={imageUrl}
            onChange={handleUrlChange}
            className="w-full p-4 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        {/* Image Preview */}
        {imageUrl && (
          <div className="mb-6 relative">
            {isImageLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-slate-700/50 backdrop-blur-sm rounded-xl">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            )}

            {isValidUrl ? (
              <div className={`relative p-4 bg-slate-700/30 rounded-xl border border-slate-600/50 ${alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left'}`}>
                <img
                  src={imageUrl}
                  alt="Preview"
                  className={`img-align-${alignment} rounded-lg max-h-48 border border-slate-600/30`}
                  style={{
                    width: width !== '100%' ? width : null,
                    height: height !== 'auto' ? height : null,
                    maxWidth: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
            ) : !isImageLoading && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-300 rounded-xl">
                Unable to load image. Please check the URL.
              </div>
            )}
          </div>
        )}

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300">Width</label>
            <select
              value={width}
              onChange={e => setWidth(e.target.value)}
              className="w-full p-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="100%">Full width</option>
              <option value="300px">Small (300px)</option>
              <option value="500px">Medium (500px)</option>
              <option value="700px">Large (700px)</option>
              <option value="200px">Extra Small (200px)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-slate-300">Height</label>
            <select
              value={height}
              onChange={e => setHeight(e.target.value)}
              className="w-full p-3 bg-slate-700/30 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="auto">Auto</option>
              <option value="200px">Small (200px)</option>
              <option value="300px">Medium (300px)</option>
              <option value="400px">Large (400px)</option>
              <option value="500px">Extra Large (500px)</option>
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 bg-slate-700/50 border border-slate-600/50 text-slate-300 rounded-xl hover:bg-slate-700/70 hover:text-white transition-all font-medium"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleInsert}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all font-bold shadow-lg"
            disabled={!imageUrl || !isValidUrl}
          >
            Insert Image
          </button>
        </div>
      </div>
    </div>
  );
};

// Function to extract headings from the editor content
const extractHeadings = (editor) => {
  if (!editor) return [];

  const headings = [];
  const content = editor.getJSON();

  const processNode = (node) => {
    if (node.type === 'heading') {
      const text = node.content?.[0]?.text || 'Untitled';
      const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      headings.push({
        level: node.attrs.level,
        content: text,
        id
      });
    }

    if (node.content) {
      node.content.forEach(child => processNode(child));
    }
  };

  if (content.content) {
    content.content.forEach(node => processNode(node));
  }

  return headings;
};

// Enhanced toolbar with better styling and organization
const EditorToolbar = ({ editor, onImageAdd, onExtractToc }) => {
  if (!editor) return null;

  // Use mousedown instead of click to prevent focus loss
  const handleMouseDown = (action) => (e) => {
    e.preventDefault();
    action();
    editor.view.focus();
  };

  // Function to handle heading application
  const applyHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    
    // Add an informative tooltip that appears temporarily
    const toolbarEl = document.querySelector('.editor-toolbar');
    if (toolbarEl) {
      const tooltip = document.createElement('div');
      tooltip.className = 'bg-slate-700 text-slate-200 px-3 py-1.5 rounded text-sm absolute -bottom-8 z-20 editor-toolbar-tooltip border border-slate-600/50';
      tooltip.innerText = 'Headings apply to entire paragraphs';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translateX(-50%)';
      toolbarEl.appendChild(tooltip);
      
      // Remove tooltip after 2 seconds
      setTimeout(() => {
        if (tooltip.parentNode === toolbarEl) {
          toolbarEl.removeChild(tooltip);
        }
      }, 2000);
    }
  };

  // Function to apply heading-like styling to selected text only
  const applyTextStyle = (fontSize, isBold = true) => {
    editor.chain()
      .focus()
      .setFontSize(fontSize)
      .setTextStyle({ fontWeight: isBold ? 'bold' : 'normal' })
      .run();
  };

  return (
    <div className="flex flex-wrap gap-2 p-4 mb-2 border-b border-slate-700/50 sticky top-4 bg-slate-800/50 backdrop-blur-xl z-10 shadow-lg rounded-t-2xl relative editor-toolbar">
      <div className="flex gap-1 border-r border-slate-700/50 pr-3 mr-3">
        <button
          type="button"
          onMouseDown={handleMouseDown(() => applyHeading(1))}
          className={`px-3 py-2 rounded-lg font-bold text-sm transition-all ${editor.isActive('heading', { level: 1 }) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Heading 1 - Applies to entire paragraph"
        >
          H1
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => applyHeading(2))}
          className={`px-3 py-2 rounded-lg font-bold text-sm transition-all ${editor.isActive('heading', { level: 2 }) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Heading 2 - Applies to entire paragraph"
        >
          H2
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => applyHeading(3))}
          className={`px-3 py-2 rounded-lg font-bold text-sm transition-all ${editor.isActive('heading', { level: 3 }) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Heading 3 - Applies to entire paragraph"
        >
          H3
        </button>
      </div>
      
      {/* Text Style buttons that work on selections */}
      <div className="flex gap-1 border-r border-slate-700/50 pr-3 mr-3">
        <button
          type="button"
          onMouseDown={handleMouseDown(() => applyTextStyle('24px'))}
          className="px-3 py-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white font-bold text-sm transition-all"
          title="Large text - Applies to selected text only"
        >
          T1
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => applyTextStyle('20px'))}
          className="px-3 py-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white font-bold text-sm transition-all"
          title="Medium text - Applies to selected text only"
        >
          T2
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => applyTextStyle('16px'))}
          className="px-3 py-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white font-bold text-sm transition-all"
          title="Small text - Applies to selected text only"
        >
          T3
        </button>
      </div>

      <div className="flex gap-1 border-r border-slate-700/50 pr-3 mr-3">
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().toggleBold().run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive('bold') ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Bold"
        >
          <Bold size={18} />
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().toggleItalic().run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive('italic') ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Italic"
        >
          <Italic size={18} />
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().toggleUnderline().run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive('underline') ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Underline"
        >
          <UnderlineIcon size={18} />
        </button>
      </div>

      <div className="flex gap-1 border-r border-slate-700/50 pr-3 mr-3">
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().setTextAlign('left').run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive({ textAlign: 'left' }) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Align Left"
        >
          <AlignLeft size={18} />
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().setTextAlign('center').run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive({ textAlign: 'center' }) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Align Center"
        >
          <AlignCenter size={18} />
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().setTextAlign('right').run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive({ textAlign: 'right' }) ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Align Right"
        >
          <AlignRight size={18} />
        </button>
      </div>

      <div className="flex gap-1 border-r border-slate-700/50 pr-3 mr-3">
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().toggleBulletList().run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive('bulletList') ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Bullet List"
        >
          <List size={18} />
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().toggleOrderedList().run())}
          className={`p-2 rounded-lg transition-all ${editor.isActive('orderedList') ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Numbered List"
        >
          <ListOrdered size={18} />
        </button>
      </div>

      <div className="flex gap-1">
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            const url = window.prompt('Enter the URL:');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
            editor.view.focus();
          }}
          className={`p-2 rounded-lg transition-all ${editor.isActive('link') ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'}`}
          title="Insert Link"
        >
          <Link2 size={18} />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            onImageAdd();
          }}
          className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all"
          title="Insert Image"
        >
          <ImageIcon size={18} />
        </button>
        <button
          type="button"
          onMouseDown={handleMouseDown(() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run())}
          className="p-2 rounded-lg bg-slate-700/50 text-slate-300 hover:bg-slate-700/70 hover:text-white transition-all"
          title="Insert Table"
        >
          <TableIcon size={18} />
        </button>
        <button
          type="button"
          onMouseDown={(e) => {
            e.preventDefault();
            if (onExtractToc) {
              const headings = extractHeadings(editor);
              onExtractToc(headings);
            }
            editor.view.focus();
          }}
          className="ml-3 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center gap-2 hover:from-indigo-600 hover:to-purple-700 transition-all font-medium shadow-lg"
          title="Update Table of Contents"
        >
          <RefreshCw size={16} />
          Update TOC
        </button>
      </div>
    </div>
  );
};

// Custom Image Extension with proper alignment and size support
const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: element => element.getAttribute('width'),
        renderHTML: attributes => {
          if (!attributes.width) {
            return {};
          }
          return {
            width: attributes.width,
          };
        },
      },
      height: {
        default: null,
        parseHTML: element => element.getAttribute('height'),
        renderHTML: attributes => {
          if (!attributes.height) {
            return {};
          }
          return {
            height: attributes.height,
          };
        },
      },
      alignment: {
        default: 'center',
        parseHTML: element => {
          const className = element.getAttribute('class') || '';
          if (className.includes('img-align-left')) return 'left';
          if (className.includes('img-align-center')) return 'center';
          if (className.includes('img-align-right')) return 'right';
          return 'center';
        },
        renderHTML: attributes => {
          return {
            class: `blog-image img-align-${attributes.alignment || 'center'}`,
          };
        },
      },
    };
  },
});

// CSS for editor styling
const customStyles = `
/* Fix for scroll jumping */
.ProseMirror {
  min-height: 400px;
  border-radius: 0 0 1rem 1rem;
  position: relative;
  padding: 2rem;
  background-color: rgba(30, 41, 59, 0.5);
  backdrop-filter: blur(12px);
  color: white;
}

/* Editor toolbar tooltip */
.editor-toolbar {
  position: relative;
}

/* Custom tooltip animation */
@keyframes fadeInOut {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}

.editor-toolbar-tooltip {
  animation: fadeInOut 2s ease-in-out forwards;
}

.ProseMirror:focus {
  outline: none;
}

.ProseMirror p.is-editor-empty:first-child::before {
  content: attr(data-placeholder);
  float: left;
  color: #94a3b8;
  pointer-events: none;
  height: 0;
}

.ProseMirror img {
  max-width: 100%;
  height: auto;
  border-radius: 0.75rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}

/* Image alignment classes */
.ProseMirror img.img-align-left {
  float: left;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
  clear: left;
}

.ProseMirror img.img-align-center {
  display: block !important;
  margin-left: auto !important;
  margin-right: auto !important;
  float: none !important;
  clear: both !important;
}

.ProseMirror img.img-align-right {
  float: right;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
  clear: right;
}

.ProseMirror table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 1rem 0;
  overflow: hidden;
  border-radius: 0.75rem;
  background-color: rgba(51, 65, 85, 0.3);
}

.ProseMirror table td,
.ProseMirror table th {
  border: 2px solid rgba(148, 163, 184, 0.3);
  padding: 0.75rem;
  position: relative;
  vertical-align: top;
  color: white;
}

.ProseMirror table th {
  background-color: rgba(51, 65, 85, 0.5);
  font-weight: bold;
  color: #e2e8f0;
}

.ProseMirror ul,
.ProseMirror ol {
  padding-left: 1.5rem;
}

.ProseMirror ul li {
  list-style-type: disc;
  color: white;
}

.ProseMirror ol li {
  list-style-type: decimal;
  color: white;
}

.ProseMirror h1 {
  font-size: 2rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #f1f5f9;
  font-weight: bold;
}

.ProseMirror h2 {
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #f1f5f9;
  font-weight: bold;
}

.ProseMirror h3 {
  font-size: 1.25rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #f1f5f9;
  font-weight: bold;
}

.ProseMirror p {
  margin-bottom: 0.75rem;
  color: #e2e8f0;
  line-height: 1.7;
}

.ProseMirror a {
  color: #60a5fa;
  text-decoration: underline;
}

.ProseMirror a:hover {
  color: #93c5fd;
}

.ProseMirror .selectedCell:after {
  background: rgba(96, 165, 250, 0.3);
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  pointer-events: none;
  position: absolute;
  z-index: 2;
}

/* Custom scrollbar for editor */
.ProseMirror::-webkit-scrollbar {
  width: 6px;
}

.ProseMirror::-webkit-scrollbar-track {
  background: rgba(51, 65, 85, 0.3);
  border-radius: 3px;
}

.ProseMirror::-webkit-scrollbar-thumb {
  background: rgba(96, 165, 250, 0.6);
  border-radius: 3px;
}

.ProseMirror::-webkit-scrollbar-thumb:hover {
  background: rgba(96, 165, 250, 0.8);
}
`;

const TipTapEditor = ({
  onSave,
  initialContent = '<p>Start writing your blog post...</p>',
  onTocUpdate,
  isSaving = false
}) => {
  const [content, setContent] = useState('');
  const [showImageModal, setShowImageModal] = useState(false);
  const editorRef = useRef(null);
  const editorWrapperRef = useRef(null);

  // Add function to add heading IDs
  const addHeadingIds = (editor) => {
    if (!editor) return;

    // Wait for the editor to be ready
    setTimeout(() => {
      const editorElement = document.querySelector('.ProseMirror');
      if (!editorElement) return;

      // Find all heading elements in the editor
      const headings = editorElement.querySelectorAll('h1, h2, h3');

      // Apply IDs to each heading based on its content
      headings.forEach(heading => {
        if (!heading.id) {
          const text = heading.textContent || 'heading';
          const id = text.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
          heading.id = id;
        }
      });
    }, 100);
  };

  // Initialize editor with all required extensions
  const editor = useEditor({
    immediatelyRender: false, 
    extensions: [
      StarterKit.configure({
        // Configure history for better paste handling
        history: {
          depth: 100,
          newGroupDelay: 500
        },
        // Configure heading to be more intelligent with selections
        heading: {
          levels: [1, 2, 3]
        }
      }),
      Placeholder.configure({
        placeholder: 'Start writing your blog here...',
        emptyEditorClass: 'is-editor-empty',
      }),
      // Use the CustomImage extension instead of the standard Image
      CustomImage.configure({
        inline: false,
        HTMLAttributes: {
          class: 'blog-image',
        },
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      // Custom heading configuration to work better with text selections
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: 'text-blue-400 underline hover:text-blue-300',
        },
      }),
      FontSize,
      TextStyle,
      Color,
      Underline,
      TextAlign.configure({
        types: ['heading', 'paragraph', 'image'],
      }),
      Dropcursor,
      Typography,
      CharacterCount.configure({
        limit: 50000, // Optional: set a character limit
      }),
    ],
    content: initialContent,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
      
      // Extract headings on each update
      if (onTocUpdate) {
        const headings = extractHeadings(editor);
        onTocUpdate(headings);
      }
    },
    editorProps: {
      attributes: {
        class: 'prose focus:outline-none w-full max-w-full prose-invert',
        spellcheck: 'false',
      },
    },
  });

  // Store editor reference
  useEffect(() => {
    if (editor) {
      editorRef.current = editor;
    }
  }, [editor]);

  // Extract TOC when editor is initialized
  useEffect(() => {
    if (editor && onTocUpdate) {
      const headings = extractHeadings(editor);
      onTocUpdate(headings);
    }
  }, [editor, onTocUpdate]);

  // Apply heading IDs when editor updates
  useEffect(() => {
    if (editor) {
      editor.on('update', () => {
        addHeadingIds(editor);
      });

      // Also apply when editor is ready
      addHeadingIds(editor);
    }

    return () => {
      if (editor) {
        editor.off('update');
      }
    };
  }, [editor]);

  // Set up MutationObserver to track content changes
  useEffect(() => {
    if (!editor) return;

    // Set up a MutationObserver to detect changes to the editor content
    const editorElement = document.querySelector('.ProseMirror');
    if (!editorElement) return;

    // Store the editor DOM element reference
    editorWrapperRef.current = editorElement;

    const observer = new MutationObserver(() => {
      // When content changes, reapply heading IDs
      addHeadingIds(editor);
    });

    observer.observe(editorElement, {
      childList: true,
      subtree: true,
      characterData: true
    });

    return () => {
      observer.disconnect();
    };
  }, [editor]);

  // Handle image insertion with proper attributes
  const handleImageInsert = useCallback((url, width, height, alignment) => {
    if (!editor || !url) return;

    // Insert the image with explicit attributes
    editor.chain().focus().setImage({
      src: url,
      alt: 'Blog image',
      width: width,
      height: height,
      alignment: alignment
    }).run();

    setShowImageModal(false);
  }, [editor]);

  function addIdsToHeadingsWithRegex(htmlContent) {
    const headingRegex = /<(h[1-6])>(.*?)<\/\1>/gi;
    return htmlContent.replace(headingRegex, (match, tag, content) => {
      const textContent = content.replace(/<\/?[^>]+(>|$)/g, '').trim();
      const slug = textContent
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
      if (slug) {
        return `<${tag} id="${slug}">${content}</${tag}>`;
      }
      return match;
    });
  }

  // Save content and TOC
  const handleSave = useCallback(() => {
    if (onSave && editor) {
      const headings = extractHeadings(editor);
      const updatedContent = addIdsToHeadingsWithRegex(content);
      onSave(updatedContent, headings);
    }
  }, [content, editor, onSave]);

  if (!editor) {
    return (
      <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 p-8 shadow-2xl">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mr-4"></div>
          <span className="text-slate-300 text-lg">Loading editor...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
      <style>{customStyles}</style>

      <EditorToolbar
        editor={editor}
        onImageAdd={() => setShowImageModal(true)}
        onExtractToc={(headings) => {
          if (onTocUpdate) {
            onTocUpdate(headings);
          }
        }}
      />

      <div className="min-h-[400px]">
        <EditorContent editor={editor} />
      </div>

      <div className="flex justify-between items-center p-6 bg-slate-700/30 border-t border-slate-700/50">
        <div className="text-slate-400 text-sm flex items-center gap-2">
          <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
          <span>
            {editor.storage.characterCount ? `${editor.storage.characterCount.characters().toLocaleString()} characters` : '0 characters'}
          </span>
        </div>
        <button
          type="button"
          onClick={handleSave}
          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl transition-all shadow-lg flex items-center gap-3 font-bold transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
              Saving...
            </>
          ) : (
            <>
              <Save size={18} />
              Save Blog
            </>
          )}
        </button>
      </div>

      {showImageModal && (
        <ImageModal
          onClose={() => setShowImageModal(false)}
          onInsert={handleImageInsert}
        />
      )}
    </div>
  );
};

export default TipTapEditor;