import axios from "axios";
import { useEffect, useState } from "react";
import { useSearch } from "./SearchProvider";
import { SearchedMovieList } from "./SearchedMovieList";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";


type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  popularity: number;
  poster_path: string;
  title: string;
  overview: string;
  vote_average: number;
  release_date:string
};

export type Response = {
  results: Movie[];
};
type SearchWovieType = {
  searchClicked: boolean;
  setSearchClicked: (value: boolean) => void;
};
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
export const SearchMovies = ({
  searchClicked,
  setSearchClicked,
}: SearchWovieType) => {
  const { search, setSearch } = useSearch();
  const [movies, setMovies] = useState<Movie[]>([]);
const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    setLoading(true)
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/search/movie?query=${search}&language=en-US&page=1`,
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
   
  }, [search]);

  return (
    <div className={`flex flex-col absolute w-1/3 aspect-[1/1.2] gap-2 bg-white border-solid border-black border top-[80%] left-[30%] z-[500] dark:bg-black dark:text-white`}>
    {!loading &&
      movies.slice(0, 5).map((item, index) => (
        <div key={index} className="w-full border-b">
          <SearchedMovieList
            url={
              item.poster_path
                ? `https://image.tmdb.org/t/p/original${item.poster_path}`
                : "/default.jpeg"
            }
            name={item.title}
            rating={item.vote_average}
            id={item.id}
            searchClicked={searchClicked}
            setSearchClicked={setSearchClicked}
            year={item.release_date.split("-")[0]}
          />
        </div>
      ))}

    {loading &&
      new Array(5).fill(0).map((_, index) => (
        <div key={index} className="w-1/3 aspect-[1/1.2] flex flex-col gap-2">
          <Skeleton className="w-1/2 h-1/2 rounded-t-2xl" />
          <div className="flex gap-2">
            <Skeleton className="h-1/2 w-1/2" />
          </div>
        </div>
      ))}

    <Link
      onClick={() => {
        setSearchClicked(false);
       
      }}
      href={`/searchName?searchValue=${search}`}
    >
      {movies && movies.length > 0 ? (
        <div className="font-bold p-2">
          See all result for &quot;{search}&quot;
        </div>
      ) : (
        <div className="font-bold p-2">
          No results found for &quot;{search}&quot;
        </div>
      )}
    </Link>
  </div>
  );
};
