import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { FileText, Building2, TrendingUp, Calculator, Target, Shield, ArrowRight, Check } from 'lucide-react';
import { services } from '../mockData';

const iconMap = {
  FileText,
  Building2,
  TrendingUp,
  Calculator,
  Target,
  Shield
};

export const Services = () => {
  const handleLearnMore = (serviceTitle) => {
    console.log('Learn more clicked for:', serviceTitle);
    alert(`More details about ${serviceTitle} coming soon!`);
  };

  const handleGetQuote = (serviceTitle) => {
    console.log('Get quote clicked for:', serviceTitle);
    alert(`Quote request for ${serviceTitle} submitted! We'll contact you within 24 hours.`);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Tax & Accounting
            <span className="block text-emerald-600">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From individual tax returns to complex corporate accounting, we provide expert services 
            tailored to your unique needs and goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            
            return (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-lg group-hover:from-emerald-200 group-hover:to-blue-200 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-emerald-600" />
                    </div>
                    <Badge variant="outline" className="text-sm font-semibold">
                      {service.price}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          <Check className="h-4 w-4 text-emerald-500" />
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleGetQuote(service.title)}
                      className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white font-semibold transform hover:scale-105 transition-all duration-200"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => handleLearnMore(service.title)}
                      className="w-full border-gray-300 hover:border-emerald-500 hover:text-emerald-600 transition-colors duration-200"
                    >
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            Not Sure Which Service You Need?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free consultation with our experts to discuss your specific needs
          </p>
          <Button 
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200"
            onClick={() => alert('Free consultation booking feature coming soon!')}
          >
            Schedule Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};