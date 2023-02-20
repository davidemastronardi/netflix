import React from "react";
import ImgAdd from "../../img/add.svg";
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
      <div className="text-center">
        <Link to="/addProfile">
          <div className=" hover:bg-white flex justify-center">
            <img className="md:w-[150px]" src={ImgAdd} alt="Add" />
          </div>
          <p className="my-[10px] md:text-[20px]">Aggiungi un profilo</p>
        </Link>
      </div>
    </div>
  );
};

export default CardAddAccount;
