import { useState } from "react";
import { Logo } from "./Icons/filmlogo";
import { Moon } from "./Icons/moon";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { RightBtn } from "./RightIcon";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type NavigationProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};
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
  "Western",
];

export const Navigation = ({ dark, setDark }: NavigationProps) => {
  const [searchbtn, setSearchbtn] = useState<boolean>(false);
  return (
    <div className="w-full flex flex-row justify-between items-center lg:p-20 p-5 pb-10 pt-10">
      <div
        className={`flex flex-row gap-2 text-[#4338CA]1 ${
          searchbtn == true ? "hidden" : ""
        }`}
      >
        <Logo />
        <p>Movie Z</p>
      </div>
      <div
        className={`flex lg:w-[60%] ${
          searchbtn == true ? "w-full" : ""
        } flex-row gap-5 justify-between`}
      >
        <div className=" flex flex-row gap-2 ">
          <div className={`lg:block ${searchbtn == true ? "block" : "hidden"}`}>
            <Select>
              <SelectTrigger className="w-[100px] ">
                <SelectValue
                  placeholder={`${searchbtn == true ? "" : "Genre"}`}
                />
              </SelectTrigger>
              <SelectContent>
                <div className="flex flex-col gap-3 p-2">
                  <p className=" text-2xl font-bold">Genres</p>
                  <p>See lists of movies by genre</p>
                  <div className="grid grid-cols-3 w-[500px] h-[333px] gap-3 border-solid border p-2  rounded-2xl text-nowrap">
                    {movieGenres.map((item) => {
                      return (
                        <div className="flex flex-row size-fit border-solid border justify-center items-center rounded-full ">
                          <SelectItem value={item}>{item}</SelectItem>
                          <div className="p-2">
                            <RightBtn />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SelectContent>
            </Select>
          </div>
          <div
            className={`lg:flex w-fit  flex-row   justify-start items-center border-solid  solid-grey rounded-sm ${
              searchbtn == true ? "flex border-0" : "hidden border"
            }`}
          >
            <div className=" flex flex-row  opacity-10   h-9  justify-center items-center">
              <SearchIcon />
            </div>

            <Input type="text" placeholder="Search" />
          </div>
          <button
            onClick={() => {
              setSearchbtn(true);
            }}
            className={`lg:hidden  flex flex-row  opacity-10   h-9  justify-center items-center ${
              searchbtn == true ? "hidden" : ""
            }`}
          >
            <SearchIcon />
          </button>
          <button
            onClick={() => {
              setSearchbtn(false);
            }}
            className={`lg:hidden  flex flex-row   h-9  justify-center items-center ${
              searchbtn == true ? "flex" : "hidden"
            }`}
          >
            X
          </button>
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
          className={`border-solid border p-2 border-[#F4F4F5] rounded-md shadow-sm ${
            searchbtn == true ? "hidden" : "block"
          }`}
        >
          <Moon dark={dark} />
        </button>
      </div>
    </div>
  );
};
