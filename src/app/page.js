import About from "@/components/Home/About/About";
import Banner from "@/components/Home/Banner/Banner";
import PrayerTimes from "@/components/Home/PrayerTimes/PrayerTimes";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" ">
      <Banner />
      <About />
      <PrayerTimes />
    </div>
  );
}
