
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Users, 
  CheckCircle,
  XCircle,
  Calendar,
  CreditCard,
  ArrowLeft,
  Eye,
  Wifi,
  Car,
  Shirt,
  Coffee,
  Shield
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const TurfDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, addBooking } = useAuth();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Enhanced mock turfs data
  const mockTurfs = [
    {
      id: 1,
      name: 'Manchester City Academy',
      location: 'Gulshan, Dhaka',
      price: 2500,
      rating: 4.8,
      images: [
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop'
      ],
      type: 'Football',
      surface: 'Artificial Grass',
      size: '100x60m',
      capacity: 22,
      description: 'Premium football turf with FIFA standard artificial grass and modern facilities.',
      features: ['Floodlights', 'Parking', 'Changing Rooms', 'WiFi', 'Cafeteria'],
      contact: {
        phone: '+8801234567890',
        email: 'info@manchesteracademy.bd'
      },
      owner: 'Manchester Sports Ltd.',
      available: true,
      timeSlots: [
        { time: '6:00 AM - 8:00 AM', available: true },
        { time: '8:00 AM - 10:00 AM', available: true },
        { time: '10:00 AM - 12:00 PM', available: false },
        { time: '2:00 PM - 4:00 PM', available: true },
        { time: '4:00 PM - 6:00 PM', available: true },
        { time: '6:00 PM - 8:00 PM', available: true },
        { time: '8:00 PM - 10:00 PM', available: false }
      ]
    },
    {
      id: 2,
      name: 'Barcelona Academy',
      location: 'Dhanmondi, Dhaka',
      price: 3000,
      rating: 4.9,
      images: [
        'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop'
      ],
      type: 'Football',
      surface: 'Natural Grass',
      size: '105x68m',
      capacity: 22,
      description: 'Professional football facility with natural grass and world-class amenities.',
      features: ['Premium Grass', 'Cafeteria', 'Equipment', 'Air Conditioning', 'Pro Shop'],
      contact: {
        phone: '+8801234567891',
        email: 'info@barcelonaacademy.bd'
      },
      owner: 'Barcelona Sports BD',
      available: true,
      timeSlots: [
        { time: '6:00 AM - 8:00 AM', available: true },
        { time: '8:00 AM - 10:00 AM', available: false },
        { time: '10:00 AM - 12:00 PM', available: true },
        { time: '2:00 PM - 4:00 PM', available: true },
        { time: '4:00 PM - 6:00 PM', available: false },
        { time: '6:00 PM - 8:00 PM', available: true },
        { time: '8:00 PM - 10:00 PM', available: true }
      ]
    }
  ];

  const turf = mockTurfs.find(t => t.id === parseInt(id || '0'));

  if (!turf) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Turf not found</h1>
            <Button onClick={() => navigate('/turfs')}>Back to Turfs</Button>
          </div>
        </div>
      </div>
    );
  }

  const handleBooking = () => {
    if (!user || !user.isAuthenticated) {
      localStorage.setItem('redirectAfterLogin', window.location.pathname);
      navigate('/login');
      return;
    }
    
    if (!selectedSlot) {
      alert('Please select a time slot');
      return;
    }

    navigate(`/booking/confirm`, { 
      state: { 
        turf, 
        selectedSlot,
        selectedDate,
        playerDetails: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          city: user.city
        }
      } 
    });
  };

  const getFeatureIcon = (feature: string) => {
    switch (feature.toLowerCase()) {
      case 'wifi': return <Wifi className="w-4 h-4" />;
      case 'parking': return <Car className="w-4 h-4" />;
      case 'changing rooms': return <Shirt className="w-4 h-4" />;
      case 'cafeteria': return <Coffee className="w-4 h-4" />;
      case 'floodlights': return <Shield className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/turfs')}
          className="mb-6 hover:bg-green-50 hover:border-green-500 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Turfs
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="overflow-hidden border-0 shadow-xl">
              <div className="relative h-96">
                <img 
                  src={turf.images[currentImageIndex]} 
                  alt={turf.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-green-500 text-white">
                    {turf.available ? 'Available' : 'Booked'}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{turf.type}</Badge>
                </div>
                {turf.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {turf.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </Card>

            {/* Turf Information */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {turf.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-5 h-5" />
                        <span className="text-lg">{turf.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="text-lg font-medium">{turf.rating}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600 mb-1">৳{turf.price}</div>
                    <div className="text-gray-600">per 2 hours</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg mb-6">{turf.description}</p>
                
                {/* Turf Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{turf.surface}</div>
                    <div className="text-sm text-gray-600">Surface</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{turf.size}</div>
                    <div className="text-sm text-gray-600">Size</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{turf.capacity}</div>
                    <div className="text-sm text-gray-600">Capacity</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{turf.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Facilities & Features</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {turf.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        {getFeatureIcon(feature)}
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border-t pt-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>{turf.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>{turf.contact.email}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-gray-600">
                    Owned by: {turf.owner}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Book This Turf
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Available Time Slots
                  </label>
                  <div className="space-y-2">
                    {turf.timeSlots.map((slot, index) => (
                      <button
                        key={index}
                        onClick={() => slot.available && setSelectedSlot(slot.time)}
                        disabled={!slot.available}
                        className={`w-full p-3 rounded-lg border-2 transition-all duration-200 ${
                          selectedSlot === slot.time
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : slot.available
                            ? 'border-gray-200 hover:border-green-300 hover:bg-green-50'
                            : 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{slot.time}</span>
                          {slot.available ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Booking Summary */}
                {selectedSlot && (
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Booking Summary</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span>{new Date(selectedDate).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span>{selectedSlot}</span>
                      </div>
                      <div className="flex justify-between font-medium text-lg border-t pt-2 mt-2">
                        <span>Total:</span>
                        <span className="text-green-600">৳{turf.price}</span>
                      </div>
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleBooking}
                  disabled={!selectedSlot}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 py-3 text-lg font-medium"
                >
                  <CreditCard className="w-5 h-5 mr-2" />
                  {user ? 'Proceed to Booking' : 'Login to Book'}
                </Button>

                {!user && (
                  <p className="text-sm text-gray-600 text-center">
                    You need to login first to book this turf
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfDetails;
