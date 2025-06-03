
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  city?: string;
  age?: number;
  role: 'player' | 'turf_owner' | 'admin' | 'super_admin';
  avatar?: string;
  isAuthenticated: boolean;
}

interface Team {
  id: string;
  name: string;
  description: string;
  sport: string;
  city: string;
  maxPlayers: number;
  logo?: string;
  captain: string;
  members: number;
  createdAt: string;
}

interface Booking {
  id: string;
  turfId: number;
  turfName: string;
  date: string;
  timeSlot: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  paymentStatus: 'unpaid' | 'paid' | 'refunded';
  totalAmount: number;
  playerName: string;
  playerEmail: string;
  playerPhone: string;
}

interface AuthContextType {
  user: User | null;
  teams: Team[];
  bookings: Booking[];
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
  updateProfile: (profileData: any) => Promise<boolean>;
  createTeam: (teamData: any) => Promise<string>;
  addBooking: (bookingData: any) => void;
  updateBookingStatus: (bookingId: string, status: string, paymentStatus?: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Load user from localStorage on mount
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const userData = JSON.parse(savedUser);
      setUser(userData);
      loadUserTeams(userData.id);
      loadUserBookings(userData.id);
    }
  }, []);

  const loadUserTeams = (userId: string) => {
    const savedTeams = localStorage.getItem(`teams_${userId}`);
    if (savedTeams) {
      setTeams(JSON.parse(savedTeams));
    }
  };

  const loadUserBookings = (userId: string) => {
    const savedBookings = localStorage.getItem(`bookings_${userId}`);
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      setIsLoading(true);
      // Mock login logic
      const mockUser: User = {
        id: '1',
        name: 'John Doe',
        email: email,
        phone: '+8801234567890',
        city: 'Dhaka',
        age: 25,
        role: email.includes('admin') ? 'admin' : email.includes('super') ? 'super_admin' : email.includes('owner') ? 'turf_owner' : 'player',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
        isAuthenticated: true
      };

      setUser(mockUser);
      localStorage.setItem('currentUser', JSON.stringify(mockUser));
      loadUserTeams(mockUser.id);
      loadUserBookings(mockUser.id);

      // Check for redirect URL
      const redirectUrl = localStorage.getItem('redirectAfterLogin');
      if (redirectUrl) {
        localStorage.removeItem('redirectAfterLogin');
        navigate(redirectUrl);
      }

      return true;
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
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        city: userData.city,
        age: userData.age ? parseInt(userData.age) : undefined,
        role: 'player',
        isAuthenticated: true
      };

      setUser(newUser);
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setTeams([]);
    setBookings([]);
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  const updateProfile = async (profileData: any): Promise<boolean> => {
    try {
      if (user) {
        const updatedUser = { ...user, ...profileData };
        setUser(updatedUser);
        localStorage.setItem('currentUser', JSON.stringify(updatedUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Profile update error:', error);
      return false;
    }
  };

  const createTeam = async (teamData: any): Promise<string> => {
    if (!user) throw new Error('User not authenticated');

    const newTeam: Team = {
      id: Math.random().toString(36).substr(2, 9),
      name: teamData.name,
      description: teamData.description,
      sport: teamData.sport,
      city: teamData.city,
      maxPlayers: teamData.maxPlayers,
      logo: teamData.logo,
      captain: user.name,
      members: 1,
      createdAt: new Date().toISOString()
    };

    const updatedTeams = [...teams, newTeam];
    setTeams(updatedTeams);
    localStorage.setItem(`teams_${user.id}`, JSON.stringify(updatedTeams));
    
    return newTeam.id;
  };

  const addBooking = (bookingData: any) => {
    if (!user) return;

    const newBooking: Booking = {
      id: Math.random().toString(36).substr(2, 9),
      turfId: bookingData.turfId,
      turfName: bookingData.turfName,
      date: bookingData.date,
      timeSlot: bookingData.timeSlot,
      status: 'pending',
      paymentStatus: 'unpaid',
      totalAmount: bookingData.totalAmount,
      playerName: user.name,
      playerEmail: user.email,
      playerPhone: user.phone || ''
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem(`bookings_${user.id}`, JSON.stringify(updatedBookings));
  };

  const updateBookingStatus = (bookingId: string, status: string, paymentStatus?: string) => {
    const updatedBookings = bookings.map(booking => 
      booking.id === bookingId 
        ? { ...booking, status: status as any, ...(paymentStatus && { paymentStatus: paymentStatus as any }) }
        : booking
    );
    setBookings(updatedBookings);
    if (user) {
      localStorage.setItem(`bookings_${user.id}`, JSON.stringify(updatedBookings));
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      teams,
      bookings,
      isLoading,
      login,
      register,
      logout,
      updateProfile,
      createTeam,
      addBooking,
      updateBookingStatus
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
