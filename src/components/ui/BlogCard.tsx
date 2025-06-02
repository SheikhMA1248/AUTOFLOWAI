import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, excerpt, imageUrl, category, date, link }) => {
  // Define category color
  const getCategoryColor = () => {
    switch(category.toLowerCase()) {
      case 'automation': return 'bg-blue-100 text-blue-600';
      case 'ai agents': return 'bg-purple-100 text-purple-600';
      case 'voice agents': return 'bg-green-100 text-green-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor()}`}>
            {category}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <Calendar size={14} className="mr-1" />
          <span>{date}</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">{title}</h3>
        
        <p className="text-gray-600 mb-6 flex-grow">{excerpt}</p>
        
        {/* Link */}
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium transition-colors mt-auto"
        >
          Read more
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default BlogCard;