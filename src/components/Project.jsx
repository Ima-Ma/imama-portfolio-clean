import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Smartphone, Terminal, 
  Activity, Database, Fingerprint, X, Zap ,CpuIcon ,Globe ,ExternalLink, // <--- Add this
  Plus          // <--- Add this for the "Add New" node
} from "lucide-react";

const Project = () => {
  const [index, setIndex] = useState(0);
  const [mobIndex, setMobIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
const [activeIndex, setActiveIndex] = useState(0);
const dashboards = [
  { 
    id: 1, img: "/dashboard/1.jpeg", title: "Fuel Management", metrics: "1.2M Hits", 
    desc: "Real-time telemetry for petroleum logistics and consumption tracking.",
    tech: ["IOT", "Next.js", "Redis"], status: "Core_Module"
  },
  { 
    id: 2, img: "/dashboard/2.jpeg", title: "Flood Control", metrics: "Active", 
    desc: "Predictive hydrosensor analysis and emergency alert dispatching.",
    tech: ["Python", "AWS", "TensorFlow"], status: "Environmental"
  },
  { 
    id: 3, img: "/dashboard/3.jpeg", title: "People Counter", metrics: "99.9% Acc.", 
    desc: "Computer vision based occupancy monitoring and flow optimization.",
    tech: ["OpenCV", "C++", "MQTT"], status: "Visual_AI"
  },
  { 
    id: 4, img: "/dashboard/4.jpeg", title: "Energy Grid", metrics: "84% Eff.", 
    desc: "Granular power grid diagnostics and load-balancing automation.",
    tech: ["Rust", "GraphQL", "Timescale"], status: "Utility_Layer"
  },
  { 
    id: 5, img: "/dashboard/5.jpeg", title: "Water Quality", metrics: "40ms", 
    desc: "Ph levels and pressure distribution across municipal nodes.",
    tech: ["Node.js", "InfluxDB", "D3.js"], status: "Fluid_Dynamics"
  },
];
  const active = dashboards[activeIndex];
  // --- AUTO SLIDING ENGINE ---
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
      setMobIndex((prev) => (prev + 1) % mobileProjects.length);
    }, 4000); // Slides every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const logoIds = useMemo(() => Array.from({ length: 16 }, (_, i) => i + 1), []);


const skills = [
    { name: "React / Next.js", level: 95, color: "bg-cyan-500" },
    { name: "Node / Express", level: 88, color: "bg-blue-500" },
    { name: "Laravel / PHP", level: 82, color: "bg-purple-500" },
    { name: "Python / AI", level: 75, color: "bg-indigo-500" },
    { name: "UI/UX Design", level: 90, color: "bg-emerald-500" },
  ];

 const mobileProjects = [
  { id: 1, img: "/portfolio/mob1.png", title: "Aromist", tech: "Flutter", desc: "Premium fragrance discovery and e-commerce experience." },
  { id: 2, img: "/portfolio/mob2.png", title: "Aspire Edge", tech: "Flutter", desc: "Performance tracking for elite athletes and gym enthusiasts." },
  { id: 3, img: "/portfolio/mob3.png", title: "ECO Cycle", tech: "Flutter", desc: "Smart waste management and sustainable living reward system." },
  { id: 4, img: "/portfolio/mob4.png", title: "Laptop Harbor", tech: "Flutter", desc: "Direct marketplace for high-end computing hardware." },
  { id: 5, img: "/portfolio/mob5.png", title: "Trip Budgeter", tech: "Flutter", desc: "Real-time expense tracking for global digital nomads." },
];
  const projects = [
    { id: 1, img: "/portfolio/1.PNG", title: "Carspot", cat: "Enterprise", tech: "React • .NET" },
    { id: 2, img: "/portfolio/2.PNG", title: "Covid Guard", cat: "Realtime", tech: "Socket.io • Node" },
    { id: 3, img: "/portfolio/3.PNG", title: "ECO Cycle", cat: "E-Commerce", tech: "Next.js • Tailwind" },
    { id: 4, img: "/portfolio/4.PNG", title: "Field Fusion", cat: "Fintech", tech: "Laravel • MySQL" },
    { id: 5, img: "/portfolio/5.PNG", title: "Glamour", cat: "Social", tech: "MERN Stack" },
    { id: 5, img: "/portfolio/6.PNG", title: "Kaam Ka Karavan", cat: "Social", tech: "MERN Stack" },
    { id: 5, img: "/portfolio/7.PNG", title: "Marina Fleet ", cat: "Social", tech: "MERN Stack" },
    { id: 5, img: "/portfolio/8.PNG", title: "Robo Cycle", cat: "Social", tech: "MERN Stack" },
    { id: 5, img: "/portfolio/9.PNG", title: "Bakers", cat: "Social", tech: "MERN Stack" },
    { id: 5, img: "/portfolio/10.PNG", title: "Story Tellers", cat: "Social", tech: "MERN Stack" },
    { id: 5, img: "/portfolio/11.PNG", title: "Event Planner", cat: "Social", tech: "MERN Stack" },

  ];



  return (
    <div className="w-full relative flex flex-col items-center font-sans text-white bg-transparent">
      
      {/* --- TECH MARQUEE --- */}
      <div className="w-full py-4 bg-white/[0.02] border-y border-white/5 overflow-hidden flex items-center">
        <motion.div animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }} className="flex gap-12 items-center whitespace-nowrap px-4">
          {[...logoIds, ...logoIds].map((id, idx) => (
            <img key={idx} src={`/logos/${id}.png`} alt="tech" className="h-6 grayscale opacity-30 hover:opacity-100 transition-all" />
          ))}
        </motion.div>
      </div>

