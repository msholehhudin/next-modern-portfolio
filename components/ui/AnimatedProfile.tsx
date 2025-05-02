"use client";

import React from "react";
import { easeInOut, motion } from "framer-motion";

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
    <div className={`relative ${containerSize} mx-auto my-8 ${className}`}>
      {/* Expanded container for particles to appear outside the circle */}
      <div className="absolute inset-0 -m-16">
        {/* Tech-inspired particles - positioned outside the main circle */}
        {Array.from({ length: 12 }).map((_, index) => {
          // Calculate position using parametric equations for better distribution
          const angle = index * 30 * (Math.PI / 180);
          const radius = 100 + Math.random() * 40; // Varying radius for more natural look
          const xPos = Math.cos(angle) * radius + 50;
          const yPos = Math.sin(angle) * radius + 50;

          // Tech-inspired shapes
          const shapes = ["rounded-sm", "rounded", "rounded-full"];
          const shape = shapes[index % shapes.length];

          // Tech color palette
          const colors = [
            "bg-blue-500",
            "bg-cyan-400",
            "bg-indigo-500",
            "bg-violet-400",
            "bg-blue-400",
          ];
          const color = colors[index % colors.length];

          // Size variations
          const sizes = [
            "w-1.5 h-1.5",
            "w-2 h-2",
            "w-1 h-1",
            "w-1 h-3",
            "w-3 h-1",
          ];
          const size = sizes[index % sizes.length];

          const xMove =
            (index % 2 === 0 ? 10 : -10) * (1 + Math.random() * 0.5);
          const yMove = (index % 3 === 0 ? 8 : -8) * (1 + Math.random() * 0.5);

          return (
            <motion.div
              key={`tech-particle-${index}`}
              className={`absolute ${size} ${color} ${shape} opacity-80`}
              style={{
                left: `${xPos}%`,
                top: `${yPos}%`,
              }}
              animate={{
                x: [0, xMove, 0, -xMove, 0],
                y: [0, yMove, 0, -yMove, 0],
                opacity: [0.8, 0.5, 0.8, 0.5, 0.8],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                yoyo: true,
              }}
            />
          );
        })}

        {/* Data flow lines - connecting some particles */}
        {Array.from({ length: 5 }).map((_, index) => {
          const startAngle = index * 72 * (Math.PI / 180);
          const endAngle = (index * 72 + 144) * (Math.PI / 180);

          const radius = 110;
          const startX = Math.cos(startAngle) * radius + 50;
          const startY = Math.sin(startAngle) * radius + 50;
          const endX = Math.cos(endAngle) * radius + 50;
          const endY = Math.sin(endAngle) * radius + 50;

          return (
            <motion.div
              key={`data-line-${index}`}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${Math.sqrt(
                  Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2)
                )}%`,
                transformOrigin: "left center",
                transform: `rotate(${
                  Math.atan2(endY - startY, endX - startX) * (180 / Math.PI)
                }deg)`,
              }}
              animate={{
                opacity: [0, 0.7, 0],
                scaleX: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.8,
              }}
            />
          );
        })}
      </div>

      {/* Glowing circle background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-50 animate-pulse" />

      {/* Rotating circle border - now moves down slightly */}
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

      {/* Profile image container with glossy effect */}
      <motion.div
        className="relative w-full h-full rounded-full overflow-hidden"
        animate={{
          y: [0, -8, 0],
          scale: [1, 0.97, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Actual image */}
        <img
          src={imageUrl || "/profile.JPG"}
          alt={altText}
          className="w-full h-full object-cover rounded-full"
        />
        {/* Diagonal glossy line effect overlay */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          {/* Top edge highlight */}
          {/* Extended top glossy highlight - offset from photo */}
          <motion.div
            className="absolute w-full h-2/5 bg-gradient-to-b from-white to-transparent opacity-20 rounded-t-full"
            style={{
              top: "-15%",
              left: "-10%",
              width: "120%",
              transform: "rotate(-10deg)",
            }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Softer diagonal glossy line */}
          <motion.div
            className="absolute transform rotate-45 overflow-hidden blur-sm"
            style={{
              width: "90px",
              height: "200%",
              left: "-100%",
              top: "-100%",
            }}
            animate={{
              left: ["-100%", "200%"],
              top: ["-100%", "200%"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2.5,
            }}
          >
            {/* Softer glossy line inner */}
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-25" />
          </motion.div>

          {/* Second diagonal line with different timing */}
          <motion.div
            className="absolute transform rotate-45 overflow-hidden blur-sm"
            style={{
              width: "90px",
              height: "200%",
              left: "-100%",
              top: "-100%",
            }}
            animate={{
              left: ["-100%", "200%"],
              top: ["-100%", "200%"],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 3,
              delay: 1.8,
            }}
          >
            {/* Glossy line inner */}
            <div className="h-full w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
          </motion.div>
        </div>
      </motion.div>

      {/* Digital circuit node points */}
      {Array.from({ length: 6 }).map((_, index) => {
        const angle = index * 60 * (Math.PI / 180);
        const radius = 52;
        const xPos = Math.cos(angle) * radius + 50;
        const yPos = Math.sin(angle) * radius + 50;

        return (
          <motion.div
            key={`node-${index}`}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            style={{
              left: `${xPos}%`,
              top: `${yPos}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              boxShadow: [
                "0 0 0 rgba(59, 130, 246, 0.5)",
                "0 0 4px rgba(59, 130, 246, 0.8)",
                "0 0 0 rgba(59, 130, 246, 0.5)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        );
      })}
    </div>
  );
};

export default AnimatedProfile;
