
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Users, 
  Trophy, 
  Star, 
  Calendar,
  Clock,
  ArrowRight,
  Play,
  Target,
  Zap,
  CheckCircle,
  Phone,
  Mail,
  Shield
} from 'lucide-react';

const Index = () => {
  const { language } = useApp();
  const navigate = useNavigate();

  const content = {
    en: {
      hero: {
        title: 'BEST TURF BOOKING',
        subtitle: 'PLATFORM IN YOUR AREA',
        description: 'Book premium turfs, join tournaments, and connect with players in your city. The ultimate sports community platform.',
        bookNow: 'Book Turf Now',
        joinTournament: 'Join Tournament'
      },
      features: {
        title: 'Why Choose Our Platform?',
        subtitle: 'Everything you need for your sports journey',
        items: [
          {
            title: 'Easy Booking',
            description: 'Book your favorite turf in just a few clicks',
            icon: Calendar
          },
          {
            title: 'Live Tournaments',
            description: 'Join exciting tournaments and compete with others',
            icon: Trophy
          },
          {
            title: 'Team Building',
            description: 'Create teams and find players in your area',
            icon: Users
          },
          {
            title: 'Secure Payments',
            description: 'Multiple payment options for your convenience',
            icon: Shield
          }
        ]
      },
      tournaments: {
        title: 'Upcoming Tournaments',
        subtitle: 'Join exciting competitions',
        viewAll: 'View All Tournaments'
      },
      turfs: {
        title: 'Featured Turfs',
        subtitle: 'Premium sports facilities',
        viewAll: 'View All Turfs'
      },
      testimonials: {
        title: 'What Players Say',
        subtitle: 'Trusted by thousands of sports enthusiasts'
      },
      cta: {
        title: 'Ready to Play?',
        subtitle: 'Join thousands of players and start your sports journey today',
        getStarted: 'Get Started Now'
      }
    },
    bn: {
      hero: {
        title: 'সেরা টার্ফ বুকিং',
        subtitle: 'আপনার এলাকার প্ল্যাটফর্ম',
        description: 'প্রিমিয়াম টার্ফ বুক করুন, টুর্নামেন্টে যোগ দিন এবং আপনার শহরের খেলোয়াড়দের সাথে সংযুক্ত হন।',
        bookNow: 'এখনই বুক করুন',
        joinTournament: 'টুর্নামেন্টে যোগ দিন'
      },
      features: {
        title: 'কেন আমাদের প্ল্যাটফর্ম বেছে নিবেন?',
        subtitle: 'আপনার খেলার যাত্রার জন্য সবকিছু',
        items: [
          {
            title: 'সহজ বুকিং',
            description: 'মাত্র কয়েক ক্লিকে আপনার পছন্দের টার্ফ বুক করুন',
            icon: Calendar
          },
          {
            title: 'লাইভ টুর্নামেন্ট',
            description: 'রোমাঞ্চকর টুর্নামেন্টে যোগ দিন এবং অন্যদের সাথে প্রতিযোগিতা করুন',
            icon: Trophy
          },
          {
            title: 'টিম তৈরি',
            description: 'টিম তৈরি করুন এবং আপনার এলাকার খেলোয়াড় খুঁজুন',
            icon: Users
          },
          {
            title: 'নিরাপদ পেমেন্ট',
            description: 'আপনার সুবিধার জন্য একাধিক পেমেন্ট অপশন',
            icon: Shield
          }
        ]
      },
      tournaments: {
        title: 'আসন্ন টুর্নামেন্ট',
        subtitle: 'রোমাঞ্চকর প্রতিযোগিতায় যোগ দিন',
        viewAll: 'সব টুর্নামেন্ট দেখুন'
      },
      turfs: {
        title: 'ফিচারড টার্ফ',
        subtitle: 'প্রিমিয়াম খেলার সুবিধা',
        viewAll: 'সব টার্ফ দেখুন'
      },
      testimonials: {
        title: 'খেলোয়াড়রা কী বলেন',
        subtitle: 'হাজারো ক্রীড়া উৎসাহীদের বিশ্বস্ত'
      },
      cta: {
        title: 'খেলতে প্রস্তুত?',
        subtitle: 'হাজারো খেলোয়াড়ের সাথে যোগ দিন এবং আজই আপনার খেলার যাত্রা শুরু করুন',
        getStarted: 'এখনই শুরু করুন'
      }
    }
  };

  const t = content[language];

  const featuredTurfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      location: 'Gulshan, Dhaka',
      price: 2500,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      type: 'Football',
      available: true
    },
    {
      id: 2,
      name: 'Barcelona Academy', 
      location: 'Dhanmondi, Dhaka',
      price: 3000,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
      type: 'Football',
      available: true
    },
    {
      id: 3,
      name: 'Cricket Central',
      location: 'Banani, Dhaka',
      price: 4000,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      type: 'Cricket',
      available: true
    }
  ];

  const upcomingTournaments = [
    {
      id: 1,
      name: 'Dhaka Premier League',
      startDate: '2024-02-15',
      endDate: '2024-03-15',
      prize: '50,000',
      teams: 16,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=200&fit=crop',
      type: 'Football',
      status: 'Registration Open'
    },
    {
      id: 2,
      name: 'Cricket Championship',
      startDate: '2024-02-20',
      endDate: '2024-03-20',
      prize: '75,000',
      teams: 12,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
      type: 'Cricket',
      status: 'Registration Open'
    },
    {
      id: 3,
      name: 'Basketball League',
      startDate: '2024-03-01',
      endDate: '2024-03-31',
      prize: '30,000',
      teams: 8,
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop',
      type: 'Basketball',
      status: 'Coming Soon'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Rahman',
      role: 'Football Player',
      comment: 'Amazing platform! Found my team and booked turfs easily.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    },
    {
      name: 'Sarah Khan',
      role: 'Team Captain',
      comment: 'Great for organizing tournaments and finding opponents.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=100&h=100&fit=crop'
    },
    {
      name: 'Mohammad Ali',
      role: 'Cricket Player',
      comment: 'Best turf booking platform in Bangladesh!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700">
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {t.hero.title}
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                {t.hero.subtitle}
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in delay-300">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
              <Button 
                size="lg" 
                onClick={() => navigate('/turfs')}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-lg px-8 py-4 shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                {t.hero.bookNow}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/tournaments')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4 backdrop-blur-sm bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <Trophy className="w-5 h-5 mr-2" />
                {t.hero.joinTournament}
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.features.items.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Turfs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.turfs.title}</h2>
              <p className="text-gray-600">{t.turfs.subtitle}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/turfs')}
              className="hover:bg-green-50 hover:border-green-500"
            >
              {t.turfs.viewAll}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTurfs.map((turf) => (
              <Card key={turf.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-green-500 text-white">
                      {turf.available ? 'Available' : 'Booked'}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{turf.type}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{turf.name}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{turf.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-medium">{turf.rating}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-green-600">৳{turf.price}</span>
                      <p className="text-sm text-gray-500">per hour</p>
                    </div>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    onClick={() => navigate(`/turf/${turf.id}`)}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tournaments Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">{t.tournaments.title}</h2>
              <p className="text-gray-600">{t.tournaments.subtitle}</p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => navigate('/tournaments')}
              className="hover:bg-blue-50 hover:border-blue-500"
            >
              {t.tournaments.viewAll}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTournaments.map((tournament) => (
              <Card key={tournament.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img 
                    src={tournament.image} 
                    alt={tournament.name}
                    className="w-full h-40 object-cover"
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
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tournament.name}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(tournament.startDate).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{tournament.teams} teams</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Trophy className="w-4 h-4" />
                      <span>৳{tournament.prize} prize pool</span>
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    onClick={() => navigate(`/tournament/${tournament.id}`)}
                  >
                    {tournament.status === 'Registration Open' ? 'Register Now' : 'View Details'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-gray-600 text-xl">{t.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.comment}"</p>
                  <div className="flex items-center gap-3">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <Button 
            size="lg"
            onClick={() => navigate('/register')}
            className="bg-white text-gray-900 hover:bg-gray-100 text-lg px-8 py-4 shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <Zap className="w-5 h-5 mr-2" />
            {t.cta.getStarted}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
