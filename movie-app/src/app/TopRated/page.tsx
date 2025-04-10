"use client";
import { MovieList } from "../components/movieList";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

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

type Response = {
  results: Movie[];
};
type PageType = {
  page: number;
  setPage: void;
};

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<Number>(1);
  const [pageLength, setPageLength] = useState<number[]>([1]);
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setTotalPage(data.total_pages);
    };

    getMoviesByAxios();
  }, [page]);
  const prevPage = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  const nextPage = () => {
    if (page < 56) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    if (page == 1) {
      setPageLength([]);
    }
    if (page == 2) {
      setPageLength([2]);
    }
    if (page == 3) {
      setPageLength([2, 3]);
    }
    if (page == 4) {
      setPageLength([2, 3]);
    }
    if (page > 4) {
      setPageLength([, page - 3, page - 2]);
    }
  }, [page]);

  return (
    <div className="flex flex-col gap-8 p-10 dark:bg-black dark:text-white ">
      <div className="text-2xl">
        <p>Top Rated</p>
      </div>
      <div className=" grid  xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {movies.map((item, index) => {
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
      </div>
      <Pagination>
        <PaginationContent>
          {page > 1 && (
            <PaginationItem>
              <PaginationPrevious onClick={prevPage} href="#" />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          {page > 3 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}

          {pageLength.slice(0, 3).map((item) => (
            <PaginationItem
              className={`${page == item ? "border-solid border" : ""}`}
              key={item}
            >
              <PaginationLink
                onClick={() => {
                  setPage(item);
                }}
                href="#"
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          ))}
          {page > 4 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          {page > 4 && (
            <PaginationItem>
              <PaginationLink href="#">{page}</PaginationLink>
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext onClick={nextPage} href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
