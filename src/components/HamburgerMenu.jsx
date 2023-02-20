import React, { useState } from "react";
import HamgurgerMenu from "../img/hamburgermenu.svg";
import Logo from "../img/logonetflix.png";
import Avatar from "../img/accountRandom/account2.png";



const HamburgerMenu = () => {


    const [openMenu, setOpenMenu] = useState(false);

    
  
  
    return (
    <div className="w-full h-screen">
      <div className="w-full h-[70px] bg-black opacity fixed top-0"></div>
      <div className="w-full h-[70px] top-0 flex justify-between items-center p-[20px] fixed z-10">
        <img onClick={() => setOpenMenu(!openMenu)} className="w-[25px]" src={HamgurgerMenu} alt="hamburgermenu" />
        <img className="w-[85px]" src={Logo} alt="logonetflix" />
        <input
          className="bg-background opacity w-[115px] h-[28px]"
          type="search"
          name=""
          id=""
        />
      </div>
      {openMenu &&<div className="w-[250px] h-screen bg-black fixed flex flex-col z-10  mt-[70px] p-[20px]  ">
        <div className="flex gap-[10px] items-end">
          <div className="">
            <img className="w-[40px]" src={Avatar} alt="avatar" />
          </div>
          <div className=" ">
            <p className="text-[18px] font-medium">Davide</p>
            <p className="text-[10px]">Cambia profilo</p>
          </div>
        </div>
        <div className="mt-[10px]">
          <ul className="font-medium">
            <li>Account</li>
            <li>Centro assistenza</li>
            <li>Esci da Netflix</li>
          </ul>
          <hr className="mt-[20px]" />
        </div>
      </div>}
    </div>
  );
};

export default HamburgerMenu;
