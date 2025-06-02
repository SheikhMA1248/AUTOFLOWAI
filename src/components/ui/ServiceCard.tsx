import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, color, features }) => {
  // Define color variables based on the color prop
  const getBgColor = () => {
    switch(color) {
      case 'blue': return 'bg-blue-100';
      case 'purple': return 'bg-purple-100';
      case 'green': return 'bg-green-100';
      case 'turquoise': return 'bg-cyan-100';
      default: return 'bg-blue-100';
    }
  };

  const getTextColor = () => {
    switch(color) {
      case 'blue': return 'text-blue-500';
      case 'purple': return 'text-purple-500';
      case 'green': return 'text-green-500';
      case 'turquoise': return 'text-cyan-500';
      default: return 'text-blue-500';
    }
  };

  const getHoverColor = () => {
    switch(color) {
      case 'blue': return 'group-hover:bg-blue-500';
      case 'purple': return 'group-hover:bg-purple-500';
      case 'green': return 'group-hover:bg-green-500';
      case 'turquoise': return 'group-hover:bg-cyan-500';
      default: return 'group-hover:bg-blue-500';
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl relative">
      {/* Top colored border */}
      <div className={`h-2 w-full ${
        color === 'blue' ? 'bg-blue-500' : 
        color === 'purple' ? 'bg-purple-500' : 
        color === 'green' ? 'bg-green-500' : 'bg-cyan-500'
      }`}></div>
      
      <div className="p-8">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-full ${getBgColor()} ${getTextColor()} flex items-center justify-center mb-6 transition-all duration-300 ${getHoverColor()} group-hover:text-white`}>
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        {/* Features */}
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check size={16} className={`mr-2 ${getTextColor()}`} />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Learn More Link */}
        <a 
          href="#" 
          className={`inline-flex items-center font-medium ${getTextColor()} transition-colors group-hover:underline`}
        >
          Learn more
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;