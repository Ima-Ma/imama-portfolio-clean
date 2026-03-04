import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Services from "./components/Services";

// ... (FloatingParticles stays the same)

function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const tabs = ["Intro", "Services", "About Owner", "Portfolio", "Contact"];

  return (
    <div className="relative min-h-screen text-white selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* BACKGROUND & FX (Stays fixed as requested) */}
      <div className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/main.jpg')" }} />
      <div className="fixed inset-0 z-[1] bg-black/80 md:bg-black/60" />
      <div className="fixed inset-0 z-10 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-cyan-900/20 rounded-full blur-[100px] -top-10 -left-10 animate-pulse" />
      </div>

      {/* Cyber Cursor - Hidden on mobile for better UX */}
      <motion.div
        className="hidden md:flex fixed top-0 left-0 rounded-full border border-cyan-500/50 pointer-events-none z-50 items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering ? 25 : 10),
          y: mousePosition.y - (isHovering ? 25 : 10),
          width: isHovering ? 50 : 20,
          height: isHovering ? 50 : 20,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250 }}
      >
        <div className="w-1 h-1 bg-cyan-400 rounded-full" />
      </motion.div>

      {/* Futuristic Nav - RESPONSIVE FIX */}
      <motion.nav
        animate={{
          // Mobile: Top fixed, Desktop: Dynamic movement
          top: window.innerWidth < 768 ? "20px" : (activeTab === "intro" ? "75%" : "40px"),
          scale: activeTab === "intro" ? 1.0 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        // Added overflow-x-auto and max-w-full for mobile swiping
        className="fixed left-0 md:left-1/2 md:-translate-x-1/2 z-40 w-full md:w-auto flex overflow-x-auto no-scrollbar md:overflow-visible gap-4 md:gap-12 px-6 md:px-0 py-4 font-mono items-center justify-start md:justify-center"
      >
        {tabs.map((tab) => {
          const lower = tab.toLowerCase();
          const isActive = activeTab === lower;

          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(lower);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`relative whitespace-nowrap transition-colors duration-500 flex-shrink-0 ${
                isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="text-[8px] opacity-50 block text-center mb-0.5 md:mb-1">
                {isActive ? "ACTIVE" : "0" + (tabs.indexOf(tab) + 1)}
              </span>
              <span className="tracking-[0.15em] md:tracking-[0.3em] uppercase text-[10px] md:text-sm font-bold">{tab}</span>
              {isActive && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-cyan-500 shadow-[0_0_8px_#22d3ee]" 
                />
              )}
            </button>
          );
        })}
      </motion.nav>

      {/* Main Content Area */}
      <main className="relative z-20 w-full pt-24 md:pt-32 pb-20 flex flex-col items-center px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-6xl"
          >
            {activeTab === "intro" && <Intro />}
            {activeTab === "about owner" && <Resume />}
            {activeTab === "portfolio" && <Project />}
            {activeTab === "contact" && <Contact />}
            {activeTab === "services" && <Services />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;