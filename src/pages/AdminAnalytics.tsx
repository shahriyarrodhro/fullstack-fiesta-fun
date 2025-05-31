
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Building2, DollarSign, Calendar, Download } from 'lucide-react';

const AdminAnalytics = () => {
  const revenueData = [
    { month: 'Jan', revenue: 45000, bookings: 120 },
    { month: 'Feb', revenue: 52000, bookings: 135 },
    { month: 'Mar', revenue: 48000, bookings: 128 },
    { month: 'Apr', revenue: 61000, bookings: 156 },
    { month: 'May', revenue: 55000, bookings: 142 },
    { month: 'Jun', revenue: 67000, bookings: 171 }
  ];

  const turfTypeData = [
    { name: 'Football', value: 45, color: '#10B981' },
    { name: 'Cricket', value: 25, color: '#3B82F6' },
    { name: 'Basketball', value: 20, color: '#F59E0B' },
    { name: 'Multi-sport', value: 10, color: '#EF4444' }
  ];

  const userGrowthData = [
    { month: 'Jan', players: 1200, turfOwners: 45, total: 1245 },
    { month: 'Feb', players: 1350, turfOwners: 52, total: 1402 },
    { month: 'Mar', players: 1480, turfOwners: 58, total: 1538 },
    { month: 'Apr', players: 1620, turfOwners: 65, total: 1685 },
    { month: 'May', players: 1780, turfOwners: 71, total: 1851 },
    { month: 'Jun', players: 1920, turfOwners: 78, total: 1998 }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics Dashboard</h1>
                <p className="text-gray-600">Comprehensive platform performance insights</p>
              </div>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳3,28,000</p>
                    <p className="text-sm text-green-600 font-medium">+12.5% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold text-gray-900">1,998</p>
                    <p className="text-sm text-green-600 font-medium">+147 new users</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Building2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active Turfs</p>
                    <p className="text-2xl font-bold text-gray-900">78</p>
                    <p className="text-sm text-green-600 font-medium">+7 new turfs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Monthly Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">171</p>
                    <p className="text-sm text-green-600 font-medium">+15 from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row 1 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Revenue Chart */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Revenue & Bookings Trend
                </CardTitle>
                <CardDescription>Monthly revenue and booking statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#10B981" name="Revenue (৳)" />
                    <Bar dataKey="bookings" fill="#3B82F6" name="Bookings" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Turf Type Distribution */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-purple-500" />
                  Turf Type Distribution
                </CardTitle>
                <CardDescription>Breakdown of turfs by sport type</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={turfTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {turfTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* User Growth Chart */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                User Growth Analytics
              </CardTitle>
              <CardDescription>Platform user growth over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={userGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="total" stroke="#10B981" strokeWidth={3} name="Total Users" />
                  <Line type="monotone" dataKey="players" stroke="#3B82F6" strokeWidth={2} name="Players" />
                  <Line type="monotone" dataKey="turfOwners" stroke="#F59E0B" strokeWidth={2} name="Turf Owners" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Top Performing Turfs</CardTitle>
                <CardDescription>Based on bookings and revenue</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Champions Arena', bookings: 45, revenue: 67500 },
                    { name: 'Elite Sports Hub', bookings: 38, revenue: 57000 },
                    { name: 'Victory Ground', bookings: 32, revenue: 48000 }
                  ].map((turf, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{turf.name}</p>
                        <p className="text-sm text-gray-600">{turf.bookings} bookings</p>
                      </div>
                      <p className="font-semibold text-green-600">৳{turf.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Activities</CardTitle>
                <CardDescription>Latest platform activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { activity: 'New turf registered', time: '2 hours ago' },
                    { activity: 'Tournament created', time: '4 hours ago' },
                    { activity: '15 new bookings', time: '6 hours ago' },
                    { activity: 'User verification completed', time: '8 hours ago' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900">{item.activity}</p>
                      <p className="text-xs text-gray-500">{item.time}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>System Health</CardTitle>
                <CardDescription>Platform performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { metric: 'Server Uptime', value: '99.9%', status: 'good' },
                    { metric: 'Response Time', value: '245ms', status: 'good' },
                    { metric: 'Error Rate', value: '0.02%', status: 'good' },
                    { metric: 'Active Sessions', value: '1,234', status: 'good' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900">{item.metric}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
