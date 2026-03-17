
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import contact from "../../assets/contact.svg"

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm("service_p70sngr", "template_zy6syux", form.current, {
        publicKey: "cyVU2CI7HwjbEnE3R",
      })
      .then(
        () => {
          setIsSending(false);
          setShowSuccess(true);
          form.current.reset();
          setTimeout(() => setShowSuccess(false), 4000);
        },
        () => {
          setIsSending(false);
          alert("FAILED TO SEND MESSAGE");
        }
      );
  };
const colorClasses = {
  blue: "bg-blue-50 text-blue-600",
  green: "bg-green-50 text-green-600",
  purple: "bg-purple-50 text-purple-600",
};
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-br from-white via-slate-50 to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 py-20 px-6 md:px-20 text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Decorative blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-blue-300 rounded-full blur-[140px] opacity-30"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full blur-[140px] opacity-30"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 14, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* HEADER – NOT CHANGED */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-3"
          >
            <span className="h-px w-8 bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight">
            Let's build something <br />
            <span className="text-gray-400 dark:text-slate-600">extraordinary together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT – PERSONAL INFO */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-gray-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
              "Specializing in turning complex designs into high-performance React
              applications. Whether you're looking to collaborate on a new
              project or just want to talk tech, my inbox is always open!"
            </p>

           <div className="space-y-6">
  {[
    {
      title: "Email Me",
      value: "bhumikadobariya04@gmail.com",
      link: "mailto:bhumikadobariya04@gmail.com",
      color: "blue",
      icon: "fa-envelope",
    },
    {
      title: "Call Me",
      value: "+91 8849810960",
      link: "tel:+918849810960",
      color: "green",
      icon: "fa-phone-alt",
    },
    {
      title: "Location",
      value: "Ahmedabad, Gujarat",
      color: "purple",
      icon: "fa-map-marker-alt",
    },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{ y: -4 }}
      className="flex items-center gap-4 md:gap-6 group"
    >
      <div
        className={`w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-lg ${
          colorClasses[item.color]
        }`}
      >
        <i className={`fas ${item.icon} text-lg md:text-xl group-hover:scale-110 transition-transform`}></i>
      </div>

      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-0.5 md:mb-1">
          {item.title}
        </p>

        {item.link ? (
          <a
            href={item.link}
            className="block text-[15px] sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 break-all md:break-normal"
          >
            {item.value}
          </a>
        ) : (
          <p className="block text-[15px] sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white break-all md:break-normal">
            {item.value}
          </p>
        )}
      </div>
    </motion.div>
  ))}
</div>
            {/* Illustration */}
            {/* <motion.img
              src={contact}
              alt="Contact Illustration"
              className="w-full max-w-md mt-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
            /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.8rem] shadow-2xl border border-white dark:border-slate-700/50 transition-all duration-300"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  name="from_name"
                  placeholder="Your Name"
                  className="px-6 py-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white/50 dark:bg-slate-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-400"
                />
                <input
                  required
                  name="reply_to"
                  type="email"
                  placeholder="Email Address"
                  className="px-6 py-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white/50 dark:bg-slate-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              <textarea
                required
                name="message"
                rows="4"
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-700 bg-white/50 dark:bg-slate-900/50 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-400"
              />

              <motion.button
                disabled={isSending}
                whileHover={!isSending ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 transition-colors ${
                  isSending
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-600/20"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
                {!isSending && (
                  <motion.i
                    className="fas fa-paper-plane"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                  />
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            className="fixed inset-0 z-999 bg-black/40 flex items-center justify-center"
          >
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-2xl text-center border dark:border-slate-700">
              <div className="text-5xl mb-3">✅</div>
              <h3 className="text-2xl font-black text-gray-900 dark:text-white">Message Sent!</h3>
              <p className="text-gray-600 dark:text-slate-400 mt-2">
                Thank you! I’ll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;
