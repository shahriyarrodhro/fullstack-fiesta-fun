
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Trophy, 
  Calendar, 
  MapPin, 
  Users, 
  DollarSign,
  Clock,
  Mail,
  Phone,
  CheckCircle,
  ArrowLeft,
  Award
} from 'lucide-react';
import { mockTournaments } from '@/data/mockData';
import { useAuth } from '@/contexts/AuthContext';

const TournamentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isRegistering, setIsRegistering] = useState(false);

  const tournament = mockTournaments.find(t => t.id === parseInt(id || '0'));

  if (!tournament) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Tournament not found</h1>
            <Button onClick={() => navigate('/tournaments')}>Back to Tournaments</Button>
          </div>
        </div>
      </div>
    );
  }

  const handleRegistration = async () => {
    if (!user || !user.isAuthenticated) {
      navigate('/login');
      return;
    }

    setIsRegistering(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Navigate to registration success
    navigate('/tournament/registration-success', {
      state: {
        tournament,
        registrationId: Math.random().toString(36).substr(2, 9).toUpperCase()
      }
    });
  };

  const isRegistrationOpen = tournament.status === 'open' && 
    new Date() < new Date(tournament.registrationDeadline);

  const spotsLeft = tournament.maxTeams - tournament.registeredTeams;

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
            {/* Tournament Header */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={tournament.image} 
                  alt={tournament.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h1 className="text-3xl font-bold mb-2">{tournament.name}</h1>
                  <div className="flex items-center gap-4">
                    <Badge className="bg-green-500 text-white">
                      {tournament.sport.toUpperCase()}
                    </Badge>
                    <Badge className={`${
                      tournament.status === 'open' ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}>
                      {tournament.status.toUpperCase()}
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>

            {/* Tournament Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Tournament Information</CardTitle>
                <CardDescription className="text-base">
                  {tournament.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="text-sm text-gray-600">Start Date</p>
                        <p className="font-medium">{new Date(tournament.startDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                      <Calendar className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="text-sm text-gray-600">End Date</p>
                        <p className="font-medium">{new Date(tournament.endDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="text-sm text-gray-600">Location</p>
                        <p className="font-medium">{tournament.location}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <DollarSign className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="text-sm text-gray-600">Entry Fee</p>
                        <p className="font-medium">৳{tournament.entryFee}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                      <Award className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="text-sm text-gray-600">Prize Pool</p>
                        <p className="font-medium">৳{tournament.prizePool}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <Users className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="text-sm text-gray-600">Format</p>
                        <p className="font-medium">{tournament.format}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rules & Regulations */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Rules & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tournament.rules.map((rule, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Organizer</p>
                    <p className="text-gray-600">{tournament.contact.organizer}</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-green-500" />
                      <span>{tournament.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <span>{tournament.contact.email}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Registration Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg sticky top-6">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-green-500" />
                  Tournament Registration
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Registration Stats */}
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-3xl font-bold text-green-600 mb-1">
                      {tournament.registeredTeams}/{tournament.maxTeams}
                    </div>
                    <p className="text-sm text-gray-600">Teams Registered</p>
                    {spotsLeft > 0 && (
                      <p className="text-xs text-orange-600 mt-1">
                        {spotsLeft} spots remaining
                      </p>
                    )}
                  </div>

                  {/* Registration Deadline */}
                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="flex items-center gap-2 mb-1">
                      <Clock className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800">Registration Deadline</span>
                    </div>
                    <p className="text-yellow-700">
                      {new Date(tournament.registrationDeadline).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Entry Fee */}
                  <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-600 mb-1">Entry Fee</p>
                    <p className="text-2xl font-bold text-green-600">৳{tournament.entryFee}</p>
                    <p className="text-xs text-gray-500 mt-1">per team</p>
                  </div>

                  {/* Registration Button */}
                  <Button
                    onClick={handleRegistration}
                    disabled={!isRegistrationOpen || spotsLeft === 0 || isRegistering}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isRegistering ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Registering...
                      </div>
                    ) : spotsLeft === 0 ? (
                      'Tournament Full'
                    ) : !isRegistrationOpen ? (
                      'Registration Closed'
                    ) : user && user.isAuthenticated ? (
                      'Register Team'
                    ) : (
                      'Login to Register'
                    )}
                  </Button>

                  {(!user || !user.isAuthenticated) && (
                    <p className="text-sm text-center text-gray-500">
                      Please <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/login')}>login</Button> to register for this tournament
                    </p>
                  )}

                  {/* Additional Info */}
                  <div className="text-xs text-gray-500 space-y-1">
                    <p>• Registration fee is non-refundable</p>
                    <p>• Team roster can be modified until tournament start</p>
                    <p>• All players must be present for verification</p>
                  </div>
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
