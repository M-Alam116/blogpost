"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const DarkModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div
      className="w-[48px] h-[25px] border-[1.5px] border-[#53c28b70] rounded-[16px] flex items-center justify-between p-[2px] relative cursor-pointer"
      onClick={toggle}
    >
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className="w-[15px] h-[15px] bg-btnBg rounded-[50%] absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkModeToggle;
