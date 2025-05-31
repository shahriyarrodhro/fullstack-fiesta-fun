
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  Filter,
  MessageCircle,
  UserPlus,
  Clock,
  Trophy
} from 'lucide-react';

const PlayerMatchmaking = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('');

  const mockPlayers = [
    {
      id: 1,
      name: 'Ahmed Rahman',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      sport: 'football',
      skillLevel: 'intermediate',
      location: 'Dhanmondi',
      rating: 4.8,
      gamesPlayed: 45,
      preferredPosition: 'Midfielder',
      availability: 'Evening',
      lookingFor: 'Team match this weekend',
      badges: ['Team Player', 'Regular']
    },
    {
      id: 2,
      name: 'Fatima Ali',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=100&h=100&fit=crop&crop=face',
      sport: 'cricket',
      skillLevel: 'advanced',
      location: 'Gulshan',
      rating: 4.9,
      gamesPlayed: 67,
      preferredPosition: 'All-rounder',
      availability: 'Weekend',
      lookingFor: 'Cricket tournament team',
      badges: ['Pro Player', 'Captain']
    },
    {
      id: 3,
      name: 'Mohammad Khan',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      sport: 'football',
      skillLevel: 'beginner',
      location: 'Uttara',
      rating: 4.3,
      gamesPlayed: 12,
      preferredPosition: 'Defender',
      availability: 'Morning',
      lookingFor: 'Friendly matches to improve',
      badges: ['Newcomer']
    },
    {
      id: 4,
      name: 'Sarah Hassan',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      sport: 'basketball',
      skillLevel: 'intermediate',
      location: 'Banani',
      rating: 4.6,
      gamesPlayed: 32,
      preferredPosition: 'Point Guard',
      availability: 'Evening',
      lookingFor: 'Regular basketball group',
      badges: ['Team Player', 'Consistent']
    }
  ];

  const quickMatches = [
    {
      id: 1,
      title: 'Football Match Tonight',
      location: 'Champions Arena, Dhanmondi',
      time: 'Today 7:00 PM',
      players: '8/11',
      skillLevel: 'intermediate',
      organizer: 'Ahmed Rahman',
      type: 'Casual Match'
    },
    {
      id: 2,
      title: 'Cricket Practice Session',
      location: 'Victory Ground, Gulshan',
      time: 'Tomorrow 4:00 PM',
      players: '6/11',
      skillLevel: 'all levels',
      organizer: 'Fatima Ali',
      type: 'Practice'
    },
    {
      id: 3,
      title: 'Basketball Tournament',
      location: 'Sports Complex, Uttara',
      time: 'This Weekend',
      players: '12/16',
      skillLevel: 'advanced',
      organizer: 'Sarah Hassan',
      type: 'Tournament'
    }
  ];

  const filteredPlayers = mockPlayers.filter(player => {
    return (
      (searchQuery === '' || player.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
       player.lookingFor.toLowerCase().includes(searchQuery.toLowerCase())) &&
      (selectedSport === '' || selectedSport === 'all-sports' || player.sport === selectedSport) &&
      (selectedLocation === '' || selectedLocation === 'all-locations' || player.location.toLowerCase().includes(selectedLocation.toLowerCase())) &&
      (selectedSkillLevel === '' || selectedSkillLevel === 'all-levels' || player.skillLevel === selectedSkillLevel)
    );
  });

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
              Find Players & Matches
            </h1>
            <p className="text-gray-600">Connect with players and join matches in your area</p>
          </div>

          {/* Search & Filters */}
          <Card className="mb-8 border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-blue-500" />
                Search & Filter
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search players or matches..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 border-gray-200 focus:border-blue-500 transition-all duration-300"
                  />
                </div>

                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger className="h-12 border-gray-200">
                    <SelectValue placeholder="All Sports" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-sports">All Sports</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="cricket">Cricket</SelectItem>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                  <SelectTrigger className="h-12 border-gray-200">
                    <SelectValue placeholder="All Locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-locations">All Locations</SelectItem>
                    <SelectItem value="dhanmondi">Dhanmondi</SelectItem>
                    <SelectItem value="gulshan">Gulshan</SelectItem>
                    <SelectItem value="banani">Banani</SelectItem>
                    <SelectItem value="uttara">Uttara</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSkillLevel} onValueChange={setSelectedSkillLevel}>
                  <SelectTrigger className="h-12 border-gray-200">
                    <SelectValue placeholder="All Skill Levels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all-levels">All Levels</SelectItem>
                    <SelectItem value="beginner">Beginner</SelectItem>
                    <SelectItem value="intermediate">Intermediate</SelectItem>
                    <SelectItem value="advanced">Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Players List */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-green-500" />
                    Available Players ({filteredPlayers.length})
                  </CardTitle>
                  <CardDescription>Connect with players looking for matches</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {filteredPlayers.map((player) => (
                      <div key={player.id} className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-green-50 hover:to-blue-50 transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-green-500">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-16 w-16 ring-2 ring-green-500 ring-offset-2">
                            <AvatarImage src={player.avatar} alt={player.name} />
                            <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-500 text-white font-bold">
                              {player.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h3 className="font-semibold text-gray-900 text-lg">{player.name}</h3>
                                <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                    <span>{player.rating}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Trophy className="w-4 h-4 text-purple-500" />
                                    <span>{player.gamesPlayed} games</span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline" className="hover:bg-blue-50 transition-all duration-300">
                                  <MessageCircle className="w-4 h-4 mr-1" />
                                  Message
                                </Button>
                                <Button size="sm" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-300">
                                  <UserPlus className="w-4 h-4 mr-1" />
                                  Connect
                                </Button>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                              <div className="flex items-center gap-1">
                                <span className="text-gray-500">Sport:</span>
                                <span className="font-medium capitalize">{player.sport}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <span className="text-gray-500">Level:</span>
                                <span className="font-medium capitalize">{player.skillLevel}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{player.location}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3 text-gray-500" />
                                <span className="text-gray-600">{player.availability}</span>
                              </div>
                            </div>

                            <p className="text-gray-700 mb-3 italic">"{player.lookingFor}"</p>
                            
                            <div className="flex items-center gap-2">
                              {player.badges.map((badge, index) => (
                                <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700 text-xs">
                                  {badge}
                                </Badge>
                              ))}
                              <Badge className="bg-green-100 text-green-700 text-xs">
                                {player.preferredPosition}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Matches Sidebar */}
            <div>
              <Card className="border-0 shadow-lg sticky top-6">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-orange-50">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    Quick Matches
                  </CardTitle>
                  <CardDescription>Join matches happening soon</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {quickMatches.map((match) => (
                      <div key={match.id} className="p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-gray-100 hover:from-purple-50 hover:to-orange-50 transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-purple-500">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">{match.title}</h4>
                          <Badge className="bg-purple-100 text-purple-700 text-xs">
                            {match.type}
                          </Badge>
                        </div>
                        
                        <div className="space-y-2 text-sm text-gray-600 mb-3">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{match.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{match.time}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              <span>{match.players} players</span>
                            </div>
                            <span className="text-green-600 font-medium capitalize">{match.skillLevel}</span>
                          </div>
                        </div>
                        
                        <p className="text-xs text-gray-500 mb-3">Organized by {match.organizer}</p>
                        
                        <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 transition-all duration-300">
                          Join Match
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMatchmaking;
