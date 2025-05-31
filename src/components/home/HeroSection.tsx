
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Calendar, Clock } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { language } = useApp();
  const [searchData, setSearchData] = useState({
    location: '',
    date: '',
    time: ''
  });

  const content = {
    en: {
      title: 'Book Your Perfect Turf',
      subtitle: 'Find and book the best turfs in Bangladesh. Join tournaments, build teams, and play the game you love.',
      searchPlaceholder: 'Search by location...',
      bookTurf: 'Book Turf',
      joinTournament: 'Join Tournament',
      findTurfs: 'Find Turfs',
      locationPlaceholder: 'Select location',
      datePlaceholder: 'Select date',
      timePlaceholder: 'Select time'
    },
    bn: {
      title: 'আপনার নিখুঁত টার্ফ বুক করুন',
      subtitle: 'বাংলাদেশের সেরা টার্ফগুলি খুঁজুন এবং বুক করুন। টুর্নামেন্টে যোগ দিন, দল গড়ুন এবং আপনার প্রিয় খেলা খেলুন।',
      searchPlaceholder: 'অবস্থান দিয়ে অনুসন্ধান করুন...',
      bookTurf: 'টার্ফ বুক করুন',
      joinTournament: 'টুর্নামেন্টে যোগ দিন',
      findTurfs: 'টার্ফ খুঁজুন',
      locationPlaceholder: 'অবস্থান নির্বাচন করুন',
      datePlaceholder: 'তারিখ নির্বাচন করুন',
      timePlaceholder: 'সময় নির্বাচন করুন'
    }
  };

  const t = content[language];

  const handleSearch = () => {
    navigate('/turfs');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Background Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-lime-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Text */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold font-playfair text-white mb-6 animate-fade-in">
            <span className="text-gradient">{t.title}</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {t.subtitle}
          </p>

          {/* Search Section */}
          <div className="glass-card p-6 sm:p-8 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white pl-10">
                    <SelectValue placeholder={t.locationPlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/20">
                    <SelectItem value="dhaka">Dhaka</SelectItem>
                    <SelectItem value="chittagong">Chittagong</SelectItem>
                    <SelectItem value="sylhet">Sylhet</SelectItem>
                    <SelectItem value="rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="khulna">Khulna</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                <Input
                  type="date"
                  className="bg-white/10 border-white/20 text-white pl-10"
                  value={searchData.date}
                  onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
                />
              </div>

              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-4 h-4" />
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white pl-10">
                    <SelectValue placeholder={t.timePlaceholder} />
                  </SelectTrigger>
                  <SelectContent className="glass-card border-white/20">
                    <SelectItem value="morning">6:00 AM - 12:00 PM</SelectItem>
                    <SelectItem value="afternoon">12:00 PM - 6:00 PM</SelectItem>
                    <SelectItem value="evening">6:00 PM - 12:00 AM</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                className="gradient-primary hover:opacity-90 transition-opacity h-11"
                onClick={handleSearch}
              >
                <Search className="mr-2 h-4 w-4" />
                {t.findTurfs}
              </Button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg"
              className="gradient-primary hover:opacity-90 transition-opacity animate-glow"
              onClick={() => navigate('/turfs')}
            >
              {t.bookTurf}
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate('/tournaments')}
            >
              {t.joinTournament}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-white/70">Active Turfs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">1000+</div>
              <div className="text-white/70">Happy Players</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100+</div>
              <div className="text-white/70">Tournaments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">25+</div>
              <div className="text-white/70">Cities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
