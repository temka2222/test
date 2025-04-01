import { Star } from "./Icons/starLogo";
import { useContext } from "react";
import { DarkContext } from "./MoviesProvider";
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
  const { movie, setMovie } = useContext(DarkContext);
  return (
    <div
      onClick={() => {
        () => setMovie(id);
      }}
      className="w-58 h-110 flex flex-col "
    >
      <img className="w-full h-full rounded-t-2xl object-fit" src={url}></img>
      <div className="flex flex-col h-24 bg-[#A1A1AA] rounded-b-2xl p-2">
        <div className="flex flex-row  pr-1/3 text-wrap items-center gap-2">
          <Star />

          <p>{rating}</p>
        </div>
        <div className="w-41 text-wrap">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
