
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { AppProvider } from "@/contexts/AppContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Turfs from "./pages/Turfs";
import TurfDetails from "./pages/TurfDetails";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingSuccess from "./pages/BookingSuccess";
import TournamentDetails from "./pages/TournamentDetails";
import Tournaments from "./pages/Tournaments";
import PlayerDashboard from "./pages/PlayerDashboard";
import PlayerBookings from "./pages/PlayerBookings";
import PlayerTeams from "./pages/PlayerTeams";
import PlayerMatchmaking from "./pages/PlayerMatchmaking";
import PlayerMessages from "./pages/PlayerMessages";
import PlayerPayments from "./pages/PlayerPayments";
import PlayerNotifications from "./pages/PlayerNotifications";
import AdminDashboard from "./pages/AdminDashboard";
import AdminUsers from "./pages/AdminUsers";
import AdminTurfs from "./pages/AdminTurfs";
import AdminTournaments from "./pages/AdminTournaments";
import AdminAnalytics from "./pages/AdminAnalytics";
import AdminPayments from "./pages/AdminPayments";
import AdminMessages from "./pages/AdminMessages";
import AdminNotifications from "./pages/AdminNotifications";
import TurfOwnerDashboard from "./pages/TurfOwnerDashboard";
import TurfOwnerTurfs from "./pages/TurfOwnerTurfs";
import TurfOwnerBookings from "./pages/TurfOwnerBookings";
import TurfOwnerAnalytics from "./pages/TurfOwnerAnalytics";
import TurfOwnerRevenue from "./pages/TurfOwnerRevenue";
import TurfOwnerMessages from "./pages/TurfOwnerMessages";
import TurfOwnerNotifications from "./pages/TurfOwnerNotifications";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SuperAdminSystem from "./pages/SuperAdminSystem";
import SuperAdminUsers from "./pages/SuperAdminUsers";
import SuperAdminTurfs from "./pages/SuperAdminTurfs";
import SuperAdminAnalytics from "./pages/SuperAdminAnalytics";
import SuperAdminRevenue from "./pages/SuperAdminRevenue";
import SuperAdminSettings from "./pages/SuperAdminSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-green-900 to-gray-900">
        <div className="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!user || !user.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AppProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<Login />} />
              <Route path="/turfs" element={<Turfs />} />
              <Route path="/turf/:id" element={<TurfDetails />} />
              <Route path="/tournaments" element={<Tournaments />} />
              <Route path="/tournament/:id" element={<TournamentDetails />} />
              
              {/* Protected Routes */}
              <Route 
                path="/booking/confirm" 
                element={
                  <ProtectedRoute>
                    <BookingConfirmation />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/booking/success" 
                element={
                  <ProtectedRoute>
                    <BookingSuccess />
                  </ProtectedRoute>
                } 
              />
              
              {/* Player Routes */}
              <Route 
                path="/player" 
                element={
                  <ProtectedRoute>
                    <PlayerDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/bookings" 
                element={
                  <ProtectedRoute>
                    <PlayerBookings />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/teams" 
                element={
                  <ProtectedRoute>
                    <PlayerTeams />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/matchmaking" 
                element={
                  <ProtectedRoute>
                    <PlayerMatchmaking />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/messages" 
                element={
                  <ProtectedRoute>
                    <PlayerMessages />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/payments" 
                element={
                  <ProtectedRoute>
                    <PlayerPayments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/player/notifications" 
                element={
                  <ProtectedRoute>
                    <PlayerNotifications />
                  </ProtectedRoute>
                } 
              />

              {/* Admin Routes */}
              <Route 
                path="/admin" 
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/users" 
                element={
                  <ProtectedRoute>
                    <AdminUsers />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/turfs" 
                element={
                  <ProtectedRoute>
                    <AdminTurfs />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/tournaments" 
                element={
                  <ProtectedRoute>
                    <AdminTournaments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/analytics" 
                element={
                  <ProtectedRoute>
                    <AdminAnalytics />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/payments" 
                element={
                  <ProtectedRoute>
                    <AdminPayments />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/messages" 
                element={
                  <ProtectedRoute>
                    <AdminMessages />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/admin/notifications" 
                element={
                  <ProtectedRoute>
                    <AdminNotifications />
                  </ProtectedRoute>
                } 
              />

              {/* Turf Owner Routes */}
              <Route 
                path="/turf-owner" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/turf-owner/turfs" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerTurfs />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/turf-owner/bookings" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerBookings />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/turf-owner/analytics" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerAnalytics />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/turf-owner/revenue" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerRevenue />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/turf-owner/messages" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerMessages />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/turf-owner/notifications" 
                element={
                  <ProtectedRoute>
                    <TurfOwnerNotifications />
                  </ProtectedRoute>
                } 
              />

              {/* Super Admin Routes */}
              <Route 
                path="/superadmin" 
                element={
                  <ProtectedRoute>
                    <SuperAdminDashboard />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin/system" 
                element={
                  <ProtectedRoute>
                    <SuperAdminSystem />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin/users" 
                element={
                  <ProtectedRoute>
                    <SuperAdminUsers />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin/turfs" 
                element={
                  <ProtectedRoute>
                    <SuperAdminTurfs />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin/analytics" 
                element={
                  <ProtectedRoute>
                    <SuperAdminAnalytics />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin/revenue" 
                element={
                  <ProtectedRoute>
                    <SuperAdminRevenue />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/superadmin/settings" 
                element={
                  <ProtectedRoute>
                    <SuperAdminSettings />
                  </ProtectedRoute>
                } 
              />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
