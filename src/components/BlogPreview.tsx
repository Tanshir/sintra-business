import { Link } from 'react-router-dom';
import { useWordPressPosts } from '@/hooks/useWordPress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const BlogPreview = () => {
  const { posts, loading, error } = useWordPressPosts({ per_page: 3 });

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

  if (loading) {
    return (
      <section className="py-16 sm:py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading latest posts...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null; // Don't show the section if there's an error or no posts
  }

  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-primary">Insights</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends in AI, business automation, and digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.slice(0, 3).map((post) => (
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
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
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
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/blog">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};