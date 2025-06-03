
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Public Pages
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Turfs from '@/pages/Turfs';
import TurfDetails from '@/pages/TurfDetails';
import Tournaments from '@/pages/Tournaments';
import TournamentDetails from '@/pages/TournamentDetails';
import Nearby from '@/pages/Nearby';
import NotFound from '@/pages/NotFound';

// Booking Pages
import BookingConfirmation from '@/pages/BookingConfirmation';
import BookingSuccess from '@/pages/BookingSuccess';

// Player Pages
import PlayerDashboard from '@/pages/PlayerDashboard';
import PlayerBookings from '@/pages/PlayerBookings';
import PlayerTeams from '@/pages/PlayerTeams';
import PlayerTournaments from '@/pages/PlayerTournaments';
import PlayerMatchmaking from '@/pages/PlayerMatchmaking';
import PlayerPayments from '@/pages/PlayerPayments';
import PlayerMessages from '@/pages/PlayerMessages';
import PlayerNotifications from '@/pages/PlayerNotifications';
import PlayerSettings from '@/pages/PlayerSettings';

// Admin Pages
import AdminDashboard from '@/pages/AdminDashboard';
import AdminUsers from '@/pages/AdminUsers';
import AdminTurfs from '@/pages/AdminTurfs';
import AdminTournaments from '@/pages/AdminTournaments';
import AdminAnalytics from '@/pages/AdminAnalytics';
import AdminPayments from '@/pages/AdminPayments';
import AdminMessages from '@/pages/AdminMessages';
import AdminNotifications from '@/pages/AdminNotifications';

// Turf Owner Pages
import TurfOwnerDashboard from '@/pages/TurfOwnerDashboard';
import TurfOwnerTurfs from '@/pages/TurfOwnerTurfs';
import TurfOwnerBookings from '@/pages/TurfOwnerBookings';
import TurfOwnerAnalytics from '@/pages/TurfOwnerAnalytics';
import TurfOwnerRevenue from '@/pages/TurfOwnerRevenue';
import TurfOwnerMessages from '@/pages/TurfOwnerMessages';
import TurfOwnerNotifications from '@/pages/TurfOwnerNotifications';

// Super Admin Pages
import SuperAdminDashboard from '@/pages/SuperAdminDashboard';
import SuperAdminSystem from '@/pages/SuperAdminSystem';
import SuperAdminUsers from '@/pages/SuperAdminUsers';
import SuperAdminTurfs from '@/pages/SuperAdminTurfs';
import SuperAdminAnalytics from '@/pages/SuperAdminAnalytics';
import SuperAdminRevenue from '@/pages/SuperAdminRevenue';
import SuperAdminSettings from '@/pages/SuperAdminSettings';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/turfs" element={<Turfs />} />
            <Route path="/turf/:id" element={<TurfDetails />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/tournament/:id" element={<TournamentDetails />} />
            <Route path="/nearby" element={<Nearby />} />
            
            {/* Booking Routes */}
            <Route path="/booking/confirm" element={<BookingConfirmation />} />
            <Route path="/booking/success" element={<BookingSuccess />} />

            {/* Player Routes */}
            <Route path="/player/dashboard" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/player/bookings" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerBookings />
              </ProtectedRoute>
            } />
            <Route path="/player/teams" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerTeams />
              </ProtectedRoute>
            } />
            <Route path="/player/tournaments" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerTournaments />
              </ProtectedRoute>
            } />
            <Route path="/player/matchmaking" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerMatchmaking />
              </ProtectedRoute>
            } />
            <Route path="/player/payments" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerPayments />
              </ProtectedRoute>
            } />
            <Route path="/player/messages" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerMessages />
              </ProtectedRoute>
            } />
            <Route path="/player/notifications" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerNotifications />
              </ProtectedRoute>
            } />
            <Route path="/player/settings" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerSettings />
              </ProtectedRoute>
            } />

            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/turfs" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminTurfs />
              </ProtectedRoute>
            } />
            <Route path="/admin/tournaments" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminTournaments />
              </ProtectedRoute>
            } />
            <Route path="/admin/analytics" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminAnalytics />
              </ProtectedRoute>
            } />
            <Route path="/admin/payments" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminPayments />
              </ProtectedRoute>
            } />
            <Route path="/admin/messages" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminMessages />
              </ProtectedRoute>
            } />
            <Route path="/admin/notifications" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminNotifications />
              </ProtectedRoute>
            } />

            {/* Turf Owner Routes */}
            <Route path="/turf-owner/dashboard" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerDashboard />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/turfs" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerTurfs />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/bookings" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerBookings />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/analytics" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerAnalytics />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/revenue" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerRevenue />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/messages" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerMessages />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/notifications" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerNotifications />
              </ProtectedRoute>
            } />

            {/* Super Admin Routes */}
            <Route path="/superadmin/dashboard" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/superadmin/system" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminSystem />
              </ProtectedRoute>
            } />
            <Route path="/superadmin/users" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/superadmin/turfs" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminTurfs />
              </ProtectedRoute>
            } />
            <Route path="/superadmin/analytics" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminAnalytics />
              </ProtectedRoute>
            } />
            <Route path="/superadmin/revenue" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminRevenue />
              </ProtectedRoute>
            } />
            <Route path="/superadmin/settings" element={
              <ProtectedRoute allowedRoles={['superadmin']}>
                <SuperAdminSettings />
              </ProtectedRoute>
            } />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
