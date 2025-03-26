import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
export const PopularList = ({ list }) => {
  return (
    <div className="flex flex-col gap-8 p-20 pt-0">
      <Seemore title="Popular" />
      <div className="grid xl:grid-cols-5 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2  gap-8  ">
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
