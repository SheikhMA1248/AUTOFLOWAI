import React from 'react';
import MetricCard from '../ui/MetricCard';
import { Clock, LineChart, Award } from 'lucide-react';

const Metrics: React.FC = () => {
  const metrics = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: "1000+",
      label: "Hours Saved for Clients",
      color: "blue"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      value: "500+",
      label: "Automations Deployed",
      color: "purple"
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      value: "67%",
      label: "Avg. Efficiency Increase",
      color: "green"
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "98%",
      label: "Client Satisfaction",
      color: "turquoise"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Impact</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Delivering measurable results that transform businesses through intelligent automation.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              icon={metric.icon}
              value={metric.value}
              label={metric.label}
              color={metric.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics