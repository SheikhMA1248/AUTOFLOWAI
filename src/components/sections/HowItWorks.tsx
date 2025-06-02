import React from 'react';
import { Search, CodeSquare, Zap } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-blue-500" />,
      title: "Discovery",
      description: "We start by understanding your business challenges, objectives, and existing systems to identify where AI can create the most value.",
      number: "01",
      color: "blue"
    },
    {
      icon: <CodeSquare className="w-10 h-10 text-purple-500" />,
      title: "Solution Design",
      description: "Our team designs a custom AI solution tailored to your specific needs, integrating with your existing workflows and technologies.",
      number: "02",
      color: "purple"
    },
    {
      icon: <Zap className="w-10 h-10 text-green-500" />,
      title: "Integration",
      description: "We implement, test, and deploy your solution, providing training and support to ensure seamless adoption and maximum impact.",
      number: "03",
      color: "green"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">It Works</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Our streamlined process ensures we deliver effective AI solutions that address your specific business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Animated connecting lines */}
          <div className="absolute top-1/2 left-[calc(33%+2rem)] w-[calc(33%-4rem)] hidden md:block">
            <div className="h-2 w-full">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transform origin-left animate-grow-x rounded-full"></div>
            </div>
          </div>
          <div className="absolute top-1/2 left-[calc(66%+2rem)] w-[calc(33%-4rem)] hidden md:block">
            <div className="h-2 w-full">
              <div className="h-full bg-gradient-to-r from-purple-500 to-green-500 transform origin-left animate-grow-x animation-delay-500 rounded-full"></div>
            </div>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number */}
              <div className={`absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-xl font-bold z-20 border-2 ${
                step.color === 'blue' ? 'text-blue-500 border-blue-500' :
                step.color === 'purple' ? 'text-purple-500 border-purple-500' :
                'text-green-500 border-green-500'
              }`}>
                {step.number}
              </div>
              
              {/* Step card */}
              <div className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg relative z-10 h-full mt-6">
                <div className="mb-6 flex items-center">
                  <div className={`rounded-full p-3 mr-4 ${
                    step.color === 'blue' ? 'bg-blue-100' :
                    step.color === 'purple' ? 'bg-purple-100' :
                    'bg-green-100'
                  }`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;