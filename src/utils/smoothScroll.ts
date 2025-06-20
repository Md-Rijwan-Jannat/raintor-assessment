import { animate } from "framer-motion";

interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  ease?: string | number[];
}

export const smoothScrollTo = (
  elementId: string,
  options: SmoothScrollOptions = {}
) => {
  const {
    duration = 1.2,
    offset = -80, // Account for navbar height
    ease = [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for professional feel
  } = options;

  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with id "${elementId}" not found`);
    return;
  }

  const targetPosition = element.offsetTop + offset;
  const startPosition = window.pageYOffset;

  // Use Framer Motion's animate function for smooth scrolling
  animate(startPosition, targetPosition, {
    duration,
    ease,
    onUpdate: (value) => {
      window.scrollTo(0, value);
    },
  });
};

export const scrollToTop = (options: SmoothScrollOptions = {}) => {
  const { duration = 1, ease = [0.25, 0.46, 0.45, 0.94] } = options;

  animate(window.pageYOffset, 0, {
    duration,
    ease,
    onUpdate: (value) => {
      window.scrollTo(0, value);
    },
  });
};

// Section mapping for navigation
export const sectionMap = {
  home: "hero",
  about: "about",
  portfolio: "skills", // Since you don't have a portfolio section, linking to skills
  blog: "process", // Since you don't have a blog section, linking to process
  contact: "contact",
  skills: "skills",
  process: "process",
} as const;

export type SectionKey = keyof typeof sectionMap;
