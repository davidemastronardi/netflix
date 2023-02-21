import React from "react";
import Trailer from "../img/Trailer.mp4";
import LogoTitle from "../img/logotitle.png";

const TrailersHome = () => {
  return (
    <div>
      <div className="w-full relative flex  items-center">
        <video className="w-[100vw]" autoPlay muted>
          <source src={Trailer} type="video/mp4"></source>
        </video>
        <div className="hidden lg:block absolute w-[40%] h-auto m-[50px]">
          <img className=" w-[600px]" src={LogoTitle} alt="" />
          <h1 className=" text-[20px]">
            I suoi amici sono messi a rischio e Peter Parker chiede a Doctor{" "}
            <br />
            Strange di ripristinare il suo segreto... scatenando
            involontariamente <br />
            un disastro di proporzioni epiche.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TrailersHome;
