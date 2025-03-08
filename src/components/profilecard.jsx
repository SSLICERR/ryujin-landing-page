import React from "react";

const ProfileCard = ({ name, role, github }) => {
  const defaultProfilePic = "./assets/logo.png";

  const profilePic = github ? `${github}.png` : defaultProfilePic;

  return (
    <div className="text-mywhite text-2xl text-center p-5 h-80 w-57 border border-myoutline bg-mygray rounded-lg backdrop-blur-lg hover:scale-105 transition-transform">
      <img src={profilePic} className="w-24 h-24 rounded-full mx-auto" />
      <h3 className="mt-4 text-lg font-clash">{name}</h3>
      <p className="text-sm font-clashS">{role}</p>
    </div>
  );
};

export default ProfileCard;
