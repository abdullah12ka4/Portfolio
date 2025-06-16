import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
  const ProjectData = [
    {
      title: "PassOP - Password Manager",
      description:
        "A secure password manager built with React and localStorage. Easily store, view, copy, and manage your site credentials.",
      imageUrl: "icon.svg",
      tech: ["React", "LocalStorage", "Tailwind", "Toastify"],
      liveLink: "https://pass-op-git-main-abdullah12ka4s-projects.vercel.app/",
      githubLink: "https://github.com/abdullah12ka4/PassOP",
    },
    {
      title:"Portfolio - My Portfolio Old version",
      description:"This is my old version portfolio designed and created by Abdullah if you wanna make portfolio like that or like my new portfolio contact me using contact section",
      imageUrl:"/portfolioProject.png",
      tech:["Nextjs", "Tailwindcss", "Type.js", "Animation", "Teact.jsfslfjsd"],
      liveLink: "https://my-portfolio-zeta-two-94.vercel.app/",
      githubLink: "https://github.com/abdullah12ka4/My-Portfolio/tree/main/public"
    }
  ];
  return (
    <div className="p-4 pb-4 sm:p-8">
      <h1 className="text-3xl font-bold text-center mb-2">My Projects</h1>
      <h2 className="text-sm text-center mt-15 mb-10">
        Full-stack projects built with React.js, Next.js, and the MERN stack,
        showcasing responsive design and API integration.
      </h2>

      <div className="flex gap-2 pb-4 overflow-y-hidden overflow-x-auto whitespace-nowrap ">
        <div className="w-full flex flex-col sm:flex-row gap-2">
          {ProjectData.map((ProjectD, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="my-4">
                  <ProjectCard
                  title={ProjectD.title}
                  description={ProjectD.description}
                  imageUrl={ProjectD.imageUrl}
                  tech={ProjectD.tech}
                  liveLink={ProjectD.liveLink}
                  githubLink={ProjectD.githubLink}
                />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
