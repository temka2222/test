"use client";
import {
  Children,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
export const SearchContext = createContext({});

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState<string>("");
  

  return (
    <SearchContext.Provider value={{ search,setSearch }}>{children}</SearchContext.Provider>
  );
};
export const useSearch = () => useContext(SearchContext);
