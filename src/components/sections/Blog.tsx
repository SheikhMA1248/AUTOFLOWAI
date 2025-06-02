import React from 'react';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../ui/BlogCard';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Trends in AI Transforming Financial Services in 2025: Is Your Organization Ready?",
      excerpt: "Strategic adoption of artificial intelligence (AI) is unlocking immense opportunities for innovation and growth in financial services.",
      imageUrl: "https://images.pexels.com/photos/6693661/pexels-photo-6693661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Automation",
      date: "January 23, 2025",
      link: "https://enxoo.com/trends-in-ai-transforming-financial-services-in-2025-is-your-organization-ready/"
    },
    {
      title: "AI vs. Human: The Future of Customer Interaction",
      excerpt: "Exploring the evolving landscape of customer service and the perfect balance between AI efficiency and human touch.",
      imageUrl: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "AI Agents",
      date: "March 1, 2025",
      link: "https://medium.com/@channelasaservice/ai-vs-human-the-future-of-customer-interaction-d7e108062cc9"
    },
    {
      title: "Voice agents and Conversational AI: new trends for developers in 2025",
      excerpt: "Stay on top of the latest voice agents and Conversational AI trends shaping the future of human-computer interaction.",
      imageUrl: "https://images.pexels.com/photos/9034763/pexels-photo-9034763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      category: "Voice Agents",
      date: "March 3, 2025",
      link: "https://elevenlabs.io/blog/voice-agents-and-conversational-ai-new-developer-trends-2025"
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
              link={post.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;