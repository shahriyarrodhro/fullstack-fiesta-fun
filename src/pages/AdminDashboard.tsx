
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Shield, 
  Users, 
  Building2, 
  DollarSign, 
  Settings, 
  Edit3,
  Trash2,
  Plus,
  Eye,
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  FileText,
  MapPin,
  Calendar
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { 
      label: 'Total Users', 
      value: '2,847', 
      change: '+12%', 
      icon: Users, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Active Turfs', 
      value: '456', 
      change: '+28', 
      icon: Building2, 
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      label: 'Monthly Revenue', 
      value: '৳1,45,000', 
      change: '+18%', 
      icon: DollarSign, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      label: 'Pending Approvals', 
      value: '23', 
      change: '-5', 
      icon: AlertTriangle, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const users = [
    { id: 1, name: 'Ahmed Rahman', email: 'ahmed@email.com', role: 'Player', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Sarah Khan', email: 'sarah@email.com', role: 'Turf Owner', status: 'Active', joinDate: '2024-01-10' },
    { id: 3, name: 'Mohammad Ali', email: 'ali@email.com', role: 'Player', status: 'Suspended', joinDate: '2024-01-08' }
  ];

  const turfs = [
    { id: 1, name: 'Manchester Academy', owner: 'Sports Ltd', location: 'Gulshan', status: 'Active', bookings: 45 },
    { id: 2, name: 'Barcelona Ground', owner: 'Barcelona BD', location: 'Dhanmondi', status: 'Pending', bookings: 32 },
    { id: 3, name: 'Elite Sports', owner: 'Elite Sports', location: 'Banani', status: 'Active', bookings: 67 }
  ];

  const bookings = [
    { id: 1, turf: 'Manchester Academy', player: 'Ahmed Rahman', date: '2024-02-15', status: 'Confirmed', amount: 2500 },
    { id: 2, turf: 'Barcelona Ground', player: 'Sarah Khan', date: '2024-02-16', status: 'Pending', amount: 3000 },
    { id: 3, turf: 'Elite Sports', player: 'Mohammad Ali', date: '2024-02-17', status: 'Cancelled', amount: 4500 }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                        <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
                      </div>
                      <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium">New turf approved: Elite Basketball Court</p>
                      <p className="text-sm text-gray-600">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-green-50 rounded-lg">
                    <Users className="w-5 h-5 text-green-500" />
                    <div>
                      <p className="font-medium">New user registered: John Doe</p>
                      <p className="text-sm text-gray-600">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 bg-orange-50 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <div>
                      <p className="font-medium">Turf approval pending: City Sports Complex</p>
                      <p className="text-sm text-gray-600">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      case 'users':
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage all platform users</CardDescription>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add User
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-medium">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline">{user.role}</Badge>
                          <Badge className={user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'turfs':
        return (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Turf Management</CardTitle>
                <CardDescription>Manage all turfs and venues</CardDescription>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Add Turf
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {turfs.map((turf) => (
                  <div key={turf.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{turf.name}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {turf.location} • Owner: {turf.owner}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={turf.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {turf.status}
                        </Badge>
                        <span className="text-sm text-gray-500">{turf.bookings} bookings</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'bookings':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Booking Management</CardTitle>
              <CardDescription>View and manage all bookings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">{booking.turf}</h3>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {booking.date} • Player: {booking.player}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={
                          booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }>
                          {booking.status}
                        </Badge>
                        <span className="text-sm font-medium text-green-600">৳{booking.amount}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <CheckCircle className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600">
                        <XCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );

      case 'settings':
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Site Configuration</CardTitle>
                <CardDescription>Manage global site settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Site Name</label>
                  <Input defaultValue="TurfMaster" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Commission Rate (%)</label>
                  <Input defaultValue="10" type="number" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Default Currency</label>
                  <Input defaultValue="BDT" />
                </div>
                <Button>Save Changes</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
                <CardDescription>Update homepage and content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Edit Homepage Content
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Manage Footer Content
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Email Templates
                </Button>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-blue-500" />
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <p className="text-gray-600">Complete platform management and oversight</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
            {[
              { id: 'overview', label: 'Overview', icon: TrendingUp },
              { id: 'users', label: 'Users', icon: Users },
              { id: 'turfs', label: 'Turfs', icon: Building2 },
              { id: 'bookings', label: 'Bookings', icon: Calendar },
              { id: 'settings', label: 'Settings', icon: Settings }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
