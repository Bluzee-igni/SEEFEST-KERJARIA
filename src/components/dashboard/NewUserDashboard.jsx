import React, { useState } from 'react';

const menuItems = [
  { label: "Beranda", icon: "home" },
  { label: "Misi", icon: "book" },
  { label: "Event", icon: "ticket" },
  { label: "Level", icon: "star" },
  { label: "Pekerjaan", icon: "briefcase" },
  { label: "Sosial", icon: "users" },
  { label: "Pesan", icon: "mail" },
];

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2.8,
  };

  const icons = {
    home: <path {...common} d="M4 11.5 12 5l8 6.5V21h-5v-6H9v6H4z" />,
    book: <path {...common} d="M5 5.5c3.5 0 5.5.8 7 2.5 1.5-1.7 3.5-2.5 7-2.5V19c-3.5 0-5.5.8-7 2.5-1.5-1.7-3.5-2.5-7-2.5zM12 8v13.5" />,
    ticket: <path {...common} d="M4 8h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4zM10 10l4 8M14 10l-4 8" />,
    star: <path fill="currentColor" d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z" />,
    briefcase: <path {...common} d="M9 7V5h6v2m-10 4h14M5 8h14v11H5z" />,
    users: <path {...common} d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6.5-1a3.5 3.5 0 1 0 0-7M2 21c.8-4 3.4-6 7-6s6.2 2 7 6m1-5c2.7.4 4.4 2.1 5 5" />,
    mail: <path {...common} d="M4 6h16v12H4zM4 7l8 6 8-6" />,
    bell: <path fill="currentColor" d="M12 22a2.4 2.4 0 0 0 2.3-1.7H9.7A2.4 2.4 0 0 0 12 22Zm7-5-2-2.1V10a5 5 0 0 0-4-4.9V3h-2v2.1A5 5 0 0 0 7 10v4.9L5 17v1h14z" />,
    gear: <path {...common} d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 4 2-1-2-4-2 1a8 8 0 0 0-2-1.2L15.5 4h-7L8 6.8A8 8 0 0 0 6 8L4 7l-2 4 2 1a8 8 0 0 0 0 2l-2 1 2 4 2-1a8 8 0 0 0 2 1.2l.5 2.8h7l.5-2.8a8 8 0 0 0 2-1.2l2 1 2-4-2-1a8 8 0 0 0 0-2Z" />,
    code: <path {...common} d="m9 8-4 4 4 4m6-8 4 4-4 4" />,
    layout: <path {...common} d="M7 5v14M17 5v14M4 9h16M4 15h16" />,
    edit: <path {...common} d="m15.5 4.5 4 4L9 19H5v-4z" />,
    download: <path {...common} d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />,
    trash: <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16" />,
    robotHead: (
      <svg viewBox="0 0 100 100" fill="currentColor">
        <path d="M35 40 Q30 5 40 5 Q48 5 45 40 Z" />
        <path d="M65 40 Q70 5 60 5 Q52 5 55 40 Z" />
        <rect x="8" y="50" width="15" height="24" rx="6" />
        <rect x="77" y="50" width="15" height="24" rx="6" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 60 C15 25 85 25 85 60 C85 95 15 95 15 60 Z M32 65 C32 50 42 50 42 65 C42 80 32 80 32 65 Z M58 65 C58 50 68 50 68 65 C68 80 58 80 58 65 Z" />
      </svg>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[name]}
    </svg>
  );
}

