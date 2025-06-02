import React from 'react';

interface Stat {
  label: string;
  value: string;
}

interface CaseStudyCardProps {
  title: string;
  industry: string;
  description: string;
  imageUrl: string;
  stats: Stat[];
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  title, 
  industry, 
  description, 
  imageUrl, 
  stats 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {industry}
          </span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 flex-grow">{description}</p>
        
        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-3 rounded-lg">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-lg font-semibold text-blue-600">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;