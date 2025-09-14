import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ArrowRight, CheckCircle, Star, Users, Award, TrendingUp } from 'lucide-react';

export const Hero = () => {
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    console.log('Get started clicked with email:', email);
    // Mock functionality - show success message
    alert('Thank you for your interest! We will contact you soon.');
    setEmail('');
  };

  const stats = [
    { icon: Users, value: '5,000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '$50M+', label: 'Taxes Saved' },
    { icon: Star, value: '4.9/5', label: 'Client Rating' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-1/2 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          {/* Trust indicators */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-600 font-medium">Trusted by 5,000+ clients</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Tax & Accounting
            </span>
            Partner
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Professional tax preparation, strategic planning, and accounting services 
            that save you time and money. From individuals to enterprises.
          </p>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              'Save 15-30% on taxes',
              'Year-round support',
              'Audit protection included',
              'Expert CPAs'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 px-4 border-2 border-gray-200 focus:border-emerald-500 rounded-lg"
              />
              <Button 
                onClick={handleGetStarted}
                className="h-12 px-8 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-3">Free consultation • No obligation • Expert advice</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  <stat.icon className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <div className="bg-white rounded-lg shadow-xl p-4 transform rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="text-emerald-600 font-bold text-2xl">$15K</div>
          <div className="text-gray-600 text-sm">Average Savings</div>
        </div>
      </div>
      
      <div className="absolute top-1/3 right-8 hidden lg:block">
        <div className="bg-white rounded-lg shadow-xl p-4 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          <div className="text-blue-600 font-bold text-2xl">48hrs</div>
          <div className="text-gray-600 text-sm">Average Turnaround</div>
        </div>
      </div>
    </section>
  );
};