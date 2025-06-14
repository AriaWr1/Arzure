import React, { useEffect, useState } from 'react';
import ThreeBackground from '../components/ThreeBackground';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Portfolio from '../components/home/Portfolio';
import FAQ from '../components/home/FAQ';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Smooth scroll behavior
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <ThreeBackground />
      <CustomCursor />
      
      <Hero />
      
      <div className="animate-on-scroll">
        <Services />
      </div>
      
      <div className="animate-on-scroll">
        <Portfolio />
      </div>
      
      <div className="animate-on-scroll">
        <FAQ />
      </div>
      
      <div className="animate-on-scroll">
        <CTA />
      </div>
    </div>
  );
};

export default Home;