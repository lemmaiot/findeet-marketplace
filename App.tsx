
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import JoinUs from './components/JoinUs';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import SearchResults from './components/SearchResults';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import EmailVerification from './components/EmailVerification';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';


const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
    window.location.href = '/';
  };
  
  const handleSearch = (term: string) => {
    if (term) {
      window.location.href = `/search?q=${encodeURIComponent(term)}`;
    }
  };
  
  const path = window.location.pathname;
  const isAuthPage = ['/login', '/signup', '/verify-email', '/forgot-password', '/reset-password'].includes(path);

  const renderPage = () => {
    switch(path) {
      case '/login':
        return <LogIn />;
      case '/signup':
        return <SignUp />;
      case '/about':
        return <AboutUs />;
      case '/contact':
        return <ContactUs />;
      case '/verify-email':
        return <EmailVerification />;
      case '/forgot-password':
        return <ForgotPassword />;
      case '/reset-password':
        return <ResetPassword />;
      case '/dashboard':
        // A simple protected route: redirect to login if not authenticated
        if (isAuthenticated) {
          return <Dashboard />;
        } else {
          // Redirect to login page
          window.location.href = '/login';
          return null; 
        }
      case '/search':
        return <SearchResults />;
      default:
        // Default to showing the homepage content for '/' and any other unknown routes
        return (
          <>
            <Hero />
            <Categories />
            <Features />
            <JoinUs />
            <Testimonials />
            <CTA />
          </>
        );
    }
  };

  return (
    <div className="bg-white font-sans text-brand-dark">
      {isAuthPage ? (
        renderPage()
      ) : (
        <>
          <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} onSearch={handleSearch} />
          <main>
            {renderPage()}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
