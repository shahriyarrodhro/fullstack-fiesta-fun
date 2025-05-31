
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Users, Trophy, Calendar, Plus, Settings, Crown, User } from 'lucide-react';

const PlayerTeams = () => {
  const [activeTab, setActiveTab] = useState('my-teams');

  const myTeams = [
    {
      id: 1,
      name: 'Thunder Bolts',
      role: 'Captain',
      members: 8,
      record: '12W-3L',
      avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop',
      sport: 'Football',
      nextMatch: '2024-01-18 at 6:00 PM'
    },
    {
      id: 2,
      name: 'City Warriors',
      role: 'Player',
      members: 11,
      record: '7W-2L',
      avatar: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop',
      sport: 'Football',
      nextMatch: '2024-01-20 at 4:00 PM'
    }
  ];

  const invitations = [
    {
      id: 1,
      teamName: 'Elite Squad',
      invitedBy: 'John Doe',
      sport: 'Football',
      message: 'We need a skilled midfielder for our upcoming tournament!'
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Teams</h1>
            <p className="text-gray-600">Manage your teams and join new ones</p>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-4 mb-6">
            <Button
              variant={activeTab === 'my-teams' ? 'default' : 'outline'}
              onClick={() => setActiveTab('my-teams')}
            >
              My Teams ({myTeams.length})
            </Button>
            <Button
              variant={activeTab === 'invitations' ? 'default' : 'outline'}
              onClick={() => setActiveTab('invitations')}
            >
              Invitations ({invitations.length})
            </Button>
            <Button
              variant="outline"
              className="ml-auto"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Team
            </Button>
          </div>

          {/* My Teams Tab */}
          {activeTab === 'my-teams' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {myTeams.map((team) => (
                <Card key={team.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16 ring-2 ring-green-500 ring-offset-2">
                          <AvatarImage src={team.avatar} alt={team.name} />
                          <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white font-bold text-lg">
                            {team.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="flex items-center gap-2">
                            {team.name}
                            {team.role === 'Captain' && <Crown className="w-4 h-4 text-yellow-500" />}
                          </CardTitle>
                          <Badge className={team.role === 'Captain' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}>
                            {team.role}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Users className="w-6 h-6 mx-auto mb-1 text-green-600" />
                        <p className="text-2xl font-bold text-gray-900">{team.members}</p>
                        <p className="text-sm text-gray-600">Members</p>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded-lg">
                        <Trophy className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                        <p className="text-lg font-bold text-gray-900">{team.record}</p>
                        <p className="text-sm text-gray-600">Win-Loss</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Next: {team.nextMatch}</span>
                      </div>
                      <Badge variant="outline">{team.sport}</Badge>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        View Details
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Invite Players
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {myTeams.length === 0 && (
                <div className="col-span-2 text-center py-12">
                  <Users className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No teams yet</h3>
                  <p className="text-gray-600 mb-4">Create your first team or join an existing one</p>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Team
                  </Button>
                </div>
              )}
            </div>
          )}

          {/* Invitations Tab */}
          {activeTab === 'invitations' && (
            <div className="space-y-6">
              {invitations.map((invitation) => (
                <Card key={invitation.id} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold">
                          {invitation.teamName.charAt(0)}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{invitation.teamName}</h3>
                          <p className="text-gray-600">Invited by {invitation.invitedBy}</p>
                          <Badge variant="outline" className="mt-1">{invitation.sport}</Badge>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Decline
                        </Button>
                        <Button size="sm">
                          Accept
                        </Button>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-gray-700">{invitation.message}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {invitations.length === 0 && (
                <div className="text-center py-12">
                  <User className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No invitations</h3>
                  <p className="text-gray-600">You don't have any team invitations at the moment</p>
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
