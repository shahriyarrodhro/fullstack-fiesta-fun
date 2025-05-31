
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Building2, 
  Trophy, 
  DollarSign, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  BarChart3,
  Eye,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  const stats = [
    { 
      label: 'Total Users', 
      value: '2,847', 
      change: '+12.5%', 
      icon: Users, 
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    { 
      label: 'Active Turfs', 
      value: '156', 
      change: '+8', 
      icon: Building2, 
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    { 
      label: 'Revenue (Month)', 
      value: '৳1,25,000', 
      change: '+18.2%', 
      icon: DollarSign, 
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    { 
      label: 'Active Tournaments', 
      value: '24', 
      change: '+5', 
      icon: Trophy, 
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    }
  ];

  const recentActivity = [
    { type: 'user', message: 'New user registration: John Doe', time: '5 min ago', status: 'info' },
    { type: 'turf', message: 'New turf approved: Elite Sports Complex', time: '15 min ago', status: 'success' },
    { type: 'payment', message: 'Payment dispute reported for booking #12345', time: '1 hour ago', status: 'warning' },
    { type: 'tournament', message: 'Tournament registration opened: Premier League 2024', time: '2 hours ago', status: 'info' }
  ];

  const pendingApprovals = [
    { id: 1, type: 'Turf Registration', name: 'Green Valley Sports', location: 'Uttara, Dhaka', date: '2024-01-15' },
    { id: 2, type: 'Tournament', name: 'Football Championship', organizer: 'Sports Club BD', date: '2024-01-16' },
    { id: 3, type: 'User Verification', name: 'Sarah Ahmed', role: 'Turf Owner', date: '2024-01-17' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'info': return <Clock className="w-4 h-4 text-blue-500" />;
      default: return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 mt-2">Monitor and manage platform operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className={`text-sm font-medium ${stat.color}`}>{stat.change}</p>
                    </div>
                    <div className={`p-4 rounded-2xl ${stat.bgColor}`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-blue-500" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest platform activities and updates</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      {getStatusIcon(activity.status)}
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{activity.message}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Activities
                </Button>
              </CardContent>
            </Card>

            {/* Pending Approvals */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-500" />
                  Pending Approvals
                </CardTitle>
                <CardDescription>Items requiring your review</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {pendingApprovals.map((item) => (
                    <div key={item.id} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{item.type}</Badge>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {item.location || item.organizer || item.role}
                      </p>
                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4 mr-1" />
                          Review
                        </Button>
                        <Button size="sm">
                          Approve
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {pendingApprovals.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>All caught up! No pending approvals.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-green-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span>Manage Users</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Building2 className="w-6 h-6 text-green-500" />
                  <span>Manage Turfs</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <Trophy className="w-6 h-6 text-purple-500" />
                  <span>Tournaments</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                  <BarChart3 className="w-6 h-6 text-orange-500" />
                  <span>Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
