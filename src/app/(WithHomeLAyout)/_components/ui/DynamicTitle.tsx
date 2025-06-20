"use client";
import { motion } from "framer-motion";
import React from "react";

interface HighlightedTextProps {
  text: string;
  delay?: number;
}

interface DynamicTitleProps {
  text: string;
  highlightedParts: HighlightedTextProps[];
  className?: string;
  lineBreakAfter?: string[];
}

const HighlightedText = ({ text, delay = 0.3 }: HighlightedTextProps) => {
  // Check if this is the "Develop." text to apply special styling
  const isDevelop = text.toLowerCase().includes("develop");

  return (
    <motion.span
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,1)" }}
      transition={{ delay, duration: 0.5 }}
      className={`text-white inline-block rounded-md md:rounded-xl ${
        isDevelop
          ? "px-6 py-3 md:px-8 md:py-4 mt-6 md:mt-8" // More padding and top margin for "Develop"
          : "px-6 py-2 md:px-8 md:py-3" // Increased padding for other highlighted text
      }`}
    >
      {text}
    </motion.span>
  );
};

export const DynamicTitle = ({
  text,
  highlightedParts,
  className = "",
  lineBreakAfter = [],
}: DynamicTitleProps) => {
  // Split the text by highlighted parts
  const renderTitle = () => {
    const result: React.ReactNode[] = [];
    let currentIndex = 0;

    // Sort highlighted parts by their position in the text
    const sortedHighlights = [...highlightedParts].sort((a, b) => {
      const posA = text.indexOf(a.text);
      const posB = text.indexOf(b.text);
      return posA - posB;
    });

    // Process each highlighted part
    sortedHighlights.forEach((highlight, index) => {
      const highlightPos = text.indexOf(highlight.text, currentIndex);

      if (highlightPos >= currentIndex) {
        // Add text before the highlight
        const beforeText = text.substring(currentIndex, highlightPos);
        if (beforeText) {
          // Check if the beforeText contains any words that need line breaks after them
          let processedText = beforeText;

          // Special handling for specific words that need line breaks
          lineBreakAfter.forEach((word) => {
            if (beforeText.includes(word)) {
              const parts = processedText.split(word);
              if (parts.length > 1) {
                processedText = parts[0] + word;
                result.push(
                  <React.Fragment key={`text-${index}`}>
                    {processedText}
                    <br />
                    {parts.slice(1).join(word)}
                  </React.Fragment>
                );
                return;
              }
            }
          });

          // If no special handling was applied, add the text normally
          if (processedText === beforeText) {
            result.push(
              <React.Fragment key={`text-${index}`}>
                {beforeText}
              </React.Fragment>
            );
          }
        }

        // Add the highlighted part
        result.push(
          <HighlightedText
            key={`highlight-${index}`}
            text={highlight.text}
            delay={highlight.delay}
          />
        );

        // Check if we need a line break after this highlighted part
        if (lineBreakAfter.includes(highlight.text)) {
          result.push(<br key={`br-${index}`} />);
        }

        // Update current index
        currentIndex = highlightPos + highlight.text.length;
      }
    });

    // Add any remaining text
    if (currentIndex < text.length) {
      const remainingText = text.substring(currentIndex);
      result.push(
        <React.Fragment key="text-end">{remainingText}</React.Fragment>
      );
    }

    return result;
  };

  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-[78px] font-bold leading-tight md:leading-[90px] font-sporting-grotesque tracking-tighter ${className}`}
      style={{
        fontFamily:
          "Sporting Grotesque, var(--font-sporting-grotesque), sans-serif",
      }}
    >
      {renderTitle()}
    </h1>
  );
};
