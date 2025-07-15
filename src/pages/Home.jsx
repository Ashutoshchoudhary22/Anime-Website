import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturedGrid from "../components/FeaturedGrid";
import { Link } from "react-router-dom";
import AnimeGrid from "../components/AnimeGrid";
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="bg-black text-white">
      <HeroSection />
      <div className="mt-8">
       <h1 className="mx-auto mb-4 text-center  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
Latest Anime
          </h1>

        <FeaturedGrid />
        <div className="mt-6">
         <h1 className="mx-auto mb-4 text-center  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-500 to-pink-500 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
Favourite Anime
          </h1>
          <AnimeGrid />
        </div>
      </div>

      <div className="mt-6 text-center mb-0">
        <Link
          to="/categories"
          className="inline-block px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 mb-6"
        >
          See more →
        </Link>
        <Footer />
      </div>
    </div>
  );
}