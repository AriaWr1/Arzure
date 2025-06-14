import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Monitor, 
  Server, 
  ArrowRight,
  Check
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies.',
      features: ['React & Next.js', 'SEO Optimized', 'Mobile-First Design', 'Performance Focused'],
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps for iOS and Android.',
      features: ['React Native', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'Custom Discord bots with advanced features and integrations.',
      features: ['Custom Commands', 'Database Integration', 'Moderation Tools', 'API Integrations'],
      color: 'bg-primary-500',
      gradient: 'from-primary-500 to-purple-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Monitor,
      title: 'Custom Software',
      description: 'Tailored software solutions for your specific business needs.',
      features: ['Scalable Architecture', 'Cloud Integration', 'API Development', 'Database Design'],
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Server,
      title: 'DevOps & Hosting',
      description: 'Reliable hosting and deployment solutions for your applications.',
      features: ['CI/CD Pipelines', 'Cloud Hosting', 'Monitoring', 'Security'],
      color: 'bg-gray-700',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-primary-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive digital solutions
            that drive your business forward.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                activeService === index ? 'shadow-2xl -translate-y-2' : ''
              }`}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <service.icon className="h-6 w-6" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <Link
                to="/services"
                className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-primary-600 transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;