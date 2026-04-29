import React from 'react';

interface Review {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Marco Rossi',
    role: 'Food Enthusiast',
    rating: 5,
    text: 'Al Pacino products are absolutely authentic! I grew up eating these in Italy, and the quality is exactly the same. Highly recommended!',
    avatar: '👨‍💼',
  },
  {
    id: 2,
    name: 'Sophia Milano',
    role: 'Chef',
    rating: 5,
    text: 'I use Al Pacino ingredients in my restaurant. My customers always notice the superior quality. Best Italian supplier I\'ve found.',
    avatar: '👩‍🍳',
  },
  {
    id: 3,
    name: 'Giovanni Bianchi',
    role: 'Home Cook',
    rating: 5,
    text: 'Fast delivery, authentic products, and excellent customer service. Al Pacino has become my go-to shop for Italian ingredients.',
    avatar: '👨‍🍳',
  },
  {
    id: 4,
    name: 'Lucia Verdi',
    role: 'Restaurateur',
    rating: 5,
    text: 'The consistency and quality of products never wavers. This is the kind of supplier every Italian restaurant dreams of.',
    avatar: '👩‍💼',
  },
];

const CustomerReviews: React.FC = () => {
  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

  return (
    <section id="reviews" className="section-padding bg-italian-white">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Loved by <span className="text-primary">Customers</span>
          </h2>
          <div className="flex items-center justify-center gap-2">
            <div className="text-4xl font-bold text-primary">{avgRating}</div>
            <div className="text-left">
              <div className="text-2xl">⭐⭐⭐⭐⭐</div>
              <p className="text-gray-600 text-sm">Based on {reviews.length} reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[8px] p-8 border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-lg">⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="text-4xl">{review.avatar}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;