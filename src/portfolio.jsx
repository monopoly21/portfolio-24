"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, LoaderPinwheel, CodeXml, Database, Link, Sun, Moon } from 'lucide-react';
import MapComponent from './MapComponent';
import FavoriteSong from './Song';

export default function Portfolio() {
  const techStack = {
    Frontend: ['React', 'Next.js', 'Shadcn', 'SCSS', 'Tailwindcss', 'Framer-Motion', 'Recoil', 'Tanstack Query'],
    Backend: ['Node.js', 'Hono.js', 'Express.js', 'NPM'],
    'Db & Services': ['MongoDB', 'Postman', 'Cloudflare Workers', 'Prisma ORM', 'Docker', 'SQL'],
    'Currently Learning': ['Solidity', 'Kubernetes']
  };

  const [linkText, setLinkText] = useState('Socials');
  const [currentTime, setCurrentTime] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to update time in IST
  const updateTime = () => {
    const now = new Date();
    const istTime = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'short',
      timeStyle: 'long',
    }).format(now);
    setCurrentTime(istTime);
  };

  // Update time every second
  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    updateTime(); // Initial call to set the time immediately
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to body
  useEffect(() => {
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen p-4 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          className={`p-4 rounded-lg hover:border-current ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
              <a className="flex items-center justify-center p-2 rounded-lg">
                <CodeXml className="w-6 h-6" />
              </a>
              <h2 className="text-4xl font-bold">TECH STACK</h2>
            </div>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
              {isDarkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>

          {Object.entries(techStack).map(([category, technologies]) => (
            <div key={category} className="mb-4">
              <h3 className="text-lg font-semibold mb-2 flex">
                {category === 'Db & Services' && <Database className='mr-1 w-5 mt-1 h-5 flex items-center justify-center' />}
                {category}:
              </h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map(tech => (
                  <span key={tech} className={`px-2 py-1 rounded hover:border hover:border-current transition duration-300 text-sm ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className={`p-4 rounded-lg ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center mb-4">
            <img src="./img/mr-bean-funny.gif" alt="Profile" className="w-16 h-16 rounded-full mr-4" />
            <div>
              <h2 className="text-3xl font-bold">Rahul Balani</h2>
              <p className={`${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>@monopoly21</p>
            </div>
          </div>
          <p className="mb-4">energy is my currency</p>
          <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Hello, I'm Rahul!</p>
          <p className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>A 3rd year undergrad at NITK. I'm on a mission to continually learn and adapt, exploring the latest trends and tools in the tech landscape. Let's create something amazing together!</p>
          <div>
            <MapComponent />
          </div>
          <div className='flex justify-between'>
            <div className='mt-2'>
              <p className={`text-xs font-light font-mono tabular-nums tracking-wider ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`}>"Code is like humor.<br></br> When you have to <br></br>explain it, it's bad."</p>
            </div>
            <div className="mt-4 flex-col items-center">
              <div className='flex items-center'>
                <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
                <span className="text-sm">Available for work</span>
              </div>
              <div className="flex items-center justify-center">
                <time className={`text-xs font-light font-mono tabular-nums tracking-wider ${isDarkMode ? 'text-zinc-500' : 'text-gray-500'}`} dateTime={new Date().toISOString()} aria-label="Current time">
                  {currentTime}
                </time>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={`p-4 rounded-lg ${isDarkMode ? 'bg-zinc-900' : 'bg-white'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className='flex'>
            <Link className='w-5 h-5 mt-3 mr-2'></Link>
            <motion.h2 
              className="text-4xl font-bold mb-4"
              key={linkText}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {linkText}
            </motion.h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <a 
              href="https://github.com/monopoly21" 
              className={`flex items-center justify-center p-2 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}
              onMouseEnter={() => setLinkText('GitHub')}
              onMouseLeave={() => setLinkText('Socials')}
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/RAhulBALani21" 
              className={`flex items-center justify-center p-2 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}
              onMouseEnter={() => setLinkText('Twitter')}
              onMouseLeave={() => setLinkText('Socials')}
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rahul-nitesh-kumar-balani-578664252/" 
              className={`flex items-center justify-center p-2 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}
              onMouseEnter={() => setLinkText('LinkedIn')}
              onMouseLeave={() => setLinkText('Socials')}
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:balani343@gmail.com" 
              className={`flex items-center justify-center p-2 rounded-lg ${isDarkMode ? 'bg-zinc-800' : 'bg-gray-200'}`}
              onMouseEnter={() => setLinkText('Email')}
              onMouseLeave={() => setLinkText('Socials')}
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <FavoriteSong isDarkMode={isDarkMode} />
        </motion.div>

        <motion.div
          className={`p-4 rounded-lg flex items-center justify-center ${isDarkMode ? 'bg-purple-600' : 'bg-purple-400'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <LoaderPinwheel className="w-6 h-6 animate-spin mr-2" />
          <h2 className="text-2xl font-bold">PROJECTs</h2>
        </motion.div>
      </div>
    </div>
  );
}