
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { X, Send, Sparkles } from "lucide-react";

const ContactModal = ({ isOpen, onClose }) => {
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
          setTimeout(() => {
            setShowSuccess(false);
            onClose();
          }, 3000);
        },
        () => {
          setIsSending(false);
          alert("FAILED TO SEND MESSAGE");
        }
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-white/20 dark:border-slate-800 p-8 md:p-12 overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-900 dark:hover:text-white"
            >
              <X size={24} />
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 border border-blue-100 dark:border-blue-800">
                <Sparkles size={12} /> Let's Connect
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Start a <span className="text-blue-600">Conversation</span>
              </h2>
            </div>

            {/* Form */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                  <input
                    required
                    name="from_name"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-400/50 font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input
                    required
                    name="reply_to"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-400/50 font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Message</label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  placeholder="Tell me about your project or just say hi!"
                  className="w-full px-6 py-4 rounded-2xl ring-1 ring-slate-200 dark:ring-slate-800 bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500/50 outline-none transition-all placeholder:text-slate-400/50 font-medium"
                />
              </div>

              <motion.button
                disabled={isSending || showSuccess}
                whileHover={!isSending && !showSuccess ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-black text-white text-lg flex items-center justify-center gap-3 transition-all ${
                  showSuccess
                    ? "bg-emerald-500"
                    : isSending
                    ? "bg-slate-400"
                    : "bg-blue-600 hover:bg-blue-700 shadow-xl shadow-blue-500/20"
                }`}
              >
                {showSuccess ? (
                  "Message Sent!"
                ) : isSending ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Overlay */}
            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white/95 dark:bg-slate-900/95 flex flex-col items-center justify-center p-8 text-center z-10"
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-500 mb-6">
                    <Sparkles size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Thank You!</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium">
                    Your message has been received. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
