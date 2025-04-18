"use client";
import {
  Children,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
export const GenreContext = createContext<GenreContextType | undefined>(
  undefined
);
type Genre = {
  id: number;
  name: string;
};
type GenreContextType = {
  genres: Genre[];
  setGenres: (value: Genre[]) => void;
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
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );
      const res = await response.json();

      setGenres(res.genres);
    };

    getGenres();
  }, []);

  return (
    <GenreContext.Provider value={{ genres, setGenres }}>
      {children}
    </GenreContext.Provider>
  );
};

export const useGenres = () => {
  const context = useContext(GenreContext);

  // If context is undefined (i.e., the provider is not used correctly), throw an error
  if (!context) {
    throw new Error("useGenres must be used within a GenreProvider");
  }

  return context;
};
