
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Phone,
  Download,
  Share2,
  Home
} from 'lucide-react';

const BookingSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { 
    bookingId, 
    turf, 
    selectedSlot, 
    date, 
    playerCount, 
    contactNumber, 
    price 
  } = location.state || {};

  if (!bookingId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">No booking found</h1>
            <Button onClick={() => navigate('/turfs')}>Browse Turfs</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">Your turf has been successfully booked.</p>
          </div>

          {/* Booking Details Card */}
          <Card className="border-0 shadow-xl mb-6">
            <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
              <CardTitle className="text-xl">Booking Confirmation</CardTitle>
              <CardDescription className="text-green-100">
                Booking ID: <span className="font-mono font-bold">{bookingId}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Turf Info */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{turf.name}</h3>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{turf.location}</span>
                    </div>
                  </div>
                </div>

                {/* Booking Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Date</p>
                      <p className="text-lg font-semibold text-gray-900">
                        {new Date(date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
                    <Clock className="w-6 h-6 text-green-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Time Slot</p>
                      <p className="text-lg font-semibold text-gray-900">{selectedSlot}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
                    <Users className="w-6 h-6 text-purple-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Players</p>
                      <p className="text-lg font-semibold text-gray-900">{playerCount} players</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg">
                    <Phone className="w-6 h-6 text-orange-500" />
                    <div>
                      <p className="text-sm text-gray-600 font-medium">Contact</p>
                      <p className="text-lg font-semibold text-gray-900">{contactNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Payment Info */}
                <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">Total Amount</p>
                      <p className="text-sm text-gray-600">Payment due at venue</p>
                    </div>
                    <div className="text-3xl font-bold text-green-600">৳{price}</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">Venue Contact</h4>
                  <div className="space-y-1 text-yellow-700">
                    <p>Phone: {turf.contact.phone}</p>
                    <p>Email: {turf.contact.email}</p>
                    <p>Manager: {turf.contact.manager}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => navigate('/player/bookings')}
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Bookings
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex-1 hover:bg-green-50 hover:border-green-500 transition-all duration-300"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>

          {/* Additional Actions */}
          <div className="flex justify-center gap-4 mt-6">
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
              <Share2 className="w-4 h-4 mr-2" />
              Share Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
