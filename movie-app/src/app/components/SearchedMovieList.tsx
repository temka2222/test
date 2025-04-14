import { Star } from "./Icons/starLogo";
import Link from "next/link";

import { RightArrow } from "./Icons/rightArrow";

type MovieListProps = {
  url: string;
  name: string;
  rating: number;
  id: number;
  searchClicked: boolean;
  year: string;
  setSearchClicked: (value: boolean) => void;
};

export const SearchedMovieList = ({
  url,
  name,
  rating,
  id,
  searchClicked,
  year,
  setSearchClicked,
}: MovieListProps) => {
  return (
    <div className="w-full  flex flex-row items-end p-1">
      <div className=" flex flex-row gap-2 p-2 h-1/5  ">
        <img
          className="w-1/5 h-1/5 rounded-lg object-cover"
          src={url}
          alt="Image"
        />
        <div className="flex h-[100%] flex-col    pl-[2%] pr-[2%]  gap-2">
          <div>
            <div>
              <p className="text-[100%] font-bold">{name}</p>{" "}
            </div>

            <div className="flex flex-row">
              <Star />
              <p className="text-[85%]">
                <span className="font-medium">
                  {Math.floor(rating * 10) / 10}
                </span>
                <span className="text-[#71717A]">/10</span>
              </p>
            </div>
          </div>

          <p className="font-medium text-[85%]">{year}</p>
        </div>
      </div>
      <Link
        href={`/Movie/${id}`}
        key={id}
        onClick={() => setSearchClicked(false)}
      >
        <div className="flex flex-row text-nowrap items-center font-medium text-sm p-4 gap-1">
          <p>See more</p>
          <div className="flex w-[8px] ">
            <RightArrow />
          </div>
        </div>
      </Link>
    </div>
  );
};
