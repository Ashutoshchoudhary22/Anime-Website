import { useState } from 'react';
import Footer from '../components/Footer';
import video from '../assets/favourites Anime/video22.mp4';

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
    setStatus('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative min-h-screen text-white py-12">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        onLoadedData={() => console.log('Video loaded')}
        onError={(e) => console.error('Video error:', e)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 backdrop-blur-sm z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
     <h1 className="mx-auto  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
           Contact Us
          </h1>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
           
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
                  className="mt-1 block w-full backdrop-blur-md bg-transparent border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="mt-1 block w-full backdrop-blur-md bg-transparent border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
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
                  className="mt-1 block w-full backdrop-blur-md bg-transparent border border-gray-700 rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 rounded-md transition duration-300"
              >
                Send Message
              </button>
              {status && <p className="text-center text-green-400 mt-2">{status}</p>}
            </form>
          </div>

          {/* Contact Info and Map */}
          <div className='mt-30'>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="text-white mb-2">Email: Akkychoudhary5468@gmail.com</p>
            <p className="text-white mb-2">Phone: +919870605594</p>
            <p className="text-white mb-4">Address: India</p>
          </div>
         
        </div>
      
      </div>
      
    </div>
  );
}