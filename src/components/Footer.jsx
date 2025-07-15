import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import video from '../assets/video4.mp4'
function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-gray-900/30 backdrop-blur-md overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-50 md:opacity-70"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative container mx-auto flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:gap-6 md:py-0 z-10">
        <div className="flex flex-col items-center gap-2 px-4 md:flex-row md:gap-4 md:px-0">
          <p className="text-sm md:text-xs leading-tight text-white text-center md:text-left">
            Made by Ashutosh Choudhary © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ashutoshchoudhary22"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <Github className="h-5 w-5 md:h-4 md:w-4 text-white group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-choudhary-693b1a264/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="group"
          >
            <Linkedin className="h-5 w-5 md:h-4 md:w-4 text-white group-hover:text-blue-500 group-hover:scale-110 transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;