"use client";
import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
import type { Movie } from "./UpcomingList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
type Response = {
  results: Movie[];
};
export const TopRated = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      setLoading(true);
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setLoading(false);
    };
    getMoviesByAxios();
  }, []);

  return (
    <div className="flex flex-col gap-8 p-10 pt-0 ">
      <Seemore title="Top rated" />
      <div className="grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2  gap-8  ">
        {!loading &&
          movies.slice(0, 10).map((item, index) => {
            return (
              <div key={index}>
                <MovieList
                  url={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                      : "/default.jpeg"
                  }
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
