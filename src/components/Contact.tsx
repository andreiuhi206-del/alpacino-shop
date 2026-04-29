import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-italian-white rounded-[8px] p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@alpackino.com</p>
          </div>

          <div className="bg-italian-white rounded-[8px] p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>

          <div className="bg-italian-white rounded-[8px] p-8 text-center hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-600">123 Italian Ave, NY 10001</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-italian-white rounded-[8px] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-900 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-[8px] focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us how we can help..."
              ></textarea>
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;