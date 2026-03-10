"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ReconLogs() {
  return (
    <section className="bg-dark-red text-white py-16 md:py-24 px-4 overflow-x-hidden">
      <div className="container mx-auto">
        {/* V3 Badge */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1 inline-block">
            V3
          </span>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 35 }}
          transition={{
            duration: 0.65,
            delay: 0.05,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 p-2">
            RECON_LOGS: _DEVDAY&apos;25
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            DEVDAY&apos;25 WAS A MASSIVE SUCCESS, WITNESSING EXCEPTIONAL
            PARTICIPATION, INNOVATIVE SOLUTIONS, INTENSE COMPETITION, AND
            OVERWHELMING COMMUNITY ENGAGEMENT, SETTING A STRONG FOUNDATION FOR
            AN EVEN BIGGER DEVDAY&apos;26.
          </p>
        </motion.div>

        {/* Red divider */}
        <motion.div
          className="h-0.5 bg-red-primary mb-8"
          initial={{ scaleX: 0 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ scaleX: 1 }}
        />

        {/* Bento Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8 max-w-6xl mx-auto">
          {/* Large image — slides in from left */}
          <motion.div
            className="relative bg-dark-red-2 h-[400px] lg:h-[600px] overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-red-primary z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-primary z-10" />
            <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-mono px-2 py-1 z-10">
              01
            </div>
            <Image
              fill
              alt="DevDay 25 Event"
              className="object-cover"
              src="/recon_logs/img1.jpg"
            />
            <div className="absolute bottom-4 left-4 text-red-primary text-xs font-mono z-10">
              Timeline: 12-04-2025 // 8:00:00 AM PST
            </div>
          </motion.div>

          {/* Right column — two images slide in from right */}
          <div className="flex flex-col gap-4">
            <motion.div
              className="relative bg-dark-red-2 h-[290px] lg:h-[292px] overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-primary z-10" />
              <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-mono px-2 py-1 z-10">
                02
              </div>
              <Image
                fill
                alt="DevDay 25 Event"
                className="object-cover"
                src="/recon_logs/img2.jpg"
              />
            </motion.div>

            <motion.div
              className="relative bg-dark-red-2 h-[290px] lg:h-[292px] overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              transition={{
                duration: 0.75,
                delay: 0.22,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-80px" }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-red-primary z-10" />
              <div className="absolute top-4 right-2 bg-black/70 text-white text-xs font-mono px-2 py-1 z-10">
                03
              </div>
              <Image
                fill
                alt="DevDay 25 Event"
                className="object-cover"
                src="/recon_logs/img3.jpg"
              />
            </motion.div>
          </div>
        </div>

        {/* Footer Navigation */}
        <motion.div
          className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <span className="text-gray-500 text-sm font-mono">
            Status: Archived
          </span>
          <div className="flex gap-4">
            <Button
              as={Link}
              className="bg-transparent text-red-primary hover:text-red-700 font-mono text-sm"
              href="#"
              radius="none"
            >
              ← PREV_LINK
            </Button>
            <Button
              as={Link}
              className="bg-transparent text-red-primary hover:text-red-700 font-mono text-sm"
              href="#"
              radius="none"
            >
              NEXT_LINK →
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
