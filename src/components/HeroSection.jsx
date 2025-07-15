// src/components/HeroSection.jsx
import heroVideo from '../assets/boom.mp4'; // Adjust path as needed
import heroImg from '../assets/hero.png'; // Fallback image

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full">
      <video
        src={heroVideo}
        poster={heroImg}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        onError={(e) => {
          e.target.poster = heroImg; // Show fallback image on error
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
        <svg
          viewBox="0 0 200 256"
          className="h-24 w-24 mb-4 opacity-90"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M100 16c16 32 32 48 32 72a32 32 0 01-64 0c0-18 10-32 32-72z" />
          <path d="M100 88c24 32 48 48 48 80a48 48 0 01-96 0c0-24 14-42 48-80z" />
        </svg>
        <h1 className="text-4xl sm:text-5xl font-light tracking-wider">
          Anime Planet
        </h1>
        <p className="mt-1 text-lg sm:text-xl font-light opacity-80">
         Welcome to Our Animie Planet
        </p>
      </div>
    </section>
  );
}