
import React from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
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
  MessageCircle,
  Home
} from 'lucide-react';

const PlayerDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { 
      label: 'Total Points', 
      value: '1,250', 
      change: '+12%', 
      icon: TrendingUp, 
      color: 'text-green-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100'
    },
    { 
      label: 'Matches Won', 
      value: '18', 
      change: '+5', 
      icon: Trophy, 
      color: 'text-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100'
    },
    { 
      label: 'Total Matches', 
      value: '25', 
      change: '+3', 
      icon: Target, 
      color: 'text-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100'
    },
    { 
      label: 'This Week', 
      value: '4', 
      change: 'matches', 
      icon: Calendar, 
      color: 'text-orange-600',
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100'
    }
  ];

  const quickActions = [
    { 
      icon: MapPin, 
      label: 'Find Turfs', 
      description: 'Discover nearby turfs',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      action: () => navigate('/turfs')
    },
    { 
      icon: Search, 
      label: 'Matchmaking', 
      description: 'Find players to play with',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      action: () => navigate('/player/matchmaking')
    },
    { 
      icon: Trophy, 
      label: 'Tournaments', 
      description: 'Join competitions',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      action: () => navigate('/tournaments')
    },
    { 
      icon: Users, 
      label: 'Create Team', 
      description: 'Build your squad',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      action: () => navigate('/player/teams/create')
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
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  Good evening, {user?.name?.split(' ')[0] || 'Player'}! 👋
                </h1>
                <p className="text-gray-600 mt-2">Ready to dominate the field? Let's get started!</p>
              </div>
              <div className="flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/')}
                  className="hover:bg-green-50 hover:border-green-500 transition-all duration-300"
                >
                  <Home className="w-4 h-4 mr-2" />
                  Home
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/player/messages')}
                  className="hover:bg-blue-50 hover:border-blue-500 transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Messages
                </Button>
                <Button 
                  size="sm" 
                  onClick={() => navigate('/turfs')}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Play className="w-4 h-4 mr-2" />
                  Quick Book
                </Button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                      <p className={`text-sm ${stat.color} font-medium`}>{stat.change}</p>
                    </div>
                    <div className={`p-4 rounded-2xl ${stat.bgColor} shadow-lg`}>
                      <stat.icon className={`w-8 h-8 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quick Actions */}
          <Card className="mb-8 border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-2 text-xl">
                <Zap className="w-6 h-6 text-green-500" />
                Quick Actions
              </CardTitle>
              <CardDescription>Get started with your next game</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-auto p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-500 group"
                    onClick={action.action}
                  >
                    <div className={`p-4 rounded-2xl ${action.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                      <action.icon className="w-8 h-8" />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 mb-1">{action.label}</p>
                      <p className="text-sm text-gray-500">{action.description}</p>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Upcoming Bookings */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      Upcoming Bookings
                    </CardTitle>
                    <CardDescription>Your scheduled matches</CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-blue-600 hover:bg-blue-100 transition-all duration-300"
                    onClick={() => navigate('/player/bookings')}
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {upcomingBookings.map((booking) => (
                  <div key={booking.id} className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-green-50 hover:to-blue-50 transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-500">
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
                        <span className="font-semibold text-green-600">৳{booking.price}</span>
                        <Button size="sm" variant="outline" className="text-xs hover:bg-green-50 transition-all duration-300">
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
                    <Button className="mt-3" size="sm" onClick={() => navigate('/turfs')}>Book a Turf</Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* My Teams */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-orange-50">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      My Teams
                    </CardTitle>
                    <CardDescription>Teams you're part of</CardDescription>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-purple-600 hover:bg-purple-100 transition-all duration-300"
                    onClick={() => navigate('/player/teams')}
                  >
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                {myTeams.map((team) => (
                  <div key={team.id} className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-orange-50 transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-purple-500">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-14 w-14 ring-2 ring-purple-500 ring-offset-2">
                        <AvatarImage src={team.avatar} alt={team.name} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-orange-500 text-white font-bold">
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
                    <Button className="mt-3" size="sm" onClick={() => navigate('/player/teams/create')}>Create Team</Button>
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
