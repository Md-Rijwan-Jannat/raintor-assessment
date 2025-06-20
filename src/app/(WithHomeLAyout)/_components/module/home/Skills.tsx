"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../../ui/Container";

export const Skills = () => {
  const [activeSlide, setActiveSlide] = useState(0);

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
            stroke-width="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            stroke-width="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            stroke-width="2"
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
            stroke-width="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            stroke-width="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            stroke-width="2"
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
            stroke-width="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            stroke-width="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            stroke-width="2"
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
            stroke-width="2"
          />
          <ellipse
            cx="49.5001"
            cy="49.5024"
            rx="48.5"
            ry="15"
            transform="rotate(-60 49.5001 49.5024)"
            stroke="white"
            stroke-width="2"
          />
          <ellipse
            cx="49.4999"
            cy="49.5022"
            rx="48.5"
            ry="15"
            transform="rotate(60 49.4999 49.5022)"
            stroke="white"
            stroke-width="2"
          />
          <circle cx="50" cy="50" r="7" fill="#C5FF41" />
        </svg>
      ),
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === skills.length - 3 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? skills.length - 3 : prev - 1));
  };

  return (
    <div className="py-20">
      <Container className="p-10 bg-black text-white rounded-4xl">
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <button className="rounded-full border border-white/20 p-2 mr-2 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" onClick={prevSlide} />
            </button>
            <button className="rounded-full border border-white/20 p-2 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" onClick={nextSlide} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <button className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/10 transition-colors">
              Why Choose me
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Extensive
            <br />
            List of Skills
          </h2>
          <p className="text-white/70 max-w-md">
            Building the world&apos;s best marketing websites. Your trusted
            partner for strategy, design, and dev.
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${activeSlide * 33.33}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="min-w-[calc(33.33%-16px)] bg-black border border-white/10 rounded-lg p-6 hover:border-[#CDFF00]/50 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(205, 255, 0, 0.8)",
                  boxShadow: "0 0 15px rgba(205, 255, 0, 0.3)",
                }}
              >
                <div className="mb-6">{skill.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
                <p className="text-white/70">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </div>
  );
};
