
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Star, 
  Search, 
  Filter, 
  Navigation,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  Loader2
} from 'lucide-react';

const Nearby = () => {
  const navigate = useNavigate();
  const [currentCity, setCurrentCity] = useState<string>('');
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [sortBy, setSortBy] = useState('distance');

  // Extended demo turfs with more cities and variety
  const allTurfs = [
    // Dhaka Turfs
    {
      id: 1,
      name: 'Manchester City Academy',
      location: 'Gulshan, Dhaka',
      city: 'Dhaka',
      price: 2500,
      rating: 4.8,
      distance: '1.2 km',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      type: 'Football',
      surface: 'Artificial Grass',
      available: true,
      features: ['Floodlights', 'Parking', 'Changing Rooms'],
      isSponsored: true
    },
    {
      id: 2,
      name: 'Barcelona Academy',
      location: 'Dhanmondi, Dhaka',
      city: 'Dhaka',
      price: 3000,
      rating: 4.9,
      distance: '2.5 km',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
      type: 'Football',
      surface: 'Natural Grass',
      available: true,
      features: ['Premium Grass', 'Cafeteria', 'Equipment'],
      isSponsored: false
    },
    {
      id: 3,
      name: 'Elite Sports Complex',
      location: 'Banani, Dhaka',
      city: 'Dhaka',
      price: 4500,
      rating: 4.7,
      distance: '3.1 km',
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop',
      type: 'Multi-Sport',
      surface: 'Indoor Court',
      available: true,
      features: ['Multiple Courts', 'Air Conditioning', 'Pro Shop'],
      isSponsored: true
    },
    {
      id: 4,
      name: 'Dhaka Cricket Academy',
      location: 'Mirpur, Dhaka',
      city: 'Dhaka',
      price: 3500,
      rating: 4.6,
      distance: '4.2 km',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      type: 'Cricket',
      surface: 'Turf Wicket',
      available: false,
      features: ['Indoor Nets', 'Coaching Available', 'Equipment Rental'],
      isSponsored: false
    },
    
    // Chittagong Turfs
    {
      id: 5,
      name: 'Port City Football Ground',
      location: 'Agrabad, Chittagong',
      city: 'Chittagong',
      price: 2000,
      rating: 4.5,
      distance: '0.8 km',
      image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop',
      type: 'Football',
      surface: 'Natural Grass',
      available: true,
      features: ['Spectator Seating', 'Washrooms', 'Parking'],
      isSponsored: false
    },
    {
      id: 6,
      name: 'Chittagong Tennis Club',
      location: 'GEC Circle, Chittagong',
      city: 'Chittagong',
      price: 1800,
      rating: 4.4,
      distance: '1.5 km',
      image: 'https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=300&fit=crop',
      type: 'Tennis',
      surface: 'Hard Court',
      available: true,
      features: ['Clay Courts', 'Pro Shop', 'Lounge Area'],
      isSponsored: true
    },
    
    // Sylhet Turfs
    {
      id: 7,
      name: 'Sylhet Sports Arena',
      location: 'Zindabazar, Sylhet',
      city: 'Sylhet',
      price: 2200,
      rating: 4.3,
      distance: '1.0 km',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
      type: 'Basketball',
      surface: 'Indoor Court',
      available: true,
      features: ['Indoor Court', 'Sound System', 'Scoreboard'],
      isSponsored: false
    },
    
    // Khulna Turfs
    {
      id: 8,
      name: 'Khulna Football Academy',
      location: 'Doulatpur, Khulna',
      city: 'Khulna',
      price: 1900,
      rating: 4.2,
      distance: '2.0 km',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      type: 'Football',
      surface: 'Artificial Grass',
      available: true,
      features: ['Floodlights', 'Training Equipment', 'Coaching'],
      isSponsored: false
    }
  ];

  // Auto-detect location on component mount
  useEffect(() => {
    detectLocation();
  }, []);

  const detectLocation = async () => {
    setIsLoadingLocation(true);
    
    try {
      if ('geolocation' in navigator) {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject, {
            timeout: 10000,
            enableHighAccuracy: true,
            maximumAge: 60000
          });
        });

        // Mock city detection based on coordinates
        // In real app, you'd use reverse geocoding API
        const { latitude, longitude } = position.coords;
        
        // Mock city detection logic
        let detectedCity = 'Dhaka'; // Default
        
        // Simple mock coordinates for demo
        if (latitude > 23.8 && latitude < 23.9 && longitude > 90.3 && longitude < 90.5) {
          detectedCity = 'Dhaka';
        } else if (latitude > 22.3 && latitude < 22.4 && longitude > 91.7 && longitude < 91.9) {
          detectedCity = 'Chittagong';
        } else if (latitude > 24.8 && latitude < 24.9 && longitude > 91.8 && longitude < 91.9) {
          detectedCity = 'Sylhet';
        } else if (latitude > 22.8 && latitude < 22.9 && longitude > 89.5 && longitude < 89.6) {
          detectedCity = 'Khulna';
        }
        
        setCurrentCity(detectedCity);
      } else {
        // Fallback if geolocation not supported
        setCurrentCity('Dhaka');
      }
    } catch (error) {
      console.error('Location detection failed:', error);
      // Fallback to default city
      setCurrentCity('Dhaka');
    } finally {
      setIsLoadingLocation(false);
    }
  };

  // Filter turfs based on current city and search criteria
  const filteredTurfs = allTurfs
    .filter(turf => turf.city === currentCity)
    .filter(turf => {
      const matchesSearch = turf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           turf.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSport = !selectedSport || turf.type.toLowerCase() === selectedSport.toLowerCase();
      return matchesSearch && matchesSport;
    })
    .sort((a, b) => {
      if (sortBy === 'distance') {
        return parseFloat(a.distance) - parseFloat(b.distance);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    })
    .sort((a, b) => {
      // Sponsored turfs appear first
      if (a.isSponsored && !b.isSponsored) return -1;
      if (!a.isSponsored && b.isSponsored) return 1;
      return 0;
    });

  const handleCityChange = (city: string) => {
    setCurrentCity(city);
  };

  const handleTurfClick = (turfId: number) => {
    navigate(`/turf/${turfId}`);
  };

  if (isLoadingLocation) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <Loader2 className="w-12 h-12 mx-auto text-green-500 animate-spin mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Detecting Your Location</h2>
            <p className="text-gray-600">Please allow location access to find turfs near you</p>
            <Button 
              onClick={detectLocation} 
              className="mt-4"
              variant="outline"
            >
              <Navigation className="w-4 h-4 mr-2" />
              Retry Location Detection
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-64" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=400&fit=crop)'
      }}>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-green-400" />
              <span className="text-lg">Located in {currentCity}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Nearby <span className="text-green-400">Turfs</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Find and book the best turfs in your city
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Location and Filters */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current City
                </label>
                <Select value={currentCity} onValueChange={handleCityChange}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Dhaka">Dhaka</SelectItem>
                    <SelectItem value="Chittagong">Chittagong</SelectItem>
                    <SelectItem value="Sylhet">Sylhet</SelectItem>
                    <SelectItem value="Khulna">Khulna</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search Turfs
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search by name or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sport Type
                </label>
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Sports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Sports</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="multi-sport">Multi-Sport</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Sort By
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="price">Price (Low to High)</SelectItem>
                    <SelectItem value="rating">Rating (High to Low)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                onClick={detectLocation}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                Refresh Location
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {filteredTurfs.length} turfs found in {currentCity}
          </h2>
          <p className="text-gray-600">
            Showing available turfs sorted by {sortBy}
          </p>
        </div>

        {/* Turfs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTurfs.map((turf) => (
            <Card 
              key={turf.id} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleTurfClick(turf.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={turf.image} 
                  alt={turf.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  {turf.isSponsored && (
                    <Badge className="bg-yellow-500 text-white">
                      Sponsored
                    </Badge>
                  )}
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
                  >
                    View Details
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{turf.name}</h3>
                <div className="flex items-center gap-2 text-gray-600 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{turf.location}</span>
                  <span className="text-green-600 font-medium">• {turf.distance}</span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{turf.rating}</span>
                  <span className="text-gray-500">• {turf.surface}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">৳{turf.price}</div>
                  <Button 
                    className="bg-green-600 hover:bg-green-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTurfClick(turf.id);
                    }}
                  >
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTurfs.length === 0 && (
          <div className="text-center py-12">
            <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No turfs found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria or explore other cities
            </p>
            <Button onClick={() => setSearchQuery('')}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Nearby;
