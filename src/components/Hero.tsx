import React from 'react';
import { Star, Truck, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="section-padding bg-gradient-to-br from-italian-white to-white">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-1 h-8 bg-gradient-to-b from-italian-red via-italian-white to-italian-green rounded-full"></div>
                <span className="text-primary font-semibold">Authentic Italian Heritage</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to <span className="text-primary">Al Pacino</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the authentic taste of Italy. We bring premium Italian products directly to your door with passion and tradition.
              </p>
            </div>

            <div className="flex gap-4 flex-wrap">
              <button className="btn-primary">Explore Products</button>
              <button className="btn-secondary">Learn More</button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              <div>
                <div className="text-2xl font-bold text-primary">4.9★</div>
                <p className="text-sm text-gray-600">Rated by Customers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">10K+</div>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">100%</div>
                <p className="text-sm text-gray-600">Authentic Products</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-italian-red/10 to-italian-green/10 rounded-[16px]"></div>
            <div className="relative bg-gradient-to-br from-italian-red/5 to-italian-green/5 rounded-[16px] p-12 flex flex-col items-center justify-center h-96">
              <div className="text-center space-y-4">
                <div className="text-6xl">🇮🇹</div>
                <h2 className="text-3xl font-bold text-gray-900">Made in Italy</h2>
                <p className="text-gray-600">Tradition meets Quality</p>
              </div>
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
                <div className="bg-white rounded-[8px] p-4 text-center shadow-sm">
                  <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Fast Shipping</p>
                </div>
                <div className="bg-white rounded-[8px] p-4 text-center shadow-sm">
                  <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Guaranteed</p>
                </div>
                <div className="bg-white rounded-[8px] p-4 text-center shadow-sm">
                  <Star className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-xs text-gray-600">Premium Quality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;