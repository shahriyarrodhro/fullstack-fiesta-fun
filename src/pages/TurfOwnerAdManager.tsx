
import React, { useState } from 'react';
import DashboardSidebar from '@/components/dashboard/DashboardSidebar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Eye, 
  Users, 
  MapPin,
  Calendar,
  Play,
  Pause,
  Settings,
  BarChart3,
  Star
} from 'lucide-react';

const TurfOwnerAdManager = () => {
  const [activeTab, setActiveTab] = useState('campaigns');
  const [isCreatingAd, setIsCreatingAd] = useState(false);

  const [adForm, setAdForm] = useState({
    title: '',
    description: '',
    budget: '',
    duration: '',
    targetCity: '',
    targetAudience: 'all'
  });

  const campaigns = [
    {
      id: 1,
      title: 'Manchester Academy Promotion',
      status: 'Active',
      budget: 5000,
      spent: 2500,
      impressions: 12500,
      clicks: 450,
      bookings: 12,
      targetCity: 'Dhaka',
      duration: '7 days',
      remaining: '3 days'
    },
    {
      id: 2,
      title: 'Weekend Special Offer',
      status: 'Paused',
      budget: 3000,
      spent: 1200,
      impressions: 6800,
      clicks: 220,
      bookings: 8,
      targetCity: 'Dhaka',
      duration: '5 days',
      remaining: '2 days'
    }
  ];

  const adPackages = [
    {
      name: 'Basic Boost',
      price: 1000,
      duration: '3 days',
      features: ['Top 5 in search results', 'City-wide visibility', 'Basic analytics'],
      recommended: false
    },
    {
      name: 'Premium Promotion',
      price: 3000,
      duration: '7 days',
      features: ['Top 3 in search results', 'Featured badge', 'Advanced analytics', 'Priority support'],
      recommended: true
    },
    {
      name: 'Elite Exposure',
      price: 5000,
      duration: '14 days',
      features: ['Top position guarantee', 'Homepage featured', 'Premium badge', 'Detailed insights', '24/7 support'],
      recommended: false
    }
  ];

  const handleCreateAd = () => {
    // Add campaign creation logic
    console.log('Creating ad campaign:', adForm);
    setIsCreatingAd(false);
    setAdForm({
      title: '',
      description: '',
      budget: '',
      duration: '',
      targetCity: '',
      targetAudience: 'all'
    });
  };

  const renderCampaigns = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">My Campaigns</h2>
        <Button onClick={() => setIsCreatingAd(true)}>
          Create New Campaign
        </Button>
      </div>

      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="border-0 shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">{campaign.title}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    <MapPin className="w-4 h-4" />
                    {campaign.targetCity} • {campaign.remaining} remaining
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={campaign.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}>
                    {campaign.status}
                  </Badge>
                  <Button variant="outline" size="sm">
                    {campaign.status === 'Active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <DollarSign className="w-6 h-6 text-blue-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-blue-600">৳{campaign.spent}</div>
                  <div className="text-sm text-gray-600">Spent / ৳{campaign.budget}</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Eye className="w-6 h-6 text-green-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-green-600">{campaign.impressions.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Impressions</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <Target className="w-6 h-6 text-purple-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-purple-600">{campaign.clicks}</div>
                  <div className="text-sm text-gray-600">Clicks</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-orange-600">{campaign.bookings}</div>
                  <div className="text-sm text-gray-600">Bookings</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <BarChart3 className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
                  <div className="text-xl font-bold text-yellow-600">{((campaign.bookings / campaign.clicks) * 100).toFixed(1)}%</div>
                  <div className="text-sm text-gray-600">Conversion</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Create Ad Modal */}
      {isCreatingAd && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <CardTitle>Create New Ad Campaign</CardTitle>
              <CardDescription>Promote your turf to reach more players</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Campaign Title</label>
                <Input
                  value={adForm.title}
                  onChange={(e) => setAdForm({...adForm, title: e.target.value})}
                  placeholder="e.g., Weekend Special Offer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <Textarea
                  value={adForm.description}
                  onChange={(e) => setAdForm({...adForm, description: e.target.value})}
                  placeholder="Describe your promotion or offer..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Target City</label>
                  <Select value={adForm.targetCity} onValueChange={(value) => setAdForm({...adForm, targetCity: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dhaka">Dhaka</SelectItem>
                      <SelectItem value="chittagong">Chittagong</SelectItem>
                      <SelectItem value="sylhet">Sylhet</SelectItem>
                      <SelectItem value="khulna">Khulna</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Target Audience</label>
                  <Select value={adForm.targetAudience} onValueChange={(value) => setAdForm({...adForm, targetAudience: value})}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Players</SelectItem>
                      <SelectItem value="football">Football Players</SelectItem>
                      <SelectItem value="cricket">Cricket Players</SelectItem>
                      <SelectItem value="basketball">Basketball Players</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {adPackages.map((pkg, index) => (
                  <div key={index} className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                    pkg.recommended 
                      ? 'border-green-500 bg-green-50' 
                      : 'border-gray-200 hover:border-green-300'
                  }`}>
                    {pkg.recommended && (
                      <Badge className="bg-green-500 text-white mb-2">Recommended</Badge>
                    )}
                    <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                    <div className="text-2xl font-bold text-green-600 mb-2">৳{pkg.price}</div>
                    <div className="text-sm text-gray-600 mb-3">{pkg.duration}</div>
                    <ul className="space-y-1">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-center gap-2">
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsCreatingAd(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateAd}>
                  Create Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Campaign Analytics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600">₹7,700</div>
            <div className="text-sm text-gray-600">Total Spent</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Eye className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600">19,300</div>
            <div className="text-sm text-gray-600">Total Impressions</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600">670</div>
            <div className="text-sm text-gray-600">Total Clicks</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <div className="text-2xl font-bold text-orange-600">20</div>
            <div className="text-sm text-gray-600">Total Bookings</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Best Performing Campaign</h4>
              <p className="text-blue-700">Manchester Academy Promotion with 2.7% conversion rate</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Peak Performance Time</h4>
              <p className="text-green-700">Evening hours (6 PM - 9 PM) show highest engagement</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-800 mb-2">Audience Insights</h4>
              <p className="text-purple-700">Football players show 40% higher conversion rates</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <h1 className="text-3xl font-bold text-gray-900">Ad Manager</h1>
            </div>
            <p className="text-gray-600">Promote your turf and reach more players</p>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg w-fit">
            <button
              onClick={() => setActiveTab('campaigns')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'campaigns'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Campaigns
            </button>
            <button
              onClick={() => setActiveTab('analytics')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'analytics'
                  ? 'bg-white text-green-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Analytics
            </button>
          </div>

          {activeTab === 'campaigns' ? renderCampaigns() : renderAnalytics()}
        </div>
      </div>
    </div>
  );
};

export default TurfOwnerAdManager;
