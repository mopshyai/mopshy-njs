'use client'

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  ChevronDown,
  Shield,
  Activity,
  MapPin
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

// Admin Header Component
function AdminHeader({ onMenuClick }: { onMenuClick: () => void }) {
  const { adminData, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="bg-slate-800/50 backdrop-blur-xl border-b border-slate-700/50 px-6 py-4 shadow-lg sticky top-0 z-30">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl shadow-md">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-slate-400 text-sm">Management Portal</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 p-2 text-slate-300 hover:text-white rounded-lg hover:bg-slate-700/50 transition-colors"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-sm">
                  {adminData?.name?.charAt(0)?.toUpperCase() || 'A'}
                </span>
              </div>
              <div className="hidden md:block text-left">
                <p className="font-semibold text-sm">{adminData?.name}</p>
                <p className="text-slate-400 text-xs">Administrator</p>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 hidden sm:block" />
            </button>

            {showUserMenu && (
              <>
                {/* Mobile backdrop */}
                <div 
                  className="fixed inset-0 z-40 sm:hidden"
                  onClick={() => setShowUserMenu(false)}
                />
                
                <div className="absolute right-0 mt-2 w-64 bg-slate-800/90 backdrop-blur-xl rounded-xl shadow-xl border border-slate-700/50 py-2 z-50">
                  <div className="px-4 py-3 border-b border-slate-700/50">
                    <p className="text-sm font-semibold text-white truncate">{adminData?.name}</p>
                    <p className="text-xs text-slate-400 truncate">{adminData?.email}</p>
                    <p className="text-xs text-blue-400 font-medium mt-1">Admin Access</p>
                  </div>
                  <div className="border-t border-slate-700/50 pt-2">
                    <button
                      onClick={logout}
                      className="w-full px-4 py-3 text-left text-sm text-red-400 hover:bg-slate-700/50 flex items-center gap-2 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Logout
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// Admin Sidebar Component
function AdminSidebar({ 
  isOpen, 
  onClose
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const pathname = usePathname();
  
  const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin/blog' },
    
  ];

  const isActiveRoute = (href: string) => {
    return pathname === href || (href !== '/admin/dashboard' && pathname.startsWith(href));
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-80 bg-slate-900/95 backdrop-blur-xl transform transition-transform duration-300 ease-in-out flex flex-col border-r border-slate-700/50
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50 shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl shadow-lg">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-white font-bold text-lg">Admin Portal</span>
              <p className="text-slate-400 text-sm">Management System</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-700/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-4 py-8">
          <div className="space-y-2">
            {sidebarItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActiveRoute(item.href)
                    ? 'bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-white border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-700/30 hover:text-white'
                }`}
              >
                <item.icon className={`w-5 h-5 transition-colors ${
                  isActiveRoute(item.href) ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'
                }`} />
                <span className="font-medium">{item.label}</span>
                {isActiveRoute(item.href) && (
                  <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                )}
              </a>
            ))}
          </div>
        </nav>

        {/* Footer Stats */}
        <div className="p-4 shrink-0">
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-lg rounded-xl p-6 border border-slate-700/30">
            <div className="flex items-center justify-between mb-4">
              <span className="text-slate-300 text-sm font-semibold">Quick Stats</span>
              <Activity className="w-4 h-4 text-slate-400" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-blue-400">24</div>
                <div className="text-xs text-slate-500">Active</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-purple-400">156</div>
                <div className="text-xs text-slate-500">Total</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

// Protected Admin Content Component
function AdminContent({ children }: { children: React.ReactNode }) {
  const { isLoading, isAuthenticated, adminData } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Close sidebar when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    if (sidebarOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [sidebarOpen]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#1a1f3a] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
          <h3 className="text-xl font-bold text-white mb-2">Loading Admin Panel...</h3>
          <p className="text-slate-400">Preparing dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !adminData) {
    return (
      <div className="min-h-screen bg-[#1a1f3a] flex items-center justify-center p-4">
        <div className="text-center max-w-md mx-auto">
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Admin Access Required</h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            Please login with your administrator credentials to access the dashboard
          </p>
          <div className="animate-pulse">
            <p className="text-slate-500 text-sm">Redirecting to login page...</p>
          </div>
          <script>{`window.location.href = '/admin/login';`}</script>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-[#1a1f3a] overflow-hidden">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden min-w-0 relative z-10">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-6 py-8 max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

// Main Admin Layout Component
export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  
  // Don't wrap login page with auth protection
  if (pathname === '/admin/login') {
    return (
      <AuthProvider>
        <div className="min-h-screen bg-[#1a1f3a]">
          {children}
        </div>
      </AuthProvider>
    );
  }

  // Wrap all other admin pages with full layout
  return (
    <AuthProvider>
      <AdminContent>
        {children}
      </AdminContent>
    </AuthProvider>
  );
}