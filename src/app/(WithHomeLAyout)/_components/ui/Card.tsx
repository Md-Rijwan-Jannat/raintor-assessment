"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "skill" | "process" | "contact";
  index?: number;
  children: React.ReactNode;
}

export const Card = ({
  variant = "default",
  index = 0,
  className,
  children,
  ...props
}: CardProps) => {
  const variantStyles = {
    default: "bg-background border border-foreground/10 rounded-xl p-6",
    skill: "bg-black text-white rounded-xl p-6 h-full",
    process: "bg-black text-white rounded-xl p-6 h-full",
    contact: "bg-black text-white rounded-xl p-6",
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
);

export const CardTitle = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-xl font-bold", className)} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-foreground/70", className)} {...props}>
    {children}
  </p>
);

export const CardContent = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("", className)} {...props}>
    {children}
  </div>
);

export const CardFooter = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-4 flex items-center", className)} {...props}>
    {children}
  </div>
);
