"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./Button";
import { Moon, Sun, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "./Container";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 bg-background/80 backdrop-blur-md shadow-sm"
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
            className="text-[34px] font-bold font-sporting-grotesque"
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
          <Link
            href="#"
            className="hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
          >
            Home
          </Link>
          <Link
            href="#"
            className="hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
          >
            About
          </Link>
          <Link
            href="#"
            className="hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
          >
            Portfolio
          </Link>
          <Link
            href="#"
            className="hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
          >
            Blog
          </Link>
          {/* <Button icon={} size="md">
            Start Project
          </Button> */}
          <div className="flex">
            <Button
              size="sm"
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
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linejoin="round"
                  />
                </svg>
              }
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
              <Link
                href="#"
                className="py-2 hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="#"
                className="py-2 hover:text-foreground/70 transition-colors font-sporting-grotesque text-[16px]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Button
                icon={<ArrowRight size={20} />}
                size="sm"
                onClick={() => setMobileMenuOpen(false)}
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
