import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Code, Smartphone, Bot, Palette, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;
      
      heroRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { icon: Code, color: 'text-blue-400', delay: 0, position: 'top-20 left-20' },
    { icon: Smartphone, color: 'text-green-400', delay: 1, position: 'top-32 right-32' },
    { icon: Bot, color: 'text-purple-400', delay: 2, position: 'bottom-40 left-32' },
    { icon: Palette, color: 'text-pink-400', delay: 3, position: 'bottom-32 right-20' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-dark-900 to-dark-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-3000"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1, delay: item.delay }}
          className={`absolute hidden lg:block ${item.position} animate-float`}
          style={{ animationDelay: `${item.delay}s` }}
        >
          <item.icon className={`h-12 w-12 ${item.color}`} />
        </motion.div>
      ))}

      {/* Parallax Container */}
      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center parallax">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center px-6 py-3 rounded-full glass-dark border border-primary-500/30 text-primary-300 text-sm font-medium mb-8 cursor-hover">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Trusted by 500+ clients worldwide
            <div className="ml-2 w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
          >
            Crafting Digital
            <span className="block gradient-text animate-text-glow">
              Excellence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            We transform ideas into exceptional digital experiences through innovative web development,
            mobile applications, and custom software solutions that push the boundaries of what's possible.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/contact"
              className="group magnetic-button bg-gradient-purple text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 flex items-center cursor-hover"
            >
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <button className="group flex items-center text-gray-300 hover:text-primary-400 transition-all duration-300 cursor-hover">
              <div className="w-16 h-16 glass-dark rounded-full shadow-2xl flex items-center justify-center mr-4 group-hover:shadow-primary-500/25 group-hover:scale-110 transition-all duration-300 border border-primary-500/20">
                <Play className="h-6 w-6 ml-1 text-primary-400" />
              </div>
              <span className="text-lg font-medium">Watch Our Story</span>
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60"
          >
            {[
              { value: '500+', label: 'Projects Delivered' },
              { value: '98%', label: 'Client Satisfaction' },
              { value: '50+', label: 'Team Members' },
              { value: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.6, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className="text-center group cursor-hover"
              >
                <div className="text-3xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-hover"
      >
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;