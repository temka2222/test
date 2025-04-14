

import axios from "axios";
import { useState, useEffect } from "react";
import { useSearch } from "@/app/components/SearchProvider";
import { Skeleton } from "@/components/ui/skeleton";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";

import { PaginationComp } from "@/app/components/Pagination";
import { MovieList } from "@/app/components/movieList";
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

export type Response = {
  results: Movie[];
  total_pages:number;
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
  const [page, setPage] = useState<number>(1);
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

      setTotalPage(data.total_pages);
    };

    getMoviesByAxios();
  }, [page, search]);

 console.log("ss",movies)
      console.log(search)

  const filterMovie = movies?.length
    ? movies.filter(
        (item) =>
          Array.isArray(item.genre_ids) && item.genre_ids.includes(genreID)
      )
    : [];

  return (
    <div className="flex flex-col gap-8   dark:bg-black dark:text-white ">
      {movies.length === 0 ? (
  <p className="text-xl font-semibold text-center mt-10">
    No results found.
  </p>
) : (
  <p className="text-xl font-semibold">
    {movies.length} results for "{search}"
  </p>
)}
      <div className=" grid  xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2  gap-8">
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
                  url={item.poster_path 
  ? `https://image.tmdb.org/t/p/original${item.poster_path}` 
  : "/default.jpeg"}
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
};
