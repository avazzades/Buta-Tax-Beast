import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { Testimonials } from './Testimonials';
import { Pricing } from './Pricing';
import { FAQ } from './FAQ';
import { Footer } from './Footer';

export const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};