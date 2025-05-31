
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
  User,
  Search,
  BarChart3,
  Shield,
  Building2
} from 'lucide-react';

const DashboardSidebar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getMenuItems = () => {
    if (!user) return [];

    const baseItems = [
      { icon: Home, label: 'Dashboard', path: `/${user.role === 'player' ? 'player' : user.role}`, active: location.pathname === `/${user.role === 'player' ? 'player' : user.role}` },
    ];

    switch (user.role) {
      case 'player':
        return [
          ...baseItems,
          { icon: Calendar, label: 'My Bookings', path: '/player/bookings', active: location.pathname === '/player/bookings' },
          { icon: MapPin, label: 'Find Turfs', path: '/turfs', active: location.pathname === '/turfs' },
          { icon: Search, label: 'Matchmaking', path: '/player/matchmaking', active: location.pathname === '/player/matchmaking' },
          { icon: Trophy, label: 'Tournaments', path: '/tournaments', active: location.pathname === '/tournaments' },
          { icon: Users, label: 'My Teams', path: '/player/teams', active: location.pathname === '/player/teams' },
          { icon: MessageCircle, label: 'Messages', path: '/player/messages', active: location.pathname === '/player/messages' },
          { icon: CreditCard, label: 'Payments', path: '/player/payments', active: location.pathname === '/player/payments' },
          { icon: Bell, label: 'Notifications', path: '/player/notifications', active: location.pathname === '/player/notifications' },
        ];
      
      case 'turf_owner':
        return [
          ...baseItems,
          { icon: Building2, label: 'My Turfs', path: '/turf-owner/turfs', active: location.pathname === '/turf-owner/turfs' },
          { icon: Calendar, label: 'Bookings', path: '/turf-owner/bookings', active: location.pathname === '/turf-owner/bookings' },
          { icon: BarChart3, label: 'Analytics', path: '/turf-owner/analytics', active: location.pathname === '/turf-owner/analytics' },
          { icon: CreditCard, label: 'Revenue', path: '/turf-owner/revenue', active: location.pathname === '/turf-owner/revenue' },
          { icon: MessageCircle, label: 'Messages', path: '/turf-owner/messages', active: location.pathname === '/turf-owner/messages' },
          { icon: Bell, label: 'Notifications', path: '/turf-owner/notifications', active: location.pathname === '/turf-owner/notifications' },
        ];
      
      case 'admin':
        return [
          ...baseItems,
          { icon: Users, label: 'Users', path: '/admin/users', active: location.pathname === '/admin/users' },
          { icon: Building2, label: 'Turfs', path: '/admin/turfs', active: location.pathname === '/admin/turfs' },
          { icon: Trophy, label: 'Tournaments', path: '/admin/tournaments', active: location.pathname === '/admin/tournaments' },
          { icon: BarChart3, label: 'Analytics', path: '/admin/analytics', active: location.pathname === '/admin/analytics' },
          { icon: CreditCard, label: 'Payments', path: '/admin/payments', active: location.pathname === '/admin/payments' },
          { icon: MessageCircle, label: 'Messages', path: '/admin/messages', active: location.pathname === '/admin/messages' },
          { icon: Bell, label: 'Notifications', path: '/admin/notifications', active: location.pathname === '/admin/notifications' },
        ];
      
      case 'superadmin':
        return [
          ...baseItems,
          { icon: Shield, label: 'System', path: '/superadmin/system', active: location.pathname === '/superadmin/system' },
          { icon: Users, label: 'All Users', path: '/superadmin/users', active: location.pathname === '/superadmin/users' },
          { icon: Building2, label: 'All Turfs', path: '/superadmin/turfs', active: location.pathname === '/superadmin/turfs' },
          { icon: BarChart3, label: 'Platform Analytics', path: '/superadmin/analytics', active: location.pathname === '/superadmin/analytics' },
          { icon: CreditCard, label: 'Revenue Management', path: '/superadmin/revenue', active: location.pathname === '/superadmin/revenue' },
          { icon: Settings, label: 'Platform Settings', path: '/superadmin/settings', active: location.pathname === '/superadmin/settings' },
        ];
      
      default:
        return baseItems;
    }
  };

  const sidebarItems = getMenuItems();

  return (
    <div className="w-64 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 h-screen flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
            <span className="text-white font-bold text-lg">⚡</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            TurfMaster
          </span>
        </Link>
      </div>

      {/* User Profile */}
      <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="flex items-center space-x-3">
          <Avatar className="h-12 w-12 ring-2 ring-green-500 ring-offset-2">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white font-semibold">
              {user?.name?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900 truncate">
              {user?.name || 'User'}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || 'user@example.com'}
            </p>
            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-1 font-medium">
              {user?.role?.replace('_', ' ').toUpperCase() || 'USER'}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {sidebarItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 group ${
              item.active
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg transform scale-105'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:shadow-md'
            }`}
          >
            <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${
              item.active ? 'text-white' : 'text-green-600'
            }`} />
            <span>{item.label}</span>
            {item.active && (
              <div className="ml-auto w-2 h-2 bg-white rounded-full animate-pulse"></div>
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200 space-y-2 bg-gradient-to-r from-gray-50 to-white">
        <Link
          to="/settings"
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 transition-all duration-300 group"
        >
          <Settings className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform duration-300" />
          <span>Settings</span>
        </Link>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all duration-300 group"
        >
          <LogOut className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default DashboardSidebar;
