
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Calendar, Users, MapPin, Clock, Star } from 'lucide-react';

const PlayerTournaments = () => {
  const [activeTab, setActiveTab] = useState('available');

  const availableTournaments = [
    {
      id: 1,
      name: 'Summer Championship 2024',
      date: '2024-07-15',
      time: '09:00 AM',
      location: 'Dhaka Sports Complex',
      teams: 16,
      maxTeams: 32,
      prize: '₹50,000',
      fee: '₹2,000',
      status: 'open'
    },
    {
      id: 2,
      name: 'City League Tournament',
      date: '2024-07-20',
      time: '10:00 AM',
      location: 'Green Valley Turf',
      teams: 8,
      maxTeams: 16,
      prize: '₹25,000',
      fee: '₹1,500',
      status: 'open'
    }
  ];

  const myTournaments = [
    {
      id: 3,
      name: 'Spring Cup 2024',
      date: '2024-06-10',
      status: 'completed',
      position: 2,
      prize: '₹15,000'
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tournaments</h1>
            <p className="text-gray-600">Join tournaments and compete with other players</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('available')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'available'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Available Tournaments
            </button>
            <button
              onClick={() => setActiveTab('my')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'my'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My Tournaments
            </button>
          </div>

          {/* Available Tournaments */}
          {activeTab === 'available' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableTournaments.map((tournament) => (
                <Card key={tournament.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center justify-between">
                      <Trophy className="w-8 h-8 text-yellow-500" />
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        {tournament.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{tournament.name}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {tournament.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{tournament.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{tournament.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{tournament.teams}/{tournament.maxTeams} teams</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t">
                        <div>
                          <p className="text-sm text-gray-600">Prize Pool</p>
                          <p className="font-bold text-green-600">{tournament.prize}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Entry Fee</p>
                          <p className="font-bold text-blue-600">{tournament.fee}</p>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                        Register Team
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* My Tournaments */}
          {activeTab === 'my' && (
            <div className="space-y-6">
              {myTournaments.map((tournament) => (
                <Card key={tournament.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{tournament.name}</h3>
                          <p className="text-gray-600">{tournament.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-yellow-500" />
                          <span className="font-semibold">#{tournament.position} Place</span>
                        </div>
                        <p className="text-green-600 font-bold">{tournament.prize}</p>
                        <Badge variant={tournament.status === 'completed' ? 'default' : 'secondary'}>
                          {tournament.status}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerTournaments;
