import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Resources', href: '#resources' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href) => {
    console.log('Navigate to:', href);
    // Mock smooth scroll functionality
    if (href.startsWith('#')) {
      alert(`Navigating to ${href} section`);
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactUs = () => {
    console.log('Contact us clicked');
    alert('Contact form will open here!');
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@taxpro.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>Serving nationwide with local expertise</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-sm'
      }`} style={{ top: '32px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">TP</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-900">TaxPro</div>
                    <div className="text-xs text-gray-500">Tax & Accounting</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-emerald-50 rounded-md"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                onClick={() => alert('Login functionality coming soon!')}
              >
                Client Login
              </Button>
              <Button 
                onClick={handleContactUs}
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white transform hover:scale-105 transition-all duration-200"
              >
                Get Free Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">TP</span>
                        </div>
                        <span className="text-lg font-bold text-gray-900">TaxPro</span>
                      </div>
                    </div>
                    
                    <nav className="flex flex-col space-y-4">
                      {navigation.map((item) => (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className="text-left text-gray-700 hover:text-emerald-600 px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-emerald-50 rounded-md"
                        >
                          {item.name}
                        </button>
                      ))}
                    </nav>
                    
                    <div className="flex flex-col space-y-3 pt-6 border-t border-gray-200">
                      <Button 
                        variant="outline" 
                        className="w-full border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                        onClick={() => alert('Login functionality coming soon!')}
                      >
                        Client Login
                      </Button>
                      <Button 
                        onClick={handleContactUs}
                        className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                      >
                        Get Free Consultation
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};