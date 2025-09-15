import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-600">HomeFront</div>
        <ul className="flex space-x-4">
          <li><a href="#features" className="hover:text-emerald-600">Features</a></li>
          <li><a href="#about" className="hover:text-emerald-600">About</a></li>
          <li><a href="#contact" className="hover:text-emerald-600">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-blue-50 text-center p-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-700 mb-4">
          Your Path to Homeownership Starts Here
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          HomeFront helps you navigate your first-time home purchase with ease and confidence.
        </p>
        <a
          href="#contact"
          className="bg-emerald-600 text-white px-6 py-3 rounded-full text-lg font-medium shadow-lg hover:bg-emerald-700 transition"
        >
          Get Started
        </a>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-8">Why Choose HomeFront?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-2">Expert Guidance</h3>
            <p>Access step-by-step advice tailored for first-time buyers.</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-2">Loan Support</h3>
            <p>Find the best mortgage options with our tools and experts.</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-emerald-600 mb-2">Community Insights</h3>
            <p>Connect with others on the same journey to homeownership.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-emerald-600 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">About HomeFront</h2>
        <p className="max-w-3xl mx-auto text-lg">
          We believe everyone deserves a place to call home. That’s why we built HomeFront – to simplify the
          home-buying process and empower first-time buyers with knowledge, support, and confidence.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-emerald-700 mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions? We’re here to help you every step of the way.
        </p>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-gray-300 rounded"
            required
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 border border-gray-300 rounded"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-3 rounded-full font-medium hover:bg-emerald-700 transition"
          >
            Send Message
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-6">
          Free consultation • No obligation • Expert advice
        </p>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-white text-center text-gray-600 border-t">
        © {new Date().getFullYear()} HomeFront. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
