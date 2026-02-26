/**
 * Authentication utilities
 */
import { authAPI, removeAuthToken } from './api';

// Exporting as an interface is correct
export interface User {
  id: number;
  name: string;
  mobile: string;
  email?: string;
  role: string;
  [key: string]: any;
}

// Check if user is authenticated (Check for existence of user data)
// Since tokens are now HttpOnly cookies, we rely on the `user` flag in localStorage temporarily
// A robust verify call would be better for actual auth state, but we'll adapt to existing codebase design.
export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem('user');
};

// Login function
export const login = async (mobile: string, password: string): Promise<User> => {
  try {
    const response = await authAPI.login(mobile, password);
    // Token is securely handled via HttpOnly cookies, response contains { user: User }
    // Store user in localStorage for quick access
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response.user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// Register function
export const register = async (userData: {
  name: string;
  mobile: string;
  password: string;
  role?: string;
  email?: string;
  address_line1?: string;
  hospital_id?: number;
  degree?: string;
  institute_name?: string;
  company_name?: string;
  city?: string;
  state?: string;
  specialty?: string;
}): Promise<User> => {
  try {
    console.log("🔵 DEBUG: Register function called with data:", userData);
    const response = await authAPI.register(userData);
    console.log("✅ DEBUG: Registration API response:", response);
    // Token is securely handled via HttpOnly cookies
    // Store user in localStorage for quick access
    if (response.user) {
      localStorage.setItem('user', JSON.stringify(response.user));
    }
    return response.user;
  } catch (error) {
    console.error("❌ DEBUG: Registration error:", error);
    throw error;
  }
};

// Logout function
export const logout = (): void => {
  removeAuthToken();
  localStorage.removeItem('user');
  // Using window.location.href ensures a clean state wipe on logout
  window.location.href = '/login';
};

// Get current user from API
export const getCurrentUser = async (): Promise<User | null> => {
  try {
    if (!isAuthenticated()) {
      return null;
    }
    const user = await authAPI.getCurrentUser();
    // Update localStorage with fresh user data
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    return user;
  } catch (error) {
    // If the token is invalid/expired, clear it
    removeAuthToken();
    localStorage.removeItem('user');
    return null;
  }
};