"use client"; // Required for Next.js App Router

import { useState, useEffect } from "react";

const PrayerTimes = () => {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(null);
  const allowedPrayers = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
  // Function to convert 24-hour time to 12-hour format
  const convertTo12HourFormat = (time) => {
    const [hour, minute] = time.split(":").map(Number);
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for AM
    return `${formattedHour}:${minute.toString().padStart(2, "0")} ${period}`;
  };
  const prayerStyles = {
    Fajr: "lg:relative lg:right-[-70px] text-blue-700 bg-linear-to-r from-cyan-200 to-blue-300",
    Dhuhr: "bg-linear-to-r from-red-200 to-orange-300 text-red-500",
    Asr: "lg:relative lg:right-[-70px] text-green-700 bg-linear-to-r from-green-200 to-green-300",
    Maghrib: "bg-linear-to-r from-purple-200 to-purple-300 text-purple-700",
    Isha: "lg:relative lg:right-[-70px] bg-linear-to-r from-indigo-200 to-indigo-300 text-indigo-700",
  };

  useEffect(() => {
    // Function to get user's location
    const fetchLocation = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            try {
              // Fetch user's city & country using OpenStreetMap API
              const locationRes = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
              );
              const locationData = await locationRes.json();
              const { city, town, village, country } = locationData.address;
              setLocation({ city: city || town || village, country });

              // Fetch prayer times from Aladhan API
              const prayerRes = await fetch(
                `https://api.aladhan.com/v1/timings?latitude=${latitude}&longitude=${longitude}&method=2`
              );
              const prayerData = await prayerRes.json();
              setDate(prayerData.data.date.readable);
              // Convert times to 12-hour format
              const filteredTimes = Object.fromEntries(
                Object.entries(prayerData.data.timings)
                  .filter(([key]) => allowedPrayers.includes(key))
                  .map(([key, value]) => [key, convertTo12HourFormat(value)])
              );

              setPrayerTimes(filteredTimes);
            } catch (err) {
              setError("Failed to fetch data. Please try again.");
            } finally {
              setLoading(false);
            }
          },
          () => {
            setError("Location permission denied.");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported in this browser.");
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);
  console.log(prayerTimes);
  return (
    <>
      <section className="py-12 md:py-28 lg:py-36 xl:py-48 flex flex-col items-center lg:flex-row justify-between">
        <div className="space-y-4 my-4 text-center lg:text-left">
          <h2 className="font title text-3xl md:text-4xl lg:text-5xl">
            নামাজের সময়সূচী
          </h2>
          <span className="text-xl ">
            নামাজের সময় {location.city} {location.country}
            এর মধ্যে
          </span>
          <div className="text-xl text-[#28ADD5] underline my-4">{date}</div>
        </div>
        <div className="lg:w-1/2 w-full">
          {prayerTimes && (
            <div className="">
              <ul className="">
                {Object.entries(prayerTimes).map(([name, time]) => (
                  <li
                    key={name}
                    className={`flex justify-between mb-3 py-4 px-6 rounded-[10px]  text-xl xl:w-2/3 w-full ${
                      prayerStyles[name] || "bg-gray-500"
                    }`}
                  >
                    <span>{name}</span>

                    <span className="text-lg">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PrayerTimes;
