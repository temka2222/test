import { motion } from "motion/react";
export const Slide = () => {
  const movieList = [
    {
      name: "Wicked",
      url: "/wicked.jpg",
    },
    {
      name: "Gladiator",
      url: "/gladiator.jpg",
    },
    {
      name: "Moana",
      url: "/Moana.jpg",
    },
  ];
  return (
    <div
      className="w-full h-150 flex flex-row top-9 bottom-9 overflow-hidden"
      data-carousel="slide"
    >
      <div className="w-[100%] h-[100%]">
        <img className="w-[100%] h-[100%]" src={movieList[0].url}></img>
      </div>
      {/* <div className="w-[100%] h-[100%]">
        <img className="w-[100%] h-[100%]" src={movieList[1].url}></img>
      </div> */}
    </div>
  );
};
