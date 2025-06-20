"use client";

import { motion } from "framer-motion";
import { Button } from "@/app/(WithHomeLAyout)/_components/ui/Button";

export const Experience = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            I&apos;ve been{" "}
            <span className="bg-black text-white px-2">Developing</span>
            <br />
            Websites since{" "}
            <span className="bg-black text-white px-2">2013</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="col-span-2 space-y-8"
          >
            <div className="relative pl-8 border-l border-foreground/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
              <p className="text-foreground/70 mb-2">2020 - Present</p>
              <p>
                Leading frontend development for enterprise clients, focusing on
                React, TypeScript, and modern CSS architectures.
              </p>
            </div>

            <div className="relative pl-8 border-l border-foreground/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold">Web Developer</h3>
              <p className="text-foreground/70 mb-2">2016 - 2020</p>
              <p>
                Developed responsive websites and web applications for clients
                across various industries.
              </p>
            </div>

            <div className="relative pl-8 border-l border-foreground/20">
              <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-primary"></div>
              <h3 className="text-xl font-bold">Freelance Developer</h3>
              <p className="text-foreground/70 mb-2">2013 - 2016</p>
              <p>
                Started my career as a freelance developer, working on small
                business websites and e-commerce projects.
              </p>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="p-6 bg-accent rounded-xl">
              <h3 className="text-4xl font-bold gradient-text">100+</h3>
              <p className="text-foreground/70">Projects Completed</p>
            </div>
            <div className="p-6 bg-accent rounded-xl">
              <h3 className="text-4xl font-bold gradient-text">10+</h3>
              <p className="text-foreground/70">Years Experience</p>
            </div>
            <div className="p-6 bg-accent rounded-xl">
              <h3 className="text-4xl font-bold gradient-text">50+</h3>
              <p className="text-foreground/70">Happy Clients</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 text-center">
          <Button size="lg">View Portfolio</Button>
        </div>
      </div>
    </section>
  );
};
