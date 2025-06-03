
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'superadmin' | 'admin' | 'turf_owner' | 'player';
  isAuthenticated: boolean;
  avatar?: string;
  city?: string;
  phone?: string;
  age?: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, redirectTo?: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: any) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, redirectTo?: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      
      // Mock authentication - replace with real API call
      const mockUsers = {
        'superadmin@example.com': { id: '1', name: 'Super Admin', role: 'superadmin' as const, city: 'Dhaka', phone: '+8801234567890' },
        'admin@example.com': { id: '2', name: 'Admin User', role: 'admin' as const, city: 'Dhaka', phone: '+8801234567891' },
        'turf@example.com': { id: '3', name: 'Turf Owner', role: 'turf_owner' as const, city: 'Dhaka', phone: '+8801234567892' },
        'player@example.com': { id: '4', name: 'John Doe', role: 'player' as const, city: 'Dhaka', phone: '+8801234567893', age: 25 }
      };

      if (mockUsers[email as keyof typeof mockUsers] && password === 'admin123' || password === 'turf123' || password === 'player123') {
        const userData = mockUsers[email as keyof typeof mockUsers];
        const authenticatedUser: User = {
          ...userData,
          email,
          isAuthenticated: true,
          avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`
        };
        
        setUser(authenticatedUser);
        localStorage.setItem('user', JSON.stringify(authenticatedUser));
        
        // Redirect to the intended page or dashboard
        if (redirectTo) {
          navigate(redirectTo);
        } else {
          switch (authenticatedUser.role) {
            case 'superadmin':
              navigate('/superadmin/dashboard');
              break;
            case 'admin':
              navigate('/admin/dashboard');
              break;
            case 'turf_owner':
              navigate('/turf-owner/dashboard');
              break;
            case 'player':
              navigate('/player/dashboard');
              break;
          }
        }
        
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: any): Promise<boolean> => {
    try {
      setIsLoading(true);
      // Mock registration - replace with real API call
      const newUser: User = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email,
        role: userData.role || 'player',
        isAuthenticated: true,
        city: userData.city,
        phone: userData.phone,
        age: userData.age,
        avatar: `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`
      };
      
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      // Navigate based on role
      switch (newUser.role) {
        case 'turf_owner':
          navigate('/turf-owner/dashboard');
          break;
        default:
          navigate('/player/dashboard');
      }
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    try {
      if (!user) return false;
      
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return true;
    } catch (error) {
      console.error('Profile update error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, register, updateProfile, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
