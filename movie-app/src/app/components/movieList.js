import { Star } from "./starLogo";
export const MovieList = ({ url, name, rating }) => {
  return (
    <div className="w-58 h-110 flex flex-col  ">
      <img  className="w-full h-full rounded-t-2xl " src={url}></img>
      <div className="flex flex-col h-24 bg-[#A1A1AA] rounded-b-2xl">
        <div className="flex flex-row  pr-1/2 text-wrap">
          <Star />
          
          <p>{rating}</p>
        </div>
        <div className="w-34 text-wrap">
        <p>{name}</p>
        </div>
      </div>
    </div>
  );
};
