import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check, Star, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../mockData';

export const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    console.log('Selected plan:', plan.name);
    alert(`You selected the ${plan.name} plan! A specialist will contact you within 24 hours to get started.`);
  };

  const handleContactSales = () => {
    console.log('Contact sales clicked');
    alert('Our sales team will reach out to discuss your custom enterprise needs!');
  };

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="block text-indigo-600">Tax Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            No hidden fees, no surprises. Just transparent pricing for professional tax and accounting services.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <Card 
              key={plan.id} 
              className={`relative group transition-all duration-300 border-2 ${
                plan.popular 
                  ? 'border-indigo-500 shadow-2xl scale-105 bg-gradient-to-b from-indigo-50 to-white' 
                  : 'border-gray-200 hover:border-indigo-300 hover:shadow-xl hover:scale-105 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-indigo-600 text-white px-6 py-2 text-sm font-semibold">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-gray-600 mb-6">
                  {plan.description}
                </CardDescription>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-xl text-gray-500 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {/* Features List */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        <Check className={`h-4 w-4 ${plan.popular ? 'text-indigo-600' : 'text-emerald-500'}`} />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={() => handleSelectPlan(plan)}
                  className={`w-full font-semibold transform hover:scale-105 transition-all duration-200 ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg'
                      : 'bg-gray-900 hover:bg-gray-800 text-white'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Every Plan Includes Our Guarantee
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">100%</div>
              <div className="opacity-90">Accuracy Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Audit Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">Free</div>
              <div className="opacity-90">Consultation</div>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need a Custom Solution?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            For large enterprises with complex accounting needs, we offer fully customized solutions with dedicated support teams.
          </p>
          <Button 
            size="lg"
            variant="outline"
            onClick={handleContactSales}
            className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold px-8 py-3"
          >
            Contact Enterprise Sales
          </Button>
        </div>
      </div>
    </section>
  );
};