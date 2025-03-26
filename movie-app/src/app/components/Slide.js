"use client";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useEffect, useState } from "react";
import { Right } from "./Icons/RightBtn";
export const Slide = () => {
  

 
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
  
  return (
    <div className=" relative">
   
      <div  className="flex flex-row w-full gap-4 overflow-hidden justify-center items-center">
         <Carousel 
        autoPlay 
        infiniteLoop 
        showThumbs={false} 
        showStatus={false} 
        interval={3000} 
      >
        {movieList.map((item,indx)=>{
        return(  <img className="w-full sm:w-[1440px] h-[600px] object-fit " key={indx} src={item.url}/>)
        })}
        </Carousel>
      </div>
      
      
    </div>
  );
};
