import React from 'react';
import { Check } from 'lucide-react';

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
      case 'blue': return 'bg-blue-100 dark:bg-blue-900/20';
      case 'purple': return 'bg-purple-100 dark:bg-purple-900/20';
      case 'green': return 'bg-green-100 dark:bg-green-900/20';
      case 'turquoise': return 'bg-cyan-100 dark:bg-cyan-900/20';
      default: return 'bg-blue-100 dark:bg-blue-900/20';
    }
  };

  const getTextColor = () => {
    switch(color) {
      case 'blue': return 'text-blue-500 dark:text-blue-400';
      case 'purple': return 'text-purple-500 dark:text-purple-400';
      case 'green': return 'text-green-500 dark:text-green-400';
      case 'turquoise': return 'text-cyan-500 dark:text-cyan-400';
      default: return 'text-blue-500 dark:text-blue-400';
    }
  };

  const getHoverColor = () => {
    switch(color) {
      case 'blue': return 'group-hover:bg-blue-500 dark:group-hover:bg-blue-600';
      case 'purple': return 'group-hover:bg-purple-500 dark:group-hover:bg-purple-600';
      case 'green': return 'group-hover:bg-green-500 dark:group-hover:bg-green-600';
      case 'turquoise': return 'group-hover:bg-cyan-500 dark:group-hover:bg-cyan-600';
      default: return 'group-hover:bg-blue-500 dark:group-hover:bg-blue-600';
    }
  };

  return (
    <div className="group bg-white dark:bg-midnight-800 rounded-xl shadow-md dark:shadow-midnight-200/10 overflow-hidden transition-all duration-200 ease-out relative transform perspective-1000 hover:shadow-2xl dark:hover:shadow-midnight-200/20 hover:-translate-y-2 hover:scale-[1.02] will-change-transform">
      {/* Top colored border */}
      <div className={`h-2 w-full ${
        color === 'blue' ? 'bg-blue-500 dark:bg-blue-400' : 
        color === 'purple' ? 'bg-purple-500 dark:bg-purple-400' : 
        color === 'green' ? 'bg-green-500 dark:bg-green-400' : 'bg-cyan-500 dark:bg-cyan-400'
      }`}></div>
      
      <div className="p-8">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-full ${getBgColor()} ${getTextColor()} flex items-center justify-center mb-6 transition-all duration-200 ease-out ${getHoverColor()} group-hover:text-white transform group-hover:scale-105`}>
          {icon}
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-midnight-50">{title}</h3>
        <p className="text-gray-600 dark:text-midnight-50/80 mb-6">{description}</p>
        
        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center transition-transform duration-200 ease-out" style={{ transitionDelay: `${index * 30}ms` }}>
              <Check size={16} className={`mr-2 ${getTextColor()}`} />
              <span className="text-gray-700 dark:text-midnight-50/90">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;