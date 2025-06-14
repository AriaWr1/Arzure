import React from 'react';
import { MapPin, Clock, DollarSign, Users, Heart, Zap, Target, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Join our engineering team to build cutting-edge web applications using React, Node.js, and modern technologies.',
      requirements: [
        '5+ years of full-stack development experience',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, GCP)',
        'Strong problem-solving and communication skills',
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
      ],
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$90,000 - $130,000',
      description: 'Create beautiful and intuitive user experiences for our clients\' digital products.',
      requirements: [
        '3+ years of UI/UX design experience',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio showcasing web and mobile designs',
        'Understanding of user-centered design principles',
      ],
      benefits: [
        'Creative freedom and autonomy',
        'Latest design tools and software',
        'Conference and workshop attendance',
        'Collaborative team environment',
      ],
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '$110,000 - $150,000',
      description: 'Build and maintain scalable infrastructure to support our growing client base.',
      requirements: [
        '4+ years of DevOps/Infrastructure experience',
        'Experience with Docker, Kubernetes, AWS',
        'Knowledge of CI/CD pipelines and automation',
        'Strong scripting skills (Python, Bash)',
      ],
      benefits: [
        'Remote-first culture',
        'Cutting-edge technology stack',
        'Flexible working hours',
        'Stock options',
      ],
    },
    {
      id: 4,
      title: 'Project Manager',
      department: 'Operations',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$85,000 - $115,000',
      description: 'Lead client projects from conception to delivery, ensuring quality and timeline adherence.',
      requirements: [
        '3+ years of project management experience',
        'Experience with Agile/Scrum methodologies',
        'Strong communication and leadership skills',
        'PMP or similar certification preferred',
      ],
      benefits: [
        'Leadership development opportunities',
        'Direct client interaction',
        'Performance bonuses',
        'Team building events',
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance plus wellness programs.',
    },
    {
      icon: Zap,
      title: 'Growth & Learning',
      description: '$2,000 annual learning budget for courses, conferences, and certifications.',
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and social activities.',
    },
    {
      icon: Target,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO policy.',
    },
    {
      icon: Coffee,
      title: 'Office Perks',
      description: 'Free meals, snacks, coffee, and a fully stocked kitchen in our SF office.',
    },
    {
      icon: DollarSign,
      title: 'Compensation',
      description: 'Competitive salaries, equity packages, and performance-based bonuses.',
    },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We embrace new technologies and creative solutions to solve complex problems.',
    },
    {
      title: 'Client Success',
      description: 'Our clients\' success is our success. We go above and beyond to deliver exceptional results.',
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and encourage continuous skill development.',
    },
    {
      title: 'Transparency',
      description: 'Open communication and honest feedback create a foundation of trust.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="text-primary-500">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Be part of a dynamic team that's shaping the future of digital experiences. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Work at Arzure?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Arzure, we believe that great work comes from great people. We've built a culture 
                that values creativity, collaboration, and continuous growth. Our team is our greatest 
                asset, and we invest in creating an environment where everyone can thrive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                From flexible work arrangements to professional development opportunities, we provide 
                the support and resources you need to advance your career while making a meaningful 
                impact on our clients' success.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Team collaboration"
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Office environment"
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>

          {/* Company Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer comprehensive benefits and perks designed to support your well-being 
              and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-500 mb-6">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our current job openings and find the perfect role to advance your career.
            </p>
          </div>

          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-1" />
                        {position.salary}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 lg:mt-0 bg-primary-500 text-white px-6 py-3 rounded-full font-medium hover:bg-primary-600 transition-colors duration-200 text-center"
                  >
                    Apply Now
                  </Link>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{position.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">What We Offer:</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-600">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Perfect Role?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            We're always looking for talented individuals to join our team. 
            Send us your resume and let us know how you'd like to contribute to Arzure.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;