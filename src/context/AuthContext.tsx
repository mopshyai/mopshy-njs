'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Admin {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  adminId: string | null;
  email: string | null;
  adminData: Admin | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  setAuthData: (admin: Admin) => void;
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [adminId, setAdminId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState<string | null>(null);
  const [adminData, setAdminData] = useState<Admin | null>(null);

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth/check-auth', {
        method: 'GET',
        credentials: 'include',
      });
      
      const data = await res.json();
      
      if (data.success && data.admin) {
        setAdminId(data.admin.id);
        setEmail(data.admin.email);
        setAdminData(data.admin);
      } else {
        setAdminId(null);
        setEmail(null);
        setAdminData(null);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setAdminId(null);
      setEmail(null);
      setAdminData(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const logout = async () => {
    try {
      const res = await fetch('/api/auth/admin/logout', {
        method: 'POST',
        credentials: 'include',
      });

      const data = await res.json();
      
      if (data.success) {
        setAdminId(null);
        setEmail(null);
        setAdminData(null);
        window.location.href = '/admin/login';
      } else {
        console.error('Admin logout failed:', data.error);
      }
    } catch (error) {
      console.error('Error during admin logout:', error);
    }
  };

  const setAuthData = (admin: Admin) => {
    setAdminId(admin.id);
    setEmail(admin.email);
    setAdminData(admin);
  };

  const value: AuthContextType = {
    adminId,
    email,
    adminData,
    isAuthenticated: !!adminId,
    isLoading,
    logout,
    setAuthData,
    checkAuth
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}