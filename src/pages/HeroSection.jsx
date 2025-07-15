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
       
        <h1  className="mx-auto  text-center  max-w-[700px] text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-500 to-pink-600 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
         Our Categories
        </h1>
      
      </div>
    </section>
  );
}