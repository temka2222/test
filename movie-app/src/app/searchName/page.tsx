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

export default function SearchGenre() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");
 const searchValue = searchParams.get("searchValue");
  const { genres } = useGenres();
  const {search}=useSearch()
  const [movies, setMovies] = useState<Movie[]>([]);
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
    <div className="flex flex-row  gap-8 p-10">
        <div className="flex-1/3 flex-col">
        <div className=" grid  xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-8">
          {movies.slice(0, 12).map((item, index) => {
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
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 w-fit gap-2 border-solid border p-2 rounded-2xl ">
          {genres.map((item) => (
            <Link key={item.id} href={`/search?genre=${item.id}`}>
              <div className="flex flex-row p-2 w-fit hover:bg-gray-200 rounded-lg border-solid border">
                <span>{item.name}</span>
                <div className="p-2">
                  <RightBtn />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
