import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Autoflow AI’s automation solution dramatically streamlined our document processing. What used to be time-consuming and error-prone is now fast, accurate, and effortless. Their team guided us every step of the way, making the transition feel seamless and fully supported.",
      author: "Abu Taher",
      position: "CEO",
      company: "HayeMedia"
    },
    {
      quote: "Partnering with Autoflow AI completely changed the game for our customer service team. The custom AI agent they built now handles routine inquiries effortlessly and empowers our human agents with instant, intelligent support when things get complex. It’s like having an expert assistant working behind the scenes at all times.",
      author: "David Stanley",
      position: "CTO",
      company: "Retail Innovations"
    },
    {
      quote: "Since bringing in Autoflow AI, our day-to-day has completely changed. Tasks that used to take hours now just happen in the background, and our team can actually focus on the work that matters. It’s been a smooth transition, and honestly, we wouldn’t go back",
      author: "Sophie Ellis",
      position: "Head of Operations",
      company: "SwiftPath Logistics"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-cream relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Client <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Hear what our clients have to say about their experience working with Autoflow AI.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            <Quote className="absolute top-8 left-8 w-10 h-10 text-blue-100 md:w-16 md:h-16" />
            
            <div className="relative z-10">
              <p className="text-gray-700 text-lg md:text-xl italic mb-8 relative z-10">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonials[currentIndex].author.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].author}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].position}, {testimonials[currentIndex].company}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-blue-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 text-blue-500" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? 'bg-blue-500' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-md hover:bg-blue-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 text-blue-500" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;