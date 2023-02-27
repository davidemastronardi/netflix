import React, { useState } from "react";
import HamgurgerMenu from "../img/hamburgermenu.svg";
import Logo from "../img/logonetflix.png";
import Avatar from "../img/accountRandom/account2.png";
import Research from "../img/research.svg"
import Exit from "../img/exit.svg"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useNavigate,
} from "react-router-dom";

const HamburgerMenu = ({setOpenSearch,openseSearch}) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="w-full h-screen">           
      <div className="w-full h-[70px] bg-black opacity top-0 fixed z-10"></div>
      <div className="fixed z-10 w-full h-[70px] top-0 flex justify-between items-center p-[20px] ">
        <img
          onClick={() => setOpenMenu(!openMenu)}
          className="w-[25px] md:hidden"
          src={HamgurgerMenu}
          alt="hamburgermenu"
        />
        <div className="flex justify-center gap-[40px]">
          <img className="w-[85px]" src={Logo} alt="logonetflix" />
          <div>
            <ul className="hidden md:flex gap-[20px] text-[15px]">
              <li>Home</li>
              <li>Serie Tv</li>
              <li>Film</li>
              <li>Nuovi e popolari</li>
              <li>La mia lista</li>
              <li>Sfoglia per lingua</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-[10px]">
          {!openseSearch?<img onClick={()=> setOpenSearch(true)} className="w-[20px]" src={Research} alt="Research" />:
          <img onClick={()=> setOpenSearch(false)} className="w-[20px]" src={Exit} alt="exit" />}
        <input
          className="hidden md:bg-background opacity w-[115px] h-[28px]"
          type="search"
          name=""
          id=""
        />
        </div>
      </div>
      {openMenu && (
        <div className="w-[250px] h-screen bg-black fixed flex flex-col z-20 mt-[70px] md:hidden">
          <Link to="/">
            <div className="flex gap-[10px] items-end pl-[20px] pt-[20px]">
              <div>
                <img className="w-[40px]" src={Avatar} alt="avatar" />
              </div>
              <div>
                <p className="text-[18px] font-medium">Davide</p>
                <p className="text-[10px]">Cambia profilo</p>
              </div>
            </div>
          </Link>
          <div className="mt-[10px] pl-[20px]">
            <ul className="font-medium text-[20px]">
              <li>Account</li>
              <li>Centro assistenza</li>
              <li>Esci da Netflix</li>
            </ul>
          </div>
          <div className="border-t-[1px] mt-[20px]">
            <ul className="font-medium mt-[20px] text-[20px] leading-[38px]  ">
              <li className="hover:border-l-[4px] pl-[20px]">Home</li>
              <li className="hover:border-l-[4px] pl-[20px]">Film</li>
              <li className="hover:border-l-[4px] pl-[20px]">Serie Tv</li>
              <li className="hover:border-l-[4px] pl-[20px]">Thriller</li>
              <li className="hover:border-l-[4px] pl-[20px]">Anime</li>
              <li className="hover:border-l-[4px] pl-[20px]">Azione</li>
              <li className="hover:border-l-[4px] pl-[20px]">Commedie</li>
              <li className="hover:border-l-[4px] pl-[20px]">Fantasy</li>
              <li className="hover:border-l-[4px] pl-[20px]">Fantascienza</li>
              <li className="hover:border-l-[4px] pl-[20px]">Horror</li>
              <li className="hover:border-l-[4px] pl-[20px]">Documentari</li>
              <li className="hover:border-l-[4px] pl-[20px]">Romantici</li>
              <li className="hover:border-l-[4px] pl-[20px]">Musical</li>
              <li className="hover:border-l-[4px] pl-[20px]">Drammi</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
