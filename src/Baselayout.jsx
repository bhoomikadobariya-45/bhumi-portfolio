import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import ContactModal from "./Componant/Portfolio/ContactModal";

const BaseLayout = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const toggleContactModal = () => {
    setIsContactModalOpen(prev => !prev);
  };

  return (
    <div className="min-h-screen flex flex-col bg-noise
                    bg-white text-slate-900
                    dark:bg-slate-900 dark:text-slate-50 transition-colors duration-300">

      <Header isDark={isDark} onToggleTheme={toggleTheme} onContactClick={toggleContactModal} />

      <main className="grow w-full">
        <Outlet context={{ toggleContactModal }} />
      </main>

      <Footer />

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default BaseLayout;

