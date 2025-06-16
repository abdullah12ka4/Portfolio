"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiJavascript, SiExpress } from "react-icons/si";

const techStack = [
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
    <section className="pb-4 text-white px-4 sm:px-8">
      <motion.h2
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technologies I Work With
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center h-56 sm:h-64 sm:w-56 justify-center bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15
            }}
          >
            <div className=" text-[150px] mb-2">{tech.icon}</div>
            <p className="text-2xl font-medium text-center">{tech.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
