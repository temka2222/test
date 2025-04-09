import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
import axios from "axios";
import { useState, useEffect } from "react";

import { Skeleton } from "@/components/ui/skeleton";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: string;
};

export type Response = {
  results: Movie[];
};

export const UpcomingList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setLoading(true);
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1  ",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setLoading(false);
    };
    getMoviesByAxios();
  }, []);
  console.log("upcoming", movies);
  return (
    <div className="flex flex-col gap-8 p-10">
      <Seemore title="Upcoming" />
      <div className=" grid  xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {!loading &&
          movies.slice(0, 10).map((item, index) => {
            return (
              <div key={index}>
                <MovieList
                  url={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  name={item.title}
                  rating={item.vote_average}
                  id={item.id}
                />
              </div>
            );
          })}
        {loading &&
          new Array(20).fill(0).map((_, index) => (
            <div
              key={index}
              className="w-9/10 aspect-[1/1.2] flex flex-col gap-2"
            >
              <Skeleton className="w-full h-full rounded-t-2xl" />
              <div className="flex gap-2">
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
