import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
import type { Movie } from "./UpcomingList";
import { useEffect, useState } from "react";
import axios from "axios";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
type Response = {
  results: Movie[];
};
export const TopRated = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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

  return (
    <div className="flex flex-col gap-8 p-10 pt-0 ">
      <Seemore title="Top rated" />
      <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8  ">
        {movies.slice(0, 10).map((item, index) => {
          return (
            <div key={index}>
              <MovieList
                url={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                name={item.title}
                rating={item.vote_average}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
