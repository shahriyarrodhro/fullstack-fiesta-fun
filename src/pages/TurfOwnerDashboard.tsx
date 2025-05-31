
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Clock,
  Star,
  MapPin,
  Plus,
  Settings,
  BarChart3,
  Eye
} from 'lucide-react';

const TurfOwnerDashboard = () => {
  const stats = [
    { 
      label: 'Total Revenue', 
      value: '৳45,000', 
      change: '+15.3%', 
      icon: DollarSign, 
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    { 
      label: 'Bookings (Month)', 
      value: '128', 
      change: '+22', 
      icon: Calendar, 
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    { 
      label: 'Active Turfs', 
      value: '3', 
      change: 'All Online', 
      icon: Building2, 
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    { 
      label: 'Avg Rating', 
      value: '4.8', 
      change: '+0.2', 
      icon: Star, 
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    }
  ];

  const myTurfs = [
    {
      id: 1,
      name: 'Champions Arena',
      location: 'Dhanmondi, Dhaka',
      rating: 4.8,
      bookings: 45,
      revenue: 18000,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Victory Ground',
      location: 'Gulshan, Dhaka',
      rating: 4.6,
      bookings: 38,
      revenue: 15200,
      status: 'active',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Elite Sports Hub',
      location: 'Banani, Dhaka',
      rating: 4.9,
      bookings: 52,
      revenue: 23400,
      status: 'maintenance',
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&h=200&fit=crop'
    }
  ];

  const recentBookings = [
    { id: 1, turf: 'Champions Arena', customer: 'John Doe', date: '2024-01-18', time: '6:00 PM', amount: 2500, status: 'confirmed' },
    { id: 2, turf: 'Victory Ground', customer: 'Jane Smith', date: '2024-01-18', time: '4:00 PM', amount: 1800, status: 'pending' },
    { id: 3, turf: 'Elite Sports Hub', customer: 'Mike Wilson', date: '2024-01-19', time: '8:00 AM', amount: 4500, status: 'confirmed' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getBookingStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Turf Owner Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Manage your turfs and track performance</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
                    </div>
                    <div className={`p-4 rounded-2xl ${stat.bgColor}`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* My Turfs */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-green-500" />
                      My Turfs
                    </CardTitle>
                    <CardDescription>Manage your turf facilities</CardDescription>
                  </div>
                  <Button size="sm">
                    <Plus className="w-4 h-4 mr-1" />
                    Add Turf
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {myTurfs.map((turf) => (
                    <div key={turf.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center space-x-4">
                        <img 
                          src={turf.image} 
                          alt={turf.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-gray-900">{turf.name}</h4>
                            <Badge className={getStatusColor(turf.status)}>
                              {turf.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mb-2">
                            <MapPin className="w-3 h-3" />
                            {turf.location}
                          </p>
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4">
                              <span className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current" />
                                {turf.rating}
                              </span>
                              <span>{turf.bookings} bookings</span>
                            </div>
                            <span className="font-semibold text-green-600">৳{turf.revenue.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex space-x-2 mt-3">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Settings className="w-4 h-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Bookings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Recent Bookings
                </CardTitle>
                <CardDescription>Latest booking activities</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentBookings.map((booking) => (
                    <div key={booking.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{booking.turf}</h4>
                        <Badge className={getBookingStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">Customer: {booking.customer}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{booking.date} at {booking.time}</span>
                        <span className="font-semibold text-green-600">৳{booking.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Bookings
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-orange-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" />
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
                  <BarChart3 className="w-6 h-6 text-purple-500" />
                  <span>View Analytics</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <DollarSign className="w-6 h-6 text-orange-500" />
                  <span>Revenue Report</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TurfOwnerDashboard;
