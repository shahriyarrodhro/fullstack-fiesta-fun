
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Calendar, 
  Users, 
  MapPin, 
  Clock, 
  Star,
  ArrowLeft,
  Target,
  Award,
  DollarSign
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const TournamentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);

  // Mock tournament data
  const tournament = {
    id: parseInt(id || '1'),
    name: 'Dhaka Premier League 2024',
    description: 'The biggest football tournament in Dhaka featuring top teams from across the city. Join us for an exciting month of competitive football.',
    startDate: '2024-02-15',
    endDate: '2024-03-15',
    registrationDeadline: '2024-02-10',
    location: 'Gulshan Sports Complex',
    venue: 'Multiple venues across Dhaka',
    prize: '50,000',
    entryFee: '5,000',
    maxTeams: 32,
    registeredTeams: 16,
    status: 'Registration Open',
    type: 'Football',
    format: 'Knockout + League',
    matchDuration: '90 minutes',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop'
    ],
    rules: [
      'Minimum 11 players per team',
      'Maximum 16 players per squad',
      'Teams must arrive 30 minutes before match time',
      'Proper football boots required',
      'Valid team registration required'
    ],
    schedule: [
      { phase: 'Group Stage', dates: 'Feb 15-25', description: 'Round robin matches' },
      { phase: 'Quarter Finals', dates: 'Feb 28-Mar 2', description: 'Knockout rounds' },
      { phase: 'Semi Finals', dates: 'Mar 5-6', description: 'Top 4 teams compete' },
      { phase: 'Final', dates: 'Mar 15', description: 'Championship match' }
    ],
    prizes: [
      { position: '1st Place', amount: '25,000', trophy: 'Championship Trophy' },
      { position: '2nd Place', amount: '15,000', trophy: 'Runner-up Trophy' },
      { position: '3rd Place', amount: '10,000', trophy: 'Bronze Medal' }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleRegistration = async () => {
    if (!user || !user.isAuthenticated) {
      navigate('/login');
      return;
    }

    setIsRegistering(true);
    
    // Simulate registration process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    navigate('/tournament/register', { 
      state: { 
        tournament,
        playerDetails: {
          name: user.name,
          email: user.email,
          phone: user.phone
        }
      } 
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="outline" 
          onClick={() => navigate('/tournaments')}
          className="mb-6 hover:bg-green-50 hover:border-green-500 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tournaments
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={tournament.images[currentImageIndex]} 
                  alt={tournament.name}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {tournament.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    tournament.status === 'Registration Open' ? 'bg-green-500' : 'bg-yellow-500'
                  } text-white`}>
                    {tournament.status}
                  </Badge>
                </div>
              </div>
            </Card>

            {/* Tournament Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-3xl font-bold text-gray-900 mb-2">
                      {tournament.name}
                    </CardTitle>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{tournament.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{tournament.registeredTeams}/{tournament.maxTeams} teams</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">৳{tournament.prize}</div>
                    <div className="text-sm text-gray-500">Total Prize Pool</div>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {tournament.description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Tournament Schedule */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-500" />
                  Tournament Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {tournament.schedule.map((phase, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                        <p className="text-sm text-gray-600">{phase.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-gray-900">{phase.dates}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Prizes */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-yellow-500" />
                  Prize Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {tournament.prizes.map((prize, index) => (
                    <div key={index} className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border-2 border-yellow-200">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trophy className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900 mb-2">{prize.position}</h4>
                      <p className="text-2xl font-bold text-green-600 mb-1">৳{prize.amount}</p>
                      <p className="text-sm text-gray-600">{prize.trophy}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Rules */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-500" />
                  Tournament Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Registration Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg sticky top-6">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-green-500" />
                  Register Your Team
                </CardTitle>
                <CardDescription>Join this exciting tournament</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Start Date</p>
                      <p className="font-medium">{new Date(tournament.startDate).toLocaleDateString()}</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <Clock className="w-5 h-5 text-green-500 mx-auto mb-1" />
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-medium">{tournament.matchDuration}</p>
                    </div>
                  </div>

                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 mb-2">Registration Details</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Entry Fee:</span>
                        <span className="font-semibold text-green-600">৳{tournament.entryFee}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Deadline:</span>
                        <span>{new Date(tournament.registrationDeadline).toLocaleDateString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Format:</span>
                        <span>{tournament.format}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Prize Pool</span>
                      <span className="text-2xl font-bold text-green-600">৳{tournament.prize}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleRegistration}
                    disabled={isRegistering || tournament.status !== 'Registration Open'}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isRegistering ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </div>
                    ) : (
                      <>
                        <Trophy className="w-4 h-4 mr-2" />
                        {user && user.isAuthenticated ? 'Register Team' : 'Login to Register'}
                      </>
                    )}
                  </Button>

                  {!user || !user.isAuthenticated ? (
                    <p className="text-sm text-center text-gray-500">
                      Please <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/login')}>login</Button> to register for this tournament
                    </p>
                  ) : null}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;
