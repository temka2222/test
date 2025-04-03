"use client";
import {
  Children,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
export const GenreContext = createContext({});
type Genre = {
  id: number;
  name: string;
};
export const GenreProvider = ({ children }: PropsWithChildren) => {
  const [genres, setGenres] = useState<Genre[]>([]);
  useEffect(() => {
    const getGenres = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJjNGM2NWNkZDFhNzE3N2I0NWQwMzhjNmE5NDlhYiIsIm5iZiI6MTc0MjgzMjQ4MS40NTQwMDAyLCJzdWIiOiI2N2UxODM2MTRjZTA3ZDY4NGUwODE5NzAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.kYLNQ-aa-cqDiKJQJ5ogEr5ATubq9JU87gsO_n8Sz3U",
          },
        }
      );
      const res = await response.json();

      setGenres(res.genres);
    };

    getGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres }}>{children}</GenreContext.Provider>
  );
};
export const useGenres = () => useContext(GenreContext);
