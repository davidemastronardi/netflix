import React, { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import HamburgerMenu from "../components/HamburgerMenu";
import SearchMovie from "../components/SearchMovie";
import TrailersHome from "../components/TrailersHome";

const Home = () => {

  const [moviePopular, setMoviePopular] = useState([]);
  const [moviePiuVotati, setMoviePiuVotati] = useState([]);
  const [movieInArrivo, setMovieInArrivo] = useState([]);
  const [openseSearch, setOpenSearch] = useState(false);
  

  



  const getPopular = () => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=772d190aaeb94b7d41eebcb2a98e6bc0")
      .then((res) => res.json())
      .then((data) => {
        setMoviePopular(data.results)
      });
  }

  const getPiuVotati = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=772d190aaeb94b7d41eebcb2a98e6bc0")
      .then((res) => res.json())
      .then((data) => {
        setMoviePiuVotati(data.results)
      });
  }

  const getInArrivo = () => {
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=772d190aaeb94b7d41eebcb2a98e6bc0")
      .then((res) => res.json())
      .then((data) => {
        setMovieInArrivo(data.results)
      });
  }


  function renderCardMoviePiuVotati() {
    return moviePiuVotati.map((movie, i) => {
      return <CardMovie key={i} movie={movie} />
    })
  }

  function renderCardMoviePopular() {
    return moviePopular.map((movie, i) => {
      return <CardMovie key={i} movie={movie} />
    })
  }

  function renderCardMovieInArrivo() {
    return movieInArrivo.map((movie, i) => {
      return <CardMovie key={i} movie={movie} />
    })
  }


  useEffect(() => {
    getPopular()
    getPiuVotati()
    getInArrivo()
    
  }, []);

  return (
    <div>
      <div className="relative">
        <HamburgerMenu openseSearch={openseSearch} setOpenSearch={setOpenSearch} />
        {openseSearch &&
            <SearchMovie />}
        {!openseSearch &&<div className="absolute top-0 mt-[70px] pb-[70px]">
          <div className="z-0">
            <TrailersHome />
          </div>
          <div>
            <h1 className="text-[30px] font-medium mt-[20px] ml-[80px]">Più popolari</h1>
            <div className="mt-[20px] ml-[60px] md:ml-[80px] flex flex-wrap gap-[15px]">
              {renderCardMoviePopular()}
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-medium mt-[20px] ml-[80px]">Più votati</h1>
            <div className="mt-[20px] ml-[60px] md:ml-[80px] flex flex-wrap gap-[15px]">
              {renderCardMoviePiuVotati()}
            </div>
          </div>
          <div>
            <h1 className="text-[30px] font-medium mt-[20px] ml-[80px]">Film in arrivo</h1>
            <div className="mt-[20px] ml-[60px] md:ml-[80px] flex flex-wrap gap-[15px]">
              {renderCardMovieInArrivo()}
            </div>
          </div>
          
        </div>}
      </div>
    </div>
  );
};

export default Home;
