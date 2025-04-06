import React from "react";
import { Navigate } from "react-router-dom";

const ProfileCard = ({ name, role, github, username }) => {
  const defaultProfilePic = "./assets/logo.png";
  const profilePic = github ? `${github}.png` : defaultProfilePic;

  return (
    <div
      className="text-mywhite text-2xl text-center p-5 h-80 w-57 border border-myoutline bg-mygray rounded-lg backdrop-blur-lg hover:scale-105 transition-transform"
      style={{ position: "relative" }}
    >
      <div className="relative z-10">
        <img src={profilePic} className="w-24 h-24 rounded-full mx-auto" />
        <h3 className="mt-4 text-lg font-clashSB">{name}</h3>
        <p className="text-sm font-clashR">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
