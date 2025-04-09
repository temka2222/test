"use client";
import { createContext, PropsWithChildren, useContext, useState } from "react";

type SearchType = {
  search: string;
  setSearch: (value: string) => void;
};

export const SearchContext = createContext<SearchType | undefined>(undefined);

export const SearchProvider = ({ children }: PropsWithChildren) => {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
};
