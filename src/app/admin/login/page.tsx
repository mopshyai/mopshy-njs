// "use client"
// import React, { useState } from 'react';
// import { Mail, Lock, Eye, EyeOff, Loader, Shield, AlertCircle } from 'lucide-react';

// const AdminLoginPage = () => {
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [showPassword, setShowPassword] = useState(false);
//   const [alert, setAlert] = useState<{ 
//     show: boolean; 
//     type: 'success' | 'error'; 
//     title: string; 
//     message: string 
//   }>({ 
//     show: false, 
//     type: 'success', 
//     title: '', 
//     message: '' 
//   });

//   const showAlert = (type: 'success' | 'error', title: string, message: string) => {
//     setAlert({ show: true, type, title, message });
//     setTimeout(() => setAlert({ show: false, type: 'success', title: '', message: '' }), 5000);
//   };

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const response = await fetch("/api/auth/admin/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: 'include',
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         showAlert("success", "Success", "Login successful! Redirecting...");
        
//         // Redirect to admin dashboard
//         setTimeout(() => {
//           window.location.href = '/admin/dashboard';
//         }, 1000);
//       } else {
//         showAlert('error', 'Error', data.error || 'Failed to sign in. Please try again.');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       showAlert('error', 'Error', 'An unexpected error occurred.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#1a1f3a] text-white">
//       {/* Background Grid */}
//       <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

//       <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
//         {/* Alert */}
//         {alert.show && (
//           <div className={`fixed top-4 right-4 w-96 p-4 rounded-xl shadow-2xl border z-50 transition-all duration-300 backdrop-blur-lg ${
//             alert.type === 'success' 
//               ? 'bg-green-500/20 border-green-500/30' 
//               : 'bg-red-500/20 border-red-500/30'
//           }`}>
//             <div className="flex items-start gap-3">
//               <AlertCircle className={`w-5 h-5 flex-shrink-0 ${
//                 alert.type === 'success' ? 'text-green-400' : 'text-red-400'
//               }`} />
//               <div>
//                 <h4 className={`font-bold text-sm mb-1 ${
//                   alert.type === 'success' ? 'text-green-300' : 'text-red-300'
//                 }`}>{alert.title}</h4>
//                 <p className={`text-xs ${
//                   alert.type === 'success' ? 'text-green-200' : 'text-red-200'
//                 }`}>{alert.message}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         <div className="max-w-md w-full">
//           <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-8">
//             {/* Header */}
//             <div className="text-center mb-8">
//               <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
//                 <Shield className="w-10 h-10 text-white" />
//               </div>
//               <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//                 Admin Portal
//               </h1>
//               <p className="text-slate-400">
//                 Secure Management Dashboard
//               </p>
//               <div className="flex items-center justify-center gap-2 mt-3">
//                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//                 <span className="text-xs text-slate-400 font-medium">Administrator Access</span>
//                 <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
//               </div>
//             </div>

//             {/* Login Form */}
//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <div className="relative group">
//                   <Mail 
//                     size={16} 
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors"
//                   />
//                   <input
//                     type="email"
//                     placeholder="Admin Email"
//                     className="w-full p-4 pl-12 rounded-xl border border-slate-600/50 bg-slate-700/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     value={formData.email}
//                     onChange={(e) => setFormData({...formData, email: e.target.value})}
//                     disabled={loading}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' && formData.email && formData.password) {
//                         handleLogin(e);
//                       }
//                     }}
//                   />
//                 </div>

//                 <div className="relative group">
//                   <Lock 
//                     size={16} 
//                     className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors"
//                   />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     className="w-full p-4 pl-12 pr-12 rounded-xl border border-slate-600/50 bg-slate-700/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
//                     value={formData.password}
//                     onChange={(e) => setFormData({...formData, password: e.target.value})}
//                     disabled={loading}
//                     onKeyDown={(e) => {
//                       if (e.key === 'Enter' && formData.email && formData.password) {
//                         handleLogin(e);
//                       }
//                     }}
//                   />
//                   <button
//                     type="button"
//                     onClick={() => !loading && setShowPassword(!showPassword)}
//                     className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
//                     disabled={loading}
//                   >
//                     {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//                   </button>
//                 </div>
//               </div>

//               <button
//                 onClick={handleLogin}
//                 disabled={loading || !formData.email || !formData.password}
//                 className="w-full px-6 py-4 text-white rounded-xl transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2 font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] duration-200 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700"
//               >
//                 {loading ? (
//                   <>
//                     <Loader className="animate-spin" size={18} />
//                     Authenticating...
//                   </>
//                 ) : (
//                   <>
//                     <Shield className="w-5 h-5" />
//                     Access Dashboard
//                   </>
//                 )}
//               </button>

//               {/* Security Note */}
//               <div className="text-center">
//                 <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
//                   <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
//                   <span className="text-xs text-blue-300 font-medium">Secure Admin Access</span>
//                 </div>
//               </div>
//             </div>

//             {/* Footer */}
//             <div className="mt-8 text-center">
//               <p className="text-sm text-slate-400 mb-2">
//                 Management System
//               </p>
//               <p className="text-xs text-slate-500">
//                 Authorized personnel only • Protected by enterprise security
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;
"use client"
import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, Loader, Shield, AlertCircle } from 'lucide-react';

const AdminLoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [alert, setAlert] = useState<{ 
    show: boolean; 
    type: 'success' | 'error'; 
    title: string; 
    message: string 
  }>({ 
    show: false, 
    type: 'success', 
    title: '', 
    message: '' 
  });

  const showAlert = (type: 'success' | 'error', title: string, message: string) => {
    setAlert({ show: true, type, title, message });
    setTimeout(() => setAlert({ show: false, type: 'success', title: '', message: '' }), 5000);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("/api/auth/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showAlert("success", "Success", "Login successful! Redirecting...");
        
        // Redirect to admin blog
        setTimeout(() => {
          window.location.href = '/admin/blog';
        }, 1000);
      } else {
        showAlert('error', 'Error', data.error || 'Failed to sign in. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      showAlert('error', 'Error', 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1f3a] text-white">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        {/* Alert */}
        {alert.show && (
          <div className={`fixed top-4 right-4 w-96 p-4 rounded-xl shadow-2xl border z-50 transition-all duration-300 backdrop-blur-lg ${
            alert.type === 'success' 
              ? 'bg-green-500/20 border-green-500/30' 
              : 'bg-red-500/20 border-red-500/30'
          }`}>
            <div className="flex items-start gap-3">
              <AlertCircle className={`w-5 h-5 flex-shrink-0 ${
                alert.type === 'success' ? 'text-green-400' : 'text-red-400'
              }`} />
              <div>
                <h4 className={`font-bold text-sm mb-1 ${
                  alert.type === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>{alert.title}</h4>
                <p className={`text-xs ${
                  alert.type === 'success' ? 'text-green-200' : 'text-red-200'
                }`}>{alert.message}</p>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-md w-full">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-700/50 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-4 bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Admin Portal
              </h1>
              <p className="text-slate-400">
                Secure Management Dashboard
              </p>
              <div className="flex items-center justify-center gap-2 mt-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-xs text-slate-400 font-medium">Administrator Access</span>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>

            {/* Login Form */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <Mail 
                    size={16} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Admin Email"
                    className="w-full p-4 pl-12 rounded-xl border border-slate-600/50 bg-slate-700/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    disabled={loading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && formData.email && formData.password) {
                        handleLogin(e);
                      }
                    }}
                  />
                </div>

                <div className="relative group">
                  <Lock 
                    size={16} 
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-focus-within:text-blue-400 transition-colors"
                  />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full p-4 pl-12 pr-12 rounded-xl border border-slate-600/50 bg-slate-700/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    disabled={loading}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && formData.email && formData.password) {
                        handleLogin(e);
                      }
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => !loading && setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
                    disabled={loading}
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading || !formData.email || !formData.password}
                className="w-full px-6 py-4 text-white rounded-xl transition-all disabled:cursor-not-allowed flex items-center justify-center gap-2 font-bold shadow-xl hover:shadow-2xl transform hover:scale-[1.02] duration-200 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-slate-600 disabled:to-slate-700"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin" size={18} />
                    Authenticating...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5" />
                    Access Dashboard
                  </>
                )}
              </button>

              {/* Security Note */}
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-300 font-medium">Secure Admin Access</span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-slate-400 mb-2">
                Management System
              </p>
              <p className="text-xs text-slate-500">
                Authorized personnel only • Protected by enterprise security
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;