"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Icons/filmlogo";
import { Moon } from "./Icons/moon";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { RightBtn } from "./RightIcon";
import { useContext } from "react";
import { DarkContext } from "./MoviesProvider";
import { useGenres } from "./GenreProvider";
import { useSearch } from "./SearchProvider";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

type NavigationProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

type Genre = {
  id: number;
  name: string;
};

export const Navigation = () => {
  const { dark, setDark } = useContext(DarkContext);
  const { genres } = useGenres<Genre>();
  const {search,setSearch}=useSearch();
  const [check, setCheck] = useState(false);
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  useEffect(() => {
    if (!check) return;
    window.localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark, check]);
  useEffect(() => {
    setDark(JSON.parse(localStorage.getItem("dark")));
    setCheck(true);
  }, []);

  const [selectedGenre, setSelectedGenre] = useState<Genre[]>("Genre");
  const [searchbtn, setSearchbtn] = useState<boolean>(false);
  return (
    <div
      className={`w-full flex flex-row justify-between items-center p-5 ${
        dark == true ? "text-white bg-black" : "text-black"
      }`}
    >
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
          searchbtn == true ? "w-full" : " gap-4"
        } flex-row justify-between `}
      >
        <div
          className={`flex flex-row gap-2 items-center ${
            searchbtn == true ? "w-full justify-between" : "w-fit"
          }`}
        >
          <div className={`lg:block ${searchbtn == true ? "block" : "hidden"}`}>
            <div>
              <Popover>
                <PopoverTrigger className="w-full h-9 rounded-sm">
                  <Button variant="outline">
                    {`${selectedGenre ? selectedGenre : ""}`}
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  className={`${
                    dark ? "text-white bg-black" : "bg-white text-black"
                  } w-4/5`}
                >
                  <div className="flex flex-col gap-3 p-4">
                    <p className="text-2xl font-bold">Genres</p>
                    <p>See lists of movies by genre</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-fit gap-3 border-solid border p-2 rounded-2xl ">
                      {genres.map((item) => (
                        <Link
                          key={item.id}
                          href={`/search?genre=${item.id}`}
                          onClick={() => setSelectedGenre(item.name)}
                        >
                          <div className="flex flex-row p-2 w-fit hover:bg-gray-200 rounded-lg border-solid border s">
                            <span>{item.name}</span>
                            <div className="p-2">
                              <RightBtn dark={dark} />
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div
            className={`lg:flex w-fit h-9 flex-row   justify-start items-center border-solid  solid-grey rounded-sm ${
              searchbtn == true ? "flex border-0" : "hidden border"
            }`}
          >
            <div className=" flex flex-row  opacity-10   h-8  justify-center items-center">
              <SearchIcon />
            </div>
            <Link
                         
                          href={`/searchName?searchValue=${search}`}
                          
                        >
            <Input onChange={(event) => setSearch(event.target.value)} type="text" placeholder="Search" />
            </Link>
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
