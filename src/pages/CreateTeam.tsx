
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Users, 
  Upload, 
  Save, 
  ArrowLeft,
  Trophy,
  MapPin,
  Calendar,
  Star
} from 'lucide-react';

const CreateTeam = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  
  const [teamData, setTeamData] = useState({
    name: '',
    description: '',
    sport: '',
    city: user?.city || '',
    maxPlayers: 11,
    logo: '',
    isPrivate: false
  });

  const handleInputChange = (field: string, value: any) => {
    setTeamData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setTeamData(prev => ({ ...prev, logo: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreateTeam = async () => {
    if (!teamData.name || !teamData.sport) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create team and navigate to team details
      const newTeamId = Math.random().toString(36).substr(2, 9);
      navigate('/player/teams', { 
        state: { 
          newTeam: {
            id: newTeamId,
            ...teamData,
            captain: user?.name,
            members: 1,
            createdAt: new Date().toISOString()
          }
        }
      });
    } catch (error) {
      console.error('Create team error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/player/teams')}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Teams
          </Button>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Team</h1>
            <p className="text-gray-600">Set up your team and start building your squad</p>
          </div>

          <div className="max-w-2xl space-y-6">
            {/* Team Basic Info */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-500" />
                  Team Information
                </CardTitle>
                <CardDescription>Basic details about your team</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Team Logo */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="h-24 w-24">
                        <AvatarImage src={teamData.logo} alt="Team Logo" />
                        <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white text-2xl">
                          {teamData.name ? teamData.name.charAt(0).toUpperCase() : 'T'}
                        </AvatarFallback>
                      </Avatar>
                      <label className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition-colors">
                        <Upload className="w-4 h-4" />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoUpload}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Team Logo</h3>
                      <p className="text-gray-600">Upload a logo for your team</p>
                      <p className="text-sm text-blue-600 mt-1">Click upload icon to add logo</p>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="teamName" className="flex items-center gap-2 mb-2">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        Team Name *
                      </Label>
                      <Input
                        id="teamName"
                        value={teamData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Enter team name"
                        className="text-lg font-medium"
                      />
                    </div>

                    <div>
                      <Label htmlFor="sport" className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-green-500" />
                        Sport *
                      </Label>
                      <Select value={teamData.sport} onValueChange={(value) => handleInputChange('sport', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select sport" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="football">Football</SelectItem>
                          <SelectItem value="cricket">Cricket</SelectItem>
                          <SelectItem value="basketball">Basketball</SelectItem>
                          <SelectItem value="tennis">Tennis</SelectItem>
                          <SelectItem value="badminton">Badminton</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="city" className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-red-500" />
                        City
                      </Label>
                      <Select value={teamData.city} onValueChange={(value) => handleInputChange('city', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dhaka">Dhaka</SelectItem>
                          <SelectItem value="Chittagong">Chittagong</SelectItem>
                          <SelectItem value="Sylhet">Sylhet</SelectItem>
                          <SelectItem value="Khulna">Khulna</SelectItem>
                          <SelectItem value="Rajshahi">Rajshahi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="maxPlayers" className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-purple-500" />
                        Max Players
                      </Label>
                      <Select value={teamData.maxPlayers.toString()} onValueChange={(value) => handleInputChange('maxPlayers', parseInt(value))}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 Players (5v5)</SelectItem>
                          <SelectItem value="7">7 Players (7v7)</SelectItem>
                          <SelectItem value="11">11 Players (11v11)</SelectItem>
                          <SelectItem value="15">15 Players (Squad)</SelectItem>
                          <SelectItem value="20">20 Players (Large Squad)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Team Description */}
                  <div>
                    <Label htmlFor="description" className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-indigo-500" />
                      Team Description
                    </Label>
                    <Textarea
                      id="description"
                      value={teamData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your team, playing style, goals, etc..."
                      rows={4}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Settings */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                <CardTitle>Team Settings</CardTitle>
                <CardDescription>Configure your team preferences</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 mb-2">Captain Privileges</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• You will be automatically assigned as team captain</li>
                      <li>• Invite and manage team members</li>
                      <li>• Schedule matches and join tournaments</li>
                      <li>• Edit team information and settings</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-800 mb-2">Next Steps</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Invite players to join your team</li>
                      <li>• Set up team practice schedule</li>
                      <li>• Register for upcoming tournaments</li>
                      <li>• Start finding matches with other teams</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create Button */}
            <div className="flex justify-end">
              <Button
                onClick={handleCreateTeam}
                disabled={isLoading || !teamData.name || !teamData.sport}
                className="px-8 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Team...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    Create Team
                  </div>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
