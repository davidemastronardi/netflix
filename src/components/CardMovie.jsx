import React, { useState } from "react";




const CardMovie = ({ movie }) => {
  console.log(movie);

  const [openCard, setOpenCard] = useState(true);



  return (

    <div onClick={() => setOpenCard(!openCard)} className="w-[100px] h-[150px] md:w-[200px] md:h-[300px] relative ">
      <img className="" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />
      {!openCard && <div className="bg-black hidden md:block md:-w-[315px] md:min-h-[415px] absolute z-10 bottom-0 md:left-[-60px]">
        <div className="h-full w-full flex flex-row flex-wrap">
          <img className="w-[50%] h-[60%]" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster" />

          <div className=" w-[50%] h-[60%] flex flex-col justify-center items-center text-center p-[10px] text-[18px]">
            <h1>{movie.title}</h1>
            <h1 className="mt-[20px] text-red-600">Voto</h1> 
            <h1 className="text-[30px]">{movie.vote_average}</h1> 
          </div>
          <div className="w-full h-[40%] p-[10px] text-[12px]">
            <h1>{movie.overview}</h1>
          </div>
        </div>
      </div>}
    </div>






  );
};

export default CardMovie;
