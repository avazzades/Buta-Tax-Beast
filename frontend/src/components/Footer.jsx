import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  Clock,
  ArrowRight
} from 'lucide-react';

export const Footer = () => {
  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Newsletter signup:', email);
    alert('Thank you for subscribing to our newsletter!');
    e.target.reset();
  };

  const handleSocialClick = (platform) => {
    console.log('Social media clicked:', platform);
    alert(`${platform} page coming soon!`);
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      'Individual Tax Filing',
      'Business Tax Services',
      'Corporate Accounting',
      'Bookkeeping',
      'Tax Planning',
      'Audit Support'
    ],
    company: [
      'About Us',
      'Our Team',
      'Careers',
      'Case Studies',
      'Client Portal',
      'Contact Us'
    ],
    resources: [
      'Tax Calculator',
      'Knowledge Base',
      'Blog',
      'Tax Forms',
      'Webinars',
      'Newsletter'
    ],
    legal: [
      'Privacy Policy',
      'Terms of Service',
      'Cookie Policy',
      'Data Protection',
      'Compliance',
      'Disclaimer'
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Stay Updated on Tax Changes
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get the latest tax updates, tips, and strategies delivered to your inbox monthly.
          </p>
          
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 h-12 px-4 bg-white text-gray-900 border-0 rounded-lg"
              />
              <Button 
                type="submit"
                className="h-12 px-8 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TP</span>
                </div>
                <div>
                  <div className="text-2xl font-bold">TaxPro</div>
                  <div className="text-sm text-gray-400">Tax & Accounting</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                Professional tax and accounting services you can trust. We help individuals and businesses 
                optimize their financial strategies and achieve their goals.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-500" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-500" />
                  <span>info@taxpro.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-500" />
                  <span>Nationwide Service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-emerald-500" />
                  <span>Mon-Fri: 8AM-6PM EST</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, name: 'Facebook' },
                  { icon: Twitter, name: 'Twitter' },
                  { icon: Linkedin, name: 'LinkedIn' },
                  { icon: Instagram, name: 'Instagram' }
                ].map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleSocialClick(social.name)}
                    className="w-10 h-10 p-0 text-gray-400 hover:text-white hover:bg-emerald-600 rounded-full transition-all duration-200"
                  >
                    <social.icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => alert(`${link} page coming soon!`)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => alert(`${link} page coming soon!`)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => alert(`${link} page coming soon!`)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => alert(`${link} page coming soon!`)}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} TaxPro. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button onClick={() => alert('Privacy Policy coming soon!')}>
                Privacy Policy
              </button>
              <button onClick={() => alert('Terms of Service coming soon!')}>
                Terms of Service
              </button>
              <button onClick={() => alert('Cookie Settings coming soon!')}>
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};