import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../ui/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "5 Ways AI Automation Is Transforming Financial Services",
      excerpt: "Discover how AI-powered automation is revolutionizing processes, improving customer experiences, and reducing costs in the financial sector.",
      imageUrl: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Automation",
      date: "May 15, 2025"
    },
    {
      title: "The Future of Customer Service: AI Agents vs. Human Touch",
      excerpt: "Exploring the perfect balance between AI efficiency and human empathy in creating exceptional customer service experiences.",
      imageUrl: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "AI Agents",
      date: "April 28, 2025"
    },
    {
      title: "Voice AI: Beyond Basic Commands to Natural Conversations",
      excerpt: "How advances in natural language processing are creating voice interfaces that feel increasingly human-like and intuitive.",
      imageUrl: "https://images.pexels.com/photos/9034763/pexels-photo-9034763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Voice Agents",
      date: "April 10, 2025"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Stay updated with the latest trends, best practices, and innovations in AI automation and intelligent agents.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              category={post.category}
              date={post.date}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            View all blog posts
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;