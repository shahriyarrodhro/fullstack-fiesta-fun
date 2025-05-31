
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
import AdminDashboard from "./pages/AdminDashboard";
import TurfOwnerDashboard from "./pages/TurfOwnerDashboard";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
              <Route 
                path="/player" 
                element={
                  <ProtectedRoute>
                    <PlayerDashboard />
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
              
              {/* Placeholder routes for other dashboard types */}
              <Route path="/admin" element={<div>Admin Dashboard (Coming Soon)</div>} />
              <Route path="/turf-owner" element={<div>Turf Owner Dashboard (Coming Soon)</div>} />
              <Route path="/superadmin" element={<div>Super Admin Dashboard (Coming Soon)</div>} />
              
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
