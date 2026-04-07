import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { RippleWaveLoader } from "@/components/ui/ripple-wave-loader";

// ── States: "idle" | "loading" | "done" ────────────────────────────────────

function SubmitButton({ status, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={status !== "idle"}
      className="relative w-full md:w-auto px-12 py-5 bg-[#ffab40] text-[#4d2700] font-bold uppercase tracking-[0.3em] text-xs hover:bg-[#e07820] transition-all disabled:cursor-not-allowed overflow-hidden"
      style={{ minWidth: "220px", minHeight: "54px" }}
    >
      <AnimatePresence mode="wait">
        {status === "idle" && (
          <motion.span
            key="idle"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="block"
          >
            Submit Inquiry
          </motion.span>
        )}

        {status === "loading" && (
          <motion.span
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <RippleWaveLoader />
          </motion.span>
        )}

        {status === "done" && (
          <motion.span
            key="done"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.4 }}
            className="flex items-center justify-center gap-2"
          >
            {/* Animated checkmark */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
              />
            </motion.svg>
            Sent!
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function Contact() {
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "done"
  const [fields, setFields] = useState({ name: "", email: "", scope: "" });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (status !== "idle") return;

    // Simulate async submission
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
      // Reset after 3s so the form can be used again
      setTimeout(() => {
        setStatus("idle");
        setFields({ name: "", email: "", scope: "" });
      }, 3000);
    }, 2000);
  };

  return (
    <section className="py-32 bg-[#131313]" id="contact">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-12 gap-8 border-t border-[#544437]/30 pt-24">
          {/* Info Column */}
          <div className="col-span-12 md:col-span-4">
            <span className="text-[#ffab40] text-xs font-bold tracking-[0.4em] uppercase block mb-4">
              Contact
            </span>
            <h2 className="text-6xl font-[Newsreader] font-bold leading-none mb-12">
              Let's Build <br />Permanence.
            </h2>
            <div className="space-y-8">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#dac2b2] mb-2">New Inquiries</p>
                <a
                  className="text-2xl font-[Newsreader] italic hover:text-[#ffab40] transition-colors"
                  href="mailto:redthread@studio.agency"
                >
                  redthread@studio.agency
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-[#dac2b2] mb-2">Studio Location</p>
                <p className="text-xl font-[Newsreader]">
                  128 Andheri West, <br />Mumbai, Maharashtra
                </p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              <div className="border-b border-[#544437] focus-within:border-[#ffab40] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-widest text-[#dac2b2] block mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  value={fields.name}
                  onChange={handleChange}
                  required
                  disabled={status !== "idle"}
                  className="bg-transparent border-none w-full p-0 text-white focus:ring-0 focus:outline-none placeholder:text-zinc-700 disabled:opacity-50"
                  placeholder="Alexander Arch"
                  type="text"
                />
              </div>

              <div className="border-b border-[#544437] focus-within:border-[#ffab40] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-widest text-[#dac2b2] block mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  value={fields.email}
                  onChange={handleChange}
                  required
                  disabled={status !== "idle"}
                  className="bg-transparent border-none w-full p-0 text-white focus:ring-0 focus:outline-none placeholder:text-zinc-700 disabled:opacity-50"
                  placeholder="alex@heritage.co"
                  type="email"
                />
              </div>

              <div className="md:col-span-2 border-b border-[#544437] focus-within:border-[#ffab40] transition-colors py-4">
                <label className="text-[10px] uppercase tracking-widest text-[#dac2b2] block mb-2">
                  The Project Scope
                </label>
                <textarea
                  name="scope"
                  value={fields.scope}
                  onChange={handleChange}
                  required
                  disabled={status !== "idle"}
                  className="bg-transparent border-none w-full p-0 text-white focus:ring-0 focus:outline-none placeholder:text-zinc-700 resize-none disabled:opacity-50"
                  placeholder="Briefly describe the artifact we are building..."
                  rows={4}
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-4">
                <SubmitButton status={status} />

                {/* Status message */}
                <AnimatePresence>
                  {status === "done" && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-[11px] tracking-widest uppercase text-[#ffab40]"
                    >
                      Your inquiry has been received — we'll be in touch.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
