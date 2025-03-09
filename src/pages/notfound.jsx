import React from "react";
import { GoCloudOffline } from "react-icons/go";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-myblack">
      <div className="text-center p-10 bg-mygray rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <GoCloudOffline className="text-6xl text-mywhite" />
        </div>
        <h1 className="text-4xl font-clashM mb-2 text-mywhite">
          4 <span className="text-mywhite">0</span> 4 Error
        </h1>
        <h2 className="text-2xl font-clashM text-mywhite mb-4">Not Found</h2>
        <p className="text-mywhite">This Page does not exist</p>
      </div>
    </div>
  );
};

export default NotFound;
