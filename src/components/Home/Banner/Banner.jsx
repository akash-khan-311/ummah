import Image from "next/image";
import React from "react";
import girls from "@/app/assests/img-4.png";
import quran from "@/app/assests/quran.png";
import mosque from "@/app/assests/mosque.png";
import allah from "@/app/assests/allah.png";
import muhammad from "@/app/assests/muhammad-word.png";
import prayer from "@/app/assests/prayer.png";
import business from "@/app/assests/debt.png";
import Link from "next/link";
import Button from "../../shared/Button";

export default function Banner() {
  return (
    <header className="flex justify-between  items-center  h-screen ">
      {/* Text and title  */}
      <div className="xl:w-1/2 w-full ">
        <div className="flex">
          <span className="font subheading">চল ইসলামকে জানি </span>
          <span className="text-xl">😊</span>
        </div>
        <h1 className="banner-title py-2 text-4xl md:text-5xl lg:text-6xl xl:leading-[80px] md:leading-[60px] leading-[50px]">
          পড়! তোমার প্রভুর নামে , <br /> যিনি তোমাকে সৃষ্টি করেছেন
        </h1>
        <p className="mb-5">
          আমাদের আছে সেরা শিক্ষা প্রতিষ্টান । আসুন ইসলাম এবং হলি কুরআন সম্পর্কে
          জানি ।
        </p>

        <Button path={"/about"}>Discover More</Button>
      </div>
      {/* Image  */}
      <div className="w-1/2 hidden xl:block -mr-10">
        <div className="absolute top-[35%] z-10 w-[565px] h-[565px] ">
          <Image
            width={350}
            height={350}
            alt="muslim qeen"
            src={girls}
            className="relative -right-[50px] max-w-full  align-middle girls-animated"
          />
          <div className="absolute left-0 top-[-50px] w-[400px] h-[400px] md:w-[300px] md:h-[300px] lg:w-[565px] lg:h-[565px] z-[-1] before:border before:border-dashed before:border-[#4897aa] before:absolute before:content-[''] before:left-0 before:top-0 before:rounded-full  animated before:w-full before:h-full">
            {/* Icon-1 */}
            <div className="rounded-full bg-white w-[95px] h-[95px] absolute left-[-45px] text-center top-[50%] transform translate-y-[-50%] shadows leading-[95px]">
              <Image
                className="p-5"
                src={quran}
                alt="quran"
                height={100}
                width={100}
              />
            </div>
            {/* Icon-2 */}
            <div className="rounded-full bg-white w-[95px] h-[95px] absolute left-0 text-center top-[20%] transform translate-y-[-50%] shadows ">
              <Image
                className="p-5"
                src={mosque}
                alt="mosque"
                height={100}
                width={100}
              />
            </div>
            {/* Icon-3 */}
            <div className="rounded-full bg-white w-[95px] h-[95px] absolute left-[25%] text-center top-[5px] transform translate-y-[-50%] shadows ">
              <Image
                className="p-5"
                src={allah}
                alt="allah"
                height={100}
                width={100}
              />
            </div>
            {/* Icon-4 */}
            <div className="rounded-full bg-white w-[95px] h-[95px] absolute left-auto right-[25%]  text-center top-[5px] transform translate-y-[-50%] shadows ">
              <Image
                className="p-5"
                src={muhammad}
                alt="Muhammad"
                height={100}
                width={100}
              />
            </div>
            {/* Icon-5 */}
            <div className="rounded-full bg-white w-[95px] h-[95px] absolute right-0 left-auto   text-center top-[20%] transform translate-y-[-50%] shadows ">
              <Image
                className="p-5 "
                src={prayer}
                alt="prayer"
                height={100}
                width={100}
              />
            </div>
            {/* Icon-6 */}
            <div className="rounded-full bg-white w-[95px] h-[95px] absolute right-[-45px] left-auto   text-center top-[50%] transform translate-y-[-50%] shadows leading-[115px]">
              <Image
                className="p-5 "
                src={business}
                alt="business"
                height={100}
                width={100}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
