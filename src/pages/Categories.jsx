import Category from "./Category";
import Footer from "../components/Footer";
import Hero from "./HeroSection";
import Newreleases from './Newreleases'
import Latestreleases from './Latestreleases'
import Alltimesfavourites from './Alltimesfavourites'
export default function Categories() {
  return (
    <>
      <Hero />
      <div className="mt-6">
           <h1 className="text-center text-2xl font-bold my-2">Latest Anime</h1>
        <Category />
      
      </div>
      <div className="mt-6">
          <h1 className="text-center text-2xl font-bold my-2">New Releases</h1>
         <Newreleases/>
      </div>
       <div className="mt-6">
          <h1 className="text-center text-2xl font-bold my-2">Latest Releases</h1>
         <Latestreleases/>
      </div>
      <div className="mt-6">
          <h1 className="text-center text-2xl font-bold my-2">All time Favourites </h1>
         <Alltimesfavourites/>
      </div>
       
      <Footer />
    </>
  );
}
