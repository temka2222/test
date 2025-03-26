import { useState } from "react";
import { Logo } from "./Icons/filmlogo";
import { Moon } from "./Icons/moon";
export const Navigation = ({dark, setDark}) => {
  
  return (
    <div className="w-full flex flex-row justify-between p-20 ">
      <div className="flex flex-row gap-2 text-[#4338CA]">
        <Logo />
        <p>Movie Z</p>
      </div>
      <div className=" flex flex-row gap-3">
        <input
          className="w-14 h-9 border-solid border-white border  "
          type="select"
        ></input>
        <input
          className="w-95 h-9 flex  justify-center items-center border-solid border-white border"
          placeholder="Search ... "
        ></input>
      </div>
     
        <button onClick={()=>{setDark((dark)=>{dark ? true: false})}} className="  border-solid border p-2  ">
          <Moon />
        
      </button>
    </div>
  );
};
