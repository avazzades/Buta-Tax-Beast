import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useContentData } from '../hooks/useContentData';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Globe, Star, Users, Award, TrendingUp, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage = () => {
  const { t } = useTranslation();
  const { content, loading } = useContentData();
  const [email, setEmail] = useState('');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900 mb-4">Loading...</div>
          <div className="text-gray-600">Setting up your tax landing page</div>
        </div>
      </div>
    );
  }

  const handleGetStarted = () => {
    const subject = encodeURIComponent('Free Consultation Request');
    const body = encodeURIComponent(`Hi ${content.businessInfo.companyName},\n\nI'm interested in learning more about your tax services. Please contact me at ${email}.\n\nThank you!`);
    window.location.href = `mailto:${content.businessInfo.email}?subject=${subject}&body=${body}`;
    setEmail('');
  };

  const handleServiceQuote = (serviceName) => {
    const subject = encodeURIComponent(`Quote Request - ${serviceName}`);
    const body = encodeURIComponent(`Hi ${content.businessInfo.companyName},\n\nI'd like to get a quote for ${serviceName}.\n\nPlease contact me with more information.\n\nThank you!`);
    window.location.href = `mailto:${content.businessInfo.email}?subject=${subject}&body=${body}`;
  };

  const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '$50M+', label: 'Taxes Saved' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  const benefits = [
    'Save 15-30% on taxes',
    'Year-round support',
    'Audit protection included',
    'Expert CPAs'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{content.businessInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{content.businessInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{content.businessInfo.address}</span>
            </div>
            <LanguageSwitcher variant="ghost" size="sm" />
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TP</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{content.businessInfo.companyName}</div>
                <div className="text-xs text-gray-500">{content.businessInfo.tagline}</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['services', 'about', 'pricing', 'resources', 'contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={() => {
                    const element = document.getElementById(item);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <LanguageSwitcher variant="outline" size="sm" />
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Client Login
              </Button>
              <Button 
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                onClick={() => {
                  const subject = encodeURIComponent('Free Consultation Request');
                  const body = encodeURIComponent(`Hi ${content.businessInfo.companyName},\n\nI'd like to schedule a free consultation.\n\nPlease contact me.\n\nThank you!`);
                  window.location.href = `mailto:${content.businessInfo.email}?subject=${subject}&body=${body}`;
                }}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">{content.hero.trustedText}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {content.hero.title}
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {content.hero.subtitle}
              </span>
              {content.hero.partner}
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {content.hero.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 border-2 border-gray-200 focus:border-emerald-500 rounded-lg outline-none"
                />
                <Button 
                  onClick={handleGetStarted}
                  className="h-12 px-8 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {content.hero.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">Free consultation • No obligation • Expert advice</
