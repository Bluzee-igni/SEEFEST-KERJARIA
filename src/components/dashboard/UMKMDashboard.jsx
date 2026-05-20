import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import UMKMBerandaPanel from './UMKMBerandaPanel';
import UMKMPesanPanel from './UMKMPesanPanel';
import UMKMPostingPanel from './UMKMPostingPanel';
import UMKMPengaturanPanel from './UMKMPengaturanPanel';
import UMKMPrivasiPanel from './UMKMPrivasiPanel';

// Reuse exact same Icon component from DashboardPage
function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2.8,
  };

  const icons = {
    home: (
      <path {...common} d="M4 11.5 12 5l8 6.5V21h-5v-6H9v6H4z" />
    ),
    mail: (
      <path {...common} d="M4 6h16v12H4zM4 7l8 6 8-6" />
    ),
    gear: (
      <path {...common} d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 4 2-1-2-4-2 1a8 8 0 0 0-2-1.2L15.5 4h-7L8 6.8A8 8 0 0 0 6 8L4 7l-2 4 2 1a8 8 0 0 0 0 2l-2 1 2 4 2-1a8 8 0 0 0 2 1.2l.5 2.8h7l.5-2.8a8 8 0 0 0 2-1.2l2 1 2-4-2-1a8 8 0 0 0 0-2Z" />
    ),
    user: (
      <path {...common} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    ),
    palette: (
      <path {...common} d="M12 21a9 9 0 0 1 0-18c4.97 0 9 3.582 9 8 0 1.06-.895 1.92-2 1.92h-1.874a2.118 2.118 0 0 0-2.117 2.124v.266a2.122 2.122 0 0 1-2.126 2.114A8.962 8.962 0 0 1 12 21Z" />
    ),
    lock: (
      <path {...common} d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a7 7 0 1 0-14 0v2" />
    ),
    'credit-card': (
      <path {...common} d="M3 10h18M7 15h.01M4 6h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z" />
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}

const umkmMenuItems = [
  { label: "Beranda", icon: "home" },
  { label: "Pesan", icon: "mail" },
];

const pengaturanMenuItems = [
  { label: "Profil", id: "profil", icon: "user" },
  { label: "Tampilan", id: "tampilan", icon: "palette" },
  { label: "Privasi & Data", id: "privasi", icon: "lock" },
  { label: "Wallet", id: "wallet", icon: "credit-card" },
];

export default function UMKMDashboard({ onLogout }) {
  const [activeMenu, setActiveMenu] = useState('Beranda');
  const [activePengaturanMenu, setActivePengaturanMenu] = useState('profil');

  // "Posting" is a sub-panel of Beranda
  const sidebarActive = activeMenu === 'Posting' ? 'Beranda' : activeMenu;
  const isPengaturan = activeMenu === 'Pengaturan';

  return (
    <div className="flex h-screen w-full bg-white font-['Plus_Jakarta_Sans',sans-serif] text-[#111827] overflow-hidden">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');`}
      </style>

      {/* Sidebar */}
      <aside className="sticky top-0 h-screen w-[305px] shrink-0 border-r-[3px] border-[#d0d0d0] bg-white px-7 py-12 flex flex-col">
        <a href="#" className="flex items-center gap-2" aria-label="KerjaRia">
          <img
            src="/kerjaria-logo-mark.svg"
            alt=""
            className="h-11 w-11 object-contain"
          />
          <span className="text-[40px] font-extrabold leading-none tracking-[-0.04em] text-[#075fd4]">
            KerjaRia
          </span>
        </a>

        {!isPengaturan ? (
          <nav className="mt-16 flex flex-col gap-5 flex-1">
            {umkmMenuItems.map((item) => {
              const isActive = item.label === sidebarActive;
              return (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => setActiveMenu(item.label)}
                  className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[27px] font-extrabold tracking-[-0.02em] transition-all duration-200 ${isActive
                      ? "bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8,0_14px_28px_rgba(7,95,212,0.22)] scale-[1.02]"
                      : "bg-white text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]"
                    }`}
                >
                  <Icon
                    name={item.icon}
                    className={`h-7 w-7 ${item.label === "Pesan"
                        ? "text-[#444]"
                        : isActive
                          ? "text-white"
                          : "text-[#075fd4]"
                      }`}
                  />
                  {item.label}
                </button>
              );
            })}
          </nav>
        ) : (
          <nav className="mt-16 flex flex-col gap-5 flex-1">
            {pengaturanMenuItems.map((item) => {
              const isActive = item.id === activePengaturanMenu;
              return (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => setActivePengaturanMenu(item.id)}
                  className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${isActive
                      ? "bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]"
                      : "text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]"
                    }`}
                >
                  <Icon
                    name={item.icon}
                    className={`h-7 w-7 ${isActive ? "text-white" : "text-[#343434]"}`}
                  />
                  {item.label}
                </button>
              );
            })}
          </nav>
        )}

        {!isPengaturan ? (
          <button
            type="button"
            onClick={() => setActiveMenu('Pengaturan')}
            className={`mt-auto flex h-[48px] items-center gap-5 text-[26px] font-extrabold hover:bg-[#f0f0f0] hover:scale-[1.02] transition-all duration-200 rounded-[10px] p-2 -ml-2 ${sidebarActive === 'Pengaturan' ? 'text-[#075fd4]' : 'text-[#343434]'}`}
          >
            <Icon name="gear" className={`h-9 w-9 ${sidebarActive === 'Pengaturan' ? 'text-[#075fd4]' : 'text-[#777]'}`} />
            Pengaturan
          </button>
        ) : (
          <button
            type="button"
            onClick={onLogout}
            className="mt-auto flex h-[48px] items-center gap-5 text-[22px] font-extrabold text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02] transition-all duration-200 rounded-[10px] p-2 -ml-2"
          >
            Logout
          </button>
        )}
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden relative">
        <AnimatePresence mode="wait">
          {activeMenu === 'Beranda' && (
            <motion.div
              key="beranda"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <UMKMBerandaPanel onGoToPosting={() => setActiveMenu('Posting')} />
            </motion.div>
          )}

          {activeMenu === 'Posting' && (
            <motion.div
              key="posting"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col"
            >
              <UMKMPostingPanel onBack={() => setActiveMenu('Beranda')} />
            </motion.div>
          )}

          {activeMenu === 'Pesan' && (
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

          {activeMenu === 'Pengaturan' && (
            <motion.div
              key="pengaturan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col bg-white"
            >
              {activePengaturanMenu === 'profil' ? (
                <UMKMPengaturanPanel onBack={() => setActiveMenu('Beranda')} />
              ) : activePengaturanMenu === 'privasi' ? (
                <UMKMPrivasiPanel onBack={() => setActiveMenu('Beranda')} />
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center bg-gray-50">
                  <div className="bg-white p-10 rounded-2xl shadow-sm text-center">
                    <h2 className="text-2xl font-extrabold text-[#075fd4] mb-4">Pengaturan {activePengaturanMenu}</h2>
                    <p className="text-gray-500 font-semibold mb-8">Fitur pengaturan khusus mitra UMKM akan segera hadir.</p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}


