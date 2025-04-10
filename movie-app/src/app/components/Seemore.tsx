"use client";
import { useRouter } from "next/navigation";
import { RightArrow } from "./Icons/rightArrow";
type PropsType = {
  title: string;
};
export const Seemore = (props: PropsType) => {
  const router = useRouter();
  return (
    <div className="w-full h-9 flex  flex-row justify-between items-center font-bold text-[100%] pr-10">
      <p>{props.title}</p>
      <button
        className="flex flex-row items-center gap-2"
        onClick={() => {
          if (props.title === "Upcoming") {
            router.push("/Upcoming");
          }
          if (props.title === "Popular") {
            router.push("/Upcoming");
          }
          if (props.title === "Top rated") {
            router.push("/TopRated");
          }
        }}
      >
        See more <RightArrow />
      </button>
    </div>
  );
};
