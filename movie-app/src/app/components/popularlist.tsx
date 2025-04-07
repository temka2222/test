import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
import type { Movie } from "./UpcomingList";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
type Response = {
  results: Movie[];
};
export const PopularList = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
 const [loading,setLoading] =useState<boolean>(false)
  useEffect(() => {
    const getMoviesByAxios = async () => {
    setLoading(true)
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
      setLoading(false)
    
    };
    getMoviesByAxios();
  }, []);

  return (
    <div className="flex flex-col gap-8 p-10 pt-0">
      <Seemore title="Popular" />
      <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8  ">
      
        {!loading && movies.slice(0, 10).map((item, index) => {
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
        {
          loading &&
       new Array(20).fill(0).map((_, index) => (
            
             <div className="w-9/10 aspect-[1/1.2] flex flex-col gap-2">
      <Skeleton className="w-full h-full rounded-t-2xl" />
      <div className="flex gap-2">
        <Skeleton className="h-4 w-[200px]" />
       
      </div>
    </div>
          ))
        }
      
       
      </div>
    </div>
  );
};
