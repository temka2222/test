import { Logo } from "./filmlogo";
import { Moon } from "./moon";
export const Navigation = () => {
  return (
    <div className="w-[100%] flex flex-row justify-between p-4 ">
      <div className="flex flex-row gap-2 text-[#4338CA]">
        <Logo />
        <p>Movie Z</p>
      </div>
      <div className=" flex flex-row gap-3">
        <input
          className="w-14 h-9 border-solid border-white border  "
          type="select"
        ></input>
        <input
          className="w-95 h-9 flex  justify-center items-center border-solid border-white border"
          placeholder="Search ... "
        ></input>
      </div>
      <div>
        <div className="  w-4 h-4 border-solid border p-4 justify-center items-center ">
          <Moon />
        </div>
      </div>
    </div>
  );
};
