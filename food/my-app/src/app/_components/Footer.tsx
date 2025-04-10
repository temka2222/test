"use client";
import { FbLogo } from "./imageAsset/FacebookLogo";
import { InstLogo } from "./imageAsset/InstagramIcon";
import { Logo } from "./imageAsset/Logo";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <div className="flex w-full h-150 overflow-hidden pr-22 pl-22 pt-10 pb-10 bg-black">
      <div className="flex w-[1440px] flex-row  absolute  bg-red-500 text-white gap-9 font-bold text-xl whitespace-nowrap  right-99 p-25 pt-7 pb-7">
        <motion.div
          animate={{ x: ["0%", "-9%", "-20%", "-30%", "-40%"] }}
          transition={{
            duration: 10,
            ease: "linear",
            repeat: Infinity,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
          className="flex flex-row"
        >
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
          <div className="px-6">Fresh fast delivered</div>
        </motion.div>
      </div>
      <div className="flex flex-row gap-55 pt-57">
        <div className=" flex flex-col gap-3">
          <Logo />
          <div>
            <p className="font-bold text-xl text-white">
              Nom<span className="text-red-500">Nom</span>
            </p>
            <p className="text-xs text-white">Swift delivery</p>
          </div>
        </div>
        <div className="flex flex-row gap-28 text-base text-white h-fit">
          <div className="flex flex-col gap-4 items-center">
            <p className="text-[#71717A]">MENU </p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-[#71717A]">NOMNOM </p>
            <p>Appetizers</p>
            <p>Salads</p>
            <p>Pizzas</p>
            <p>Main dishes</p>
            <p>Desserts</p>
          </div>
          <div className="flex flex-col gap-4 justify-end ">
            <p>Side dish </p>
            <p>Brunch</p>
            <p>Desserts</p>
            <p>Beverages</p>
            <p>Fish & Sea foods</p>
          </div>
          <div className="flex flex-col gap-4 ">
            <p className="text-[#71717A]">FOLLOW US </p>
            <div className="flex flex-row gap-4">
              <FbLogo />
              <InstLogo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
