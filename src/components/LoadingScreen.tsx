import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.png";
import heroSlide3 from "@/assets/hero-slide-3.png";
import heroSlide4 from "@/assets/hero-slide-4.png";

const heroImages = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Preload all hero images
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Fast to 65% in ~800ms, then to 100% by 2s
    const t1 = setTimeout(() => setProgress(65), 100);
    const t2 = setTimeout(() => setProgress(85), 1000);
    const t3 = setTimeout(() => setProgress(100), 1700);
    const t4 = setTimeout(() => onComplete(), 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#110C08] overflow-hidden"
        // Smooth slide-up and scale-down exit for a highly polished feel
        exit={{ opacity: 0, y: -40, scale: 0.95, filter: "blur(12px)" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Warm Sunset/Amber Ambient Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="w-[550px] h-[550px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, rgba(0,0,0,0) 65%)",
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-md">
          
          {/* Welcoming Top Text */}
          <motion.p
            className="text-[#fda4af] text-[10px] sm:text-xs tracking-[0.4em] font-medium uppercase mb-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Welcome To
          </motion.p>

          {/* Main Title - Warm, friendly, but premium */}
          <motion.h1
            className="font-display text-6xl sm:text-8xl font-black mb-10 text-center tracking-tight"
            initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-zinc-100">Cafe </span>
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(to right, #fb923c, #f43f5e)",
                filter: "drop-shadow(0px 0px 20px rgba(244, 63, 94, 0.35))"
              }}
            >
              Mittro
            </span>
          </motion.h1>

          {/* Smooth Rounded Progress Loader */}
          <div className="flex flex-col items-center w-64 sm:w-80">
            <motion.div
              className="w-full h-1.5 rounded-full bg-white/5 overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
               <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #fb923c, #f43f5e)",
                  boxShadow: "0 0 12px rgba(244, 63, 94, 0.6)"
                }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </motion.div>

            <motion.div
              className="text-[#fb923c] text-sm font-mono tracking-widest font-bold"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {progress}%
            </motion.div>
          </div>

          {/* Themed Tagline */}
          <motion.p
            className="mt-12 text-[10px] sm:text-xs tracking-[0.3em] text-zinc-500 font-semibold uppercase text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Great Vibes • Good Friends • Satya Niketan
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;