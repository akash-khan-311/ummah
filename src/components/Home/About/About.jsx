import Image from "next/image";
import React from "react";
import aboutImg from "@/app/assests/about2.png";
import Button from "@/components/shared/Button";

import VideoPopup from "@/components/shared/VideoPopup";

export default function About() {
  return (
    <section className="xl:mt-72 mt-10 flex flex-col items-center xl:flex-row ">
      <div className="lg:w-1/2 w-full">
        <Image src={aboutImg} alt="" />
      </div>
      <div className="xl:w-1/2 w-full xl:mt-0 mt-10 text-center lg:text-left">
        <span className="font subheading"> আমাদের সম্পর্কে </span>
        <h1 className="title text-2xl md:text-3xl lg:text-4xl">
          জ্ঞান অর্জন করা প্রত্যেক মুসলিমের জন্য কর্তব্য
        </h1>
        <p className="lg:my-16 my-4 ">
          চার দশকের মধ্যে মুসলিমদের সভ্যতার শীর্ষে উত্থান ঘটেছিল ইসলামের শিক্ষার
          উপর জোর দেওয়ার উপর ভিত্তি করে। কুরআন এবং নবী মুহাম্মদের হাদীসের দিকে
          একবার নজর দিলে এটি স্পষ্ট হয়ে ওঠে, যা শিক্ষা, শিক্ষা এবং পর্যবেক্ষণের
          উল্লেখে পরিপূর্ণ।
        </p>
        <div className="flex flex-col md:flex-row items-center gap-x-16">
          <Button path={"/about"}>Discover More</Button>
          <VideoPopup />
        </div>
      </div>
    </section>
  );
}
