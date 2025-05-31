
import React from 'react';
import { useApp } from '@/contexts/AppContext';

const TurfCategories = () => {
  const { language } = useApp();

  const content = {
    en: {
      title: 'Turf category',
      categories: [
        { name: 'Football', icon: '⚽' },
        { name: 'Cricket', icon: '🏏' },
        { name: 'Volleyball', icon: '🏐' },
        { name: 'Badminton', icon: '🏸' }
      ]
    },
    bn: {
      title: 'টার্ফ ক্যাটেগরি',
      categories: [
        { name: 'ফুটবল', icon: '⚽' },
        { name: 'ক্রিকেট', icon: '🏏' },
        { name: 'ভলিবল', icon: '🏐' },
        { name: 'ব্যাডমিন্টন', icon: '🏸' }
      ]
    }
  };

  const t = content[language];

  return (
    <section className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        {t.title}
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {t.categories.map((category, index) => (
          <div 
            key={index}
            className="bg-green-600 hover:bg-green-700 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
              {category.icon}
            </div>
            <h3 className="text-white font-semibold text-lg">
              {category.name}
            </h3>
            <div className="mt-4">
              <svg 
                className="w-6 h-6 text-white mx-auto opacity-70 group-hover:opacity-100 transition-opacity" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TurfCategories;
