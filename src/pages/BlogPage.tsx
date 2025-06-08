import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchIcon, TagIcon } from 'lucide-react';

// Components
import SEO from '../components/common/SEO';
import PageHeader from '../components/common/PageHeader';
import BlogPreview from '../components/common/BlogPreview';
import CTASection from '../components/common/CTASection';

// Data
import { blogPosts, BlogPost } from '../data/blogData';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from blog posts
  const categories = [...new Set(blogPosts.map(post => post.category))];
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Get the featured post (first post)
  const featuredPost = blogPosts[0];
  
  return (
    <>
      <SEO 
        title="Sump Pump Resources & Expert Guides | NJ Sump Pump Blog"
        description="Expert sump pump maintenance guides, troubleshooting tips, and professional advice for Bergen County homeowners. Learn how to protect your basement and extend your sump pump's life."
        keywords="sump pump maintenance tips, basement flood prevention, sump pump troubleshooting guide, water damage prevention, sump pump repair guide, basement waterproofing tips NJ, groundwater management"
        canonicalUrl="/blog"
      />
      
      <PageHeader 
        title="Sump Pump Resources & Guides"
        subtitle="Expert advice to help you maintain and protect your home from water damage"
        bgImage="https://images.pexels.com/photos/6444/pencil-typography-black-design.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Article</h2>
          </div>
          
          <BlogPreview post={featuredPost} featured={true} />
        </div>
      </section>
      
      {/* Blog Posts */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full md:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Search Articles</h3>
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <SearchIcon className="text-gray-400" size={16} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <div className="space-y-2 mb-6">
                  <button
                    onClick={() => setSelectedCategory('')}
                    className={`block w-full text-left px-3 py-2 rounded-md transition ${
                      selectedCategory === '' 
                        ? 'bg-primary-100 text-primary-700 font-medium' 
                        : 'hover:bg-gray-100 text-secondary-700'
                    }`}
                  >
                    All Categories
                  </button>
                  
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-md transition ${
                        selectedCategory === category 
                          ? 'bg-primary-100 text-primary-700 font-medium' 
                          : 'hover:bg-gray-100 text-secondary-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {['sump pump repair', 'basement flooding', 'maintenance tips', 'battery backup', 'emergency service'].map(tag => (
                    <span 
                      key={tag}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-secondary-100 text-secondary-800"
                    >
                      <TagIcon size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="w-full md:w-3/4">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-2xl font-bold">
                  {selectedCategory ? `${selectedCategory} Articles` : 'All Articles'}
                </h2>
                <span className="text-secondary-600">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'post' : 'posts'}
                </span>
              </div>
              
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map(post => (
                    <BlogPreview key={post.id} post={post} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-lg text-center">
                  <h3 className="text-xl font-semibold mb-2">No Articles Found</h3>
                  <p className="text-secondary-600 mb-4">
                    No articles match your current search criteria. Try adjusting your search or browse all articles.
                  </p>
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('');
                    }}
                    className="btn btn-primary"
                  >
                    View All Articles
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection />
    </>
  );
};

export default BlogPage;