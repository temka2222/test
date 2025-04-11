import axios from "axios";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMjI5NjAxYzc3MWJiNjVhNDQxOGRkNDc5MzEzZWVjYSIsIm5iZiI6MTc0MzQwNTc5Ni4zMzIsInN1YiI6IjY3ZWE0MmU0NzAwYTZhOTRjNmU1N2JhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ukgjSLlweWW_iLKPPEo75uBFjp48H1trXme9bnnabkM";
type Trailer = {
  key: string;
};
export type Response = {
  results: Trailer[];
};
export const Trailer = ({ id }: { id: string }) => {
  const [trailer, setTrailer] = useState<Trailer[]>([]);
  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3//movie/${id}/videos?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`,
          },
        }
      );

      setTrailer(data.results);
    };

    getMovie();
  }, [id]);

  return (
    <iframe
      className="w-full h-full "
      src={`https://www.youtube.com/embed/${trailer[0]?.key}`}
    ></iframe>
  );
};
