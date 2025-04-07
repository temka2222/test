import { usedark } from "../MoviesProvider";
export const RightArrow = () => {
  const { dark } = usedark();
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 11 11"
      fill={dark ? "#FAFAFA" : "#18181B"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33337 5.99998H10.6667M10.6667 5.99998L6.00004 1.33331M10.6667 5.99998L6.00004 10.6666"
        stroke={dark ? "#FAFAFA" : "#18181B"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
