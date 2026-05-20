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

function GraduationIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
      <path d="M6 25 32 11l26 14-26 14Z" fill="#1f2027" />
      <path d="M18 33v11l14 8 14-8V33L32 41Z" fill="#1f2027" />
      <path
        d="M54 27v17"
        fill="none"
        stroke="#1f2027"
        strokeLinecap="round"
        strokeWidth="5"
      />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
      <path
        d="M13 18h38l5 14H8Z"
        fill="white"
        stroke="white"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M13 32v21h38V32"
        fill="white"
        stroke="white"
        strokeLinejoin="round"
        strokeWidth="4"
      />
      <path
        d="M18 18v13M27 18v13M37 18v13M46 18v13"
        stroke="#075fd4"
        strokeLinecap="round"
        strokeWidth="4"
      />
    </svg>
  );
}

export default function RoleSelectionPage({ onClose, onLogin, onSelectRole }) {
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
          className="grid h-[37px] w-[37px] place-items-center rounded-[7px] bg-[#cfe8ff] text-[24px] font-extrabold leading-none text-[#075fd4]"
        >
          X
        </button>

        <button
          type="button"
          onClick={onLogin}
          className="h-[31px] min-w-[77px] rounded-[6px] bg-[#075fd4] px-5 text-[7px] font-semibold uppercase tracking-[0px] text-white shadow-[0_8px_18px_rgba(7,95,212,0.35)]"
        >
          Login
        </button>
      </header>

      <section className="flex justify-center px-5 pb-16 pt-6 sm:pt-4">
        <div className="relative w-full max-w-[454px] rounded-[25px] bg-[#075fd4] px-8 pb-20 pt-16 text-white shadow-[0_12px_0_#034aa8] sm:px-9">
          <RobotEars />

          <h1 className="text-center text-[26px] font-extrabold leading-none tracking-[0px]">
            Daftar sebagai apa?
          </h1>

          <div className="mt-16 flex flex-col gap-7">
            <button
              type="button"
              onClick={() => onSelectRole("pelajar")}
              className="flex h-[92px] items-center justify-center gap-9 rounded-[4px] bg-white text-[25px] font-extrabold uppercase tracking-[0px] text-black shadow-[0_16px_0_-5px_#b9d9ff]"
            >
              <GraduationIcon />
              Pelajar
            </button>

            <button
              type="button"
              onClick={() => onSelectRole("umkm")}
              className="flex h-[92px] items-center justify-center gap-9 rounded-[4px] border-[3px] border-[#b9d9ff] bg-[#075fd4] text-[25px] font-extrabold uppercase tracking-[0px] text-white shadow-[0_16px_0_-5px_#b9d9ff]"
            >
              <StoreIcon />
              UMKM
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
