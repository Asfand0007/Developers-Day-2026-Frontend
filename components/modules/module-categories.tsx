"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import Image from "next/image";
import { motion } from "framer-motion";

import ModuleCard from "./module-card";

export default function ModuleCategories() {
  const modules = [
    {
      id: "coding-competitions",
      icon: (
        <Image alt="Coding" height={32} src="/icons/coding.svg" width={32} />
      ),
      title: "CORE CODING",
      description:
        "Solve algorithmic challenges and compete in real-time coding competitions.",
      code: "C_01",
      url: "/modules/coding",
    },
    {
      id: "software-engineering",
      icon: (
        <Image
          alt="Software"
          height={32}
          src="/icons/software.svg"
          width={32}
        />
      ),
      title: "SOFTWARE ENGINEERING",
      description:
        "Architecting resilient systems that withstand the pressure of high-throughput operations.",
      code: "C_02",
      url: "/modules/software-eng",
    },
    {
      id: "tech-quest",
      icon: <Image alt="Tech" height={32} src="/icons/tech.svg" width={32} />,
      title: "TECH QUEST",
      description: "Exploration and tech testing platform digital innovations.",
      code: "C_03",
      url: "/modules/tech-quest",
    },
    {
      id: "dev-design",
      icon: <Image alt="Build" height={32} src="/icons/dev.svg" width={32} />,
      title: "DEV & DESGIN",
      description:
        "Stress-testing structures through adversarial design and deconstruction.",
      code: "C_04",
      url: "/modules/dev-design",
    },
    {
      id: "ai-data",
      icon: <Image alt="AI" height={32} src="/icons/ai.svg" width={32} />,
      title: "AI & DATA SCIENCE",
      description:
        "Deep neural modeling and predictive analytics processing vast datasets logic warfare.",
      code: "C_05",
      url: "/modules/ai-data",
    },
    {
      id: "general",
      icon: <Image alt="AI" height={32} src="/icons/general.svg" width={32} />,
      title: "GENERAL",
      description:
        "Deep neural modeling and predictive analytics processing vast datasets logic warfare.",
      code: "C_06",
      url: "/modules/general",
    },
    {
      id: "electrical-eng",
      icon: (
        <Image alt="AI" height={32} src="/icons/electrical.svg" width={32} />
      ),
      title: "ELECTRICAL ENGINEERING",
      description:
        "Deep neural modeling and predictive analytics processing vast datasets logic warfare.",
      code: "C_07",
      url: "/modules/electrical-eng",
    },
    {
      id: "business",
      icon: <Image alt="AI" height={32} src="/icons/business.svg" width={32} />,
      title: "BUSINESS",
      description:
        "Deep neural modeling and predictive analytics processing vast datasets logic warfare.",
      code: "C_08",
      url: "/modules/business",
    },
  ];

  return (
    <section className="bg-dark-red text-white py-16 md:py-24 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            MODULE_CATEGORIES
          </h2>
          <span className="bg-red-primary text-white text-xs font-mono px-3 py-1">
            V2
          </span>
        </motion.div>

        {/* Red divider — scales in from left */}
        <motion.div
          className="h-0.5 bg-red-primary mb-8"
          initial={{ scaleX: 0 }}
          style={{ originX: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ scaleX: 1 }}
        />

        {/* Module Grid — staggered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.code}
              initial={{ opacity: 0, y: 40 }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, margin: "-60px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <ModuleCard {...module} />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          className="flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          {/* <Button
            as={Link}
            className="bg-red-primary hover:bg-red-700 text-white font-bold px-6 py-3"
            href="/modules"
            radius="none"
          >
            VISIT:_ALL_MODULES
          </Button> */}
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-red-primary rounded-none" />
            <div className="w-2 h-2 bg-red-primary rounded-none" />
            <div className="w-2 h-2 bg-red-primary rounded-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
