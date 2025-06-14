import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight, Eye, Star } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'discord', label: 'Discord Bots' },
    { id: 'design', label: 'UI/UX Design' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      featured: true,
      stats: { views: '2.5K', stars: '4.9' },
      links: { live: '#', github: '#' },
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      category: 'mobile',
      description: 'Cross-platform mobile app for fitness enthusiasts with workout tracking and social features.',
      image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Redux'],
      featured: true,
      stats: { views: '1.8K', stars: '4.8' },
      links: { live: '#', github: '#' },
    },
    {
      id: 3,
      title: 'Community Management Bot',
      category: 'discord',
      description: 'Advanced Discord bot with moderation, economy, and entertainment features.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Discord.js', 'Node.js', 'PostgreSQL'],
      featured: false,
      stats: { views: '3.2K', stars: '4.7' },
      links: { live: '#', github: '#' },
    },
    {
      id: 4,
      title: 'SaaS Dashboard Design',
      category: 'design',
      description: 'Clean and intuitive dashboard design for a project management SaaS platform.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      featured: false,
      stats: { views: '1.5K', stars: '4.9' },
      links: { live: '#', github: '#' },
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      category: 'web',
      description: 'Comprehensive real estate platform with property listings and virtual tours.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Mapbox'],
      featured: true,
      stats: { views: '2.1K', stars: '4.8' },
      links: { live: '#', github: '#' },
    },
    {
      id: 6,
      title: 'Recipe Sharing App',
      category: 'mobile',
      description: 'Social cooking app where users can share recipes and connect with fellow food enthusiasts.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Cloud Functions'],
      featured: false,
      stats: { views: '1.9K', stars: '4.6' },
      links: { live: '#', github: '#' },
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-dark-900 to-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-dark border border-primary-500/30 text-primary-300 text-sm font-medium mb-6">
            <Eye className="w-4 h-4 mr-2" />
            Our Work
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Featured <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover some of our recent projects and see how we bring ideas to life
            through innovative technology and creative design.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-hover ${
                activeFilter === filter.id
                  ? 'bg-gradient-purple text-white shadow-2xl shadow-primary-500/25'
                  : 'glass-dark text-gray-300 hover:text-primary-400 border border-gray-700 hover:border-primary-500/50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid with Stacking Effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="stacking-cards mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className={`stacking-card group glass-dark rounded-3xl overflow-hidden border border-gray-800 hover:border-primary-500/50 transition-all duration-500 cursor-hover card-3d ${
                  project.featured ? 'ring-2 ring-primary-500/20' : ''
                }`}
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-purple px-3 py-1 rounded-full text-xs font-semibold text-white">
                      Featured
                    </div>
                  )}

                  {/* Stats */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="glass-dark px-2 py-1 rounded-full text-xs text-white flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {project.stats.views}
                    </div>
                    <div className="glass-dark px-2 py-1 rounded-full text-xs text-white flex items-center">
                      <Star className="w-3 h-3 mr-1 text-yellow-400" />
                      {project.stats.stars}
                    </div>
                  </div>
                  
                  {/* Overlay Links */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.links.live}
                      className="p-3 glass-dark rounded-full hover:bg-primary-500 hover:text-white transition-colors duration-200 cursor-hover"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={project.links.github}
                      className="p-3 glass-dark rounded-full hover:bg-gray-700 hover:text-white transition-colors duration-200 cursor-hover"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center text-primary-400 hover:text-primary-300 font-medium text-sm group-hover:translate-x-2 transition-all duration-300"
                  >
                    View Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center magnetic-button bg-gradient-purple text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 cursor-hover"
          >
            View All Projects
            <ArrowRight className="ml-3 h-6 w-6" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;