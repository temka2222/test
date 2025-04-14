
import { useDark } from "./MoviesProvider";

  
export const RightBtn = () => {
  const { dark } = useDark();
  
  return (
    <svg  className={dark ? "stroke-white" : "stroke-black"}
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 9L5 5L1 1"
        // stroke={dark ? "#FAFAFA" : "#09090B"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
