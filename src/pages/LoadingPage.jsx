import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - Recognition.json";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      <div className="text-center flex flex-col">
        <h1 className="text-3xl font-bold">Welcome to Recognizer </h1>
        <p className="mt-6">Your gateway to seamless facial recognition</p>
        <Lottie
          animationData={animationData}
          className="w-screen h-80 items-center justify-center md:w-11/12 md:h-11/12"
        />
      </div>
    </div>
  );
};

export default LoadingPage;
