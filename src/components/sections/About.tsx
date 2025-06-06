import React from 'react';
import { Shield, Brain, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import '../../styles/animations.css';

const About: React.FC = () => {
  const headerRef = useScrollAnimation({ threshold: 0.1, rootMargin: '0px' });
  const cardsRef = useScrollAnimation({ threshold: 0.1, rootMargin: '0px' });

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll fade-in"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Autoflow AI</span>
          </h2>
          <p className="text-gray-600 text-lg">
            We combine deep expertise in artificial intelligence with a relentless focus on delivering measurable business results.
          </p>
        </div>
        
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-on-scroll stagger"
        >
          {/* Value Proposition 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              <Shield size={28} className="text-blue-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Trusted Expertise</h3>
            <p className="text-gray-600">
              With decades of combined experience in AI and business automation, we deliver solutions that are robust, reliable, and aligned with your business objectives.
            </p>
          </div>
          
          {/* Value Proposition 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
              <Brain size={28} className="text-purple-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
            <p className="text-gray-600">
              We leverage the latest advancements in artificial intelligence, machine learning, and natural language processing to build solutions that stay ahead of the curve.
            </p>
          </div>
          
          {/* Value Proposition 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <Sparkles size={28} className="text-green-500" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Business-First Approach</h3>
            <p className="text-gray-600">
              Our solutions are designed with your business outcomes in mind. We focus on delivering measurable ROI through increased efficiency, accuracy, and customer satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;