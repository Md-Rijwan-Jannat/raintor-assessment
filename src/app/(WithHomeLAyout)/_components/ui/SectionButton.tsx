"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "light" | "dark"; // Added variants
}

export default function SectionButton({
  children,
  onClick,
  className = "",
  variant = "dark", // Default is dark
}: SectionButtonProps) {
  // Color styles based on variant
  const isDark = variant === "dark";
  const textColor = isDark ? "text-white" : "text-black";
  const bgColor = isDark ? "bg-transparent" : "bg-transparent";
  const ringColor = isDark ? "ring-white" : "ring-black";
  const iconStroke = isDark ? "white" : "black";
  const iconFill = isDark ? "white" : "black";

  return (
    <button
      onClick={onClick}
      className={`flex items-center text-[16px] rounded-full ${textColor} ${className}`}
    >
      {/* Optional Icon or SVG */}
      <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.99 }}>
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1"
            y="1"
            width="42"
            height="42"
            rx="21"
            stroke={iconStroke}
            strokeWidth="2"
          />
          <g clipPath="url(#clip0_90_259)">
            <path
              d="M16.79 22.3921L17.8014 21.3693L21.3525 24.9205V16L22.8298 16V24.9205L26.3753 21.3693L27.3923 22.3921L22.0912 27.6932L16.79 22.3921Z"
              fill={iconFill}
            />
          </g>
          <defs>
            <clipPath id="clip0_90_259">
              <rect
                width="12"
                height="12"
                fill="white"
                transform="translate(16 16)"
              />
            </clipPath>
          </defs>
        </svg>
      </motion.span>

      {/* Label with ring */}
      <span
        className={`ring-2 h-[40px] ${ringColor} ${bgColor} rounded-full flex items-center justify-center px-5 font-medium pb-1`}
      >
        {children}
      </span>
    </button>
  );
}
