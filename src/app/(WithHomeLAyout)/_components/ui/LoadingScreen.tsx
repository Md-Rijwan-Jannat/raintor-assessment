"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    "Initializing Experience",
    "Loading Components",
    "Preparing Interface",
    "Almost Ready",
    "Welcome!",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 800);

    return () => clearInterval(stepInterval);
  }, [steps.length]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-background"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Background Gradient Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background:
                "linear-gradient(45deg, rgba(184, 255, 6, 0.1), rgba(196, 255, 236, 0.1), rgba(184, 255, 6, 0.05), rgba(196, 255, 236, 0.15))",
              backgroundSize: "400% 400%",
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => {
            // Define different shades and variations
            const colors = [
              "linear-gradient(45deg, #B8FF06, #C4FFEC)", // Main colors
              "linear-gradient(45deg, #C4FFEC, #B8FF06)", // Reversed
              "linear-gradient(45deg, #A3E005, #B0F2E0)", // Darker shades
              "linear-gradient(45deg, #B0F2E0, #A3E005)", // Darker reversed
              "linear-gradient(45deg, #CDFF3A, #D7FFF0)", // Lighter shades
              "linear-gradient(45deg, #D7FFF0, #CDFF3A)", // Lighter reversed
            ];

            return (
              <motion.div
                key={i}
                className="absolute w-20 h-20 rounded-full blur-xl opacity-30"
                style={{
                  background: colors[i % colors.length],
                }}
                animate={{
                  x: [
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                    Math.random() * window.innerWidth,
                  ],
                  y: [
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                    Math.random() * window.innerHeight,
                  ],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 8 + i * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center space-y-8 max-w-md mx-auto px-6">
          {/* Logo/Brand Area */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="w-24 h-24 mx-auto rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(45deg, #B8FF06, #C4FFEC)",
            }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-12 h-12 border-4 border-white border-t-transparent rounded-full"
            />
          </motion.div>

          {/* Loading Text */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl font-bold font-sporting-grotesque"
              style={{
                background: "linear-gradient(45deg, #B8FF06, #C4FFEC)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Loading
            </motion.h1>

            {/* Step Indicator */}
            <AnimatePresence mode="wait">
              <motion.p
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="text-muted-foreground text-lg"
              >
                {steps[currentStep]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="space-y-3">
            <div className="w-full bg-border rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(45deg, #B8FF06, #C4FFEC)",
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-muted-foreground font-mono"
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Pulse Animation */}
          <motion.div
            className="absolute -inset-4 rounded-full opacity-20 -z-10"
            style={{
              background: "linear-gradient(45deg, #B8FF06, #C4FFEC)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.1, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Bottom Dots Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  index <= currentStep
                    ? "linear-gradient(45deg, #B8FF06, #C4FFEC)"
                    : "var(--border)",
              }}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
