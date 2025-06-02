import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CaseStudyCard from '../ui/CaseStudyCard';
import { caseStudies } from '../../data/caseStudies';

const CaseStudies: React.FC = () => {
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
          <Link 
            to="/case-studies" 
            className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium transition-colors"
          >
            View all case studies
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;