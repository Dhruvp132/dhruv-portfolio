"use client";

import { motion, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useCursor } from "../context/CursorContext";
import { useEffect } from "react";

export default function TopLayer() {
  const { mouseX, mouseY, isExpanded } = useCursor();

  // Smooth spring animations for mask position
  const maskX = useSpring(mouseX, { stiffness: 400, damping: 30 });
  const maskY = useSpring(mouseY, { stiffness: 400, damping: 30 });

  // Create motion value for mask size
  const maskSizeValue = useMotionValue(10);
  const maskSize = useSpring(maskSizeValue, {
    stiffness: 200,
    damping: 25,
  });

  // Update mask size when isExpanded changes
  useEffect(() => {
    maskSizeValue.set(isExpanded ? 150 : 10);
  }, [isExpanded, maskSizeValue]);

  // Transform the values to mask-image string with sharp cutoff
  const maskImage = useTransform(
    [maskX, maskY, maskSize],
    ([x, y, size]) =>
      `radial-gradient(circle at ${x}px ${y}px, black ${size}px, transparent ${size}px)`,
  );

  return (
    <motion.div
      className="absolute inset-0 w-full h-full flex items-center justify-center bg-black pointer-events-none z-10"
      style={{
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    >
      <div className="text-center px-8">
        {/* Hero headline - revealed version */}
        <h1 className="text-[15vw] font-extrabold leading-none tracking-tight text-[#B4FF00]">
          DHRUV PATEL
        </h1>
      </div>
    </motion.div>
  );
}
