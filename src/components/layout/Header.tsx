
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
import { User, Settings, LogOut, Menu, X, Bell } from 'lucide-react';

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
      case 'superadmin':
        return '/superadmin';
      case 'admin':
        return '/admin';
      case 'turf_owner':
        return '/turf-owner';
      case 'player':
        return '/player';
      default:
        return '/';
    }
  };

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <span className="text-xl font-bold text-gray-900">TurfMaster</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/turfs" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Browse Turfs
            </Link>
            <Link to="/tournaments" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Tournaments
            </Link>
            <Link to="/nearby" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Nearby
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Features
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-gray-600 hover:text-gray-900"
            >
              {language === 'en' ? 'বাং' : 'EN'}
            </Button>

            {/* User Menu */}
            {user ? (
              <div className="flex items-center space-x-3">
                {/* Notifications */}
                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="w-5 h-5 text-gray-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="bg-green-500 text-white text-sm">
                          {user.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-3 py-2">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.email}</p>
                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full mt-1">
                        {user.role.replace('_', ' ')}
                      </span>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={() => navigate(getDashboardRoute())}
                      className="cursor-pointer"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Dashboard
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="cursor-pointer text-red-600"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Login
                </Button>
                <Button 
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="bg-green-500 hover:bg-green-600 text-white"
                >
                  Get Started
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/turfs" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse Turfs
              </Link>
              <Link 
                to="/tournaments" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Tournaments
              </Link>
              <Link 
                to="/nearby" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                Nearby
              </Link>
              <Link 
                to="/features" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2 px-4 rounded-lg hover:bg-gray-50"
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
