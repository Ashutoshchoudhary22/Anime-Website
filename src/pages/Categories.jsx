import Category from "./Category";
import Footer from "../components/Footer";
import Hero from "./HeroSection";
import Newreleases from "./Newreleases";
import Latestreleases from "./Latestreleases";
import Alltimesfavourites from "./Alltimesfavourites";
export default function Categories() {
  return (
    <>
      <div className="bg-black text-white">
        <Hero />
        <div className="mt-6">
          <h1 className="mx-auto mb-4 text-center  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-400 to-pink-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            Best Anime
          </h1>
          <Category />
        </div>
        <div className="mt-6">
          <h1  className="mx-auto mb-4 text-center  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-400 to-pink-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">New Releases</h1>
          <Newreleases />
        </div>
        <div className="mt-6">
          <h1  className="mx-auto mb-4 text-center  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-400 to-pink-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">Latest Anime</h1>
          <Latestreleases />
        </div>
        <div className="mt-6">
          <h1  className="mx-auto mb-4 text-center  max-w-[700px] text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-400 to-pink-400 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] animate-pulse">
            All time Favourites{" "}
          </h1>
          <Alltimesfavourites />
        </div>
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </>
  );
}
