import axios from "axios";
import { useEffect, useState } from "react";
import { useSearch } from "./SearchProvider";
import { MovieList } from "./movieList";
import { SearchedMovieList } from "./SearchedMovieList";
import Link from "next/link";

 type Movie = {
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
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
export const SearchMovies=({searchClicked,setSearchClicked})=>{
     const { search, setSearch } = useSearch();
     const [movies, setMovies] = useState<Movie[]>([]);
    
    useEffect(() => {
  
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
      

      
    };

    getMoviesByAxios();
    console.log("aa",movies)
  }, [ search]);

return(
<div className="flex flex-col absolute w-1/3 aspect-[1/1.2] gap-2 bg-white   border-solid border-black border top-[80%] left-[30%] z-500 ">
{movies.slice(0,5).map((item,index)=>{
    return(
        <div className="w-full border-solid  border-t-0 border-r-0 border-b">
         <div className="w-full h-1/5 " key={index}>
                        <SearchedMovieList
                          url={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                          name={item.title}
                          rating={item.vote_average}
                          id={item.id}
                          
                        />
                       
                      </div>
                      </div>
    )

})}
 <Link onClick={()=>setSearchClicked(false)} href={`/searchName?searchValue=${search}`}>
<div>
 See all result for "{search}"
</div>
 </Link>
</div>

)}