import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Code, Smartphone, Bot, Palette } from 'lucide-react';

const Hero: React.FC = () => {
  const floatingIcons = [
    { icon: Code, color: 'text-blue-500', delay: '0s', position: 'top-20 left-20' },
    { icon: Smartphone, color: 'text-green-500', delay: '1s', position: 'top-32 right-32' },
    { icon: Bot, color: 'text-purple-500', delay: '2s', position: 'bottom-40 left-32' },
    { icon: Palette, color: 'text-pink-500', delay: '3s', position: 'bottom-32 right-20' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-primary-50">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute hidden lg:block ${item.position} animate-bounce-gentle`}
          style={{ animationDelay: item.delay }}
        >
          <item.icon className={`h-8 w-8 ${item.color} opacity-30`} />
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by 500+ clients worldwide
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
            Crafting Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-blue-600">
              {' '}Excellence
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
            We transform ideas into exceptional digital experiences through innovative web development,
            mobile applications, and custom software solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in-up animation-delay-400">
            <Link
              to="/contact"
              className="group bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-600 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse-glow flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <button className="group flex items-center text-gray-700 hover:text-primary-500 transition-colors duration-200">
              <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center mr-3 group-hover:shadow-xl transition-shadow duration-200">
                <Play className="h-5 w-5 ml-0.5" />
              </div>
              Watch Our Story
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-sm text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;