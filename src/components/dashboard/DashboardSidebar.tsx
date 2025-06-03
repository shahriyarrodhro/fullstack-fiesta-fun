
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Home, 
  Calendar, 
  Trophy, 
  Users, 
  Search, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  MapPin,
  MessageCircle,
  Target,
  Star,
  Bell
} from 'lucide-react';

const DashboardSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { 
      icon: Home, 
      label: 'Dashboard', 
      path: '/player/dashboard',
      badge: null 
    },
    { 
      icon: Calendar, 
      label: 'My Bookings', 
      path: '/player/bookings',
      badge: '3' 
    },
    { 
      icon: Trophy, 
      label: 'Tournaments', 
      path: '/player/tournaments',
      badge: null 
    },
    { 
      icon: Users, 
      label: 'My Teams', 
      path: '/player/teams',
      badge: null 
    },
    { 
      icon: Search, 
      label: 'Matchmaking', 
      path: '/player/matchmaking',
      badge: 'New' 
    },
    { 
      icon: MessageCircle, 
      label: 'Messages', 
      path: '/player/messages',
      badge: '5' 
    },
    { 
      icon: MapPin, 
      label: 'Find Turfs', 
      path: '/turfs',
      badge: null 
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/player/settings',
      badge: null 
    }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarContent = (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 ring-2 ring-green-500 ring-offset-2">
            <AvatarImage src={user?.avatar} alt={user?.name} />
            <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white font-bold">
              {user?.name?.charAt(0) || 'U'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-900 truncate">{user?.name || 'User'}</h3>
            <p className="text-sm text-gray-500 truncate">{user?.email || 'user@example.com'}</p>
          </div>
        </div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Player Level</span>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Pro
            </Badge>
          </div>
          <div className="mt-2 bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <Button
            key={item.path}
            variant={isActive(item.path) ? 'default' : 'ghost'}
            className={`w-full justify-start h-12 ${
              isActive(item.path)
                ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg'
                : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
            } transition-all duration-300`}
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className={`w-5 h-5 mr-3 ${
              isActive(item.path) ? 'text-white' : 'text-gray-500'
            }`} />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <Badge 
                variant={isActive(item.path) ? 'secondary' : 'outline'} 
                className={`ml-2 text-xs ${
                  isActive(item.path) 
                    ? 'bg-white/20 text-white border-white/30' 
                    : 'bg-green-100 text-green-800 border-green-300'
                }`}
              >
                {item.badge}
              </Badge>
            )}
          </Button>
        ))}
      </nav>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-200 space-y-2">
        <Button 
          variant="outline" 
          className="w-full justify-start h-10 hover:bg-blue-50 hover:border-blue-500 transition-all duration-300"
          onClick={() => handleNavigation('/player/notifications')}
        >
          <Bell className="w-4 h-4 mr-2" />
          Notifications
          <Badge variant="destructive" className="ml-auto text-xs">2</Badge>
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full justify-start h-10 hover:bg-red-50 hover:border-red-500 hover:text-red-700 transition-all duration-300"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="bg-white/90 backdrop-blur-sm shadow-lg"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-80 bg-white border-r border-gray-200 shadow-lg">
        {sidebarContent}
      </div>

      {/* Mobile Sidebar */}
      <div className={`md:hidden fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 shadow-xl z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {sidebarContent}
      </div>
    </>
  );
};

export default DashboardSidebar;
