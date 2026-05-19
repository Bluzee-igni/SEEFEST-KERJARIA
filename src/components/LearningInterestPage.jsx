import { useState } from "react";

const interests = Array.from({ length: 18 }, (_, index) => ({
  id: `frontend-${index + 1}`,
  title: "Frontend Developer",
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
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-[2px] border border-[#ff9800] bg-[#ffdca2] text-[13px] font-extrabold text-[#ff8700]">
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
        <div className="relative w-full max-w-[716px] rounded-[22px] bg-[#075fd4] px-6 pb-9 pt-16 text-white shadow-[0_12px_0_#034aa8] sm:rounded-[30px] sm:px-10 md:px-12">
          <RobotEars />

          <h1 className="text-center text-[24px] font-extrabold leading-none tracking-[0px] sm:text-[28px]">
            Aku ingin mempelajari...
          </h1>

          <div className="mt-11 grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
            {interests.map((interest) => {
              const isSelected = selectedInterest === interest.id;

              return (
                <button
                  type="button"
                  key={interest.id}
                  onClick={() => {
                    setSelectedInterest(interest.id);
                    setSubmitted(false);
                  }}
                  className={`flex h-[96px] items-center gap-4 rounded-[4px] bg-white px-4 text-left text-black shadow-[0_8px_0_-2px_#b9d9ff] transition ${
                    isSelected
                      ? "ring-4 ring-[#ffd66b]"
                      : "hover:-translate-y-0.5 hover:shadow-[0_10px_0_-2px_#b9d9ff]"
                  }`}
                >
                  <CodeIcon />
                  <span className="text-[15px] font-extrabold leading-[1.05] tracking-[0px]">
                    Frontend
                    <span className="block">Developer</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-col items-center gap-4">
            {submitted && !selectedInterest && (
              <p className="text-[11px] font-extrabold text-[#ffe16a]">
                Pilih salah satu bidang yang ingin kamu pelajari.
              </p>
            )}

            {selectedInterest && (
              <button
                type="button"
                onClick={handleNext}
                className="h-[42px] w-full max-w-[210px] rounded-[6px] bg-white text-[16px] font-extrabold text-black"
              >
                Berikutnya
              </button>
            )}

            {!selectedInterest && (
              <button
                type="button"
                onClick={handleNext}
                className="h-[42px] w-full max-w-[210px] rounded-[6px] bg-white/90 text-[16px] font-extrabold text-black"
              >
                Berikutnya
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
