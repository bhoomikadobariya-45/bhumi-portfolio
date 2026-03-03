
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOutletContext } from "react-router-dom";
import { Download, Mail, Github, Linkedin, Award, Cpu, Globe, Database, Sparkles } from "lucide-react";
import pdf from "../../assets/Bhoomika Dobariya.pdf";
import AOS from 'aos';

const HeroSection = () => {
  const { toggleContactModal } = useOutletContext();

  const titles = ["Web Developer", "React Developer", "Full Stack Developer", "Frontend Developer"];
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const currentTitle = titles[index];
    let timeout;

    if (!isDeleting && charIndex < currentTitle.length) {
      timeout = setTimeout(() => {
        setCharIndex(charIndex + 1);
        setDisplayText(currentTitle.slice(0, charIndex + 1));
      }, 100);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setCharIndex(charIndex - 1);
        setDisplayText(currentTitle.slice(0, charIndex - 1));
      }, 50);
    } else if (!isDeleting && charIndex === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section id="home" className="relative w-full flex items-center justify-center px-6 md:px-20 pt-25 top-10 bg-[#f8fafc] dark:bg-slate-900 overflow-hidden py-15 text-gray-900 dark:text-white transition-colors duration-300">
      
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0], 
          y: [0, 50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] right-[-5%] w-600px h-600px bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          x: [0, -80, 0], 
          y: [0, -40, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[-5%] w-500px h-500px bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl w-full z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Summary */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-indigo-600 dark:text-indigo-400 bg-white dark:bg-slate-800 border border-indigo-100 dark:border-indigo-900/50 rounded-full shadow-[0_2px_15px_rgba(79,70,229,0.08)]">
              <Sparkles size={14} className="animate-pulse" /> 
              <span>Dewang Mehta Award Winner</span>
            </div>
            
            <h1 data-aos="zoom-in" className="text-5xl md:text-[80px] font-[950] text-slate-900 dark:text-white tracking-tight leading-[0.9] mb-4">
              I'm <span className="relative inline-block text-transparent bg-clip-text bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 drop-shadow-sm">
                Bhoomika
              </span>
            </h1>

            <div className="min-h-40px flex items-center justify-center lg:justify-start">
              <h2  data-aos="zoom-in"  className="text-2xl md:text-3xl font-semibold text-slate-500/90 dark:text-slate-400 tracking-tight">
                 <span className="text-slate-800 dark:text-slate-200">{displayText}</span>
                <span className="inline-block w-3px h-8 ml-1 bg-blue-600 animate-bounce align-middle" />
              </h2>
            </div>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            data-aos="fade-up"
            className="max-w-xl text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed mx-auto lg:mx-0 font-medium"
          >
            Currently driving innovation as a <span className="text-slate-900 dark:text-white font-bold underline decoration-blue-500/30 decoration-4">Web Developer Intern</span> at MindstormSoft. 
            I engineer high-performance web architectures and scalable full-stack systems with a focus on code elegance and user-centric design.
          </motion.p>

          <div data-aos="fade" className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
            <motion.button
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleContactModal}
              className="group px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-slate-200 dark:shadow-blue-900/20 flex items-center gap-3 transition-all relative overflow-hidden"
            >
              <span className="relative z-10">Start a Conversation</span>
              <Mail size={20} className="group-hover:rotate-12 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>

            <motion.a
              whileHover={{ 
                y: -4,
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.05)"
              }}
              whileTap={{ scale: 0.98 }}
              href={pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 font-bold rounded-2xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all flex items-center gap-3 group"
            >
              Resume <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
            </motion.a>
          </div>
          <div 
          data-aos="fade-down"
          className="flex gap-4 justify-center lg:justify-start pt-2 border-t border-slate-100 dark:border-slate-800 mt-2">
            {[
              { icon: <Github size={22} />, url: "https://github.com/bhoomikadobariya-45", label: "GitHub" },
              { icon: <Linkedin size={22} />, url: "https://www.linkedin.com/in/bhoomika-dobariya-b45909320/", label: "LinkedIn" }
            ].map((social, i) => (
              <motion.a 
                key={i} 
                href={social.url}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all font-bold text-sm"
              >
                <div className="relative p-2.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-xl transition-all duration-300 group-hover:shadow-xl group-hover:shadow-blue-500/10 group-hover:border-blue-500/50 group-hover:scale-110 group-hover:-rotate-3 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>
                </div>
                <span className="hidden sm:inline transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        
        <motion.div 
          className="relative flex items-center justify-center h-125"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          
          <div className="relative z-20 w-52 h-52 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center border border-white dark:border-slate-700/50 group hover:scale-105 transition-transform duration-500">
            <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl mb-2 group-hover:rotate-12 transition-transform">
              <Cpu size={44} className="text-indigo-600 dark:text-indigo-400" />
            </div>
            <span className="font-black text-slate-800 dark:text-white text-2xl tracking-tight">Full-Stack</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 font-black">Developer</span>
          </div>

          
          <motion.div 
            animate={{ y: [0, -20, 0] }} 
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute top-10 right-10 z-30 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 dark:border-slate-700"
          >
            <div className="w-10 h-10 bg-amber-50 dark:bg-amber-900/30 rounded-lg flex items-center justify-center text-amber-500 dark:text-amber-400"><Sparkles size={20} /></div>
            <div>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-bold uppercase">Internship</p>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">MindstormSoft</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 20, 0] }} 
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 z-30 bg-slate-900 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400"><Globe size={20} /></div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">Main Project</p>
              <p className="text-sm font-bold text-white">MedCare AI</p>
            </div>
          </motion.div>

          <motion.div 
            animate={{ x: [0, 15, 0] }} 
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-1/2 -right-4 z-30 bg-white dark:bg-slate-800 p-3 rounded-xl shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2"
          >
            <Database size={16} className="text-emerald-500" />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-200">MySQL / PHP</span>
          </motion.div>

          
          <div className="absolute w-87.5 h-87.5 border border-dashed border-slate-200 dark:border-slate-800 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute w-112.5 h-112.5 border border-slate-100 dark:border-slate-900 rounded-full"></div>
          
          {/* Tech Bubbles */}
          <div className="absolute top-1/4 left-10 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-blue-900/40 font-bold text-xs">JS</div>
          <div className="absolute bottom-1/4 right-10 w-14 h-14 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border border-indigo-50 dark:border-indigo-900/50 rounded-full flex items-center justify-center shadow-lg font-bold text-xs">React</div>
        </motion.div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;