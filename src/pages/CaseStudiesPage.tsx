import React, { useEffect } from 'react';
import { caseStudies } from '../data/caseStudies';
import { useNavigate } from 'react-router-dom';

const CaseStudiesPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBookMeeting = () => {
    navigate('/#book-meeting');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 relative">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 drop-shadow-lg">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto text-white drop-shadow-md font-medium">
            Explore how our AI solutions have helped businesses across different industries achieve their goals and transform their operations.
          </p>
        </div>
      </header>

      {/* Case Studies Grid */}
      <main className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid gap-12 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <img 
                src={study.imageUrl} 
                alt={study.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-4 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    {study.industry}
                  </span>
                  <div className="flex gap-4">
                    {study.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center gap-2">
                        <span className="text-gray-600 text-sm">{stat.label}:</span>
                        <span className="font-semibold text-blue-600">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{study.title}</h2>
                <div className="prose prose-blue max-w-none">
                  {study.content?.split('\n\n').map((paragraph, pIndex) => (
                    <div key={pIndex} className="mb-4">
                      {paragraph.startsWith('-') ? (
                        <ul className="list-disc pl-4 space-y-2">
                          {paragraph.split('\n').map((item, itemIndex) => (
                            <li key={itemIndex}>{item.replace('- ', '')}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">{paragraph}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CaseStudiesPage; 