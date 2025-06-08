import { Link } from 'react-router-dom';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { BlogPost } from '../../data/blogData';

interface BlogPreviewProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPreview = ({ post, featured = false }: BlogPreviewProps) => {
  const { slug, title, excerpt, date, readTime, image } = post;

  if (featured) {
    return (
      <div className="bg-white rounded-lg shadow-card overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div 
            className="h-64 md:h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div className="p-6 md:p-8 flex flex-col">
            <div className="flex items-center text-sm text-black mb-3">
              <span className="flex items-center mr-4">
                <Calendar size={14} className="mr-1" />
                {date}
              </span>
              <span className="flex items-center">
                <Clock size={14} className="mr-1" />
                {readTime} min read
              </span>
            </div>
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-black mb-4 flex-grow">{excerpt}</p>
            <Link 
              to={`/blog/${slug}`} 
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              Read Full Article
              <ChevronRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-card overflow-hidden h-full flex flex-col">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-black mb-2">
          <span className="flex items-center mr-3">
            <Calendar size={12} className="mr-1" />
            {date}
          </span>
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {readTime} min read
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-black mb-4 flex-grow">{excerpt}</p>
        <Link 
          to={`/blog/${slug}`} 
          className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 mt-auto"
        >
          Read More
          <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPreview;