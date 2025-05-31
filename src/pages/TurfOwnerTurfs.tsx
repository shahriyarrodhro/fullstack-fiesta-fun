
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Building2, Plus, Eye, Settings, MapPin, Star, Calendar, Clock, DollarSign } from 'lucide-react';

const TurfOwnerTurfs = () => {
  const [turfs, setTurfs] = useState([
    {
      id: 1,
      name: 'Champions Arena',
      location: 'Dhanmondi, Dhaka',
      type: 'Football',
      status: 'active',
      rating: 4.8,
      bookings: 45,
      revenue: 18000,
      isOpen: true,
      availability: '6 AM - 11 PM',
      pricePerHour: 1500,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Victory Ground',
      location: 'Gulshan, Dhaka',
      type: 'Football',
      status: 'active',
      rating: 4.6,
      bookings: 38,
      revenue: 15200,
      isOpen: false,
      availability: '5 AM - 10 PM',
      pricePerHour: 1200,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Elite Sports Hub',
      location: 'Banani, Dhaka',
      type: 'Multi-sport',
      status: 'maintenance',
      rating: 4.9,
      bookings: 52,
      revenue: 23400,
      isOpen: false,
      availability: '24 Hours',
      pricePerHour: 2000,
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&h=200&fit=crop'
    }
  ]);

  const toggleTurfStatus = (turfId: number) => {
    setTurfs(turfs.map(turf => 
      turf.id === turfId 
        ? { ...turf, isOpen: !turf.isOpen }
        : turf
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = turfs.reduce((sum, turf) => sum + turf.revenue, 0);
  const totalBookings = turfs.reduce((sum, turf) => sum + turf.bookings, 0);
  const averageRating = turfs.reduce((sum, turf) => sum + turf.rating, 0) / turfs.length;

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">My Turfs</h1>
                <p className="text-gray-600">Manage your turf facilities and settings</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add New Turf
              </Button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Building2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Turfs</p>
                    <p className="text-2xl font-bold text-gray-900">{turfs.length}</p>
                    <p className="text-sm text-blue-600 font-medium">{turfs.filter(t => t.status === 'active').length} active</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳{totalRevenue.toLocaleString()}</p>
                    <p className="text-sm text-green-600 font-medium">This month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Calendar className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">{totalBookings}</p>
                    <p className="text-sm text-purple-600 font-medium">This month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <Star className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Average Rating</p>
                    <p className="text-2xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
                    <p className="text-sm text-yellow-600 font-medium">Customer satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Turfs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {turfs.map((turf) => (
              <Card key={turf.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(turf.status)}>
                      {turf.status}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-black/60 text-white">
                      {turf.type}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{turf.name}</h3>
                    <p className="text-sm text-gray-600 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {turf.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Rating</p>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-semibold">{turf.rating}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-600">Price/Hour</p>
                      <p className="font-semibold text-green-600">৳{turf.pricePerHour}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Bookings</p>
                      <p className="font-semibold text-gray-900">{turf.bookings}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Revenue</p>
                      <p className="font-semibold text-green-600">৳{turf.revenue.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-900">Turf Status</p>
                        <p className="text-xs text-gray-600 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {turf.availability}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${turf.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                          {turf.isOpen ? 'Open' : 'Closed'}
                        </span>
                        <Switch 
                          checked={turf.isOpen} 
                          onCheckedChange={() => toggleTurfStatus(turf.id)}
                          disabled={turf.status === 'maintenance'}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Settings className="w-4 h-4 mr-1" />
                      Edit
                    </Button>
                    <Button size="sm" className="flex-1">
                      Manage
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-green-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common turf management tasks</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Plus className="w-6 h-6 text-green-500" />
                  <span>Add New Turf</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Calendar className="w-6 h-6 text-blue-500" />
                  <span>Manage Schedule</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <DollarSign className="w-6 h-6 text-purple-500" />
                  <span>Update Pricing</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Eye className="w-6 h-6 text-orange-500" />
                  <span>View Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TurfOwnerTurfs;
