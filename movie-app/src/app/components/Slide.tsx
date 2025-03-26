"use client";
import { Carousel } from "react-responsive-carousel";
import { ChevronRight } from "lucide-react"
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Button } from "@/components/ui/button";
import { Star } from "./Icons/starLogo";
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
      rating: "6.9/10",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    
    },
    {
      name: "Moana 2",
      url: "/Slide/Moana.jpeg",
      rating: "6.9/10",
      desc: "Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. ",
    
    },
  ];

  return (
    <div>
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
              <div className="flex justify-star items-center">
                <img
                  className="w-full sm:w-[1440px] h-[600px] object-fit relative "
                  key={indx}
                  src={item.url}
                />
                <div className=" flex absolute z-10 pl-26  text-justify text-white" >
                           <div className="flex flex-col justify-start items-start w-101 h-66 gap-4  " >
                            <p>Now Playing:</p>
                            <p className="font-bold text-4xl">{item.name}</p>
                            <div className="flex flex-row items-center">
                             <Star/>
                             <p>{item.rating} </p>
                            </div>
                            <p >{item.desc} </p>
                            <div className="text-black">
                           <Button variant={"outline"}> <ChevronRight /> Watch Trailer</Button>
                           </div>
                           </div>   
                        </div>
              </div>
            );
          })}
        
        </Carousel>
      </div>
    </div>
  );
};
