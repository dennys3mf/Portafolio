import type { APIRoute } from 'astro';
import { getAllBlogPosts, getFeaturedBlogPosts, getBlogPostsByCategory, getRecentBlogPosts } from '../../lib/db';

export const GET: APIRoute = async ({ url }) => {
  try {
    const featured = url.searchParams.get('featured') === 'true';
    const category = url.searchParams.get('category');
    const recent = url.searchParams.get('recent');
    
    let posts;
    
    if (featured) {
      posts = await getFeaturedBlogPosts();
    } else if (category) {
      posts = await getBlogPostsByCategory(category);
    } else if (recent) {
      const limit = parseInt(recent) || 5;
      posts = await getRecentBlogPosts(limit);
    } else {
      posts = await getAllBlogPosts();
    }

    return new Response(
      JSON.stringify({
        success: true,
        data: posts,
        count: posts.length,
        filters: {
          featured: featured || false,
          category: category || null,
          recent: recent || null,
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to fetch blog posts',
        message: error instanceof Error ? error.message : 'Unknown error',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
};
