
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DollarSign, TrendingUp, CreditCard, Building2, Download, Search, Calendar, Percent } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const SuperAdminRevenue = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('month');

  const revenueData = [
    { month: 'Jan', total: 245000, commission: 24500, bookings: 220500 },
    { month: 'Feb', total: 289000, commission: 28900, bookings: 260100 },
    { month: 'Mar', total: 324000, commission: 32400, bookings: 291600 },
    { month: 'Apr', total: 378000, commission: 37800, bookings: 340200 },
    { month: 'May', total: 425000, commission: 42500, bookings: 382500 },
    { month: 'Jun', total: 467000, commission: 46700, bookings: 420300 }
  ];

  const commissionBreakdown = [
    {
      turfOwner: 'Sarah Khan',
      turfName: 'Champions Arena',
      totalRevenue: 185000,
      commission: 18500,
      rate: 10,
      bookings: 156,
      status: 'paid'
    },
    {
      turfOwner: 'David Smith',
      turfName: 'Elite Sports Hub',
      totalRevenue: 280000,
      commission: 28000,
      rate: 10,
      bookings: 234,
      status: 'paid'
    },
    {
      turfOwner: 'Mike Johnson',
      turfName: 'Victory Ground',
      totalRevenue: 120000,
      commission: 12000,
      rate: 10,
      bookings: 89,
      status: 'pending'
    },
    {
      turfOwner: 'Ahmed Ali',
      turfName: 'Sports Corner',
      totalRevenue: 65000,
      commission: 6500,
      rate: 10,
      bookings: 45,
      status: 'pending'
    }
  ];

  const paymentMethods = [
    { method: 'bKash', transactions: 156, amount: 234000, commission: 11700 },
    { method: 'Credit Card', transactions: 89, amount: 178000, commission: 8900 },
    { method: 'Nagad', transactions: 67, amount: 134000, commission: 6700 },
    { method: 'Rocket', transactions: 34, amount: 67000, commission: 3350 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.total, 0);
  const totalCommission = revenueData.reduce((sum, item) => sum + item.commission, 0);
  const pendingCommission = commissionBreakdown
    .filter(item => item.status === 'pending')
    .reduce((sum, item) => sum + item.commission, 0);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue Management</h1>
                <p className="text-gray-600">Complete platform revenue analytics and commission tracking</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                </Button>
              </div>
            </div>
          </div>

          {/* Revenue Summary */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Platform Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳{totalRevenue.toLocaleString()}</p>
                    <p className="text-sm text-green-600 font-medium">+18.5% from last period</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Percent className="w-6 h-6 text-blue-600" />
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
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <CreditCard className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pending Payouts</p>
                    <p className="text-2xl font-bold text-gray-900">৳{pendingCommission.toLocaleString()}</p>
                    <p className="text-sm text-yellow-600 font-medium">Awaiting processing</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Growth Rate</p>
                    <p className="text-2xl font-bold text-gray-900">24.3%</p>
                    <p className="text-sm text-purple-600 font-medium">Month over month</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Chart */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Revenue Analytics
              </CardTitle>
              <CardDescription>Monthly revenue breakdown and commission tracking</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="total" fill="#10B981" name="Total Revenue (৳)" />
                  <Bar dataKey="commission" fill="#3B82F6" name="Platform Commission (৳)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Commission Breakdown */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-blue-500" />
                  Turf Commission Breakdown
                </CardTitle>
                <CardDescription>Commission from each turf owner</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {commissionBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.turfName}</h4>
                        <p className="text-sm text-gray-600">Owner: {item.turfOwner}</p>
                        <p className="text-sm text-gray-600">{item.bookings} bookings</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">৳{item.commission.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">from ৳{item.totalRevenue.toLocaleString()}</p>
                        <Badge className={getStatusColor(item.status)}>
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-500" />
                  Payment Method Breakdown
                </CardTitle>
                <CardDescription>Revenue by payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-semibold text-gray-900">{method.method}</h4>
                        <p className="text-sm text-gray-600">{method.transactions} transactions</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">৳{method.amount.toLocaleString()}</p>
                        <p className="text-sm text-blue-600">Commission: ৳{method.commission.toLocaleString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Actions */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-green-50">
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-purple-500" />
                Revenue Management Actions
              </CardTitle>
              <CardDescription>Financial administration tools</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <CreditCard className="w-6 h-6 text-green-500" />
                  <span>Process Payouts</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Percent className="w-6 h-6 text-blue-500" />
                  <span>Update Commission Rates</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  <span>Revenue Forecasting</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Download className="w-6 h-6 text-orange-500" />
                  <span>Financial Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminRevenue;
