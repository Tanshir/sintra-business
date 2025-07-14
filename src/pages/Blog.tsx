import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWordPressPosts, useWordPressCategories } from '@/hooks/useWordPress';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Calendar, User, ChevronLeft, ChevronRight } from 'lucide-react';

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const { posts, totalPages, loading, error } = useWordPressPosts({
    page: currentPage,
    per_page: 6,
    search: searchTerm,
    categories: selectedCategory,
  });
  
  const { categories } = useWordPressCategories();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCategoryFilter = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? '' : categoryId);
    setCurrentPage(1);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  if (loading && currentPage === 1) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-red-400 mb-4">Error loading posts: {error}</p>
            <p className="text-muted-foreground">
              Please configure your WordPress API endpoint in the WordPressAPI utility.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in AI, business automation, and digital transformation.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700"
              />
            </div>
            <Button type="submit" variant="outline">
              Search
            </Button>
          </form>

          {/* Categories */}
          {categories.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={selectedCategory === '' ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleCategoryFilter('')}
              >
                All Categories
              </Button>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === String(category.id) ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryFilter(String(category.id))}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No blog posts found.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {posts.map((post) => (
              <Card key={post.id} className="bg-gray-900 border-gray-700 hover:border-primary/50 transition-colors">
                <CardHeader>
                  {post._embedded?.['wp:featuredmedia']?.[0] && (
                    <img
                      src={post._embedded['wp:featuredmedia'][0].source_url}
                      alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  )}
                  <CardTitle className="text-xl text-white hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title.rendered}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {stripHtml(post.excerpt.rendered)}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.date)}
                    </div>
                    {post._embedded?.author?.[0] && (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        {post._embedded.author[0].name}
                      </div>
                    )}
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <span className="text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;