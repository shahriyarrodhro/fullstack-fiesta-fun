
import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TurfCard from '@/components/turfs/TurfCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Search, 
  Filter, 
  Navigation,
  Star,
  Clock,
  Users,
  Phone,
  Award
} from 'lucide-react';

const Nearby = () => {
  const [location, setLocation] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [nearbyTurfs, setNearbyTurfs] = useState<any[]>([]);

  // Mock data based on cities
  const turfsByCity = {
    'Dhaka': [
      {
        id: 1,
        name: 'Champions Arena',
        location: 'Gulshan, Dhaka',
        distance: '2.5 km',
        price: 2500,
        rating: 4.8,
        reviews: 120,
        image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
        type: 'Football',
        amenities: ['Parking', 'Washroom', 'Cafeteria'],
        available: true,
        openHours: '6:00 AM - 11:00 PM'
      },
      {
        id: 2,
        name: 'Elite Sports Complex',
        location: 'Dhanmondi, Dhaka',
        distance: '3.2 km',
        price: 3000,
        rating: 4.9,
        reviews: 85,
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=300&fit=crop',
        type: 'Multi-Sport',
        amenities: ['AC', 'Equipment', 'Pro Shop'],
        available: true,
        openHours: '5:00 AM - 12:00 AM'
      },
      {
        id: 3,
        name: 'Victory Ground',
        location: 'Banani, Dhaka',
        distance: '1.8 km',
        price: 4500,
        rating: 4.7,
        reviews: 200,
        image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=300&fit=crop',
        type: 'Cricket',
        amenities: ['Indoor Nets', 'Coaching', 'Equipment'],
        available: false,
        openHours: '6:00 AM - 10:00 PM'
      }
    ],
    'Chittagong': [
      {
        id: 4,
        name: 'Port City Sports Club',
        location: 'Agrabad, Chittagong',
        distance: '1.2 km',
        price: 2200,
        rating: 4.6,
        reviews: 95,
        image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop',
        type: 'Football',
        amenities: ['Parking', 'Washroom', 'Lights'],
        available: true,
        openHours: '6:00 AM - 11:00 PM'
      }
    ],
    'Sylhet': [
      {
        id: 5,
        name: 'Tea Garden Sports Complex',
        location: 'Zindabazar, Sylhet',
        distance: '0.8 km',
        price: 1800,
        rating: 4.5,
        reviews: 65,
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
        type: 'Cricket',
        amenities: ['Natural Setting', 'Cafeteria', 'Parking'],
        available: true,
        openHours: '7:00 AM - 9:00 PM'
      }
    ]
  };

  const requestLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by this browser.');
      return;
    }

    setIsLoading(true);
    setPermissionDenied(false);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          // In a real app, you would reverse geocode these coordinates
          // For demo purposes, we'll simulate this
          const mockCities = ['Dhaka', 'Chittagong', 'Sylhet'];
          const randomCity = mockCities[Math.floor(Math.random() * mockCities.length)];
          
          setLocation(randomCity);
          setNearbyTurfs(turfsByCity[randomCity as keyof typeof turfsByCity] || []);
        } catch (error) {
          console.error('Error getting location details:', error);
          setLocation('Dhaka'); // Fallback
          setNearbyTurfs(turfsByCity.Dhaka);
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        console.error('Error getting location:', error);
        setPermissionDenied(true);
        setIsLoading(false);
        // Fallback to Dhaka
        setLocation('Dhaka');
        setNearbyTurfs(turfsByCity.Dhaka);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 600000 // 10 minutes
      }
    );
  };

  const searchByCity = (city: string) => {
    setLocation(city);
    setNearbyTurfs(turfsByCity[city as keyof typeof turfsByCity] || []);
  };

  useEffect(() => {
    // Auto-request location on page load
    requestLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Turfs Near You
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover the best sports facilities in your area with real-time availability
            </p>
          </div>

          {/* Location Detection */}
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-green-400" />
                    <div>
                      <h3 className="font-semibold">Current Location</h3>
                      {location ? (
                        <p className="text-green-300">{location}</p>
                      ) : (
                        <p className="text-gray-300">Location not detected</p>
                      )}
                    </div>
                  </div>
                  <Button 
                    onClick={requestLocation}
                    disabled={isLoading}
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Detecting...
                      </div>
                    ) : (
                      <>
                        <Navigation className="w-4 h-4 mr-2" />
                        Detect Location
                      </>
                    )}
                  </Button>
                </div>

                {permissionDenied && (
                  <div className="p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30 mb-4">
                    <p className="text-sm text-yellow-200">
                      Location access denied. You can manually select a city below.
                    </p>
                  </div>
                )}

                {/* Manual City Selection */}
                <div>
                  <p className="text-sm text-gray-300 mb-3">Or select a city manually:</p>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(turfsByCity).map((city) => (
                      <Button
                        key={city}
                        onClick={() => searchByCity(city)}
                        variant={location === city ? 'default' : 'outline'}
                        size="sm"
                        className={location === city 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'border-white/30 text-white hover:bg-white/10'
                        }
                      >
                        {city}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {location && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Turfs in {location}
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Found {nearbyTurfs.length} sports facilities near you
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Search
                  </Button>
                </div>
              </div>

              {/* Turf Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nearbyTurfs.map((turf) => (
                  <Card key={turf.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="relative">
                      <img 
                        src={turf.image} 
                        alt={turf.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className={`${turf.available ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                          {turf.available ? 'Available' : 'Booked'}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary">{turf.type}</Badge>
                      </div>
                      <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
                        📍 {turf.distance}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{turf.name}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-3">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{turf.location}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="font-medium">{turf.rating}</span>
                          <span className="text-gray-500 text-sm">({turf.reviews} reviews)</span>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600">৳{turf.price}</div>
                          <div className="text-xs text-gray-500">per hour</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Clock className="w-4 h-4" />
                        <span>{turf.openHours}</span>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {turf.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                        {turf.amenities.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{turf.amenities.length - 3} more
                          </Badge>
                        )}
                      </div>

                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => window.location.href = `/turf/${turf.id}`}
                        >
                          View Details
                        </Button>
                        <Button 
                          className="flex-1 bg-green-600 hover:bg-green-700"
                          onClick={() => window.location.href = `/turf/${turf.id}`}
                          disabled={!turf.available}
                        >
                          {turf.available ? 'Book Now' : 'Fully Booked'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {nearbyTurfs.length === 0 && (
                <div className="text-center py-12">
                  <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No turfs found</h3>
                  <p className="text-gray-500 mb-4">
                    No sports facilities found in {location}. Try selecting a different city.
                  </p>
                  <Button onClick={requestLocation}>
                    <Navigation className="w-4 h-4 mr-2" />
                    Retry Location Detection
                  </Button>
                </div>
              )}
            </div>
          )}

          {!location && !isLoading && (
            <div className="text-center py-12">
              <Navigation className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">Location Required</h3>
              <p className="text-gray-500 mb-4">
                Please allow location access or select a city to view nearby turfs
              </p>
              <Button onClick={requestLocation}>
                <Navigation className="w-4 h-4 mr-2" />
                Detect My Location
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
