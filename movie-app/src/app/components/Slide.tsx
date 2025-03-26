"use client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useState } from "react";
export const Slide = () => {
  const movieList = [
    {
      name: "Wicked",
      url: "/Slide/wicked.jpeg",
      rating: "6.9/10",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    },
    {
      name: "Gladiator 2",
      url: "/Slide/Gladiator.webp",
    },
    {
      name: "Moana 2",
      url: "/Slide/Moana.jpeg",
    },
  ];

  return (
    <div className=" relative">
      <div className="flex flex-row w-full gap-4 overflow-hidden justify-center items-center">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          {movieList.map((item, indx) => {
            return (
              <div>
                <img
                  className="w-full sm:w-[1440px] h-[600px] object-fit "
                  key={indx}
                  src={item.url}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};
