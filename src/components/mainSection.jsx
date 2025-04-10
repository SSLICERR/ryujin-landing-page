import React from "react";
import { SiInstagram, SiX, SiYoutube } from "react-icons/si";
import { SiSteam } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import logosvg from "../assets/logosvg.svg";

const MainSection = () => {
  return (
    <>
      <div
        id="section1"
        className="relative box-border lg:snap-center p-5 md:p-10 lg:h-screen "
      >
        <div className="flex justify-center items-center">
          <img src={logosvg} alt="" className="w-70" />
        </div>
        <div className="p-20 text-center">
          <button className="btn btn-neutral">JOIN WAITLIST</button>
        </div>
        <div className="text-center mt-100">
          <button
            className="cursor-pointer p-2"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <SiInstagram color="black" size={30} />
          </button>
          <button
            className="cursor-pointer p-2"
            onClick={() =>
              window.open("https://store.steampowered.com", "_blank")
            }
          >
            <SiSteam color="black" size={30} />
          </button>
          <button
            className="cursor-pointer p-2"
            onClick={() => window.open("https://twitter.com", "_blank")}
          >
            <SiX color="black" size={30} />
          </button>
          <button
            className="cursor-pointer p-2"
            onClick={() => window.open("https://youtube.com", "_blank")}
          >
            <SiYoutube color="black" size={30} />
          </button>
          <div className="flex items-center justify-center pt-10">
            <IoIosArrowDown
              className="animate-bounce"
              size={40}
              color="black"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MainSection;
