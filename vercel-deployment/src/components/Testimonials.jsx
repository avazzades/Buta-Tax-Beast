import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, Quote } from 'lucide-react';
import { testimonials, caseStudies } from '../mockData';

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Client Success Stories
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 hover:from-blue-50 hover:to-white">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-blue-500 opacity-70" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">
              Case Studies
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results for Real Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses like yours achieve significant tax savings and financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-emerald-50 to-white overflow-hidden">
                <CardContent className="p-8">
                  {/* Savings Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <Badge className="bg-emerald-600 text-white text-lg px-4 py-2">
                      Saved {study.savings}
                    </Badge>
                  </div>
                  
                  {/* Client */}
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Client</span>
                    <div className="text-lg font-semibold text-gray-900">{study.client}</div>
                  </div>
                  
                  {/* Challenge */}
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Challenge</span>
                    <p className="text-gray-700 mt-2 leading-relaxed">{study.challenge}</p>
                  </div>
                  
                  {/* Solution */}
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wide font-semibold">Solution</span>
                    <p className="text-gray-700 mt-2 leading-relaxed">{study.solution}</p>
                  </div>
                  
                  {/* Result */}
                  <div className="bg-gradient-to-r from-emerald-100 to-blue-100 rounded-lg p-4">
                    <span className="text-sm text-emerald-800 uppercase tracking-wide font-semibold">Result</span>
                    <p className="text-emerald-800 mt-2 leading-relaxed font-medium">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">$50M+</div>
              <div className="text-gray-600">Total Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">5000+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};