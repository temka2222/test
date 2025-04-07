import { Star } from "./Icons/starLogo";
import { useContext } from "react";
import { DarkContext } from "./MoviesProvider";
import Link from "next/link";

import { Skeleton } from "@/components/ui/skeleton";

type MovieListProps = {
  url: string;
  name: string;
  rating: string;
  id: number;
};
type DarkType = {
  dark: boolean;
};

export const MovieList = ({ url, name, rating, id }: MovieListProps) => {
  
  return (
    
    <Link href={`/Movie/${id}`} key={id}>
     
      <div className="  w-9/10 aspect-[1/1.2] flex flex-col ">
        <img className="w-full h-full rounded-t-2xl object-fit" src={url}></img>
        <div className="flex flex-col h-30 dark:bg-[#27272A] bg-[#A1A1AA] rounded-b-2xl p-2">
          <div className="flex flex-row  text-wrap items-center gap-2">
            <Star />

            <p>{rating}</p>
          </div>
          <div className=" text-wrap">
            <p>{name}</p>
          </div>
        </div>
      </div>


    </Link>
  );
};
