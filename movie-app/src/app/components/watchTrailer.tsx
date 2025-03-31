import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

  type setIndType = {

  setInd: (value: number) => void;
};  

export const Trailer=(name:string,rating:string,desc:string,id:number,{setInd}:setIndType)=>{

    return(
        <div className=" flex absolute z-10 pl-26  text-justify text-white">
                          <div className="flex flex-col justify-start items-start w-101 h-66 gap-4  ">
                            <p>Now Playing:</p>
                            <p className="font-bold text-4xl">{name}</p>
                            <div className="flex flex-row items-center">
                              <Star />
                              <p>{rating} </p>
                            </div>
                            <p>{desc} </p>
                            <div className="text-black">
                              <Button
                                onClick={() => {
                                  setInd(id);
                                }}
                                variant={"outline"}
                              >
                                {" "}
                                <ChevronRight /> Watch Trailer
                              </Button>
                            </div>
                          </div>
                        </div>
    )
}