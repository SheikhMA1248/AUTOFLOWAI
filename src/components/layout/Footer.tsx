import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <img src="/AutoFlowAI-1.webp" alt="Autoflow AI" className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Autoflow AI
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your workflow with AI automations, intelligent agents, and next-gen voice solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  onClick={(e) => handleSmoothScroll(e, 'services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  onClick={(e) => handleSmoothScroll(e, 'how-it-works')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a 
                  href="#case-studies" 
                  onClick={(e) => handleSmoothScroll(e, 'case-studies')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#blog" 
                  onClick={(e) => handleSmoothScroll(e, 'blog')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Insights
                </a>
              </li>
              <li>
                <a 
                  href="#book-meeting" 
                  onClick={(e) => handleSmoothScroll(e, 'book-meeting')}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  Book a Meeting
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">autoflowai.services@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">07502343378</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Autoflow AI. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;