import { useState } from "react";
import { Logo } from "./Icons/filmlogo";
import { Moon } from "./Icons/moon";
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react";
type NavigationProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

export const Navigation = ({ dark, setDark }: NavigationProps) => {
  const movieGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Thriller",
  "War",
  "Western"
];
  return (
    <div className="w-full flex flex-row justify-between p-20 pb-10 pt-10">
      <div className="flex flex-row gap-2 text-[#4338CA]">
        <Logo />
        <p>Movie Z</p>
      </div>
      <div className=" flex flex-row gap-3">
        <select className="w-14 h-9 border-solid border  border-[#F4F4F5] rounded-md "></select>
        <div className=" w-100  justify-start items-center file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 rounded-md border bg-transparent pt-1.5 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ">
          <div className=" opacity-10   file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9   bg-transparent pt-1.5 pl-1 py-1 text-base  transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm">
        <SearchIcon/>  
        </div> 
          <div className=" ">
        <Input type="text"  placeholder="Search"/>
        </div>
        
        </div>
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
