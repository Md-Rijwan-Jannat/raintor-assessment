"use client";

import { motion } from "framer-motion";
import { DynamicTitle } from "@/app/(WithHomeLAyout)/_components/ui/DynamicTitle";
import SectionButton from "@/app/(WithHomeLAyout)/_components/ui/SectionButton";
import Container from "../../ui/Container";
import WorkedOn from "./WorkedOn";

export const About = () => {
  return (
    <Container className="relative w-full overflow-hidden bg-background">
      {/* SVG Background */}
      <svg
        className="absolute -top-20 left-0 w-full pointer-events-none"
        width="1440"
        height="809"
        viewBox="0 0 1440 809"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g filter="url(#filter0_f_90_221)">
          <path
            d="M1440 68.0001L0 68.0006V248.585C485.903 447.932 572.963 741.002 1100.52 741.001C1242.6 741.001 1353.91 730.012 1440 710.841V68.0001Z"
            fill="url(#paint0_radial_90_221)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_90_221"
            x="-68"
            y="0"
            width="1576"
            height="809.001"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="34"
              result="effect1_foregroundBlur_90_221"
            />
          </filter>
          <radialGradient
            id="paint0_radial_90_221"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(740.969 -362.899) rotate(69.3397) scale(1290.58 7625.52)"
          >
            <stop offset="0.223958" stopColor="#CCFF02" />
            <stop offset="0.651042" stopColor="#59FFCD" stopOpacity="0" />
            <stop offset="1" stopColor="#161616" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="relative -mt-3 sm:-mt-4 md:-mt-5">
        <div className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-[100px]">
          {/* Section Button and Content */}
          <div className="max-w-[1079px] mx-auto w-full">
            <div className="flex justify-center sm:justify-end mb-4 sm:mb-6 md:mb-8">
              <SectionButton variant="light" targetSection="process">
                About
              </SectionButton>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8 sm:mb-12 md:mb-16 flex flex-col items-center justify-end"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-3 w-full"
              >
                <DynamicTitle
                  text="I've been Developing Websites since 2013"
                  highlightedParts={[
                    { text: "Developing", delay: 0.3 },
                    { text: "2013", delay: 0.6 },
                  ]}
                  lineBreakAfter={["Developing"]}
                  className="text-center sm:text-end"
                />
              </motion.div>

              <p className="max-w-[650px] mt-3 sm:mt-4 md:mt-6 text-xs sm:text-sm md:text-base leading-4 sm:leading-5 md:leading-6 text-center text-foreground/80">
                We start every new client interaction with an in-depth discovery
                call where we get to know each other and recommend the best
                course of action.
              </p>
            </motion.div>
          </div>

          {/* Previously worked on section */}
          <WorkedOn />
        </div>
      </div>
    </Container>
  );
};
