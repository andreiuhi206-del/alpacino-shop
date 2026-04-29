import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-italian-red to-italian-green rounded-[8px] flex items-center justify-center">
                  <span className="text-white font-bold">AP</span>
                </div>
                <span className="font-bold text-white text-lg">Al Pacino</span>
              </div>
              <p className="text-gray-400">
                Bringing authentic Italian products to your table since day one.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#hero" className="hover:text-primary transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-primary transition-colors">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-bold text-white mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Cheese
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Pasta
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Oils
                  </a>
                </li>
                <li>
                  <a href="#products" className="hover:text-primary transition-colors">
                    Cured Meats
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-bold text-white mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Al Pacino. All rights reserved. | Made with ❤️ in Italy
              </p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;