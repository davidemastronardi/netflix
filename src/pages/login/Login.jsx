import React, { useContext } from "react";
import CardLogin from "../../../src/components/card/CardLogin";
import CardAddAccount from "../../../src/components/card/CardAddAccount";
import Logonetflix from "../../img/logonetflix.png";
import { MyContext } from "../../App";
import Pen from "../../img/pen.svg";

const Login = () => {
  const { users } = useContext(MyContext);
 

  const renderCardLogin = () => {
    return users.map((user,i) => (
      <li key={i}>
        <CardLogin  name={user.name} image={user.image} />
      </li>
    ));
  };
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
    
      <div className="w-full absolute top-0 flex justify-center md:justify-between p-[20px] ">
      <img className="w-[150px]" src={Logonetflix} alt="arrowBack" />
      <div className="flex ">
      <img className="hidden md:block w-[30px]" src={Pen} alt="arrowBack" />

<h1 className="hidden md:block text-[30px]">Gestisci</h1>
      </div>
      </div>
      <div className="w-full h-sreen flex flex-col items-center">
        <h1 className="text-[30px] text-center my-[20px] md:text-[40px] ">
          Chi vuole guardare Netflix?
        </h1>
        <ul className="w-[90%] md:w-[768px] flex flex-wrap gap-[20px] justify-center">
          {renderCardLogin()}
          <li>
            <CardAddAccount />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Login;
