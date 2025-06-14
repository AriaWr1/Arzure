import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';

const CTA: React.FC = () => {
  const benefits = [
    {
      icon: CheckCircle,
      text: 'Free consultation & project estimate',
    },
    {
      icon: Clock,
      text: '30-day money-back guarantee',
    },
    {
      icon: Users,
      text: 'Dedicated project manager',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-500 via-primary-600 to-purple-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full mix-blend-overlay filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full mix-blend-overlay filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block text-yellow-300">Next Project?</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Let's turn your ideas into reality. Get in touch with our team today and discover 
            how we can help accelerate your digital transformation journey.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start space-x-3 text-white/90">
              <benefit.icon className="h-5 w-5 text-yellow-300 flex-shrink-0" />
              <span className="text-sm md:text-base">{benefit.text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            to="/contact"
            className="group bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-yellow-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <Link
            to="/portfolio"
            className="group border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 hover:scale-105"
          >
            View Our Work
          </Link>
        </div>

        {/* Contact Info */}
        <div className="text-white/80 space-y-2">
          <p className="text-sm">Or call us directly:</p>
          <p className="text-xl font-semibold text-white">+1 (555) 123-4567</p>
          <p className="text-sm">Average response time: 2 hours</p>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-4">Trusted by companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-xs text-white/70">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">1200+</div>
              <div className="text-xs text-white/70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-xs text-white/70">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/70">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;