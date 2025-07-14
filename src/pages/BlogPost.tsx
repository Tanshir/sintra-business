import { useParams, Link } from 'react-router-dom';
import { useWordPressPost } from '@/hooks/useWordPress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { post, loading, error } = useWordPressPost(slug || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              {error || 'The blog post you are looking for does not exist.'}
            </p>
            <Link to="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const estimateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(words / wordsPerMinute);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          {/* Featured Image */}
          {post._embedded?.['wp:featuredmedia']?.[0] && (
            <div className="mb-8">
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title.rendered}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-8 pb-8 border-b border-gray-800">
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
            
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {estimateReadingTime(post.content.rendered)} min read
            </div>
          </div>

          {/* Content */}
          <div 
            className="prose prose-invert prose-lg max-w-none
              prose-headings:text-white 
              prose-p:text-gray-300 
              prose-a:text-primary hover:prose-a:text-primary/80
              prose-strong:text-white
              prose-code:text-primary prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
              prose-blockquote:border-l-primary prose-blockquote:text-gray-300
              prose-ul:text-gray-300 prose-ol:text-gray-300
              prose-li:text-gray-300"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex justify-between items-center">
              <Link to="/blog">
                <Button variant="outline">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  More Articles
                </Button>
              </Link>
              
              <div className="text-sm text-muted-foreground">
                Last updated: {formatDate(post.date)}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;