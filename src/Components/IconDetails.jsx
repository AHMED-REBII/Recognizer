import React from "react";

const IconDetails = ({ icon: Icon, text }) => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row mt-6 md:mt-10">
      {Icon && <Icon className="text-2xl mr-10 md:text-4xl text-[#7D6AEE] md:font-bold md:mr-4" />}
      <span className="text-xl md:text-2xl text-[#7D6AEE] md:font-semibold mt-2">{text}</span>
    </div>
  );
};

export default IconDetails;
