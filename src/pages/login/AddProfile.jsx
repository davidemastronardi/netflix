import React, { useContext, useEffect, useRef, useState } from "react";
import { MyContext } from "../../App";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useNavigate,
} from "react-router-dom";
import ArrowBack from "../../img/arrowback.svg";
import ProfileCreator from "../../../src/components/ProfileCreator";
import Checkmark from "../../img/checkmark.svg";

const AddProfile = () => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(MyContext);
  
  const [ userImage, setUserImage ] = useState(null);
  
  const input = useRef(null);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full absolute flex">
        <div className="w-full p-[20px] flex align-baseline items-center">
          <Link to="/">
            <img className="w-[60px]" src={ArrowBack} alt="arrowBack" />
          </Link>
          <h1 className="hidden md:block text-[30px]">Aggiungi un profilo</h1>
        </div>

        <div
          onClick={() => {
            setUsers((state) => {
              return [...state, { name: input.current.value, image:userImage}];
            });
            navigate("/");
          }}
          className="w-full p-[20px] flex align-baseline items-center justify-end mr-[10px] "
        >
          <img className=" md:block w-[50px]" src={Checkmark} alt="arrowBack" />

          <h1 className=" md:block text-[30px]">Salva</h1>
        </div>
      </div>
      <ProfileCreator input={input} setUserImage={setUserImage}  />
    </div>
  );
};

export default AddProfile;
