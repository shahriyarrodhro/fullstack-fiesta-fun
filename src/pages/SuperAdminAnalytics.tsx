
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, Building2, DollarSign, Calendar, Download, Globe, Activity } from 'lucide-react';

const SuperAdminAnalytics = () => {
  const platformGrowthData = [
    { month: 'Jan', users: 1245, turfs: 45, revenue: 245000, transactions: 450 },
    { month: 'Feb', users: 1402, turfs: 52, revenue: 289000, transactions: 523 },
    { month: 'Mar', users: 1538, turfs: 58, revenue: 324000, transactions: 612 },
    { month: 'Apr', users: 1685, turfs: 65, revenue: 378000, transactions: 698 },
    { month: 'May', users: 1851, turfs: 71, revenue: 425000, transactions: 756 },
    { month: 'Jun', users: 1998, turfs: 78, revenue: 467000, transactions: 834 }
  ];

  const regionData = [
    { name: 'Dhaka', value: 65, color: '#10B981' },
    { name: 'Chittagong', value: 20, color: '#3B82F6' },
    { name: 'Sylhet', value: 10, color: '#F59E0B' },
    { name: 'Others', value: 5, color: '#EF4444' }
  ];

  const userEngagementData = [
    { day: 'Mon', activeUsers: 1234, bookings: 89, revenue: 45000 },
    { day: 'Tue', activeUsers: 1456, bookings: 102, revenue: 52000 },
    { day: 'Wed', activeUsers: 1678, bookings: 118, revenue: 58000 },
    { day: 'Thu', activeUsers: 1523, bookings: 95, revenue: 48000 },
    { day: 'Fri', activeUsers: 1789, bookings: 134, revenue: 67000 },
    { day: 'Sat', activeUsers: 2012, bookings: 156, revenue: 78000 },
    { day: 'Sun', activeUsers: 1890, bookings: 142, revenue: 71000 }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Analytics</h1>
                <p className="text-gray-600">Complete platform performance insights</p>
              </div>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export Full Report
              </Button>
            </div>
          </div>

          {/* Key Platform Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Platform Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳46,70,000</p>
                    <p className="text-sm text-green-600 font-medium">+24.5% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Platform Users</p>
                    <p className="text-2xl font-bold text-gray-900">1,998</p>
                    <p className="text-sm text-blue-600 font-medium">+147 new this month</p>
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
                    <p className="text-sm text-purple-600 font-medium">+7 new turfs</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-orange-100 rounded-xl">
                    <Activity className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Platform Activity</p>
                    <p className="text-2xl font-bold text-gray-900">85.4%</p>
                    <p className="text-sm text-orange-600 font-medium">User engagement rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Platform Growth Chart */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Platform Growth Metrics
              </CardTitle>
              <CardDescription>Overall platform performance and growth trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={platformGrowthData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="revenue" stackId="1" stroke="#10B981" fill="#10B981" fillOpacity={0.6} name="Revenue (৳)" />
                  <Area type="monotone" dataKey="users" stackId="2" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} name="Users" />
                  <Area type="monotone" dataKey="transactions" stackId="3" stroke="#F59E0B" fill="#F59E0B" fillOpacity={0.6} name="Transactions" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Regional Distribution */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-blue-500" />
                  Regional Distribution
                </CardTitle>
                <CardDescription>User distribution across regions</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={regionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {regionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Weekly Engagement */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-purple-500" />
                  Weekly User Engagement
                </CardTitle>
                <CardDescription>Daily active users and booking patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={userEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="activeUsers" stroke="#10B981" strokeWidth={3} name="Active Users" />
                    <Line type="monotone" dataKey="bookings" stroke="#3B82F6" strokeWidth={2} name="Bookings" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Top Performing Turfs</CardTitle>
                <CardDescription>By revenue generation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: 'Elite Sports Hub', revenue: 89000, growth: '+24%' },
                    { name: 'Champions Arena', revenue: 76000, growth: '+18%' },
                    { name: 'Victory Ground', revenue: 65000, growth: '+12%' }
                  ].map((turf, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{turf.name}</p>
                        <p className="text-sm text-green-600">{turf.growth}</p>
                      </div>
                      <p className="font-semibold text-gray-900">৳{turf.revenue.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Platform Health</CardTitle>
                <CardDescription>System performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { metric: 'System Uptime', value: '99.9%', status: 'excellent' },
                    { metric: 'Response Time', value: '145ms', status: 'good' },
                    { metric: 'Error Rate', value: '0.02%', status: 'excellent' },
                    { metric: 'User Satisfaction', value: '4.8/5', status: 'excellent' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900">{item.metric}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">{item.value}</span>
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'excellent' ? 'bg-green-500' :
                          item.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Revenue Insights</CardTitle>
                <CardDescription>Financial performance breakdown</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { category: 'Booking Fees', amount: 356000, percentage: 76 },
                    { category: 'Tournament Fees', amount: 89000, percentage: 19 },
                    { category: 'Premium Features', amount: 22000, percentage: 5 }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm text-gray-900">{item.category}</p>
                        <p className="font-semibold text-gray-900">৳{item.amount.toLocaleString()}</p>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">{item.percentage}% of total revenue</p>
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

export default SuperAdminAnalytics;
