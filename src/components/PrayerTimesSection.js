"use client";

import { useEffect, useState, useRef } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function PrayerTimesSection() {
  const [prayerData, setPrayerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const scrollToPrayerTimes = () => {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    window.scrollToPrayerTimes = scrollToPrayerTimes;
  }, []);

  useEffect(() => {
    async function fetchPrayerTimes() {
      try {
        const today = new Date();
        const results = [];

        for (let i = 0; i < 30; i++) {
          const date = new Date(today);
          date.setDate(today.getDate() + i);

          const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
          const res = await fetch(
            `https://api.aladhan.com/v1/timingsByCity/${formattedDate}?city=Newark&country=United%20States&method=2`
          );
          const data = await res.json();
          if (data?.data) results.push(data.data);
        }

        setPrayerData(results);
      } catch (err) {
        console.error("Failed to fetch prayer times:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchPrayerTimes();
  }, []);

  const formatTime = (time) => {
    if (!time) return "--:--";
    const [hour, minute] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const addTenMinutes = (time) => {
    if (!time) return "--:--";
    const [hour, minute] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hour);
    date.setMinutes(minute + 10);
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  const currentDay = prayerData[activeIndex];

  return (
    <section
      ref={sectionRef}
      id="prayer-times"
      className="relative py-20 bg-gradient-to-b from-green-100 via-green-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center text-green-900 mb-8">
          Prayer Times
        </h2>

        {loading ? (
          <p className="text-center text-lg text-gray-700">Loading prayer times...</p>
        ) : (
          <>
            {/* Swiper only for date selection */}
            <Swiper
              modules={[Pagination]}
              pagination={{ clickable: true }}
              slidesPerView={1}
              onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
              className="pb-10"
            >
              {prayerData.slice(0, 5).map((day, index) => (
                <SwiperSlide key={index}>
                  {/* Slide just updates the content below */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-green-800">
                      {day.date.gregorian.weekday.en} — {day.date.gregorian.date} /{" "}
                      {day.date.hijri.date}
                    </h3>
                    <p className="text-sm text-green-700">
                      {day.date.hijri.weekday.en}, {day.date.hijri.month.en}{" "}
                      {day.date.hijri.year}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Static Table below swiper */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="transition-all"
              >
                {currentDay && (
                  <>
                    {/* Sunrise / Sunset */}
                    <div className="flex justify-center gap-10 sm:gap-12 mb-6">
                      <div className="flex flex-col items-center">
                        <FaSun className="text-yellow-500 text-3xl mb-1" />
                        <span className="text-sm text-green-700">
                          Sunrise: {formatTime(currentDay.timings.Sunrise)}
                        </span>
                      </div>
                      <div className="flex flex-col items-center">
                        <FaMoon className="text-blue-400 text-3xl mb-1" />
                        <span className="text-sm text-green-700">
                          Sunset: {formatTime(currentDay.timings.Sunset)}
                        </span>
                      </div>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full text-center border-collapse text-green-900 text-sm sm:text-base bg-green-50/60 backdrop-blur-sm rounded-2xl shadow-sm">
                        <thead className="border-b border-green-300 bg-green-100/60">
                          <tr className="uppercase tracking-wide">
                            <th className="py-2 sm:py-3">Prayer</th>
                            <th className="py-2 sm:py-3">Adhan</th>
                            <th className="py-2 sm:py-3">Iqamah</th>
                          </tr>
                        </thead>
                        <tbody>
                          {["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"].map((p) => (
                            <tr key={p} className="border-b border-green-100">
                              <td className="py-2 sm:py-3 font-semibold">{p}</td>
                              <td>{formatTime(currentDay.timings[p])}</td>
                              <td>{addTenMinutes(currentDay.timings[p])}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Pagination dots repositioned below table */}
            <div className="flex justify-center mt-6 mb-4">
              <div className="swiper-pagination !static"></div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
