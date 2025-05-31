
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Home, 
  Calendar, 
  MapPin, 
  Trophy, 
  Users, 
  MessageCircle, 
  Settings, 
  LogOut,
  CreditCard,
  Bell,
  User
} from 'lucide-react';

const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const sidebarItems = [
    { icon: Home, label: 'Dashboard', path: '/player', active: location.pathname === '/player' },
    { icon: Calendar, label: 'My Bookings', path: '/player/bookings', active: location.pathname === '/player/bookings' },
    { icon: MapPin, label: 'Find Turfs', path: '/turfs', active: location.pathname === '/turfs' },
    { icon: Trophy, label: 'Tournaments', path: '/tournaments', active: location.pathname === '/tournaments' },
    { icon: Users, label: 'My Teams', path: '/player/teams', active: location.pathname === '/player/teams' },
    { icon: MessageCircle, label: 'Messages', path: '/player/messages', active: location.pathname === '/player/messages' },
    { icon: CreditCard, label: 'Payments', path: '/player/payments', active: location.pathname === '/player/payments' },
    { icon: Bell, label: 'Notifications', path: '/player/notifications', active: location.pathname === '/player/notifications' },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">⚡</span>
          </div>
          <span className="text-xl font-bold text-gray-900">TurfMaster</span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-green-500 text-white">
              {user?.name?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || 'user@example.com'}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              item.active
                ? 'bg-green-50 text-green-700 border-r-2 border-green-500'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Link
          to="/player/settings"
          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
