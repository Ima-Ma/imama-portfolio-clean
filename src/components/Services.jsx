import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, Cpu, Terminal, Layers, Smartphone, Sparkles 
} from "lucide-react";

const services = [
  {
    title: "Full-Stack Dev",
    desc: "Scalable MERN & .NET solutions with Next.js architecture.",
    icon: <Code2 size={20} />,
    tags: ["React", "Node", "MERN"]
  },
  {
    title: "IoT & Real-time",
    desc: "MQTT protocols and live data monitoring dashboards.",
    icon: <Cpu size={20} />,
    tags: ["MQTT", "Sockets", "IoT"]
  },
{
    title: "Frontend Development",
    desc: "Crafting high-performance, interactive UIs with React and Next.js.",
    icon: <Code2 size={20} />, // You can use the Code2 icon from lucide-react
    tags: ["React", "Next.js", "Angular"]
  },
  {
    title: "Backend & API",
    desc: "Secure REST & GraphQL architecture with SQL/NoSQL.",
    icon: <Terminal size={20} />,
    tags: ["REST", "SQL", "EF Core"]
  },
  {
    title: "UI/UX Design",
    desc: "Modern Glassmorphism and immersive Framer animations.",
    icon: <Layers size={20} />,
    tags: ["Framer", "Tailwind", "UI"]
  },
  {
    title: "Mobile Apps",
    desc: "Native-speed cross-platform apps built with Flutter.",
    icon: <Smartphone size={20} />,
    tags: ["Flutter", "Firebase", "Dart"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Services = () => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full max-h-[85vh] overflow-y-auto px-4 py-6 md:px-12 custom-scroll"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="mb-8 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2 text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-2"
          >
            <Sparkles size={12} />  Expertise
          </motion.div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tight uppercase text-white">
            OUR <span className="text-cyan-500">SERVICE</span>
          </h2>
          <div className="h-0.5 w-12 bg-cyan-500 mt-2"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-5 bg-[#0a122a84] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/50"
            >
              {/* Animated Corner Glow */}
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all"></div>
              
              {/* Icon Header */}
              <div className="mb-3 p-2 bg-cyan-500/10 w-fit rounded-lg border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                {service.icon}
              </div>

              <h3 className="text-[13px] font-bold mb-1.5 tracking-wider uppercase text-white group-hover:text-cyan-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-[11px] leading-relaxed mb-4 line-clamp-2 group-hover:text-gray-200">
                {service.desc}
              </p>

              {/* Tag Badges */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="text-[8px] font-mono font-bold text-cyan-500/80 bg-cyan-500/5 border border-cyan-500/20 px-1.5 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-500 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Services;