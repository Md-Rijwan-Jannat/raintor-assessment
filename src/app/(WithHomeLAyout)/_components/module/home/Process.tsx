"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/app/(WithHomeLAyout)/_components/ui/Card";
import { Button } from "@/app/(WithHomeLAyout)/_components/ui/Button";

export const Process = () => {
  const steps = [
    {
      title: "Discovery",
      description:
        "We start by understanding your business, goals, and target audience. This helps us create a website that truly represents your brand and meets your objectives.",
      number: "01",
    },
    {
      title: "Design",
      description:
        "Our designers create wireframes and mockups that align with your brand identity. We iterate based on your feedback until we have a design you love.",
      number: "02",
    },
    {
      title: "Development",
      description:
        "Our development team brings the designs to life with clean, efficient code. We focus on performance, accessibility, and responsive design.",
      number: "03",
    },
    {
      title: "Launch",
      description:
        "After thorough testing, we deploy your website and ensure everything is working perfectly. We provide training so you can manage your content.",
      number: "04",
    },
  ];

  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Work Process
          </h2>
          <p className="text-foreground/70 max-w-2xl">
            I follow a structured approach to ensure every project is delivered
            on time and exceeds expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <Card key={index} variant="process" index={index}>
              <CardHeader className="flex flex-row items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{step.title}</CardTitle>
                </div>
                <span className="text-4xl font-bold text-primary">
                  {step.number}
                </span>
              </CardHeader>
              <CardContent>
                <p className="text-white/70">{step.description}</p>
              </CardContent>
              <CardFooter>
                {index === steps.length - 1 && (
                  <Button
                    size="sm"
                    className="bg-primary text-black hover:bg-primary/90"
                  >
                    Learn More
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
