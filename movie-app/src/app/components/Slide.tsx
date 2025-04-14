"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { ChevronRight } from "lucide-react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Button } from "@/components/ui/button";
import { Star } from "./Icons/starLogo";

import type { Movie } from "../Upcoming/page";

import { Trailer } from "../Movie/[id]/_components/Trailer";

type Response = {
  results: Movie[];
};
export const Slide = () => {
  const [ind, setInd] = useState<number>(0);
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const getMoviesByAxios = async () => {
      const { data } = await axios.get<Response>(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1  ",
        {
          headers: {
            Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
          },
        }
      );

      setMovies(data.results);
    };
    getMoviesByAxios();
  }, []);
  console.log(movies);

  return (
    <div className="relative">
      <div className="flex flex-row w-full gap-4 overflow-hidden justify-center items-center">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          {movies.slice(3, 6).map((item, indx) => {
            return (
              <div key={indx} className="  flex justify-star items-center">
                <img
                  className="h-[600px] w-[1440px] object-fit relative "
                  key={indx}
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                />
                <div className=" flex absolute z-10 pl-26  text-justify text-white">
                  <div className="flex flex-col justify-start items-start w-101 h-66 gap-4  ">
                    <p>Now Playing:</p>
                    <p className="font-bold text-4xl">{item.title}</p>
                    <div className="flex flex-row items-center">
                      <Star />
                      <p>{item.vote_average} </p>
                    </div>
                    <p>{item.overview} </p>
                    <div className="text-black">
                      <Button
                        onClick={() => {
                          setInd(item.id);
                        }}
                        variant={"outline"}
                      >
                        {" "}
                        <ChevronRight /> Watch Trailer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {ind !== 0 && (
        <div
          className={`flex absolute z-100 justify-center items-center inset-0 text-white`}
        >
          <div className="relative w-3/4 h-4/5 ">
            <Trailer id={ind} />
          </div>
          <button
            onClick={() => {
              setInd(0);
            }}
            className=" absolute inset-0 z-200 left-5/7 bottom-3/4 text-2xl "
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};
