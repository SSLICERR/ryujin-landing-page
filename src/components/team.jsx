import React from "react";
import ProfileCard from "./profilecard";

const profiles = [
  {
    name: "Max",
    role: "Back End / Web Dev",
    github: "https://github.com/SSLICERR",
  },
  {
    name: "Efe",
    role: "Front End / Design",
    github: "https://github.com/Prof-Dr-Macher-Efe",
  },
  {
    name: "Bahty",
    role: "Design / Character Design / 3D Modeling",
    github: "",
  },
  {
    name: "Can",
    role: "Back End",
    github: "",
  },
  {
    name: "Levy",
    role: "Design / Character Design / 3D Modeling",
    github: "",
  },
];

const TeamSection = () => (
  <section className="relative flex flex-col items-center justify-center min-h-screen bg-backgroundlight text-foregroundlight dark:bg-backgrounddark dark:text-foregrounddark -mt-40">
    <h1
      id="TeamTitle"
      className="relative z-10 text-primary dark:text-primarylight font-clash text-3xl md:text-5xl text-mywhite"
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
