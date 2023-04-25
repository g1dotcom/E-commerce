import React from "react";

import { RotatingLines } from "react-loader-spinner";

const loading = () => {
  return (
    <div className=" flex items-center justify-center w-full h-[60vh] ">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="106"
        visible={true}
      />
    </div>
  );
};

export default loading;
