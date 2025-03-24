import Image from "next/image";
import { Navigation } from "./components/navigation";
import { Slide } from "./components/Slide";
import { UpcomingList } from "./components/UpcomingList";
export default function Home() {
  return (
    <div className="w-[1440px] flex flex-col mr-auto justify-center items-center text-white bg-black">
      <Navigation />
      <Slide />
      <UpcomingList />
    </div>
  );
}
