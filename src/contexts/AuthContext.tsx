
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
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Demo credentials
const demoCredentials = {
  'superadmin@example.com': {
    password: 'admin123',
    user: {
      id: '1',
      email: 'superadmin@example.com',
      name: 'Super Admin',
      role: 'superadmin' as UserRole,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  },
  'admin@example.com': {
    password: 'admin123',
    user: {
      id: '2',
      email: 'admin@example.com',
      name: 'Admin User',
      role: 'admin' as UserRole,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
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
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face'
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
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const credentials = demoCredentials[email as keyof typeof demoCredentials];
    
    if (credentials && credentials.password === password) {
      setUser(credentials.user);
      localStorage.setItem('user', JSON.stringify(credentials.user));
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
      ...userData
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
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
