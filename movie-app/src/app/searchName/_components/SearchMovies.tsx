import { MovieList } from "@/app/components/movieList";

import axios from "axios";
import { useState, useEffect } from "react";
import { useSearch } from "@/app/components/SearchProvider";
import { Skeleton } from "@/components/ui/skeleton";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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

export const SearchMovie = ({
  genreID,
  setGenreID,
}: {
  genreID: number;
  setGenreID: (value: number) => void;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<Number>(1);
  const [pageLength, setPageLength] = useState<number[]>([1]);
  const { search } = useSearch();
  const [totalPage, setTotalPage] = useState<number>(0);

  useEffect(() => {
    setGenreID(0);
    const getMoviesByAxios = async () => {
      setLoading(true);
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setLoading(false);

      setTotalPage(data.total_results);
    };

    getMoviesByAxios();
  }, [page, search]);

  // const prevPage = () => {
  //   if (page > 1) {
  //     setPage((prev) => prev - 1);
  //   }
  // };
  // const nextPage = () => {
  //   if (page < 56) {
  //     setPage((prev) => prev + 1);
  //   }
  // };

  // useEffect(() => {
  //   if (page == 1) {
  //     setPageLength([]);
  //   }
  //   if (page == 2) {
  //     setPageLength([2]);
  //   }
  //   if (page == 3) {
  //     setPageLength([2, 3]);
  //   }
  //   if (page == 4) {
  //     setPageLength([2, 3]);
  //   }
  //   if (page > 4) {
  //     setPageLength([, page - 3, page - 2]);
  //   }
  // }, [page]);
  // useEffect(() => {
  //   const filterMovie = movies.filter((item) => {
  //     return item.genre_ids.some((element) => element === genreID);
  //   });
  //   setFilter(filterMovie);
  // }, [genreID]);

  const filterMovie = movies?.length
    ? movies.filter(
        (item) =>
          Array.isArray(item.genre_ids) && item.genre_ids.includes(genreID)
      )
    : [];

  return (
    <div className="flex flex-col gap-8   dark:bg-black dark:text-white ">
      <p className="font-bold text-2xl">
        {pageLength} results for "{search}"
      </p>
      <div className=" grid  xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {genreID == 0 &&
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
          new Array(10).fill(0).map((_, index) => (
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
        {genreID !== 0 &&
          filterMovie.slice(0, 10).map((item, index) => {
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
      {/* <Pagination>
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
      </Pagination> */}
    </div>
  );
};
