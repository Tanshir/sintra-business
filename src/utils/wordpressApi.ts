export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  featured_media: number;
  author: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    author?: Array<{
      name: string;
      avatar_urls: {
        "96": string;
      };
    }>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
}

class WordPressAPI {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://your-wordpress-site.com/wp-json/wp/v2') {
    this.baseUrl = baseUrl;
  }

  // Update the base URL for your WordPress installation
  setBaseUrl(url: string) {
    this.baseUrl = url;
  }

  async getPosts(params: {
    page?: number;
    per_page?: number;
    categories?: string;
    search?: string;
  } = {}): Promise<{ posts: WordPressPost[]; totalPages: number }> {
    const searchParams = new URLSearchParams({
      _embed: 'true',
      page: String(params.page || 1),
      per_page: String(params.per_page || 10),
      ...(params.categories && { categories: params.categories }),
      ...(params.search && { search: params.search }),
    });

    try {
      const response = await fetch(`${this.baseUrl}/posts?${searchParams}`);
      if (!response.ok) throw new Error('Failed to fetch posts');
      
      const posts = await response.json();
      const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1');
      
      return { posts, totalPages };
    } catch (error) {
      console.error('Error fetching WordPress posts:', error);
      return { posts: [], totalPages: 0 };
    }
  }

  async getPost(slug: string): Promise<WordPressPost | null> {
    try {
      const response = await fetch(`${this.baseUrl}/posts?slug=${slug}&_embed=true`);
      if (!response.ok) throw new Error('Failed to fetch post');
      
      const posts = await response.json();
      return posts[0] || null;
    } catch (error) {
      console.error('Error fetching WordPress post:', error);
      return null;
    }
  }

  async getCategories(): Promise<WordPressCategory[]> {
    try {
      const response = await fetch(`${this.baseUrl}/categories?per_page=100`);
      if (!response.ok) throw new Error('Failed to fetch categories');
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching WordPress categories:', error);
      return [];
    }
  }
}

export const wordPressApi = new WordPressAPI();