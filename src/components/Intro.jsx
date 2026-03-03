import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Intro = () => {
  const el = useRef(null);
  
  const keywords = useMemo(() => 
    ["JAVASCRIPT", "NODE.JS", "TAILWIND", "PYTHON", "REDUX", "REST API", "AWS", "GIT", "DOCKER", "SQL", "REACT", "NEXT.JS", "TYPESCRIPT", "MONGODB"], 
  []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FULL STACK DEVELOPER", "REACT SPECIALIST", "UI ARCHITECT", "TECH INNOVATOR"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: "_",
    });
    return () => typed.destroy();
  }, []);

  return (
    /* Changed justify-center to justify-start and added padding-top to pull content up */
    <motion.div className="relative flex flex-col items-center justify-start h-screen text-center pt-[30vh] md:pt-[10vh] ">
      
      {/* FLOATING KEYWORDS - Top 30% only */}
      <div className="absolute top-0 left-0 w-full h-[30%] pointer-events-none z-0">
        {keywords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-[10px] md:text-xs font-bold text-white/40 whitespace-nowrap tracking-[0.3em]"
            style={{
              left: `${(i * 14) % 90}%`, 
              top: `${(i * 8) % 100}%`,  
              textShadow: "0 0 8px rgba(255, 255, 255, 0.2)"
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [10, -10], 
              scale: [0.95, 1, 0.95]
            }}
            transition={{ 
              duration: Math.random() * 5 + 5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Intro Label */}
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-purple-400 font-mono tracking-[0.5em] text-xs md:text-sm mb-4"
        >
          HI, I AM
        </motion.p>

        <div className="relative inline-block px-6 py-3 md:px-10 md:py-6">
          {/* Animated Snake Border */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.rect
              width="100%"
              height="100%"
              fill="none"
              stroke="rgba(168, 85, 247, 0.3)"
              strokeWidth="1.5"
              strokeDasharray="60 180"
              initial={{ strokeDashoffset: 1000 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Main Name - Optimized Font Size */}
          <h1 className="relative text-4xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-300 via-white to-indigo-300 bg-clip-text text-transparent tracking-tighter">
            IMAMA MUSHTAQ
          </h1>
          
          {/* Decorative Runner */}
          <motion.div 
            className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent mt-4"
            initial={{ width: 0, x: "-5%" }}
            animate={{ width: "110%", x: "-5%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
        </div>

        {/* Typing Effect */}
        <div className="mt-1 mb-5 font-mono text-base md:text-xl text-cyan-400/90 tracking-[0.2em] min-h-[30px]">
          <span ref={el}></span>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;