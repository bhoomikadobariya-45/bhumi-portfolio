import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clg25 from "../../assets/clg2025.jpeg";
import certi24 from "../../assets/2024.jpeg";
import certi25 from "../../assets/2025.jpeg";


const sectionStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ------------------ Component ------------------ */
const Certificates = () => {
  const [activeImage, setActiveImage] = useState(null);

  const accolades = [
    {
      title: "Certificate of Excellence",
      issuer: "Dewang Mehta Foundation Trust",
      year: "2024",
      description:
        "Recognized as a GTU Top Ranker for outstanding academic performance. Secured 2nd Rank in Computer Engineering across all affiliated colleges in 2024.",
      image: certi24,
      tag: "Top Honor",
    },
    {
      title: "Certificate of Appreciation",
      issuer: "Dewang Mehta Foundation Trust",
      year: "2025",
      description: "Awarded as a Top Ranker in 2025 for consistent academic excellence and technical proficiency in Computer Engineering.",
      image: certi25,
      tag: "Academic Excellence",
    },
    {
      title: "Semester Achievement",
      issuer: "OM Engineering College, Junagadh",
      year: "2025",
      description: "Secured a remarkable 9.04 SPI and stood 3rd in Computer Engineering during the 6th Semester GTU Summer 2025 Examinations.",
      image: clg25,
      tag: "University Rank",
    },
  ];

  return (
    <section
      id="certificates"
      className="py-24 px-6 md:px-20 bg-white dark:bg-slate-900 text-gray-900 dark:text-white overflow-hidden transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* ---------- HEADER ---------- */}
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
            <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
            <span className="text-blue-600 font-bold tracking-[0.3em] uppercase text-xs">
              Milestones
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black tracking-tight"
          >
            Recognitions & <br />
            <span className="text-slate-200 dark:text-slate-800">
              Certifications
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {accolades.map((item, index) => (
            <motion.div
              key={index}
              variants={cardReveal}
              whileHover={{ 
                y: -12,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative rounded-[2.5rem] bg-white/40 dark:bg-slate-800/30 backdrop-blur-2xl border border-white/20 dark:border-slate-700/30 shadow-2xl shadow-slate-200/20 dark:shadow-none overflow-hidden flex flex-col h-full"
            >
              {/* IMAGE WRAPPER WITH ASPECT RATIO */}
              <div
                onClick={() => setActiveImage(item.image)}
                className="cursor-zoom-in relative overflow-hidden bg-slate-100 dark:bg-slate-950 aspect-4/3 shrink-0"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <div className="bg-white/10 backdrop-blur-xl px-6 py-2 rounded-full border border-white/20 text-white font-semibold text-xs transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-2xl">
                      View Full Certificate
                   </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10 flex flex-col grow">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 border border-blue-100/50 dark:border-blue-800/50">
                      {item.tag}
                    </span>
                    <p className="text-slate-400 dark:text-slate-500 font-mono text-[10px] font-bold uppercase tracking-widest">
                       {item.year}
                    </p>
                  </div>
                </div>

                <h3 className="font-black mb-3 leading-tight tracking-tight text-slate-800 dark:text-slate-100 text-xl md:text-2xl">
                  {item.title}
                </h3>

                <p className="text-blue-600/80 dark:text-blue-400/80 font-bold text-xs mb-6 tracking-wide uppercase">
                  {item.issuer}
                </p>

                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-2xl font-medium">
                  {item.description}
                </p>
              </div>

              {/* DECORATIVE STAR */}
              <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none transform group-hover:rotate-12 group-hover:scale-125">
                 <svg className="w-32 h-32 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L9 9H1L7 14L4 22L12 17L20 22L17 14L23 9H15L12 1Z" />
                 </svg>
              </div>
              
              {/* BORDER GLOW */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/10 transition-colors pointer-events-none rounded-[2.5rem]" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ---------- MODAL ---------- */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-100 bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="relative max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage}
                alt="Certificate Full View"
                className="w-full h-auto max-h-[80vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(37,99,235,0.2)] border border-white/10"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImage(null)}
                className="mt-10 px-10 py-4 bg-white text-slate-900 rounded-full font-black hover:bg-slate-50 transition-colors uppercase text-[10px] tracking-[0.3em] shadow-2xl"
              >
                Close Preview
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;