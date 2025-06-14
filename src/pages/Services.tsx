import React from 'react';
import { 
  Code, 
  Smartphone, 
  Bot, 
  Palette, 
  Monitor, 
  Server,
  Check,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
      features: [
        'React & Next.js Development',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps',
        'API Integration',
        'SEO Optimization'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL'],
      pricing: 'Starting at $2,500',
      color: 'bg-blue-500',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile apps for iOS and Android devices.',
      features: [
        'React Native Development',
        'Native iOS & Android Apps',
        'Cross-platform Solutions',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      pricing: 'Starting at $5,000',
      color: 'bg-green-500',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Bot,
      title: 'Discord Bot Development',
      description: 'Custom Discord bots with advanced features and seamless integrations.',
      features: [
        'Custom Command Systems',
        'Moderation & Auto-mod',
        'Music & Entertainment',
        'Database Integration',
        'API Integrations',
        'Server Management Tools'
      ],
      technologies: ['Discord.js', 'Node.js', 'Python', 'PostgreSQL', 'Redis'],
      pricing: 'Starting at $800',
      color: 'bg-primary-500',
      gradient: 'from-primary-500 to-purple-500',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that enhance user experience and engagement.',
      features: [
        'User Experience Research',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Responsive Design',
        'Usability Testing',
        'Brand Identity Design'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle'],
      pricing: 'Starting at $1,500',
      color: 'bg-pink-500',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Monitor,
      title: 'Custom Software Development',
      description: 'Tailored software solutions designed specifically for your business needs.',
      features: [
        'Enterprise Applications',
        'SaaS Platform Development',
        'Integration Solutions',
        'Legacy System Modernization',
        'Cloud-based Solutions',
        'Scalable Architecture'
      ],
      technologies: ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes'],
      pricing: 'Starting at $10,000',
      color: 'bg-orange-500',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Server,
      title: 'DevOps & Cloud Services',
      description: 'Reliable hosting, deployment, and infrastructure management solutions.',
      features: [
        'CI/CD Pipeline Setup',
        'Cloud Infrastructure',
        'Performance Monitoring',
        'Security Implementation',
        'Backup & Recovery',
        'Auto-scaling Solutions'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform'],
      pricing: 'Starting at $1,200/month',
      color: 'bg-gray-700',
      gradient: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From concept to deployment, we provide comprehensive digital solutions 
              that drive your business forward with cutting-edge technology and exceptional design.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                <div className="relative p-8 lg:p-10">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-white mb-4 group-hover:scale-110 transition-transform duration-200`}>
                        <service.icon className="h-8 w-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-500 transition-colors duration-200">
                        {service.title}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-500">{service.pricing}</div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors duration-200 group-hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We follow a proven methodology to ensure successful project delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: 'Discovery', description: 'Understanding your requirements and goals' },
              { title: 'Planning', description: 'Creating detailed project roadmap and timeline' },
              { title: 'Development', description: 'Building your solution with regular updates' },
              { title: 'Launch', description: 'Testing, deployment, and ongoing support' },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;