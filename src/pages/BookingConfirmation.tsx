
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard, 
  CheckCircle,
  ArrowLeft,
  Users,
  Phone,
  User,
  Mail
} from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [playerCount, setPlayerCount] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { turf, selectedSlot, date, playerDetails } = location.state || {};

  // Auto-populate form with user details
  React.useEffect(() => {
    if (playerDetails) {
      setContactNumber(playerDetails.phone || '');
    }
  }, [playerDetails]);

  if (!turf || !selectedSlot) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Invalid booking data</h1>
            <Button onClick={() => navigate('/turfs')}>Back to Turfs</Button>
          </div>
        </div>
      </div>
    );
  }

  const selectedSlotData = turf.timeSlots.find(slot => slot.time === selectedSlot);

  const handleConfirmBooking = async () => {
    if (!playerCount || !contactNumber || !paymentMethod) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to success page
    navigate('/booking/success', {
      state: {
        bookingId: Math.random().toString(36).substr(2, 9).toUpperCase(),
        turf,
        selectedSlot,
        date,
        playerCount,
        contactNumber,
        paymentMethod,
        playerDetails,
        price: selectedSlotData?.price,
        status: paymentMethod === 'pay_later' ? 'pending' : 'confirmed'
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate(`/turf/${turf.id}`)}
          className="mb-6 hover:bg-green-50 hover:border-green-500 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Turf Details
        </Button>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Booking Details */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Booking Details
              </CardTitle>
              <CardDescription>Review your booking information</CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{turf.name}</h3>
                    <div className="flex items-center gap-1 text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{turf.location}</span>
                    </div>
                  </div>
                </div>

                {/* Auto-populated player details */}
                {playerDetails && (
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-2">Player Details</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-blue-600" />
                        <span>{playerDetails.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-blue-600" />
                        <span>{playerDetails.email}</span>
                      </div>
                      {playerDetails.city && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-blue-600" />
                          <span>{playerDetails.city}</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-gray-900">Total Amount</span>
                    <span className="text-2xl font-bold text-green-600">৳{selectedSlotData?.price}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-500" />
                Complete Booking
              </CardTitle>
              <CardDescription>Provide additional information</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="playerCount" className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-500" />
                    Number of Players
                  </Label>
                  <Input
                    id="playerCount"
                    type="number"
                    placeholder="Enter number of players"
                    value={playerCount}
                    onChange={(e) => setPlayerCount(e.target.value)}
                    min="1"
                    max="22"
                    className="focus:border-green-500 transition-all duration-300"
                  />
                  <p className="text-sm text-gray-500 mt-1">Maximum 22 players allowed</p>
                </div>

                <div>
                  <Label htmlFor="contactNumber" className="flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-green-500" />
                    Contact Number
                  </Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    placeholder="Enter your contact number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="focus:border-green-500 transition-all duration-300"
                  />
                  <p className="text-sm text-gray-500 mt-1">We'll use this to contact you about your booking</p>
                </div>

                {/* Payment Method Selection */}
                <div>
                  <Label className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-4 h-4 text-purple-500" />
                    Payment Method
                  </Label>
                  <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                    <SelectTrigger className="focus:border-green-500 transition-all duration-300">
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pay_later">Pay Later (at venue)</SelectItem>
                      <SelectItem value="pay_offline">Pay Offline (Cash)</SelectItem>
                      <SelectItem value="sslcommerz">Pay Online (SSLCommerz)</SelectItem>
                      <SelectItem value="bkash">bKash</SelectItem>
                      <SelectItem value="nagad">Nagad</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-medium text-yellow-800 mb-2">Important Notes</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Your booking will be sent to the turf owner for approval</li>
                    <li>• Arrive 15 minutes before your slot</li>
                    <li>• Cancellation allowed up to 24 hours prior</li>
                    <li>• Bring valid ID for verification</li>
                  </ul>
                </div>

                <Button
                  onClick={handleConfirmBooking}
                  disabled={isLoading || !playerCount || !contactNumber || !paymentMethod}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Confirming...
                    </div>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Confirm Booking
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
