import React from 'react';
import { Bot, Zap, ArrowRight } from 'lucide-react';
import { CalendarButton } from '../ui/CalendarButton';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-cream">
      {/* Background Elements */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-green-500/20 to-turquoise-500/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="flex items-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="bg-blue-100 text-blue-500 flex items-center py-1 px-3 rounded-full">
                <Zap size={16} className="mr-1" />
                <span className="text-sm font-medium">Next-Gen AI Solutions</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="block">Smarter Business,</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Seamless Automation
              </span>
            </h1>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Transform your workflow with AI automations, intelligent agents, and next-gen voice solutions. We build custom AI systems that deliver real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <CalendarButton 
                text="Book a Meeting" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center w-full sm:w-auto justify-center"
              />
              <a 
                href="#services" 
                className="flex items-center text-gray-700 hover:text-blue-500 transition-all font-medium w-full sm:w-auto justify-center"
              >
                Explore Our Services
                <ArrowRight size={18} className="ml-2 animate-bounce-x" />
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-float flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="relative w-full h-80 md:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl overflow-hidden flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg" 
                  alt="AI Robot helping with business growth" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;