
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Users, 
  Building2, 
  DollarSign, 
  Server, 
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Database,
  Settings,
  Monitor,
  Zap
} from 'lucide-react';

const SuperAdminDashboard = () => {
  const stats = [
    { 
      label: 'Total Platform Revenue', 
      value: '৳2,45,000', 
      change: '+25.3%', 
      icon: DollarSign, 
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    { 
      label: 'Platform Users', 
      value: '12,847', 
      change: '+1,200', 
      icon: Users, 
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    { 
      label: 'Total Turfs', 
      value: '456', 
      change: '+28', 
      icon: Building2, 
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    { 
      label: 'System Uptime', 
      value: '99.9%', 
      change: 'Excellent', 
      icon: Server, 
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    }
  ];

  const systemAlerts = [
    { type: 'warning', message: 'High database usage detected', time: '5 min ago', severity: 'medium' },
    { type: 'info', message: 'Scheduled maintenance completed', time: '1 hour ago', severity: 'low' },
    { type: 'success', message: 'Security scan completed successfully', time: '2 hours ago', severity: 'low' },
    { type: 'error', message: 'Payment gateway timeout reported', time: '3 hours ago', severity: 'high' }
  ];

  const platformMetrics = [
    { label: 'Active Sessions', value: '1,234', icon: Monitor, color: 'text-blue-500' },
    { label: 'API Calls/min', value: '2,847', icon: Zap, color: 'text-green-500' },
    { label: 'Database Size', value: '45.6GB', icon: Database, color: 'text-purple-500' },
    { label: 'Error Rate', value: '0.02%', icon: AlertTriangle, color: 'text-orange-500' }
  ];

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'error': return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case 'warning': return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case 'success': return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'info': return <Shield className="w-4 h-4 text-blue-500" />;
      default: return <Shield className="w-4 h-4 text-gray-500" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-red-500" />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                Super Admin Dashboard
              </h1>
            </div>
            <p className="text-gray-600">Complete platform oversight and system management</p>
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

          {/* Platform Metrics */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-blue-500" />
                Real-time Platform Metrics
              </CardTitle>
              <CardDescription>Live system performance indicators</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {platformMetrics.map((metric, index) => (
                  <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border">
                    <metric.icon className={`w-8 h-8 mx-auto mb-2 ${metric.color}`} />
                    <p className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
                    <p className="text-sm text-gray-600">{metric.label}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* System Alerts */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  System Alerts
                </CardTitle>
                <CardDescription>Recent system events and notifications</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {systemAlerts.map((alert, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm text-gray-900">{alert.message}</p>
                          <Badge className={getSeverityColor(alert.severity)}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Alerts
                </Button>
              </CardContent>
            </Card>

            {/* System Health */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  System Health
                </CardTitle>
                <CardDescription>Core system components status</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {[
                    { component: 'Database Server', status: 'healthy', uptime: '99.9%' },
                    { component: 'API Gateway', status: 'healthy', uptime: '99.8%' },
                    { component: 'Payment Service', status: 'warning', uptime: '98.5%' },
                    { component: 'File Storage', status: 'healthy', uptime: '99.9%' },
                    { component: 'Email Service', status: 'healthy', uptime: '99.7%' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          item.status === 'healthy' ? 'bg-green-500' : 
                          item.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-medium text-gray-900">{item.component}</span>
                      </div>
                      <span className="text-sm text-gray-600">{item.uptime}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Admin Actions */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-red-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-purple-500" />
                Super Admin Actions
              </CardTitle>
              <CardDescription>Platform-wide management tools</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-red-50 hover:border-red-500">
                  <Shield className="w-6 h-6 text-red-500" />
                  <span>System Config</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-blue-50 hover:border-blue-500">
                  <Users className="w-6 h-6 text-blue-500" />
                  <span>User Management</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-green-50 hover:border-green-500">
                  <Database className="w-6 h-6 text-green-500" />
                  <span>Database Admin</span>
                </Button>
                <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2 hover:bg-purple-50 hover:border-purple-500">
                  <TrendingUp className="w-6 h-6 text-purple-500" />
                  <span>Platform Analytics</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
