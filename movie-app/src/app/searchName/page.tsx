"use client";
import { MovieList } from "../components/movieList";
import { Seemore } from "../components/Seemore";
import axios from "axios";
import { useState, useEffect } from "react";
import { useGenres } from "../components/GenreProvider";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { RightBtn } from "../components/RightIcon";
import { useSearch } from "../components/SearchProvider";
import { SearchMovie } from "./_components/SearchMovies";
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

export default function SearchName() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
  const searchValue = searchParams.get("searchValue");
  const { genres } = useGenres();
  const { search } = useSearch();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [genreID, setGenreID] = useState<number>(0);
  useEffect(() => {
    const getMovies = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/discover/movie?language=en-US&with_genres=${genre}&page=1`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
    };
    getMovies();
  }, [genre]);

  return (
    <div className="flex lg:flex-row flex-col  gap-8 p-10 dark:bg-black dark:text-white">
      <div className="flex-1/2 flex-col">
        <SearchMovie genreID={genreID} setGenreID={setGenreID} />
      </div>
      <div className="flex flex-col gap-5">
        <p className="font-bold text-2xl">Search by genre</p>
        <p>See lists of movies by genre</p>
        <div className="grid grid-cols-grid-cols-[auto_auto_auto] sm:grid-cols-3 lg:grid-cols-[auto_auto_auto]  gap-2   rounded-2xl ">
          {genres.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setGenreID(item.id);
              }}
              className={`
  flex flex-row p-1 w-fit font-bold rounded-full border border-solid hover:bg-gray-200
  ${genreID === item.id 
    ? "bg-black text-white dark:bg-white dark:text-black" 
    : "bg-white text-black dark:bg-black dark:text-white"
  }
`}
            >
              <span>{item.name}</span>
              <div className="p-2">
                <RightBtn />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}