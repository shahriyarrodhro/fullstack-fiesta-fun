
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Search, Shield, UserPlus, Ban, CheckCircle, Settings, Crown } from 'lucide-react';

const SuperAdminUsers = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const users = [
    {
      id: 1,
      name: 'Super Admin',
      email: 'superadmin@example.com',
      role: 'superadmin',
      status: 'active',
      permissions: ['all'],
      lastActive: '5 min ago',
      createdAt: '2024-01-01'
    },
    {
      id: 2,
      name: 'Admin User',
      email: 'admin@example.com',
      role: 'admin',
      status: 'active',
      permissions: ['user_management', 'turf_approval', 'tournament_management'],
      lastActive: '2 hours ago',
      createdAt: '2024-01-05'
    },
    {
      id: 3,
      name: 'Sarah Khan',
      email: 'sarah@example.com',
      role: 'turf_owner',
      status: 'active',
      permissions: ['turf_management'],
      lastActive: '1 day ago',
      createdAt: '2024-01-10',
      turfs: 3
    },
    {
      id: 4,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'player',
      status: 'active',
      permissions: ['booking'],
      lastActive: '3 hours ago',
      createdAt: '2024-01-15',
      bookings: 12
    },
    {
      id: 5,
      name: 'Suspended User',
      email: 'suspended@example.com',
      role: 'player',
      status: 'suspended',
      permissions: [],
      lastActive: '1 week ago',
      createdAt: '2024-01-12'
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'superadmin': return 'bg-red-100 text-red-800';
      case 'admin': return 'bg-purple-100 text-purple-800';
      case 'turf_owner': return 'bg-blue-100 text-blue-800';
      case 'player': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'suspended': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleIcon = (role: string) => {
    switch (role) {
      case 'superadmin': return <Crown className="w-4 h-4" />;
      case 'admin': return <Shield className="w-4 h-4" />;
      default: return <Users className="w-4 h-4" />;
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || user.role === filter || user.status === filter;
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Global User Management</h1>
                <p className="text-gray-600">Complete oversight of all platform users</p>
              </div>
              <Button>
                <UserPlus className="w-4 h-4 mr-2" />
                Create Admin
              </Button>
            </div>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold text-gray-900">{users.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Crown className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Super Admins</p>
                    <p className="text-xl font-bold text-gray-900">{users.filter(u => u.role === 'superadmin').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Admins</p>
                    <p className="text-xl font-bold text-gray-900">{users.filter(u => u.role === 'admin').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active</p>
                    <p className="text-xl font-bold text-gray-900">{users.filter(u => u.status === 'active').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Ban className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Suspended</p>
                    <p className="text-xl font-bold text-gray-900">{users.filter(u => u.status === 'suspended').length}</p>
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
                placeholder="Search users..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'superadmin', 'admin', 'turf_owner', 'player', 'active', 'suspended'].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? 'default' : 'outline'}
                  onClick={() => setFilter(filterType)}
                  className="capitalize"
                  size="sm"
                >
                  {filterType.replace('_', ' ')}
                </Button>
              ))}
            </div>
          </div>

          {/* Users List */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>All Platform Users</CardTitle>
              <CardDescription>Complete user directory with administrative controls</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className={`${
                          user.role === 'superadmin' ? 'bg-gradient-to-br from-red-500 to-red-600' :
                          user.role === 'admin' ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                          'bg-gradient-to-br from-green-500 to-green-600'
                        } text-white`}>
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold text-gray-900">{user.name}</h4>
                          {(user.role === 'superadmin' || user.role === 'admin') && getRoleIcon(user.role)}
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getRoleColor(user.role)}>
                            {user.role.replace('_', ' ')}
                          </Badge>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right text-sm text-gray-600">
                        <p>Last active: {user.lastActive}</p>
                        <p>Joined: {user.createdAt}</p>
                        {user.role === 'turf_owner' && user.turfs && <p>Turfs: {user.turfs}</p>}
                        {user.role === 'player' && user.bookings && <p>Bookings: {user.bookings}</p>}
                      </div>
                      <div className="flex space-x-1">
                        <Button variant="outline" size="sm">
                          <Settings className="w-4 h-4" />
                        </Button>
                        {user.role !== 'superadmin' && (
                          <Button 
                            variant={user.status === 'suspended' ? 'default' : 'destructive'} 
                            size="sm"
                          >
                            {user.status === 'suspended' ? 'Activate' : 'Suspend'}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Permission Matrix */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-red-50">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-500" />
                Role Permissions Matrix
              </CardTitle>
              <CardDescription>Overview of permissions by user role</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Permission</th>
                      <th className="text-center p-2">Super Admin</th>
                      <th className="text-center p-2">Admin</th>
                      <th className="text-center p-2">Turf Owner</th>
                      <th className="text-center p-2">Player</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'System Management', superadmin: true, admin: false, turf_owner: false, player: false },
                      { name: 'User Management', superadmin: true, admin: true, turf_owner: false, player: false },
                      { name: 'Turf Approval', superadmin: true, admin: true, turf_owner: false, player: false },
                      { name: 'Tournament Management', superadmin: true, admin: true, turf_owner: true, player: false },
                      { name: 'Turf Management', superadmin: true, admin: false, turf_owner: true, player: false },
                      { name: 'Booking', superadmin: true, admin: false, turf_owner: false, player: true }
                    ].map((permission, index) => (
                      <tr key={index} className="border-b hover:bg-gray-50">
                        <td className="p-2 font-medium">{permission.name}</td>
                        <td className="text-center p-2">
                          {permission.superadmin ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : '—'}
                        </td>
                        <td className="text-center p-2">
                          {permission.admin ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : '—'}
                        </td>
                        <td className="text-center p-2">
                          {permission.turf_owner ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : '—'}
                        </td>
                        <td className="text-center p-2">
                          {permission.player ? <CheckCircle className="w-4 h-4 text-green-600 mx-auto" /> : '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminUsers;
