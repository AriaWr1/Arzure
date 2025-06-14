import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users, Sparkles, Zap } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const CTA: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: CheckCircle,
      text: 'Free consultation & project estimate',
      color: 'text-green-400',
    },
    {
      icon: Clock,
      text: '30-day money-back guarantee',
      color: 'text-blue-400',
    },
    {
      icon: Users,
      text: 'Dedicated project manager',
      color: 'text-purple-400',
    },
  ];

  const stats = [
    { value: '500+', label: 'Happy Clients' },
    { value: '1200+', label: 'Projects' },
    { value: '98%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full mix-blend-overlay filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full mix-blend-overlay filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white opacity-3 rounded-full mix-blend-overlay filter blur-2xl animate-pulse"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Ready to Transform Your Ideas?
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Ready to Start Your
            <span className="block text-yellow-300 animate-text-glow">Next Project?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Let's turn your ideas into reality. Get in touch with our team today and discover 
            how we can help accelerate your digital transformation journey.
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-center justify-center md:justify-start space-x-3 text-white/90 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 cursor-hover"
            >
              <benefit.icon className={`h-6 w-6 ${benefit.color} flex-shrink-0`} />
              <span className="text-sm md:text-base font-medium">{benefit.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Link
            to="/contact"
            className="group magnetic-button bg-white text-primary-600 px-10 py-5 rounded-full text-lg font-bold hover:bg-yellow-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center cursor-hover"
          >
            <Zap className="mr-3 h-6 w-6 group-hover:animate-pulse" />
            Start Your Project
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
          <Link
            to="/portfolio"
            className="group border-2 border-white text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105 cursor-hover"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white/80 space-y-3 mb-16"
        >
          <p className="text-sm">Or call us directly:</p>
          <p className="text-2xl font-bold text-white">+1 (555) 123-4567</p>
          <p className="text-sm">Average response time: 2 hours</p>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="pt-16 border-t border-white/20"
        >
          <p className="text-white/70 text-sm mb-8">Trusted by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 0.8, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                className="text-center group cursor-hover"
              >
                <div className="text-3xl md:text-4xl font-bold text-white group-hover:text-yellow-300 transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-white/70 group-hover:text-white/90 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;