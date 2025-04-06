import React from "react";
import CommitStats from "../components/ComitStats";
import logo from "../assets/logo.png";
import Footer from "../components/footer";

const WebsiteStats = () => {
  return (
    <>
      <head>
        <link href="\src\css\style.css" rel="stylesheet" />
        <title>RYUJIN</title>
        <link rel="icon" href={logo} />
      </head>
      <body className="bg-myblack">
        <div>
          <h1 className="text-mywhite text-6xl font-clashB text-center pt-10">
            This website took:
          </h1>
          <CommitStats />
          <h1 className="text-mywhite text-6xl font-clashB text-center">
            to be made.
          </h1>
        </div>
        <div className="mt-50 bg-myblack">
          <Footer />
        </div>
      </body>
    </>
  );
};
export default WebsiteStats;
