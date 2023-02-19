import React from "react";


const CardLogin = ({name,image}) => {
  return (
    <div>
      <div className="w-[100px] text-center">
        <div className="w-full h-[100px] hover:border-[4px]">
          <img className="" src={image} alt="avatar" />
        </div>
        <p className="my-[10px] ">{name}</p>
      </div>
    </div>
  );
};

export default CardLogin;
