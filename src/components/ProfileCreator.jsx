import React from "react";
import Avatar from "../img/accountRandom/account1.png";
import Checkmark from "../img/checkmark.svg";

const ProfileCreator = () => {
  return (
    <div className="w-full h-screen">
      <div className=" h-full flex flex-col items-center justify-center md:flex-row ">
        <div className="h-[120px] m-[20px] md:h-[150px]">
          <img className="w-full h-full" src={Avatar} alt="avatar" />
        </div>
        <div>
          <div>
            <input
              type="text"
              className="p-[3px] bg-background border-[2px] border-red-400 md:w-[250px]"
            />
          </div>
          <div className="flex gap-[20px] m-[20px]">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" class="sr-only peer"></input>
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
            <h1>Bambino/a?</h1>
          </div>
        </div>
        <div className="m-[20px] text-[30px] flex align-baseline items-center gap-[10px] md:hidden">
          <img className="w-[50px] " src={Checkmark} alt="Checkmark" />
          <h1>Salva</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
