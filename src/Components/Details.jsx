import React, { useState, useEffect } from "react";
import { MdAccessTimeFilled } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import IconDetails from "./IconDetails";
import { MdOutlineRadar } from "react-icons/md";
import { motion } from "framer-motion";

const Details = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (!hasAnimated) {
      setHasAnimated(true);
    }
  }, [hasAnimated]);

  return (
    <motion.div
      className="w-full md:w-8/12 mt-4 md:mt-12"
      initial={{ opacity: 0.5, scale: 0.5 }}
      transition={{ duration: 2 }}
      animate={hasAnimated ? "visible" : "hidden"}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0.5, scale: 0.5 },
      }}
      drag
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-around  md:w-full border-4 border-dashed border-purple-500 rounded-lg md:rounded-2xl bg-[#021D42] p-3 md:p-14">
        <div className="flex flex-row justify-around  md:space-x-32 text-white text-lg font-bold">
          <div className="flex flex-col ">
            <span>Full Name</span>
            <span className="font-normal mt-2 md:mt-7">Ahmed Rebii</span>
          </div>
          <div className="flex flex-col">
            <span>Id Number</span>
            <span className="font-normal mt-2 md:mt-7">146 *** **</span>
          </div>
        </div>
        <div className="flex flex-row justify-around md:space-x-32 text-white text-lg font-bold mt-3 md:mt-0 ">
          <div className="flex flex-col ">
            <span>Birthday</span>
            <span className="font-normal mt-2 md:mt-7">16 Fev 2001</span>
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
    </motion.div>
  );
};

export default Details;
