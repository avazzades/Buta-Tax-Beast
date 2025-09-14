import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { faqs } from '../mockData';

export const FAQ = () => {
  const handleContactSupport = () => {
    console.log('Contact support clicked');
    alert('Our support team is standing by to help! Chat feature coming soon.');
  };

  const handleScheduleCall = () => {
    console.log('Schedule call clicked');
    alert('Call scheduling feature coming soon! For now, please call (555) 123-4567.');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
            FAQ
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="block text-purple-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our tax and accounting services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id.toString()}
                className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-t-lg transition-colors duration-200">
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-2">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Section */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Our tax experts are here to help. Get personalized answers to your specific situation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleContactSupport}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat with Expert
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleScheduleCall}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3 transform hover:scale-105 transition-all duration-200"
            >
              <Phone className="mr-2 h-5 w-5" />
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Knowledge Base CTA */}
        <div className="text-center mt-12">
          <h4 className="text-xl font-semibold text-gray-900 mb-4">
            Looking for More Resources?
          </h4>
          <p className="text-gray-600 mb-6">
            Check out our comprehensive knowledge base with tax guides, calculators, and industry insights.
          </p>
          <Button 
            variant="outline"
            onClick={() => alert('Knowledge base coming soon!')}
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            Browse Knowledge Base
          </Button>
        </div>
      </div>
    </section>
  );
};