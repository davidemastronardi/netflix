import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import HamburgerMenu from "../components/HamburgerMenu";
import TrailersHome from "../components/TrailersHome";

const Home = () => {
  const [hoverText, setHoverText] = useState(false);

  function getMovies() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=772d190aaeb94b7d41eebcb2a98e6bc0"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <div className="relative ">
        <HamburgerMenu />
        <div className="absolute top-0 mt-[70px]">
          <div className="z-0">
            <TrailersHome />
          </div>
          <div>
            <h1
              onMouseEnter={() => setHoverText(!hoverText)}
              onMouseLeave={() => setHoverText(!hoverText)}
              className="text-[20px] font-medium ml-[50px] mt-[10px] "
            >
              La mia lista {!hoverText && <span>ciao</span>}
            </h1>
            <div className="mt-[10px]">
              <CardMovie />
              
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
