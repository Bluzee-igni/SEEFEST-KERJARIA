import { useState } from "react";

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
    <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#111827]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
          html, body, #root { margin: 0; min-height: 100%; background: #ffffff; }
          body { overflow-x: hidden; }`}
      </style>

      <header className="flex h-[76px] items-start justify-between px-7 pt-7 sm:px-9 sm:pt-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Kembali ke landing page"
          className="grid h-[31px] w-[31px] place-items-center rounded-[6px] bg-[#cfe8ff] text-[20px] font-extrabold leading-none text-[#075fd4] sm:h-[42px] sm:w-[42px] sm:text-[29px]"
        >
          X
        </button>

        <button
          type="button"
          onClick={onLogin}
          className="h-[28px] min-w-[61px] rounded-[6px] bg-[#075fd4] px-5 text-[7px] font-semibold uppercase tracking-[0px] text-white shadow-[0_8px_18px_rgba(7,95,212,0.35)] sm:h-[34px] sm:min-w-[82px] sm:text-[8px]"
        >
          Login
        </button>
      </header>

      <section className="flex justify-center px-5 pb-16 pt-5 sm:pt-4">
        <div className="relative w-full max-w-[362px] rounded-[22px] bg-[#075fd4] px-6 pb-8 pt-12 text-white shadow-[0_12px_0_#034aa8] sm:max-w-[495px] sm:rounded-[30px] sm:px-9 sm:pb-11 sm:pt-14">
          <RobotEars />

          <h1 className="text-center text-[20px] font-extrabold leading-none tracking-[0px] sm:text-[28px]">
            Sekarang menempuh pendidikan apa?
          </h1>

          <div className="mt-7 sm:mt-8">
            <div className="relative">
              <select
                value={education}
                onChange={handleEducationChange}
                aria-label="Pilih pendidikan"
                className={`h-[45px] w-full appearance-none rounded-[6px] border-[3px] border-white bg-[#6196d7] px-4 pr-12 text-[19px] font-semibold outline-none focus:ring-4 focus:ring-white/20 sm:h-[62px] sm:rounded-[8px] sm:px-5 sm:pr-14 sm:text-[26px] ${
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
              <p className="mt-2 text-[9px] font-extrabold text-[#ffe16a] sm:text-[11px]">
                Pilih pendidikan kamu terlebih dahulu.
              </p>
            )}
            {submitted && isValidEducation && (
              <p className="mt-2 text-[9px] font-extrabold text-[#d9f99d] sm:text-[11px]">
                Siap, kamu bisa lanjut ke quest berikutnya.
              </p>
            )}
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="mt-7 h-[42px] w-full rounded-[4px] bg-white text-[18px] font-extrabold tracking-[0px] text-black transition active:translate-y-1 sm:h-[54px] sm:rounded-[6px] sm:text-[24px]"
          >
            Berikutnya
          </button>
        </div>
      </section>
    </main>
  );
}
