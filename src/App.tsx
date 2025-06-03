
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Pages
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Turfs from '@/pages/Turfs';
import TurfDetails from '@/pages/TurfDetails';
import TournamentDetails from '@/pages/TournamentDetails';
import BookingConfirmation from '@/pages/BookingConfirmation';
import BookingSuccess from '@/pages/BookingSuccess';
import Nearby from '@/pages/Nearby';

// Dashboard Pages
import PlayerDashboard from '@/pages/PlayerDashboard';
import PlayerBookings from '@/pages/PlayerBookings';
import PlayerTournaments from '@/pages/PlayerTournaments';
import PlayerSettings from '@/pages/PlayerSettings';
import PlayerMatchmaking from '@/pages/PlayerMatchmaking';
import PlayerTeams from '@/pages/PlayerTeams';
import CreateTeam from '@/pages/CreateTeam';

function App() {
  return (
    <AppProvider>
      <Router>
        <AuthProvider>
          <div className="min-h-screen">
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/turfs" element={<Turfs />} />
              <Route path="/turf/:id" element={<TurfDetails />} />
              <Route path="/tournament/:id" element={<TournamentDetails />} />
              <Route path="/tournaments" element={<PlayerTournaments />} />
              <Route path="/nearby" element={<Nearby />} />
              
              {/* Booking Routes */}
              <Route path="/booking/confirm" element={<BookingConfirmation />} />
              <Route path="/booking/success" element={<BookingSuccess />} />
              
              {/* Protected Player Routes */}
              <Route 
                path="/player/dashboard" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/bookings" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerBookings />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/tournaments" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerTournaments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/settings" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerSettings />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/matchmaking" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerMatchmaking />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/teams" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerTeams />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/teams/create" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <CreateTeam />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/teams/:id" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerTeams />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/messages" 
                element={
                  <ProtectedRoute allowedRoles={['player', 'admin']}>
                    <PlayerDashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </div>
        </AuthProvider>
      </Router>
    </AppProvider>
  );
}

export default App;
