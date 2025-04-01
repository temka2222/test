"use client";
import { Children, createContext, PropsWithChildren, useState } from "react";
export const DarkContext = createContext({});
export const DarkProvider = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = useState<boolean>(false);
  const [movieId, setMovieId] = useState<boolean | null>(1197306);
  return (
    <DarkContext.Provider value={{ dark, setDark, movieId, setMovieId }}>
      {children}
    </DarkContext.Provider>
  );
};
