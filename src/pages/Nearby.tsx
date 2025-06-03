
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TurfCard from '@/components/turfs/TurfCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Search, 
  Filter, 
  Navigation,
  Users,
  Clock,
  Star
} from 'lucide-react';
import { mockTurfs } from '@/data/mockData';

const Nearby = () => {
  const [userLocation, setUserLocation] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('distance');
  const [isLocationLoading, setIsLocationLoading] = useState(false);

  const nearbyTurfs = mockTurfs.map(turf => ({
    ...turf,
    distance: Math.round(Math.random() * 10 + 1) // Mock distance in km
  }));

  const filteredTurfs = nearbyTurfs
    .filter(turf => {
      const matchesSearch = turf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           turf.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === 'all' || turf.type.toLowerCase() === filterType.toLowerCase();
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return a.distance - b.distance;
        case 'rating':
          return b.rating - a.rating;
        case 'price':
          return a.price - b.price;
        default:
          return 0;
      }
    });

  const detectLocation = () => {
    setIsLocationLoading(true);
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Mock reverse geocoding
          const mockLocations = ['Dhanmondi', 'Gulshan', 'Banani', 'Uttara', 'Mirpur'];
          const randomLocation = mockLocations[Math.floor(Math.random() * mockLocations.length)];
          setUserLocation(`${randomLocation}, Dhaka`);
          setIsLocationLoading(false);
        },
        (error) => {
          console.error('Error getting location:', error);
          setUserLocation('Dhaka, Bangladesh');
          setIsLocationLoading(false);
        }
      );
    } else {
      setUserLocation('Dhaka, Bangladesh');
      setIsLocationLoading(false);
    }
  };

  useEffect(() => {
    detectLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Turfs Near You
            </h1>
            <p className="text-xl mb-8 opacity-90">
              Discover the best sports facilities in your area
            </p>
            
            {/* Location Display */}
            <div className="max-w-md mx-auto mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-4">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <MapPin className="w-5 h-5" />
                    <span className="font-medium">
                      {isLocationLoading ? 'Detecting location...' : userLocation || 'Location not available'}
                    </span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={detectLocation}
                    disabled={isLocationLoading}
                    className="mt-2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    {isLocationLoading ? 'Detecting...' : 'Update Location'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search turfs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              
              {/* Type Filter */}
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="football">Football</SelectItem>
                  <SelectItem value="cricket">Cricket</SelectItem>
                  <SelectItem value="basketball">Basketball</SelectItem>
                  <SelectItem value="tennis">Tennis</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                </SelectContent>
              </Select>
              
              {/* Filter Button */}
              <Button className="h-12 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                <Filter className="w-5 h-5 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Turfs Near You ({filteredTurfs.length})
              </h2>
              <p className="text-gray-600">
                Showing results within 10km of your location
              </p>
            </div>
            
            {/* View Toggle */}
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                List View
              </Badge>
            </div>
          </div>

          {/* Turf Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTurfs.map((turf) => (
              <div key={turf.id} className="relative">
                <TurfCard turf={turf} />
                
                {/* Distance Badge */}
                <div className="absolute top-4 right-4">
                  <Badge className="bg-blue-500 text-white">
                    {turf.distance}km away
                  </Badge>
                </div>
                
                {/* Quick Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-blue-500" />
                        <span>{turf.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>Available</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span>{turf.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredTurfs.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No turfs found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or location
              </p>
              <Button onClick={() => {
                setSearchQuery('');
                setFilterType('all');
              }}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredTurfs.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Turfs
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nearby;
