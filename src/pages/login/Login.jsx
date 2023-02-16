import React from "react";
import CardLogin from "../../../src/components/card/CardLogin";
import CardAddAccount from "../../../src/components/card/CardAddAccount";
import Logonetflix from "../../img/logonetflix.png"

const Login = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
        <img className="h-[40px] absolute left-0 top-0 m-[20px] " src={Logonetflix} alt="logo" />
      <div className="w-full h-sreen flex flex-col items-center">
        <h1 className="text-[30px] text-center my-[20px] md:text-[40px] ">
          Chi vuole guardare Netflix?
        </h1>
        <ul className="w-[90%] md:w-[768px] flex flex-wrap gap-[20px] justify-center">
          <li>
            <CardLogin />
          </li>
          <li>
            <CardLogin />
          </li>
          <li>
            <CardLogin />
          </li>
          <li>
            <CardLogin />
          </li>
          <CardAddAccount />
        </ul>
      </div>
    </div>
  );
};

export default Login;
