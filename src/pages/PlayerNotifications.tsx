
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/contexts/AuthContext';
import { Bell, Calendar, Trophy, Users, CreditCard, MapPin, Settings, CheckCircle, Clock } from 'lucide-react';

const PlayerNotifications = () => {
  const { user, bookings, teams } = useAuth();
  const [filter, setFilter] = useState('all');
  const [readNotifications, setReadNotifications] = useState<number[]>([]);

  // Generate dynamic notifications based on user data
  const generateNotifications = () => {
    const notifications = [];
    let idCounter = 1;

    // Booking-related notifications
    bookings.forEach(booking => {
      if (booking.status === 'confirmed') {
        notifications.push({
          id: idCounter++,
          type: 'booking',
          title: 'Booking Confirmed',
          message: `Your booking for ${booking.turfName} on ${booking.date} at ${booking.timeSlot} has been confirmed.`,
          time: '2 hours ago',
          read: readNotifications.includes(idCounter - 1),
          icon: Calendar,
          color: 'text-green-600'
        });
      }
      
      if (booking.paymentStatus === 'paid') {
        notifications.push({
          id: idCounter++,
          type: 'payment',
          title: 'Payment Successful',
          message: `Your payment of ৳${booking.totalAmount} for ${booking.turfName} has been processed successfully.`,
          time: '1 day ago',
          read: readNotifications.includes(idCounter - 1),
          icon: CreditCard,
          color: 'text-purple-600'
        });
      }
    });

    // Team-related notifications
    teams.forEach(team => {
      notifications.push({
        id: idCounter++,
        type: 'team',
        title: 'Team Created',
        message: `Your team "${team.name}" has been successfully created. Start inviting players now!`,
        time: '3 days ago',
        read: readNotifications.includes(idCounter - 1),
        icon: Users,
        color: 'text-blue-600'
      });
    });

    // General notifications
    notifications.push({
      id: idCounter++,
      type: 'tournament',
      title: 'Tournament Registration Open',
      message: 'Dhaka Premier League 2024 registration is now open. Entry fee: ৳5,000',
      time: '5 hours ago',
      read: readNotifications.includes(idCounter - 1),
      icon: Trophy,
      color: 'text-yellow-600'
    });

    notifications.push({
      id: idCounter++,
      type: 'match',
      title: 'New Match Available',
      message: 'A new football match is available in your area. Join now!',
      time: '1 day ago',
      read: readNotifications.includes(idCounter - 1),
      icon: MapPin,
      color: 'text-red-600'
    });

    return notifications.sort((a, b) => {
      // Unread notifications first
      if (!a.read && b.read) return -1;
      if (a.read && !b.read) return 1;
      return 0;
    });
  };

  const notifications = generateNotifications();

  const filteredNotifications = notifications.filter(notification => 
    filter === 'all' || 
    (filter === 'unread' && !notification.read) ||
    (filter === 'read' && notification.read) ||
    notification.type === filter
  );

  const markAsRead = (id: number) => {
    if (!readNotifications.includes(id)) {
      setReadNotifications(prev => [...prev, id]);
    }
  };

  const markAllAsRead = () => {
    const allIds = notifications.map(n => n.id);
    setReadNotifications(allIds);
  };

  const unreadCount = notifications.filter(n => !readNotifications.includes(n.id)).length;

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Notifications</h1>
                <p className="text-gray-600">Stay updated with your activities ({unreadCount} unread)</p>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" onClick={markAllAsRead} disabled={unreadCount === 0}>
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
                    <p className="text-xl font-bold text-gray-900">{unreadCount}</p>
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
                {filterType === 'unread' && unreadCount > 0 && (
                  <Badge variant="secondary" className="ml-1">{unreadCount}</Badge>
                )}
              </Button>
            ))}
          </div>

          {/* Notifications List */}
          <div className="space-y-4">
            {filteredNotifications.map((notification) => (
              <Card key={notification.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${!readNotifications.includes(notification.id) ? 'bg-blue-50' : ''}`}>
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
                          {!readNotifications.includes(notification.id) && (
                            <Badge className="bg-blue-500 text-white">New</Badge>
                          )}
                          <span className="text-sm text-gray-500">{notification.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{notification.message}</p>
                      <div className="flex space-x-2">
                        {!readNotifications.includes(notification.id) && (
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
              <p className="text-gray-600">
                {filter === 'all' ? "You're all caught up!" : `No ${filter} notifications found.`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerNotifications;
