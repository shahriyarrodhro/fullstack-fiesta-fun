
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';

const HeroSection = () => {
  const navigate = useNavigate();
  const { language } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [showResults, setShowResults] = useState(false);

  const content = {
    en: {
      badge: '#1 Sports Booking Platform',
      title: 'Choose Your Turf.',
      subtitle: 'Play Your Game.',
      description: 'Book premium turfs across Bangladesh. Join tournaments. Connect with players. All in one platform.',
      searchPlaceholder: 'Search turfs, location...',
      bookNow: 'Book Now',
      tournaments: 'Tournaments',
      location: 'All Areas',
      sport: 'All Types',
      search: 'Search'
    },
    bn: {
      badge: '#১ ক্রীড়া বুকিং প্ল্যাটফর্ম',
      title: 'আপনার টার্ফ বেছে নিন।',
      subtitle: 'আপনার খেলা খেলুন।',
      description: 'বাংলাদেশ জুড়ে প্রিমিয়াম টার্ফ বুক করুন। টুর্নামেন্টে যোগ দিন। খেলোয়াড়দের সাথে সংযুক্ত হন। সব এক প্ল্যাটফর্মে।',
      searchPlaceholder: 'টার্ফ, অবস্থান খুঁজুন...',
      bookNow: 'এখনই বুক করুন',
      tournaments: 'টুর্নামেন্ট',
      location: 'সব এলাকা',
      sport: 'সব ধরন',
      search: 'অনুসন্ধান'
    }
  };

  const t = content[language];

  // Mock turfs for live search
  const mockTurfs = [
    { id: 1, name: 'Champions Arena', location: 'Dhanmondi, Dhaka', price: 2500 },
    { id: 2, name: 'Victory Ground', location: 'Gulshan, Dhaka', price: 1800 },
    { id: 3, name: 'Elite Football Hub', location: 'Banani, Dhaka', price: 4500 }
  ];

  const filteredTurfs = mockTurfs.filter(turf => 
    turf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    turf.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    navigate(`/turfs?q=${searchQuery}&location=${selectedLocation}&sport=${selectedSport}`);
  };

  const featuredTurfs = [
    {
      id: 1,
      name: 'Champions Arena',
      location: 'Dhanmondi, Dhaka',
      price: 2500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Victory Ground', 
      location: 'Gulshan, Dhaka',
      price: 1800,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full text-green-600 text-sm font-medium mb-6">
                🏆 {t.badge}
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                {t.title}<br/>
                <span className="text-green-500">{t.subtitle}</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {t.description}
              </p>

              {/* Search Bar */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg mb-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setShowResults(e.target.value.length > 0);
                      }}
                      className="pl-10 h-12 border-gray-200 focus:border-green-500"
                    />
                    
                    {/* Live Search Results */}
                    {showResults && searchQuery && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg mt-1 z-50">
                        {filteredTurfs.length > 0 ? (
                          filteredTurfs.map(turf => (
                            <div 
                              key={turf.id}
                              className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                              onClick={() => {
                                setSearchQuery(turf.name);
                                setShowResults(false);
                              }}
                            >
                              <div className="font-medium text-gray-900">{turf.name}</div>
                              <div className="text-sm text-gray-500">{turf.location} • ৳{turf.price}/hr</div>
                            </div>
                          ))
                        ) : (
                          <div className="p-3 text-gray-500">No turfs found</div>
                        )}
                      </div>
                    )}
                  </div>

                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="h-12 border-gray-200">
                      <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                      <SelectValue placeholder={t.location} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-areas">All Areas</SelectItem>
                      <SelectItem value="dhanmondi">Dhanmondi</SelectItem>
                      <SelectItem value="gulshan">Gulshan</SelectItem>
                      <SelectItem value="banani">Banani</SelectItem>
                      <SelectItem value="uttara">Uttara</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={selectedSport} onValueChange={setSelectedSport}>
                    <SelectTrigger className="h-12 border-gray-200">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <SelectValue placeholder={t.sport} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-types">All Types</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="cricket">Cricket</SelectItem>
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                    </SelectContent>
                  </Select>

                  <Button 
                    onClick={handleSearch}
                    className="h-12 bg-green-500 hover:bg-green-600 text-white font-medium"
                  >
                    {t.search}
                  </Button>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  className="bg-black hover:bg-gray-800 text-white px-8 h-12"
                  onClick={() => navigate('/turfs')}
                >
                  {t.bookNow}
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 h-12"
                  onClick={() => navigate('/tournaments')}
                >
                  {t.tournaments}
                </Button>
              </div>
            </div>

            {/* Right Content - Featured Turfs */}
            <div className="space-y-4">
              <div className="text-right mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">TurfMaster</h3>
                <p className="text-gray-600">Find & Book Turfs</p>
              </div>
              
              {featuredTurfs.map((turf, index) => (
                <div key={turf.id} className="bg-white rounded-2xl border border-gray-200 p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex items-center gap-4">
                    <img 
                      src={turf.image} 
                      alt={turf.name}
                      className="w-16 h-16 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{turf.name}</h4>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {turf.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">৳{turf.price}/hr</div>
                      <div className="text-sm text-gray-500">⭐ {turf.rating}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Turfs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Nearby Turfs</h2>
          <p className="text-center text-gray-600 mb-12">Discover premium turfs in your area and book instantly</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredTurfs.concat([{
              id: 3,
              name: 'Elite Football Hub',
              location: 'Banani, Dhaka',
              price: 4500,
              rating: 4.9,
              image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop'
            }]).map((turf) => (
              <div key={turf.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Available
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold">
                    ৳{turf.price}/hr
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{turf.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {turf.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-medium">{turf.rating}</span>
                    </div>
                    <Button 
                      size="sm" 
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => navigate(`/turf/${turf.id}`)}
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              className="border-gray-300"
              onClick={() => navigate('/turfs')}
            >
              View All Turfs →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
