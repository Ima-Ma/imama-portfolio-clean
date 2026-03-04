import React, { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

const Intro = () => {
  const el = useRef(null);
  
  const keywords = useMemo(() => 
    ["SCALABLE", "CLOUD NATIVE", "FULL STACK", "API-DRIVEN", "REAL-TIME", "SECURE", "OPTIMIZED", "IOT READY", "ENTERPRISE", "MODERN UI"], 
  []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "FULL-STACK DEVELOPMENT", 
        "CLOUD ARCHITECTURE", 
        "API INTEGRATION", 
        "TECH CONSULTANCY", 
        "MOBILE SOLUTIONS"
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      cursorChar: "▊",
    });
    return () => typed.destroy();
  }, []);

  return (
    <motion.div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      
      {/* --- TOP LEFT BRANDING --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <img 
          src="/logotransparent.png" 
          alt="Logo" 
          className="w-12 h-12 md:w-16 md:h-16 object-contain filter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      {/* FLOATING TECH STACK BACKGROUND */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20">
        {keywords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-[9px] md:text-xs font-bold text-cyan-400 whitespace-nowrap tracking-[0.4em]"
            style={{
              left: `${(i * 18) % 95}%`, 
              top: `${(i * 12) % 90}%`,  
            }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -20, 0], 
            }}
            transition={{ 
              duration: Math.random() * 7 + 5, 
              repeat: Infinity, 
              ease: "linear",
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Main Business Branding Container */}
      <div className="relative z-10 px-8 py-12 md:px-16 md:mb-60">
        
        {/* --- ENHANCED SNAKE BORDER --- */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {/* Background Static Border */}
          <rect
            width="100%"
            height="100%"
            fill="none"
            stroke="rgba(34, 211, 238, 0.05)"
            strokeWidth="1"
            rx="24"
          />
          {/* Outer Glow Path */}
          <motion.rect
            width="100%"
            height="70%"
            fill="none"
            stroke="rgba(34, 211, 238, 0.4)"
            strokeWidth="3"
            strokeDasharray="100 400"
            rx="24"
            className="blur-[6px]"
            animate={{ strokeDashoffset: [1000, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          {/* Main Sharp Path */}
          <motion.rect
            width="100%"
            height="70%"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
            strokeDasharray="80 420"
            rx="24"
            animate={{ strokeDashoffset: [1000, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <div className="relative flex flex-col items-center">
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
            CORE STACK
            <span className="block text-2xl md:text-4xl font-light tracking-[0.3em] text-cyan-400 mt-4">
              TECHNOLOGIES
            </span>
          </h1>

          <div className="mt-10 flex flex-col items-center">
            <div className="flex items-center space-x-3 text-white/70 font-mono text-sm md:text-lg">
              <span className="text-cyan-500/50">const services = [</span>
              <span ref={el} className="text-white"></span>
              <span className="text-cyan-500/50">];</span>
            </div>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-cyan-950/40 to-transparent pointer-events-none"></div>
    </motion.div>
  );
};

export default Intro;