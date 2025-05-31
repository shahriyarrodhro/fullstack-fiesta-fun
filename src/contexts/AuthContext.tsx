
import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'superadmin' | 'admin' | 'turf_owner' | 'player';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  phone?: string;
  city?: string;
  age?: number;
  turfName?: string;
  turfLocation?: string;
  avatar?: string;
  isAuthenticated: boolean;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials with enhanced data
const demoCredentials = {
  'superadmin@example.com': {
    password: 'admin123',
    user: {
      id: '1',
      email: 'superadmin@example.com',
      name: 'Super Admin',
      role: 'superadmin' as UserRole,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      isAuthenticated: true
    }
  },
  'admin@example.com': {
    password: 'admin123',
    user: {
      id: '2',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin' as UserRole,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      isAuthenticated: true
    }
  },
  'turf@example.com': {
    password: 'turf123',
    user: {
      id: '3',
      email: 'turf@example.com',
      name: 'Turf Owner',
      role: 'turf_owner' as UserRole,
      turfName: 'Green Field Sports',
      turfLocation: 'Dhaka, Bangladesh',
      phone: '+880171234567',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face',
      isAuthenticated: true
    }
  },
  'player@example.com': {
    password: 'player123',
    user: {
      id: '4',
      email: 'player@example.com',
      name: 'Player User',
      role: 'player' as UserRole,
      city: 'Dhaka',
      age: 25,
      phone: '+880187654321',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      isAuthenticated: true
    }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('turfmaster_user');
    const sessionExpiry = localStorage.getItem('turfmaster_session_expiry');
    
    if (savedUser && sessionExpiry) {
      const expiryTime = new Date(sessionExpiry);
      const currentTime = new Date();
      
      if (currentTime < expiryTime) {
        const userData = JSON.parse(savedUser);
        userData.isAuthenticated = true;
        setUser(userData);
      } else {
        // Session expired, clear storage
        localStorage.removeItem('turfmaster_user');
        localStorage.removeItem('turfmaster_session_expiry');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const credentials = demoCredentials[email as keyof typeof demoCredentials];
    
    if (credentials && credentials.password === password) {
      const userData = { ...credentials.user, isAuthenticated: true };
      setUser(userData);
      
      // Set session with 24 hour expiry
      const expiryTime = new Date();
      expiryTime.setTime(expiryTime.getTime() + (24 * 60 * 60 * 1000));
      
      localStorage.setItem('turfmaster_user', JSON.stringify(userData));
      localStorage.setItem('turfmaster_session_expiry', expiryTime.toISOString());
      
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const register = async (userData: any): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Date.now().toString(),
      email: userData.email,
      name: userData.name,
      role: userData.role || 'player',
      isAuthenticated: true,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face',
      ...userData
    };
    
    setUser(newUser);
    
    // Set session with 24 hour expiry
    const expiryTime = new Date();
    expiryTime.setTime(expiryTime.getTime() + (24 * 60 * 60 * 1000));
    
    localStorage.setItem('turfmaster_user', JSON.stringify(newUser));
    localStorage.setItem('turfmaster_session_expiry', expiryTime.toISOString());
    
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('turfmaster_user');
    localStorage.removeItem('turfmaster_session_expiry');
  };

  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('turfmaster_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      login, 
      register, 
      logout, 
      isLoading, 
      updateUser 
    }}>
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
