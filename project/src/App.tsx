import React, { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import HowItWorks from './components/sections/HowItWorks';
import Metrics from './components/sections/Metrics';
import Testimonials from './components/sections/Testimonials';
import CaseStudies from './components/sections/CaseStudies';
import BookingCTA from './components/sections/BookingCTA';
import Blog from './components/sections/Blog';

// Add required styles
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Autoflow AI - Smarter Business, Seamless Automation";
    
    // Add cream background color to body
    document.body.classList.add('bg-cream');

    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all sections that should animate on scroll
    document.querySelectorAll('section').forEach(section => {
      section.classList.add('fade-in-section');
      observer.observe(section);
    });
    
    return () => {
      document.body.classList.remove('bg-cream');
      observer.disconnect();
    };
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <CaseStudies />
      <BookingCTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;