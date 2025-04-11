
const catigory:string[]=["Appetizers","Salads","Pizzas","Lunch favorites","Main dishes","Fish & Sea foods","Side dish","Brunch","Desserts","salads"]
export const Categories=()=>{
    return(
        <div className="flex  flex-col gap-10 pt-8 pb-8 p-12 " >
          <p className="text-[#FFFFFF] font-bold pl-10">Appetizers</p>
          <div className="flex flex-row gap-2 ">
            {
              catigory.map((item,indx)=>{
                return(
                  <button className="pt-2 pb-2 p-5 rounded-full bg-white text-black text-sm" key={indx}>{item}</button>
                )
              })
            }
          </div>
        </div>
    )
}