import { useState } from "react";
import { Logo } from "./Icons/filmlogo";
import { Moon } from "./Icons/moon";

type NavigationProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

export const Navigation = ({ dark, setDark }: NavigationProps) => {
  const genre = [""];
  return (
    <div className="w-full flex flex-row justify-between p-20 pb-10 pt-10">
      <div className="flex flex-row gap-2 text-[#4338CA]">
        <Logo />
        <p>Movie Z</p>
      </div>
      <div className=" flex flex-row gap-3">
        <select className="w-14 h-9 border-solid border  border-[#F4F4F5] rounded-md "></select>
        <input
          className="w-95 h-9 flex  justify-center items-center border-solid border-[#F4F4F5] rounded-md border"
          placeholder="Search ... "
        ></input>
      </div>

      <button
        onClick={() => {
          if (dark == true) {
            setDark(false);
          } else {
            setDark(true);
          }
          console.log(dark);
        }}
        className="  border-solid border p-2 border-[#F4F4F5] rounded-md shadow-sm "
      >
        <Moon dark={dark} />
      </button>
    </div>
  );
};
