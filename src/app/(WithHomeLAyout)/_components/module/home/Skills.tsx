"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../../ui/Container";
import SectionButton from "../../ui/SectionButton";

export const Skills = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    // Set initial screen width
    setScreenWidth(window.innerWidth);

    // Update screen width on resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate slides per view based on screen width
  const getSlidesPerView = () => {
    if (screenWidth < 640) return 1;
    if (screenWidth < 768) return 1.5;
    return 3;
  };

  const skills = [
    {
      title: "HTML & CSS",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: (
        <svg
          width="99"
          height="99"
          viewBox="0 0 99 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="49.5"
            cy="49.5024"
            rx="48.5"
            ry="15"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="7" fill="#C5FF41" />
        </svg>
      ),
    },
    {
      title: "Javascript",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: (
        <svg
          width="99"
          height="99"
          viewBox="0 0 99 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="49.5"
            cy="49.5024"
            rx="48.5"
            ry="15"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="7" fill="#C5FF41" />
        </svg>
      ),
    },
    {
      title: "Webflow",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: (
        <svg
          width="99"
          height="99"
          viewBox="0 0 99 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="49.5"
            cy="49.5024"
            rx="48.5"
            ry="15"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="7" fill="#C5FF41" />
        </svg>
      ),
    },
    {
      title: "React",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate. Ut enim ad minim veniam, quis",
      icon: (
        <svg
          width="99"
          height="99"
          viewBox="0 0 99 99"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="49.5"
            cy="49.5024"
            rx="48.5"
            ry="15"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            strokeWidth="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            strokeWidth="2"
          />
          <circle cx="50" cy="50" r="7" fill="#C5FF41" />
        </svg>
      ),
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === skills.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? skills.length - 1 : prev - 1));
  };

  return (
    <div className="p-1 bg-transparent z-50">
      <Container className="px-4 sm:px-8 md:px-12 py-8 md:py-12 bg-black text-white rounded-3xl md:rounded-4xl overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <SectionButton targetSection="about">Why Choose me</SectionButton>
        </motion.div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-6 md:mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-[58px] font-bold mb-4 font-sporting-grotesque mt-8 md:mt-14">
              My Extensive
              <br />
              List of Skills
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-start md:items-end gap-3 mb-6 md:mb-0"
          >
            <p className="text-white/70 max-w-md text-start md:text-end border-b border-white/15 pb-4">
              Building the world&apos;s best marketing websites. Your trusted
              partner for strategy, design, and dev.
            </p>
            <div className="flex flex-row gap-4 mt-4 items-center">
              {" "}
              <button
                className="rounded-full p-1 sm:p-2 mr-2 hover:bg-white/5 transition-colors size-[45px] sm:size-[60px] flex items-center justify-center border border-white/30"
                onClick={prevSlide}
              >
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 37 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M37 12H1M1 12C4.94286 11.2727 12.8286 7.85455 12.8286 0M1 12C4.94286 12.7273 12.8286 16.1455 12.8286 24"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                className="rounded-full p-1 sm:p-2 hover:bg-white/5 transition-colors size-[45px] sm:size-[60px] flex items-center justify-center border border-white/30"
                onClick={nextSlide}
              >
                <svg
                  width="30"
                  height="20"
                  viewBox="0 0 37 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12H36M36 12C32.0571 11.2727 24.1714 7.85455 24.1714 0M36 12C32.0571 12.7273 24.1714 16.1455 24.1714 24"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        <div className="overflow-hidden py-6 sm:py-8 md:py-12 -mt-12 sm:-mt-16 md:-mt-24">
          <motion.div
            className="flex gap-4 sm:gap-6 md:gap-8 px-2 sm:px-3 md:px-4"
            animate={{
              x: `-${activeSlide * (100 / getSlidesPerView())}%`,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={`
                  min-w-[calc(100%-16px)] 
                  sm:min-w-[calc(66.66%-20px)] 
                  md:min-w-[calc(33.33%-24px)] 
                  bg-[#111111] 
                  rounded-xl sm:rounded-2xl 
                  p-4 sm:p-6 md:p-8 
                  transition-all duration-300 
                  relative 
                  ${
                    (index - activeSlide) % skills.length === 1
                      ? "sm:rotate-[5deg] sm:z-10 sm:scale-105"
                      : ""
                  }
                `}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(205, 255, 0, 0.2)",
                }}
              >
                <div className="mb-4 sm:mb-6 md:mb-8">{skill.icon}</div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-4 ${
                    index === activeSlide ? "sm:text-[#C5FF41]" : "text-white"
                  }`}
                >
                  {skill.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
