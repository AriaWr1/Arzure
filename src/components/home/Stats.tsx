import React, { useEffect, useState } from 'react';
import { Users, Trophy, Clock, Star } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Trophy,
      value: 1200,
      suffix: '+',
      label: 'Projects Completed',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: Clock,
      value: 50000,
      suffix: '+',
      label: 'Hours of Development',
      color: 'text-primary-500',
      bgColor: 'bg-primary-50',
    },
    {
      icon: Star,
      value: 98,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, []);

  const CountUpNumber: React.FC<{ value: number; suffix: string; isVisible: boolean }> = ({
    value,
    suffix,
    isVisible,
  }) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCurrentValue(value);
          clearInterval(timer);
        } else {
          setCurrentValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, [isVisible, value]);

    return (
      <span>
        {currentValue.toLocaleString()}
        {suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Numbers That <span className="text-primary-500">Speak</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record demonstrates our commitment to excellence and client success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.bgColor} mb-6`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>

              {/* Value */}
              <div className="text-4xl font-bold text-gray-900 mb-2">
                <CountUpNumber value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
              </div>

              {/* Label */}
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Arzure?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We combine technical expertise with creative vision to deliver solutions that not only
              meet your requirements but exceed your expectations. Our commitment to quality and
              client satisfaction has made us a trusted partner for businesses worldwide.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                Expert Development Team
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                Agile Development Process
              </div>
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                24/7 Support & Maintenance
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;