import React, { useState, useEffect } from 'react';
import { getBusinessInfo, getServices, getTestimonials } from './contentful';
import homeContent from "./content/home.json";

function LandingPage() {
  return (
    <div>
      <h1>{homeContent.title}</h1>
      <h2>{homeContent.subtitle}</h2>
      <p>{homeContent.body}</p>
    </div>
  );
}

export default LandingPage;

function App() {
  const [businessInfo, setBusinessInfo] = useState({});
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const [businessData, servicesData, testimonialsData] = await Promise.all([
          getBusinessInfo(),
          getServices(),
          getTestimonials()
        ]);
        
        setBusinessInfo(businessData);
        setServices(servicesData);
        setTestimonials(testimonialsData);
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <div className="text-xl">Loading...</div>
    </div>;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with dynamic content */}
      <header className="bg-gray-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>📞 {businessInfo.phone || '(555) 123-4567'}</span>
            <span>✉️ {businessInfo.email || 'info@taxpro.com'}</span>
          </div>
        </div>
      </header>

      {/* Services Section with dynamic content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-emerald-600 font-bold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features?.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="text-emerald-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials with dynamic content */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.reviewText}"</p>
                <div className="font-bold">{testimonial.clientName}</div>
                <div className="text-gray-600">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
