import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import ArrowBack from "../../img/arrowback.svg";
import ProfileCreator from "../../../src/components/ProfileCreator"
import Checkmark from "../../img/checkmark.svg";

const AddProfile = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-full absolute flex">
        <div className="w-full p-[20px] flex align-baseline items-center">
          <Link to="/">
            <img className="w-[60px]" src={ArrowBack} alt="arrowBack" />
          </Link>
        <h1 className="hidden md:block text-[30px]">Aggiungi un profilo</h1>
        </div>




        <div className="w-full p-[20px] flex align-baseline items-center justify-end">
          <Link to="/">
            <img className="w-[40px]" src={Checkmark} alt="arrowBack" />
          </Link>
        <h1 className="hidden md:block text-[30px]">Salva</h1>
        </div>
        
      </div>
      <ProfileCreator/>
    </div>
  );
};

export default AddProfile;
