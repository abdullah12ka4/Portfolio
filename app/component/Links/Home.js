"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between text-white px-6 sm:px-12 py-12">
      
      {/* Left Section */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col justify-center items-start space-y-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-sm text-yellow-400 uppercase">Welcome to my portfolio</p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Hi, I&#39;m <span className="text-yellow-400">Abdullah</span>
        </h1>
        <p className="text-gray-400 text-lg">
          A passionate Frontend & MERN Stack Developer crafting dynamic and responsive web applications using React.js & Next.js.
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <Link
            href="/resume.pdf" // make sure this file is in the public folder
            target="_blank"
            className="bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition"
          >
            Hire Me
          </Link>
          <div className="flex items-center gap-4 mt-1">
            <Link href="https://github.com/abdullah12ka4" target="_blank">
              <FaGithub className="text-2xl hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://www.linkedin.com/in/abdullah-malik-769770309/" target="_blank">
              <FaLinkedin className="text-2xl hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://www.youtube.com/@itsabdullahtech" target="_blank">
              <FaYoutube className="text-2xl hover:text-yellow-400 transition" />
            </Link>
            <Link href="https://www.instagram.com/_____abdullah_here/" target="_blank">
              <FaInstagram className="text-2xl hover:text-yellow-400 transition" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Right Section - Image */}
      <motion.div
        className="w-full lg:w-1/2 h-full flex justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-64 h-64 lg:w-[400px] lg:h-[500px] rounded-2xl overflow-hidden border-4 border-yellow-400 shadow-xl">
          <Image
            src="/Main.jpg"
            alt="Abdullah"
            fill
            className="object-cover object-top-left"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
