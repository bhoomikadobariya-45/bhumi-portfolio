
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsSection = () => {
 
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const projects = [
    {
      id: "01",
      title: "Medcare",
      subtitle: "AI Healthcare Chatbot",
      desc: "Advanced symptom analysis and emergency guidance system designed for rural accessibility. Utilizes NLP to bridge the gap between patients and immediate medical advice.",
      tech: ["Node.js", "React.js", "HTML", "CSS"],
      link: "https://github.com/bhoomikadobariya-45/Medcare.git",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
      featured: true,
    },
    {
      id: "02",
      title: "AonInternational",
      subtitle: "Global Logistics Platform",
      desc: "A high-performance international business engine focusing on seamless supply chain management and global service presentation.",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
      link: "https://aoninternational.com",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200",
      featured: false,
    },
    {
      id: "03",
      title: "The Deal Hub",
      subtitle: "E-Commerce & Entertainment",
      desc: "A modern digital marketplace and entertainment hub featuring optimized core web vitals and a premium interactive user interface.",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
      link: "https://njoy.com",
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200",
      featured: false,
    },
    {
      id: "04",
      title: "MindStormSoft",
      subtitle: "Web Clone (Practice Project)",
      desc: "A meticulous frontend recreation of a professional business platform, focusing on mastering complex layouts, reusable components, and responsive design systems.",
      tech: ["React.js", "Tailwind CSS", "API Integration"],
      link: "https://github.com/bhoomikadobariya-45",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-10 px-8 md:px-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-3 justify-start"
            data-aos="fade-right"
          >
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Selected Works
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            data-aos="zoom-in"
            className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight"
          >
            Innovative Projects & <br />
            <span className="text-gray-400 dark:text-slate-600">Visual Experiences.</span>
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -15,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className={`${
                project.featured ? "md:col-span-8" : "md:col-span-4"
              } group relative h-112.5 rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 hover:border-blue-500/20 dark:hover:border-blue-500/30 shadow-sm hover:shadow-2xl transition-all duration-700 ease-out`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <span className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-md text-gray-900 dark:text-white font-black px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-xl md:rounded-2xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {project.id}
                </span>
              </div>

              <div className="hidden md:block absolute inset-0 bg-linear-to-t from-gray-900/60 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

              <div className="hidden md:block absolute bottom-8 left-8 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {project.title}
                </h3>
                <p className="text-blue-200 text-sm font-medium">
                  {project.subtitle}
                </p>
              </div>

              <div className="absolute inset-x-0 bottom-0 translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] z-20">
                <div className="m-3 p-5 md:m-4 md:p-8 bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl rounded-[1.8rem] md:rounded-[2.2rem] border border-white dark:border-slate-700/50 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-indigo-500 transform scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-1000 md:delay-300" />

                  <div className="flex justify-between items-start gap-3 mb-3 md:mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white truncate lg:whitespace-normal">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs md:text-sm mt-0.5 md:mt-0 truncate">
                        {project.subtitle}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-10 h-10 flex items-center justify-center bg-gray-900 dark:bg-slate-700 text-white rounded-full hover:bg-blue-600 hover:scale-105 transition-all shadow-md shrink-0"
                    >
                      <i
                        className={
                          project.link.includes("github")
                            ? "fab fa-github"
                            : "fas fa-external-link-alt"
                        }
                      ></i>
                    </a>
                  </div>

                  <p className="text-gray-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[9px] md:text-[10px] font-black text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg md:rounded-xl uppercase tracking-widest border border-slate-200/50 dark:border-slate-700/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center" data-aos="zoom-in">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/bhoomikadobariya-45"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 dark:bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-600 dark:hover:bg-blue-500 transition-all duration-300 shadow-xl shadow-gray-200 dark:shadow-blue-900/20"
          >
            <i className="fab fa-github text-xl"></i>
            <span>SEE ALL WORK ON GITHUB</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
