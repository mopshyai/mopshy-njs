// // import React from 'react'
// // import BlogPage from "../_components/BlogPage"
// // const page = () => {
// //   return (
// //    <>
// //     <BlogPage />
// //    </>
// //   )
// // }

// // export default page
// // app/blog/[slug]/page.tsx
// import React from 'react';
// import { Metadata } from 'next';
// import BlogPage from "../_components/BlogPage"


// // API call to fetch blog metadata
// async function fetchBlogMetadata(id: string) {
//   try {
//     // Use the API route to fetch blog metadata
//     const response = await fetch(`/api/blog/blog-metadata?id=${id}`, {
//       cache: 'no-store' // Ensures fresh data on each request
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch blog metadata');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching blog metadata:', error);
//     return null;
//   }
// }

// // Generate metadata using the API response
// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const id = params.id;
//   const metaData = await fetchBlogMetadata(id);
  
//   if (!metaData) {
//     return {
//       title: 'Blog',
//       description: 'Blog post',
//     };
//   }
  
//   return {
//     title: metaData.htmlTitle || metaData.title,
//     description: metaData.metaDescription,
//     openGraph: {
//       title: metaData.ogTitle || metaData.title,
//       description: metaData.metaDescription,
//       url: metaData.ogUrl,
//       images: metaData.ogImage ? [{ url: metaData.ogImage }] : [],
//     },
//   };
// }

// // The page component
// export default function Page({ params }: { params: { id: string } }) {
//   return (
//     <BlogPage />
//   );
// }

// app/blog/[id]/page.tsx
// import React from 'react';
// import { Metadata } from 'next';
// import BlogPage from "../_components/BlogPage";

// // API call to fetch blog metadata
// async function fetchBlogMetadata(id: string) {
//   try {
//     // Fix: Use absolute URL with origin or ensure path is correct
//     // When running on the server, you need to specify the full URL or use a relative path that works
//     const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/blogs/blog-metadata?id=${id}`, {
//       cache: 'no-store' // Ensures fresh data on each request
//     });
    
//     if (!response.ok) {
//       throw new Error('Failed to fetch blog metadata');
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching blog metadata:', error);
//     return null;
//   }
// }

// // Generate metadata using the API response
// export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
//   const id = params.id;
//   const metaData = await fetchBlogMetadata(id);
  
//   if (!metaData) {
//     return {
//       title: 'Blog',
//       description: 'Blog post',
//     };
//   }
  
//   return {
//     title: metaData.htmlTitle || metaData.title,
//     description: metaData.metaDescription,
//     openGraph: {
//       title: metaData.ogTitle || metaData.title,
//       description: metaData.metaDescription,
//       url: metaData.ogUrl,
//       images: metaData.ogImage ? [{ url: metaData.ogImage }] : [],
//     },
//   };
// }

// // The page component
// export default function Page({ params }: { params: { id: string } }) {
//   return (
//     <BlogPage />
//   );
// }
import React from 'react';
import { Metadata } from 'next';
import BlogPage from "../_components/BlogPage";

// API call to fetch blog metadata
async function fetchBlogMetadata(slug: string) {
  try {
    // Fix: Use absolute URL with origin or ensure path is correct
    // When running on the server, you need to specify the full URL or use a relative path that works
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/blogs/blog-metadata?slug=${slug}`, {
      cache: 'no-store' // Ensures fresh data on each request
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blog metadata');
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching blog metadata:', error);
    return null;
  }
}

// Generate metadata using the API response
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const slug = params.slug;
  const metaData = await fetchBlogMetadata(slug);
  
  if (!metaData) {
    return {
      title: 'Blog',
      description: 'Blog post',
    };
  }
  
  return {
    title: metaData.htmlTitle || metaData.title,
    description: metaData.metaDescription,
    openGraph: {
      title: metaData.ogTitle || metaData.title,
      description: metaData.metaDescription,
      url: metaData.ogUrl,
      images: metaData.ogImage ? [{ url: metaData.ogImage }] : [],
    },
  };
}

// The page component
export default function Page({ params }: { params: { slug: string } }) {
  return (
    <BlogPage slug={params.slug} />
  );
}