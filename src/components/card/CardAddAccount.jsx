import React from 'react'
import ImgAdd from "../../img/add.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
  } from "react-router-dom";

const CardAddAccount = () => {
  return (
    <div>
        <div className="w-[100px] text-center">
            <Link to="/addProfile">
        <div className="w-full h-[100px]  rounded-[5px] hover:bg-white"><img src={ImgAdd} alt="Add" /></div>
        <p className="my-[10px]">Aggiungi un profilo</p>
        </Link>
      </div>
    </div>
  )
}

export default CardAddAccount