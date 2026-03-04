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
    // FIX: Changed justify-center to justify-start and added top padding/margin
    // This moves the "Core Stack" box higher up the screen.
    <motion.div className="relative flex flex-col items-center justify-start pt-20 md:pt-32 min-h-[60vh] md:h-[70vh] text-center overflow-hidden">
      
      {/* --- TOP LEFT BRANDING --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-4 left-4 md:top-6 md:left-6 z-50"
      >
        <img 
          src="/logotransparent.png" 
          alt="Logo" 
          className="w-10 h-10 md:w-16 md:h-16 object-contain filter drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        />
      </motion.div>

      {/* FLOATING TECH STACK BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 md:opacity-20">
        {keywords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-[8px] md:text-xs font-bold text-cyan-400 whitespace-nowrap tracking-[0.2em] md:tracking-[0.4em]"
            style={{
              left: `${(i * 25) % 90}%`, 
              top: `${(i * 15) % 70}%`, // Restricted to top 70% to avoid nav overlap
            }}
            animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Main Business Branding Container */}
      {/* FIX: Added a negative margin top md:-mt-10 to lift it further if needed */}
      <div className="relative z-10 w-full max-w-4xl px-4">
        
        {/* --- ENHANCED RESPONSIVE SNAKE BORDER --- */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
          <rect width="100%" height="100%" fill="none" stroke="rgba(34, 211, 238, 0.05)" strokeWidth="1" rx="20" />
          <motion.rect
            width="100%" height="100%" fill="none" stroke="rgba(34, 211, 238, 0.4)" strokeWidth="2"
            strokeDasharray="80 300" rx="20" className="blur-[4px]"
            animate={{ strokeDashoffset: [600, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
          <motion.rect
            width="100%" height="100%" fill="none" stroke="#22d3ee" strokeWidth="1"
            strokeDasharray="60 320" rx="20"
            animate={{ strokeDashoffset: [600, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </svg>

        <div className="relative flex flex-col items-center md:py-3">
          <h1 className="text-4xl md:text-6xl lg:text-6xl font-black text-white tracking-tighter leading-tight">
            CORE STACK
            <span className="block text-xl md:text-3xl lg:text-4xl font-light tracking-[0.2em] md:tracking-[0.3em] text-cyan-400 mt-2">
              TECHNOLOGIES
            </span>
          </h1>

          <div className="mt-6 md:mt-2">
            <div className="flex items-center space-x-2 text-white/70 font-mono text-[10px] md:text-lg">
              <span className="text-cyan-500/50">{"{"}</span>
              <span ref={el} className="text-white"></span>
              <span className="text-cyan-500/50">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;