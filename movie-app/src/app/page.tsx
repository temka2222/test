"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Slide } from "./components/Slide";
import { UpcomingList } from "./components/UpcomingList";
import { PopularList } from "./components/popularlist";
import { TopRated } from "./components/topRated";
import { Footer } from "./components/footer";
import { useContext } from "react";
import { DarkContext } from "./components/MoviesProvider";

export default function Home() {
   const {dark}=useContext(DarkContext)
  

  
  return (
    <div
      className={`max-w-[1440px] flex flex-col m-auto ${
        dark ? " text-white bg-black" : " text-black bg-white"
      } overflow-hidden`}
    >
      
      {/* <Navigation  /> */}
      <Slide />
      <UpcomingList />
      <PopularList />
      <TopRated />
      {/* <Footer /> */}
    </div>
  );
}
