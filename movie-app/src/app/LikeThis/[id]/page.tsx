"use client";
import React from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { useEffect, useState } from "react";
import { MovieList } from "@/app/components/movieList";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationComp } from "@/app/components/Pagination";

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
  vote_average: number;
  release_date: string;
};
export type Response = {
  results: Movie[];
  total_pages: number;
};

export default function Moviepage() {
  const { id } = useParams<Params>();
  const [movie, setMovie] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      setLoading(true);
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=${page} `,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      setMovie(data.results);
      setLoading(false);
      setTotalPage(data.total_pages);
    };
    getMoviesByAxios();
  }, [page]);

  return (
    <div className="flex flex-col gap-8 p-10 dark:bg-black dark:text-white ">
      <div className="text-2xl">
        <p className="font-bold">More Like this</p>
      </div>
      <div className=" grid  xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {movie.map((item, index) => {
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
      </div>
      <PaginationComp
        currentPage={page}
        totalPages={totalPage}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
