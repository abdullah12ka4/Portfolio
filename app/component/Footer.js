import Link from 'next/link';


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
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse lg:flex-row-reverse justify-between items-center">
        <p className="text-sm mt-3 lg:mt-0 text-center">&copy; {new Date().getFullYear()} Designed and Created by Abdullah. All rights reserved.</p>
        <div className='flex flex-col items-center gap-2'>
            <h1 className='text-xl font-semibold'>Categories</h1>
        <div className="flex space-x-4">
            {navLinks.map((links)=>(
                <Link key={links.path} href={links.path} className="hover:underline capitalize">{links.name}</Link>
            ))}
          
          
        </div>
        </div>
      </div>
    </footer>
  );
}
