"use client";
import { useEffect, useState } from "react";
import { Right } from "./Icons/RightBtn";
export const Slide = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => {
      current == 0 ? movieList.length - 1 : current - 1;
    });
  };
  const next = () => {
    setCurrent((current) => {
      current == movieList.length - 1 ? 0 : current + 1;
    });
  };
  const movieList = [
    {
      name: "Wicked",
      url: "/Slide/wicked.jpeg",
    },
    {
      name: "Gladiator",
      url: "/Slide/Gladiator.webp",
    },
    {
      name: "Moana",
      url: "/Slide/Moana.jpeg",
    },
  ];
  // useEffect(() => {
  //   const interval = setInterval(next, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className=" relative">
      <div
        className={`flex w-max transition-transform ease-in-out duration-50 translate-x-2`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        <img src={movieList[current].url} />
      </div>
      <div className=" w-full flex flex-row absolute justify-between items-center inset-0 ">
        <button
          onClick={prev}
          className=" bg-amber-50 p-2 flex justify-center items-center absolute rounded-full"
        >
          <Right />
        </button>
        <button
          onClick={next}
          className="bg-amber-950 p-4 flex justify-center items-center absolute rounded-full"
        >
          <Right />
        </button>
      </div>
    </div>
  );
};
