import React, { useState } from "react";

function RobotEars() {
  return (
    <svg
      viewBox="0 0 170 120"
      aria-hidden="true"
      className="absolute -top-[57px] left-1/2 h-[92px] w-[132px] -translate-x-1/2"
    >
      <path d="M57 83C35 33 41 2 53 0c14-2 32 40 27 88Z" fill="#075fd4" />
      <path d="M113 83c-5-48 13-85 27-83 12 2 18 50-4 88Z" fill="#075fd4" />
    </svg>
  );
}

export default function RegistrationPage({ onClose, onLogin, onRegister }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#dbeafe] font-['Plus_Jakarta_Sans',sans-serif]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');`}
      </style>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute left-6 top-6 z-20 grid h-10 w-10 place-items-center rounded-[8px] border-2 border-[#075fd4] bg-white text-[#075fd4] text-[18px] font-extrabold shadow-md hover:bg-blue-50 transition-colors"
      >
        X
      </button>

      {/* Login/Masuk button */}
      <button
        onClick={onLogin}
        className="absolute right-6 top-6 z-20 h-[38px] rounded-[8px] bg-[#075fd4] px-6 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[0_6px_16px_rgba(7,95,212,0.35)] hover:bg-[#064ca8] transition-colors"
      >
        Masuk
      </button>

      {/* Registration Card */}
      <div className="relative z-10 w-full max-w-[460px] mx-4">
        <div className="relative rounded-[24px] bg-[#075fd4] px-10 pt-14 pb-10 shadow-[0_20px_50px_rgba(7,95,212,0.3)]">
          <RobotEars />

          <h1 className="text-center text-[32px] font-extrabold leading-none tracking-[-0.02em] text-white mb-8">
            Buat profil
          </h1>

          {/* Form fields */}
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Nama Pengguna"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="h-[50px] w-full rounded-[10px] border-2 border-white/40 bg-white/30 px-5 text-[14px] font-semibold text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-white/40 transition-colors backdrop-blur-sm"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-[50px] w-full rounded-[10px] border-2 border-white/40 bg-white/30 px-5 text-[14px] font-semibold text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-white/40 transition-colors backdrop-blur-sm"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[50px] w-full rounded-[10px] border-2 border-white/40 bg-white/30 px-5 text-[14px] font-semibold text-white placeholder:text-white/70 outline-none focus:border-white focus:bg-white/40 transition-colors backdrop-blur-sm"
            />

            {/* BUAT button */}
            <button
              onClick={onRegister}
              className="mt-2 h-[50px] w-full rounded-[10px] bg-white text-[18px] font-extrabold text-[#343434] shadow-[0_5px_0_#c0c0c0] hover:shadow-[0_3px_0_#c0c0c0] hover:translate-y-[2px] active:shadow-none active:translate-y-[5px] transition-all"
            >
              BUAT
            </button>
          </div>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-[1px] flex-1 bg-white/40" />
            <span className="text-[12px] font-bold text-white/80 uppercase tracking-wider">Atau</span>
            <div className="h-[1px] flex-1 bg-white/40" />
          </div>

          {/* Social login buttons */}
          <div className="flex gap-4">
            <button className="flex-1 h-[50px] rounded-[10px] border-2 border-white bg-transparent text-white font-bold text-[13px] hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex-1 h-[50px] rounded-[10px] border-2 border-white bg-transparent text-white font-bold text-[13px] hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
