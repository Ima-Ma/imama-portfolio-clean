import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Contact from "./components/Contact";

const FloatingParticles = () => {
  const particles = useMemo(() => Array.from({ length: 20 }), []);
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[1px] h-[100px] bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"
          initial={{ 
            top: Math.random() * 100 + "%", 
            left: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [0, -200, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [activeTab, setActiveTab] = useState("intro");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const tabs = ["Intro", "Resume", "Portfolio", "Contact"];

  return (
    /* Changed 'fixed inset-0' to 'relative min-h-screen' to allow natural scrolling */
    <div className="relative min-h-screen text-white selection:bg-purple-500/30 overflow-x-hidden">
      
      {/* BACKGROUND IMAGE LAYER - Kept Fixed */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/imama-portfolio-clean/public/main.jpg')" }}
      />
      
      {/* TRANSPARENT BLACK OVERLAY - Kept Fixed */}
      <div className="fixed inset-0 z-[1] bg-black/60" />

      {/* Background FX - Glows kept fixed so they don't scroll away */}
      <div className="fixed inset-0 z-10 pointer-events-none">
        <FloatingParticles />
        <div className="absolute w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] -top-20 -left-20 animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] -bottom-20 -right-20 animate-pulse" />
      </div>

      {/* Cyber Cursor - Kept Fixed */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-purple-500/50 pointer-events-none z-50 flex items-center justify-center"
        animate={{
          x: mousePosition.x - (isHovering ? 25 : 10),
          y: mousePosition.y - (isHovering ? 25 : 10),
          width: isHovering ? 50 : 20,
          height: isHovering ? 50 : 20,
          backgroundColor: isHovering ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 250, mass: 0.5 }}
      >
        <div className="w-1 h-1 bg-purple-400 rounded-full" />
      </motion.div>

      {/* Futuristic Nav - Fixed so it stays visible while scrolling */}
      <motion.nav
        animate={{
          top: activeTab === "intro" ? "70%" : "40px",
          scale: activeTab === "intro" ? 1.1 : 0.9,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed left-1/2 -translate-x-1/2 z-40 flex gap-6 md:gap-12 font-mono"
      >
        {tabs.map((tab) => {
          const lower = tab.toLowerCase();
          const isActive = activeTab === lower;

          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(lower);
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Reset scroll on tab change
              }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`relative px-2 py-1 transition-colors duration-500 ${
                isActive ? "text-purple-400" : "text-gray-300 hover:text-white"
              }`}
            >
              <span className="text-[10px] opacity-50 block text-center mb-1">
                {isActive ? "ACTIVE" : "0" + (tabs.indexOf(tab) + 1)}
              </span>
              <span className="tracking-[0.2em] md:tracking-[0.3em] uppercase text-xs md:text-sm">{tab}</span>
              {isActive && (
                <motion.div 
                  layoutId="underline" 
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-purple-500" 
                />
              )}
            </button>
          );
        })}
      </motion.nav>

      {/* Main Container - Changed h-full to min-h-screen and removed flex-center to allow content to flow */}
      <main className="relative z-20 w-full min-h-screen pt-32 pb-20 flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-6xl px-4"
          >
            {activeTab === "intro" && <Intro />}
            {activeTab === "resume" && <Resume />}
            {activeTab === "portfolio" && <Project />}
            {activeTab === "contact" && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;