import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, value, label, color }) => {
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

  return (
    <div className="bg-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-full ${getBgColor()} ${getTextColor()} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{value}</h3>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
};

export default MetricCard;