import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Monitor, 
  Server, 
  ArrowRight,
  Check,
  Zap
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites built with cutting-edge technologies and exceptional performance.',
      features: ['React & Next.js', 'SEO Optimized', 'Mobile-First Design', 'Performance Focused'],
      color: 'from-blue-500 to-cyan-500',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
      hoverColor: 'hover:border-blue-500/50',
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that deliver seamless user experiences.',
      features: ['React Native', 'Native Performance', 'App Store Ready', 'Push Notifications'],
      color: 'from-green-500 to-emerald-500',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20',
      hoverColor: 'hover:border-green-500/50',
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'Custom Discord bots with advanced features and seamless integrations.',
      features: ['Custom Commands', 'Database Integration', 'Moderation Tools', 'API Integrations'],
      color: 'from-primary-500 to-purple-500',
      iconColor: 'text-primary-400',
      borderColor: 'border-primary-500/20',
      hoverColor: 'hover:border-primary-500/50',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      color: 'from-pink-500 to-rose-500',
      iconColor: 'text-pink-400',
      borderColor: 'border-pink-500/20',
      hoverColor: 'hover:border-pink-500/50',
    },
    {
      icon: Monitor,
      title: 'Custom Software',
      description: 'Tailored software solutions designed specifically for your unique business needs.',
      features: ['Scalable Architecture', 'Cloud Integration', 'API Development', 'Database Design'],
      color: 'from-orange-500 to-yellow-500',
      iconColor: 'text-orange-400',
      borderColor: 'border-orange-500/20',
      hoverColor: 'hover:border-orange-500/50',
    },
    {
      icon: Server,
      title: 'DevOps & Hosting',
      description: 'Reliable hosting and deployment solutions with automated scaling and monitoring.',
      features: ['CI/CD Pipelines', 'Cloud Hosting', 'Monitoring', 'Security'],
      color: 'from-gray-600 to-gray-800',
      iconColor: 'text-gray-400',
      borderColor: 'border-gray-500/20',
      hoverColor: 'hover:border-gray-500/50',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-dark border border-primary-500/30 text-primary-300 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide comprehensive digital solutions
            that drive your business forward with cutting-edge technology.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative p-8 rounded-3xl glass-dark border ${service.borderColor} ${service.hoverColor} hover:shadow-2xl transition-all duration-500 cursor-hover card-3d`}
              onMouseEnter={() => setActiveService(index)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                    <service.icon className={`h-8 w-8 ${service.iconColor}`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                    <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <Link
                to="/services"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium text-sm group-hover:translate-x-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.color} opacity-5`}></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link
            to="/services"
            className="inline-flex items-center magnetic-button bg-gradient-purple text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 cursor-hover"
          >
            View All Services
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;