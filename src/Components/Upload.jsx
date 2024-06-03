import React, { useState } from "react";
import {
  IoCloudUploadOutline,
  IoCameraOutline,
  IoDocumentAttachOutline,
} from "react-icons/io5";

const Upload = () => {
  const [selected, setSelected] = useState("");
  const handleSelection = (option) => {
    setSelected(option);
  };
  return (
    <div className="flex flex-col items-center justify-center p-4   mt-4">
      <div className="flex flex-col items-center justify-center  w-full md:w-4/6 h-80 md:h-5/6 border-4 border-dashed border-purple-500 rounded-lg md:rounded-2xl bg-[#031c42] cursor-pointer">
        <div className="w-full md:rounded-xl bg-[#01132B] py-6 md:py-2 flex justify-around  items-center text-center md:justify-start">
          <div
            className={`flex flex-col items-center cursor-pointer md:mx-14 ${
              selected === "upload" ? "text-[#2EB1EE] underline" : "text-white"
            }`}
            onClick={() => handleSelection("upload")}
          >
            <IoDocumentAttachOutline
              className={`${
                selected === "upload" ? "text-[#2EB1EE] " : "text-white"
              } text-3xl`}
            />
            <span
              className={`${
                selected === "upload"
                  ? "text-[#2EB1EE] underline "
                  : "text-white"
              } text-sm mt-1`}
            >
              Upload file
            </span>
          </div>
          <div
            className={`flex flex-col items-center cursor-pointer md:mx-14 ${
              selected === "camera" ? "text-[#2EB1EE] underline" : "text-white"
            }`}
            onClick={() => handleSelection("camera")}
          >
            <IoCameraOutline
              className={`${
                selected === "camera" ? "text-[#2EB1EE]" : "text-white"
              } text-3xl`}
            />
            <span
              className={`${
                selected === "camera"
                  ? "text-[#2EB1EE] underline"
                  : "text-white"
              } text-sm mt-1`}
            >
              Camera
            </span>
          </div>
        </div>
        <div className="md:bg-[#3C5372] p-1 md:p-10 md:rounded-2xl  md:m-10 md:w-5/6 flex flex-col items-center justify-center">
          <IoCloudUploadOutline className="text-white text-5xl mt-2 md:mt-5" />
          <p className="mt-2 text-white text-lg">Drag and drop your image</p>
          <br />
          <p className="text-white text-lg">or</p>
          <button className="mt-2 px-6 py-3 bg-[#2eb1ee] text-white rounded-full hover:bg-blue-400 transition-colors text-xl">
            Browse files
          </button>
        </div>
      </div>
      <button className="mt-5 md:mt-7 px-8 py-4 bg-[#F57025] text-white rounded-full hover:bg-[#FFCB60] transition-colors text-xl">
        Compare
      </button>
    </div>
  );
};

export default Upload;
