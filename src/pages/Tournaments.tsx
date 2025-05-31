
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, MapPin, Trophy, Users, Search, Filter, Star } from 'lucide-react';

const Tournaments = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const tournaments = [
    {
      id: 1,
      name: 'Dhaka Premier League 2024',
      sport: 'Football',
      date: '2024-02-15',
      location: 'Multiple Venues, Dhaka',
      prize: 50000,
      teams: 16,
      status: 'open',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop',
      entryFee: 5000,
      organizer: 'Dhaka Sports Association'
    },
    {
      id: 2,
      name: 'Cricket Champions Cup',
      sport: 'Cricket',
      date: '2024-03-01',
      location: 'Central Cricket Ground',
      prize: 75000,
      teams: 8,
      status: 'upcoming',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      entryFee: 8000,
      organizer: 'Cricket Federation'
    },
    {
      id: 3,
      name: 'Basketball Slam Championship',
      sport: 'Basketball',
      date: '2024-01-30',
      location: 'Indoor Sports Complex',
      prize: 30000,
      teams: 12,
      status: 'ongoing',
      image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=300&fit=crop',
      entryFee: 3000,
      organizer: 'Basketball Association'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredTournaments = tournaments.filter(tournament => {
    const matchesSearch = tournament.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tournament.sport.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || tournament.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-64" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop)'
      }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Epic <span className="text-green-400">Tournaments</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Compete with the best teams and win amazing prizes
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
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
            {['all', 'open', 'upcoming', 'ongoing', 'completed'].map((status) => (
              <Button
                key={status}
                variant={filter === status ? 'default' : 'outline'}
                onClick={() => setFilter(status)}
                className="capitalize"
              >
                {status}
              </Button>
            ))}
          </div>
        </div>

        {/* Tournaments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTournaments.map((tournament) => (
            <Card key={tournament.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={tournament.image} 
                  alt={tournament.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(tournament.status)}>
                    {tournament.status}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="bg-black/60 text-white">
                    {tournament.sport}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{tournament.name}</CardTitle>
                <p className="text-sm text-gray-600">{tournament.organizer}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{tournament.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{tournament.teams} teams</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{tournament.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Trophy className="w-4 h-4" />
                    <span>৳{tournament.prize.toLocaleString()}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-600">Entry Fee:</span>
                    <span className="font-semibold text-green-600">৳{tournament.entryFee.toLocaleString()}</span>
                  </div>
                  
                  <Button 
                    className="w-full"
                    disabled={tournament.status === 'completed' || tournament.status === 'ongoing'}
                  >
                    {tournament.status === 'open' ? 'Register Team' : 
                     tournament.status === 'upcoming' ? 'Registration Closed' :
                     tournament.status === 'ongoing' ? 'Tournament Active' : 'View Results'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTournaments.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No tournaments found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Create Tournament CTA */}
        <Card className="mt-12 border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
          <CardContent className="p-8 text-center">
            <Trophy className="w-16 h-16 mx-auto text-green-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Organize Your Own Tournament</h3>
            <p className="text-gray-600 mb-6">Create and manage tournaments for your community</p>
            <Button size="lg">
              Create Tournament
            </Button>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Tournaments;
