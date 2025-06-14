import React, { useEffect } from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Stats from '../components/home/Stats';
import Portfolio from '../components/home/Portfolio';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home: React.FC = () => {
  useEffect(() => {
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
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <div className="animate-on-scroll">
        <Services />
      </div>
      <div className="animate-on-scroll">
        <Stats />
      </div>
      <div className="animate-on-scroll">
        <Portfolio />
      </div>
      <div className="animate-on-scroll">
        <Testimonials />
      </div>
      <div className="animate-on-scroll">
        <CTA />
      </div>
    </div>
  );
};

export default Home;