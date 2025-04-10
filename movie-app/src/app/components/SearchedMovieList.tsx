import { Star } from "./Icons/starLogo";
import { useContext } from "react";
import { DarkContext } from "./MoviesProvider";
import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";
import { RightArrow } from "./Icons/rightArrow";

type MovieListProps = {
  url: string;
  name: string;
  rating: number;
  id: number;
  searchClicked: boolean;
  setSearchClicked: (value: boolean) => void;
};
type DarkType = {
  dark: boolean;
};

export const SearchedMovieList = ({
  url,
  name,
  rating,
  id,
  searchClicked,

  setSearchClicked,
}: MovieListProps) => {
  return (
    <Link href={`/Movie/${id}`} key={id}>
      <div className="w-full flex flex-row items-end p-1">
        <div
          onClick={() => setSearchClicked(false)}
          className=" flex flex-row gap-2 p-2 "
        >
          <img
            className="w-1/5 h-1/5 rounded-lg object-cover"
            src={url}
            alt="Image"
          />
          <div className="flex flex-col h-[100%] dark:bg-[#27272A] bg-white rounded-lg p-[2%]">
            <div>
              <p className="text-[100%] font-bold">{name}</p>{" "}
              {/* `text-[1em]`-ийг `text-base` гэж ашиглах боломжтой */}
            </div>
            <div className="flex flex-row  items-center gap-[2%]">
              <Star />
              <p className="text-[85%]">
                <span className="font-bold">
                  {Math.floor(rating * 10) / 10}
                </span>
                <span className="text-[#71717A]">/10</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-row text-nowrap items-center font-bold p-2">
          <p>See more</p>
          <RightArrow />
        </div>
      </div>
    </Link>
  );
};
