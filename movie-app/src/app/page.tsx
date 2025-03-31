"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Navigation } from "./components/navigation";
import { Slide } from "./components/Slide";
import { UpcomingList } from "./components/UpcomingList";
import { PopularList } from "./components/popularlist";
import { TopRated } from "./components/topRated";
import { Footer } from "./components/footer";

export default function Home() {
  const [dark, setDark] = useState<boolean>(false);
    useEffect(() => {
    const countries = async () => {
      const response = await fetch(
        "https://countriesnow.space/api/v0.1/countries",
        { method: "GET" }
      );
      const data = await response.json();
      setdata(data.data);
    };
    countries();
  }, []);
  console.log(data);  

  // useEffect(() => {
  //   localStorage.setItem("dark", JSON.stringify(dark));
  // }, [dark]);

  const list = [
    {
      name: "The Shawshank Redemption",
      url: "/Popular/The Shawshank Redemption.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "How To Train Your Dragon Live Action",
      url: "/Upcoming/How To Train Your Dragon Live Action.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "Alien Romulus",
      url: "/Upcoming/Alien Romulus.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "From the Ashes",
      url: "/Upcoming/From the Ashes.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "Space Dogg",
      url: "/Upcoming/spacedogg.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "Y2K",
      url: "/Upcoming/Y2K.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "Solo Leveling: ReAwakening",
      url: "/Upcoming/ReAwakening.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "Get Away",
      url: "/Upcoming/Get Away.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "Sonic the Hedgehog 3",
      url: "/Upcoming/Sonic the Hedgehog 3.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
    {
      name: "The Order",
      url: "/Upcoming/The Order.jpeg",
      rating: "6.9/10",
      list: "upcoming",
    },
  ];
  return (
    <div
      className={`max-w-[1440px] flex flex-col m-auto ${
        dark ? " text-white bg-black" : " text-black bg-white"
      } overflow-hidden`}
    >
      <Navigation dark={dark} setDark={setDark} />
      <Slide />
      <UpcomingList list={list} />
      <PopularList list={list} />
      <TopRated list={list} />
      <Footer/>
    </div>
  );
}
