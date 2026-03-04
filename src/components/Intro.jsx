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
    <motion.div className="relative flex flex-col items-center justify-start h-screen text-center pt-[25vh] md:pt-[15vh] overflow-hidden">
      
      {/* --- TOP LEFT BRANDING --- */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-6 left-6 z-50 flex items-center gap-3"
      >
        <div className="relative">
           <img 
            src="/logotransparent.png" 
            alt="Logo" 
            className="w-60 h-60 md:w-25 md:h-25 object-contain"
          />
        </div>
       
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

      {/* Main Business Branding */}
      <div className="relative z-10 flex flex-col  px-4 mb-160">
        
        {/* Company Subtitle */}
        {/* <motion.p 
          initial={{ opacity: 0, tracking: "0.1em" }}
          animate={{ opacity: 1, tracking: "0.5em" }}
          className="text-cyan-500 font-mono text-xs md:text-sm mb-6 uppercase"
        >
          Engineering Foundational Digital Solutions
        </motion.p> */}

        <div className="relative group">
          <div className="absolute -inset-1 group-hover:opacity-50 transition duration-1000"></div>
          
          <div className="relative">
            {/* Main Company Name */}
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
              CORE STACK
              <span className="block text-2xl md:text-4xl font-light tracking-[0.3em] text-cyan-400 mt-2">
                TECHNOLOGIES
              </span>
            </h1>
          </div>
        </div>

        {/* Dynamic Service Offering */}
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center space-x-3 text-white/70 font-mono text-sm md:text-lg">
            <span className="text-cyan-500">[</span>
            <span ref={el}></span>
            <span className="text-cyan-500">]</span>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-cyan-900/20 to-transparent pointer-events-none"></div>
    </motion.div>
  );
};

export default Intro;