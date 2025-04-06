import React from "react";
import ProfileCard from "./profilecard";

const profiles = [
  {
    name: "Max",
    role: "Back End / Web Dev / Team Lead",
    github: "https://github.com/SSLICERR",
    username: "SSLICERR",
  },
  {
    name: "Efe",
    role: "Front End / Design",
    github: "https://github.com/Prof-Dr-Macher-Efe",
    username: "Prof-Dr-Macher-Efe",
  },
  {
    name: "Bahty",
    role: "Design / 3D Modeling",
    github: "https://github.com/zbahty",
    username: "zbahty",
  },
  {
    name: "Can",
    role: "Lead Back End",
    github: "https://github.com/Javaistcooler",
    username: "Javaistcooler",
  },
  {
    name: "Levy",
    role: "Design / 3D Modeling",
    github: "",
  },
];

const TeamSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen pt-100">
    <h1
      id="TeamTitle"
      className="relative z-10 font-clashB text-3xl md:text-5xl text-mywhite"
    >
      Our Team
    </h1>
    <div className="relative z-10 grid grid-cols-5 grid-rows-1 gap-4 p-10 mt-10">
      {profiles.map((profile) => (
        <ProfileCard key={profile.name} {...profile} />
      ))}
    </div>
  </section>
);

export default TeamSection;
