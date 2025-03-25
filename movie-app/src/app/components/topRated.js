import { MovieList } from "./movieList";
import { Seemore } from "./Seemore";
export const TopRated = ({ list }) => {
  return (
    <div className="flex flex-col gap-8 p-20 pt-0">
      <Seemore title="Top rated" />
      <div className="grid grid-cols-5 gap-8  ">
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
