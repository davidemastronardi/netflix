import React from "react";
import Avatar from "../img/accountRandom/account1.png";

const ProfileCreator = () => {
  return (
    <div className="w-full h-screen">
      <div className=" h-full flex flex-col items-center justify-center ">
        <div className="h-[120px] w-[120px] m-[20px]">
          <img className="w-full h-full" src={Avatar} alt="avatar" />
        </div>
        <div>
          <input className="p-[3px] bg-background border-[2px] border-red-400" type="text" />
        </div>
        <div className="m-[20px]">
            


            <h1>Salva</h1>
        </div>
      </div>
    </div>
  );
};

export default ProfileCreator;
