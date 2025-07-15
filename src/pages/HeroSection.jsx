// src/components/HeroSection.jsx
import heroVideo from '../assets/video2.mp4'; // Adjust path as needed
import heroImg from '../assets/hero.png'; // Fallback image

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full">
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
       
        <h1 className="text-4xl sm:text-5xl font-light tracking-wider">
         Our Categories
        </h1>
        {/* <p className="mt-1 text-lg sm:text-xl font-light opacity-80">
         Welcome to Our Categories Planet
        </p> */}
      </div>
    </section>
  );
}