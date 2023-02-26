import React, { useEffect, useRef, useState } from 'react'
import CardMovie from "../components/CardMovie";


const SearchMovie = () => {

    const [input, setInput] = useState("");
    const [listSearch, setListSearch] = useState([]);

    function renderCardMovie() {
        return listSearch.map((movie, i) => {
          return <CardMovie key={i} movie={movie} />
        })
      }


    useEffect(() => {
        getopenseSearch()
    }, [input]);


    const getopenseSearch = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=772d190aaeb94b7d41eebcb2a98e6bc0&language=en-US&query=${input}&page=1&include_adult=false`)
            .then((res) => res.json())
            .then((data) => {
                setListSearch(data.results)
                
            });
    }



    return (
        <div className="absolute w-full top-0 z-30 bg-red-800">
            <div className='flex justify-center mt-[20px]'>
                <input onChange={(e) => setInput(e.target.value)} className='bg-background rounded-[50px]' type="search" name="" id="" />
            </div>
            <div className='mt-[20px] ml-[60px] md:ml-[80px] flex flex-wrap gap-[15px]'>
                {renderCardMovie()}
            </div>
        </div>
    )
}

export default SearchMovie