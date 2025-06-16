import Link from 'next/link';
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';


export default function Footer() {
    const navLinks = [
        {name: "home" , path: '/'},
        {name: "about" , path: '#about'},
        {name: "projects" , path: '#projects'},
        {name: "services" , path: '#services'},      
        {name: "contact" , path: '#contact'},
    ]
  return (
    <footer className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse justify-between items-center gap-4 md:gap-10">
        <p className="text-sm mt-3 lg:mt-0 text-center">&copy; {new Date().getFullYear()} Designed and Created by Abdullah. All rights reserved.</p>
        <div className='flex gap-4 flex-col md:flex-row justify-between w-[70vw]'>
          <div className='flex flex-col items-center gap-2 mb-2'>
            <h1 className='text-xl font-semibold'>Categories</h1>
        <div className="flex space-x-4">
            {navLinks.map((links)=>(
                <Link key={links.path} href={links.path} className="hover:underline capitalize">{links.name}</Link>
            ))} 
        </div>
        </div>
        <div className='flex flex-col items-center gap-2 mb-4'>
            <h1 className='text-xl font-semibold'>Follow Me</h1>
        <div className="flex space-x-4">
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
        </div>
        </div>
      </div>
    </footer>
  );
}
