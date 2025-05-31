
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Server, Database, Shield, Monitor, Zap, AlertTriangle, CheckCircle, Settings, RefreshCw } from 'lucide-react';

const SuperAdminSystem = () => {
  const systemServices = [
    {
      name: 'API Gateway',
      status: 'healthy',
      uptime: '99.9%',
      responseTime: '45ms',
      requests: '2.4M',
      errors: '0.02%'
    },
    {
      name: 'Database Cluster',
      status: 'healthy',
      uptime: '99.8%',
      responseTime: '12ms',
      requests: '1.8M',
      errors: '0.01%'
    },
    {
      name: 'File Storage',
      status: 'healthy',
      uptime: '99.9%',
      responseTime: '89ms',
      requests: '456K',
      errors: '0.03%'
    },
    {
      name: 'Email Service',
      status: 'warning',
      uptime: '98.5%',
      responseTime: '234ms',
      requests: '123K',
      errors: '1.2%'
    },
    {
      name: 'Payment Gateway',
      status: 'healthy',
      uptime: '99.7%',
      responseTime: '156ms',
      requests: '89K',
      errors: '0.05%'
    },
    {
      name: 'Notification Service',
      status: 'healthy',
      uptime: '99.6%',
      responseTime: '67ms',
      requests: '234K',
      errors: '0.08%'
    }
  ];

  const systemMetrics = [
    { label: 'CPU Usage', value: '45%', status: 'good', icon: Monitor },
    { label: 'Memory Usage', value: '62%', status: 'good', icon: Database },
    { label: 'Disk Usage', value: '78%', status: 'warning', icon: Server },
    { label: 'Network I/O', value: '234 MB/s', status: 'good', icon: Zap }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy': return 'bg-green-100 text-green-800';
      case 'warning': return 'bg-yellow-100 text-yellow-800';
      case 'error': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy': return <CheckCircle className="w-4 h-4" />;
      case 'warning': return <AlertTriangle className="w-4 h-4" />;
      case 'error': return <AlertTriangle className="w-4 h-4" />;
      default: return <CheckCircle className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">System Management</h1>
                <p className="text-gray-600">Monitor and manage platform infrastructure</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh
                </Button>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure
                </Button>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {systemMetrics.map((metric, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl ${
                      metric.status === 'good' ? 'bg-green-100' :
                      metric.status === 'warning' ? 'bg-yellow-100' : 'bg-red-100'
                    }`}>
                      <metric.icon className={`w-6 h-6 ${
                        metric.status === 'good' ? 'text-green-600' :
                        metric.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                      }`} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{metric.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Services Status */}
          <Card className="border-0 shadow-lg mb-8">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-500" />
                System Services
              </CardTitle>
              <CardDescription>Real-time status of all platform services</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {systemServices.map((service, index) => (
                  <div key={index} className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-gray-900">{service.name}</h4>
                      <Badge className={`${getStatusColor(service.status)} flex items-center gap-1`}>
                        {getStatusIcon(service.status)}
                        {service.status}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Uptime</p>
                        <p className="font-medium text-gray-900">{service.uptime}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Response Time</p>
                        <p className="font-medium text-gray-900">{service.responseTime}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Requests</p>
                        <p className="font-medium text-gray-900">{service.requests}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Error Rate</p>
                        <p className="font-medium text-gray-900">{service.errors}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* System Actions */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-red-500" />
                  System Controls
                </CardTitle>
                <CardDescription>Critical system management actions</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Database className="w-4 h-4 mr-3" />
                    Database Backup
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <RefreshCw className="w-4 h-4 mr-3" />
                    Clear Cache
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Monitor className="w-4 h-4 mr-3" />
                    Restart Services
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                    <AlertTriangle className="w-4 h-4 mr-3" />
                    Emergency Shutdown
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-green-500" />
                  System Logs
                </CardTitle>
                <CardDescription>Recent system activities and errors</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  {[
                    { level: 'INFO', message: 'Database backup completed successfully', time: '2 min ago' },
                    { level: 'WARN', message: 'High memory usage detected on server-02', time: '5 min ago' },
                    { level: 'INFO', message: 'New user registration: 15 users', time: '8 min ago' },
                    { level: 'ERROR', message: 'Email service timeout - retry successful', time: '12 min ago' },
                    { level: 'INFO', message: 'Cache cleared successfully', time: '15 min ago' }
                  ].map((log, index) => (
                    <div key={index} className="flex items-start space-x-3 p-2 bg-gray-50 rounded">
                      <Badge className={
                        log.level === 'ERROR' ? 'bg-red-100 text-red-800' :
                        log.level === 'WARN' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }>
                        {log.level}
                      </Badge>
                      <div className="flex-1">
                        <p className="text-sm text-gray-900">{log.message}</p>
                        <p className="text-xs text-gray-500">{log.time}</p>
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

export default SuperAdminSystem;
