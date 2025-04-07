"use client";
import {
  Children,
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
export const DarkContext = createContext({});
export const DarkProvider = ({ children }: PropsWithChildren) => {
  const [dark, setDark] = useState<boolean>(false);

  return (
    <DarkContext.Provider value={{ dark, setDark }}>
      <div className={dark ? "dark" : ""}>{children}</div>
    </DarkContext.Provider>
  );
};
export const usedark = () => useContext(DarkContext);
