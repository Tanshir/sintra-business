import { useState, useEffect } from 'react';
import { wordPressApi, WordPressPost, WordPressCategory } from '@/utils/wordpressApi';

export const useWordPressPosts = (params?: {
  page?: number;
  per_page?: number;
  categories?: string;
  search?: string;
}) => {
  const [posts, setPosts] = useState<WordPressPost[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { posts, totalPages } = await wordPressApi.getPosts(params);
        setPosts(posts);
        setTotalPages(totalPages);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [params?.page, params?.per_page, params?.categories, params?.search]);

  return { posts, totalPages, loading, error };
};

export const useWordPressPost = (slug: string) => {
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const post = await wordPressApi.getPost(slug);
        setPost(post);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading, error };
};

export const useWordPressCategories = () => {
  const [categories, setCategories] = useState<WordPressCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const categories = await wordPressApi.getCategories();
        setCategories(categories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};