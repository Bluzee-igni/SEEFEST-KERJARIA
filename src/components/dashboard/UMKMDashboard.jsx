import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UMKMBerandaPanel from './UMKMBerandaPanel';
import UMKMPesanPanel from './UMKMPesanPanel';
import UMKMPostingPanel from './UMKMPostingPanel';

// Icon helper using simple SVG based on names
function Icon({ name, className }) {
  const icons = {
    beranda: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3l9 8h-3v8h-4v-6h-4v6H6v-8H3l9-8z" />
      </svg>
    ),
    pesan: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    pengaturan: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.06-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.73,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.06,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.43-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.49-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z" />
      </svg>
    )
  };
  return icons[name] || null;
}

export default function UMKMDashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('beranda');

  // We can treat activeMenu as either sidebar tab OR a sub-panel (like "posting").
  // So when activeMenu is "posting", the sidebar might still highlight "beranda" logically,
  // but let's just make it a clean switch.

  const isMenuBeranda = activeMenu === 'beranda' || activeMenu === 'posting';
  const isMenuPesan = activeMenu === 'pesan';
  const isMenuPengaturan = activeMenu === 'pengaturan';

  return (
    <div className="flex h-screen w-full bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] overflow-hidden">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');`}
      </style>

      {/* Sidebar */}
      <aside className="w-[280px] shrink-0 border-r border-gray-200 bg-white flex flex-col pt-[34px] px-[22px] pb-10">
        <div className="flex items-center gap-2 mb-[50px] pl-2 cursor-pointer">
          <img src="/kerjaria-logo-mark.svg" alt="KerjaRia Logo" className="h-[30px] w-[30px] object-contain" />
          <span className="text-[26px] font-extrabold leading-none tracking-[-0.02em] text-[#075fd4]">KerjaRia</span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          <button
            onClick={() => setActiveMenu('beranda')}
            className={`flex h-[48px] items-center gap-4 rounded-[10px] px-5 text-[18px] font-extrabold transition-all duration-300 ${
              isMenuBeranda
                ? 'bg-[#075fd4] text-white shadow-[0_6px_0_#034aa8] scale-[1.02] hover:bg-[#0650b3]'
                : 'text-[#343434] hover:bg-blue-50 hover:text-[#075fd4]'
            }`}
          >
            <Icon name="beranda" className={`h-6 w-6 ${isMenuBeranda ? 'text-white' : 'text-[#343434]'}`} />
            Beranda
          </button>

          <button
            onClick={() => setActiveMenu('pesan')}
            className={`flex h-[48px] items-center gap-4 rounded-[10px] px-5 text-[18px] font-extrabold transition-all duration-300 ${
              isMenuPesan
                ? 'bg-[#075fd4] text-white shadow-[0_6px_0_#034aa8] scale-[1.02] hover:bg-[#0650b3]'
                : 'text-[#343434] hover:bg-blue-50 hover:text-[#075fd4]'
            }`}
          >
            <Icon name="pesan" className={`h-6 w-6 ${isMenuPesan ? 'text-white' : 'text-[#343434]'}`} />
            Pesan
          </button>
        </nav>

        <div className="mt-auto">
          <button
            onClick={() => setActiveMenu('pengaturan')}
            className={`flex h-[48px] items-center gap-4 rounded-[10px] px-5 text-[18px] font-extrabold transition-all duration-300 ${
              isMenuPengaturan
                ? 'bg-[#075fd4] text-white shadow-[0_6px_0_#034aa8] scale-[1.02] hover:bg-[#0650b3]'
                : 'text-[#343434] hover:bg-gray-100'
            }`}
          >
            <Icon name="pengaturan" className={`h-6 w-6 ${isMenuPengaturan ? 'text-white' : 'text-gray-500'}`} />
            Pengaturan
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden relative">
        <AnimatePresence mode="wait">
          {activeMenu === 'beranda' && (
            <motion.div
              key="beranda"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <UMKMBerandaPanel onGoToPosting={() => setActiveMenu('posting')} />
            </motion.div>
          )}

          {activeMenu === 'posting' && (
            <motion.div
              key="posting"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <UMKMPostingPanel onBack={() => setActiveMenu('beranda')} />
            </motion.div>
          )}

          {activeMenu === 'pesan' && (
            <motion.div
              key="pesan"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <UMKMPesanPanel />
            </motion.div>
          )}

          {activeMenu === 'pengaturan' && (
            <motion.div
              key="pengaturan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50"
            >
              <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                <h2 className="text-2xl font-extrabold text-[#075fd4] mb-4">Pengaturan UMKM</h2>
                <p className="text-gray-500 font-semibold mb-8">Fitur pengaturan khusus mitra UMKM akan segera hadir.</p>
                <button
                  onClick={onLogout}
                  className="bg-red-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-600 transition-colors shadow-[0_4px_0_#c53030] active:translate-y-1 active:shadow-none"
                >
                  Logout
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
