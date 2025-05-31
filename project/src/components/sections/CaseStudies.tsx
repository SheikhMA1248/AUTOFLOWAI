import React from 'react';
import { ArrowRight } from 'lucide-react';
import CaseStudyCard from '../ui/CaseStudyCard';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      title: "Financial Document Processing Automation",
      industry: "Banking & Finance",
      description: "Automated processing of loan applications reducing processing time from 3 days to 4 hours while improving accuracy by 95%.",
      imageUrl: "https://images.pexels.com/photos/7567444/pexels-photo-7567444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: [
        { label: "Time Saved", value: "94%" },
        { label: "Error Reduction", value: "95%" }
      ]
    },
    {
      title: "Customer Service AI Agent Integration",
      industry: "E-commerce",
      description: "Developed an AI agent that handles 70% of customer inquiries automatically, with seamless handoff to human agents for complex cases.",
      imageUrl: "https://images.pexels.com/photos/8867433/pexels-photo-8867433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: [
        { label: "Customer Satisfaction", value: "92%" },
        { label: "Resolution Speed", value: "3.5x faster" }
      ]
    },
    {
      title: "Multilingual Voice Agent for Healthcare",
      industry: "Healthcare",
      description: "Created a voice agent system capable of handling appointment scheduling and basic patient inquiries in 8 languages.",
      imageUrl: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      stats: [
        { label: "Staff Time Saved", value: "32 hrs/week" },
        { label: "Languages", value: "8" }
      ]
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Real-world examples of how our AI solutions have transformed businesses across industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard 
              key={index}
              title={study.title}
              industry={study.industry}
              description={study.description}
              imageUrl={study.imageUrl}
              stats={study.stats}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            View all case studies
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;