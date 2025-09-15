import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Separator } from './ui/separator';
import { LanguageSwitcher } from './LanguageSwitcher';
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
  const { t } = useTranslation();

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

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">
            {t('footer.newsletter.title')}
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('footer.newsletter.description')}
          </p>
          
          <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                name="email"
                placeholder={t('footer.newsletter.placeholder')}
                required
                className="flex-1 h-12 px-4 bg-white text-gray-900 border-0 rounded-lg"
              />
              <Button 
                type="submit"
                className="h-12 px-8 bg-white text-emerald-600 hover:bg-gray-100 font-semibold rounded-lg transform hover:scale-105 transition-all duration-200"
              >
                {t('footer.newsletter.button')}
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
                  <div className="text-2xl font-bold">{t('header.companyName')}</div>
                  <div className="text-sm text-gray-400">{t('header.tagline')}</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {t('footer.company.description')}
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-emerald-500" />
                  <span>{t('header.phone')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-emerald-500" />
                  <span>{t('header.email')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-emerald-500" />
                  <span>{t('header.serving')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-emerald-500" />
                  <span>{t('footer.company.hours')}</span>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4 mb-6">
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

              {/* Language Switcher */}
              <div className="flex items-center space-x-3">
                <span className="text-sm text-gray-400">Language:</span>
                <LanguageSwitcher variant="ghost" size="sm" />
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.services')}</h4>
              <ul className="space-y-3">
                {t('footer.serviceLinks', { returnObjects: true }).map((link, index) => (
                  <li key={index}>
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
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.company')}</h4>
              <ul className="space-y-3">
                {t('footer.companyLinks', { returnObjects: true }).map((link, index) => (
                  <li key={index}>
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
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.resources')}</h4>
              <ul className="space-y-3">
                {t('footer.resourceLinks', { returnObjects: true }).map((link, index) => (
                  <li key={index}>
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
              <h4 className="text-lg font-semibold mb-6">{t('footer.links.legal')}</h4>
              <ul className="space-y-3">
                {t('footer.legalLinks', { returnObjects: true }).map((link, index) => (
                  <li key={index}>
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
              © {currentYear} {t('header.companyName')}. {t('footer.copyright')}
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <button onClick={() => alert('Privacy Policy coming soon!')}>
                {t('footer.bottomLinks.privacy')}
              </button>
              <button onClick={() => alert('Terms of Service coming soon!')}>
                {t('footer.bottomLinks.terms')}
              </button>
              <button onClick={() => alert('Cookie Settings coming soon!')}>
                {t('footer.bottomLinks.cookies')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};