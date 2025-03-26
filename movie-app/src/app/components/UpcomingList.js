import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
export const UpcomingList = ({ list }) => {
  const newList = list.filter((item) => {
    return item.list == "upcoming";
  });

  return (
    <div className="flex flex-col gap-8 p-20">
      <Seemore title="Upcoming" />
      <div className=" grid 2xl: grid-cols-5 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8">
        {newList.map((item, index) => {
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
