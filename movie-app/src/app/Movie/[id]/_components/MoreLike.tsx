import { MovieList } from "@/app/components/movieList";
import axios from "axios";
import { useState, useEffect } from "react";

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
};

export const MoreLike = ({ id }: { id: string }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/${id}/similar?language=en-US&page=1 `,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
    };
    getMoviesByAxios();
  }, []);

  return (
    <div className=" grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 gap-8 ">
      {movies.slice(0, 5).map((item, index) => {
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
  );
};
