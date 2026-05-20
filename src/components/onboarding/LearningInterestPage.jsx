import { useState } from "react";
import { motion } from 'framer-motion';

const interests = [
  "Artificial Intelligence",
  "Digital Business",
  "Programmer",
  "Creative Design",
  "Network System",
  "Internet of Things",
  "Cyber Security",
  "Fiber Optic",
  "Social Media Specialist",
  "Digital Marketing",
  "Content Creator",
  "Data Analyst",
  "Video Editor",
  "E-Commerce",
  "Copywriter",
  "UI/UX Designer",
  "Graphic Designer",
  "Project Management",
].map((title) => ({
  id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title,
}));

function RobotEars() {
  return (
    <svg
      viewBox="0 0 170 120"
      aria-hidden="true"
      className="absolute -top-[57px] left-1/2 h-[92px] w-[132px] -translate-x-1/2"
    >
      <path
        d="M57 83C35 33 41 2 53 0c14-2 32 40 27 88Z"
        fill="#075fd4"
      />
      <path
        d="M111 88c-4-51 16-91 30-88 14 3 15 40-8 88Z"
        fill="#075fd4"
      />
    </svg>
  );
}

function CodeIcon() {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[4px] border border-[#ff9800] bg-[#ffdca2] text-[12px] font-extrabold text-[#ff8700]">
      &lt;/&gt;
    </span>
  );
}

export default function LearningInterestPage({ onClose, onLogin, onNext }) {
  const [selectedInterest, setSelectedInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNext() {
    setSubmitted(true);
    if (!selectedInterest) return;
    onNext?.(selectedInterest);
  }

  return (
    <main className="flex min-h-screen flex-col bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#111827]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
          html, body, #root { margin: 0; min-height: 100%; background: #ffffff; }
          body { overflow-x: hidden; }`}
      </style>

      <header className="flex h-[76px] shrink-0 items-start justify-between px-7 pt-7 sm:px-9 sm:pt-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Kembali ke landing page"
          className="grid h-[31px] w-[31px] place-items-center rounded-[6px] bg-[#cfe8ff] text-[20px] font-extrabold leading-none text-[#075fd4] sm:h-[42px] sm:w-[42px] sm:text-[29px] hover:bg-[#075fd4] hover:text-white transition-all duration-300"
        >
          X
        </button>

        <button
          type="button"
          onClick={onLogin}
          className="h-[28px] min-w-[61px] rounded-[6px] bg-[#075fd4] px-5 text-[7px] font-semibold uppercase tracking-[0px] text-white shadow-[0_8px_18px_rgba(7,95,212,0.35)] sm:h-[34px] sm:min-w-[82px] sm:text-[8px] hover:bg-[#0550b3] hover:shadow-[0_12px_24px_rgba(7,95,212,0.45)] transition-all duration-300"
        >
          Login
        </button>
      </header>

      <section className="flex flex-1 items-center justify-center px-5 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-full max-w-[716px] rounded-[22px] bg-[#075fd4] px-6 pb-9 pt-16 text-white shadow-[0_12px_0_#034aa8] sm:rounded-[30px] sm:px-10 md:px-12"
        >
          <RobotEars />

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-center text-[24px] font-extrabold leading-none tracking-[0px] sm:text-[28px]"
          >
            Aku ingin mempelajari...
          </motion.h1>

          <div className="mt-11 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest, index) => {
              const isSelected = selectedInterest === interest.id;

              return (
                <motion.button
                  type="button"
                  key={interest.id}
                  onClick={() => {
                    setSelectedInterest(interest.id);
                    setSubmitted(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.04, duration: 0.35 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`grid h-[96px] grid-cols-[32px_minmax(0,1fr)] items-center gap-5 rounded-[8px] bg-white px-4 text-left text-black shadow-[0_8px_0_-2px_#b9d9ff] transition-all duration-300 ${
                    isSelected
                      ? "ring-4 ring-[#ffd66b] shadow-[0_8px_0_-2px_#ffd66b]"
                      : "hover:shadow-[0_12px_0_-2px_#b9d9ff]"
                  }`}
                >
                  <CodeIcon />
                  <span className="min-w-0 max-w-[92px] text-[13px] font-extrabold leading-[1.04] tracking-[0px]">
                    {interest.title}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-center gap-4">
            {submitted && !selectedInterest && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] font-extrabold text-[#ffe16a]"
              >
                Pilih salah satu bidang yang ingin kamu pelajari.
              </motion.p>
            )}

            <motion.button
              type="button"
              onClick={handleNext}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`h-[42px] w-full max-w-[210px] rounded-[8px] text-[16px] font-extrabold text-black shadow-[0_8px_0_-3px_#b9d9ff] hover:shadow-[0_12px_0_-3px_#b9d9ff] transition-all duration-300 ${
                selectedInterest ? "bg-white" : "bg-white/90"
              }`}
            >
              Berikutnya
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
