
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Technologies = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

 
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Building responsive and scalable UIs ",
      skills: [
        { name: "React.js", icon: "⚛️", level: "Proficient" },
        { name: "Next.js (Basic)", icon: "▲", level: "Foundational" },
        { name: "JavaScript", icon: "🟨", level: "Advanced" },
        { name: "Tailwind CSS", icon: "🌊", level: "Expert" },
        { name: "HTML5 & CSS3", icon: "🎨", level: "Expert" }
      ]
    },
    {
      title: "Backend & Database",
      description: "Logic-driven systems and data handling ",
      skills: [
        { name: "PHP", icon: "🐘", level: "Intermediate" },
        { name: "MySQL", icon: "🗄️", level: "Intermediate" },
        { name: "REST APIs", icon: "🌐", level: "Proficient" },
        { name: "C / Java", icon: "☕", level: "Academic" }
      ]
    },
    {
      title: "Design & Tools",
      description: "Professional workflow and version control ",
      skills: [
        { name: "Figma to Code", icon: "🎨", level: "Expert" },
        { name: "GitHub", icon: "🐙", level: "Advanced" },
        { name: "SEO Optimization", icon: "🔍", level: "Proficient" },
        { name: "UI/UX Design", icon: "✨", level: "Optimized" }
      ]
    }
  ];

  return (
    <section
      id="skills"
      className="relative py-10 px-6 md:px-20 bg-white dark:bg-slate-900 overflow-hidden text-gray-900 dark:text-white transition-colors duration-300"
    >
 
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
       
        <div
          className="mb-10 text-center md:text-left"
          data-aos="fade-up"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-3 justify-start"
            data-aos="fade-right"
          >
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Technical Arsenal
            </span>
          </motion.div>

          <h2
            className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white mb-5"
            data-aos="zoom-in"
          >
            Tech <span className=" text-[#99a1af]">Stack.</span>
          </h2>

          <p
            className="text-slate-500 dark:text-slate-400 max-w-xl text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            A Computer Engineering background combined with hands-on experience in modern web architecture.
          </p>
        </div>

        <div className="grid gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.1 }}
              data-aos="fade-up"
              data-aos-delay={catIndex * 150}
              className={`${
                catIndex === 0 ? "lg:col-span-7" : "lg:col-span-5"
              } bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl p-8 rounded-[3rem] border border-slate-100 dark:border-slate-700/50 transition-all duration-500 group relative overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/5`}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors duration-500" />


              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {category.title}
              </h3>

              <p className="text-slate-500 dark:text-slate-400 mb-6 text-sm">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 2, 0],
                      boxShadow: "0 10px 25px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    data-aos="zoom-in"
                    data-aos-delay={index * 80}
                    className="flex items-center gap-3 bg-white dark:bg-slate-900 px-5 py-3 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 group-hover:border-blue-500/30 transition-all cursor-none"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                        {skill.name}
                      </div>
                      <div className="text-[10px] uppercase font-bold text-blue-600 dark:text-blue-400 tracking-tighter">
                        {skill.level}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
