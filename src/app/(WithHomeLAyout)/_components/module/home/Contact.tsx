"use client";

import { Button } from "../../ui/Button";
import Container from "../../ui/Container";
import { DynamicTitle } from "../../ui/DynamicTitle";
import SectionButton from "../../ui/SectionButton";
import { useState } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form after successful submission
    setFormData({ name: "", email: "", project: "" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <Container className="relative py-16 md:py-24 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row gap-12 md:gap-16 relative z-10"
      >
        {/* Left Column - Content */}
        <motion.div
          variants={itemVariants}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full md:w-1/2 flex flex-col justify-center space-y-8"
        >
          <motion.div variants={itemVariants}>
            <SectionButton variant="light" targetSection="home">
              Contact
            </SectionButton>
          </motion.div>

          <motion.div variants={itemVariants}>
            <DynamicTitle
              text="Interested in work together?"
              highlightedParts={[{ text: "work", delay: 0.5 }]}
              lineBreakAfter={["in"]}
              className="mb-6"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-foreground text-lg leading-relaxed max-w-md"
          >
            We start every new client interaction with an in-depth discovery
            call where we get to know each other
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button
              variant="light"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.97 16.33C19.97 16.69 19.89 17.06 19.72 17.42C19.55 17.78 19.33 18.12 19.04 18.44C18.55 18.98 18.01 19.37 17.4 19.62C16.8 19.87 16.15 20 15.45 20C14.43 20 13.34 19.76 12.19 19.27C11.04 18.78 9.89 18.12 8.75 17.29C7.6 16.45 6.51 15.52 5.47 14.49C4.44 13.45 3.51 12.36 2.68 11.22C1.86 10.08 1.2 8.94 0.72 7.81C0.24 6.67 0 5.58 0 4.54C0 3.86 0.12 3.21 0.36 2.61C0.6 2 0.98 1.44 1.51 0.94C2.15 0.31 2.85 0 3.59 0C3.87 0 4.15 0.0600001 4.4 0.18C4.66 0.3 4.89 0.48 5.07 0.74L7.39 4.01C7.57 4.26 7.7 4.49 7.79 4.71C7.88 4.92 7.93 5.13 7.93 5.32C7.93 5.56 7.86 5.8 7.72 6.03C7.59 6.26 7.4 6.5 7.16 6.74L6.4 7.53C6.29 7.64 6.24 7.77 6.24 7.93C6.24 8.01 6.25 8.08 6.27 8.16C6.3 8.24 6.33 8.3 6.35 8.36C6.53 8.69 6.84 9.12 7.28 9.64C7.73 10.16 8.21 10.69 8.73 11.22C9.27 11.75 9.79 12.24 10.32 12.69C10.84 13.13 11.27 13.43 11.61 13.61C11.66 13.63 11.72 13.66 11.79 13.69C11.87 13.72 11.95 13.73 12.04 13.73C12.21 13.73 12.34 13.67 12.45 13.56L13.21 12.81C13.46 12.56 13.7 12.37 13.93 12.25C14.16 12.11 14.39 12.04 14.64 12.04C14.83 12.04 15.03 12.08 15.25 12.17C15.47 12.26 15.7 12.39 15.95 12.56L19.26 14.91C19.52 15.09 19.7 15.3 19.81 15.55C19.91 15.8 19.97 16.05 19.97 16.33Z"
                    fill="currentColor"
                  />
                </svg>
              }
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              Schedule a Call
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Column - Form */}
        <motion.div
          variants={formVariants}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2"
        >
          <motion.div
            className="bg-black p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-y-16 translate-x-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-12 -translate-x-12" />

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <motion.input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300 text-lg"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <motion.input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors duration-300 text-lg"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.textarea
                  name="project"
                  placeholder="Describe your project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-gray-600 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-white resize-none transition-colors duration-300 text-lg"
                  rows={3}
                  required
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row items-center gap-6 pt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative overflow-hidden flex items-center cursor-pointer ring-1 ring-white rounded-full font-medium pr-3 py-2 text-[18px] gap-1.5 bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={
                    !isSubmitting
                      ? {
                          scale: 1.05,
                          boxShadow:
                            "0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px white",
                        }
                      : {}
                  }
                  whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {/* Icon */}
                  <motion.span
                    className="flex items-center justify-center rounded-full ring-1 ring-white mr-2 p-1 size-8 bg-transparent text-white"
                    whileHover={
                      !isSubmitting ? { rotate: [0, -15, 15, -10, 10, 0] } : {}
                    }
                    whileTap={!isSubmitting ? { scale: 1.2 } : {}}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-full h-full flex items-center justify-center"
                      >
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      </motion.div>
                    ) : (
                      <motion.svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path
                          d="M6.03786 11.496L5.2439 9.13895C5.02737 8.48823 4.52212 7.96765 3.85808 7.75074L1.50508 6.95541C-0.530334 6.27576 -0.487029 3.41257 1.54839 2.77631L10.1376 0.101104C11.841 -0.419476 13.4289 1.15672 12.8948 2.84861L10.2242 11.4671C9.58902 13.4916 6.71633 13.5205 6.03786 11.496Z"
                          fill="white"
                        />
                      </motion.svg>
                    )}
                  </motion.span>

                  {/* Text */}
                  <span className="text-white">
                    {isSubmitting ? "Sending..." : "Send"}
                  </span>
                </motion.button>

                <span className="text-gray-400 text-lg">or</span>

                <motion.button
                  type="button"
                  className="relative overflow-hidden flex items-center cursor-pointer ring-1 ring-white rounded-full font-medium pr-3 py-2 text-[18px] gap-1.5 bg-transparent text-white hover:bg-white/10 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px white",
                  }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {/* Icon */}
                  <motion.span
                    className="flex items-center justify-center rounded-full ring-1 ring-white mr-2 p-1 size-8 bg-transparent text-white"
                    whileHover={{ rotate: [0, -15, 15, -10, 10, 0] }}
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15 }}
                  >
                    <motion.svg
                      width="16"
                      height="13"
                      viewBox="0 0 16 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path
                        d="M12 0H4C1.6 0 0 1.14706 0 3.82353V9.17647C0 11.8529 1.6 13 4 13H12C14.4 13 16 11.8529 16 9.17647V3.82353C16 1.14706 14.4 0 12 0ZM12.376 4.65706L9.872 6.56882C9.344 6.97412 8.672 7.17294 8 7.17294C7.328 7.17294 6.648 6.97412 6.128 6.56882L3.624 4.65706C3.368 4.45824 3.328 4.09118 3.528 3.84647C3.736 3.60176 4.112 3.55588 4.368 3.75471L6.872 5.66647C7.48 6.13294 8.512 6.13294 9.12 5.66647L11.624 3.75471C11.88 3.55588 12.264 3.59412 12.464 3.84647C12.672 4.09118 12.632 4.45824 12.376 4.65706Z"
                        fill="white"
                      />
                    </motion.svg>
                  </motion.span>

                  {/* Text */}
                  <span className="text-white">Contact me</span>
                </motion.button>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 pt-8 border-t border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <span className="text-gray-500 text-[18px]">@williamnxy</span>
                <div className="h-[2px] w-[25px] bg-gray-600"></div>
                <div className="flex items-center gap-4">
                  {[
                    {
                      name: "Facebook",
                      path: "M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z",
                    },
                    {
                      name: "Instagram",
                      path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z",
                    },
                    {
                      name: "Twitter",
                      path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
                    },
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href="#"
                      className="text-white hover:text-gray-300 transition-colors p-2 rounded-full hover:bg-white/10"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d={social.path} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Background SVG with animation */}
      <motion.svg
        width="1440"
        height="809"
        viewBox="0 0 1440 809"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute hidden md:block -bottom-12 left-0 w-full pointer-events-none"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <g filter="url(#filter0_f_90_80)">
          <path
            d="M0 741.001L1440 741.001V560.416C954.097 361.07 867.037 67.9999 339.48 68C197.399 68 86.0873 78.9897 0 98.1605V741.001Z"
            fill="url(#paint0_radial_90_80)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_90_80"
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
              result="effect1_foregroundBlur_90_80"
            />
          </filter>
          <radialGradient
            id="paint0_radial_90_80"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(699.031 1171.9) rotate(-110.66) scale(1290.58 7625.52)"
          >
            <stop offset="0.223958" stopColor="#CCFF02" />
            <stop offset="0.651042" stopColor="#59FFCD" stopOpacity="0" />
            <stop offset="1" stopColor="#161616" stopOpacity="0" />
          </radialGradient>
        </defs>
      </motion.svg>
    </Container>
  );
};
