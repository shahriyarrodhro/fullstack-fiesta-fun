
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Search, 
  MapPin, 
  Users, 
  Clock, 
  MessageCircle, 
  UserPlus,
  Filter,
  Star,
  Calendar,
  Target,
  Trophy,
  CheckCircle
} from 'lucide-react';

const PlayerMatchmaking = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [connectedPlayers, setConnectedPlayers] = useState<number[]>([]);
  const [joinedMatches, setJoinedMatches] = useState<number[]>([]);

  const nearbyPlayers = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      sport: 'Football',
      skill: 'Advanced',
      location: 'Gulshan, Dhaka',
      distance: '2.5 km',
      rating: 4.8,
      matches: 45,
      winRate: 78,
      isOnline: true,
      bio: 'Passionate footballer looking for competitive matches'
    },
    {
      id: 2,
      name: 'Sarah Khan',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=100&h=100&fit=crop',
      sport: 'Tennis',
      skill: 'Intermediate',
      location: 'Dhanmondi, Dhaka',
      distance: '3.2 km',
      rating: 4.5,
      matches: 32,
      winRate: 65,
      isOnline: false,
      bio: 'Weekend tennis enthusiast, looking for doubles partners'
    },
    {
      id: 3,
      name: 'Mohammad Ali',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      sport: 'Cricket',
      skill: 'Expert',
      location: 'Banani, Dhaka',
      distance: '1.8 km',
      rating: 4.9,
      matches: 67,
      winRate: 85,
      isOnline: true,
      bio: 'Professional cricket coach and player'
    }
  ];

  const quickMatches = [
    {
      id: 1,
      title: 'Football Match Tonight',
      location: 'Champions Arena',
      time: '7:00 PM',
      date: 'Today',
      players: 8,
      maxPlayers: 10,
      skill: 'All Levels',
      organizer: 'Ahmed Rahman',
      sport: 'Football',
      description: 'Friendly football match, all skill levels welcome!'
    },
    {
      id: 2,
      title: 'Cricket Practice Session',
      location: 'Victory Ground',
      time: '6:00 AM',
      date: 'Tomorrow',
      players: 12,
      maxPlayers: 16,
      skill: 'Intermediate+',
      organizer: 'Mohammad Ali',
      sport: 'Cricket',
      description: 'Morning cricket practice with coaching tips'
    },
    {
      id: 3,
      title: 'Tennis Doubles',
      location: 'Elite Sports Club',
      time: '5:00 PM',
      date: 'Feb 18',
      players: 3,
      maxPlayers: 4,
      skill: 'Beginner',
      organizer: 'Sarah Khan',
      sport: 'Tennis',
      description: 'Looking for one more player for doubles match'
    }
  ];

  const filteredPlayers = nearbyPlayers.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = !selectedSport || player.sport.toLowerCase() === selectedSport.toLowerCase();
    const matchesLocation = !selectedLocation || player.location.toLowerCase().includes(selectedLocation.toLowerCase());
    return matchesSearch && matchesSport && matchesLocation;
  });

  const handleConnect = (playerId: number) => {
    if (connectedPlayers.includes(playerId)) {
      setConnectedPlayers(prev => prev.filter(id => id !== playerId));
    } else {
      setConnectedPlayers(prev => [...prev, playerId]);
    }
  };

  const handleMessage = (playerId: number) => {
    navigate('/player/messages', { state: { playerId } });
  };

  const handleJoinMatch = (matchId: number) => {
    if (joinedMatches.includes(matchId)) {
      setJoinedMatches(prev => prev.filter(id => id !== matchId));
    } else {
      setJoinedMatches(prev => [...prev, matchId]);
    }
  };

  const handleCreateMatch = () => {
    navigate('/player/matches/create');
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Players & Matches</h1>
            <p className="text-gray-600">Connect with players and join matches in your area</p>
          </div>

          {/* Search and Filters */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-500" />
                Search Players
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                  placeholder="Search by name..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="focus:border-green-500"
                />
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Sports</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="basketball">Basketball</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Areas</SelectItem>
                    <SelectItem value="gulshan">Gulshan</SelectItem>
                    <SelectItem value="dhanmondi">Dhanmondi</SelectItem>
                    <SelectItem value="banani">Banani</SelectItem>
                    <SelectItem value="uttara">Uttara</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Nearby Players */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Nearby Players</h2>
                <Button onClick={handleCreateMatch} variant="outline">
                  Create Match
                </Button>
              </div>
              <div className="space-y-4">
                {filteredPlayers.map((player) => (
                  <Card key={player.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <Avatar className="h-16 w-16 ring-2 ring-green-500 ring-offset-2">
                              <AvatarImage src={player.avatar} alt={player.name} />
                              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            {player.isOnline && (
                              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-gray-900">{player.name}</h3>
                            <p className="text-gray-600 text-sm mb-2">{player.bio}</p>
                            <div className="flex items-center gap-4 mt-1">
                              <Badge variant="secondary">{player.sport}</Badge>
                              <Badge variant="outline">{player.skill}</Badge>
                              {player.isOnline && <Badge className="bg-green-500">Online</Badge>}
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {player.location} • {player.distance}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                {player.rating}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-600 mb-1">{player.winRate}%</div>
                          <div className="text-sm text-gray-500">{player.matches} matches</div>
                          <div className="flex gap-2 mt-4">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleMessage(player.id)}
                            >
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                            <Button 
                              size="sm"
                              onClick={() => handleConnect(player.id)}
                              className={`${
                                connectedPlayers.includes(player.id) 
                                  ? 'bg-gray-600 hover:bg-gray-700' 
                                  : 'bg-green-600 hover:bg-green-700'
                              }`}
                            >
                              {connectedPlayers.includes(player.id) ? (
                                <CheckCircle className="w-4 h-4 mr-1" />
                              ) : (
                                <UserPlus className="w-4 h-4 mr-1" />
                              )}
                              {connectedPlayers.includes(player.id) ? 'Connected' : 'Connect'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Matches Sidebar */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Matches</h2>
              <div className="space-y-4">
                {quickMatches.map((match) => (
                  <Card key={match.id} className="border-0 shadow-lg">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2">{match.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{match.description}</p>
                      <div className="space-y-2 text-sm text-gray-600 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{match.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{match.time} • {match.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{match.players}/{match.maxPlayers} players</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4" />
                          <span>{match.skill}</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500 mb-3">
                        Organized by {match.organizer}
                      </div>
                      <Button 
                        size="sm" 
                        className={`w-full ${
                          joinedMatches.includes(match.id)
                            ? 'bg-gray-600 hover:bg-gray-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                        onClick={() => handleJoinMatch(match.id)}
                      >
                        {joinedMatches.includes(match.id) ? 'Joined' : 'Join Match'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Your Joined Matches */}
              {joinedMatches.length > 0 && (
                <Card className="mt-6 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-green-500" />
                      Your Upcoming Matches
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {quickMatches
                        .filter(match => joinedMatches.includes(match.id))
                        .map(match => (
                          <div key={match.id} className="p-3 bg-green-50 rounded-lg">
                            <h4 className="font-medium text-green-800">{match.title}</h4>
                            <p className="text-sm text-green-600">{match.date} at {match.time}</p>
                          </div>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMatchmaking;
