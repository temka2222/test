import axios from "axios";
import { filter } from "motion/react-client";
import { useEffect, useState } from "react";
    const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
type Cast = {
  name:string

  
};
 type Crew = {
  name: string;
  known_for_department:string;
    job:string;
};
type Response={
    cast:Cast[];
    crew:Crew[];
}
export const StaffInformation=({id}:{id:string})=>{
 const [cast,setCast]=useState<Cast[]>([])
const [crew,setCrew]=useState<Crew[]>([])
  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setCast(data.cast);
      setCrew(data.crew)
      console.log("staff",data)
     
    };

    getMovie();
  }, [id]);
  const director:string[]=crew?.filter(item => item.job === "Director" )
  .map(director => director.name);
  const writers:string[]=crew?.filter(person => person.known_for_department === "Writing" ).slice(0,1)
  .map(writer => writer.name);
   const stars:string=cast[0]?.name
  console.log(stars)
 
return(
    <div>hiiiii</div>
)
} 