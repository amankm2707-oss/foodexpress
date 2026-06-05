import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';

const Home: React.FC = () => {
  return (
    <>
      {/* Liquid Custom Cursor */}
      <div className="cursor-dot" id="custom-cursor-dot"></div>
      <div className="cursor-ring" id="custom-cursor-ring"></div>
      
      {/* Stripe-style Decorative Grid Lines */}
      <div className="stripe-gridlines">
        <div className="grid-line line-v-1"></div>
        <div className="grid-line line-v-2"></div>
        <div className="grid-line line-v-3"></div>
      </div>
      
      {/* Dynamic Aurora Glow Blobs */}
      <div className="aurora-container">
        <div className="aurora-blob blob-saffron"></div>
        <div className="aurora-blob blob-magenta"></div>
        <div className="aurora-blob blob-cyan"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
      </main>
    </>
  );
};

export default Home;
