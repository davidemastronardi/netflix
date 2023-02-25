import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import HamburgerMenu from "../components/HamburgerMenu";
import TrailersHome from "../components/TrailersHome";

const Home = () => {

  const [moviePopular, setMoviePopular] = useState([]);

  const getPopular = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=772d190aaeb94b7d41eebcb2a98e6bc0")
      .then((res) => res.json())
      .then((data) => {
        setMoviePopular(data.results)
      });
  }

  function renderCardMovie() {
    return moviePopular.map((movie,i) => {
      return <CardMovie key={i} movie={movie} />
    })
  }

  useEffect(() => {
    getPopular()
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
             
              className="text-[30px] font-medium mt-[20px] ml-[80px] "
            >
              Più popolari
            </h1>
            <div className="mt-[20px] ml-[60px] md:ml-[80px] flex flex-wrap gap-[15px]">
              {renderCardMovie()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
