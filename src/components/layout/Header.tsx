
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
import { Switch } from '@/components/ui/switch';
import { Search, User, Settings, LogOut, Menu, X } from 'lucide-react';

const Header = () => {
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode, language, toggleLanguage } = useApp();
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
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-bold text-green-600">TURFI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/turfs" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              Turf list
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              About Us
            </Link>
            <Link to="/tournaments" className="text-gray-700 hover:text-green-600 transition-colors font-medium">
              List your turf
            </Link>
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Settings Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                  <Settings className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border-gray-200">
                <div className="px-3 py-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Dark Mode</span>
                    <Switch checked={darkMode} onCheckedChange={toggleDarkMode} />
                  </div>
                </div>
                <DropdownMenuSeparator className="bg-gray-200" />
                <DropdownMenuItem 
                  onClick={toggleLanguage}
                  className="text-gray-700 hover:text-green-600"
                >
                  {language === 'en' ? 'বাংলা' : 'English'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* User Menu */}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-green-600 text-white">
                        {user.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-white border-gray-200">
                  <div className="px-3 py-2">
                    <p className="text-sm font-medium text-gray-900">{user.name}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <p className="text-xs text-green-600 capitalize">{user.role.replace('_', ' ')}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-gray-200" />
                  <DropdownMenuItem 
                    onClick={() => navigate(getDashboardRoute())}
                    className="text-gray-700 hover:text-green-600"
                  >
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleLogout}
                    className="text-gray-700 hover:text-green-600"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => navigate('/login')}
                  className="text-gray-700 hover:text-green-600 hidden sm:inline-flex"
                >
                  Login
                </Button>
                <Button 
                  size="sm"
                  onClick={() => navigate('/register')}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Register
                </Button>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-gray-700 hover:text-green-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2">
              <Link 
                to="/turfs" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Turf list
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/tournaments" 
                className="text-gray-700 hover:text-green-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                List your turf
              </Link>
              {!user && (
                <Link 
                  to="/login" 
                  className="text-gray-700 hover:text-green-600 transition-colors py-2 sm:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
