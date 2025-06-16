"use client";
import { FaCode, FaPaintBrush, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Web Development",
    description: "Modern and responsive websites built using React.js, Next.js, and the MERN stack.",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Performance Optimization",
    description: "Speed up your site with best practices, lazy loading, and optimized assets.",
  },
];

export default function Services() {
  return (
    <div className="px-4 pb-4 sm:px-10  text-white">
      <h2 className="text-3xl font-bold text-center mb-6">My Services</h2>
      <p className="text-center text-gray-400 mb-12 max-w-xl mx-auto">
        Delivering end-to-end solutions from clean UI design to fast, scalable web development.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="text-yellow-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
