import React from 'react';
import { Bot, Workflow, Mic, Globe, Target } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../styles/animations.css';

const Services: React.FC = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1, rootMargin: '0px' });
  const mainServicesRef = useScrollAnimation({ threshold: 0.1, rootMargin: '0px' });
  const additionalServicesRef = useScrollAnimation({ threshold: 0.1, rootMargin: '0px' });

  const mainServices = [
    {
      icon: <Workflow size={24} />,
      title: "AI Automations",
      description: "Streamline your operations with intelligent automations that handle repetitive tasks, process data, and integrate with your existing systems.",
      color: "blue",
      features: [
        "Workflow automation",
        "Document processing",
        "Data extraction & analysis",
        "System integration"
      ]
    },
    {
      icon: <Bot size={24} />,
      title: "AI Agents",
      description: "Deploy intelligent agents that can understand context, make decisions, and perform complex tasks across your business processes.",
      color: "purple",
      features: [
        "Custom agent development",
        "Multi-agent systems",
        "Decision-making AI",
        "24/7 operational capability"
      ]
    },
    {
      icon: <Mic size={24} />,
      title: "Voice Agents",
      description: "Create natural-sounding voice interfaces that can handle customer service, sales calls, and internal communications with human-like understanding.",
      color: "green",
      features: [
        "Natural language processing",
        "Voice synthesis & recognition",
        "Conversational AI",
        "Multilingual support"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Globe size={24} />,
      title: "Website Optimization",
      description: "Enhance your website's performance and user experience with AI-powered optimization and analytics.",
      color: "turquoise",
      features: [
        "Performance optimization",
        "User experience analysis",
        "Content optimization",
        "Conversion optimization"
      ]
    },
    {
      icon: <Target size={24} />,
      title: "Lead Acquisition",
      description: "Leverage AI to identify, attract, and convert high-quality leads for your business.",
      color: "indigo",
      features: [
        "Lead scoring",
        "Automated outreach",
        "Personalized engagement",
        "Conversion tracking"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-cream to-white"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-cream to-white"></div>
      
      {/* Decorative shapes */}
      <div className="absolute top-40 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-30"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-blue-100 rounded-full opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll fade-in"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We provide a comprehensive suite of AI solutions designed to transform how your business operates, communicates, and grows.
          </p>
        </div>
        
        {/* Main Services */}
        <div 
          ref={mainServicesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 animate-on-scroll stagger"
        >
          {mainServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              features={service.features}
            />
          ))}
        </div>

        {/* Additional Services */}
        <div 
          ref={additionalServicesRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-on-scroll slide-in-bottom"
        >
          {additionalServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;