import React, { useState } from "react";
import { motion } from 'framer-motion';

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

export default function LoginPage({ onClose, onRegister, onLoginUser, onLoginUMKM }) {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Logika simpel membedakan user biasa dan umkm
    if (emailOrUsername.toLowerCase().includes("umkm")) {
      if (onLoginUMKM) onLoginUMKM();
    } else {
      onLoginUser(); // Masuk ke dashboard lama
    }
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white font-['Plus_Jakarta_Sans',sans-serif]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');`}
      </style>

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute left-6 top-6 z-20 grid h-10 w-10 place-items-center rounded-[8px] bg-[#cfe8ff] text-[20px] font-extrabold leading-none text-[#075fd4] hover:bg-[#075fd4] hover:text-white transition-all duration-300"
      >
        X
      </button>

      {/* Daftar button */}
      <button
        onClick={onRegister}
        className="absolute right-6 top-6 z-20 h-[38px] rounded-[8px] bg-[#075fd4] px-6 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[0_6px_16px_rgba(7,95,212,0.35)] hover:bg-[#064ca8] hover:shadow-[0_10px_24px_rgba(7,95,212,0.45)] transition-all duration-300"
      >
        DAFTAR
      </button>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="relative z-10 w-full max-w-[460px] mx-4"
      >
        <div className="relative rounded-[24px] bg-[#075fd4] px-10 pt-14 pb-10 shadow-[0_20px_50px_rgba(7,95,212,0.2)]">
          <RobotEars />

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="text-center text-[32px] font-extrabold leading-none tracking-[-0.02em] text-white mb-8"
          >
            Masuk
          </motion.h1>

          {/* Form fields */}
          <div className="flex flex-col gap-4">
            <motion.input
              type="text"
              placeholder="Email atau nama pengguna"
              value={emailOrUsername}
              onChange={(e) => setEmailOrUsername(e.target.value)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35, duration: 0.35 }}
              className="h-[50px] w-full rounded-[10px] border-2 border-white/40 bg-white/30 px-5 text-[14px] font-semibold text-white placeholder:text-white/80 outline-none focus:border-white focus:bg-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.35 }}
              className="flex flex-col gap-1"
            >
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-[50px] w-full rounded-[10px] border-2 border-white/40 bg-white/30 px-5 text-[14px] font-semibold text-white placeholder:text-white/80 outline-none focus:border-white focus:bg-white/40 focus:ring-4 focus:ring-white/20 transition-all duration-300 backdrop-blur-sm"
              />
              <button className="text-right text-[12px] font-bold text-white/90 hover:text-white mt-1 w-max self-end transition-colors">
                Lupa?
              </button>
            </motion.div>

            {/* MASUK button */}
            <motion.button
              onClick={handleLogin}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.35 }}
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="mt-2 h-[50px] w-full rounded-[10px] bg-white text-[18px] font-extrabold text-[#343434] shadow-[0_5px_0_#c0c0c0] hover:shadow-[0_8px_0_#c0c0c0] transition-shadow duration-300"
            >
              MASUK
            </motion.button>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className="my-6 flex items-center gap-4"
          >
            <div className="h-[1px] flex-1 bg-white/40" />
            <span className="text-[12px] font-bold text-white/80 uppercase tracking-wider">Atau</span>
            <div className="h-[1px] flex-1 bg-white/40" />
          </motion.div>

          {/* Social login buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.35 }}
            className="flex gap-4"
          >
            <button className="flex-1 h-[50px] rounded-[10px] border-2 border-white bg-transparent text-white font-bold text-[13px] hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              {/* Google icon not drawn in screenshot, just an empty dark blue box, but I'll add the one from RegistrationPage for consistency, or keep it empty. Actually, looking closely at the user's screenshot, the two buttons are completely empty dark blue rectangles. Maybe they want empty rectangles for now? I will use the code from RegistrationPage to make it look nicer. */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button className="flex-1 h-[50px] rounded-[10px] border-2 border-white bg-transparent text-white font-bold text-[13px] hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.164 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Terms text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="mt-6 text-center text-[10px] font-medium leading-relaxed text-gray-500 max-w-[400px] mx-auto px-4"
        >
          By signing in to KerjaRia, you agree to our Terms and Privacy Policy.<br/>
          This site is protected by reCAPTCHA Enterprise and the Google Privacy<br/>
          Policy and Terms of Service apply.
        </motion.p>
      </motion.div>
    </main>
  );
}

