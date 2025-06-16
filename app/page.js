'use client';
import React from 'react';
import { useEffect, useRef, useState } from 'react';
import About from './component/Links/About';
import Projects from './component/Links/Project/Projects';
import Services from './component/Links/services';
import Contact from './component/Links/Contact';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './component/Links/Home';
import Technology from './component/Links/Technology';

export default function index() {
  const [isLoading, setisLoading] = useState(false)
  const [activeLink, setActiveLink] = useState('home');

  const sections = ['home', 'about', 'projects','technology', 'services', 'contact'];
  const refs = useRef({});

  // Assign refs dynamically
  sections.forEach((id) => {
    if (!refs.current[id]) {
      refs.current[id] = React.createRef();
    }
  });

  useEffect(() => {  
  setisLoading(true)
   const activeL = ()=>{
     const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = refs.current[id].current;
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = refs.current[id].current;
        if (el) observer.unobserve(el);
      });
    };
   }
   activeL();
   setisLoading(false)
  }, []);

  return (
    <div>
      <Navbar activeLink={activeLink} />

{isLoading ? <div className='min-h-[80vh] flex justify-center items-center'><h1>Loading....</h1></div> : <>      {sections.map((id) => (
        <section
          key={id}
          ref={refs.current[id]}
          id={id}
          className={`border-b border-white ${id === 'home' ? "pt-2": "pt-14"}`}
        >
          {id === 'home' && <Home/>}
          {id === 'about' && <About />}
          {id === 'projects' && <Projects />}          
          {id === 'technology' && <Technology />}
          {id === 'services' && <Services />}          
          {id === 'contact' && <Contact />}          
        </section>
        ))}</>}

      <Footer/>
    </div>
  );
}
