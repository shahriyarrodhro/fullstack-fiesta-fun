
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Calendar, DollarSign, Download, Star, Clock } from 'lucide-react';

const TurfOwnerAnalytics = () => {
  const monthlyData = [
    { month: 'Jan', bookings: 32, revenue: 48000, customers: 28 },
    { month: 'Feb', bookings: 45, revenue: 67500, customers: 38 },
    { month: 'Mar', bookings: 38, revenue: 57000, customers: 34 },
    { month: 'Apr', bookings: 52, revenue: 78000, customers: 45 },
    { month: 'May', bookings: 48, revenue: 72000, customers: 42 },
    { month: 'Jun', bookings: 55, revenue: 82500, customers: 48 }
  ];

  const timeSlotData = [
    { time: '6-8 AM', bookings: 12, color: '#10B981' },
    { time: '8-10 AM', bookings: 8, color: '#3B82F6' },
    { time: '10-12 PM', bookings: 6, color: '#F59E0B' },
    { time: '12-2 PM', bookings: 4, color: '#EF4444' },
    { time: '2-4 PM', bookings: 7, color: '#8B5CF6' },
    { time: '4-6 PM', bookings: 15, color: '#06B6D4' },
    { time: '6-8 PM', bookings: 22, color: '#84CC16' },
    { time: '8-10 PM', bookings: 18, color: '#F97316' }
  ];

  const turfPerformance = [
    { name: 'Champions Arena', bookings: 45, revenue: 67500, rating: 4.8 },
    { name: 'Victory Ground', bookings: 38, revenue: 45600, rating: 4.6 },
    { name: 'Elite Sports Hub', bookings: 52, revenue: 104000, rating: 4.9 }
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
                <p className="text-gray-600">Track your turf performance and insights</p>
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
                  <div className="p-3 bg-green-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳4,05,000</p>
                    <p className="text-sm text-green-600 font-medium">+18.5% from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Calendar className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Bookings</p>
                    <p className="text-2xl font-bold text-gray-900">270</p>
                    <p className="text-sm text-blue-600 font-medium">+15 from last month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Unique Customers</p>
                    <p className="text-2xl font-bold text-gray-900">189</p>
                    <p className="text-sm text-purple-600 font-medium">+23 new customers</p>
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
                    <p className="text-2xl font-bold text-gray-900">4.77</p>
                    <p className="text-sm text-yellow-600 font-medium">Customer satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue and Bookings Chart */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Revenue & Booking Trends
              </CardTitle>
              <CardDescription>Monthly performance overview</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={monthlyData}>
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

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Peak Hours */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" />
                  Peak Booking Hours
                </CardTitle>
                <CardDescription>Most popular time slots</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={timeSlotData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ time, bookings }) => `${time}: ${bookings}`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="bookings"
                    >
                      {timeSlotData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Customer Growth */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-500" />
                  Customer Growth
                </CardTitle>
                <CardDescription>Monthly customer acquisition</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="customers" stroke="#8B5CF6" strokeWidth={3} name="Customers" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Performance Breakdown */}
          <div className="grid lg:grid-cols-3 gap-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Turf Performance</CardTitle>
                <CardDescription>Individual turf statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {turfPerformance.map((turf, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-gray-900 mb-2">{turf.name}</h4>
                      <div className="grid grid-cols-3 gap-2 text-sm">
                        <div>
                          <p className="text-gray-600">Bookings</p>
                          <p className="font-semibold">{turf.bookings}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Revenue</p>
                          <p className="font-semibold text-green-600">৳{turf.revenue.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">Rating</p>
                          <p className="font-semibold text-yellow-600">{turf.rating}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Insights</CardTitle>
                <CardDescription>Key performance insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { insight: 'Peak hours are 6-8 PM', trend: 'up', value: '40%' },
                    { insight: 'Weekend bookings increased', trend: 'up', value: '25%' },
                    { insight: 'Average session duration', trend: 'stable', value: '1.2hrs' },
                    { insight: 'Customer retention rate', trend: 'up', value: '78%' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-900">{item.insight}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`text-sm font-medium ${
                          item.trend === 'up' ? 'text-green-600' :
                          item.trend === 'down' ? 'text-red-600' : 'text-gray-600'
                        }`}>
                          {item.value}
                        </span>
                        <div className={`w-3 h-3 rounded-full ${
                          item.trend === 'up' ? 'bg-green-500' :
                          item.trend === 'down' ? 'bg-red-500' : 'bg-gray-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recommendations</CardTitle>
                <CardDescription>AI-powered suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { title: 'Optimize Prime Hours', description: 'Consider dynamic pricing for 6-8 PM slots' },
                    { title: 'Weekend Promotion', description: 'Create packages for weekend bookings' },
                    { title: 'Customer Loyalty', description: 'Implement rewards program for repeat customers' },
                    { title: 'Off-Peak Incentives', description: 'Offer discounts for morning slots' }
                  ].map((rec, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <h4 className="font-medium text-blue-900 mb-1">{rec.title}</h4>
                      <p className="text-sm text-blue-700">{rec.description}</p>
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

export default TurfOwnerAnalytics;
