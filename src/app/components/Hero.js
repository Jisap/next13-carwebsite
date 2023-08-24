'use client'

import { useContext } from "react";
import Search from "./Search";
import { SearchContext } from "../context/search";

const Hero = () => {

  const { searchActive } = useContext(SearchContext);

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id='home'>
      <div className="container mx-auto h-full xl:pt-10">
        {/* text & img wrapper */}
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          {/* text */}
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <h1 className="h1">
              Explore the Finest <span className="text-accent">Global</span> Offers{''}
            </h1>
          </div>
          {/* img */}
          <div>image</div>
        </div>
      </div>
      
      {
        searchActive ? ( // Si el scrollY > 800 <Search /> justo debajo del Header
          <div className="fixed top-[80px] z-10 w-full max-w-[1920px]">
            <Search />
          </div>
        ) : ( // Sino se coloca al final de esta section en medio de esta misma y la siguiente
          <div className="-mt-12 w-full max-w-[1300px] mx-auto">
            <Search />
          </div>
        )
      }
    </section>
  )
}

export default Hero