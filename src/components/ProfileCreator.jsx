import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../App";
import Avatar from "../img/accountRandom/account1.png";
import Checkmark from "../img/checkmark.svg";
import Edit from "../img/edit.svg";
import Account3 from "../img/accountRandom/account3.png";
import Account4 from "../img/accountRandom/account4.png";
import Account5 from "../img/accountRandom/account5.png";
import Account6 from "../img/accountRandom/account6.png";
import Account7 from "../img/accountRandom/account7.png";
import Account8 from "../img/accountRandom/account8.png";
import Account9 from "../img/accountRandom/account9.png";
import Account10 from "../img/accountRandom/account10.png";

const ProfileCreator = ({ input }) => {
  const navigate = useNavigate();
  const { users, setUsers } = useContext(MyContext);
  
  return (
    
    <div className="w-full h-screen">
      <div className=" h-full flex flex-col items-center justify-center md:flex-row ">
        <div className="h-[120px] m-[20px] md:h-[150px] relative ">
          <img className="w-full h-full" src={Avatar} alt="avatar" />
          <img
            className="absolute bottom-0 w-[30px] md:w-[40px]"
            src={Edit}
            alt="edit"
          />
          <div className="w-[194px] md:w-[254px] bg-background border-[1px] border-gray-400 absolute z-10 p-[10px] flex gap-[10px] flex-wrap ">
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account3} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account4} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account5} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account6} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account7} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account8} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account9} alt="" />
            </div>
            <div className="hover:border-[1px] w-[50px] h-[50px]">
              <img src={Account10} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <input
              ref={input}
              type="text"
              className="p-[3px] bg-background border-[2px] border-red-400 md:w-[250px]"
            />
          </div>
          <div className="flex gap-[20px] m-[20px]">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <h1>Bambino/a?</h1>
          </div>
        </div>
        <div
          onClick={() => {
            setUsers((state) => {
              return [...state, { name: input.current.value }];
            });
            navigate("/");
          }}
          className="m-[20px] text-[30px] flex align-baseline items-center gap-[10px] md:hidden"
        >
          <img className="w-[50px] " src={Checkmark} alt="Checkmark" />
          <h1>Salva</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
