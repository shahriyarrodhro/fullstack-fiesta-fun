
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Trophy, Search, Calendar, Users, DollarSign, Plus, Eye, Settings, CheckCircle, Clock, XCircle } from 'lucide-react';

const AdminTournaments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const tournaments = [
    {
      id: 1,
      name: 'Dhaka Premier League 2024',
      organizer: 'Sports Association',
      type: 'Football',
      format: 'League',
      status: 'ongoing',
      teams: 16,
      maxTeams: 16,
      entryFee: 5000,
      prizePool: 50000,
      startDate: '2024-02-15',
      endDate: '2024-03-15'
    },
    {
      id: 2,
      name: 'Cricket Champions Cup',
      organizer: 'Cricket Federation',
      type: 'Cricket',
      format: 'Knockout',
      status: 'upcoming',
      teams: 6,
      maxTeams: 8,
      entryFee: 8000,
      prizePool: 75000,
      startDate: '2024-03-01',
      endDate: '2024-03-10'
    },
    {
      id: 3,
      name: 'Basketball Slam',
      organizer: 'Basketball Club',
      type: 'Basketball',
      format: 'Round Robin',
      status: 'completed',
      teams: 12,
      maxTeams: 12,
      entryFee: 3000,
      prizePool: 30000,
      startDate: '2024-01-15',
      endDate: '2024-01-30'
    },
    {
      id: 4,
      name: 'Summer Football League',
      organizer: 'Youth Sports',
      type: 'Football',
      format: 'League',
      status: 'pending',
      teams: 4,
      maxTeams: 10,
      entryFee: 4000,
      prizePool: 40000,
      startDate: '2024-04-01',
      endDate: '2024-04-30'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'ongoing': return <CheckCircle className="w-4 h-4" />;
      case 'upcoming': return <Calendar className="w-4 h-4" />;
      case 'completed': return <Trophy className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tournament.organizer.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tournament.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || tournament.status === filter || tournament.type.toLowerCase() === filter.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Tournament Management</h1>
                <p className="text-gray-600">Manage and approve tournament requests</p>
              </div>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Create Tournament
              </Button>
            </div>
          </div>

          {/* Tournament Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-100 rounded-xl">
                    <Trophy className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Tournaments</p>
                    <p className="text-2xl font-bold text-gray-900">{tournaments.length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-100 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Active</p>
                    <p className="text-2xl font-bold text-gray-900">{tournaments.filter(t => t.status === 'ongoing').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-yellow-100 rounded-xl">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Pending Approval</p>
                    <p className="text-2xl font-bold text-gray-900">{tournaments.filter(t => t.status === 'pending').length}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-100 rounded-xl">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Total Prize Pool</p>
                    <p className="text-2xl font-bold text-gray-900">৳{tournaments.reduce((sum, t) => sum + t.prizePool, 0).toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search tournaments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex space-x-2">
              {['all', 'ongoing', 'upcoming', 'pending', 'completed', 'football', 'cricket', 'basketball'].map((filterType) => (
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
          </div>

          {/* Tournaments Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredTournaments.map((tournament) => (
              <Card key={tournament.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{tournament.name}</CardTitle>
                      <CardDescription>
                        Organized by {tournament.organizer}
                      </CardDescription>
                    </div>
                    <Badge className={`${getStatusColor(tournament.status)} flex items-center gap-1`}>
                      {getStatusIcon(tournament.status)}
                      {tournament.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <p className="text-gray-600">Sport Type</p>
                      <p className="font-semibold">{tournament.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Format</p>
                      <p className="font-semibold">{tournament.format}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Teams</p>
                      <p className="font-semibold">{tournament.teams}/{tournament.maxTeams}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Entry Fee</p>
                      <p className="font-semibold text-green-600">৳{tournament.entryFee.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>Prize Pool: ৳{tournament.prizePool.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{tournament.startDate} - {tournament.endDate}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Settings className="w-4 h-4 mr-1" />
                      Manage
                    </Button>
                    {tournament.status === 'pending' && (
                      <>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">
                          Approve
                        </Button>
                        <Button size="sm" variant="destructive">
                          Reject
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTournaments;
