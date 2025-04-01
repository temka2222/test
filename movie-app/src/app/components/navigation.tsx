"use client";

import { useState, useEffect } from "react";
import { Logo } from "./Icons/filmlogo";
import { Moon } from "./Icons/moon";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import { RightBtn } from "./RightIcon";
import { useContext } from "react";
import { DarkContext } from "./MoviesProvider";

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

type Genre = {
  id: number;
  name: string;
};

export const Navigation = () => {
  const { dark, setDark } = useContext(DarkContext);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const getGenres = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJjNGM2NWNkZDFhNzE3N2I0NWQwMzhjNmE5NDlhYiIsIm5iZiI6MTc0MjgzMjQ4MS40NTQwMDAyLCJzdWIiOiI2N2UxODM2MTRjZTA3ZDY4NGUwODE5NzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kYLNQ-aa-cqDiKJQJ5ogEr5ATubq9JU87gsO_n8Sz3U",
          },
        }
      );
      const res = await response.json();

      setGenres(res.genres);
    };

    getGenres();
  }, []);

  useEffect(() => {
    if (!check) return;
    window.localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark, check]);
  useEffect(() => {
    setDark(JSON.parse(localStorage.getItem("dark")));
    setCheck(true);
  }, []);

  const [Clicked, setClicked] = useState<boolean>(false);
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
            <Select>
              <SelectTrigger className="w-fit h-9 rounded-sm">
                <SelectValue
                  placeholder={`${searchbtn == true ? "" : "Genre"}`}
                />
              </SelectTrigger>
              <SelectContent
                className={`${dark == true ? "text-white bg-black" : ""} `}
              >
                <div className="flex flex-col gap-3 p-2">
                  <p className=" text-2xl font-bold">Genres</p>
                  <p>See lists of movies by genre</p>
                  <div className="grid lg:grid-cols-3 grid-cols-2 w-fit h-fit gap-3 border-solid border p-2  rounded-2xl text-nowrap">
                    {genres.map((item) => {
                      return (
                        <div
                          onClick={() => setClicked(!Clicked)}
                          className={`flex flex-row size-fit border-solid border justify-center items-center rounded-full `}
                        >
                          <SelectItem value={item.name}>{item.name}</SelectItem>
                          <div className="p-2">{<RightBtn dark={dark} />}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </SelectContent>
            </Select>
          </div>
          <div
            className={`lg:flex w-fit h-9 flex-row   justify-start items-center border-solid  solid-grey rounded-sm ${
              searchbtn == true ? "flex border-0" : "hidden border"
            }`}
          >
            <div className=" flex flex-row  opacity-10   h-8  justify-center items-center">
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
