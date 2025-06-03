
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Calendar, MapPin, Clock, Star, MoreHorizontal, Filter } from 'lucide-react';

const PlayerBookings = () => {
  const { bookings } = useAuth();
  const [filter, setFilter] = useState('all');

  console.log('Current bookings in PlayerBookings:', bookings);

  const filteredBookings = bookings.filter(booking => 
    filter === 'all' || booking.status === filter
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
            <p className="text-gray-600">Manage your turf bookings and history ({bookings.length} total)</p>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-6">
            {['all', 'confirmed', 'pending', 'completed', 'cancelled'].map((status) => (
              <Button
                key={status}
                variant={filter === status ? 'default' : 'outline'}
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status === 'all' ? 'All Bookings' : status}
                {status === 'all' && bookings.length > 0 && (
                  <Badge variant="secondary" className="ml-2">{bookings.length}</Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Bookings Grid */}
          <div className="grid gap-6">
            {filteredBookings.map((booking) => (
              <Card key={booking.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {booking.turfName.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{booking.turfName}</h3>
                        <p className="text-gray-600 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          Booking ID: {booking.id}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status}
                      </Badge>
                      <p className="text-2xl font-bold text-green-600 mt-1">৳{booking.totalAmount}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(booking.date)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{booking.timeSlot}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>Payment: {booking.paymentStatus}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Booked on: {formatDate(booking.createdAt)}
                    </div>
                    <div className="flex space-x-2">
                      {booking.status === 'confirmed' && (
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                      )}
                      {booking.status === 'completed' && (
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      )}
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
              <p className="text-gray-600 mb-4">
                {filter === 'all' 
                  ? "You don't have any bookings yet." 
                  : `You don't have any ${filter} bookings yet.`
                }
              </p>
              <Button onClick={() => window.location.href = '/turfs'}>
                Book a Turf
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerBookings;
