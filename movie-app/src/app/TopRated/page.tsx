"use client";
import { MovieList } from "../components/movieList";
import axios from "axios";
import { useState, useEffect } from "react";
import { PaginationComp } from "../components/Pagination";
import { Skeleton } from "@/components/ui/skeleton";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
};

type Response = {
  results: Movie[];
  total_pages: number;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<Boolean>(false);

  useEffect(() => {
    const getMoviesByAxios = async () => {
      setLoading(true);
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setLoading(false);
      setTotalPage(data.total_pages);
    };

    getMoviesByAxios();
  }, [page]);

  return (
    <div className="flex flex-col gap-8 p-10 dark:bg-black dark:text-white ">
      <div className="text-2xl">
        <p>Top Rated</p>
      </div>
      <div className=" grid  xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {!loading &&
          movies.map((item, index) => {
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
      <PaginationComp
        currentPage={page}
        totalPages={totalPage}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
