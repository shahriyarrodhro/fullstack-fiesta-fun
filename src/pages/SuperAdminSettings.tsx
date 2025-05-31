
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Settings, Shield, Globe, Bell, CreditCard, Database, Mail, Smartphone } from 'lucide-react';

const SuperAdminSettings = () => {
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [registrationEnabled, setRegistrationEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const systemSettings = [
    { key: 'platform_name', label: 'Platform Name', value: 'TurfMaster', type: 'text' },
    { key: 'platform_tagline', label: 'Platform Tagline', value: 'Your Premier Turf Booking Platform', type: 'text' },
    { key: 'support_email', label: 'Support Email', value: 'support@turfmaster.com', type: 'email' },
    { key: 'support_phone', label: 'Support Phone', value: '+880 1234 567890', type: 'tel' },
    { key: 'commission_rate', label: 'Default Commission Rate (%)', value: '10', type: 'number' },
    { key: 'booking_cancellation_hours', label: 'Cancellation Deadline (Hours)', value: '24', type: 'number' }
  ];

  const paymentSettings = [
    { provider: 'bKash', enabled: true, apiKey: 'bk_live_***************' },
    { provider: 'Nagad', enabled: true, apiKey: 'ng_live_***************' },
    { provider: 'Rocket', enabled: false, apiKey: 'rk_test_***************' },
    { provider: 'SSL Commerz', enabled: true, apiKey: 'ssl_live_***************' }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Platform Settings</h1>
            <p className="text-gray-600">Configure global platform settings and preferences</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className={`border-0 shadow-lg cursor-pointer transition-all ${maintenanceMode ? 'bg-red-50 border-red-200' : 'hover:shadow-xl'}`}>
              <CardContent className="p-4 text-center">
                <Shield className={`w-8 h-8 mx-auto mb-2 ${maintenanceMode ? 'text-red-600' : 'text-gray-600'}`} />
                <h3 className="font-semibold text-gray-900 mb-1">Maintenance Mode</h3>
                <Switch checked={maintenanceMode} onCheckedChange={setMaintenanceMode} />
                <p className="text-xs text-gray-600 mt-1">{maintenanceMode ? 'Platform is offline' : 'Platform is online'}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-4 text-center">
                <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                <h3 className="font-semibold text-gray-900 mb-1">User Registration</h3>
                <Switch checked={registrationEnabled} onCheckedChange={setRegistrationEnabled} />
                <p className="text-xs text-gray-600 mt-1">{registrationEnabled ? 'Registration open' : 'Registration closed'}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-4 text-center">
                <Mail className="w-8 h-8 mx-auto mb-2 text-green-600" />
                <h3 className="font-semibold text-gray-900 mb-1">Email Notifications</h3>
                <Switch checked={emailNotifications} onCheckedChange={setEmailNotifications} />
                <p className="text-xs text-gray-600 mt-1">{emailNotifications ? 'Emails enabled' : 'Emails disabled'}</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-4 text-center">
                <Smartphone className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                <h3 className="font-semibold text-gray-900 mb-1">SMS Notifications</h3>
                <Switch checked={smsNotifications} onCheckedChange={setSmsNotifications} />
                <p className="text-xs text-gray-600 mt-1">{smsNotifications ? 'SMS enabled' : 'SMS disabled'}</p>
              </CardContent>
            </Card>
          </div>

          {/* System Configuration */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-blue-500" />
                  System Configuration
                </CardTitle>
                <CardDescription>Core platform settings and configuration</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {systemSettings.map((setting) => (
                    <div key={setting.key} className="space-y-2">
                      <Label htmlFor={setting.key}>{setting.label}</Label>
                      <Input
                        id={setting.key}
                        type={setting.type}
                        defaultValue={setting.value}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-6">Save System Settings</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-green-500" />
                  Payment Gateway Configuration
                </CardTitle>
                <CardDescription>Manage payment provider settings</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {paymentSettings.map((provider, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{provider.provider}</h4>
                        <p className="text-sm text-gray-600">{provider.apiKey}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch defaultChecked={provider.enabled} />
                        <Button variant="outline" size="sm">Configure</Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4">Update Payment Settings</Button>
              </CardContent>
            </Card>
          </div>

          {/* Advanced Settings */}
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-orange-50">
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-purple-500" />
                  Database & Performance
                </CardTitle>
                <CardDescription>Database and performance optimization settings</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label>Database Connection Pool Size</Label>
                    <Select defaultValue="50">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">25 connections</SelectItem>
                        <SelectItem value="50">50 connections</SelectItem>
                        <SelectItem value="100">100 connections</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Cache TTL (seconds)</Label>
                    <Input type="number" defaultValue="3600" />
                  </div>
                  <div>
                    <Label>Session Timeout (minutes)</Label>
                    <Input type="number" defaultValue="30" />
                  </div>
                  <div>
                    <Label>API Rate Limit (requests/minute)</Label>
                    <Input type="number" defaultValue="1000" />
                  </div>
                </div>
                <Button className="w-full mt-4">Update Performance Settings</Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-orange-500" />
                  Notification Templates
                </CardTitle>
                <CardDescription>Customize system notification messages</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <Label>Welcome Email Template</Label>
                    <Textarea 
                      placeholder="Welcome to TurfMaster! Your account has been created successfully..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>Booking Confirmation Template</Label>
                    <Textarea 
                      placeholder="Your booking has been confirmed for {{turf_name}} on {{date}} at {{time}}..."
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label>System Maintenance Notice</Label>
                    <Textarea 
                      placeholder="TurfMaster will be undergoing scheduled maintenance on {{date}} from {{start_time}} to {{end_time}}..."
                      rows={3}
                    />
                  </div>
                </div>
                <Button className="w-full mt-4">Save Templates</Button>
              </CardContent>
            </Card>
          </div>

          {/* Security Settings */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                Security & Access Control
              </CardTitle>
              <CardDescription>Platform security and access control settings</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Authentication</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Two-Factor Authentication</Label>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Password Complexity</Label>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Session Security</Label>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Access Control</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>IP Whitelisting</Label>
                      <Switch defaultChecked={false} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Geographic Restrictions</Label>
                      <Switch defaultChecked={false} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>API Access Control</Label>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Monitoring</h4>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label>Activity Logging</Label>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Error Tracking</Label>
                      <Switch defaultChecked={true} />
                    </div>
                    <div className="flex items-center justify-between">
                      <Label>Performance Monitoring</Label>
                      <Switch defaultChecked={true} />
                    </div>
                  </div>
                </div>
              </div>
              <Button className="mt-6">Update Security Settings</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminSettings;
