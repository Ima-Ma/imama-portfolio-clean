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
    // ADJUSTED: Changed pt-16 to pt-8 and md:pt-28 to md:pt-12 to pull everything UP.
    // min-h-[50vh] ensures the component doesn't push the page down too far.
    <motion.div className="relative flex flex-col items-center justify-start pt-8 md:pt-12 min-h-[55vh] md:h-[65vh] text-center overflow-hidden">
      
      {/* FLOATING TECH STACK BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10 md:opacity-20">
        {keywords.map((word, i) => (
          <motion.span
            key={i}
            className="absolute font-mono text-[8px] md:text-xs font-bold text-cyan-400 whitespace-nowrap tracking-[0.2em] md:tracking-[0.4em]"
            style={{
              left: `${(i * 25) % 90}%`, 
              top: `${(i * 12) % 50}%`, // Restricted to top 50% so they stay behind the main logo/text
            }}
            animate={{ opacity: [0.1, 0.4, 0.1], y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* Main Business Branding Container */}
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

        {/* ADJUSTED: Reduced py-10 to py-6/py-10 to keep the box more compact */}
        <div className="relative flex flex-col items-center py-6 md:py-3">
          
          {/* Logo - Slightly smaller on mobile to save vertical space */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4 md:mb-2"
          >
            <img 
              src="/logotransparent.png" 
              alt="Logo" 
              className="w-12 h-12 md:w-20 md:h-20 object-contain filter drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            />
          </motion.div>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight uppercase">
            Core Stack
            <span className="block text-lg md:text-3xl lg:text-4xl font-light tracking-[0.2em] md:tracking-[0.3em] text-cyan-400 mt-1">
              Technologies
            </span>
          </h1>

          <div className="mt-6 md:mt-3">
            <div className="flex items-center space-x-2 text-white/70 font-mono text-[10px] md:text-lg">
              <span className="text-cyan-500/40 font-bold">{"//"}</span>
              <span ref={el} className="text-white tracking-wide"></span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Intro;