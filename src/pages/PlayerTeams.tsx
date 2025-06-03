
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Users, 
  Plus, 
  Crown, 
  Star, 
  Trophy, 
  Calendar,
  MapPin,
  MoreHorizontal,
  Settings,
  UserPlus,
  Eye
} from 'lucide-react';

const PlayerTeams = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('my-teams');

  const myTeams = [
    {
      id: 1,
      name: 'Thunder Bolts',
      role: 'Captain',
      members: 12,
      sport: 'Football',
      record: '15W-3L-2D',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop',
      description: 'Competitive football team looking for league matches',
      founded: '2023-06-15',
      nextMatch: '2024-02-15',
      achievements: ['City League Champions 2023', 'Regional Cup Runners-up']
    },
    {
      id: 2,
      name: 'City Warriors',
      role: 'Player',
      members: 8,
      sport: 'Cricket',
      record: '12W-4L',
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
      description: 'Weekend cricket enthusiasts',
      founded: '2023-08-20',
      nextMatch: '2024-02-18',
      achievements: ['Monthly Tournament Winners']
    }
  ];

  const teamInvitations = [
    {
      id: 1,
      teamName: 'Elite Strikers',
      inviterName: 'Ahmed Rahman',
      sport: 'Football',
      role: 'Midfielder',
      inviteDate: '2024-01-28',
      teamAvatar: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      teamName: 'Basketball Kings',
      inviterName: 'Sarah Khan',
      sport: 'Basketball',
      role: 'Point Guard',
      inviteDate: '2024-01-26',
      teamAvatar: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=100&h=100&fit=crop'
    }
  ];

  const handleCreateTeam = () => {
    navigate('/player/teams/create');
  };

  const handleViewTeam = (teamId: number) => {
    navigate(`/player/teams/${teamId}`);
  };

  const handleAcceptInvite = (inviteId: number) => {
    console.log('Accepting invite:', inviteId);
    // Add invite acceptance logic here
  };

  const handleDeclineInvite = (inviteId: number) => {
    console.log('Declining invite:', inviteId);
    // Add invite decline logic here
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">My Teams</h1>
              <p className="text-gray-600">Manage your teams and view invitations</p>
            </div>
            <Button 
              onClick={handleCreateTeam}
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 shadow-lg"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Team
            </Button>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('my-teams')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'my-teams'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              My Teams ({myTeams.length})
            </button>
            <button
              onClick={() => setActiveTab('invitations')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'invitations'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Invitations ({teamInvitations.length})
            </button>
          </div>

          {/* My Teams */}
          {activeTab === 'my-teams' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTeams.map((team) => (
                <Card key={team.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16 ring-2 ring-blue-500 ring-offset-2">
                          <AvatarImage src={team.avatar} alt={team.name} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white font-bold text-lg">
                            {team.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{team.name}</CardTitle>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={team.role === 'Captain' ? 'default' : 'secondary'}>
                              {team.role === 'Captain' && <Crown className="w-3 h-3 mr-1" />}
                              {team.role}
                            </Badge>
                            <Badge variant="outline">{team.sport}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4">{team.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Users className="w-5 h-5 text-green-500 mx-auto mb-1" />
                        <p className="text-sm text-gray-600">Members</p>
                        <p className="font-bold text-green-600">{team.members}</p>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Trophy className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                        <p className="text-sm text-gray-600">Record</p>
                        <p className="font-bold text-blue-600">{team.record}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Founded: {new Date(team.founded).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Next Match: {new Date(team.nextMatch).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {team.achievements.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-medium text-gray-900 mb-2">Recent Achievements</h4>
                        <div className="space-y-1">
                          {team.achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                              <Star className="w-3 h-3 text-yellow-400 fill-current" />
                              <span>{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => handleViewTeam(team.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Details
                      </Button>
                      {team.role === 'Captain' && (
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => navigate(`/player/teams/${team.id}/manage`)}
                        >
                          <Settings className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {myTeams.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No teams yet</h3>
                  <p className="text-gray-500 mb-4">Create your first team and start building your squad</p>
                  <Button onClick={handleCreateTeam}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Team
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Team Invitations */}
          {activeTab === 'invitations' && (
            <div className="space-y-4">
              {teamInvitations.map((invitation) => (
                <Card key={invitation.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={invitation.teamAvatar} alt={invitation.teamName} />
                          <AvatarFallback>{invitation.teamName.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{invitation.teamName}</h3>
                          <p className="text-gray-600">
                            Invited by <span className="font-medium">{invitation.inviterName}</span> as {invitation.role}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{invitation.sport}</Badge>
                            <span className="text-sm text-gray-500">
                              {new Date(invitation.inviteDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline"
                          onClick={() => handleDeclineInvite(invitation.id)}
                        >
                          Decline
                        </Button>
                        <Button 
                          onClick={() => handleAcceptInvite(invitation.id)}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Accept
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {teamInvitations.length === 0 && (
                <div className="text-center py-12">
                  <UserPlus className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No pending invitations</h3>
                  <p className="text-gray-500">You'll see team invitations here when you receive them</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerTeams;
