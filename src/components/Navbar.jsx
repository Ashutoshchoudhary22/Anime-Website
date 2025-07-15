import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';
import logo from '../assets/logo.png';
import video from '../assets/boom.mp4';
import song from '../assets/song.mp3';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Start with song playing
  const audioRef = useState(new Audio(song))[0]; // Create audio instance

  // Set up autoplay and loop on component mount
  useEffect(() => {
    audioRef.loop = true; // Enable looping
    audioRef.play().catch((e) => console.error('Audio play error:', e));
    return () => {
      audioRef.pause(); // Cleanup: pause audio when component unmounts
    };
  }, [audioRef]);

  const toggleSong = () => {
    if (isPlaying) {
      audioRef.pause();
    } else {
      audioRef.play().catch((e) => console.error('Audio play error:', e));
    }
    setIsPlaying(!isPlaying);
  };

  const link = 'px-4 py-2 hover:text-pink-500 transition font-medium text-sm';

  return (
    <header className="sticky top-0 z-20 h-16">
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

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between px-4 py-3 text-white z-20">
        {/* Logo (Left) */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="MyGallery logo" className="h-8 w-8 sm:h-10 sm:w-10" />
        </NavLink>

        {/* Navigation Links (Center, hidden on mobile when closed) */}
        <div
          className={`${
            open ? 'flex' : 'hidden'
          } absolute top-16 left-0 right-0 bg-black/90 sm:bg-transparent flex-col sm:flex sm:flex-row sm:static gap-4 sm:gap-2 items-center justify-center sm:flex-grow sm:ml-8 p-4 sm:p-0`}
        >
          <NavLink
            to="/"
            className={link}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={link}
            onClick={() => setOpen(false)}
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            className={link}
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={link}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </div>

        {/* Song Button (Desktop, right) */}
        <div className="hidden sm:flex items-center space-x-2">
          <button
            onClick={toggleSong}
            className={`relative p-2 rounded-full transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            aria-label={isPlaying ? 'Pause song' : 'Play song'}
          >
            <Music size={20} className="text-white drop-shadow-md" />
          </button>
        </div>

        {/* Hamburger and Song Button (Mobile, right) */}
        <div className="sm:hidden flex items-center space-x-2">
          <button
            onClick={toggleSong}
            className={`relative p-2 rounded-full transition transform hover:scale-110 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 ${
              isPlaying ? 'animate-pulse' : ''
            }`}
            aria-label={isPlaying ? 'Pause song' : 'Play song'}
          >
            <Music size={24} className="text-white drop-shadow-md" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
}