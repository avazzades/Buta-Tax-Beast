import React, { useState, useEffect } from 'react';
import { Save, Eye, Edit3, Upload, Settings, Users, FileText, Phone, Mail, MapPin, Star } from 'lucide-react';

const AdminPanel = () => {
  // State for all editable content
  const [content, setContent] = useState({
    businessInfo: {
      companyName: 'TaxPro',
      tagline: 'Tax & Accounting',
      phone: '(555) 123-4567',
      email: 'info@taxpro.com',
      address: 'Serving nationwide with local expertise',
      hours: 'Mon-Fri: 8AM-6PM EST'
    },
    hero: {
      title: 'Your Trusted',
      subtitle: 'Tax & Accounting',
      partner: 'Partner',
      description: 'Professional tax preparation, strategic planning, and accounting services that save you time and money. From individuals to enterprises.',
      ctaText: 'Get Started',
      trustedText: 'Trusted by 5,000+ clients'
    },
    services: [
      {
        id: 1,
        title: 'Individual Tax Filing',
        description: 'Complete tax preparation and filing services for individuals and families.',
        price: 'Starting at $149',
        features: ['Federal & State Returns', 'Tax Optimization', 'Audit Support']
      },
      {
        id: 2,
        title: 'Business Tax Services',
        description: 'Comprehensive tax solutions for small to medium businesses.',
        price: 'Starting at $299',
        features: ['Quarterly Returns', 'Business Deductions', 'Strategic Planning']
      },
      {
        id: 3,
        title: 'Corporate Accounting',
        description: 'Full-service accounting and financial management for corporations.',
        price: 'Custom Pricing',
        features: ['Financial Statements', 'Cash Flow Management', 'CFO Services']
      }
    ],
    testimonials: [
      {
        id: 1,
        name: 'Sarah Johnson',
        company: 'Johnson\'s Bakery',
        review: 'TaxPro helped me save over $5,000 in taxes last year. Incredible service!',
        rating: 5
      },
      {
        id: 2,
        name: 'Michael Chen',
        company: 'InnovateTech',
        review: 'Professional, reliable, and always available when we need them.',
        rating: 5
      }
    ]
  });

  const [activeTab, setActiveTab] = useState('business');
  const [previewMode, setPreviewMode] = useState(false);
  const [saved, setSaved] = useState(false);

  // Save content to localStorage
  const saveContent = () => {
    localStorage.setItem('landingPageContent', JSON.stringify(content));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
    
    // In a real app, you'd send this to your backend
    console.log('Content saved:', content);
  };

  // Load content from localStorage
  useEffect(() => {
    const savedContent = localStorage.getItem('landingPageContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  // Update business info
  const updateBusinessInfo = (field, value) => {
    setContent(prev => ({
      ...prev,
      businessInfo: {
        ...prev.businessInfo,
        [field]: value
      }
    }));
  };

  // Update hero section
  const updateHero = (field, value) => {
    setContent(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };

  // Update service
  const updateService = (serviceId, field, value) => {
    setContent(prev => ({
      ...prev,
      services: prev.services.map(service =>
        service.id === serviceId
          ? { ...service, [field]: value }
          : service
      )
    }));
  };

  // Add new service
  const addService = () => {
    const newId = Math.max(...content.services.map(s => s.id)) + 1;
    setContent(prev => ({
      ...prev,
      services: [...prev.services, {
        id: newId,
        title: 'New Service',
        description: 'Service description',
        price: 'Starting at $99',
        features: ['Feature 1', 'Feature 2']
      }]
    }));
  };

  // Delete service
  const deleteService = (serviceId) => {
    if (window.confirm('Are you sure you want to delete this service?')) {
      setContent(prev => ({
        ...prev,
        services: prev.services.filter(service => service.id !== serviceId)
      }));
    }
  };

  // Update testimonial
  const updateTestimonial = (testimonialId, field, value) => {
    setContent(prev => ({
      ...prev,
      testimonials: prev.testimonials.map(testimonial =>
        testimonial.id === testimonialId
          ? { ...testimonial, [field]: value }
          : testimonial
      )
    }));
  };

  // Tab navigation
  const tabs = [
    { id: 'business', label: 'Business Info', icon: Settings },
    { id: 'hero', label: 'Hero Section', icon: Edit3 },
    { id: 'services', label: 'Services', icon: FileText },
    { id: 'testimonials', label: 'Testimonials', icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TP</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">Landing Page Admin</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span>{previewMode ? 'Edit Mode' : 'Preview'}</span>
              </button>
              <button
                onClick={saveContent}
                className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-all ${
                  saved 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                <Save className="h-4 w-4" />
                <span>{saved ? 'Saved!' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-4 border-b">
                <h2 className="font-semibold text-gray-900">Content Sections</h2>
              </div>
              <nav className="p-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6">
                {/* Business Info Tab */}
                {activeTab === 'business' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Settings className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Business Information</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={content.businessInfo.companyName}
                          onChange={(e) => updateBusinessInfo('companyName', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tagline
                        </label>
                        <input
                          type="text"
                          value={content.businessInfo.tagline}
                          onChange={(e) => updateBusinessInfo('tagline', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="h-4 w-4 inline mr-1" />
                          Phone Number
                        </label>
                        <input
                          type="text"
                          value={content.businessInfo.phone}
                          onChange={(e) => updateBusinessInfo('phone', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="h-4 w-4 inline mr-1" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={content.businessInfo.email}
                          onChange={(e) => updateBusinessInfo('email', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <MapPin className="h-4 w-4 inline mr-1" />
                          Service Area
                        </label>
                        <input
                          type="text"
                          value={content.businessInfo.address}
                          onChange={(e) => updateBusinessInfo('address', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Business Hours
                        </label>
                        <input
                          type="text"
                          value={content.businessInfo.hours}
                          onChange={(e) => updateBusinessInfo('hours', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Hero Section Tab */}
                {activeTab === 'hero' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Edit3 className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Hero Section</h2>
                    </div>

                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Title (First Line)
                          </label>
                          <input
                            type="text"
                            value={content.hero.title}
                            onChange={(e) => updateHero('title', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subtitle (Second Line)
                          </label>
                          <input
                            type="text"
                            value={content.hero.subtitle}
                            onChange={(e) => updateHero('subtitle', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Third Line
                          </label>
                          <input
                            type="text"
                            value={content.hero.partner}
                            onChange={(e) => updateHero('partner', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Description
                        </label>
                        <textarea
                          value={content.hero.description}
                          onChange={(e) => updateHero('description', e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CTA Button Text
                          </label>
                          <input
                            type="text"
                            value={content.hero.ctaText}
                            onChange={(e) => updateHero('ctaText', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Trust Indicator Text
                          </label>
                          <input
                            type="text"
                            value={content.hero.trustedText}
                            onChange={(e) => updateHero('trustedText', e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Services Tab */}
                {activeTab === 'services' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-3">
                        <FileText className="h-6 w-6 text-emerald-600" />
                        <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                      </div>
                      <button
                        onClick={addService}
                        className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                      >
                        Add Service
                      </button>
                    </div>

                    <div className="space-y-6">
                      {content.services.map((service) => (
                        <div key={service.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-900">Service {service.id}</h3>
                            <button
                              onClick={() => deleteService(service.id)}
                              className="text-red-600 hover:text-red-800 transition-colors"
                            >
                              Delete
                            </button>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Service Title
                              </label>
                              <input
                                type="text"
                                value={service.title}
                                onChange={(e) => updateService(service.id, 'title', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Price
                              </label>
                              <input
                                type="text"
                                value={service.price}
                                onChange={(e) => updateService(service.id, 'price', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              />
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Description
                            </label>
                            <textarea
                              value={service.description}
                              onChange={(e) => updateService(service.id, 'description', e.target.value)}
                              rows={2}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Features (one per line)
                            </label>
                            <textarea
                              value={service.features.join('\n')}
                              onChange={(e) => updateService(service.id, 'features', e.target.value.split('\n').filter(f => f.trim()))}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Testimonials Tab */}
                {activeTab === 'testimonials' && (
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <Users className="h-6 w-6 text-emerald-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Testimonials</h2>
                    </div>

                    <div className="space-y-6">
                      {content.testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Client Name
                              </label>
                              <input
                                type="text"
                                value={testimonial.name}
                                onChange={(e) => updateTestimonial(testimonial.id, 'name', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              />
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Company
                              </label>
                              <input
                                type="text"
                                value={testimonial.company}
                                onChange={(e) => updateTestimonial(testimonial.id, 'company', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                              />
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Review
                            </label>
                            <textarea
                              value={testimonial.review}
                              onChange={(e) => updateTestimonial(testimonial.id, 'review', e.target.value)}
                              rows={3}
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Rating (1-5)
                            </label>
                            <div className="flex items-center space-x-2">
                              {[1, 2, 3, 4, 5].map((rating) => (
                                <button
                                  key={rating}
                                  onClick={() => updateTestimonial(testimonial.id, 'rating', rating)}
                                  className={`p-1 ${testimonial.rating >= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                >
                                  <Star className="h-5 w-5 fill-current" />
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
