import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import './i18n';
import LandingPage from './components/LandingPage';
import AdminPanel from './components/AdminPanel';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  // Simple admin authentication (in production, use proper auth)
  const handleAdminAccess = () => {
    const password = prompt('Enter admin password:');
    if (password === 'admin123') { // Change this password!
      setIsAdmin(true);
      localStorage.setItem('adminAccess', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  // Check if user is already authenticated
  useEffect(() => {
    const adminAccess = localStorage.getItem('adminAccess');
    if (adminAccess === 'true') {
      setIsAdmin(true);
    }
  }, []);

  // Admin logout
  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('adminAccess');
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route 
            path="/admin" 
            element={
              isAdmin ? (
                <div>
                  <div className="fixed top-4 right-4 z-50">
                    <button
                      onClick={handleLogout}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                  <AdminPanel />
                </div>
              ) : (
                <div className="min-h-screen flex items-center justify-center bg-gray-50">
                  <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-6">Admin Access</h2>
                    <button
                      onClick={handleAdminAccess}
                      className="w-full px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                    >
                      Enter Admin Panel
                    </button>
                  </div>
                </div>
              )
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
