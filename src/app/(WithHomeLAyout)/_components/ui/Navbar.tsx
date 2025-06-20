"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";
import {
  smoothScrollTo,
  sectionMap,
  type SectionKey,
} from "@/utils/smoothScroll";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Handle scroll effect and active section tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Track active section
      const sections = ["hero", "skills", "about", "process", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation clicks
  const handleNavClick = (sectionKey: SectionKey) => {
    const sectionId = sectionMap[sectionKey];
    smoothScrollTo(sectionId, {
      duration: 1.2,
      offset: theme === "dark" ? -100 : -80,
      ease: [0.25, 0.46, 0.45, 0.94],
    });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md shadow-sm"
          : "py-4 bg-transparent"
      }`}
    >
      <Container className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="text-[20px] md:text-[34px] font-bold font-sporting-grotesque"
          >
            DEVLOP.ME
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex items-center space-x-8"
        >
          <motion.button
            onClick={() => handleNavClick("home")}
            className={`hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] relative ${
              activeSection === "hero" ? "text-primary font-bold" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Home
            {activeSection === "hero" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeNavIndicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          <motion.button
            onClick={() => handleNavClick("about")}
            className={`hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] relative ${
              activeSection === "about" ? "text-primary font-bold" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About
            {activeSection === "about" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeNavIndicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          <motion.button
            onClick={() => handleNavClick("portfolio")}
            className={`hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] relative ${
              activeSection === "skills" ? "text-primary font-bold" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
            {activeSection === "skills" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeNavIndicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>

          <motion.button
            onClick={() => handleNavClick("blog")}
            className={`hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] relative ${
              activeSection === "process" ? "text-primary font-bold" : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Blog
            {activeSection === "process" && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                layoutId="activeNavIndicator"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
          {/* <Button icon={} size="md">
            Start Project
          </Button> */}
          <div className="flex">
            <Button
              size="sm"
              variant="light"
              icon={
                <svg
                  width="23"
                  height="15"
                  viewBox="0 0 23 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7.5H22M22 7.5C19.5905 7.04545 14.7714 4.90909 14.7714 0M22 7.5C19.5905 7.95455 14.7714 10.0909 14.7714 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              onClick={() => handleNavClick("contact")}
            >
              Start Project
            </Button>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors hidden md:block"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-foreground" />
            ) : (
              <Moon size={20} className="text-foreground" />
            )}
          </button>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors hidden"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun size={20} className="text-foreground" />
            ) : (
              <Moon size={20} className="text-foreground" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-foreground" />
            ) : (
              <Menu size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col space-y-4 p-4">
              <motion.button
                onClick={() => handleNavClick("home")}
                className={`py-2 hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] text-left ${
                  activeSection === "hero" ? "text-primary font-bold" : ""
                }`}
                whileTap={{ scale: 0.98 }}
              >
                Home
              </motion.button>

              <motion.button
                onClick={() => handleNavClick("about")}
                className={`py-2 hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] text-left ${
                  activeSection === "about" ? "text-primary font-bold" : ""
                }`}
                whileTap={{ scale: 0.98 }}
              >
                About
              </motion.button>

              <motion.button
                onClick={() => handleNavClick("portfolio")}
                className={`py-2 hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] text-left ${
                  activeSection === "skills" ? "text-primary font-bold" : ""
                }`}
                whileTap={{ scale: 0.98 }}
              >
                Portfolio
              </motion.button>

              <motion.button
                onClick={() => handleNavClick("blog")}
                className={`py-2 hover:text-foreground/70 transition-all cursor-pointer duration-300 font-sporting-grotesque text-[16px] text-left ${
                  activeSection === "process" ? "text-primary font-bold" : ""
                }`}
                whileTap={{ scale: 0.98 }}
              >
                Blog
              </motion.button>
              <Button
                icon={<ArrowRight size={20} />}
                size="sm"
                onClick={() => handleNavClick("contact")}
              >
                Start Project
              </Button>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-foreground/10 transition-colors hidden"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun size={20} className="text-foreground" />
                ) : (
                  <Moon size={20} className="text-foreground" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
