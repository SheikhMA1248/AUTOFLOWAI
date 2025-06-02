import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <RouterLink to="/" className="flex items-center">
            <img src="/AutoFlowAI-1.webp" alt="Autoflow AI" className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Autoflow AI
            </span>
          </RouterLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#services" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                  Services
                </a>
                <a href="#how-it-works" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                  How It Works
                </a>
                <RouterLink to="/case-studies" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                  Case Studies
                </RouterLink>
                <a href="#blog" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                  Insights
                </a>
              </>
            ) : (
              <RouterLink to="/" className="text-gray-700 hover:text-blue-500 transition-colors font-medium">
                Back to Home
              </RouterLink>
            )}
            <a 
              href="#book-meeting" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-md"
            >
              Book a Meeting
            </a>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a 
                    href="#services" 
                    className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#how-it-works" 
                    className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    How It Works
                  </a>
                  <RouterLink 
                    to="/case-studies" 
                    className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </RouterLink>
                  <a 
                    href="#blog" 
                    className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Insights
                  </a>
                </>
              ) : (
                <RouterLink 
                  to="/" 
                  className="text-gray-700 hover:text-blue-500 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Back to Home
                </RouterLink>
              )}
              <a 
                href="#book-meeting" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-center transition-all shadow-md"
                onClick={() => setIsOpen(false)}
              >
                Book a Meeting
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;