{/* --- HERO SECTION --- */}
<div className="w-full max-w-[1600px] mx-auto py-8 px-4 grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch min-h-[600px]">
  
  {/* COL 1: SKILLS (Left Pillar) */}
  <div className="lg:col-span-3 h-110 z-30 flex flex-col justify-between bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-2xl">
    <div>
        <div className="flex items-center gap-2 text-cyan-400 mb-6">
        <Terminal size={14} />
        <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Expertise_Index</span>
        </div>
        
        <div className="space-y-4">
        {skills.map((skill) => (
            <div key={skill.name} className="space-y-2">
            <div className="flex justify-between text-[10px] font-mono text-gray-400">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-cyan-400">{skill.level}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: `${skill.level}%` }} 
                transition={{ duration: 1 }}
                className={`h-full ${skill.color} shadow-[0_0_8px_rgba(34,211,238,0.4)]`} 
                />
            </div>
            </div>
        ))}
        </div>
    </div>

    <div className="pt-6 mt-6 border-t border-white/5">
      <p className="text-[9px] font-mono text-gray-500 leading-tight">
        &gt; Continuous learning in distributed systems and neural integration.
      </p>
    </div>
  </div>

  {/* COL 2: MAIN SLIDER (Center) - Widened for visibility */}
  <div className="lg:col-span-6 flex flex-col items-center justify-center relative z-10 overflow-visible">
    <div className="text-center mb-8">
      <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">
        My Digital <span className="text-cyan-400 text-outline-small">Architectures</span>
      </h2>
      <p className="text-[9px] text-gray-500 font-mono mt-2 tracking-[0.2em]">AUTOSLIDE_ACTIVE // SESSION_01</p>
    </div>

    {/* The Slider - Cards are smaller so more fit, but content remains legible */}
    <div className="relative w-full h-[280px] flex items-center justify-center preserve-3d">
      {projects.map((proj, i) => {
        const diff = i - index;
        const isActive = i === index;
        // Show 5 slides in total view
        const isVisible = Math.abs(diff) <= 2;

        return (
          <motion.div
            key={proj.id}
            onClick={() => setIndex(i)}
            animate={{
              // diff * 180 makes them overlap slightly more
              transform: `perspective(1200px) translateX(${diff * 190}px) translateZ(${isActive ? 80 : -250}px) rotateY(${diff * -30}deg)`,
              zIndex: 20 - Math.abs(diff),
              opacity: isVisible ? 1 : 0,
              filter: isActive ? "brightness(1.1)" : "brightness(0.4) blur(1px)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className={`absolute w-[280px] md:w-[380px] aspect-video rounded-xl overflow-hidden border ${isActive ? 'border-cyan-500/50 shadow-[0_0_40px_rgba(6,182,212,0.2)]' : 'border-white/10'} bg-black group cursor-pointer`}
          >
            <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className={`absolute inset-0 p-5 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
              <span className="text-cyan-400 text-[8px] font-mono tracking-widest uppercase mb-1">{proj.cat}</span>
              <h4 className="text-lg font-bold uppercase tracking-tight">{proj.title}</h4>
              <p className="text-[9px] text-gray-400 font-mono mt-1">{proj.tech}</p>
            </div>
          </motion.div>
        );
      })}
    </div>

    {/* NAVIGATION CONTROLS */}
    <div className="flex gap-6 mt-10 items-center">
      <button onClick={() => setIndex((p) => (p - 1 + projects.length) % projects.length)} className="p-2 text-white/40 hover:text-cyan-400 transition-all active:scale-90"><ChevronLeft size={20}/></button>
      <div className="flex gap-2">
        {projects.map((_, i) => (
          <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${index === i ? "w-8 bg-cyan-400" : "w-1.5 bg-white/10"}`} />
        ))}
      </div>
      <button onClick={() => setIndex((p) => (p + 1) % projects.length)} className="p-2 text-white/40 hover:text-cyan-400 transition-all active:scale-90"><ChevronRight size={20}/></button>
    </div>
  </div>

  {/* COL 3: TECH STACK (Right Pillar) */}
  <div className="lg:col-span-3 h-110 z-30 flex flex-col justify-between bg-white/[0.03] border border-white/10 p-6 rounded-2xl backdrop-blur-xl shadow-2xl">
    <div className="space-y-6">
        <div className="flex items-center gap-2 text-cyan-400">
        <CpuIcon size={14} className="animate-pulse" />
        <span className="text-[10px] font-mono tracking-widest uppercase font-bold">Stack_Architecture</span>
        </div>

        <div className="flex flex-wrap gap-2">
        {["React", "Next.js", "Node.js", "Laravel", "Python", "Flutter"].map((tech) => (
            <span key={tech} className="text-[9px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300">
            {tech}
            </span>
        ))}
        </div>

        <div className="p-4 bg-white/[0.02] border border-white/5 rounded-xl">
        <p className="text-[9px] text-cyan-400 font-mono mb-2 uppercase underline decoration-cyan-500/20">Dev_Mindset</p>
        <p className="text-[10px] text-gray-300 leading-relaxed font-light italic">
            "Deeply focused on building scalable, user-centric ecosystems. Bridging high-performance logic with pixel-perfect fluidity."
        </p>
        </div>

        <div className="space-y-4">
        {[
            { icon: <Database size={16}/>, title: "Data Lifecycle", sub: "SQL / NoSQL", color: "purple" },
            { icon: <Zap size={16}/>, title: "Optimization", sub: "Core Web Vitals", color: "emerald" },
            { icon: <Globe size={16}/>, title: "Cloud & API", sub: "Restful Architecture", color: "blue" }
        ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4 group">
            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-cyan-400">
                {item.icon}
            </div>
            <div>
                <p className="text-[10px] font-bold text-gray-200 uppercase tracking-tight">{item.title}</p>
                <p className="text-[8px] text-gray-500 font-mono">{item.sub}</p>
            </div>
            </div>
        ))}
        </div>
    </div>
  </div>
</div>
{/* --- ADVANCED BENTO SECTION --- */}
<section className="w-full py-16 px-6  text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* TOP NAV/HEADER */}
        <div className="flex items-center justify-between mb-10 border-b border-white/5 pb-6">
          <div className="flex items-center gap-6">
            <h3 className="text-2xl font-black italic tracking-tighter uppercase">
              Control_<span className="text-cyan-500">Center</span>
            </h3>
            <div className="hidden md:flex gap-4 text-[9px] font-mono text-gray-500">
              <span className="flex items-center gap-1.5"><span className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"/> SYSTEM_READY</span>
              <span className="border-l border-white/10 pl-4 uppercase">Node: 0x2294_Alpha</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: THE FEATURED TERMINAL (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div 
              key={active.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative p-2 bg-[#111] rounded-2xl border border-white/10 shadow-2xl"
            >
              {/* Premium Laptop Frame */}
              <div className="relative aspect-[16/10] bg-black rounded-xl overflow-hidden border border-white/5 shadow-inner">
                {/* Image */}
                <img 
                  src={active.img} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 transition-all duration-700" 
                  alt={active.title} 
                />
                {/* HUD Elements */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                <div className="absolute top-4 left-4 z-20 flex gap-2">
                   <span className="px-2 py-0.5 bg-cyan-500 text-black text-[8px] font-bold uppercase tracking-widest">{active.status}</span>
                </div>
                <div className="absolute bottom-4 right-4 z-20 text-right">
                   <div className="text-[10px] font-mono text-cyan-400 leading-none">REF_ID: 00{active.id}</div>
                   <div className="text-[8px] font-mono text-gray-500 tracking-tighter italic uppercase">{active.metrics}</div>
                </div>
                {/* Scanning Animation */}
                <div className="absolute inset-0 bg-cyan-500/5 animate-scan pointer-events-none z-20" />
              </div>
              
              {/* Laptop Keyboard Lip / Base */}
              <div className="h-2 w-[98%] mx-auto bg-[#1a1a1a] rounded-b-xl border-t border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]" />
            </motion.div>

            {/* Tech Specs Panel Below Laptop */}
            <motion.div 
              key={`desc-${active.id}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-2">
                <h4 className="text-xl font-bold uppercase text-white tracking-tight">{active.title}</h4>
                <p className="text-[11px] text-gray-400 font-mono leading-relaxed">{active.desc}</p>
              </div>
              <div className="bg-white/[0.02] border border-white/5 p-4 rounded-xl">
                <span className="text-[8px] font-mono text-gray-600 block mb-3 uppercase tracking-widest">Stack_Deployment</span>
                <div className="flex flex-wrap gap-2">
                  {active.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 text-[9px] font-mono text-cyan-500 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE TERMINAL LIST (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-[10px] font-mono text-gray-600 mb-4 uppercase tracking-[0.2em]">Select_Node:</div>
            <div className="grid grid-cols-1 gap-3 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
              {dashboards.map((dash, i) => (
                <button
                  key={dash.id}
                  onClick={() => setActiveIndex(i)}
                  className={`group relative flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${
                    activeIndex === i 
                    ? 'bg-cyan-500/10 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]' 
                    : 'bg-white/[0.1] border-white/5 hover:border-white/20'
                  }`}
                >
                  {/* Small Preview Image */}
                  <div className="w-20 aspect-video rounded-md overflow-hidden border border-white/10 flex-shrink-0">
                    <img src={dash.img} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Small Content */}
                  <div className="flex-1 text-left">
                    <div className="flex justify-between items-start">
                      <h6 className={`text-[11px] font-bold uppercase tracking-wide transition-colors ${activeIndex === i ? 'text-cyan-400' : 'text-gray-400'}`}>
                        {dash.title}
                      </h6>
                      <span className="text-[8px] font-mono text-gray-600">0{dash.id}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                       <span className={`w-1 h-1 rounded-full ${activeIndex === i ? 'bg-cyan-400' : 'bg-white/10'}`} />
                       <span className="text-[8px] font-mono text-gray-500 uppercase">{dash.metrics}</span>
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  {activeIndex === i && (
                    <motion.div 
                      layoutId="active-bar"
                      className="absolute right-0 top-1/4 bottom-1/4 w-0.5 bg-cyan-500 shadow-[0_0_8px_cyan]"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>


{/* --- MOBILE SECTION --- */}
<div className="relative w-full max-w-[1100px] py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center overflow-hidden mx-auto">
  
  {/* Subtler Background Parallax Text */}
  <div className="absolute top-10 left-0 text-[10rem] font-black text-white/[0.08] select-none pointer-events-none tracking-tighter italic">
    MOBILE
  </div>

  <div className="space-y-6 z-10">
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-md">
      <Smartphone size={12} className="text-purple-400 animate-pulse" />
      <span className="text-[9px] uppercase tracking-[0.2em] text-purple-300 font-bold">Mobile Excellence</span>
    </div>
    
    <div className="space-y-3">
        <h3 className="text-5xl font-black tracking-tighter uppercase italic leading-[0.95] bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
          The Pocket <br/> Experience
        </h3>
        <p className="text-base text-gray-400 max-w-sm leading-relaxed">
          {mobileProjects[mobIndex].desc}
        </p>
    </div>

    {/* Pagination Controls */}
    <div className="flex items-center gap-4 pt-2">
      <button 
        onClick={() => setMobIndex((prev) => (prev === 0 ? mobileProjects.length - 1 : prev - 1))}
        className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-purple-500/50 transition-all group"
      >
        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      
      <div className="flex gap-1.5">
        {mobileProjects.map((_, i) => (
          <div 
            key={i}
            className={`h-1 transition-all duration-500 rounded-full ${i === mobIndex ? 'w-6 bg-purple-500' : 'w-1.5 bg-white/10'}`}
          />
        ))}
      </div>

      <button 
        onClick={() => setMobIndex((prev) => (prev === mobileProjects.length - 1 ? 0 : prev + 1))}
        className="p-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-purple-500/50 transition-all group"
      >
        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>
  </div>

  {/* Scaled Down Phone Stack */}
  <div className="relative h-[500px] flex items-center justify-center">
    <AnimatePresence mode="popLayout">
      {mobileProjects.map((mob, i) => {
        const diff = i - mobIndex;
        if (Math.abs(diff) > 2) return null;

        return (
          <motion.div
            key={mob.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              x: diff * 100, 
              scale: 1 - Math.abs(diff) * 0.12, 
              zIndex: 50 - Math.abs(diff), 
              opacity: 1 - Math.abs(diff) * 0.6, 
              rotate: diff * 6,
              filter: diff === 0 ? "blur(0px)" : "blur(2px)"
            }}
            exit={{ opacity: 0, scale: 0.5, x: diff * -80 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="absolute w-[220px] h-[440px] rounded-[2.5rem] border-[6px] border-[#1a1a1a] bg-[#050505] shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => setMobIndex(i)}
          >
            {/* Minimal Notch */}
            <div className="absolute top-0 inset-x-0 h-6 z-20 flex justify-center items-start">
                <div className="w-12 h-3 bg-[#1a1a1a] rounded-b-xl" />
            </div>

            <img 
              src={mob.img} 
              alt={mob.title} 
              className={`w-full h-full object-cover transition-opacity duration-700 ${mobIndex === i ? 'opacity-100' : 'opacity-30'}`} 
            />
            
            {/* Focused Project Info */}
            {mobIndex === i && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent text-center"
              >
                <p className="text-[10px] font-mono text-purple-400 mb-0.5 tracking-[0.2em]">{mob.tech}</p>
                <h5 className="text-xl font-black uppercase italic tracking-tighter">{mob.title}</h5>
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </AnimatePresence>
  </div>
</div>

      {/* --- PREMIUM DETAIL OVERLAY --- */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="bg-[#111] border border-white/10 p-8 rounded-3xl max-w-xl w-full relative">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 text-gray-500 hover:text-white"><X/></button>
                <img src={selectedProject.img} className="w-full h-48 object-cover rounded-xl mb-6" />
                <h2 className="text-2xl font-bold uppercase italic tracking-tighter">{selectedProject.title}</h2>
                <p className="text-cyan-400 text-xs font-mono my-2">{selectedProject.tech || selectedProject.cat}</p>
                <p className="text-gray-400 text-sm leading-relaxed mt-4">{selectedProject.desc || "A high-performance digital solution focused on user experience and technical efficiency."}</p>
                <div className="mt-8 flex gap-4">
                  <div className="flex-1 p-3 bg-white/5 rounded-lg text-center"><Zap size={16} className="mx-auto mb-1 text-yellow-500"/><p className="text-[10px]">Optimized</p></div>
                  <div className="flex-1 p-3 bg-white/5 rounded-lg text-center"><Activity size={16} className="mx-auto mb-1 text-cyan-500"/><p className="text-[10px]">Secure</p></div>
                </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .preserve-3d { transform-style: preserve-3d; }
        .text-outline-small { -webkit-text-stroke: 0.5px #22d3ee; color: transparent; }
      `}</style>
    </div>
  );
};

export default Project;