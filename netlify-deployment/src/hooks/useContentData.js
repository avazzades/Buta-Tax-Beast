import { useState, useEffect } from 'react';

// Default content (fallback if nothing saved)
const defaultContent = {
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
};

export const useContentData = () => {
  const [content, setContent] = useState(defaultContent);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load content from localStorage
    const loadContent = () => {
      try {
        const savedContent = localStorage.getItem('landingPageContent');
        if (savedContent) {
          const parsedContent = JSON.parse(savedContent);
          setContent(parsedContent);
          console.log('✅ Loaded content from admin panel:', parsedContent);
        } else {
          console.log('📝 Using default content');
        }
      } catch (error) {
        console.error('❌ Error loading content:', error);
        setContent(defaultContent);
      } finally {
        setLoading(false);
      }
    };

    loadContent();

    // Listen for localStorage changes (when admin panel saves)
    const handleStorageChange = (e) => {
      if (e.key === 'landingPageContent') {
        console.log('🔄 Content updated from admin panel');
        loadContent();
      }
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events (for same-tab updates)
    const handleContentUpdate = () => {
      loadContent();
    };
    
    window.addEventListener('contentUpdated', handleContentUpdate);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('contentUpdated', handleContentUpdate);
    };
  }, []);

  return { content, loading };
};
