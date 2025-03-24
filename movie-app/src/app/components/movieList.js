import { Star } from "./starLogo";
export const MovieList = ({ url, name, rating }) => {
  return (
    <div className="w-58 h-110 flex flex-col rounded-2">
      <img className="h-340" src={url}></img>
      <div className="flex flex-col h-24 bg-[#A1A1AA]">
        <div className="flex flex-row justify-items-start items-center">
          <Star />
          <p>{rating}</p>
        </div>

        <p>{name}</p>
      </div>
    </div>
  );
};
