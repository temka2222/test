type DarkType = {
  dark: Boolean;
};
export const RightBtn = (dark: DarkType) => {
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
        stroke={`${dark ? "#FAFAFA" : ""}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
