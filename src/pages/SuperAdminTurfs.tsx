
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Building2, Search, MapPin, Star, Settings, CheckCircle, Clock, XCircle, Eye, Plus, BarChart3 } from 'lucide-react';

const SuperAdminTurfs = () => {
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
      commission: 18500,
      approvedBy: 'Admin User',
      approvedDate: '2024-01-10'
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
      commission: 12000,
      submittedDate: '2024-01-18'
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
      commission: 28000,
      approvedBy: 'Admin User',
      approvedDate: '2024-01-08'
    },
    {
      id: 4,
      name: 'Sports Corner',
      owner: 'Ahmed Ali',
      location: 'Uttara, Dhaka',
      type: 'Cricket',
      status: 'suspended',
      rating: 4.2,
      bookings: 45,
      revenue: 65000,
      commission: 6500,
      suspendedBy: 'Super Admin',
      suspendedDate: '2024-01-15',
      suspendReason: 'Policy violation'
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
      case 'suspended': return <XCircle className="w-4 h-4" />;
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

  const totalRevenue = turfs.reduce((sum, turf) => sum + turf.revenue, 0);
  const totalCommission = turfs.reduce((sum, turf) => sum + turf.commission, 0);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Global Turf Management</h1>
                <p className="text-gray-600">Complete oversight of all platform turfs</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analytics
                </Button>
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Add Turf
                </Button>
              </div>
            </div>
          </div>

          {/* Revenue Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Building2 className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳{totalRevenue.toLocaleString()}</p>
                    <p className="text-sm text-green-600 font-medium">All turfs combined</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Platform Commission</p>
                    <p className="text-2xl font-bold text-gray-900">৳{totalCommission.toLocaleString()}</p>
                    <p className="text-sm text-blue-600 font-medium">10% average rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Turfs</p>
                    <p className="text-2xl font-bold text-gray-900">{turfs.filter(t => t.status === 'approved').length}</p>
                    <p className="text-sm text-purple-600 font-medium">Generating revenue</p>
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
                    <p className="text-sm text-gray-600">Pending Approval</p>
                    <p className="text-2xl font-bold text-gray-900">{turfs.filter(t => t.status === 'pending').length}</p>
                    <p className="text-sm text-yellow-600 font-medium">Awaiting review</p>
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
              {['all', 'approved', 'pending', 'suspended', 'football', 'cricket', 'multi-sport'].map((filterType) => (
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
          <div className="space-y-6">
            {filteredTurfs.map((turf) => (
              <Card key={turf.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                        {turf.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{turf.name}</h3>
                        <p className="text-gray-600 mb-1">Owner: {turf.owner}</p>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {turf.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={`${getStatusColor(turf.status)} flex items-center gap-1 mb-2`}>
                        {getStatusIcon(turf.status)}
                        {turf.status}
                      </Badge>
                      <Badge variant="outline">{turf.type}</Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="font-semibold">{turf.rating}</span>
                      </div>
                      <p className="text-xs text-gray-600">Rating</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-gray-900 mb-1">{turf.bookings}</p>
                      <p className="text-xs text-gray-600">Bookings</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-green-600 mb-1">৳{turf.revenue.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">Revenue</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-blue-600 mb-1">৳{turf.commission.toLocaleString()}</p>
                      <p className="text-xs text-gray-600">Commission</p>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <p className="font-semibold text-purple-600 mb-1">{((turf.commission / turf.revenue) * 100).toFixed(1)}%</p>
                      <p className="text-xs text-gray-600">Commission Rate</p>
                    </div>
                  </div>

                  {/* Status Details */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    {turf.status === 'approved' && (
                      <p className="text-sm text-gray-600">
                        Approved by <span className="font-medium">{turf.approvedBy}</span> on {turf.approvedDate}
                      </p>
                    )}
                    {turf.status === 'pending' && (
                      <p className="text-sm text-gray-600">
                        Submitted on {turf.submittedDate} - Awaiting admin review
                      </p>
                    )}
                    {turf.status === 'suspended' && (
                      <div className="text-sm text-gray-600">
                        <p>Suspended by <span className="font-medium">{turf.suspendedBy}</span> on {turf.suspendedDate}</p>
                        <p className="text-red-600 font-medium">Reason: {turf.suspendReason}</p>
                      </div>
                    )}
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View Details
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
                    {turf.status === 'suspended' && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Reactivate
                      </Button>
                    )}
                    {turf.status === 'approved' && (
                      <Button size="sm" variant="destructive">
                        Suspend
                      </Button>
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

export default SuperAdminTurfs;
