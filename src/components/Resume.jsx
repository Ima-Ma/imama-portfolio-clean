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
      // mt-60 preserved. h-[calc(100vh-15rem)] ensures "One View" by subtracting the margin from the total height.
      className="w-full h-[calc(80vh-2rem)]  overflow-hidden grid grid-cols-1 lg:grid-cols-3 gap-3 p-4 text-white font-sans text-xs"
    >
      {/* --- LEFT COLUMN --- */}
      <div className="flex flex-col gap-3 h-full overflow-hidden">
        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-4 rounded-xl">
          <h1 className="text-xl font-black tracking-tighter text-cyan-400 mb-2 uppercase">Ima-Ma Mushtaq</h1>
          <div className="space-y-2 font-mono text-gray-400 text-[10px]">
            <div className="flex items-center gap-2"><Mail size={12} className="text-purple-400"/> imamamushtaq2006@gmail.com</div>
            <div className="flex items-center gap-2"><Phone size={12} className="text-purple-400"/> 03112033680</div>
            <div className="flex items-center gap-2"><MapPin size={12} className="text-purple-400"/> Karachi, Pakistan</div>
            <a href="https://github.com/Ima-Ma" target="_blank" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
              <Github size={12} className="text-purple-400"/> github.com/Ima-Ma
            </a>
          </div>
        </motion.div>

        <motion.section variants={itemVariants} className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-4 border-b border-purple-500/30 pb-1">
            <User size={16} className="text-purple-400" />
            <h3 className="font-bold tracking-tighter uppercase text-[11px]">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-1.5 overflow-y-auto pr-1">
            {[ "Teamwork", "Adaptability", "Time Management", "Critical Thinking"].map((skill) => (
              <span key={skill} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-[9px] text-gray-300">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-4 mt-6 border-b border-purple-500/30 pb-1">
            <Cpu size={16} className="text-purple-400" />
            <h3 className="font-bold tracking-tighter uppercase text-[11px]">Technical Stack</h3>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[
  "React",
  "Node.js",
  ".NET",
  "Flutter",
  "MERN",
  "SQL",
  "MySQL",
  "MQTT",
  "Firebase",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "PHP",
  "Laravel",
  "IIS",
  "Bootstrap",
  "Chart.js",
  "Entity Framework",
  "REST API",
  "Git",
  "GitHub"
].map((tech) => (
              <span key={tech} className="px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/20 rounded text-[9px] text-cyan-300 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </motion.section>
      </div>

      {/* --- MIDDLE COLUMN --- */}
      <div className="flex flex-col gap-3 h-full overflow-hidden">
        <motion.section variants={itemVariants} className="bg-white/5 border border-white/10 p-4 rounded-xl h-full flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-4 border-b border-purple-500/30 pb-1">
            <Briefcase size={16} className="text-purple-400" />
            <h3 className="font-bold tracking-tighter uppercase text-[11px]">Experience</h3>
          </div>
          <div className="space-y-4 overflow-y-auto pr-1">
            <div className="group bg-white/5 p-3 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all">
              <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">2025 - 2026</span>
              <h4 className="text-xs font-bold text-cyan-400 mt-1">Full Stack Developer</h4>
              <p className="text-[10px] text-gray-300 mb-2">Dreams Network and Technology </p>
              <ul className="text-[10px] text-gray-400 space-y-1 list-disc ml-3">
                <li>Developed apps using .NET, React, Flutter, and MERN.</li>
                <li>Managed SQL Server and Firebase.</li>
                <li>Built IoT systems using MQTT and Web APIs.</li>
              </ul>
            </div>
            <div className="group bg-white/5 p-3 rounded-lg border border-white/5 hover:border-cyan-500/30 transition-all">
              <span className="text-[9px] font-mono bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">2021 - 2024</span>
              <h4 className="text-xs font-bold text-cyan-400 mt-1">Freelance Developer</h4>
              <p className="text-[10px] text-gray-300 mb-2">Local Clients</p>
              <ul className="text-[10px] text-gray-400 space-y-1 list-disc ml-3">
                <li>Delivered IoT solutions and admin panels.</li>
                <li>Integrated Node.js with automated dashboards.</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* --- RIGHT COLUMN --- */}
      <div className="flex flex-col gap-3 h-full overflow-hidden">
        <motion.section variants={itemVariants} className="bg-white/5 border border-white/10 p-4 rounded-xl flex-1 flex flex-col min-h-0">
          <div className="flex items-center gap-2 mb-4 border-b border-purple-500/30 pb-1">
            <GraduationCap size={16} className="text-purple-400" />
            <h3 className="font-bold tracking-tighter uppercase text-[11px]">Education</h3>
          </div>
          <div className="space-y-4 overflow-y-auto pr-1">
            {[
              { title: "Bachelors in Computer Science", school: "Indus University", date: "2026 - Present" },
              { title: "Diploma in Software Engineering", school: "Aptech Learning", date: "2022 - 2026" },
              { title: "Intermediate in Computer Science", school: "Govt Degree SRE Majeed", date: "2023 - 2025" },
              { title: "Matriculation in Computer Science", school: "Karachi Cambridge", date: "2023 - 2025" }
            ].map((edu, i) => (
              <div key={i} className="relative pl-3 border-l-2 border-cyan-500/20">
                <h4 className="text-[11px] font-bold">{edu.title}</h4>
                <p className="text-gray-400 text-[10px]">{edu.school}</p>
                <span className="text-[9px] text-purple-400 font-mono">{edu.date}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-xl">
          <a href="/cv.pdf" target="_blank">
            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black font-black py-2.5 px-4 rounded-lg transition-all active:scale-95 w-full justify-center group text-[10px] tracking-widest uppercase">
              <Download size={14} /> DOWNLOAD CV
            </button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Resume;