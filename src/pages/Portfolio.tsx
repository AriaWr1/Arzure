import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'web', label: 'Web Development', count: 5 },
    { id: 'mobile', label: 'Mobile Apps', count: 3 },
    { id: 'discord', label: 'Discord Bots', count: 2 },
    { id: 'design', label: 'UI/UX Design', count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechCommerce Platform',
      category: 'web',
      description: 'A comprehensive e-commerce platform built for a leading technology retailer, featuring advanced search, real-time inventory, and seamless checkout experience.',
      longDescription: 'This project involved creating a full-scale e-commerce solution from the ground up. We implemented advanced product filtering, real-time inventory management, secure payment processing, and a comprehensive admin dashboard. The platform handles over 10,000 daily transactions and has increased conversion rates by 35%.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      client: 'TechCorp Inc.',
      duration: '4 months',
      year: '2024',
      results: [
        '35% increase in conversion rate',
        '10,000+ daily transactions',
        '99.9% uptime achieved',
        '40% faster page load times'
      ],
      links: {
        live: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 2,
      title: 'FitTracker Mobile App',
      category: 'mobile',
      description: 'Cross-platform fitness tracking application with social features, workout plans, and progress analytics for health enthusiasts.',
      longDescription: 'A comprehensive fitness tracking application that helps users monitor their workouts, nutrition, and progress. Features include custom workout plans, social challenges, progress photos, and detailed analytics. The app has been downloaded over 50,000 times and maintains a 4.8-star rating.',
      image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      client: 'FitLife Solutions',
      duration: '6 months',
      year: '2024',
      results: [
        '50,000+ downloads',
        '4.8-star app store rating',
        '85% user retention rate',
        'Featured in App Store'
      ],
      links: {
        live: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 3,
      title: 'CommunityBot Pro',
      category: 'discord',
      description: 'Advanced Discord bot with moderation tools, custom commands, economy system, and entertainment features for large gaming communities.',
      longDescription: 'A sophisticated Discord bot designed for large gaming communities. Features include advanced moderation tools, custom command system, virtual economy, mini-games, music streaming, and detailed analytics. Currently serving over 500 Discord servers with 100,000+ active users.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Discord.js', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
      client: 'Gaming Community Network',
      duration: '3 months',
      year: '2024',
      results: [
        '500+ Discord servers',
        '100,000+ active users',
        '99.9% uptime maintained',
        '24/7 automated moderation'
      ],
      links: {
        live: '#',
        github: '#',
      },
      featured: false,
    },
    {
      id: 4,
      title: 'ProjectFlow Dashboard',
      category: 'design',
      description: 'Intuitive project management dashboard design with clean interface, advanced filtering, and collaborative features.',
      longDescription: 'A comprehensive UI/UX design project for a project management SaaS platform. The design focuses on usability, productivity, and collaboration. Features include drag-and-drop task management, team collaboration tools, time tracking, and detailed reporting. The design system includes 200+ components.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Adobe XD', 'Principle', 'InVision'],
      client: 'ProductivityPro',
      duration: '2 months',
      year: '2024',
      results: [
        '200+ design components',
        '40% improvement in UX metrics',
        '90% user satisfaction score',
        'Design system adopted company-wide'
      ],
      links: {
        live: '#',
        github: '#',
      },
      featured: false,
    },
    {
      id: 5,
      title: 'RealEstate Pro',
      category: 'web',
      description: 'Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.',
      longDescription: 'A full-featured real estate platform connecting buyers, sellers, and agents. Features include advanced property search, virtual 3D tours, mortgage calculations, document management, and CRM integration. The platform handles over 5,000 property listings and processes 1,000+ inquiries monthly.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Mapbox', 'AWS'],
      client: 'Metropolitan Realty',
      duration: '5 months',
      year: '2023',
      results: [
        '5,000+ property listings',
        '1,000+ monthly inquiries',
        '25% faster property sales',
        '95% user satisfaction'
      ],
      links: {
        live: '#',
        github: '#',
      },
      featured: true,
    },
    {
      id: 6,
      title: 'ChefShare Recipe App',
      category: 'mobile',
      description: 'Social cooking application for recipe sharing, meal planning, and connecting with fellow food enthusiasts worldwide.',
      longDescription: 'A social cooking platform that brings food enthusiasts together. Users can share recipes, create meal plans, follow their favorite chefs, and discover new cuisines. The app includes video tutorials, ingredient lists, nutritional information, and a built-in shopping list feature.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Cloud Functions', 'Algolia'],
      client: 'Culinary Creations Ltd.',
      duration: '4 months',
      year: '2023',
      results: [
        '25,000+ registered users',
        '10,000+ shared recipes',
        '4.7-star app rating',
        'Featured in Google Play'
      ],
      links: {
        live: '#',
        github: '#',
      },
      featured: false,
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our latest work and see how we've helped businesses across various 
              industries achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredProjects.slice(0, 2).map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                </div>
                <div className="mt-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.year}
                    </span>
                    <span className="flex items-center">
                      <Tag className="h-4 w-4 mr-1" />
                      {project.client}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {project.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="text-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full inline-block mr-2"></div>
                        {result}
                      </div>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.links.live}
                      className="flex items-center text-primary-500 hover:text-primary-600 font-medium"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">All Projects</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeFilter === filter.id
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                }`}
              >
                <span>{filter.label}</span>
                <span className="bg-white bg-opacity-20 px-2 py-0.5 rounded-full text-xs">
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.links.live}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-primary-500 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-900 hover:text-white transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary-500 bg-primary-50 px-2 py-1 rounded-full">
                      {project.category.toUpperCase()}
                    </span>
                    <span className="text-xs text-gray-600">{project.year}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-600">
                        <div className="font-medium">{project.client}</div>
                        <div>{project.duration}</div>
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.links.live}
                          className="text-primary-500 hover:text-primary-600 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                        <a
                          href={project.links.github}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;