function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[305px] shrink-0 self-start border-r-[3px] border-[#d0d0d0] bg-white px-7 py-12 lg:flex lg:flex-col">
      <a href="#" className="flex items-center gap-2" aria-label="KerjaRia">
        <img src="/kerjaria-logo-mark.svg" alt="" className="h-11 w-11 object-contain" />
        <span className="text-[40px] font-extrabold leading-none tracking-[-0.04em] text-[#075fd4]">
          KerjaRia
        </span>
      </a>

      <nav className="mt-16 flex flex-col gap-5">
        {menuItems.map((item) => {
          const isActive = item.label === activeTab;
          return (
            <button
              type="button"
              key={item.label}
              onClick={() => setActiveTab(item.label)}
              className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[27px] font-extrabold tracking-[-0.02em] transition-all duration-200 ${isActive
                ? "bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8,0_14px_28px_rgba(7,95,212,0.22)] scale-[1.02]"
                : "bg-white text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]"
              }`}
            >
              <Icon
                name={item.icon}
                className={`h-7 w-7 ${item.label === "Event"
                  ? "text-[#c63cff]"
                  : item.label === "Level"
                    ? "text-[#ffb000]"
                    : item.label === "Pekerjaan"
                      ? "text-[#b55151]"
                      : item.label === "Sosial"
                        ? "text-[#707070]"
                        : item.label === "Pesan"
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

      <button
        type="button"
        onClick={() => setActiveTab("Pengaturan")}
        className={`mt-auto flex h-[48px] items-center gap-5 text-[26px] font-extrabold hover:bg-[#f0f0f0] hover:scale-[1.02] transition-all duration-200 rounded-[10px] p-2 -ml-2 ${activeTab === 'Pengaturan' ? 'text-[#075fd4]' : 'text-[#343434]'}`}
      >
        <Icon name="gear" className={`h-9 w-9 ${activeTab === 'Pengaturan' ? 'text-[#075fd4]' : 'text-[#777]'}`} />
        Pengaturan
      </button>
    </aside>
  );
}

function FreshLevelHero() {
  return (
    <section className="relative overflow-hidden rounded-[22px] bg-[#075fd4] px-8 py-8 text-white shadow-[0_9px_0_#034aa8]">
      <Icon name="bell" className="absolute right-7 top-6 h-7 w-7 text-white" />
      <div className="flex items-center gap-9">
        <div className="relative grid h-[205px] w-[205px] shrink-0 place-items-center">
          <img
            src="/level-rabbit-logo.svg"
            alt=""
            className="absolute inset-0 h-full w-full object-contain"
          />
          <strong className="relative text-[98px] font-extrabold leading-none text-[#075fd4]">
            1
          </strong>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-[46px] font-extrabold leading-none tracking-[-0.03em]">
            Level 1
          </h1>
          <div className="mt-3 h-[24px] w-[166px] rounded-full bg-[#4ade80] text-center text-[15px] font-extrabold leading-[24px] text-[#166534] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.3)]">
            Junior Explorer
          </div>
          {/* Empty progress bar */}
          <div className="mt-3 h-[30px] overflow-hidden rounded-full bg-white/35">
            <div className="h-full w-[2%] rounded-full bg-white transition-all duration-1000" />
          </div>
          <div className="mt-4 flex items-center justify-between text-[22px] font-semibold">
            <span>0 / 4.000 XP</span>
            <span>4.000 XP lagi untuk level 2</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function FreshMissionPanel() {
  return (
    <section className="rounded-[24px] border-[1.5px] border-[#cecece] bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#075fd4] text-white shadow-sm">
          <Icon name="book" className="h-6 w-6" />
        </span>
        <h2 className="text-[26px] font-extrabold tracking-tight text-[#343434]">
          Misi Berlangsung
        </h2>
      </div>

      <div className="rounded-[20px] border-[1.5px] border-[#e0e0e0] flex flex-col overflow-hidden bg-white">
        {/* Single starter mission */}
        <div className="flex min-h-[76px] items-center gap-5 px-6 py-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#dbeafe]">
            <Icon name="code" className="h-6 w-6 text-[#075fd4]" />
          </span>
          <h3 className="flex-1 text-[17px] font-extrabold text-[#343434]">
            Dasar HTML
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-bold text-gray-500 mb-1">+50XP</span>
            <button className="rounded-lg bg-[#075fd4] px-6 py-1.5 text-[14px] font-extrabold text-white shadow-sm hover:bg-[#064ca8] hover:scale-105 transition-all duration-200">
              Lanjut
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EventBannerKemerdekaan() {
  return (
    <div
      className="relative h-[220px] w-full overflow-hidden rounded-[24px] bg-cover bg-left-bottom"
      style={{ backgroundImage: "url('/event-kemerdekaan-bg.svg')" }}
    >
      <div className="relative z-10 h-full px-10 flex flex-col justify-center items-start">
        <h3 className="max-w-[450px] text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          Selamat Hari Kemerdekaan<br />Indonesia ke- 81
        </h3>
        <p className="mt-1.5 text-[14px] font-extrabold text-black">
          15 Agustus – 22 Agustus 2026
        </p>
        <button className="mt-4 flex items-center gap-2 rounded-full bg-[#075fd4] px-5 py-2 text-[14px] font-extrabold text-white shadow-[0_4px_10px_rgba(7,95,212,0.3)] hover:bg-[#064ca8] hover:scale-105 transition-all duration-200">
          Pergi
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="7" cy="7" r="7" fill="white" />
            <circle cx="7" cy="7" r="3.5" fill="#075fd4" />
          </svg>
        </button>
      </div>
      <img src="/event-kemerdekaan-robot.svg" alt="" className="absolute bottom-0 right-[8%] h-[200px] w-auto object-contain pointer-events-none" />
    </div>
  );
}

function EventBannerPramuka() {
  return (
    <div
      className="relative h-[220px] w-full overflow-hidden rounded-[24px] bg-cover bg-left-bottom"
      style={{ backgroundImage: "url('/event-pramuka-bg.svg')" }}
    >
      <div className="relative z-10 h-full px-10 flex flex-col justify-center items-start">
        <h3 className="max-w-[450px] text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-white">
          Selamat Hari Ulang Tahun Pramuka<br />Indonesia ke-65
        </h3>
        <p className="mt-1.5 text-[14px] font-extrabold text-white">
          15 Agustus – 22 Agustus 2026
        </p>
        <button className="mt-4 flex items-center gap-2 rounded-full bg-white px-5 py-2 text-[14px] font-extrabold text-[#343434] shadow-[0_4px_10px_rgba(0,0,0,0.15)] hover:bg-gray-100 hover:scale-105 transition-all duration-200">
          Pergi
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="#343434" />
            <circle cx="7" cy="7" r="3.5" fill="white" />
          </svg>
        </button>
      </div>
      <img src="/event-pramuka-robot.svg" alt="" className="absolute bottom-0 right-[8%] h-[200px] w-auto object-contain pointer-events-none" />
    </div>
  );
}

function EmptyProfilePanel() {
  return (
    <aside className="hidden w-[318px] shrink-0 rounded-[20px] bg-[#075fd4] text-white xl:flex flex-col shadow-lg overflow-visible relative">
      {/* Top Blue section with avatar */}
      <div className="bg-[#075fd4] rounded-t-[20px] px-6 pt-6 pb-24 relative flex flex-col items-center cursor-pointer hover:bg-[#0654c0] transition-colors group">
        <div className="w-full flex justify-between items-center text-[16px] font-extrabold text-white">
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-[8px] bg-white text-[#075fd4] flex items-center justify-center shadow-sm">1</span>
            0 XP
          </span>
          <span className="flex flex-col items-center gap-1 bg-white/20 px-2.5 py-1 rounded-md text-[13px] border border-white/30 relative">
            <div className="flex items-center gap-1">
              <span className="text-red-400">🔥</span> 0
            </div>
            <span className="text-[8px] absolute -bottom-3 text-white/80">+0XP</span>
          </span>
        </div>

        <div className="w-[140px] h-[140px] rounded-full border-[6px] border-[#ffd245] bg-gradient-to-br from-[#fff0a9] to-[#ff8f8f] mt-8 shadow-md relative z-20 overflow-hidden group-hover:scale-105 transition-transform">
          <div className="w-full h-full bg-white flex items-center justify-center text-gray-400">
            <Icon name="user" className="w-16 h-16" />
          </div>
        </div>
        <div className="w-7 h-7 bg-white text-[#075fd4] rounded-md absolute bottom-[100px] right-[70px] z-30 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100">
          <Icon name="edit" className="w-4 h-4" />
        </div>

        <h2 className="text-[22px] font-extrabold mt-6 text-center leading-tight">Pengguna Baru</h2>

        <div className="mt-2.5 bg-[#d97706] px-5 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative z-20 flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#fcd34d] mr-2"></div>
          Junior Explorer
        </div>
      </div>

      {/* Stats Ticket Layer */}
      <div className="absolute top-[350px] left-4 right-4 flex justify-between z-30 pointer-events-none">
        {[
          ["book", "1", "Misi\nTersedia", "#075fd4"],
          ["check", "0", "Misi\nSelesai", "#00c943"],
          ["star", "0", "Skill\nDipelajari", "#d50bb9"],
        ].map(([icon, count, label, color]) => (
          <div key={label} className="w-[85px] bg-white rounded-t-[12px] rounded-b-[4px] shadow-md flex flex-col items-center pt-3 pb-5 relative pointer-events-auto">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-inner mb-1" style={{ backgroundColor: color }}>
              <Icon name={icon} className="w-5 h-5" />
            </div>
            <strong className="text-black text-[22px] font-extrabold mt-1 leading-none">{count}</strong>
            <span className="text-gray-500 text-[10px] font-bold text-center leading-tight mt-1 whitespace-pre-line">{label}</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-[3px_3px_5px_rgba(0,0,0,0.05)] -z-10 rounded-sm"></div>
          </div>
        ))}
      </div>

      {/* White container bottom */}
      <div className="bg-white rounded-[20px] px-5 pt-[90px] pb-6 flex-1 flex flex-col gap-5 shadow-[-2px_-5px_15px_rgba(0,0,0,0.05)] relative z-10 -mt-10">
        {/* Misi Harian */}
        <div className="border-[1.5px] border-[#e0e0e0] rounded-[16px] p-4 bg-[#f8fbff] shadow-sm flex flex-col">
          <div className="flex items-center gap-2 text-[12px] font-bold text-[#075fd4]">
            <Icon name="book" className="w-4 h-4" />
            Misi harian
          </div>
          <div className="flex items-center mt-3 gap-3">
            <div className="w-11 h-11 rounded-[10px] bg-[#075fd4] text-white flex items-center justify-center shadow-md">
              <Icon name="book" className="w-6 h-6" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-end text-[13px] font-extrabold text-black">
                <span>Selesaikan satu misi</span>
                <span className="text-[12px]">0/1</span>
              </div>
              <div className="w-full h-1.5 bg-[#dbeafe] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#075fd4] rounded-full w-[0%]"></div>
              </div>
              <span className="self-end text-[9px] font-bold text-gray-400 mt-1">+50XP</span>
            </div>
          </div>
        </div>

        {/* Progress Skill */}
        <div className="flex flex-col mt-2 px-1">
          <h3 className="text-[15px] font-extrabold text-black mb-4">Progress Skill</h3>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-[8px] bg-[#f3e8ff] text-[#a855f7] flex items-center justify-center shadow-sm border border-[#e9d5ff]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.8" viewBox="0 0 24 24"><path d="M7 5v14M17 5v14M4 9h16M4 15h16"/></svg>
            </div>
            <div className="flex-1 flex flex-col justify-center mt-1">
              <div className="flex justify-between text-[12px] font-extrabold text-black mb-1.5">
                <span>UI/UX</span>
                <span className="text-gray-500">0%</span>
              </div>
              <div className="w-full h-1.5 bg-[#f3e8ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#a855f7] rounded-full w-[0%]"></div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-[8px] bg-[#ffedd5] text-[#f97316] flex items-center justify-center shadow-sm border border-[#fed7aa]">
              <Icon name="code" className="w-5 h-5" />
            </div>
            <div className="flex-1 flex flex-col justify-center mt-1">
              <div className="flex justify-between text-[12px] font-extrabold text-black mb-1.5">
                <span>Frontend Dev</span>
                <span className="text-gray-500">0%</span>
              </div>
              <div className="w-full h-1.5 bg-[#ffedd5] rounded-full overflow-hidden">
                <div className="h-full bg-[#f97316] rounded-full w-[0%]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center mt-auto pt-6 pb-2">
          <Icon name="robotHead" className="w-20 h-20 text-[#075fd4] opacity-90" />
        </div>
      </div>
    </aside>
  );
}

const MISI_DATA = [
  { id: 1, title: "Frontend Developer", subtitle: "Selesaikan modul HTML & CSS Dasar", progress: 0, totalSteps: 5, completedSteps: 0, icon: "layout", color: "bg-[#eef2ff] text-[#4f46e5]" },
  { id: 2, title: "UI/UX Designer", subtitle: "Buat wireframe aplikasi Kasir", progress: 0, totalSteps: 5, completedSteps: 0, icon: "edit", color: "bg-[#fff1f2] text-[#e11d48]" },
  { id: 3, title: "Backend Developer", subtitle: "Pelajari routing di Express.js", progress: 0, totalSteps: 5, completedSteps: 0, icon: "code", color: "bg-[#f0fdf4] text-[#16a34a]" },
  { id: 4, title: "Data Analyst", subtitle: "Kumpulkan dataset dari Kaggle", progress: 0, totalSteps: 5, completedSteps: 0, icon: "book", color: "bg-[#fffbeb] text-[#d97706]" },
  { id: 5, title: "Mobile Developer", subtitle: "Install Flutter SDK & Android Studio", progress: 0, totalSteps: 2, completedSteps: 0, icon: "download", color: "bg-[#f3e8ff] text-[#9333ea]" },
  { id: 6, title: "Cyber Security", subtitle: "Konfigurasi Firewall Dasar", progress: 0, totalSteps: 4, completedSteps: 0, icon: "gear", color: "bg-[#fce7f3] text-[#db2777]" },
  { id: 7, title: "Cloud Engineer", subtitle: "Setup VPS dan Nginx", progress: 0, totalSteps: 6, completedSteps: 0, icon: "layout", color: "bg-[#e0f2fe] text-[#0284c7]" },
  { id: 8, title: "Game Developer", subtitle: "Buat karakter bergerak di Unity", progress: 0, totalSteps: 5, completedSteps: 0, icon: "edit", color: "bg-[#fef3c7] text-[#b45309]" },
  { id: 9, title: "DevOps Engineer", subtitle: "Pelajari perintah dasar Docker", progress: 0, totalSteps: 3, completedSteps: 0, icon: "code", color: "bg-[#e2e8f0] text-[#475569]" },
  { id: 10, title: "Product Manager", subtitle: "Tulis PRD untuk fitur baru", progress: 0, totalSteps: 5, completedSteps: 0, icon: "book", color: "bg-[#dcfce7] text-[#15803d]" },
];

function MisiCard({ title, subtitle, progress, totalSteps, completedSteps, icon, color }) {
  const [bgClass, textClass] = color.split(" ");
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-6">
      {/* Top Section */}
      <div className="flex gap-5 items-center">
        {/* Icon */}
        <div className={`w-[70px] h-[70px] rounded-[16px] ${bgClass} ${textClass} flex items-center justify-center flex-shrink-0`}>
          <Icon name={icon} className="w-8 h-8" />
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1">
          <h3 className="text-[20px] font-extrabold text-gray-800 leading-tight">{title}</h3>
          <p className="text-[13px] text-gray-500 font-bold mt-1 line-clamp-1">{subtitle}</p>

          {/* Sub-steps */}
          <div className="flex items-center mt-2.5">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <React.Fragment key={i}>
                <div className={`w-3.5 h-3.5 rounded-full border-[2px] ${i < completedSteps ? 'bg-gray-500 border-gray-500' : 'bg-white border-gray-300'} z-10 flex-shrink-0`} />
                {i < totalSteps - 1 && (
                  <div className={`w-4 h-[2px] ${i < completedSteps - 1 ? 'bg-gray-500' : 'bg-gray-200'} z-0 flex-shrink-0 -mx-[1px]`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-2 mt-auto">
        <div className="flex justify-between items-center text-[13px] font-bold">
          <span className="text-gray-500">Progress Misi</span>
          <span className="text-gray-800">{progress}% Complete</span>
        </div>
        <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-gray-600 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  );
}

function EmptyMisiPanel() {
  const [activeFilter, setActiveFilter] = useState("Semua Misi");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMissions = MISI_DATA.filter((misi) => {
    // 1. Filter by category
    if (activeFilter === "Sedang Berjalan") {
      if (misi.progress === 100) return false;
    } else if (activeFilter === "Selesai") {
      if (misi.progress !== 100) return false;
    }

    // 2. Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      if (!misi.title.toLowerCase().includes(query) && !misi.subtitle.toLowerCase().includes(query)) {
        return false;
      }
    }

    return true;
  });

  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] mr-4">Misi</h1>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveFilter("Semua Misi")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Semua Misi' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}
          >
            Semua Misi
          </button>
          <button
            onClick={() => setActiveFilter("Sedang Berjalan")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Sedang Berjalan' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}
          >
            Sedang Berjalan
          </button>
          <button
            onClick={() => setActiveFilter("Selesai")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Selesai' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'}`}
          >
            Selesai
          </button>
        </div>

        <div className="ml-auto flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 w-full sm:w-[250px] shadow-sm focus-within:border-[#075fd4] focus-within:ring-2 focus-within:ring-blue-100 transition-all">
          <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input
            type="text"
            placeholder="Cari misi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none text-[14px] w-full text-black font-bold placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {filteredMissions.map(misi => (
          <MisiCard key={misi.id} {...misi} />
        ))}
        {filteredMissions.length === 0 && (
          <div className="col-span-1 md:col-span-2 py-10 flex items-center justify-center text-gray-500 font-bold">
            Tidak ada misi yang ditemukan.
          </div>
        )}
      </div>
    </section>
  );
}

function EmptyEventPanel() {
  return (
    <section className="w-full flex flex-col h-full">
      <div className="mb-6 pb-4 border-b-[1.5px] border-[#d0d0d0]">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] pl-2">Event</h1>
      </div>

      <div className="flex flex-col gap-6 pr-10 pl-2">
        <EventBannerKemerdekaan />
        <EventBannerPramuka />
      </div>
    </section>
  );
}

function AvatarBorderReward({ type, name, className }) {
  let gradientClass = "";
  let textColor = "";
  let accents = null;

  if (type === "bronze") {
    gradientClass = "from-[#d4a373] via-[#b5835a] to-[#d4a373]";
    textColor = "text-[#b5835a]";
  } else if (type === "silver") {
    gradientClass = "from-[#f8f9fa] via-[#9ca3af] to-[#f8f9fa]";
    textColor = "text-[#6b7280]";
    accents = (
      <>
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-300 rotate-45 rounded-sm z-20" />
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-300 rotate-45 rounded-sm z-20" />
      </>
    );
  } else if (type === "gold") {
    gradientClass = "from-[#ffea00] via-[#ff9100] to-[#ffea00]";
    textColor = "text-[#d97706]";
    accents = (
      <>
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rotate-45 rounded-sm shadow-sm z-20" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-500 rotate-45 rounded-sm shadow-sm z-20" />
      </>
    );
  } else if (type === "diamond") {
    gradientClass = "from-[#00f2fe] via-[#4facfe] to-[#00f2fe]";
    textColor = "text-[#0ea5e9]";
    accents = (
      <>
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-300 rotate-45 shadow-sm z-20" />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rotate-45 shadow-sm z-20" />
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-cyan-300 rotate-45 shadow-sm z-20" />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-400 rotate-45 shadow-sm z-20" />
      </>
    );
  }

  return (
    <div className={`bg-white rounded-[12px] p-2 shadow-xl border border-gray-100 flex flex-col items-center justify-center gap-1.5 ${className}`}>
      <span className={`${textColor} font-extrabold text-[12px] leading-none text-center px-1`}>{name}</span>
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-md">
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className={`absolute -inset-[50%] bg-gradient-to-br ${gradientClass} animate-spin`} style={{ animationDuration: type === 'diamond' ? '2.5s' : '4s' }} />
        </div>
        <div className="relative w-[52px] h-[52px] rounded-full bg-[#f8f9fa] z-10 flex items-center justify-center overflow-hidden border-[2px] border-white">
          <img src="/asah-skill-robot.svg" className="w-[85%] h-[85%] object-contain translate-y-0.5" alt="Avatar" />
        </div>
        {accents}
      </div>
    </div>
  );
}

function RabbitHexagon({ level, isWhite, className, textClassName }) {
  const fillColor = isWhite ? "white" : "#075fd4";
  const textColor = isWhite ? "text-[#075fd4]" : "text-white";
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg className="absolute inset-0 w-full h-full drop-shadow-sm" viewBox="0 0 172 226" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M71.8325 50.9551C80.5915 45.4767 91.7087 45.4767 100.468 50.9551L151.618 82.9476C159.508 87.8825 164.3 96.5327 164.3 105.839V167.798C164.3 177.703 158.876 186.813 150.168 191.534L99.0183 219.264C90.9914 223.615 81.3089 223.615 73.282 219.264L22.1322 191.534C13.4242 186.813 8.00037 177.703 8.00033 167.798L8.00006 105.839C8.00002 96.5327 12.7925 87.8825 20.6825 82.9476L71.8325 50.9551Z" fill={fillColor} fillOpacity="0.4" />
        <path fillRule="evenodd" clipRule="evenodd" d="M113.551 1.59357C115.568 -1.25445 119.64 -0.0643695 119.9 3.41584C120.863 16.2734 119.464 34.9999 110.319 49.7576C134.817 54.4151 154.394 72.9608 160.548 96.8934C161.752 95.9449 163.271 95.3778 164.923 95.3778C168.832 95.3779 172 98.5471 172 102.456V132.481C172 136.39 168.832 139.559 164.923 139.559C164.094 139.559 163.299 139.415 162.56 139.153C162.092 158.172 146.529 173.446 127.397 173.446H41.6084C22.6037 173.446 7.12113 158.373 6.45898 139.53C2.83993 139.217 0 136.182 0 132.481V102.456C0 98.5472 3.16851 95.378 7.07715 95.3778C7.67435 95.3778 8.25461 95.4524 8.80859 95.5916C14.9314 73.707 32.3352 56.5348 54.3545 50.7391C44.6505 35.8384 43.1689 16.5598 44.1533 3.41584C44.4141 -0.0643041 48.4848 -1.25434 50.502 1.59357C61.3265 16.8769 63.7885 35.6953 63.3672 49.0447C65.7985 48.766 68.2714 48.6229 70.7773 48.6229H98.2295C99.0476 48.6229 99.8621 48.6385 100.673 48.6688C100.309 35.3437 102.828 16.7339 113.551 1.59357Z" fill={fillColor} />
      </svg>
      <span className={`relative z-10 font-black tracking-tight translate-y-[15%] ${textColor} ${textClassName}`}>{level}</span>
    </div>
  );
}

function EmptyLevelPanel() {
  return (
    <section className="w-full h-full flex flex-col relative overflow-y-auto overflow-x-hidden pt-4 pb-20">
      <div className="flex items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4]">Level & Rewards</h1>
      </div>

      <div className="w-full max-w-[800px] mx-auto z-10 relative">
        <FreshLevelHero />
      </div>

      {/* Timeline Section */}
      <div className="relative w-full max-w-[800px] mx-auto mt-4">
        {/* The Line */}
        <div className="absolute left-1/2 top-0 bottom-[-50px] w-[6px] bg-[#b5d0f5] -translate-x-1/2 z-0" />

        {/* Milestone 5 */}
        <div className="relative z-10 flex items-center w-full mt-16 opacity-60">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="5" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center justify-center">
              <AvatarBorderReward type="bronze" name="Border Perunggu" className="absolute -top-10 -right-4 rotate-[15deg] w-[110px] h-[125px] z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Milestone 10 */}
        <div className="relative z-10 flex items-center w-full mt-24 opacity-60">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="10" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center justify-center">
              <AvatarBorderReward type="bronze" name="Bingkai Spesial" className="absolute -top-8 right-16 -rotate-6 w-[100px] h-[115px] z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Milestone 15 */}
        <div className="relative z-10 flex items-center w-full mt-24 opacity-60">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="15" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center justify-center">
              <span className="text-white font-extrabold text-[18px]">Reward Misteri</span>
            </div>
          </div>
        </div>

        {/* Milestone 20 */}
        <div className="relative z-10 flex items-center w-full mt-24 opacity-60">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="20" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center">
              <AvatarBorderReward type="silver" name="Border Perak" className="absolute -top-10 -right-4 rotate-[15deg] w-[110px] h-[125px] z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Milestone 25 */}
        <div className="relative z-10 flex items-center w-full mt-24 opacity-60">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="25" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center">
              <AvatarBorderReward type="gold" name="Border Emas" className="absolute -top-8 right-16 -rotate-6 w-[100px] h-[115px] z-10 pointer-events-none" />
              <AvatarBorderReward type="diamond" name="Border Berlian" className="absolute -top-12 -right-4 rotate-12 w-[100px] h-[115px] z-20 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Milestone 30 */}
        <div className="relative z-10 flex items-center w-full mt-24 opacity-60">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="30" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center">
              {/* Suitcase */}
              <div className="absolute -top-12 -right-2 w-[140px] h-[110px] rotate-[10deg] z-10 drop-shadow-2xl pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-8 border-[6px] border-[#4a2e2a] rounded-t-2xl" />
                <div className="absolute top-6 w-full h-[90px] bg-[#f06e6a] rounded-2xl border-b-[10px] border-[#c05652] flex justify-center gap-10 pt-4 overflow-hidden shadow-inner">
                  <div className="w-4 h-full bg-[#4a2e2a] rounded-sm" />
                  <div className="w-4 h-full bg-[#4a2e2a] rounded-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmptyPekerjaanPanel() {
  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4]">Pekerjaan</h1>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-20">
        <Icon name="briefcase" className="w-24 h-24 mb-6 opacity-30" />
        <h2 className="text-2xl font-extrabold text-[#343434] mb-2">Belum ada lowongan tersimpan</h2>
        <p className="font-bold text-center">Eksplorasi skill baru dan temukan pekerjaan impianmu.</p>
      </div>
    </section>
  );
}

function EmptySosialPanel() {
  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4]">Sosial</h1>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-gray-400 py-20">
        <Icon name="users" className="w-24 h-24 mb-6 opacity-30" />
        <h2 className="text-2xl font-extrabold text-[#343434] mb-2">Belum ada teman</h2>
        <p className="font-bold text-center">Tambah teman untuk berkolaborasi dan berbagi progress!</p>
      </div>
    </section>
  );
}

function EmptyPesanPanel() {
  const [activeMessageId, setActiveMessageId] = useState(1);

  const messages = [
    {
      id: 1,
      title: "Selamat Datang di KerjaRia",
      sender: "",
      date: "18-05-2026 23:59",
      content: "Halo Pengguna Baru, terimakasih sudah mendaftar di KerjaRia. Hanya ini yang bisa kami berikan",
      hasAttachment: true,
    },
    {
      id: 2,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
    {
      id: 3,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
    {
      id: 4,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
    {
      id: 5,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
  ];

  const activeMessage = messages.find((m) => m.id === activeMessageId);

  return (
    <section className="w-full flex flex-col h-full">
      <div className="mb-6 pb-4 border-b-[1.5px] border-[#d0d0d0]">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] pl-2">Pesan</h1>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="w-[45%] flex flex-col pr-6">
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {messages.map((msg) => {
              const isActive = msg.id === activeMessageId;
              return (
                <div
                  key={msg.id}
                  onClick={() => setActiveMessageId(msg.id)}
                  className={`cursor-pointer rounded-[8px] p-5 flex items-center gap-4 transition-all duration-200 hover:scale-[1.02] ${isActive
                      ? "bg-[#075fd4] text-white shadow-md"
                      : "bg-white text-[#343434] border-[2px] border-[#e0e0e0] shadow-[0_5px_0_#d0d0d0]"
                    }`}
                >
                  <Icon
                    name="mail"
                    className={`h-9 w-9 shrink-0 ${isActive ? "text-white" : "text-[#075fd4]"}`}
                  />
                  <h3 className="font-extrabold text-[16px] leading-snug">{msg.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#075fd4] px-6 py-2 text-white font-extrabold text-[15px] shadow-md hover:bg-[#064ca8] transition-all duration-200 hover:scale-105">
              <Icon name="download" className="h-4 w-4" />
              Klaim Semua
            </button>
            <button className="flex items-center gap-2 rounded-full bg-[#d0d0d0] px-6 py-2 text-[#4a4a4a] font-extrabold text-[15px] shadow-md hover:bg-[#b0b0b0] transition-all duration-200 hover:scale-105">
              <Icon name="trash" className="h-4 w-4" />
              Hapus
            </button>
          </div>
        </div>

        <div className="w-[4px] bg-[#075fd4] rounded-full mx-2 shrink-0"></div>

        <div className="flex-1 pl-8 flex flex-col">
          {activeMessage && (
            <>
              <h2 className="text-[28px] font-extrabold text-[#343434] mb-4">
                {activeMessage.title}
              </h2>
              <div className="w-full h-[1.5px] bg-[#d0d0d0] mb-4" />

              <div className="text-[18px] font-bold text-[#4a4a4a] mb-4 leading-relaxed">
                <div>Sender: </div>
                <div>Time/Date: {activeMessage.date}</div>
              </div>

              <div className="w-full h-[1.5px] bg-[#d0d0d0] mb-4" />

              <div className="text-[18px] font-bold text-[#343434] flex-1">
                <p>{activeMessage.content}</p>

                {activeMessage.hasAttachment && (
                  <div className="mt-12">
                    <div className="h-[90px] w-[90px] rounded-[10px] border-[3px] border-[#cecece] shadow-sm bg-white overflow-hidden p-[2px]">
                      <img
                        src="https://api.dicebear.com/7.x/adventurer/svg?seed=KerjaRia"
                        alt="Attachment"
                        className="w-full h-full object-cover rounded-[6px]"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto flex justify-end pt-6">
                <button className="flex items-center gap-2 rounded-full bg-[#075fd4] px-8 py-2 text-white font-extrabold text-[16px] shadow-md hover:bg-[#064ca8] transition-all duration-200 hover:scale-105">
                  <Icon name="download" className="h-5 w-5" />
                  Klaim
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function EmptyPengaturanPanel() {
  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#343434]">Pengaturan Akun</h1>
      </div>
      <div className="bg-white rounded-[24px] border-[1.5px] border-[#e0e0e0] p-8 shadow-sm">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-[100px] h-[100px] rounded-full border-4 border-[#e0e0e0] bg-gray-100 flex items-center justify-center">
            <Icon name="user" className="w-12 h-12 text-gray-400" />
          </div>
          <div>
            <h2 className="text-[24px] font-extrabold text-black">Pengguna Baru</h2>
            <p className="text-[14px] font-bold text-gray-500">Junior Explorer</p>
          </div>
        </div>
        <div className="space-y-6 max-w-[500px]">
          <div>
            <label className="block text-[14px] font-bold text-gray-600 mb-2">Nama Tampilan</label>
            <input type="text" value="Pengguna Baru" readOnly className="w-full h-12 rounded-[10px] border-[1.5px] border-gray-300 px-4 font-bold bg-gray-50 text-gray-500" />
          </div>
          <div>
            <label className="block text-[14px] font-bold text-gray-600 mb-2">Email</label>
            <input type="email" value="Belum diatur" readOnly className="w-full h-12 rounded-[10px] border-[1.5px] border-gray-300 px-4 font-bold bg-gray-50 text-gray-500" />
          </div>
          <button className="h-12 px-6 rounded-[10px] bg-[#075fd4] text-white font-extrabold shadow-sm hover:bg-[#064ca8] transition-colors">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </section>
  );
}

export default function NewUserDashboard({ onBuat, onMasuk }) {
  const [activeTab, setActiveTab] = useState("Beranda");

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] font-['Plus_Jakarta_Sans',sans-serif]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
          html, body, #root { margin: 0; min-height: 100%; }`}
      </style>

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex min-w-0 flex-1 gap-8 px-6 py-14 lg:px-14">
        {activeTab === "Beranda" ? (
          <>
            <section className="min-w-0 flex-1 space-y-7">
              <FreshLevelHero />
              <FreshMissionPanel />

              <section>
                <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.03em] text-[#343434]">
                  Event Berlangsung
                </h2>
                <EventBannerKemerdekaan />
              </section>
            </section>
            <EmptyProfilePanel />
          </>
        ) : activeTab === "Misi" ? (
          <EmptyMisiPanel />
        ) : activeTab === "Event" ? (
          <EmptyEventPanel />
        ) : activeTab === "Level" ? (
          <EmptyLevelPanel />
        ) : activeTab === "Pekerjaan" ? (
          <EmptyPekerjaanPanel />
        ) : activeTab === "Sosial" ? (
          <EmptySosialPanel />
        ) : activeTab === "Pesan" ? (
          <EmptyPesanPanel />
        ) : activeTab === "Pengaturan" ? (
          <EmptyPengaturanPanel />
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <h2 className="text-2xl font-bold text-gray-400">Halaman {activeTab} sedang dalam pengembangan</h2>
          </div>
        )}
      </div>
    </div>
  );
}
