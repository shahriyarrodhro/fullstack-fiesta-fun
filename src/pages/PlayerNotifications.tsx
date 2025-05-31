
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bell, Calendar, Trophy, Users, CreditCard, MapPin, Settings, CheckCircle, Clock } from 'lucide-react';

const PlayerNotifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'Booking Confirmed',
      message: 'Your booking for Champions Arena on Jan 20, 2024 at 6:00 PM has been confirmed.',
      time: '2 hours ago',
      read: false,
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      id: 2,
      type: 'tournament',
      title: 'Tournament Registration Open',
      message: 'Dhaka Premier League 2024 registration is now open. Entry fee: ৳5,000',
      time: '5 hours ago',
      read: false,
      icon: Trophy,
      color: 'text-yellow-600'
    },
    {
      id: 3,
      type: 'team',
      title: 'Team Invitation',
      message: 'You have been invited to join "Thunder Strikers" team.',
      time: '1 day ago',
      read: true,
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: 4,
      type: 'payment',
      title: 'Payment Successful',
      message: 'Your payment of ৳2,500 for turf booking has been processed successfully.',
      time: '2 days ago',
      read: true,
      icon: CreditCard,
      color: 'text-purple-600'
    },
    {
      id: 5,
      type: 'match',
      title: 'Match Reminder',
      message: 'Your match starts in 30 minutes at Victory Ground.',
      time: '3 days ago',
      read: true,
      icon: MapPin,
      color: 'text-red-600'
    }
  ];

  const filteredNotifications = notifications.filter(notification => 
    filter === 'all' || 
    (filter === 'unread' && !notification.read) ||
    (filter === 'read' && notification.read) ||
    notification.type === filter
  );

  const markAsRead = (id: number) => {
    // In a real app, this would update the backend
    console.log(`Marking notification ${id} as read`);
  };

  const markAllAsRead = () => {
    // In a real app, this would update all notifications
    console.log('Marking all notifications as read');
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
                <p className="text-gray-600">Stay updated with your activities</p>
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
                    <Trophy className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Tournaments</p>
                    <p className="text-xl font-bold text-gray-900">{notifications.filter(n => n.type === 'tournament').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Calendar className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bookings</p>
                    <p className="text-xl font-bold text-gray-900">{notifications.filter(n => n.type === 'booking').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Filter Tabs */}
          <div className="flex space-x-2 mb-6">
            {['all', 'unread', 'read', 'booking', 'tournament', 'team', 'payment', 'match'].map((filterType) => (
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
                      notification.type === 'booking' ? 'bg-green-100' :
                      notification.type === 'tournament' ? 'bg-yellow-100' :
                      notification.type === 'team' ? 'bg-blue-100' :
                      notification.type === 'payment' ? 'bg-purple-100' :
                      'bg-red-100'
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
        </div>
      </div>
    </div>
  );
};

export default PlayerNotifications;
