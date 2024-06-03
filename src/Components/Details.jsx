import React from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import IconDetails from "./IconDetails";
import { MdOutlineRadar } from "react-icons/md";



const Details = () => {
  return (
    <div className="w-full md:w-8/12 mt-4 md:mt-12">
      <div className="flex flex-col md:flex-row justify-center md:justify-around  md:w-full border-4 border-dashed border-purple-500 rounded-lg md:rounded-2xl bg-[#021D42] p-3 md:p-14">
        <div className="flex flex-row justify-around  md:space-x-32 text-white text-lg font-bold">
          <div className="flex flex-col ">
            <span>Full Name</span>
            <span className="font-normal mt-2 md:mt-7">Maryem</span>
          </div>
          <div className="flex flex-col">
            <span>Id Number</span>
            <span className="font-normal mt-2 md:mt-7">128 273 43</span>
          </div>
        </div>
        <div className="flex flex-row justify-around md:space-x-32 text-white text-lg font-bold mt-3 md:mt-0 ">
          <div className="flex flex-col ">
            <span>Birthday</span>
            <span className="font-normal mt-2 md:mt-7">14 Janv 2002</span>
          </div>
          <div className="flex flex-col ">
            <span>Address</span>
            <span className="font-normal mt-2 md:mt-7">Sousse</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-8 md:justify-between ">
        <IconDetails icon={MdOutlineRadar} text="100% recognized" />
        <IconDetails icon={MdAccessTimeFilled} text="Time : 1.2 second" />
        <IconDetails icon={FaDownload} text="Download as PDF JPEG" />
      </div>
    </div>
  );
};

export default Details;
