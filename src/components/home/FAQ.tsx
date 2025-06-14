import React, { useState, useRef } from 'react';
import { ChevronDown, Search, Filter, MessageCircle } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'technical', label: 'Technical' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'process', label: 'Process' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'general',
      question: 'What services does Arzure offer?',
      answer: 'We offer comprehensive digital solutions including web development, mobile app development, Discord bot creation, UI/UX design, custom software development, and DevOps services. Our team specializes in modern technologies and delivers production-ready solutions.',
    },
    {
      id: 2,
      category: 'process',
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity and scope. Web development projects typically take 2-4 months, mobile apps 3-6 months, and Discord bots 2-8 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
    },
    {
      id: 3,
      category: 'technical',
      question: 'What technologies do you use?',
      answer: 'We use cutting-edge technologies including React, Next.js, Node.js, React Native, Flutter, Discord.js, TypeScript, Python, and various cloud platforms like AWS and Firebase. We choose the best technology stack based on your project requirements.',
    },
    {
      id: 4,
      category: 'pricing',
      question: 'How do you price your projects?',
      answer: 'Our pricing is based on project scope, complexity, and timeline. We offer transparent, fixed-price quotes after understanding your requirements. We also provide flexible payment plans and ensure no hidden costs throughout the development process.',
    },
    {
      id: 5,
      category: 'general',
      question: 'Do you provide ongoing support after launch?',
      answer: 'Yes! We offer comprehensive support packages including bug fixes, security updates, feature enhancements, and technical support. Our support plans are tailored to your specific needs and budget, ensuring your project continues to perform optimally.',
    },
    {
      id: 6,
      category: 'process',
      question: 'What is your development process?',
      answer: 'We follow an agile development methodology with regular check-ins and updates. Our process includes discovery, planning, design, development, testing, deployment, and ongoing support. You\'ll have full visibility into the progress and can provide feedback at every stage.',
    },
    {
      id: 7,
      category: 'technical',
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We frequently collaborate with in-house teams and other vendors. We can integrate seamlessly into your existing workflow, use your preferred communication tools, and adapt to your development processes.',
    },
    {
      id: 8,
      category: 'pricing',
      question: 'Do you offer maintenance packages?',
      answer: 'Yes, we offer various maintenance packages ranging from basic monitoring and updates to comprehensive support with feature additions. Our maintenance plans ensure your application stays secure, updated, and performing at its best.',
    },
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-b from-black to-dark-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full glass-dark border border-primary-500/30 text-primary-300 text-sm font-medium mb-6">
            <MessageCircle className="w-4 h-4 mr-2" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Get quick answers to common questions about our services and process.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass-dark border border-gray-700 rounded-2xl text-white placeholder-gray-400 focus:border-primary-500 focus:outline-none transition-colors duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-hover ${
                  activeCategory === category.id
                    ? 'bg-gradient-purple text-white shadow-lg'
                    : 'glass-dark text-gray-300 hover:text-primary-400 border border-gray-700 hover:border-primary-500/50'
                }`}
              >
                <Filter className="w-4 h-4 mr-2 inline" />
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          {filteredFAQs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="glass-dark border border-gray-800 rounded-2xl overflow-hidden hover:border-primary-500/50 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300 cursor-hover"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-primary-400 transition-transform duration-300 flex-shrink-0 ${
                    activeIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-gray-800">
                      <div className="pt-4">
                        {faq.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* No Results */}
        {filteredFAQs.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No questions found matching your search.</p>
              <p className="text-sm">Try adjusting your search terms or category filter.</p>
            </div>
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 p-8 glass-dark rounded-3xl border border-primary-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center magnetic-button bg-gradient-purple text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-primary-500/25 transition-all duration-300 cursor-hover"
          >
            Contact Support
            <MessageCircle className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;