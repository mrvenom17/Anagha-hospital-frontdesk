import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { GlobalLoader } from "@/components/GlobalLoader";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RegisterHospital from "./pages/RegisterHospital";
import BookAppointment from "./pages/BookAppointment";
import PharmaBookAppointment from "./pages/PharmaBookAppointment";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import MyAppointments from "./pages/MyAppointments";
import PharmaDashboard from "./pages/PharmaDashboard";
import Payments from "./pages/Payments";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import Press from "./pages/Press";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Features from "./pages/Features";
import PricingPage from "./pages/PricingPage";
import Security from "./pages/Security";
import Integrations from "./pages/Integrations";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import ApiDocs from "./pages/ApiDocs";
import Status from "./pages/Status";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LoadingProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
          <GlobalLoader />
      <BrowserRouter>
        <Routes>
              {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register-hospital" element={<RegisterHospital />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/pharma-appointment" element={<PharmaBookAppointment />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/press" element={<Press />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/security" element={<Security />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/api-docs" element={<ApiDocs />} />
          <Route path="/status" element={<Status />} />
          <Route path="/cookies" element={<CookiePolicy />} />
              
              {/* Protected routes */}
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/doctor-dashboard"
                element={
                  <ProtectedRoute allowedRoles={["doctor"]}>
                    <DoctorDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/patient-dashboard"
                element={
                  <ProtectedRoute allowedRoles={["patient"]}>
                    <PatientDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/pharma-dashboard"
                element={
                  <ProtectedRoute allowedRoles={["pharma"]}>
                    <PharmaDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/my-appointments"
                element={
                  <ProtectedRoute>
                    <MyAppointments />
                  </ProtectedRoute>
                }
              />
              {/* Payment page - public (for hospital registration and guest bookings) */}
              <Route path="/payment" element={<Payments />} />
              <Route path="/payments" element={<Payments />} />
              
              {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
      </LoadingProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
