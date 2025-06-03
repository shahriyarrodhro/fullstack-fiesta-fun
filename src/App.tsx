
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '@/contexts/AuthContext';
import { AppProvider } from '@/contexts/AppContext';
import ProtectedRoute from '@/components/auth/ProtectedRoute';

// Public pages
import Index from '@/pages/Index';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Turfs from '@/pages/Turfs';
import TurfDetails from '@/pages/TurfDetails';
import Tournaments from '@/pages/Tournaments';
import TournamentDetails from '@/pages/TournamentDetails';
import Nearby from '@/pages/Nearby';
import BookingConfirmation from '@/pages/BookingConfirmation';
import BookingSuccess from '@/pages/BookingSuccess';
import NotFound from '@/pages/NotFound';

// Player pages
import PlayerDashboard from '@/pages/PlayerDashboard';
import PlayerBookings from '@/pages/PlayerBookings';
import PlayerTeams from '@/pages/PlayerTeams';
import CreateTeam from '@/pages/CreateTeam';
import PlayerTournaments from '@/pages/PlayerTournaments';
import PlayerMatchmaking from '@/pages/PlayerMatchmaking';
import PlayerMessages from '@/pages/PlayerMessages';
import PlayerNotifications from '@/pages/PlayerNotifications';
import PlayerPayments from '@/pages/PlayerPayments';
import PlayerSettings from '@/pages/PlayerSettings';

// Turf Owner pages
import TurfOwnerDashboard from '@/pages/TurfOwnerDashboard';
import TurfOwnerTurfs from '@/pages/TurfOwnerTurfs';
import TurfOwnerBookings from '@/pages/TurfOwnerBookings';
import TurfOwnerMessages from '@/pages/TurfOwnerMessages';
import TurfOwnerNotifications from '@/pages/TurfOwnerNotifications';
import TurfOwnerRevenue from '@/pages/TurfOwnerRevenue';
import TurfOwnerAnalytics from '@/pages/TurfOwnerAnalytics';
import TurfOwnerAdManager from '@/pages/TurfOwnerAdManager';

// Admin pages
import AdminDashboard from '@/pages/AdminDashboard';
import AdminUsers from '@/pages/AdminUsers';
import AdminTurfs from '@/pages/AdminTurfs';
import AdminTournaments from '@/pages/AdminTournaments';
import AdminMessages from '@/pages/AdminMessages';
import AdminNotifications from '@/pages/AdminNotifications';
import AdminPayments from '@/pages/AdminPayments';
import AdminAnalytics from '@/pages/AdminAnalytics';

// Super Admin pages
import SuperAdminDashboard from '@/pages/SuperAdminDashboard';
import SuperAdminUsers from '@/pages/SuperAdminUsers';
import SuperAdminTurfs from '@/pages/SuperAdminTurfs';
import SuperAdminAnalytics from '@/pages/SuperAdminAnalytics';
import SuperAdminRevenue from '@/pages/SuperAdminRevenue';
import SuperAdminSettings from '@/pages/SuperAdminSettings';
import SuperAdminSystem from '@/pages/SuperAdminSystem';

function App() {
  return (
    <Router>
      <AppProvider>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/turfs" element={<Turfs />} />
            <Route path="/turf/:id" element={<TurfDetails />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/tournament/:id" element={<TournamentDetails />} />
            <Route path="/nearby" element={<Nearby />} />
            <Route path="/booking/:turfId/confirmation" element={<BookingConfirmation />} />
            <Route path="/booking/success" element={<BookingSuccess />} />

            {/* Player routes */}
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
            <Route path="/player/teams/create" element={
              <ProtectedRoute allowedRoles={['player']}>
                <CreateTeam />
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
            <Route path="/player/matches/create" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerMatchmaking />
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
            <Route path="/player/payments" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerPayments />
              </ProtectedRoute>
            } />
            <Route path="/player/settings" element={
              <ProtectedRoute allowedRoles={['player']}>
                <PlayerSettings />
              </ProtectedRoute>
            } />

            {/* Turf Owner routes */}
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
            <Route path="/turf-owner/revenue" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerRevenue />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/analytics" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerAnalytics />
              </ProtectedRoute>
            } />
            <Route path="/turf-owner/ads" element={
              <ProtectedRoute allowedRoles={['turf_owner']}>
                <TurfOwnerAdManager />
              </ProtectedRoute>
            } />

            {/* Admin routes */}
            <Route path="/admin/dashboard" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/users" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/admin/turfs" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminTurfs />
              </ProtectedRoute>
            } />
            <Route path="/admin/tournaments" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminTournaments />
              </ProtectedRoute>
            } />
            <Route path="/admin/messages" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminMessages />
              </ProtectedRoute>
            } />
            <Route path="/admin/notifications" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminNotifications />
              </ProtectedRoute>
            } />
            <Route path="/admin/payments" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminPayments />
              </ProtectedRoute>
            } />
            <Route path="/admin/analytics" element={
              <ProtectedRoute allowedRoles={['admin', 'super_admin']}>
                <AdminAnalytics />
              </ProtectedRoute>
            } />

            {/* Super Admin routes */}
            <Route path="/super-admin/dashboard" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/super-admin/users" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminUsers />
              </ProtectedRoute>
            } />
            <Route path="/super-admin/turfs" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminTurfs />
              </ProtectedRoute>
            } />
            <Route path="/super-admin/analytics" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminAnalytics />
              </ProtectedRoute>
            } />
            <Route path="/super-admin/revenue" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminRevenue />
              </ProtectedRoute>
            } />
            <Route path="/super-admin/settings" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminSettings />
              </ProtectedRoute>
            } />
            <Route path="/super-admin/system" element={
              <ProtectedRoute allowedRoles={['super_admin']}>
                <SuperAdminSystem />
              </ProtectedRoute>
            } />

            {/* 404 route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </AppProvider>
    </Router>
  );
}

export default App;
