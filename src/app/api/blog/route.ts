import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const limit = searchParams.get('limit');
    const category = searchParams.get('category');

    // Build where clause
    const whereClause: any = {
      published: true,
    };

    if (category) {
      whereClause.category = {
        has: category
      };
    }

    // Fetch blogs from database
    const blogs = await prisma.blog.findMany({
      where: whereClause,
      orderBy: {
        publishedAt: 'desc'
      },
      take: limit ? parseInt(limit) : undefined,
      select: {
        id: true,
        title: true,
        bannerImage: true,
        content: true,
        category: true,
        published: true,
        createdAt: true,
        publishedAt: true,
        slug: true,
        metaDescription: true,
        ogTitle: true,
        ogImage: true
      }
    });

    // Transform the data to match frontend expectations
    const transformedBlogs = blogs.map(blog => {
      // Calculate reading time
      const getReadingTime = (content: string) => {
        if (!content) return '1 min read';
        const plainText = content.replace(/<[^>]+>/g, '');
        const wordsPerMinute = 200;
        const wordCount = plainText.split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / wordsPerMinute);
        return `${readingTime} min read`;
      };

      // Get excerpt from content
      const getExcerpt = (content: string, maxLength = 150) => {
        if (blog.metaDescription) return blog.metaDescription;
        if (!content) return 'No content preview available...';
        const plainText = content.replace(/<[^>]+>/g, '');
        return plainText.length > maxLength
          ? plainText.substring(0, maxLength) + '...'
          : plainText;
      };

      return {
        id: blog.id,
        title: blog.title,
        excerpt: getExcerpt(blog.content),
        date: blog.publishedAt || blog.createdAt,
        readTime: getReadingTime(blog.content),
        image: blog.bannerImage || blog.ogImage || `https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop`,
        tags: blog.category || [],
        category: blog.category?.[0] || 'Blog',
        slug: blog.slug || blog.id,
        published: blog.published
      };
    });

    // If requesting featured blog, return the most recent one
    if (featured === 'true') {
      return NextResponse.json({
        success: true,
        data: transformedBlogs[0] || null
      });
    }

    return NextResponse.json({
      success: true,
      data: transformedBlogs,
      count: transformedBlogs.length
    });

  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blogs',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

// Optional: Add POST method for creating blogs via API
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      title,
      content,
      bannerImage,
      category,
      published = false,
      htmlTitle,
      metaDescription,
      ogTitle,
      ogUrl,
      ogImage,
      slug
    } = body;

    // Validate required fields
    if (!title || !content) {
      return NextResponse.json(
        {
          success: false,
          error: 'Title and content are required'
        },
        { status: 400 }
      );
    }

    // Create blog
    const blog = await prisma.blog.create({
      data: {
        title,
        content,
        bannerImage,
        category: Array.isArray(category) ? category : [category].filter(Boolean),
        published,
        publishedAt: published ? new Date() : null,
        htmlTitle,
        metaDescription,
        ogTitle,
        ogUrl,
        ogImage,
        slug
      }
    });

    return NextResponse.json({
      success: true,
      data: blog
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create blog',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}