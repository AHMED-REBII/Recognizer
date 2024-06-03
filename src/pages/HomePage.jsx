import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Upload from "../Components/Upload";

const HomePage = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Navbar open={isOpen} setOpen={setOpen} />
      <div
        className={`flex-grow flex flex-col justify-center items-center transition-all duration-300 ${
          isOpen ? "mt-72" : "mt-28"
        }`}
      >
        <p className="text-2xl text-white font-bold md:text-5xl md:mt-10">
          Facial recognition system
        </p>
        <p className="text-base text-white mt-3 md:mt-5 md:text-2xl md:font-semibold">
          Max image size after processing: 25 megapixels
        </p>
      </div>
      <Upload />
    </div>
  );
};

export default HomePage;
