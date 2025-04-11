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
import { SearchMovies } from "./SearchMenu";

type NavigationProps = {
  dark: boolean;
  setDark: (value: boolean) => void;
};

type Genre = {
  id: number;
  name: string;
};
type DarkType = {
  dark: boolean;
  setDark: (value: boolean) => void;
};
type SearchType = {
  search: string;
  setSearch: (value: string) => void;
};
export const Navigation = () => {
  const { dark, setDark } = useContext<DarkType>(DarkContext);
  const { genres }: { genres: Genre[] } = useGenres();
  const { search, setSearch }: SearchType = useSearch();
  const [check, setCheck] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const [searchClicked, setSearchClicked] = useState<boolean>(false);

  useEffect(() => {
    if (!check) return;
    window.localStorage.setItem("dark", dark ? "1" : "0");
  }, [dark, check]);
  useEffect(() => {
    const storagedValue: string | null = localStorage.getItem("dark");
    if (storagedValue == "1") {
      setDark(true);
    } else setDark(false);

    setCheck(true);
  }, []);

  const [selectedGenre, setSelectedGenre] = useState<Genre[] | string>("Genre");
  const [searchbtn, setSearchbtn] = useState<boolean>(false);
  return (
    <div
      className={`w-full relative flex flex-row justify-between items-center p-5 ${
        dark == true ? "text-white bg-black" : "text-black"
      }`}
    >
      <div
        className={`flex flex-row gap-2 text-[#4338CA]1 ${
          searchbtn == true ? "hidden" : ""
        }`}
      >
        <Logo />
        <p className="font-bold text-[#4338CA]">Movie Z</p>
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
                  <div className="flex items-center p-2 h-9 border-solid solid-grey border rounded-sm ">{`${
                    selectedGenre ? selectedGenre : ""
                  }`}</div>
                </PopoverTrigger>

                <PopoverContent
                  className={`${
                    dark ? "text-white bg-black" : "bg-white text-black"
                  } w-fit`}
                >
                  <div className="flex flex-col gap-3 p-4">
                    <p className="text-2xl font-bold">Genres</p>
                    <p>See lists of movies by genre</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[auto_auto_auto_auto] w-fit gap-3 border-solid border p-2 rounded-2xl ">
                      {genres.map((item) => (
                        <Link
                          key={item.id}
                          href={`/search?genre=${item.id}`}
                          onClick={() => setSelectedGenre(item.name)}
                        >
                          <div className="flex flex-row p-1 w-fit hover:bg-gray-200 rounded-lg border-solid border s">
                            <span>{item.name}</span>
                            <div className="p-2">
                              <RightBtn />
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

            <Input
              onChange={(event) => {
                setSearch(event.target.value);
                setSearchClicked(true);
              }}
              type="text"
              placeholder="Search"
            />
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
      {searchClicked !== false && search !== "" && (
        <SearchMovies
          searchClicked={searchClicked}
          setSearchClicked={setSearchClicked}
        />
      )}
    </div>
  );
};
