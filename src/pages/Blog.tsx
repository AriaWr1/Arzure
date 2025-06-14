import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping the web development landscape, from AI integration to serverless architecture.',
    content: 'As we move through 2024, the web development landscape continues to evolve at a rapid pace. From the integration of artificial intelligence to the rise of serverless architecture, developers need to stay ahead of the curve...',
    author: 'Alex Rivera',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Web Development',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'AI', 'Trends', '2024'],
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building Scalable React Applications: Best Practices',
      excerpt: 'Learn essential techniques for creating maintainable and scalable React applications that can grow with your business.',
      author: 'Sarah Kim',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'React',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'JavaScript', 'Best Practices'],
    },
    {
      id: 3,
      title: 'Discord Bot Development: From Concept to Community',
      excerpt: 'A comprehensive guide to creating Discord bots that engage communities and provide valuable functionality.',
      author: 'Michael Johnson',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Discord Development',
      image: 'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Discord', 'Bot Development', 'Community'],
    },
    {
      id: 4,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first design principles in creating exceptional user experiences.',
      author: 'Emma Chen',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'UI/UX Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Mobile Design', 'UX', 'Responsive'],
    },
    {
      id: 5,
      title: 'The Complete Guide to API Integration',
      excerpt: 'Master the art of API integration with practical examples and best practices for modern web applications.',
      author: 'David Park',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Backend Development',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['API', 'Integration', 'Backend'],
    },
    {
      id: 6,
      title: 'DevOps Best Practices for Small Teams',
      excerpt: 'Implement effective DevOps practices even with limited resources and small development teams.',
      author: 'Lisa Wong',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'DevOps',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['DevOps', 'Small Teams', 'Automation'],
    },
    {
      id: 7,
      title: 'Security First: Protecting Your Web Applications',
      excerpt: 'Essential security practices every developer should implement to protect web applications from threats.',
      author: 'Chris Taylor',
      date: '2023-12-20',
      readTime: '8 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Security', 'Web Development', 'Best Practices'],
    },
  ];

  const categories = [
    'All Posts',
    'Web Development',
    'Mobile Development',
    'Discord Development',
    'UI/UX Design',
    'DevOps',
    'Security',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-primary-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights, tutorials, and industry trends from our team of experts.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Post</h2>
            <div className="w-12 h-1 bg-primary-500"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-2xl shadow-lg group">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium">
                  {featuredPost.category}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {new Date(featuredPost.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex items-center mb-6">
                <User className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-600">By {featuredPost.author}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors duration-200"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  index === 0
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4 bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary-500 transition-colors duration-200">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                    <Link
                      to={`/blog/${post.id}`}
                      className="text-primary-500 hover:text-primary-600 font-medium text-sm flex items-center group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Stay Updated with Our Latest Posts
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Subscribe to our newsletter and never miss an update on the latest development trends and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-0 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;