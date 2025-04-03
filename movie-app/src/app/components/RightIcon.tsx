import { useContext } from "react";
import { DarkContext } from "./MoviesProvider";

type DarkType = {
  dark: Boolean;
};
export const RightBtn = () => {
  const { dark } = useContext(DarkContext);
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        stroke={dark ? "#FAFAFA" : "#09090B"}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
