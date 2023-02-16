import React, { useContext } from "react";
import CardLogin from "../../../src/components/card/CardLogin";
import CardAddAccount from "../../../src/components/card/CardAddAccount";
import Logonetflix from "../../img/logonetflix.png";
import { MyContext } from "../../App";

const Login = () => {
  const {users}= useContext(MyContext);


  const renderCardLogin=()=>{
    return users.map((user,)=><li><CardLogin name={user.name}/></li>)
  }
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <img
        className="h-[40px] absolute left-0 top-0 m-[20px] "
        src={Logonetflix}
        alt="logo"
      />
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
