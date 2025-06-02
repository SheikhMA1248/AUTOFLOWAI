import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';

// Add required styles
import './styles/animations.css';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    {children}
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/case-studies" element={<Layout><CaseStudiesPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;