"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingScreen from "./_components/ui/LoadingScreen";
import { Hero } from "./_components/module/home/Hero";
import { Skills } from "./_components/module/home/Skills";
import { About } from "./_components/module/home/About";
import { Contact } from "./_components/module/home/Contact";
import Process from "./_components/module/home/Process";
import Footer from "./_components/module/home/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  // Fallback timeout to ensure loading doesn't stay forever
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isLoading) {
        handleLoadingComplete();
      }
    }, 6000); // Maximum 6 seconds loading time

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            className="min-h-screen"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              staggerChildren: 0.1,
            }}
          >
            <motion.div
              id="hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Hero />
            </motion.div>

            <motion.div
              id="skills"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Skills />
            </motion.div>

            <motion.div
              id="about"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <About />
            </motion.div>

            <motion.div
              id="process"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Process />
            </motion.div>

            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Contact />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Footer />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
