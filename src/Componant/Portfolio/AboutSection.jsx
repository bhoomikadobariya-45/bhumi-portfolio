
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Terminal,
  Cpu,
  Rocket,
  Award,
  Zap,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  /* 🔹 AOS INIT */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const skills = [
    {
      name: "Frontend",
      tech: "React, Next.js, Tailwind",
      icon: <Code2 className="text-blue-500" />,
    },
    {
      name: "Backend",
      tech: "Node.js, PHP, MySQL",
      icon: <Terminal className="text-indigo-500" />,
    },
    {
      name: "Architecture",
      tech: "Scalable Web Systems",
      icon: <Cpu className="text-violet-500" />,
    },
    {
      name: "Optimization",
      tech: "Performance & SEO",
      icon: <Zap className="text-amber-500" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 md:px-10 lg:px-20 overflow-hidden bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-3 justify-start"
          data-aos="fade-right"
        >
          <span className="h-px w-8 bg-blue-600"></span>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
            About Me
          </span>
        </motion.div>

        <h2
          className="text-4xl md:text-6xl lg:text-7xl font-[950] text-slate-900 dark:text-white leading-[1.1] md:leading-[0.9] tracking-tight"
          data-aos="zoom-in"
        >
          Engineering solutions <br className="hidden md:block" />
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-slate-300 dark:text-slate-600 inline-block"
          >
            with precision.
          </motion.span>
        </h2>
      </div>

      <p
        className="lg:w-1/3 text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed font-medium mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        I bridge the gap between complex engineering requirements and seamless
        user experiences. Currently optimizing web architectures at{" "}
        <span className="text-slate-900 dark:text-slate-200 font-bold">MindstormSoft</span>.
      </p>

      {/* Bento Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-12"
      >
        {/* Main Experience Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            rotate: [0, -1, 0],
            boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.15)"
          }}
          transition={{ duration: 0.4 }}
          data-aos="fade-up"
          className="md:col-span-12 lg:col-span-8 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-2rem md:rounded-[2.5rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.03)] dark:shadow-none flex flex-col justify-between relative overflow-hidden group transition-all duration-500"
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold mb-6">
              <Rocket size={14} /> <span>Current Focus</span>
            </div>

            <h3 className="text-2xl md:text-4xl font-black text-slate-900 dark:text-white mb-5">
              Full-Stack Architecture & <br className="hidden md:block" />
              Scalable Performance
            </h3>

            <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              As a Web Developer Intern, I don't just write code—I architect
              systems. My workflow involves deep-diving into **React ecosystems**,
              optimizing **MySQL** queries, and ensuring every pixel serves a
              functional purpose.
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "Clean Architecture",
                "RESTful APIs",
                "Unit Testing",
                "UX Strategy",
              ].map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-2 px-3 py-2 bg-slate-50 dark:bg-slate-900/50 rounded-xl text-slate-600 dark:text-slate-300 text-xs md:text-sm font-bold border border-slate-100 dark:border-slate-700 transition-colors"
                >
                  <CheckCircle2
                    size={14}
                    className="text-blue-500 dark:text-blue-400"
                  />{" "}
                  {tag}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute -bottom-10 -right-10 text-slate-50 group-hover:text-blue-50 transition-colors duration-500 hidden md:block">
            <Code2 size={240} />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ 
            y: -10,
            rotate: [0, 1, 0],
            boxShadow: "0 25px 50px -12px rgba(99, 102, 241, 0.2)"
          }}
          transition={{ duration: 0.4 }}
          data-aos="fade-left"
          className="md:col-span-6 lg:col-span-4 bg-slate-900 dark:bg-slate-800/80 rounded-2rem md:rounded-[2.5rem] p-10 text-white flex flex-col justify-between relative overflow-hidden group border border-transparent dark:border-slate-700/50 transition-all duration-500"
        >
          <div className="relative z-10">
            <Award
              className="text-blue-400 mb-5 group-hover:scale-110 transition-transform"
              size={48}
            />
            <h4 className="text-2xl font-bold mb-4">Award Recognition</h4>
            <p className="text-slate-400 leading-relaxed font-medium text-sm md:text-base">
              Proud recipient of the <strong>Dewang Mehta Award</strong> for
              academic and technical excellence in engineering.
            </p>
          </div>

          <div className="mt-8 relative z-10">
            <div className="text-4xl font-black text-white mb-1 italic">
              9.58{" "}
              <span className="text-xl text-blue-400 not-italic">CGPA</span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 uppercase tracking-widest text-[10px] font-black">
              GTU Academic Milestone
            </p>
          </div>

          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[60px]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
