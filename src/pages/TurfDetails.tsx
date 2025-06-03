
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
  Eye
} from 'lucide-react';
import { mockTurfs } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

const TurfDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      // Store current page URL for redirect after login
      const currentPath = window.location.pathname;
      localStorage.setItem('redirectAfterLogin', currentPath);
      navigate('/login');
      return;
    }
    
    if (!selectedSlot) {
      alert('Please select a time slot');
      return;
    }

    // Navigate to booking confirmation page with auto-populated data
    navigate(`/booking/confirm`, { 
      state: { 
        turf, 
        selectedSlot,
        date: new Date().toISOString().split('T')[0],
        playerDetails: {
          name: user.name,
          email: user.email,
          phone: user.phone,
          city: user.city
        }
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
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
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={turf.images[currentImageIndex]} 
                  alt={turf.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {turf.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${turf.available ? 'bg-green-500' : 'bg-red-500'}`}>
                    {turf.available ? 'Available' : 'Booked'}
                  </Badge>
                </div>
                {/* View Details Button */}
                <div className="absolute top-4 right-4">
                  <Button variant="outline" className="bg-white/80 backdrop-blur-sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </div>
              </div>
            </Card>

            {/* Turf Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{turf.name}</CardTitle>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-medium">{turf.rating}</span>
                        <span className="text-gray-500">({turf.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{turf.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">৳{turf.price}</div>
                    <div className="text-sm text-gray-500">per hour</div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {turf.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Features & Amenities */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {turf.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    Amenities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {turf.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700">
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Rules */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-500" />
                  Rules & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {turf.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <span>{turf.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>{turf.contact.email}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-purple-500" />
                      <span>Manager: {turf.contact.manager}</span>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <MapPin className="w-5 h-5 text-red-500" />
                      <span>{turf.address}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg sticky top-6">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-500" />
                  Book This Turf
                </CardTitle>
                <CardDescription>Select your preferred time slot</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Auto-populated date */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <div className="p-3 bg-gray-50 rounded-lg border">
                      <span className="font-medium">{new Date().toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Available Time Slots
                    </label>
                    <div className="space-y-2">
                      {turf.timeSlots.map((slot, index) => (
                        <button
                          key={index}
                          onClick={() => slot.available && setSelectedSlot(slot.time)}
                          disabled={!slot.available}
                          className={`w-full p-3 rounded-lg border-2 text-left transition-all duration-300 ${
                            !slot.available
                              ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed'
                              : selectedSlot === slot.time
                              ? 'bg-green-50 border-green-500 text-green-700'
                              : 'bg-white border-gray-200 hover:border-green-500 hover:bg-green-50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">{slot.time}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-green-600">৳{slot.price}</span>
                              {!slot.available && (
                                <Badge variant="destructive" className="text-xs">Booked</Badge>
                              )}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedSlot && (
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                      <h4 className="font-medium text-green-800 mb-2">Selected Slot</h4>
                      <p className="text-green-700">{selectedSlot}</p>
                      <p className="text-green-600 font-semibold">
                        ৳{turf.timeSlots.find(slot => slot.time === selectedSlot)?.price}
                      </p>
                    </div>
                  )}

                  <Button
                    onClick={handleBooking}
                    disabled={!selectedSlot}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    {user && user.isAuthenticated ? 'Book Now' : 'Login to Book'}
                  </Button>

                  {!user || !user.isAuthenticated ? (
                    <p className="text-sm text-center text-gray-500">
                      Please <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/login')}>login</Button> to book this turf
                    </p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurfDetails;
