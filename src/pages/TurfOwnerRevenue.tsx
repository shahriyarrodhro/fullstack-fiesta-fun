
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { DollarSign, TrendingUp, Calendar, Download, Search, CreditCard, Percent } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const TurfOwnerRevenue = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const revenueData = [
    { month: 'Jan', revenue: 48000, bookings: 32, avgPerBooking: 1500 },
    { month: 'Feb', revenue: 67500, bookings: 45, avgPerBooking: 1500 },
    { month: 'Mar', revenue: 57000, bookings: 38, avgPerBooking: 1500 },
    { month: 'Apr', revenue: 78000, bookings: 52, avgPerBooking: 1500 },
    { month: 'May', revenue: 72000, bookings: 48, avgPerBooking: 1500 },
    { month: 'Jun', revenue: 82500, bookings: 55, avgPerBooking: 1500 }
  ];

  const transactions = [
    {
      id: 'TXN001',
      customer: 'John Doe',
      turf: 'Champions Arena',
      date: '2024-01-18',
      amount: 1500,
      commission: 150,
      netAmount: 1350,
      status: 'paid'
    },
    {
      id: 'TXN002',
      customer: 'Jane Smith',
      turf: 'Victory Ground',
      date: '2024-01-17',
      amount: 1200,
      commission: 120,
      netAmount: 1080,
      status: 'paid'
    },
    {
      id: 'TXN003',
      customer: 'Mike Wilson',
      turf: 'Elite Sports Hub',
      date: '2024-01-16',
      amount: 2000,
      commission: 200,
      netAmount: 1800,
      status: 'pending'
    },
    {
      id: 'TXN004',
      customer: 'Ahmed Ali',
      turf: 'Champions Arena',
      date: '2024-01-15',
      amount: 1500,
      commission: 150,
      netAmount: 1350,
      status: 'paid'
    }
  ];

  const paymentMethods = [
    { method: 'bKash', count: 45, amount: 67500, percentage: 42 },
    { method: 'Credit Card', count: 28, amount: 42000, percentage: 26 },
    { method: 'Nagad', count: 32, amount: 48000, percentage: 30 },
    { method: 'Cash', count: 2, amount: 3000, percentage: 2 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.revenue, 0);
  const totalCommission = transactions.reduce((sum, t) => sum + t.commission, 0);
  const netRevenue = totalRevenue - totalCommission;
  const pendingAmount = transactions.filter(t => t.status === 'pending').reduce((sum, t) => sum + t.netAmount, 0);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Revenue Dashboard</h1>
                <p className="text-gray-600">Track your earnings and financial performance</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date Range
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Export
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
                    <p className="text-sm text-gray-600">Total Revenue</p>
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
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Net Revenue</p>
                    <p className="text-2xl font-bold text-gray-900">৳{netRevenue.toLocaleString()}</p>
                    <p className="text-sm text-blue-600 font-medium">After platform commission</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <Percent className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Platform Commission</p>
                    <p className="text-2xl font-bold text-gray-900">৳{totalCommission.toLocaleString()}</p>
                    <p className="text-sm text-purple-600 font-medium">10% platform fee</p>
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
                    <p className="text-sm text-gray-600">Pending Payout</p>
                    <p className="text-2xl font-bold text-gray-900">৳{pendingAmount.toLocaleString()}</p>
                    <p className="text-sm text-yellow-600 font-medium">Will be paid on 1st</p>
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
              <CardDescription>Monthly revenue and booking trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
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

          {/* Transaction History and Payment Methods */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Recent Transactions
                </CardTitle>
                <CardDescription>Latest payment transactions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div>
                        <h4 className="font-medium text-gray-900">{transaction.customer}</h4>
                        <p className="text-sm text-gray-600">{transaction.turf}</p>
                        <p className="text-xs text-gray-500">{transaction.date} • {transaction.id}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">৳{transaction.amount}</p>
                        <p className="text-sm text-red-600">-৳{transaction.commission} (commission)</p>
                        <p className="text-sm font-medium text-green-600">৳{transaction.netAmount} net</p>
                        <Badge className={getStatusColor(transaction.status)}>
                          {transaction.status}
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
                  <CreditCard className="w-5 h-5 text-blue-500" />
                  Payment Methods
                </CardTitle>
                <CardDescription>Revenue breakdown by payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="p-3 border border-gray-200 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{method.method}</h4>
                        <p className="font-semibold text-gray-900">৳{method.amount.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{method.count} transactions</span>
                        <span>{method.percentage}% of total</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${method.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Insights */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Revenue Insights & Recommendations
              </CardTitle>
              <CardDescription>AI-powered financial insights for your business</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Peak Revenue Times</h4>
                  {[
                    { time: '6-8 PM', revenue: 28000, percentage: 34 },
                    { time: '4-6 PM', revenue: 18000, percentage: 22 },
                    { time: '8-10 PM', revenue: 15000, percentage: 18 }
                  ].map((slot, index) => (
                    <div key={index} className="p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-green-900">{slot.time}</span>
                        <span className="font-semibold text-green-700">৳{slot.revenue.toLocaleString()}</span>
                      </div>
                      <div className="w-full bg-green-200 rounded-full h-1.5">
                        <div 
                          className="bg-green-600 h-1.5 rounded-full" 
                          style={{ width: `${slot.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Growth Opportunities</h4>
                  {[
                    { suggestion: 'Increase weekend pricing by 15%', impact: 'High' },
                    { suggestion: 'Offer early bird discounts', impact: 'Medium' },
                    { suggestion: 'Add premium time slots', impact: 'High' },
                    { suggestion: 'Group booking packages', impact: 'Medium' }
                  ].map((item, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="font-medium text-blue-900 mb-1">{item.suggestion}</p>
                      <Badge className={`${
                        item.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.impact} Impact
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Financial Health</h4>
                  {[
                    { metric: 'Revenue Growth', value: '+18.5%', status: 'good' },
                    { metric: 'Profit Margin', value: '90%', status: 'excellent' },
                    { metric: 'Payment Success Rate', value: '98.5%', status: 'good' },
                    { metric: 'Customer Retention', value: '78%', status: 'good' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-900">{item.metric}</span>
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">{item.value}</span>
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'excellent' ? 'bg-green-500' :
                          item.status === 'good' ? 'bg-blue-500' : 'bg-yellow-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TurfOwnerRevenue;
