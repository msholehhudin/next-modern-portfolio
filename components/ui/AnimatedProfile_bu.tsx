"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedProfileProps {
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
  altText?: string;
}

const sizeClass = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
};

const AnimatedProfile = ({
  imageUrl,
  size = "md",
  className = "",
  altText = "Profile Picture",
}: AnimatedProfileProps) => {
  const containerSize = sizeClass[size];

  return (
    <div className={`relative ${containerSize}  mx-auto my-8 ${className}`}>
      {/* Glowing circle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />

      {/* Rotating circle border */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent"
        style={{
          background:
            "linear-gradient(0deg, transparent 50%, rgba(255,255,255,0.6) 100%)",
          backdropFilter: "blur(4px)",
        }}
        animate={{
          rotate: 360,
          y: [0, 5, 0],
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* Profile image container with floating animation */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden"
        animate={{
          y: [0, -8, 0],
          scale: [1, 1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={"/profile.JPG"}
          alt={altText}
          className="w-full h-full object-cover rounded-full"
        />
      </motion.div>

      {/* Particle effects */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={index}
          className={`absolute w-2 h-2 rounded-full
            ${
              index % 3 === 0
                ? "bg-blue-400"
                : index % 3 === 1
                ? "bg-purple-400"
                : "bg-pink-300"
            } `}
          style={{
            left: `${Math.sin(index * 45 * (Math.PI / 180)) * 100 + 50}%`,
            top: `${Math.cos(index * 45 * (Math.PI / 180)) * 100 + 50}%`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -20 : -15],
            x: [0, index % 2 === 0 ? 10 : -10],
            opacity: [0, 8, 0],
            scale: [1, 0.5],
          }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
            ease: "easeOut",
            delay: index * 0.3,
          }}
        />
      ))}

      {/* Added sparkle effects */}
      {Array.from({ length: 4 }).map((_, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${30 + index * 15}%`,
            top: `${20 + index * 15}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4 + 0.2,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedProfile;
