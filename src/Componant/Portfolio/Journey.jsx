

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariant = (index) => ({
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

const Journey = () => {
  const timeline = [
    {
      title: "Bachelor of Engineering",
      company: "OM Education Campus",
      duration: "2022 - 2026",
      type: "Education",
      description:
        "Majoring in Computer Engineering. Achieved GTU Top Ranker status with a 9.61 CGPI. Specialized in Data Structures, Algorithms, and Software Engineering.",
      skills: ["Computer Engineering", "DSA", "Problem Solving"],
      icon: "🎓",
      isHighlight: false,
    },
    {
      title: "Healthcare Innovation: Medcare",
      company: "Academic Project",
      duration: "2024",
      type: "Innovation",
      description:
        "Developed 'Medcare', an intelligent healthcare solution designed to improve accessibility in remote areas. Implemented symptom analysis logic to provide emergency response guidance and locate nearby medical infrastructure.",
      skills: [
        "Healthcare Tech",
        "Logic Design",
        "Problem Solving",
        "Emergency Systems",
      ],
      icon: "🏥",
      isHighlight: false,
    },
    {
      title: "Web Development Internship",
      company: "MindstormSoft",
      duration: "6 Months",
      type: "Professional Experience",
      description:
        "Intensive 6-month internship focused on modern web architectures. Contributed to live projects using React.js and Next.js, optimizing frontend performance and integrating backend services.",
      skills: ["React", "Next.js", "Team Collaboration", "API Integration"],
      icon: "💼",
      isHighlight: false,
    },
  ];

  return (
    <section
      id="journey"
      className="py-10 px-8 md:px-20 bg-slate-50 dark:bg-slate-900 overflow-hidden font-sans text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">
            04. My Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Academic Growth & <br />
            <span className="text-gray-400 dark:text-slate-600">Professional Path.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-1 h-full bg-slate-200 dark:bg-slate-800 rounded-full max-sm:hidden" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariant(index)}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Dot */}
                <div className="absolute -left-2 md:left-1/2 md:-translate-x-1/2 z-10 max-sm:hidden">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 shadow-lg relative z-10" />
                    <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ 
                    y: -10,
                    rotateX: 2,
                    rotateY: index % 2 === 0 ? 2 : -2,
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-full md:w-[45%] group/card"
                >
                  <div
                    className={`p-8 rounded-[2.5rem] border transition-all duration-700 hover:shadow-2xl group/card relative overflow-hidden ${
                      item.isHighlight
                        ? "bg-slate-900 dark:bg-slate-800 text-white border-slate-800 dark:border-slate-700 shadow-xl shadow-blue-500/10"
                        : "bg-white dark:bg-slate-800/50 text-gray-900 dark:text-white border-slate-100 dark:border-slate-700/50"
                    }`}
                    style={{ perspective: "1000px" }}
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    <div className="flex justify-between items-start mb-6">
                      <div className="text-4xl">{item.icon}</div>
                      <span
                        className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          item.isHighlight
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800/50"
                        }`}
                      >
                        {item.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                    <p
                      className={`font-semibold mb-4 ${
                        item.isHighlight
                          ? "text-blue-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {item.company}
                    </p>

                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        item.isHighlight
                          ? "text-gray-400"
                          : "text-gray-500 dark:text-slate-400"
                      }`}
                    >
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, sIdx) => (
                        <motion.span
                          key={sIdx}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: sIdx * 0.05 }}
                          viewport={{ once: true }}
                          className={`px-3 py-1 rounded-lg text-[10px] font-bold uppercase ${
                            item.isHighlight
                              ? "bg-white/10 text-white border border-white/10"
                              : "bg-gray-100 dark:bg-slate-900 text-gray-500 dark:text-slate-400"
                          }`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;
