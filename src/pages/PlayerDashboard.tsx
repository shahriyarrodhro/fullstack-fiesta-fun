
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Trophy, Users, Clock, Star } from 'lucide-react';

const PlayerDashboard = () => {
  const { user } = useAuth();
  const { language } = useApp();

  const content = {
    en: {
      welcome: 'Welcome back',
      dashboard: 'Player Dashboard',
      quickActions: 'Quick Actions',
      bookTurf: 'Book a Turf',
      joinTournament: 'Join Tournament',
      findTeam: 'Find Team',
      createTeam: 'Create Team',
      upcomingBookings: 'Upcoming Bookings',
      myTeams: 'My Teams',
      achievements: 'Achievements',
      recentActivity: 'Recent Activity',
      viewAll: 'View All',
      noBookings: 'No upcoming bookings',
      noTeams: 'Not part of any teams yet',
      matchesToday: 'Matches Today',
      points: 'Points',
      wins: 'Wins',
      matches: 'Matches Played'
    },
    bn: {
      welcome: 'স্বাগতম',
      dashboard: 'প্লেয়ার ড্যাশবোর্ড',
      quickActions: 'দ্রুত কার্যক্রম',
      bookTurf: 'টার্ফ বুক করুন',
      joinTournament: 'টুর্নামেন্টে যোগ দিন',
      findTeam: 'টিম খুঁজুন',
      createTeam: 'টিম তৈরি করুন',
      upcomingBookings: 'আসন্ন বুকিং',
      myTeams: 'আমার টিম',
      achievements: 'অর্জন',
      recentActivity: 'সাম্প্রতিক কার্যকলাপ',
      viewAll: 'সবগুলো দেখুন',
      noBookings: 'কোন আসন্ন বুকিং নেই',
      noTeams: 'এখনো কোন টিমের সদস্য নন',
      matchesToday: 'আজকের ম্যাচ',
      points: 'পয়েন্ট',
      wins: 'জয়',
      matches: 'খেলা ম্যাচ'
    }
  };

  const t = content[language];

  // Mock data
  const stats = {
    points: 1250,
    wins: 18,
    matches: 25,
    matchesToday: 2
  };

  const upcomingBookings = [
    {
      id: 1,
      turfName: 'Green Field Sports',
      date: '2024-02-01',
      time: '18:00-19:00',
      location: 'Gulshan, Dhaka',
      status: 'confirmed'
    },
    {
      id: 2,
      turfName: 'Barcelona Academy',
      date: '2024-02-03',
      time: '16:00-17:00',
      location: 'Dhanmondi, Dhaka',
      status: 'pending'
    }
  ];

  const myTeams = [
    {
      id: 1,
      name: 'Thunder Bolts',
      role: 'Captain',
      members: 8,
      wins: 12,
      losses: 3
    },
    {
      id: 2,
      name: 'City Warriors',
      role: 'Player',
      members: 11,
      wins: 7,
      losses: 2
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {t.welcome}, {user?.name}!
          </h1>
          <p className="text-gray-600">{t.dashboard}</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{stats.points}</div>
              <div className="text-sm text-gray-600">{t.points}</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{stats.wins}</div>
              <div className="text-sm text-gray-600">{t.wins}</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{stats.matches}</div>
              <div className="text-sm text-gray-600">{t.matches}</div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-orange-600">{stats.matchesToday}</div>
              <div className="text-sm text-gray-600">{t.matchesToday}</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mb-8 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900">{t.quickActions}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white h-auto py-4 flex flex-col items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">{t.bookTurf}</span>
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white h-auto py-4 flex flex-col items-center gap-2">
                <Trophy className="w-5 h-5" />
                <span className="text-sm">{t.joinTournament}</span>
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white h-auto py-4 flex flex-col items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">{t.findTeam}</span>
              </Button>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white h-auto py-4 flex flex-col items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="text-sm">{t.createTeam}</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Bookings */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-gray-900">{t.upcomingBookings}</CardTitle>
              <Button variant="ghost" size="sm" className="text-green-600">
                {t.viewAll}
              </Button>
            </CardHeader>
            <CardContent>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{booking.turfName}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          booking.status === 'confirmed' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {booking.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {booking.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {booking.time}
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 mt-1">
                        <MapPin className="w-4 h-4" />
                        {booking.location}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">{t.noBookings}</p>
              )}
            </CardContent>
          </Card>

          {/* My Teams */}
          <Card className="bg-white shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-gray-900">{t.myTeams}</CardTitle>
              <Button variant="ghost" size="sm" className="text-green-600">
                {t.viewAll}
              </Button>
            </CardHeader>
            <CardContent>
              {myTeams.length > 0 ? (
                <div className="space-y-4">
                  {myTeams.map((team) => (
                    <div key={team.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900">{team.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          team.role === 'Captain' 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {team.role}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {team.members} members
                        </div>
                        <div className="text-green-600">
                          {team.wins}W-{team.losses}L
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">{t.noTeams}</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlayerDashboard;
