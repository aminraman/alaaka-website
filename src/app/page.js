"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import AboutSection from "@/components/AboutSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import DonateSection from "@/components/DonateSection";
import PrayerTimesSection from "@/components/PrayerTimesSection";

export default function HomePage() {
  // Animation variant for sections
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <main className="font-sans text-gray-900 bg-white scroll-smooth">
      {/* HEADER SPACER */}
      <div className="h-12 md:h-12"></div>

      {/* HERO */}
      <motion.section
        id="hero"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative w-full min-h-[80vh] md:min-h-[90vh] flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-green-50 to-white px-6 md:px-12 py-10 md:py-20"
      >
        <div className="relative z-10 flex-1 text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-green-900 mb-4">
            Newark Central Masjid
          </h1>
          <p className="text-md md:text-lg text-gray-700 mb-6 italic">
            A home for prayer, learning, and unity under the{" "}
            <span className="font-semibold text-green-700">
              Alaaka Association of New Jersey
            </span>.
          </p>
          <p className="text-md md:text-lg text-gray-600 mb-8 leading-relaxed italic">
            The image shows what our beloved masjid will look like once{" "}
            <span className="font-semibold text-green-800">
              construction and renovation
            </span>{" "}
            are completed. Join hands with us to bring this vision to life by{" "}
            <span className="font-semibold text-yellow-600">
              supporting and donating today.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link
              href="https://gofund.me/c2e441d3"
              className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-md shadow hover:bg-yellow-500 transition"
            >
              Donate Now
            </Link>
            <a
              href="#prayer-times"
              className="bg-green-700 text-white font-semibold px-8 py-3 rounded-md shadow hover:bg-green-800 transition"
            >
              View Prayer Times
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative flex-1 mt-10 md:mt-0 md:ml-12 w-full">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-green-100 hover:scale-[1.02] transition-transform duration-500">
            <Image
              src="/images/hero6.jpg"
              alt="Newark Central Masjid Exterior Render"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <p className="text-center italic text-gray-700 mt-3 text-sm md:text-base ">
            Artist’s Impression – Future Look of the Masjid
          </p>
        </div>
      </motion.section>

      {/* CAROUSEL */}
      <motion.section
        id="carousel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative w-full bg-gray-50"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="w-full"
        >
          {[
            {
              src: "/images/hero5.jpg",
              title: "Community Iftar Nights",
              desc: "Join us every Ramadan evening for iftar, prayer, and brotherhood.",
            },
            {
              src: "/images/hero2.jpeg",
              title: "Youth Empowerment Programs",
              desc: "Helping the next generation stay rooted in faith and purpose.",
            },
            {
              src: "/images/hero3.jpg",
              title: "Weekly Classes & Lectures",
              desc: "Engage in continuous learning with our scholars and teachers.",
            },
            {
              src: "/images/hero10.jpg",
              title: "Alaaka Association",
              desc: "Our Imams and Leaders ",
            },
          ].map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full h-[60vh] md:h-[75vh] cursor-pointer select-none">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-75"
                />
                {/* Left click zone */}
                <div
                  className="absolute left-0 top-0 h-full w-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.target.closest(".swiper")?.swiper.slidePrev();
                  }}
                ></div>
                {/* Right click zone */}
                <div
                  className="absolute right-0 top-0 h-full w-1/2"
                  onClick={(e) => {
                    e.stopPropagation();
                    e.target.closest(".swiper")?.swiper.slideNext();
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-md text-gray-200 max-w-2xl">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>

      {/* PRAYER TIMES */}
      <motion.section
        id="prayer-times"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <PrayerTimesSection />
      </motion.section>

      {/* ABOUT */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <AboutSection />
      </motion.section>

      {/* EVENTS */}
      <motion.section
        id="events"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <EventsSection />
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <ContactSection />
      </motion.section>

      {/* DONATE */}
      <motion.section
        id="donate"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <DonateSection />
      </motion.section>
    </main>
  );
}
