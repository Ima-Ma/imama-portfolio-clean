import React from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Github,
  Download,
  Cpu
} from "lucide-react";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // FIX: Changed h-screen logic. Mobile is auto-height with scrolling, Desktop is fixed-height.
      className="w-full min-h-screen lg:h-[calc(90vh-2rem)] overflow-y-auto lg:overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 md:p-6 text-white font-sans"
    >
      {/* --- LEFT COLUMN: PROFILE & SKILLS --- */}
      <div className="flex flex-col gap-4 h-full">
        {/* Name & Contact Card */}
        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm">
          <h1 className="text-2xl font-black tracking-tighter text-cyan-400 mb-3 uppercase">Ms. Imama Mushtaq</h1>
          <div className="space-y-2.5 font-mono text-gray-400 text-[11px] md:text-[10px]">
            <div className="flex items-center gap-3"><Mail size={14} className="text-cyan-500"/> corestack.technologies.pk@gmail.com</div>
            <div className="flex items-center gap-3"><Phone size={14} className="text-cyan-500"/> +92 321 3735979</div>
            <div className="flex items-center gap-3"><MapPin size={14} className="text-cyan-500"/> Karachi, Pakistan</div>
            <a href="https://github.com/Ima-Ma" target="_blank" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
              <Github size={14} className="text-cyan-500"/> github.com/Ima-Ma
            </a>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.section variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex-1 flex flex-col min-h-0 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
            <User size={18} className="text-cyan-400" />
            <h3 className="font-bold tracking-widest uppercase text-xs">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Teamwork", "Adaptability", "Time Management", "Critical Thinking"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300">
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
            <Cpu size={18} className="text-cyan-400" />
            <h3 className="font-bold tracking-widest uppercase text-xs">Technical Stack</h3>
          </div>
          {/* Scrollable tech tags on desktop, normal flow on mobile */}
          <div className="flex flex-wrap gap-2 overflow-y-auto lg:max-h-[300px] custom-scroll pr-1">
            {["React", "Node.js", ".NET", "Flutter", "MERN", "SQL", "MySQL", "MQTT", "Firebase", "Next.js", "PHP", "Laravel", "Tailwind", "REST API", "Git"].map((tech) => (
              <span key={tech} className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-[10px] text-cyan-300 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* --- MIDDLE COLUMN: EXPERIENCE --- */}
      <div className="flex flex-col gap-4 h-full">
        <motion.section variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl h-full flex flex-col min-h-0 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
            <Briefcase size={18} className="text-cyan-400" />
            <h3 className="font-bold tracking-widest uppercase text-xs">Experience</h3>
          </div>
          
          <div className="space-y-5 overflow-y-auto custom-scroll pr-1">
            {/* FOUNDER ROLE */}
            <div className="group bg-cyan-500/5 p-4 rounded-xl border border-cyan-500/20 hover:border-cyan-400 transition-all">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded">2025 - PRESENT</span>
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
              </div>
              <h4 className="text-sm font-bold text-white mt-2 uppercase tracking-wider">Founder & Owner</h4>
              <p className="text-[11px] text-cyan-400 font-bold mb-3">Core Stack Technologies</p>
              <ul className="text-[11px] text-gray-400 space-y-1.5 list-disc ml-4 leading-relaxed">
                <li>Leading digital transformation for global clients.</li>
                <li>Architecting scalable full-stack & cloud-native solutions.</li>
                <li>Specializing in custom IoT and real-time systems.</li>
              </ul>
            </div>

            {/* DREAMS NETWORK */}
            <div className="group bg-white/5 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-all">
              <span className="text-[10px] font-mono bg-white/10 text-gray-300 px-2 py-0.5 rounded">2025 - 2026</span>
              <h4 className="text-sm font-bold text-cyan-400 mt-2 uppercase tracking-wider">Full Stack Developer</h4>
              <p className="text-[11px] text-gray-300 mb-3">Dreams Network and Technology</p>
              <ul className="text-[11px] text-gray-400 space-y-1.5 list-disc ml-4 leading-relaxed">
                <li>Developed apps using .NET, React, and Flutter.</li>
                <li>Managed SQL Server and Firebase ecosystems.</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* --- RIGHT COLUMN: EDUCATION & DOWNLOAD --- */}
      <div className="flex flex-col gap-4 h-full">
        <motion.section variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex-1 flex flex-col min-h-0 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-4 border-b border-cyan-500/20 pb-2">
            <GraduationCap size={18} className="text-cyan-400" />
            <h3 className="font-bold tracking-widest uppercase text-xs">Education</h3>
          </div>
          <div className="space-y-6 overflow-y-auto custom-scroll pr-1">
            {[
              { title: "BS in Computer Science", school: "Indus University", date: "2026 - Present" },
              { title: "Diploma in Software Engineering", school: "Aptech Learning", date: "2022 - 2026" },
              { title: "Intermediate (CS)", school: "Govt Degree SRE Majeed", date: "2023 - 2025" }
            ].map((edu, i) => (
              <div key={i} className="relative pl-4 border-l-2 border-cyan-500/20 py-1">
                <div className="absolute -left-[5px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-500/40"></div>
                <h4 className="text-[12px] font-bold text-white">{edu.title}</h4>
                <p className="text-gray-400 text-[11px]">{edu.school}</p>
                <span className="text-[10px] text-cyan-500 font-mono mt-1 block tracking-wider">{edu.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Download Section */}
        <motion.div variants={itemVariants} className="bg-cyan-500/5 border border-cyan-500/20 p-5 rounded-2xl">
          <a href="/cv.pdf" target="_blank" className="block">
            <button className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-3.5 px-6 rounded-xl transition-all active:scale-95 w-full justify-center group text-[11px] tracking-[0.2em] uppercase">
              <Download size={16} /> DOWNLOAD CV
            </button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;