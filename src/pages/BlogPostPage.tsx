import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, Calendar, Clock, Tag } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import BlogPreview from '../components/common/BlogPreview';
import CTASection from '../components/common/CTASection';

// Data
import { getPostBySlug, getRelatedPosts } from '../data/blogData';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getPostBySlug(slug || '');
  
  if (!post) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
        <Link to="/blog" className="btn btn-primary">
          Return to Blog
        </Link>
      </div>
    );
  }
  
  const relatedPosts = getRelatedPosts(post.id, 3);
  
  // Function to render content with proper formatting
  const renderContent = () => {
    // Simple markdown-like conversion for the blog content
    const formattedContent = post.content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold my-6">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold my-5">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold my-4">$1</h3>')
      .replace(/\n\n/g, '</p><p class="mb-4 leading-relaxed">')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^- (.*$)/gm, '<li class="ml-6 mb-2 list-disc">$1</li>');
    
    return `<p class="mb-4 leading-relaxed">${formattedContent}</p>`;
  };
  
  return (
    <>
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonicalUrl={`/blog/${post.slug}`}
        ogType="article"
        ogImage="/images/blog/og-image.jpg"
      />
      
      {/* Hero Section */}
      <section 
        className="pt-24 pb-16 bg-cover bg-center relative"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${post.image})`,
        }}
      >
        <div className="container-custom relative z-10 text-white">
          <button 
            onClick={() => navigate('/blog')}
            className="inline-flex items-center text-white hover:text-primary-300 transition mb-6"
          >
            <ArrowLeftIcon size={16} className="mr-2" />
            Back to all articles
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {post.title}
          </h1>
          
          <div className="flex items-center text-primary-200 mb-6">
            <span className="flex items-center mr-6">
              <Calendar size={16} className="mr-2" />
              {post.date}
            </span>
            <span className="flex items-center mr-6">
              <Clock size={16} className="mr-2" />
              {post.readTime} min read
            </span>
            <span className="flex items-center">
              <Tag size={16} className="mr-2" />
              {post.category}
            </span>
          </div>
          
          <p className="text-xl text-primary-100 max-w-3xl">
            {post.excerpt}
          </p>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: renderContent() }} />
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span 
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary-100 text-secondary-800"
                      >
                        <Tag size={14} className="mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Need Sump Pump Help?</h3>
                  <p className="mb-4">
                    Our expert technicians are ready to assist with all your sump pump needs throughout Bergen County, NJ.
                  </p>
                  <Link to="/contact" className="btn btn-primary w-full text-center">
                    Contact Us Today
                  </Link>
                </div>
                
                <div className="bg-secondary-50 p-6 rounded-lg border border-secondary-100">
                  <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-6">
                    {relatedPosts.map(relatedPost => (
                      <div key={relatedPost.id} className="flex items-start">
                        <div 
                          className="w-20 h-20 rounded-md bg-cover bg-center flex-shrink-0 mr-4"
                          style={{ backgroundImage: `url(${relatedPost.image})` }}
                        ></div>
                        <div>
                          <Link 
                            to={`/blog/${relatedPost.slug}`}
                            className="font-semibold hover:text-primary-600 transition line-clamp-2"
                          >
                            {relatedPost.title}
                          </Link>
                          <p className="text-sm text-secondary-600 mt-1">
                            {relatedPost.readTime} min read
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default BlogPostPage;