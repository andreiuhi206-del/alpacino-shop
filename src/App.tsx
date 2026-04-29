import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import CustomerReviews from './components/CustomerReviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <ProductShowcase />
      <CustomerReviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;