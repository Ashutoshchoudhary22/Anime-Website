import { useState } from 'react';
import Footer from '../components/Footer';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend API
    setStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-1 block w-full bg-gray-800 border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                Send Message
              </button>
              {status && <p className="text-center text-green-400 mt-2">{status}</p>}
            </form>
          </div>

          {/* Contact Info and Map */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-400 mb-2">Email: support@streamingplatform.com</p>
            <p className="text-gray-400 mb-2">Phone: +1-234-567-8900</p>
            <p className="text-gray-400 mb-4">Address: 123 Streaming Lane, Tech City, TC 12345</p>

            <h3 className="text-lg font-semibold mb-2">Our Location</h3>
            <div className="w-full h-64 bg-gray-800 rounded-md overflow-hidden">
              {/* Replace with a static map image or embed if needed */}
              <img
                src="https://via.placeholder.com/400x250.png?text=Map+Placeholder"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
            <Footer />
    </div>
    
  );
}