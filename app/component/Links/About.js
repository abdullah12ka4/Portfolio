"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 pb-4 text-white">
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-10">
        
        {/* Image Section */}
        <div className="w-40 h-40 md:w-60 md:h-60 relative rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
          <Image
            src="/profile.jpg"
            alt="Your Name"
            fill
            sizes="(max-width: 768px) 100vw, 256px"
            className="object-cover"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 text-center text-base sm:text-lg leading-relaxed">
           {'I,m'} a self-taught Frontend and MERN stack developer with hands-on experience building modern web apps using <span className="text-yellow-400 font-medium">React.js</span> and <span className="text-yellow-400 font-medium">Next.js</span>. 
            {'I,ve'} developed multiple personal projects that showcase responsive design, dynamic UI, and API integrations. 
            While I {'haven,t'} worked in a professional organization yet, {'I,m'} passionate about coding and constantly refining my skills to match real-world standards.
          </p>
        </div>
      </div>
    </section>
  );
}
