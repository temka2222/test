import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
import axios from "axios";
import { useState, useEffect } from "react";

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

export const UpcomingList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
    };
    getMoviesByAxios();
  }, []);
  console.log(movies);
  return (
    <div className="flex flex-col gap-8 p-10">
      <Seemore title="Upcoming" />
      <div className=" grid  xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {movies.slice(0, 10).map((item, index) => {
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
      4
    </div>
  );
};
