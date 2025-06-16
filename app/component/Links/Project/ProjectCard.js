"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  tech = [],
  liveLink,
  githubLink,
}) {
  return (
    <div className="w-full sm:min-w-[309px] sm:max-w-[310px] bg-gray-950 text-white border border-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
      <div className="relative w-full h-48 md:h-48 lg:h-52">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
          priority
        />
      </div>
      <div className="py-4 px-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold truncate">{title}</h2>
        <p className="text-gray-400 text-sm overflow-hidden overflow-ellipsis h-11 text-wrap">{description}</p>

        {tech.length > 0 && (
          <div className="flex gap-2 max-w-[100%] overflow-hidden mt-1">
            {tech.map((t, index) => (
              <span
                key={index}
                className="text-xs bg-yellow-400/90 text-black px-2 py-1 rounded-full font-medium"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          {liveLink && (
            <Link
              href={liveLink}
              target="_blank"
              className="text-sm bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-medium text-white text-center"
            >
              Live Demo
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              target="_blank"
              className="text-sm border border-green-500 hover:bg-green-100 text-green-500 hover:text-green-700 px-4 py-2 rounded-lg font-medium text-center"
            >
              GitHub
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
