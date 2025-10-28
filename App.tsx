import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';

// Layout Components
import Navbar from './src/components/layout/Navbar';
import Footer from './src/components/layout/Footer';

// Page Components
import HomePage from './src/pages/HomePage';
import AboutPage from './src/pages/AboutPage';
import MembershipPage from './src/pages/MembershipPage';
import ServicesPage from './src/pages/ServicesPage';
import PropertyManagementPage from './src/pages/services/PropertyManagementPage';
import StatesPage from './src/pages/StatesPage';
import ContactPage from './src/pages/ContactPage';
import LoginPage from './src/pages/auth/LoginPage';
import RegisterPage from './src/pages/auth/RegisterPage';
import ForgotPasswordPage from './src/pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './src/pages/auth/ResetPasswordPage';
import AdminDashboard from './src/pages/admin/AdminDashboard';
import DashboardPage from './src/pages/dashboard/DashboardPage';
import ProfilePage from './src/pages/dashboard/ProfilePage';
// Reserved for future reactivation
// import PrayerTimesPage from './src/pages/PrayerTimesPage';
import NotFoundPage from './src/pages/NotFoundPage';
import EIDPage from './src/pages/dashboard/EIDPage';
// import IslamicResourcesPage from './src/pages/IslamicResourcesPage';

// Protected Route Component
import ProtectedRoute from './src/components/auth/ProtectedRoute';

// Contexts
import { useAuth } from './src/contexts/AuthContext';
import { CustomThemeProvider } from './src/contexts/ThemeContext';

// PWA Components
import InstallPrompt from './src/components/pwa/InstallPrompt';

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/properties" element={<PropertyManagementPage />} />
          <Route path="/states" element={<StatesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Reserved for future reactivation */}
          {/* <Route path="/prayer-times" element={<PrayerTimesPage />} /> */}
          {/* <Route path="/islamic-resources" element={<IslamicResourcesPage />} /> */}
          
          {/* Authentication Routes */}
          <Route 
            path="/login" 
            element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />} 
          />
          <Route 
            path="/register" 
            element={user ? <Navigate to="/dashboard" replace /> : <RegisterPage />} 
          />
          <Route 
            path="/forgot-password" 
            element={user ? <Navigate to="/dashboard" replace /> : <ForgotPasswordPage />} 
          />
          <Route 
            path="/reset-password" 
            element={user ? <Navigate to="/dashboard" replace /> : <ResetPasswordPage />} 
          />
          
          {/* Protected Dashboard Routes */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/eid" 
            element={
              <ProtectedRoute>
                <EIDPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/admin" 
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
          
          {/* Catch all route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      
      <Footer />
      <InstallPrompt />
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  );
};

export default App;
