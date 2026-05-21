import React, { useEffect, useRef, useState } from 'react';
import PrivasiDataContent from './PrivasiDataContent';

function Icon({ name, className = 'h-6 w-6' }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 2.8,
  };

  const icons = {
    robotHead: <path {...common} d="M12 2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zM8 12v4m8-4v4" />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[name] || <circle cx="12" cy="12" r="10" {...common} />}
    </svg>
  );
}

const themeOptions = [
  { value: 'light', label: 'Mode Terang', icon: '☀️' },
  { value: 'dark', label: 'Mode Gelap', icon: '🌙' },
  { value: 'system', label: 'Sesuai Sistem', icon: '💻' },
];

function TampilanContent({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = themeOptions.find((option) => option.value === theme) || themeOptions[0];

  return (
    <div className="px-2">
      <h2 className="text-[32px] font-extrabold text-[#343434] mb-10">Tema</h2>
      <div className="flex justify-between items-center">
        <span className="text-[18px] font-bold text-gray-400">Mode tampilan</span>
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border-[2px] font-bold text-[15px] min-w-[200px] justify-between transition-all duration-200 shadow-sm ${open ? 'border-[#075fd4] shadow-[0_0_0_3px_rgba(7,95,212,0.15)]' : 'border-gray-200 hover:border-[#075fd4]'} bg-white text-[#343434]`}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-[18px]">{selected.icon}</span>
              <span>{selected.label}</span>
            </span>
            <svg className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <div className={`absolute right-0 top-[calc(100%+8px)] min-w-[200px] bg-white rounded-xl border-[2px] border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden z-50 transition-all duration-200 origin-top ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
            {themeOptions.map((option) => (
              <button
                type="button"
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-[15px] font-bold transition-all duration-150 ${theme === option.value ? 'bg-[#075fd4] text-white' : 'text-[#343434] hover:bg-blue-50'}`}
              >
                <span className="text-[18px]">{option.icon}</span>
                <span>{option.label}</span>
                {theme === option.value && (
                  <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletPanel() {
  const historyItems = [
    { amount: '+150.000', date: 'Senin, 18 Mei 2026', label: 'Topup masuk', note: 'Metode: Transfer bank', type: 'topup' },
    { amount: '-50.000', date: 'Sabtu, 16 Mei 2026', label: 'Tarik saldo', note: 'Bank BCA', type: 'tarik' },
    { amount: '-75.000', date: 'Rabu, 13 Mei 2026', label: 'Membayar project', note: 'Project: Landing Page UMKM', type: 'project' },
    { amount: '+43.000', date: 'Minggu, 10 Mei 2026', label: 'Topup masuk', note: 'Metode: E-wallet', type: 'topup' },
  ];

  const HistoryIcon = ({ type }) => {
    const isTopup = type === 'topup';
    const isWithdraw = type === 'tarik';
    const isProject = type === 'project';

    const outerClass = isTopup ? 'bg-[#e8f3ff]' : isWithdraw ? 'bg-[#fff0e5]' : 'bg-[#eafaf1]';
    const innerClass = isTopup ? 'bg-[#1f8bff]' : isWithdraw ? 'bg-[#f97316]' : 'bg-[#16a34a]';

    return (
      <div className={`w-[80px] h-[80px] rounded-xl shrink-0 flex items-center justify-center ${outerClass}`}>
        <div className={`w-[48px] h-[48px] rounded-full flex items-center justify-center ${innerClass}`}>
          {isTopup ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-5 5m5-5l5 5" />
            </svg>
          ) : isWithdraw ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l5-5m-5 5l-5-5" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l-7 7 7 7" />
            </svg>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 mt-6 px-4">
      <div className="w-full md:w-[350px] shrink-0">
        <div className="bg-[#075fd4] rounded-[24px] p-8 flex flex-col justify-between h-[220px] shadow-sm relative overflow-hidden">
          <div>
            <span className="text-[16px] font-bold text-white flex items-baseline gap-2">
              Rp. <span className="text-[42px] font-extrabold text-white tracking-tight">218.000,00</span>
            </span>
          </div>
          <button className="w-full bg-white text-[#075fd4] py-3 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#f0f7ff] transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            Tarik Saldo
          </button>
        </div>
      </div>

      <div className="flex-1">
        <h2 className="text-[28px] font-extrabold text-[#343434] mb-4 border-b-2 border-gray-200 pb-2">Riwayat</h2>
        <div className="flex flex-col gap-4">
          {historyItems.map((item) => (
            <div key={`${item.date}-${item.amount}`} className="bg-white border border-gray-100 rounded-[16px] p-4 flex gap-5 items-center shadow-sm">
              <HistoryIcon type={item.type} />
              <div className="flex-1 flex flex-col">
                <div className="flex justify-between items-start gap-4">
                  <span className={`text-[20px] font-extrabold ${item.type === 'topup' ? 'text-[#075fd4]' : item.type === 'tarik' ? 'text-[#f97316]' : 'text-[#16a34a]'}`}>{item.amount}</span>
                  <span className="text-[13px] font-bold text-gray-800 text-right">{item.date}</span>
                </div>
                <span className="text-[14px] font-bold text-gray-800">{item.label}</span>
                <span className="text-[14px] font-bold text-gray-800 mt-1">{item.note}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProfileContent() {
  return (
    <div className="flex flex-col xl:flex-row gap-8 items-start px-2">
      <div className="w-full xl:w-[320px] bg-[#075fd4] rounded-[24px] overflow-hidden flex flex-col relative shadow-lg shrink-0 h-[600px]">
        <div className="bg-white h-[140px] px-4 rounded-b-[24px] relative z-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
          <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[160px] h-[160px] rounded-full border-[8px] border-white bg-gradient-to-br from-[#fff0a9] to-[#ffb1b1] overflow-hidden shadow-lg z-20">
            <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(event) => { event.target.src = 'https://via.placeholder.com/150'; }} />
          </div>
        </div>

        <div className="pt-24 pb-8 px-6 flex flex-col items-center relative z-0 flex-1">
          <button className="bg-white/20 hover:bg-white/30 border border-white/40 text-white px-4 py-1.5 rounded-lg text-[12px] font-bold transition-colors">
            Ubah Avatar
          </button>

          <h2 className="text-[25px] font-extrabold text-white text-center leading-tight mt-6">Bintang Store</h2>

          <div className="mt-3 flex items-center gap-2 bg-[#e08900] px-4 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative">
            <div className="w-3 h-3 rounded-full bg-[#fcd34d] absolute left-3"></div>
            <span className="ml-4">Junior Explorer</span>
            <Icon name="robotHead" className="w-4 h-4 ml-1 opacity-80" />
          </div>

          <Icon name="robotHead" className="w-28 h-28 text-white mt-12 mb-4" />
        </div>
      </div>

      <div className="flex-1 w-full bg-white border-[1.5px] border-[#d0d0d0] rounded-[24px] p-8 shadow-sm">
        <h2 className="text-[22px] font-extrabold text-[#4a4a4a] mb-6">Personal Information</h2>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-[#4a4a4a]">Nama Pengguna</label>
            <input type="text" defaultValue="BintangStore" className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[16px] font-bold text-[#4a4a4a]">Nama UMKM</label>
            <input type="text" defaultValue="BintangStore" className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-[16px] font-bold text-[#4a4a4a]">Jenis Kelamin</label>
            <div className="flex gap-8 items-center mt-1">
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-[#075fd4] flex items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#075fd4]" />
                </div>
                <span className="text-[15px] font-bold text-gray-800">Laki-laki</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                <span className="text-[15px] font-bold text-gray-800">Perempuan</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-[16px] font-bold text-[#4a4a4a]">Deskripsi Singkat</label>
            <textarea
              defaultValue="Toko UMKM yang melayani topup, penarikan saldo, dan pembayaran project di KerjaRia."
              rows="2"
              className="w-full border-[1.5px] border-[#075fd4] rounded-[20px] px-6 py-4 text-[16px] font-bold text-gray-800 outline-none focus:ring-4 focus:ring-blue-100 transition-all resize-none"
            />
          </div>

          <div className="flex flex-col gap-2 mt-2">
            <label className="text-[16px] font-bold text-[#4a4a4a]">Lokasi</label>
            <input type="text" defaultValue="Sidoarjo, Jawa Timur" className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsShell({ onBack, initialMenu = 'profil' }) {
  const [theme, setTheme] = useState('light');

  const menuLabel =
    initialMenu === 'profil'
      ? 'Profil'
      : initialMenu === 'tampilan'
        ? 'Tampilan'
        : initialMenu === 'wallet'
          ? 'Wallet'
          : 'Privasi & Data';

  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-4 mb-8 px-2">
        <button
          type="button"
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-blue-100 text-[#075fd4] flex items-center justify-center hover:bg-[#075fd4] hover:text-white transition-all shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-[34px] font-extrabold text-[#075fd4] tracking-tight">Pengaturan</h1>
      </div>

      <div className="px-2">
        <div className="flex items-center justify-between border-b-[1.5px] border-[#d0d0d0] pb-4 mb-8">
          <h2 className="text-[28px] font-extrabold text-[#075fd4] tracking-tight">{menuLabel}</h2>
        </div>

        <div className="w-full bg-white border-[1.5px] border-[#d0d0d0] rounded-[24px] p-8 shadow-sm">
          {initialMenu === 'profil' ? <ProfileContent /> : initialMenu === 'tampilan' ? <TampilanContent theme={theme} setTheme={setTheme} /> : initialMenu === 'wallet' ? <WalletPanel /> : <PrivasiDataContent />}
        </div>
      </div>
    </section>
  );
}

export default function UMKMPengaturanPanel({ onBack, initialMenu }) {
  return (
    <div className="flex-1 overflow-y-auto bg-white p-8 pb-20">
      <div className="max-w-[1100px] mx-auto">
        <SettingsShell onBack={onBack} initialMenu={initialMenu} />
      </div>
    </div>
  );
}
