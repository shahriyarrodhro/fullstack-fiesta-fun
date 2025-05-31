
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { CreditCard, Search, DollarSign, TrendingUp, Download, RefreshCw, CheckCircle, Clock, XCircle } from 'lucide-react';

const AdminPayments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const transactions = [
    {
      id: 'TXN001',
      user: 'John Doe',
      type: 'booking',
      description: 'Champions Arena - Football Booking',
      amount: 2500,
      commission: 250,
      date: '2024-01-18',
      status: 'completed',
      method: 'bkash'
    },
    {
      id: 'TXN002',
      user: 'Sarah Khan',
      type: 'tournament',
      description: 'Dhaka Premier League Entry Fee',
      amount: 5000,
      commission: 500,
      date: '2024-01-17',
      status: 'pending',
      method: 'credit_card'
    },
    {
      id: 'TXN003',
      user: 'Mike Wilson',
      type: 'refund',
      description: 'Booking Cancellation Refund',
      amount: 1800,
      commission: -180,
      date: '2024-01-16',
      status: 'completed',
      method: 'bkash'
    },
    {
      id: 'TXN004',
      user: 'Ahmed Ali',
      type: 'booking',
      description: 'Victory Ground - Cricket Booking',
      amount: 3200,
      commission: 320,
      date: '2024-01-15',
      status: 'failed',
      method: 'nagad'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'failed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'failed': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         transaction.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || transaction.status === filter || transaction.type === filter;
    return matchesSearch && matchesFilter;
  });

  const totalRevenue = transactions.reduce((sum, t) => sum + (t.status === 'completed' ? t.amount : 0), 0);
  const totalCommission = transactions.reduce((sum, t) => sum + (t.status === 'completed' ? t.commission : 0), 0);
  const pendingAmount = transactions.filter(t => t.status === 'pending').reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Payment Management</h1>
                <p className="text-gray-600">Monitor transactions and financial analytics</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button>
                  <Download className="w-4 h-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </div>

          {/* Payment Summary */}
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
                    <p className="text-sm text-green-600 font-medium">+12.5% from last month</p>
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
                    <p className="text-sm text-gray-600">Commission Earned</p>
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
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pending Amount</p>
                    <p className="text-2xl font-bold text-gray-900">৳{pendingAmount.toLocaleString()}</p>
                    <p className="text-sm text-yellow-600 font-medium">{transactions.filter(t => t.status === 'pending').length} transactions</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <CreditCard className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Transactions</p>
                    <p className="text-2xl font-bold text-gray-900">{transactions.length}</p>
                    <p className="text-sm text-purple-600 font-medium">This month</p>
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
                placeholder="Search transactions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'completed', 'pending', 'failed', 'booking', 'tournament', 'refund'].map((filterType) => (
                <Button
                  key={filterType}
                  variant={filter === filterType ? 'default' : 'outline'}
                  onClick={() => setFilter(filterType)}
                  className="capitalize"
                  size="sm"
                >
                  {filterType}
                </Button>
              ))}
            </div>
          </div>

          {/* Transactions Table */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Transaction History</CardTitle>
              <CardDescription>All platform payment transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredTransactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{transaction.description}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>User: {transaction.user}</span>
                          <span>ID: {transaction.id}</span>
                          <span>{transaction.date}</span>
                          <span className="capitalize">{transaction.method.replace('_', ' ')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">৳{transaction.amount.toLocaleString()}</p>
                        <p className="text-sm text-green-600">
                          Commission: {transaction.commission >= 0 ? '+' : ''}৳{transaction.commission}
                        </p>
                        <Badge className={`${getStatusColor(transaction.status)} flex items-center gap-1 mt-1`}>
                          {getStatusIcon(transaction.status)}
                          {transaction.status}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Methods Stats */}
          <div className="grid lg:grid-cols-2 gap-6 mt-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
                <CardDescription>Transaction breakdown by payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { method: 'bKash', count: 15, percentage: 45, amount: 45000 },
                    { method: 'Credit Card', count: 8, percentage: 25, amount: 32000 },
                    { method: 'Nagad', count: 6, percentage: 20, amount: 24000 },
                    { method: 'Rocket', count: 3, percentage: 10, amount: 12000 }
                  ].map((method, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">{method.method}</span>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">৳{method.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{method.count} transactions ({method.percentage}%)</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recent Refunds</CardTitle>
                <CardDescription>Latest refund requests and approvals</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { user: 'Mike Wilson', amount: 1800, reason: 'Booking cancelled', status: 'approved' },
                    { user: 'Jane Smith', amount: 2500, reason: 'Turf unavailable', status: 'pending' },
                    { user: 'John Doe', amount: 3200, reason: 'Weather cancellation', status: 'approved' }
                  ].map((refund, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{refund.user}</p>
                        <p className="text-sm text-gray-600">{refund.reason}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">৳{refund.amount.toLocaleString()}</p>
                        <Badge className={refund.status === 'approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                          {refund.status}
                        </Badge>
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

export default AdminPayments;
