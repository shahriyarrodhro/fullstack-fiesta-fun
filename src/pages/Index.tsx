
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Trophy, 
  Star, 
  Search,
  ArrowRight,
  Play,
  Calendar,
  Clock,
  CheckCircle,
  Phone,
  Mail,
  Shield,
  Target,
  Zap
} from 'lucide-react';

const Index = () => {
  const { language } = useApp();
  const navigate = useNavigate();

  const content = {
    en: {
      hero: {
        title: 'Find Your Perfect Turf',
        subtitle: 'Smart Search. Trusted Results.',
        description: 'Everything you need to discover, explore and book the perfect turf for your game.',
        searchPlaceholder: 'Search location, turf name...',
        bookNow: 'Book Now',
        explore: 'Explore Turfs'
      },
      stats: {
        satisfaction: '100%',
        satisfactionLabel: 'Customer Satisfaction',
        turfs: '600+',
        turfsLabel: 'Premium Turfs',
        bookings: '150+',
        bookingsLabel: 'Daily Bookings',
        cities: '50+',
        citiesLabel: 'Cities Covered'
      },
      featured: {
        title: 'Premium Turfs & Venues',
        subtitle: 'Discover top-rated sports facilities in your area',
        viewAll: 'View All Turfs'
      },
      explore: {
        title: 'Explore the Best Sports Venues',
        subtitle: 'Find premium turfs and facilities near you'
      },
      properties: {
        title: 'Find The Perfect Turf',
        subtitle: 'We provide everything you need for your game'
      },
      newsletter: {
        title: 'Stay Updated with Latest Venues',
        placeholder: 'Enter your email'
      }
    },
    bn: {
      hero: {
        title: 'আপনার নিখুঁত টার্ফ খুঁজুন',
        subtitle: 'স্মার্ট অনুসন্ধান। বিশ্বস্ত ফলাফল।',
        description: 'আপনার খেলার জন্য নিখুঁত টার্ফ আবিষ্কার, অন্বেষণ এবং বুক করার জন্য আপনার প্রয়োজনীয় সবকিছু।',
        searchPlaceholder: 'অবস্থান, টার্ফের নাম অনুসন্ধান করুন...',
        bookNow: 'এখনই বুক করুন',
        explore: 'টার্ফ অন্বেষণ করুন'
      },
      stats: {
        satisfaction: '১০০%',
        satisfactionLabel: 'গ্রাহক সন্তুষ্টি',
        turfs: '৬০০+',
        turfsLabel: 'প্রিমিয়াম টার্ফ',
        bookings: '১৫০+',
        bookingsLabel: 'দৈনিক বুকিং',
        cities: '৫০+',
        citiesLabel: 'শহর কভার'
      },
      featured: {
        title: 'প্রিমিয়াম টার্ফ ও ভেন্যু',
        subtitle: 'আপনার এলাকায় শীর্ষ রেটেড খেলার সুবিধা আবিষ্কার করুন',
        viewAll: 'সব টার্ফ দেখুন'
      },
      explore: {
        title: 'সেরা খেলার ভেন্যু অন্বেষণ করুন',
        subtitle: 'আপনার কাছাকাছি প্রিমিয়াম টার্ফ এবং সুবিধা খুঁজুন'
      },
      properties: {
        title: 'নিখুঁত টার্ফ খুঁজুন',
        subtitle: 'আপনার খেলার জন্য প্রয়োজনীয় সবকিছু আমরা প্রদান করি'
      },
      newsletter: {
        title: 'সর্বশেষ ভেন্যুর আপডেট পান',
        placeholder: 'আপনার ইমেইল দিন'
      }
    }
  };

  const t = content[language] || content.en;

  const featuredTurfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      location: 'Gulshan, Dhaka',
      price: 2500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=600&h=400&fit=crop',
      type: 'Football',
      available: true,
      features: ['Floodlights', 'Parking', 'Changing Rooms']
    },
    {
      id: 2,
      name: 'Barcelona Academy', 
      location: 'Dhanmondi, Dhaka',
      price: 3000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
      type: 'Football',
      available: true,
      features: ['Premium Grass', 'Cafeteria', 'Equipment']
    },
    {
      id: 3,
      name: 'Elite Sports Complex',
      location: 'Banani, Dhaka',
      price: 4500,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=400&fit=crop',
      type: 'Multi-Sport',
      available: true,
      features: ['Multiple Courts', 'Air Conditioning', 'Pro Shop']
    },
    {
      id: 4,
      name: 'Champions Ground',
      location: 'Uttara, Dhaka',
      price: 2200,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop',
      type: 'Football',
      available: false,
      features: ['Natural Grass', 'Spectator Seating', 'Washrooms']
    },
    {
      id: 5,
      name: 'Victory Sports Hub',
      location: 'Mirpur, Dhaka',
      price: 3500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      type: 'Cricket',
      available: true,
      features: ['Indoor Nets', 'Coaching Available', 'Equipment Rental']
    },
    {
      id: 6,
      name: 'Royal Tennis Club',
      location: 'Gulshan, Dhaka',
      price: 4000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=600&h=400&fit=crop',
      type: 'Tennis',
      available: true,
      features: ['Clay Courts', 'Pro Shop', 'Lounge Area']
    }
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: 'Dhaka Premier League',
      startDate: '2024-02-15',
      prize: '50,000',
      teams: 16,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=250&fit=crop',
      type: 'Football',
      status: 'Registration Open',
      location: 'Gulshan Sports Complex'
    },
    {
      id: 2,
      name: 'Cricket Championship',
      startDate: '2024-02-20',
      prize: '75,000',
      teams: 12,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop',
      type: 'Cricket',
      status: 'Registration Open',
      location: 'Sher-e-Bangla Stadium'
    },
    {
      id: 3,
      name: 'Basketball League',
      startDate: '2024-03-01',
      prize: '30,000',
      teams: 8,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop',
      type: 'Basketball',
      status: 'Coming Soon',
      location: 'National Sports Complex'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&h=1080&fit=crop)'
      }}>
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-medium">
              {t.hero.subtitle}
            </p>
            <p className="text-lg mb-8 opacity-90">
              {t.hero.description}
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 border border-white/20">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input 
                    placeholder={t.hero.searchPlaceholder}
                    className="pl-10 h-12 bg-white/90 border-0 text-gray-900"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 h-12 px-8"
                  onClick={() => navigate('/turfs')}
                >
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 h-12 px-8"
                onClick={() => navigate('/turfs')}
              >
                {t.hero.explore}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 h-12 px-8"
                onClick={() => navigate('/tournaments')}
              >
                View Tournaments
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.satisfaction}</div>
              <div className="text-gray-600">{t.stats.satisfactionLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.turfs}</div>
              <div className="text-gray-600">{t.stats.turfsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.bookings}</div>
              <div className="text-gray-600">{t.stats.bookingsLabel}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{t.stats.cities}</div>
              <div className="text-gray-600">{t.stats.citiesLabel}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Turfs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {t.featured.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                {t.featured.subtitle}
              </p>
            </div>
            <Button 
              variant="outline" 
              className="hidden md:flex items-center gap-2"
              onClick={() => navigate('/turfs')}
            >
              {t.featured.viewAll}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredTurfs.slice(0, 3).map((turf) => (
              <Card 
                key={turf.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm cursor-pointer"
                onClick={() => navigate(`/turf/${turf.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${turf.available ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {turf.available ? 'Available' : 'Booked'}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900">
                      {turf.type}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      size="sm" 
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/turf/${turf.id}`);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{turf.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{turf.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{turf.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-green-600">৳{turf.price}</div>
                    <Button 
                      className="bg-green-600 hover:bg-green-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/turf/${turf.id}`);
                      }}
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Explore Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t.explore.title}
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                {t.explore.subtitle}
              </p>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700"
                onClick={() => navigate('/nearby')}
              >
                Explore Nearby
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Properties Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.properties.title}
            </h2>
            <p className="text-xl text-gray-600">
              {t.properties.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTurfs.map((turf) => (
              <Card 
                key={turf.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm cursor-pointer"
                onClick={() => navigate(`/turf/${turf.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${turf.available ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                      {turf.available ? 'Available' : 'Booked'}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{turf.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{turf.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{turf.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-green-600">৳{turf.price}</div>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/turf/${turf.id}`);
                        }}
                      >
                        Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/turf/${turf.id}`);
                        }}
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upcoming Tournaments
            </h2>
            <p className="text-xl text-gray-600">
              Join exciting competitions and showcase your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTournaments.map((tournament) => (
              <Card 
                key={tournament.id} 
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/90 backdrop-blur-sm cursor-pointer"
                onClick={() => navigate(`/tournament/${tournament.id}`)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={tournament.image} 
                    alt={tournament.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={`${
                      tournament.status === 'Registration Open' 
                        ? 'bg-green-500' 
                        : 'bg-yellow-500'
                    } text-white`}>
                      {tournament.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      size="sm" 
                      className="bg-white/90 text-gray-900 hover:bg-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/tournament/${tournament.id}`);
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tournament.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{new Date(tournament.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{tournament.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{tournament.teams} teams</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Trophy className="w-4 h-4" />
                      <span className="text-sm">৳{tournament.prize} prize pool</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/tournament/${tournament.id}`);
                    }}
                  >
                    {tournament.status === 'Registration Open' ? 'Register Now' : 'View Details'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/tournaments')}
            >
              View All Tournaments
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">
              {t.newsletter.title}
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get the latest updates on new turfs and tournaments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder={t.newsletter.placeholder}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-300"
              />
              <Button className="bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
