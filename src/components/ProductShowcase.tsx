import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Parmigiano Reggiano',
    category: 'Cheese',
    price: 24.99,
    image: '🧀',
    description: 'Premium aged Parmigiano Reggiano from Emilia-Romagna',
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Balsamic Vinegar',
    category: 'Condiments',
    price: 18.99,
    image: '🫙',
    description: 'Traditional balsamic vinegar aged 25 years',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'San Marzano Tomatoes',
    category: 'Vegetables',
    price: 12.99,
    image: '🍅',
    description: 'Authentic San Marzano tomatoes in puree form',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Fresh Basil Oil',
    category: 'Oils',
    price: 16.99,
    image: '🫗',
    description: 'Extra virgin olive oil infused with fresh basil',
    rating: 4.7,
  },
  {
    id: 5,
    name: 'Truffle Pasta',
    category: 'Pasta',
    price: 22.99,
    image: '🍝',
    description: 'Handcrafted pasta with black truffle flavor',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Prosciutto Di Parma',
    category: 'Meat',
    price: 28.99,
    image: '🥩',
    description: 'Aged Prosciutto di Parma, thinly sliced',
    rating: 4.8,
  },
];

const ProductShowcase: React.FC = () => {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Featured <span className="text-primary">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked Italian delicacies sourced directly from artisanal producers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white border border-gray-200 rounded-[8px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="bg-gradient-to-br from-italian-white to-white p-12 relative overflow-hidden">
                <div className="text-6xl text-center group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <button className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors">
                  <Heart size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Product Details */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-sm text-primary font-semibold mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900">
                    {product.name}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm">
                  {product.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <span>⭐ {product.rating}</span>
                    </div>
                  </div>
                  <button className="bg-primary text-white p-3 rounded-[8px] hover:bg-blue-700 transition-colors">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary text-lg px-8 py-4">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;