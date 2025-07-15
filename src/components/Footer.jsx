import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-400">
              Welcome to our streaming platform. Enjoy your favorite episodes and movies with us!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/categories" className="text-gray-400 hover:text-white">Categories</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.494v-9.294H9.691v-3.621h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.621h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.96 13.96 0 011.671 3.149a4.914 4.914 0 001.524 6.573 4.903 4.903 0 01-2.228-.616c-.053 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.917 4.917 0 004.593 3.419A9.868 9.868 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 14.307-14.308 0-.218-.005-.436-.014-.652A10.005 10.005 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.266.057 2.134.277 2.883.596.749.32 1.363.693 1.972 1.302.609.609.982 1.223 1.302 1.972.319.749.539 1.617.596 2.883.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.057 1.266-.277 2.134-.596 2.883-.32.749-.693 1.363-1.302 1.972-.609.609-1.223.982-1.972 1.302-.749.319-1.617.539-2.883.596-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.266-.057-2.134-.277-2.883-.596-.749-.32-1.363-.693-1.972-1.302-.609-.609-.982-1.223-1.302-1.972-.319-.749-.539-1.617-.596-2.883-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.057-1.266.277-2.134.596-2.883.32-.749.693-1.363 1.302-1.972.609-.609 1.223-.982 1.972-1.302.749-.319 1.617-.539 2.883-.596 1.266-.058 1.646-.07 4.85-.07m0-2.163C8.736 0 8.334.012 7.05.07 5.783.127 4.908.348 4.264.666c-.644.319-1.185.715-1.726 1.256-.541.541-.937.982-1.256 1.726-.318.644-.539 1.52-.596 2.787C.127 7.05.114 7.452.114 11.5s.012 4.45.07 5.95c.057 1.267.277 2.143.596 2.787.319.644.715 1.185 1.256 1.726.541.541.982.937 1.726 1.256.644.318 1.52.539 2.787.596 1.5.058 1.902.07 5.95.07s4.45-.012 5.95-.07c1.267-.057 2.143-.277 2.787-.596.644-.319 1.185-.715 1.726-1.256.541-.541.937-.982 1.256-1.726.318-.644.539-1.52.596-2.787.058-1.5.07-1.902.07-5.95s-.012-4.45-.07-5.95c-.057-1.267-.277-2.143-.596-2.787-.319-.644-.715-1.185-1.256-1.726-.541-.541-.982-.937-1.726-1.256-.644-.318-1.52-.539-2.787-.596-1.5-.058-1.902-.07-5.95-.07z"/>
                  <path d="M12 7.378a4.622 4.622 0 100 9.244 4.622 4.622 0 000-9.244zm0 7.622a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Streaming Platform. All rights reserved.
        </div>
      </div>
    </footer>
  );
}