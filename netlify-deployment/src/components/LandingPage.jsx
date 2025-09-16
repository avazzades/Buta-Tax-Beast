import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Globe, Star, Users, Award, TrendingUp, ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const LandingPage = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    console.log('Get started clicked with email:', email);
    const subject = encodeURIComponent(t('contact.consultation_subject') || 'Free Tax Consultation Request');
    const body = encodeURIComponent(`${t('contact.consultation_intro')} ${t('company')},\n\n${t('contact.consultation_body')} ${email}.\n\n${t('contact.thank_you')}`);
    window.location.href = `mailto:${t('email')}?subject=${subject}&body=${body}`;
    setEmail('');
  };

  const handleServiceQuote = (serviceName) => {
    const subject = encodeURIComponent(`${t('contact.quote_subject')} - ${serviceName}`);
    const body = encodeURIComponent(`${t('contact.quote_intro')} ${t('company')},\n\n${t('contact.quote_body')} ${serviceName}.\n\n${t('contact.quote_more_info')}\n\n${t('contact.thank_you')}`);
    window.location.href = `mailto:${t('email')}?subject=${subject}&body=${body}`;
  };

  const stats = [
    { icon: Users, value: '5,000+', label: t('stats.clients') },
    { icon: Award, value: '15+', label: t('stats.experience') },
    { icon: TrendingUp, value: '$50M+', label: t('stats.saved') },
    { icon: Star, value: '4.9/5', label: t('stats.rating') }
  ];

  const benefits = [
    t('hero.benefits.savings'),
    t('hero.benefits.support'),
    t('hero.benefits.protection'),
    t('hero.benefits.experts')
  ];

  const services = [
    {
      id: 1,
      title: t('services.individual.title'),
      description: t('services.individual.description'),
      price: t('services.individual.price'),
      features: t('services.individual.features', { returnObjects: true })
    },
    {
      id: 2,
      title: t('services.business.title'),
      description: t('services.business.description'),
      price: t('services.business.price'),
      features: t('services.business.features', { returnObjects: true })
    },
    {
      id: 3,
      title: t('services.corporate.title'),
      description: t('services.corporate.description'),
      price: t('services.corporate.price'),
      features: t('services.corporate.features', { returnObjects: true })
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'Johnson\'s Bakery',
      review: t('testimonials.sarah.review'),
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'InnovateTech',
      review: t('testimonials.michael.review'),
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>{t('phone')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>{t('email')}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>{t('address')}</span>
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
                <span className="text-white font-bold text-sm">BUTA</span>
              </div>
              <div>
                <div className="text-xl font-bold text-gray-900">{t('company')}</div>
                <div className="text-xs text-gray-500">{t('tagline')}</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['services', 'about', 'pricing', 'resources', 'contact'].map((item) => (
                <button
                  key={item}
                  className="text-gray-700 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
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
                {t('nav.client_login')}
              </Button>
              <Button 
                className="bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                onClick={() => {
                  const subject = encodeURIComponent(t('contact.consultation_subject'));
                  const body = encodeURIComponent(`${t('contact.consultation_intro')} ${t('company')},\n\n${t('contact.consultation_schedule')}\n\n${t('contact.thank_you')}`);
                  window.location.href = `mailto:${t('email')}?subject=${subject}&body=${body}`;
                }}
              >
                {t('nav.free_consultation')}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 font-medium">{t('hero.trusted')}</span>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {t('hero.subtitle')}
              </span>
              {t('hero.partner')}
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('hero.description')}
            </p>

            {/* Key benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="max-w-md mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={t('hero.email_placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 px-4 border-2 border-gray-200 focus:border-emerald-500 rounded-lg outline-none"
                />
                <Button 
                  onClick={handleGetStarted}
                  className="h-12 px-8 bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-3">{t('hero.cta_subtitle')}</p>
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

        {/* Floating location card */}
        <div className="absolute bottom-8 right-8 hidden lg:block">
          <div className="bg-white rounded-lg shadow-xl p-4 max-w-sm">
            <div className="text-emerald-600 font-bold text-lg mb-2">{t('contact.visit_office')}</div>
            <div className="text-gray-600 text-sm">
              {t('address')}<br />
              <span className="text-emerald-600 font-medium">{t('phone')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('services.main_title')}
              <span className="block text-emerald-600">{t('services.subtitle')}</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('services.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="text-emerald-600 font-bold text-lg mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-emerald-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                  onClick={() => handleServiceQuote(service.title)}
                >
                  {t('services.get_quote')}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('testimonials.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('testimonials.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 text-lg italic">"{testimonial.review}"</p>
                <div className="flex items-center">
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">{t('contact.title')}</h2>
          <p className="text-xl text-gray-600 mb-12">{t('contact.description')}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Phone className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">{t('contact.call_us')}</h3>
              <p className="text-gray-600">{t('phone')}</p>
            </div>
            <div className="text-center">
              <Mail className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">{t('contact.email_us')}</h3>
              <p className="text-gray-600">{t('email')}</p>
            </div>
            <div className="text-center">
              <MapPin className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-bold mb-2">{t('contact.visit_office')}</h3>
              <p className="text-gray-600">{t('address_formatted')}</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t('contact.business_hours')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div>
                <div className="font-semibold">{t('contact.weekdays')}</div>
                <div className="text-gray-600">{t('contact.weekdays_hours')}</div>
              </div>
              <div>
                <div className="font-semibold">{t('contact.saturday')}</div>
                <div className="text-gray-600">{t('contact.saturday_hours')}</div>
              </div>
              <div>
                <div className="font-semibold">{t('contact.sunday')}</div>
                <div className="text-gray-600">{t('contact.sunday_hours')}</div>
              </div>
              <div>
                <div className="font-semibold">{t('contact.tax_season')}</div>
                <div className="text-gray-600">{t('contact.extended_hours')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">BUTA</span>
              </div>
              <div>
                <div className="text-2xl font-bold">{t('company')}</div>
                <div className="text-sm text-gray-400">{t('tagline')}</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              {t('footer.description')}
            </p>
            <div className="flex justify-center space-x-4 mb-6">
              <LanguageSwitcher variant="ghost" size="sm" />
            </div>
            <div className="text-gray-400 mb-4">
              <div>📍 {t('address')}</div>
              <div>📞 {t('phone')} | ✉️ {t('email')}</div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8">
              <p className="text-gray-400 text-sm">
                © 2024 {t('company')}. {t('footer.rights')}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
