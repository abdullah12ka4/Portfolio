"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";

// Tech stack array
const tech = [
  { name: "React", icon: <FaReact className="text-blue-500" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

export default function Technology() {

  return (
    <section className="flex flex-col p-8 pb-20 gap-10 justify-center bg-[#0e0e1b] text-white">
      <h1 className="text-3xl font-bold uppercase text-center mb-4">
        Technologies I Work With
      </h1>
      <div className="flex flex-col sm:flex-row gap-5 overflow-x-auto overflow-y-hidden pb-5">
        {tech.map((t, index)=>(
          <motion.div key={index}  initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}className="flex flex-col gap-5 items-center bg-gray-600 rounded-md p-14">
            <div className="text-[200px] sm:text-[300px]">{t.icon}</div>
            <h1 className="text-2xl font-semibold">{t.name}</h1>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
