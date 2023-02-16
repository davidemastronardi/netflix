import React from "react";
import Account2 from "../../img/accountRandom/account2.png"

const CardLogin = ({name}) => {
  return (
    <div>
      <div className="w-[100px] text-center">
        <div className="w-full h-[100px]   rounded-[5px] hover:border-[4px]">
          <img src={Account2} alt="avatar" />
        </div>
        <p className="my-[10px] ">{name}</p>
      </div>
    </div>
  );
};

export default CardLogin;
