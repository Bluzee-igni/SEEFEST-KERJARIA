import { useState } from "react";
import { motion } from 'framer-motion';

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

export default function EducationQuestionPage({ onClose, onLogin, onNext }) {
  const [education, setEducation] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValidEducation = education !== "";

  function handleEducationChange(event) {
    setEducation(event.target.value);
    setSubmitted(false);
  }

  function handleNext() {
    setSubmitted(true);
    if (!isValidEducation) return;
    onNext?.(education);
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
          className="relative w-full max-w-[362px] rounded-[22px] bg-[#075fd4] px-6 pb-8 pt-12 text-white shadow-[0_12px_0_#034aa8] sm:max-w-[495px] sm:rounded-[30px] sm:px-9 sm:pb-11 sm:pt-14"
        >
          <RobotEars />

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-center text-[20px] font-extrabold leading-tight tracking-[0px] sm:text-[28px]"
          >
            Sekarang menempuh pendidikan apa?
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="mt-7 sm:mt-8"
          >
            <div className="relative">
              <select
                value={education}
                onChange={handleEducationChange}
                aria-label="Pilih pendidikan"
                className={`h-[45px] w-full appearance-none rounded-[8px] border-[3px] border-white bg-[#6196d7] px-4 pr-12 text-[19px] font-semibold outline-none focus:ring-4 focus:ring-white/30 focus:bg-[#5588cc] sm:h-[62px] sm:px-5 sm:pr-14 sm:text-[26px] transition-all duration-300 ${
                  education ? "text-white" : "text-white/90"
                }`}
              >
                <option value="" disabled>
                  Pilih Pendidikan
                </option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
                <option value="KULIAH">KULIAH</option>
              </select>

              <span className="pointer-events-none absolute right-5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-b-[3px] border-r-[3px] border-white" />
            </div>

            {submitted && !isValidEducation && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-[9px] font-extrabold text-[#ffe16a] sm:text-[11px]"
              >
                Pilih pendidikan kamu terlebih dahulu.
              </motion.p>
            )}
            {submitted && isValidEducation && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-[9px] font-extrabold text-[#d9f99d] sm:text-[11px]"
              >
                Siap, kamu bisa lanjut ke quest berikutnya.
              </motion.p>
            )}
          </motion.div>

          <motion.button
            type="button"
            onClick={handleNext}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            whileHover={{ scale: 1.03, y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="mt-7 h-[42px] w-full rounded-[8px] bg-white text-[18px] font-extrabold tracking-[0px] text-black shadow-[0_8px_0_-3px_#b9d9ff] hover:shadow-[0_12px_0_-3px_#b9d9ff] transition-shadow duration-300 sm:h-[54px] sm:text-[24px]"
          >
            Berikutnya
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
