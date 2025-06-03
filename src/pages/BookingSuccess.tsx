
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Users,
  CreditCard,
  Download,
  Home,
  Eye
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
    paymentMethod,
    playerDetails,
    price,
    status
  } = location.state || {};

  if (!bookingId) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking not found</h1>
            <Button onClick={() => navigate('/turfs')}>Back to Turfs</Button>
          </div>
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getPaymentMethodDisplay = (method: string) => {
    switch (method) {
      case 'pay_later': return 'Pay Later (at venue)';
      case 'pay_offline': return 'Pay Offline (Cash)';
      case 'sslcommerz': return 'SSLCommerz';
      case 'bkash': return 'bKash';
      case 'nagad': return 'Nagad';
      default: return method;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">Your turf booking has been successfully submitted</p>
          </div>

          {/* Booking Details Card */}
          <Card className="border-0 shadow-lg mb-6">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Booking Details</CardTitle>
                  <CardDescription>Booking ID: #{bookingId}</CardDescription>
                </div>
                <Badge className={getStatusColor(status)}>
                  {status === 'pending' ? 'Awaiting Approval' : 'Confirmed'}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              {/* Turf Information */}
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={turf.image} 
                  alt={turf.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{turf.name}</h3>
                  <div className="flex items-center gap-1 text-gray-600 mt-1">
                    <MapPin className="w-4 h-4" />
                    <span>{turf.location}</span>
                  </div>
                </div>
              </div>

              {/* Booking Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-600">Date</p>
                    <p className="font-medium">{new Date(date).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <Clock className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="font-medium">{selectedSlot}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                  <Users className="w-5 h-5 text-purple-500" />
                  <div>
                    <p className="text-sm text-gray-600">Players</p>
                    <p className="font-medium">{playerCount}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm text-gray-600">Contact</p>
                    <p className="font-medium">{contactNumber}</p>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">Payment Method</span>
                  <CreditCard className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-green-700 font-medium">{getPaymentMethodDisplay(paymentMethod)}</p>
                <div className="flex items-center justify-between mt-3 pt-3 border-t border-green-200">
                  <span className="font-medium text-gray-900">Total Amount</span>
                  <span className="text-2xl font-bold text-green-600">৳{price}</span>
                </div>
              </div>

              {/* Player Details */}
              {playerDetails && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-medium text-blue-800 mb-2">Booked by</h4>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Name:</span> {playerDetails.name}</p>
                    <p><span className="font-medium">Email:</span> {playerDetails.email}</p>
                    {playerDetails.city && <p><span className="font-medium">City:</span> {playerDetails.city}</p>}
                  </div>
                </div>
              )}

              {/* Status Message */}
              <div className={`p-4 rounded-lg border ${
                status === 'pending' 
                  ? 'bg-yellow-50 border-yellow-200' 
                  : 'bg-green-50 border-green-200'
              }`}>
                <h4 className={`font-medium mb-2 ${
                  status === 'pending' ? 'text-yellow-800' : 'text-green-800'
                }`}>
                  {status === 'pending' ? 'Pending Approval' : 'Booking Confirmed'}
                </h4>
                <p className={`text-sm ${
                  status === 'pending' ? 'text-yellow-700' : 'text-green-700'
                }`}>
                  {status === 'pending' 
                    ? 'Your booking has been sent to the turf owner for approval. You will be notified once approved.'
                    : 'Your booking is confirmed! Please arrive 15 minutes before your scheduled time.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => navigate('/player/bookings')} 
              className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              <Eye className="w-4 h-4 mr-2" />
              View My Bookings
            </Button>
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex-1"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            <Button 
              variant="outline"
              className="flex-1"
            >
              <Download className="w-4 h-4 mr-2" />
              Download Receipt
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;
