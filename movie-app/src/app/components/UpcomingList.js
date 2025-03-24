import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
export const UpcomingList = () => {
  const list = [
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
    {
      name: "Dear Santa",
      url: "/Upcoming/DearSanta.jpg",
      rating: "6.9/10",
    },
  ];
  return (
    <div className="flex flex-col gap-8 p-20">
      <Seemore title="Upcoming" />
      <div className="grid grid-cols-5 gap-8 ">
        {list.map((item, index) => {
          return (
            <div key={index}>
              <MovieList url={item.url} name={item.name} rating={item.rating} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
