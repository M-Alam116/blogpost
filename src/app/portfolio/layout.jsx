import React from "react";

const layout = ({ children }) => {
  return (
    <div className="pt-[30px] pb-[50px]">
      <h1 className="text-[36px] font-[700] text-center">Our works</h1>
      {children}
    </div>
  );
};

export default layout;
