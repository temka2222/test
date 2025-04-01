"use client";
import { useRouter } from "next/navigation";

export const Seemore = (props) => {
  const router = useRouter();
  return (
    <div className="w-full h-9 flex  flex-row justify-between items-center font-bold text-xl pr-10">
      <p>{props.title}</p>
      <button
        onClick={() => {
          if (props.title === "Upcoming") {
            router.push("/Upcoming");
          }
        }}
      >
        See more
      </button>
    </div>
  );
};
