
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "Certifications", href: "#certificates" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "fab fa-github", link: "https://github.com/bhoomikadobariya-45", label: "GitHub" },
    { icon: "fab fa-linkedin-in", link: "https://www.linkedin.com/in/bhoomika-dobariya-b45909320/", label: "LinkedIn" },
    { icon: "fab fa-instagram", link: "#", label: "Instagram" },
    { icon: "fab fa-whatsapp", link: "https://wa.me/918849810960", label: "WhatsApp" },
  ];

  return (
    <footer className="relative w-full bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 pt-17 pb-10 px-8 md:px-20 font-sans overflow-hidden transition-colors duration-300">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="flex max-sm:flex-col justify-between gap-12 mb-12">

          {/* Column 1 */}
          <div className="space-y-6" data-aos="fade-up">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-xl shadow-blue-500/20 rotate-3">
                BD
              </div>
              <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white">
                Bhoomika Dobariya
              </span>
            </div>

            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
              Computer Engineer and{" "}
              <span className="text-[#155dfc]">React Web Developer</span>{" "}
              passionate about creating high-performance, responsive web applications. 
              Dewang Mehta Award winner.
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.1, rotate: i % 2 === 0 ? 3 : -3 }}
                  className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-white dark:hover:bg-slate-700 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-100 dark:hover:border-slate-600 cursor-none"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <i className={`${social.icon} text-lg`} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="max-md:text-center" data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-7">
              Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link, i) => (
                <li key={link.name} data-aos="fade-left" data-aos-delay={i * 80}>
                  <a
                    href={link.href}
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors flex items-center gap-2 group justify-center md:justify-start"
                  >
                    <span className="w-0 h-0.5 bg-blue-600 group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div
            className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white dark:border-slate-700/50 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h4 className="text-slate-900 dark:text-white font-bold uppercase tracking-widest text-xs mb-5">
              Let's Connect
            </h4>

            <div className="space-y-4">
              <a
                href="mailto:bhumikadobariya04@gmail.com"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all shadow-sm group"
                data-aos="zoom-in"
              >
                <i className="fas fa-envelope text-blue-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200 truncate">
                  bhumikadobariya04@gmail.com
                </span>
              </a>

              <a
                href="tel:+918849810960"
                className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 hover:border-green-200 dark:hover:border-green-500 transition-all shadow-sm group"
                data-aos="zoom-in"
                data-aos-delay="120"
              >
                <i className="fas fa-phone-alt text-green-500 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                  +91 8849810960
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-10 border-t border-gray-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-center"
          data-aos="fade-up"
        >
          <p className="text-slate-400 dark:text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} — Made with{" "}
            <span className="text-red-500">❤️</span> by Bhoomika
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">
                Available for Freelance
              </span>
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ scale: 1.05, letterSpacing: "0.25em" }}
              whileTap={{ scale: 0.95 }}
              className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest transition-all cursor-none p-2"
            >
              Back to top ↑
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
