
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  Clock, 
  Star,
  TrendingUp,
  Target,
  Zap,
  Play,
  Search,
  MessageCircle
} from 'lucide-react';

const PlayerDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { 
      label: 'Total Points', 
      value: '1,250', 
      change: '+12%', 
      icon: TrendingUp, 
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    { 
      label: 'Matches Won', 
      value: '18', 
      change: '+5', 
      icon: Trophy, 
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    { 
      label: 'Total Matches', 
      value: '25', 
      change: '+3', 
      icon: Target, 
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    { 
      label: 'This Week', 
      value: '4', 
      change: 'matches', 
      icon: Calendar, 
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  const quickActions = [
    { 
      icon: MapPin, 
      label: 'Find Turfs', 
      description: 'Discover nearby turfs',
      color: 'bg-green-500',
      action: () => window.location.href = '/turfs'
    },
    { 
      icon: Search, 
      label: 'Matchmaking', 
      description: 'Find players to play with',
      color: 'bg-blue-500',
      action: () => window.location.href = '/player/matchmaking'
    },
    { 
      icon: Trophy, 
      label: 'Tournaments', 
      description: 'Join competitions',
      color: 'bg-purple-500',
      action: () => window.location.href = '/tournaments'
    },
    { 
      icon: Users, 
      label: 'Create Team', 
      description: 'Build your squad',
      color: 'bg-orange-500',
      action: () => window.location.href = '/player/teams/create'
    }
  ];

  const upcomingBookings = [
    {
      id: 1,
      venue: 'Champions Arena',
      date: 'Today',
      time: '6:00 PM - 7:00 PM',
      location: 'Dhanmondi, Dhaka',
      status: 'confirmed',
      price: 2500
    },
    {
      id: 2,
      venue: 'Victory Ground',
      date: 'Tomorrow',
      time: '4:00 PM - 5:00 PM', 
      location: 'Gulshan, Dhaka',
      status: 'pending',
      price: 1800
    }
  ];

  const myTeams = [
    {
      id: 1,
      name: 'Thunder Bolts',
      role: 'Captain',
      members: 8,
      record: '12W-3L',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'City Warriors',
      role: 'Player',
      members: 11,
      record: '7W-2L',
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-3xl font-bold text-gray-900">
                Good evening, {user?.name?.split(' ')[0] || 'Player'}! 👋
              </h1>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
                <Button size="sm" className="bg-green-500 hover:bg-green-600">
                  <Play className="w-4 h-4 mr-2" />
                  Quick Book
                </Button>
              </div>
            </div>
            <p className="text-gray-600">Ready to dominate the field? Let's get started!</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
                    </div>
                    <div className={`p-3 rounded-full ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="mb-8 border-0 shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>Get started with your next game</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-6 flex flex-col items-center space-y-3 hover:shadow-md transition-shadow"
                    onClick={action.action}
                  >
                    <div className={`p-3 rounded-full ${action.color} text-white`}>
                      <action.icon className="w-6 h-6" />
                    </div>
                    <div className="text-center">
                      <p className="font-medium text-gray-900">{action.label}</p>
                      <p className="text-sm text-gray-500">{action.description}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Bookings */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Upcoming Bookings</CardTitle>
                  <CardDescription>Your scheduled matches</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-green-600">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">{booking.venue}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'confirmed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {booking.status}
                      </span>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{booking.date} • {booking.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{booking.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-green-600">৳{booking.price}</span>
                        <Button size="sm" variant="outline" className="text-xs">
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {upcomingBookings.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Calendar className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>No upcoming bookings</p>
                    <Button className="mt-3" size="sm">Book a Turf</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* My Teams */}
            <Card className="border-0 shadow-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>My Teams</CardTitle>
                  <CardDescription>Teams you're part of</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-green-600">
                  View All
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {myTeams.map((team) => (
                  <div key={team.id} className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={team.avatar} alt={team.name} />
                        <AvatarFallback className="bg-green-500 text-white">
                          {team.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-900">{team.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            team.role === 'Captain' 
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {team.role}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {team.members} members
                          </span>
                          <span className="text-green-600 font-medium">{team.record}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {myTeams.length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <Users className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>You're not part of any teams yet</p>
                    <Button className="mt-3" size="sm">Create Team</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDashboard;
