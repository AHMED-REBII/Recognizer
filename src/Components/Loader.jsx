import React from "react";
import { Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="mt-10">
      <Hourglass
        visible={true}
        height="150"
        width="150"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["white", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
