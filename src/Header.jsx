

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Header({ isDark, onToggleTheme, onContactClick }) {
  const [active, setActive] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navRef = useRef(null);

  const menu = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contact", href: "#contact" }
  ];

  // --- Scroll Spy Logic ---
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const match = menu.find(
            (item) => item.href === `#${entry.target.id}`
          );
          if (match) setActive(match.name);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    menu.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

 


  return (
    <header className="fixed top-0 left-0 w-full z-100 px-6 py-4 md:py-6 font-sans bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/20 dark:border-slate-800/50 shadow-sm transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-3 cursor-none"
        >
          <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20 rotate-3">
            BD
          </div>
          <span className="hidden sm:block font-black text-xl text-slate-900 dark:text-white tracking-tighter">
            Bhoomika
          </span>
        </motion.div>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden lg:flex relative items-center bg-gray-200/50 dark:bg-slate-800/50 p-1.5 rounded-full"
        >
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActive(item.name)}
              className={`relative z-10 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-none
                ${active === item.name
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
            >
              {item.name}
              {active === item.name && (
                <motion.div 
                  layoutId="activePill"
                  className="absolute inset-0 bg-white dark:bg-slate-700/80 backdrop-blur-md rounded-full shadow-md border border-white/50 dark:border-slate-600/50 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* 🌙 THEME BUTTON (NO LOGIC HERE) */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:scale-110 active:scale-95 transition-all border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-indigo-500/10"
          >
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"} text-lg`} />
          </button>


          <button 
            onClick={onContactClick}
            className="hidden md:block px-6 py-2 bg-gray-900 dark:bg-blue-600 text-white text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-blue-500/10"
          >
            Let's Talk
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl bg-gray-100 dark:bg-slate-800 border"
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-slate-600 dark:text-slate-300`} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-[calc(100%+1px)] left-0 w-full bg-white dark:bg-slate-900 shadow-xl border-t border-b border-gray-200 dark:border-slate-800 p-4"
        >
          <nav className="flex flex-col gap-2">
            {menu.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActive(item.name);
                  setIsMenuOpen(false);
                }}
                className={`px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  active === item.name
                    ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                    : "text-slate-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-800"
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                if (onContactClick) onContactClick();
                setIsMenuOpen(false);
              }}
              className="mt-2 w-full px-4 py-3 bg-gray-900 dark:bg-blue-600 text-white text-sm font-bold rounded-xl active:scale-95 transition-all text-center"
            >
              Let's Talk
            </button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}
