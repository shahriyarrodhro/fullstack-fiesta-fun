import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useApp } from '@/contexts/AppContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import { User, Settings, LogOut, Menu, X, Bell, Home } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const { language, toggleLanguage } = useApp();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getDashboardRoute = () => {
    if (!user) return '/';
    
    switch (user.role) {
      case 'super_admin':
        return '/super-admin/dashboard';
      case 'admin':
        return '/admin/dashboard';
      case 'turf_owner':
        return '/turf-owner/dashboard';
      case 'player':
        return '/player/dashboard';
      default:
        return '/';
    }
  };

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              TurfMaster
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/turfs" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Browse Turfs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/tournaments" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Tournaments
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/nearby" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Nearby
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/features" 
              className="text-gray-700 hover:text-green-600 transition-colors font-medium relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </Button>

            {/* User Menu */}
            {user && user.isAuthenticated ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="relative hover:bg-gray-100 transition-all duration-300"
                  onClick={() => navigate('/notifications')}
                >
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs animate-pulse"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:ring-2 hover:ring-green-500 transition-all duration-300">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-gradient-to-br from-green-500 to-green-600 text-white text-sm font-semibold">
                          {user.name?.charAt(0) || 'U'}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-64 shadow-xl border-0 bg-white/95 backdrop-blur-md">
                    <div className="px-4 py-3 bg-gradient-to-r from-green-50 to-blue-50">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-2 font-medium">
                        {user.role.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => navigate('/')}
                      className="cursor-pointer hover:bg-green-50 transition-colors"
                    >
                      <Home className="mr-3 h-4 w-4 text-green-600" />
                      <span>Home</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => navigate(getDashboardRoute())}
                      className="cursor-pointer hover:bg-green-50 transition-colors"
                    >
                      <User className="mr-3 h-4 w-4 text-green-600" />
                      <span>Dashboard</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={() => navigate('/settings')}
                      className="cursor-pointer hover:bg-green-50 transition-colors"
                    >
                      <Settings className="mr-3 h-4 w-4 text-green-600" />
                      <span>Settings</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="cursor-pointer text-red-600 hover:bg-red-50 transition-colors"
                    >
                      <LogOut className="mr-3 h-4 w-4" />
                      <span>Logout</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-all duration-300"
                >
                  Login
                </Button>
                <Button 
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/turfs" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Turfs
              </Link>
              <Link 
                to="/tournaments" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Tournaments
              </Link>
              <Link 
                to="/nearby" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Nearby
              </Link>
              <Link 
                to="/features" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-green-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
