"use client";

import { motion } from "framer-motion";
import { DynamicTitle } from "@/app/(WithHomeLAyout)/_components/ui/DynamicTitle";
import SectionButton from "@/app/(WithHomeLAyout)/_components/ui/SectionButton";
import Container from "../../ui/Container";
import WorkedOn from "./WorkedOn";

export const About = () => {
  return (
    <section className="relative -mt-5 mx-auto w-full overflow-hidden h-full">
      {/* SVG Background */}
      <svg
        className="absolute -z-20 -top-[50px] md:-top-[120px] left-0 w-full h-full"
        width="1440"
        height="809"
        viewBox="0 0 1440 809"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
            <stop offset="0.223958" stop-color="#CCFF02" />
            <stop offset="0.651042" stop-color="#59FFCD" stop-opacity="0" />
            <stop offset="1" stop-color="#161616" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <Container className="">
        {/* Section Button in top right */}
        <div
          style={{ marginTop: "100px" }}
          className="max-w-[1079px] mx-auto w-full"
        >
          <div className="flex justify-end mb-8">
            <SectionButton variant="light" className="text-black">
              About
            </SectionButton>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 flex flex-col items-center justify-end"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <DynamicTitle
                text="I've been Developing Websites since 2013"
                highlightedParts={[
                  { text: "Developing", delay: 0.3 },
                  { text: "2013", delay: 0.6 },
                ]}
                lineBreakAfter={["Developing"]}
                className="text-end"
              />
            </motion.div>

            <p
              className="max-w-[650px]
            mt-3 text-sm text-center md:text-base"
            >
              We start every new client interaction with an in-depth discovery
              call where we get to know each other and recommend the best course
              of action.
            </p>
          </motion.div>
        </div>
        {/* Previously worked on section */}
        <WorkedOn />
      </Container>
    </section>
  );
};
