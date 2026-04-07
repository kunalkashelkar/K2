import { motion } from "motion/react";

export function RippleWaveLoader() {
  return (
    <div className="flex items-center justify-center space-x-[3px]">
      {[...Array(7)].map((_, index) => (
        <motion.div
          key={index}
          className="h-5 w-[3px] rounded-full bg-[#4d2700]"
          animate={{
            scaleY: [0.5, 1.5, 0.5],
            scaleX: [1, 0.8, 1],
            translateY: ["0%", "-15%", "0%"],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1,
          }}
        />
      ))}
    </div>
  );
}
