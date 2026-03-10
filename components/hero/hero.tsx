"use client";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { motion } from "framer-motion";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { Space_Grotesk } from "next/font/google";

import EventInfo from "./event-info";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Hero() {
  return (
    <section
      className={`${spaceGrotesk.className} relative lg:min-h-[calc(100vh-64px)] text-white py-8 md:py-8 px-4 overflow-x-hidden bg-[#191111]`}
    >
      {/* Background Image */}
      {/* Desktop Background */}
      <div className="hidden md:block absolute inset-0">
        <Image
          fill
          priority
          alt="Hero Background"
          className="object-cover"
          src="/hero-bg.png"
        />
      </div>

      {/* Mobile Background Left */}
      <div className="absolute inset-y-0 left-0 w-1/2 md:hidden opacity-70">
        <Image
          fill
          priority
          alt="Hero Background Left"
          className="object-cover object-left"
          src="/hero-bg-2.png"
        />
      </div>

      {/* Mobile Background Right */}
      <div className="absolute inset-y-0 right-0 w-1/2 md:hidden opacity-70">
        <Image
          fill
          priority
          alt="Hero Background Right"
          className="object-cover object-right"
          src="/hero-bg-1.png"
        />
      </div>

      <div className="mx-auto w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[80%] flex flex-col items-center justify-between">
        {/* Version Badge */}
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="inline-block border-1 border-[#D411114D] bg-[#D411110D] mb-2"
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-[#D71D22] text-[10px] sm:text-xs md:text-sm uppercase font-mono tracking-wider flex items-center justify-center py-1 px-2 sm:px-4">
            <svg
              className="flex-shrink-0"
              fill="none"
              height="8"
              viewBox="0 0 20 8"
              width="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect fill="#D41111" height="8" width="8" />
            </svg>

            <span className="truncate">System_Ready:_Version_20.26</span>
          </p>
        </motion.div>

        <div className="flex flex-col justify-between ">
          <div>
            <motion.h1
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl  md:leading-none font-bold text-center
                        "
              initial={{ opacity: 0, y: 50 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* bg-gradient-to-r from-white via-white via-[45%] to-[#f07878] 
            bg-clip-text text-transparent */}
              DEVELOPER&apos;S <br />
              DAY 2026
            </motion.h1>

            <div className="text-[#FFFFFFCC] py-4 flex items-center justify-between gap-2 border-t-1 border-[#39282880] border-b-1 font-light tracking-wide">
              <motion.div
                animate={{ scaleX: 1 }}
                className="w-8 sm:w-16 md:w-44 h-[1px] bg-[#39282880]"
                initial={{ scaleX: 0 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
              />
              <motion.p
                animate={{ opacity: 1, y: 0 }}
                className="text-xs sm:text-base md:text-lg lg:text-xl text-center flex-1"
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
              >
                BRUTE_LOGIC._REFINED_BY DESIGN.
              </motion.p>
              <motion.div
                animate={{ scaleX: 1 }}
                className="w-8 sm:w-16 md:w-44 h-[1px] bg-[#39282880]"
                initial={{ scaleX: 0 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.55, delay: 0.45, ease: "easeOut" }}
              />
            </div>
          </div>
          {/* Liberation Mono */}
          <div className="text-center py-2 text-sm text-[#D41111B2] uppercase tracking-widest font-mono">
            — The Ultimate Tech Fest Event —
          </div>

          {/* Event Time */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.85, ease: "easeOut" }}
          >
            <EventInfo />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 mx-auto"
            initial={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          >
            <Button
              as={Link}
              className="outline-[#D41111] outline-2 bg-[#D41111] hover:bg-red-700 text-base text-white py-7 px-8 w-full sm:w-72"
              endContent={<ArrowRightIcon className="w-5 h-5" />}
              href="/register"
              radius="none"
            >
              INITIALIZE_REGISTER
            </Button>
            <Button
              as={Link}
              className="outline-[#392828] outline-2 bg-transparent text-base text-white py-7 px-8 w-full sm:w-72"
              endContent={<Squares2X2Icon className="w-5 h-5" />}
              href="/modules"
              radius="none"
            >
              VIEW MODULES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
