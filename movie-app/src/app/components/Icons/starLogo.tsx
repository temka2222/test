import { useDark } from "../MoviesProvider";
export const Star = () => {
  const { dark } = useDark();
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00016 1.71429L10.0602 5.88763L14.6668 6.56096L11.3335 9.80763L12.1202 14.3943L8.00016 12.2276L3.88016 14.3943L4.66683 9.80763L1.3335 6.56096L5.94016 5.88763L8.00016 1.71429Z"
        fill={dark ? "#FAFAFA" : "#FDE047"}
        stroke={dark ? "#FAFAFA" : "#FDE047"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
