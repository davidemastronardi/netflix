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

const AddProfile = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="absolute">
        <div className="w-full p-[20px] flex align-baseline items-center">
          <Link to="/">
            <img className="w-[60px]" src={ArrowBack} alt="arrowBack" />
          </Link>
        <h1 className="hidden md:block text-[30px]">Aggiungi un profilo</h1>
        <h1 className="hidden">Salva</h1>
        </div>
      </div>
      <ProfileCreator/>
    </div>
  );
};

export default AddProfile;
