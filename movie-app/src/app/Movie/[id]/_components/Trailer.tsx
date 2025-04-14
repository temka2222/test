import axios from "axios";
import { useEffect, useState } from "react";
type Trailer = {
  key: string;
};
export type Response = {
  results: Trailer[];
};
export const Trailer = ({ id }: { id: number }) => {
  const [trailer, setTrailer] = useState<Trailer[]>([]);
  useEffect(() => {
    const getMovie = async () => {
      const { data } = await axios.get<Response>(
        `https://api.themoviedb.org/3//movie/${id}/videos?language=en-US`,
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
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
