
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TurfCard from '@/components/turfs/TurfCard';
import TurfSearch from '@/components/turfs/TurfSearch';
import TurfCategories from '@/components/turfs/TurfCategories';
import { useApp } from '@/contexts/AppContext';

const Turfs = () => {
  const { language } = useApp();
  const [searchFilters, setSearchFilters] = useState({
    type: '',
    location: '',
    date: '',
    price: ''
  });

  const content = {
    en: {
      title: 'BEST TURF BOOKING',
      subtitle: 'PLATFORM IN YOUR AREA',
      description: 'You can choose from a variety of turfs such as cricket, football, basketball, tennis, badminton and many more preferred ones for booking.',
      exploreTurfs: 'Explore best turf nearby you',
      seeAll: 'See all',
      registerTurf: 'Register your turf with us',
      registerButton: 'Register'
    },
    bn: {
      title: 'সেরা টার্ফ বুকিং',
      subtitle: 'আপনার এলাকার প্ল্যাটফর্ম',
      description: 'আপনি ক্রিকেট, ফুটবল, বাস্কেটবল, টেনিস, ব্যাডমিন্টন এবং আরও অনেক পছন্দের টার্ফ থেকে বুকিংয়ের জন্য বেছে নিতে পারেন।',
      exploreTurfs: 'আপনার কাছাকাছি সেরা টার্ফ অন্বেষণ করুন',
      seeAll: 'সব দেখুন',
      registerTurf: 'আমাদের সাথে আপনার টার্ফ নিবন্ধন করুন',
      registerButton: 'নিবন্ধন'
    }
  };

  const t = content[language];

  // Mock turf data
  const turfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      price: 50,
      rating: 4.5,
      reviews: 120,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      location: 'Gulshan, Dhaka',
      type: 'Football',
      amenities: ['Parking', 'Washroom', 'Cafeteria'],
      available: true
    },
    {
      id: 2,
      name: 'Barcelona Academy',
      price: 60,
      rating: 4.8,
      reviews: 95,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
      location: 'Dhanmondi, Dhaka',
      type: 'Football',
      amenities: ['Parking', 'Washroom', 'Equipment'],
      available: true
    },
    {
      id: 3,
      name: 'Real Madrid',
      price: 55,
      rating: 4.6,
      reviews: 87,
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop',
      location: 'Uttara, Dhaka',
      type: 'Football',
      amenities: ['Parking', 'Washroom', 'Lighting'],
      available: false
    },
    {
      id: 4,
      name: 'Chelsea United Academy',
      price: 45,
      rating: 4.3,
      reviews: 76,
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop',
      location: 'Mirpur, Dhaka',
      type: 'Football',
      amenities: ['Parking', 'Washroom'],
      available: true
    },
    {
      id: 5,
      name: 'New South Wales Academy',
      price: 50,
      rating: 4.7,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      location: 'Banani, Dhaka',
      type: 'Cricket',
      amenities: ['Parking', 'Washroom', 'Equipment'],
      available: true
    },
    {
      id: 6,
      name: 'Manchester United Academy',
      price: 65,
      rating: 4.9,
      reviews: 201,
      image: 'https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=300&fit=crop',
      location: 'Wari, Dhaka',
      type: 'Football',
      amenities: ['Parking', 'Washroom', 'Cafeteria', 'Equipment'],
      available: true
    }
  ];

  const filteredTurfs = turfs.filter(turf => {
    if (searchFilters.type && turf.type.toLowerCase() !== searchFilters.type.toLowerCase()) return false;
    if (searchFilters.location && !turf.location.toLowerCase().includes(searchFilters.location.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-96" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&h=600&fit=crop)',
        backgroundAttachment: 'fixed'
      }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t.title}<br />
              <span className="text-green-400">{t.subtitle}</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
              {t.description}
            </p>
            
            {/* Search Component */}
            <TurfSearch onSearch={setSearchFilters} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Turfs Section */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t.exploreTurfs}
          </h2>
          <button className="text-green-600 hover:text-green-700 font-medium flex items-center gap-2">
            {t.seeAll}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Turf Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredTurfs.map((turf) => (
            <TurfCard key={turf.id} turf={turf} />
          ))}
        </div>

        {/* Categories Section */}
        <TurfCategories />

        {/* Register Turf Section */}
        <section className="relative mt-16 rounded-2xl overflow-hidden bg-cover bg-center h-64" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&h=400&fit=crop)'
        }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center">
            <div className="text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                {t.registerTurf}
              </h3>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {t.registerButton}
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Turfs;
