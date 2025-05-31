
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Building2, Search, MapPin, Star, Eye, Settings, CheckCircle, Clock, XCircle, Plus } from 'lucide-react';

const AdminTurfs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const turfs = [
    {
      id: 1,
      name: 'Champions Arena',
      owner: 'Sarah Khan',
      location: 'Dhanmondi, Dhaka',
      type: 'Football',
      status: 'approved',
      rating: 4.8,
      bookings: 156,
      revenue: 185000,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop'
    },
    {
      id: 2,
      name: 'Victory Ground',
      owner: 'Mike Johnson',
      location: 'Gulshan, Dhaka',
      type: 'Football',
      status: 'pending',
      rating: 4.6,
      bookings: 89,
      revenue: 120000,
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=200&fit=crop'
    },
    {
      id: 3,
      name: 'Elite Sports Hub',
      owner: 'David Smith',
      location: 'Banani, Dhaka',
      type: 'Multi-sport',
      status: 'approved',
      rating: 4.9,
      bookings: 234,
      revenue: 280000,
      image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=300&h=200&fit=crop'
    },
    {
      id: 4,
      name: 'Sports Corner',
      owner: 'Ahmed Ali',
      location: 'Uttara, Dhaka',
      type: 'Cricket',
      status: 'rejected',
      rating: 4.2,
      bookings: 45,
      revenue: 65000,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'suspended': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'rejected': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredTurfs = turfs.filter(turf => {
    const matchesSearch = turf.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         turf.owner.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         turf.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || turf.status === filter || turf.type.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Turf Management</h1>
                <p className="text-gray-600">Manage and approve turf registrations</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Turf
              </Button>
            </div>
          </div>

          {/* Turf Stats */}
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
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Approved</p>
                    <p className="text-2xl font-bold text-gray-900">{turfs.filter(t => t.status === 'approved').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pending</p>
                    <p className="text-2xl font-bold text-gray-900">{turfs.filter(t => t.status === 'pending').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-red-100 rounded-xl">
                    <XCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Rejected</p>
                    <p className="text-2xl font-bold text-gray-900">{turfs.filter(t => t.status === 'rejected').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search turfs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'approved', 'pending', 'rejected', 'football', 'cricket', 'multi-sport'].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? 'default' : 'outline'}
                  onClick={() => setFilter(filterType)}
                  className="capitalize"
                  size="sm"
                >
                  {filterType.replace('-', ' ')}
                </Button>
              ))}
            </div>
          </div>

          {/* Turfs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTurfs.map((turf) => (
              <Card key={turf.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img 
                    src={turf.image} 
                    alt={turf.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(turf.status)} flex items-center gap-1`}>
                      {getStatusIcon(turf.status)}
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
                    <p className="text-gray-600">Owner: {turf.owner}</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {turf.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span>{turf.rating}</span>
                      </div>
                      <p className="text-gray-600">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 mb-1">{turf.bookings}</p>
                      <p className="text-gray-600">Bookings</p>
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-green-600 mb-1">৳{turf.revenue.toLocaleString()}</p>
                      <p className="text-gray-600">Revenue</p>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Settings className="w-4 h-4 mr-1" />
                      Manage
                    </Button>
                    {turf.status === 'pending' && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTurfs;
