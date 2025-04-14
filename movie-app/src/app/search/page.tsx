"use client";
import { MovieList } from "../components/movieList";
import { Seemore } from "../components/Seemore";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGenres } from "../components/GenreProvider";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { RightBtn } from "../components/RightIcon";
import { PaginationComp } from "../components/Pagination";
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
  vote_average: number;
};

export type Response = {
  results: Movie[];
  total_pages:number
};

export default function SearchGenre() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const [genreID, setGenreID] = useState<number>(Number(genre));
  const { genres } = useGenres();
  const [movies, setMovies] = useState<Movie[]>([]);
    const [page, setPage] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(0);
    const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    const getMovies = async () => {
      setLoading(true)
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=${genre}&page=1`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setLoading(false)
      setTotalPage(data.total_pages)
    };
    getMovies();
  }, [genre]);

  return (
    <div className="flex lg:flex-row  flex-col gap-8 p-10 dark:bg-black dark:text-white">
      <div className="flex flex-col gap-5">
        <p className="font-bold text-2xl">Search by genre</p>
        <p>See lists of movies by genre</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[auto_auto_auto] w-fit gap-2  p-1 rounded-2xl ">
          {genres.map((item) => (
            <Link key={item.id} href={`/search?genre=${item.id}` } onClick={()=>{setGenreID(item.id)}}>
              <div className={`flex flex-row p-1 w-fit font-bold hover:bg-gray-200 rounded-full border border-solid
    ${genreID === item.id ? "dark:bg-black dark:text-white  bg-black text-white" : "bg-white text-black"}`}>
                <span>{item.name}</span> 
                <div className="p-2">
                  <RightBtn />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex-1/3 flex-col">
        <div className=" grid  xl:grid-cols-4 lg:grid-cols-4   md:grid-cols-2 sm:grid-cols-2 gap-8">
          {movies.slice(0, 12).map((item, index) => {
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
          
    </div>
  );
}
