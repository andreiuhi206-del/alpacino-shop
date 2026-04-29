import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <nav className="container-max section-padding flex items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-italian-red to-italian-green rounded-[8px] flex items-center justify-center">
            <span className="text-white font-bold text-lg">AP</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Al Pacino</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('products')}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Products
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Reviews
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-gray-600 hover:text-primary transition-colors"
          >
            Contact
          </button>
          <button onClick={() => scrollToSection('hero')} className="btn-primary">
            Shop Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container-max section-padding py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection('products')}
              className="text-left text-gray-600 hover:text-primary transition-colors py-2"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left text-gray-600 hover:text-primary transition-colors py-2"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-gray-600 hover:text-primary transition-colors py-2"
            >
              Contact
            </button>
            <button onClick={() => scrollToSection('hero')} className="btn-primary w-full">
              Shop Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;