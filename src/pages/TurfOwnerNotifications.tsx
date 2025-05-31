
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, DollarSign, Users, MessageCircle, Settings, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

const TurfOwnerNotifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'New Booking Request',
      message: 'John Doe has requested to book Champions Arena for tomorrow 6-7 PM',
      time: '5 minutes ago',
      read: false,
      icon: Calendar,
      color: 'text-blue-600',
      action: 'Approve/Reject'
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Payment of ৳1500 received for booking #BK001 via bKash',
      time: '1 hour ago',
      read: false,
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'review',
      title: 'New Customer Review',
      message: 'Jane Smith left a 5-star review for Victory Ground',
      time: '3 hours ago',
      read: true,
      icon: Users,
      color: 'text-yellow-600'
    },
    {
      id: 4,
      type: 'message',
      title: 'Customer Message',
      message: 'Mike Wilson sent you a message about rescheduling',
      time: '5 hours ago',
      read: true,
      icon: MessageCircle,
      color: 'text-purple-600',
      action: 'Reply'
    },
    {
      id: 5,
      type: 'system',
      title: 'Turf Approval Update',
      message: 'Your turf "Elite Sports Hub" has been approved by admin',
      time: '1 day ago',
      read: true,
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 6,
      type: 'reminder',
      title: 'Maintenance Reminder',
      message: 'Champions Arena is scheduled for maintenance tomorrow',
      time: '2 days ago',
      read: true,
      icon: AlertTriangle,
      color: 'text-orange-600'
    }
  ];

  const filteredNotifications = notifications.filter(notification => 
    filter === 'all' || 
    (filter === 'unread' && !notification.read) ||
    (filter === 'read' && notification.read) ||
    notification.type === filter
  );

  const markAsRead = (id: number) => {
    console.log(`Marking notification ${id} as read`);
  };

  const markAllAsRead = () => {
    console.log('Marking all notifications as read');
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'booking': return 'bg-blue-100 text-blue-800';
      case 'payment': return 'bg-green-100 text-green-800';
      case 'review': return 'bg-yellow-100 text-yellow-800';
      case 'message': return 'bg-purple-100 text-purple-800';
      case 'system': return 'bg-gray-100 text-gray-800';
      case 'reminder': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
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
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
                <p className="text-gray-600">Stay updated with your turf activities</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={markAllAsRead}>
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Mark All Read
                </Button>
                <Button variant="outline">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>
          </div>

          {/* Notification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Bell className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total</p>
                    <p className="text-xl font-bold text-gray-900">{notifications.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <Clock className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Unread</p>
                    <p className="text-xl font-bold text-gray-900">{notifications.filter(n => !n.read).length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bookings</p>
                    <p className="text-xl font-bold text-gray-900">{notifications.filter(n => n.type === 'booking').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Messages</p>
                    <p className="text-xl font-bold text-gray-900">{notifications.filter(n => n.type === 'message').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mb-6">
            {['all', 'unread', 'read', 'booking', 'payment', 'message', 'review'].map((filterType) => (
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

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <Card key={notification.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl ${
                      notification.type === 'booking' ? 'bg-blue-100' :
                      notification.type === 'payment' ? 'bg-green-100' :
                      notification.type === 'review' ? 'bg-yellow-100' :
                      notification.type === 'message' ? 'bg-purple-100' :
                      notification.type === 'system' ? 'bg-gray-100' :
                      'bg-orange-100'
                    }`}>
                      <notification.icon className={`w-6 h-6 ${notification.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{notification.title}</h3>
                        <div className="flex items-center space-x-2">
                          {!notification.read && (
                            <Badge className="bg-blue-500 text-white">New</Badge>
                          )}
                          <Badge className={getTypeColor(notification.type)}>
                            {notification.type}
                          </Badge>
                          <span className="text-sm text-gray-500">{notification.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{notification.message}</p>
                      <div className="flex space-x-2">
                        {!notification.read && (
                          <Button size="sm" variant="outline" onClick={() => markAsRead(notification.id)}>
                            Mark as Read
                          </Button>
                        )}
                        {notification.action && (
                          <Button size="sm" className="bg-green-600 hover:bg-green-700">
                            {notification.action}
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNotifications.length === 0 && (
            <div className="text-center py-12">
              <Bell className="w-16 h-16 mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No notifications found</h3>
              <p className="text-gray-600">You're all caught up!</p>
            </div>
          )}

          {/* Notification Settings */}
          <Card className="mt-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-500" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Customize how you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Email Notifications</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'New Bookings', enabled: true },
                      { label: 'Payment Confirmations', enabled: true },
                      { label: 'Customer Messages', enabled: true },
                      { label: 'Reviews and Ratings', enabled: false }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2">
                        <span className="text-sm text-gray-700">{item.label}</span>
                        <input type="checkbox" defaultChecked={item.enabled} className="rounded" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-medium text-gray-900">Push Notifications</h4>
                  <div className="space-y-2">
                    {[
                      { label: 'Urgent Booking Requests', enabled: true },
                      { label: 'Payment Alerts', enabled: true },
                      { label: 'System Updates', enabled: false },
                      { label: 'Marketing Updates', enabled: false }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-2">
                        <span className="text-sm text-gray-700">{item.label}</span>
                        <input type="checkbox" defaultChecked={item.enabled} className="rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <Button className="mt-6">Save Preferences</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TurfOwnerNotifications;
