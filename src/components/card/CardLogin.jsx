import React from "react";


const CardLogin = ({name,image}) => {
  return (
    <div>
      <div className="text-center">
        <div className="hover:border-[4px]">
          <img className="md:w-[150px] rounded-[5px]" src={image} alt="avatar" />
        </div>
        <p className="my-[10px] md:text-[20px] ">{name}</p>
      </div>
    </div>
  );
};

export default CardLogin;
