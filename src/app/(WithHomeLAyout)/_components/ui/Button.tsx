/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { ReactNode, forwardRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import type { HTMLMotionProps } from "framer-motion";

// Define custom CSS properties for TypeScript
declare module "react" {
  interface CSSProperties {
    "--ring-color"?: string;
  }
}

interface ButtonProps extends HTMLMotionProps<"button"> {
  icon?: ReactNode;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;

  // Enhanced features
  loading?: boolean;
  disabled?: boolean;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "light"
    | "dark";
  iconPosition?: "left" | "right";
  ripple?: boolean;
  pulse?: boolean;
  glow?: boolean;

  // Custom styling
  customColors?: {
    bg?: string;
    text?: string;
    ring?: string;
    iconBg?: string;
    iconRing?: string;
    hover?: {
      bg?: string;
    };
  };

  // Animation overrides
  customHover?: any;
  customTap?: any;
  customTransition?: any;

  // Callback props
  onLoadingComplete?: () => void;
}

const sizeStyles = {
  sm: "pr-3 py-2 text-[18px] gap-1.5",
  md: "pr-4 py-2.5 text-[19px] gap-2",
  lg: "pr-6 py-3 text-[20px] gap-2.5",
};

const iconSizes = {
  sm: "size-8",
  md: "size-9",
  lg: "size-10",
};

const variantStyles = {
  default: {
    bg: "bg-foreground",
    text: "text-foreground",
    ring: "ring-foreground",
    iconBg: "bg-foreground",
    iconRing: "ring-foreground",
    hover: "hover:bg-gray-50",
  },
  primary: {
    bg: "bg-transparent",
    text: "text-blue-500",
    ring: "ring-blue-500",
    iconBg: "bg-transparent",
    iconRing: "ring-blue-500",
    hover: "hover:bg-blue-50",
  },
  secondary: {
    bg: "bg-transparent",
    text: "text-gray-500",
    ring: "ring-gray-500",
    iconBg: "bg-transparent",
    iconRing: "ring-gray-500",
    hover: "hover:bg-gray-50",
  },
  success: {
    bg: "bg-transparent",
    text: "text-green-500",
    ring: "ring-green-500",
    iconBg: "bg-transparent",
    iconRing: "ring-green-500",
    hover: "hover:bg-green-50",
  },
  warning: {
    bg: "bg-transparent",
    text: "text-yellow-500",
    ring: "ring-yellow-500",
    iconBg: "bg-transparent",
    iconRing: "ring-yellow-500",
    hover: "hover:bg-yellow-50",
  },
  danger: {
    bg: "bg-transparent",
    text: "text-red-500",
    ring: "ring-red-500",
    iconBg: "bg-transparent",
    iconRing: "ring-red-500",
    hover: "hover:bg-red-50",
  },
  light: {
    bg: "bg-transparent",
    text: "text-foreground",
    ring: "ring-foreground",
    iconBg: "bg-transparent",
    iconRing: "ring-foreground",
    hover: "hover:bg-foreground/10",
  },
  dark: {
    bg: "bg-transparent",
    text: "text-foreground",
    ring: "ring-foreground",
    iconBg: "bg-transparent",
    iconRing: "ring-foreground",
    hover: "hover:bg-foreground/10",
  },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon,
      size = "md",
      children,
      className = "",
      loading = false,
      disabled = false,
      variant = "default",
      iconPosition = "left",
      ripple = true,
      pulse = false,
      glow = false,
      customColors,
      customHover,
      customTap,
      customTransition,
      onLoadingComplete,
      ...props
    },
    ref
  ) => {
    const [ripples, setRipples] = useState<
      Array<{ id: number; x: number; y: number }>
    >([]);

    const variantStyle = variantStyles[variant];

    // Handle ripple effect
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple || disabled || loading) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const newRipple = { id: Date.now(), x, y };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    };

    // Determine icon to show
    const displayIcon = loading ? (
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Loader2 className="w-full h-full" />
      </motion.div>
    ) : (
      icon
    );

    // Build custom styles
    const customStyle = customColors
      ? {
          backgroundColor: customColors.bg,
          color: customColors.text,
          borderColor: customColors.ring,
        }
      : {};

    const customIconStyle = customColors
      ? {
          backgroundColor: customColors.iconBg,
          borderColor: customColors.iconRing,
        }
      : {};

    // Animation configurations
    const hoverAnimation = customHover || {
      scale: 1.05,
      boxShadow: glow
        ? "0 0 20px rgba(59, 130, 246, 0.4), 0 0 0 1px currentColor"
        : "0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px currentColor",
    };

    const tapAnimation = customTap || { scale: 0.97 };

    const transition = customTransition || {
      type: "spring",
      stiffness: 300,
      damping: 20,
    };

    const buttonContent = (
      <>
        {displayIcon && iconPosition === "left" && (
          <motion.span
            className={`flex items-center justify-center rounded-full ring-1 mr-2 p-1 ${iconSizes[size]} ${variantStyle.iconBg} ${variantStyle.iconRing} ${variantStyle.text}`}
            style={customIconStyle}
            whileHover={{ rotate: loading ? 0 : [0, -15, 15, -10, 10, 0] }}
            whileTap={{ scale: loading ? 1 : 1.2 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {displayIcon}
          </motion.span>
        )}

        <span className={variantStyle.text}>{children}</span>

        {displayIcon && iconPosition === "right" && (
          <motion.span
            className={`flex items-center justify-center rounded-full ring-1 ml-2 p-1 ${iconSizes[size]} ${variantStyle.iconBg} ${variantStyle.iconRing} ${variantStyle.text}`}
            style={customIconStyle}
            whileHover={{ rotate: loading ? 0 : [0, -15, 15, -10, 10, 0] }}
            whileTap={{ scale: loading ? 1 : 1.2 }}
            transition={{ type: "spring", stiffness: 500, damping: 15 }}
          >
            {displayIcon}
          </motion.span>
        )}
      </>
    );

    return (
      <motion.button
        ref={ref}
        className={`
          relative overflow-hidden flex items-center cursor-pointer ring-1 rounded-full transition-colors font-medium
          ${sizeStyles[size]} 
          ${variantStyle.bg} 
          ${variantStyle.text} 
          ${variantStyle.ring} 
          ${variantStyle.hover}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${loading ? "cursor-wait" : ""}
          ${pulse ? "animate-pulse" : ""}
          ${className}
        `}
        style={
          {
            ...customStyle,
            "--ring-color":
              customColors?.ring ||
              (variant === "default"
                ? "#000000"
                : variantStyles[variant].ring.replace("ring-", "")),
          } as React.CSSProperties
        }
        whileHover={
          !disabled && !loading
            ? {
                ...hoverAnimation,
                boxShadow:
                  customHover?.boxShadow ||
                  (glow
                    ? `0 0 20px rgba(59, 130, 246, 0.4), 0 0 0 1px ${
                        customColors?.ring ||
                        (variant === "default" ? "#000000" : "currentColor")
                      }`
                    : `0 2px 8px rgba(0,0,0,0.08), 0 0 0 1px ${
                        customColors?.ring ||
                        (variant === "default" ? "#000000" : "currentColor")
                      }`),
              }
            : {}
        }
        whileTap={!disabled && !loading ? tapAnimation : {}}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        disabled={disabled || loading}
        onClick={(e) => {
          handleRipple(e);
          if (props.onClick) props.onClick(e);
          if (loading && onLoadingComplete) {
            setTimeout(onLoadingComplete, 2000);
          }
        }}
        {...props}
      >
        {buttonContent}

        {/* Ripple Effect */}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full bg-foreground/30 pointer-events-none"
              style={{
                left: ripple.x - 10,
                top: ripple.y - 10,
                width: 20,
                height: 20,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </AnimatePresence>

        {/* Glow Effect */}
        {glow && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `radial-gradient(circle, ${variantStyle.bg
                .replace("bg-", "rgba(")
                .replace("-500", ", 0.3)")} 0%, transparent 70%)`,
              filter: "blur(8px)",
              zIndex: -1,
            }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";
