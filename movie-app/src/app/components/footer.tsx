
import { EmailIcon } from "./Icons/emailIcon"
import { FtrLogo } from "./Icons/FooterLogo"

export const Footer=()=>{
    return(
        <div className=" w-full flex lg:flex-row flex-col lg:justify-between gap-12 text-white pt-10 pb-10 pr-20 pl-20  bg-[#4338CA]">
            <div className="flex flex-col justify-start ">
                <div className="flex flex-row gap-3">
                    <FtrLogo/>
              <p>Movie Z</p>
                </div>
             
              <p>© 2024 Movie Z. All Rights Reserved.</p>
            </div>
            <div className="lg:w-2/3 w-full flex flex-row gap-30 lg:justify-end justify-between  items-start">
            <div className=" flex flex-col gap-3 justify-start items-start">
                <p>Contact Information</p>
                <div className="flex flex-row items-center  gap-3">
                <EmailIcon/>
                <div >
                    <p>Email:</p>
                    <p>support@movieZ.com</p>
                </div>
                </div>
               <div className="flex flex-row items-center  gap-3">
                <EmailIcon/>
                <div>
                    <p>Phone:</p>
                    <p>+976 (11) 123-4567</p>
                </div>
                </div>
            </div>
            <div className=" flex flex-col gap-3"  >
                <p>Follow us </p>

               <div className="flex lg:flex-row flex-col gap-3">
               <p>Facebook</p>  
               <p>Instagram</p>
               <p>Youtube</p>
               <p> Twitter  </p>
               </div>
            </div>
            </div>
        </div>
    )
}