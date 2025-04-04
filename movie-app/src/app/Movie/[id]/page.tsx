"use client";
import React from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { Star } from "@/app/components/Icons/starLogo";
import { Trailer } from "./_components/Trailer";
import { map } from "motion/react-client";
import { Seemore } from "@/app/components/Seemore";
import { MoreLike } from "./_components/MoreLike";
type Params = {
  id: string;
};

type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: string;
  release_date: string;
};
export type Response = {
  results: Movie[];
};
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

export default function Moviepage() {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState<Movie[]>([]);

  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovie(data);
    };

    getMovie();
    
  }, [id]);
// console.log(movie)
  return (
    <div className="max-w-[1440px] flex flex-col m-auto dark:bg-black dark:text-white p-20 pt-10 gap-9">
      <div className="flex flex-col gap-6">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1">
            <div className="text-2xl font-bold">{movie.title}</div>
            <div className="text-[13px]">{movie.release_date}</div>
          </div>
          <div className="flex flex-col gap-1 justify-start">
            <div className="text-[13px]">Rating</div>
            <div className=" flex flex-row text-1xl font-bold items-center">
              <Star />
              {movie.vote_average}
            </div>
            <div className="text-[13px]">{movie.vote_count}</div>
          </div>
        </div>
        <div className="flex w-full flex-row gap-8">
          <div className="flex-1/3  border-solid border">
            <img
              className=" aspect-[1/1.2]"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </div>
          <div className=" flex-2/3 border-solid border">
            <Trailer id={id} />
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-star">
          <div className="flex flex-row gap-2">
          {movie.genres?.map((element )=>{
            return(
              <div key={element.id} className="pt-1 pb-1 pr-2.5 pl-2.5 rounded-full text-2 font-bold border-solid border">
                {element.name}
              </div>
            )
          })}
          </div>
          <div className="text-3">{movie.overview}</div>
           {/* <div className="text-3">{movie.overview}</div> */}
        </div>
      </div>
      <div className="flex flex-col gap-9">
       <Seemore title="More like this" />
       <MoreLike id={id}/>
       </div>
    </div>
  );
}
