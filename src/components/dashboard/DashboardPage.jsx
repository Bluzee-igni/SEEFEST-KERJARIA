import React, { useState, useRef, useEffect } from 'react';
import MissionDetailModal from "./MissionDetailModal";

const menuItems = [
  { label: "Beranda", icon: "home" },
  { label: "Misi", icon: "book" },
  { label: "Event", icon: "ticket" },
  { label: "Level", icon: "star" },
  { label: "Pekerjaan", icon: "briefcase" },
  { label: "Sosial", icon: "users" },
  { label: "Pesan", icon: "mail" },
];

const missions = [
  {
    title: "Tata letak pada wireframe",
    icon: "layout",
    color: "bg-[#d991ff]",
  },
  {
    title: "Instalasi dependency framework laravel",
    icon: "code",
    color: "bg-[#ffd58d]",
  },
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
    home: (
      <path {...common} d="M4 11.5 12 5l8 6.5V21h-5v-6H9v6H4z" />
    ),
    book: (
      <path {...common} d="M5 5.5c3.5 0 5.5.8 7 2.5 1.5-1.7 3.5-2.5 7-2.5V19c-3.5 0-5.5.8-7 2.5-1.5-1.7-3.5-2.5-7-2.5zM12 8v13.5" />
    ),
    ticket: (
      <path {...common} d="M4 8h16v4a2 2 0 0 0 0 4v4H4v-4a2 2 0 0 0 0-4zM10 10l4 8M14 10l-4 8" />
    ),
    star: (
      <path
        fill="currentColor"
        d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2L12 17.3l-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"
      />
    ),
    briefcase: (
      <path {...common} d="M9 7V5h6v2m-10 4h14M5 8h14v11H5z" />
    ),
    users: (
      <path {...common} d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm6.5-1a3.5 3.5 0 1 0 0-7M2 21c.8-4 3.4-6 7-6s6.2 2 7 6m1-5c2.7.4 4.4 2.1 5 5" />
    ),
    mail: (
      <path {...common} d="M4 6h16v12H4zM4 7l8 6 8-6" />
    ),
    bell: (
      <path
        fill="currentColor"
        d="M12 22a2.4 2.4 0 0 0 2.3-1.7H9.7A2.4 2.4 0 0 0 12 22Zm7-5-2-2.1V10a5 5 0 0 0-4-4.9V3h-2v2.1A5 5 0 0 0 7 10v4.9L5 17v1h14z"
      />
    ),
    layout: (
      <path {...common} d="M7 5v14M17 5v14M4 9h16M4 15h16" />
    ),
    code: (
      <path {...common} d="m9 8-4 4 4 4m6-8 4 4-4 4" />
    ),
    edit: (
      <path {...common} d="m15.5 4.5 4 4L9 19H5v-4z" />
    ),
    gear: (
      <path {...common} d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 4 2-1-2-4-2 1a8 8 0 0 0-2-1.2L15.5 4h-7L8 6.8A8 8 0 0 0 6 8L4 7l-2 4 2 1a8 8 0 0 0 0 2l-2 1 2 4 2-1a8 8 0 0 0 2 1.2l.5 2.8h7l.5-2.8a8 8 0 0 0 2-1.2l2 1 2-4-2-1a8 8 0 0 0 0-2Z" />
    ),
    userPlus: (
      <path {...common} d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm11 2h-6m3-3v6" />
    ),
    user: (
      <path {...common} d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
    ),
    lock: (
      <>
        <rect {...common} x="4" y="11" width="16" height="11" rx="2" ry="2" />
        <path {...common} d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),
    palette: (
      <>
        <path {...common} d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
        <circle cx="7.5" cy="10.5" r="1.5" fill="currentColor" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <circle cx="16.5" cy="10.5" r="1.5" fill="currentColor" />
        <path fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" d="M11 16h4" />
      </>
    ),
    robotHead: (
      <svg viewBox="0 0 100 100" fill="currentColor">
        <path d="M35 40 Q30 5 40 5 Q48 5 45 40 Z" />
        <path d="M65 40 Q70 5 60 5 Q52 5 55 40 Z" />
        <rect x="8" y="50" width="15" height="24" rx="6" />
        <rect x="77" y="50" width="15" height="24" rx="6" />
        <path fillRule="evenodd" clipRule="evenodd" d="M15 60 C15 25 85 25 85 60 C85 95 15 95 15 60 Z M32 65 C32 50 42 50 42 65 C42 80 32 80 32 65 Z M58 65 C58 50 68 50 68 65 C68 80 58 80 58 65 Z" />
      </svg>
    ),
    cross: (
      <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
    ),
    check: (
      <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    ),
    download: (
      <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    ),
    trash: (
      <path fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0 1 16.138 21H7.862a2 2 0 0 1-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3M4 7h16" />
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
        <img
          src="/kerjaria-logo-mark.svg"
          alt=""
          className="h-11 w-11 object-contain"
        />
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

function LevelHero() {
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
            17
          </strong>
        </div>

        <div className="min-w-0 flex-1">
          <h1 className="text-[46px] font-extrabold leading-none tracking-[-0.03em]">
            Level 17
          </h1>
          <div className="mt-3 h-[24px] w-[166px] rounded-full bg-[#ffb000] text-center text-[15px] font-extrabold leading-[24px] text-[#5c3600] shadow-[inset_0_0_0_2px_rgba(255,255,255,0.3)]">
            Junior Explorer
          </div>
          <div className="mt-3 h-[30px] overflow-hidden rounded-full bg-white/35">
            <div className="h-full w-1/2 rounded-full bg-white" />
          </div>
          <div className="mt-4 flex items-center justify-between text-[22px] font-semibold">
            <span>2.000 / 4.000 XP</span>
            <span>2.000 XP lagi untuk level 18</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionPanel() {
  return (
    <section className="rounded-[24px] border-[1.5px] border-[#cecece] bg-white p-6 shadow-sm dm-card">
      <div className="mb-6 flex items-center gap-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-[#075fd4] text-white shadow-sm">
          <Icon name="book" className="h-6 w-6" />
        </span>
        <h2 className="text-[26px] font-extrabold tracking-tight text-[#343434] dm-text">
          Misi Berlangsung
        </h2>
      </div>

      <div className="rounded-[20px] border-[1.5px] border-[#e0e0e0] flex flex-col overflow-hidden bg-white dm-card">
        {missions.map((mission, index) => (
          <div
            key={mission.title}
            className={`flex min-h-[76px] items-center gap-5 px-6 py-4 ${index > 0 ? "border-t-[1.5px] border-[#e0e0e0]" : ""
              }`}
          >
            <span
              className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl ${mission.color}`}
            >
              <Icon
                name={mission.icon}
                className="h-6 w-6 text-[#9b25e8]"
              />
            </span>
            <h3 className="flex-1 text-[17px] font-extrabold text-[#343434] dm-text">
              {mission.title}
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-[11px] font-bold text-gray-500 mb-1">+50XP</span>
              <button className="rounded-lg bg-[#075fd4] px-6 py-1.5 text-[14px] font-extrabold text-white shadow-sm hover:bg-[#064ca8] hover:scale-105 transition-all duration-200">
                Lanjut
              </button>
            </div>
          </div>
        ))}
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
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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

function EventBanner() {
  return (
    <section>
      <h2 className="mb-4 text-[34px] font-extrabold tracking-[-0.03em] text-[#343434] dm-text">
        Event Berlangsung
      </h2>
      <EventBannerKemerdekaan />
    </section>
  );
}

function ProfilePanel({ setActiveTab }) {
  return (
    <aside className="hidden w-[318px] shrink-0 rounded-[20px] bg-[#075fd4] text-white xl:flex flex-col shadow-lg overflow-visible relative">

      {/* Top Blue section with avatar */}
      <div
        className="bg-[#075fd4] rounded-t-[20px] px-6 pt-6 pb-24 relative flex flex-col items-center cursor-pointer hover:bg-[#0654c0] transition-colors group"
        onClick={() => setActiveTab("Pengaturan")}
      >
        <div className="w-full flex justify-between items-center text-[16px] font-extrabold text-white">
          <span className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-[8px] bg-white text-[#075fd4] flex items-center justify-center shadow-sm">17</span>
            2.000 XP
          </span>
          <span className="flex flex-col items-center gap-1 bg-white/20 px-2.5 py-1 rounded-md text-[13px] border border-white/30 relative">
            <div className="flex items-center gap-1">
              <span className="text-red-400">🔥</span> 30
            </div>
            <span className="text-[8px] absolute -bottom-3 text-white/80">+50XP</span>
          </span>
        </div>

        <div className="w-[140px] h-[140px] rounded-full border-[6px] border-[#ffd245] bg-gradient-to-br from-[#fff0a9] to-[#ff8f8f] mt-8 shadow-md relative z-20 overflow-hidden group-hover:scale-105 transition-transform">
          <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
        </div>
        <div className="w-7 h-7 bg-white text-[#075fd4] rounded-md absolute bottom-[100px] right-[70px] z-30 flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-100">
          <Icon name="edit" className="w-4 h-4" />
        </div>

        <h2 className="text-[22px] font-extrabold mt-6 text-center leading-tight">Raffi Setiawan Putra</h2>

        <div className="mt-2.5 bg-[#d97706] px-5 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative z-20 flex items-center">
          <div className="w-3 h-3 rounded-full bg-[#fcd34d] mr-2"></div>
          Junior Explorer
        </div>
      </div>

      {/* Stats Ticket Layer */}
      <div className="absolute top-[350px] left-4 right-4 flex justify-between z-30 pointer-events-none">
        {/* 3 Ticket shapes */}
        {[
          ["book", "12", "Misi\nTersedia", "#075fd4"],
          ["check", "9", "Misi\nSelesai", "#00c943"],
          ["star", "3", "Skill\nDipelajari", "#d50bb9"],
        ].map(([icon, count, label, color]) => (
          <div key={label} className="w-[85px] bg-white rounded-t-[12px] rounded-b-[4px] shadow-md flex flex-col items-center pt-3 pb-5 relative pointer-events-auto dm-card">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white shadow-inner mb-1" style={{ backgroundColor: color }}>
              <Icon name={icon} className="w-5 h-5" />
            </div>
            <strong className="text-black text-[22px] font-extrabold mt-1 leading-none">{count}</strong>
            <span className="text-gray-500 text-[10px] font-bold text-center leading-tight mt-1">{label}</span>
            {/* Ticket triangle bottom */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rotate-45 shadow-[3px_3px_5px_rgba(0,0,0,0.05)] -z-10 rounded-sm"></div>
          </div>
        ))}
      </div>

      {/* White container bottom */}
      <div className="bg-white rounded-[20px] px-5 pt-[90px] pb-6 flex-1 flex flex-col gap-5 shadow-[-2px_-5px_15px_rgba(0,0,0,0.05)] relative z-10 -mt-10 dm-card">
        {/* Misi Harian */}
        <div className="border-[1.5px] border-[#e0e0e0] rounded-[16px] p-4 bg-[#f8fbff] shadow-sm flex flex-col dm-card">
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
                <span className="text-[12px]">1/1</span>
              </div>
              <div className="w-full h-1.5 bg-[#dbeafe] rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-[#075fd4] rounded-full w-full"></div>
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
              <Icon name="layout" className="w-5 h-5" />
            </div>
            <div className="flex-1 flex flex-col justify-center mt-1">
              <div className="flex justify-between text-[12px] font-extrabold text-black mb-1.5">
                <span>UI/UX</span>
                <span className="text-gray-500">25%</span>
              </div>
              <div className="w-full h-1.5 bg-[#f3e8ff] rounded-full overflow-hidden">
                <div className="h-full bg-[#a855f7] rounded-full w-1/4"></div>
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
                <span className="text-gray-500">95%</span>
              </div>
              <div className="w-full h-1.5 bg-[#ffedd5] rounded-full overflow-hidden">
                <div className="h-full bg-[#f97316] rounded-full w-[95%]"></div>
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

function UserCard({ name, role, level, image }) {
  return (
    <div className="flex items-center justify-between rounded-[40px] bg-[#075fd4] px-8 py-3 mb-2 text-white shadow-md">
      <div className="flex items-center gap-6">
        <div className="h-[70px] w-[70px] overflow-hidden rounded-full border-[3px] border-white bg-white">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[22px] font-extrabold leading-none">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="flex items-center rounded-full bg-[#ffb000] px-3 py-1 text-[12px] font-extrabold text-[#5c3600]">
              <div className="mr-1.5 h-2.5 w-2.5 rounded-full bg-[#cc5500] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
              {role}
            </span>
          </div>
          <div className="text-[14px] font-bold text-white leading-none mt-1">
            Level {level}
          </div>
        </div>
      </div>
      <div>
        <Icon name="robotHead" className="h-16 w-16 text-white" />
      </div>
    </div>
  );
}

function FriendRequestCard({ name, role, level, image }) {
  return (
    <div className="flex items-center justify-between rounded-[40px] bg-[#075fd4] px-8 py-3 mb-2 text-white shadow-md">
      <div className="flex items-center gap-6">
        <div className="h-[70px] w-[70px] overflow-hidden rounded-full border-[3px] border-white bg-white">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-[22px] font-extrabold leading-none">{name}</h3>
          <div className="flex items-center gap-2">
            <span className="flex items-center rounded-full bg-[#ffb000] px-3 py-1 text-[12px] font-extrabold text-[#5c3600]">
              <div className="mr-1.5 h-2.5 w-2.5 rounded-full bg-[#cc5500] shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>
              {role}
            </span>
          </div>
          <div className="text-[14px] font-bold text-white leading-none mt-1">
            Level {level}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-md text-red-500 hover:bg-red-50 hover:scale-110 transition-all duration-200">
            <Icon name="cross" className="h-5 w-5" />
          </button>
          <button className="grid h-10 w-10 place-items-center rounded-full bg-white shadow-md text-green-500 hover:bg-green-50 hover:scale-110 transition-all duration-200">
            <Icon name="check" className="h-5 w-5" />
          </button>
        </div>
        <Icon name="robotHead" className="h-16 w-16 text-white ml-2" />
      </div>
    </div>
  );
}

function SosialPanel() {
  const [activeSosialTab, setActiveSosialTab] = useState("users");
  const users = [
    {
      name: "Raffi Setiawan Putra",
      role: "Junior Explorer",
      level: 17,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raffi&backgroundColor=b6e3f4",
    },
    {
      name: "Evan Satria Mahardika",
      role: "Junior Explorer",
      level: 17,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Evan&backgroundColor=ffdfbf",
    },
    {
      name: "Atha Fakhri Arkana",
      role: "Junior Explorer",
      level: 18,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Atha&backgroundColor=e2e8f0",
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-6 flex items-center border-b-[3px] border-[#e0e0e0] pb-0 dm-card" style={{ background: 'transparent', border: 'none', borderBottom: '3px solid #e0e0e0' }}>
        <h1 className="text-[34px] font-extrabold text-[#075fd4] flex-1 pb-4 pl-4">
          Sosial
        </h1>
        <div className="flex items-end gap-16 pr-40">
          <div
            className="relative pb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setActiveSosialTab("users")}
          >
            <Icon name="users" className={`h-8 w-8 ${activeSosialTab === "users" ? "text-[#075fd4]" : "text-[#a0a0a0]"}`} />
            {activeSosialTab === "users" && (
              <div className="absolute bottom-[-1.5px] left-1/2 h-1 w-14 -translate-x-1/2 rounded-t-lg bg-[#075fd4]" />
            )}
          </div>
          <div
            className="relative pb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setActiveSosialTab("userPlus")}
          >
            <Icon name="userPlus" className={`h-8 w-8 ${activeSosialTab === "userPlus" ? "text-[#075fd4]" : "text-[#a0a0a0]"}`} />
            {activeSosialTab === "userPlus" && (
              <div className="absolute bottom-[-1.5px] left-1/2 h-1 w-14 -translate-x-1/2 rounded-t-lg bg-[#075fd4]" />
            )}
          </div>
        </div>
      </div>

      {activeSosialTab === "users" && (
        <div className="mt-8 flex flex-col gap-4 pl-4 pr-10">
          {users.map((u, i) => (
            <UserCard key={i} {...u} />
          ))}
        </div>
      )}

      {activeSosialTab === "userPlus" && (
        <div className="mt-8 flex flex-col pl-4 pr-10">
          <input
            type="text"
            placeholder="Cari nama pengguna..."
            className="w-full rounded-full border-[1.5px] border-[#075fd4] px-6 py-4 text-[16px] font-bold text-[#343434] outline-none placeholder:text-[#075fd4] placeholder:font-bold"
          />
          <div className="my-8 w-full h-[1px] bg-[#d0d0d0]" />

          <h2 className="mb-4 text-[18px] font-extrabold text-[#4a4a4a]">
            Friend request
          </h2>

          <div className="flex flex-col gap-4">
            {users.slice(2).map((u, i) => (
              <FriendRequestCard key={i} {...u} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

function PesanPanel() {
  const [activeMessageId, setActiveMessageId] = useState(1);

  const messages = [
    {
      id: 1,
      title: "Selamat Datang di KerjaRia",
      sender: "",
      date: "18-05-2026 23:59",
      content: "Halo Natchcaw, terimakasih sudah mendaftar di KerjaRia. Hanya ini yang bisa kami berikan",
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
                      : "bg-white text-[#343434] border-[2px] border-[#e0e0e0] shadow-[0_5px_0_#d0d0d0] dm-card"
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
              <h2 className="text-[28px] font-extrabold text-[#343434] mb-4 dm-text">
                {activeMessage.title}
              </h2>
              <div className="w-full h-[1.5px] bg-[#d0d0d0] mb-4" />

              <div className="text-[18px] font-bold text-[#4a4a4a] mb-4 leading-relaxed dm-sub">
                <div>Sender: </div>
                <div>Time/Date: {activeMessage.date}</div>
              </div>

              <div className="w-full h-[1.5px] bg-[#d0d0d0] mb-4" />

              <div className="text-[18px] font-bold text-[#343434] flex-1 dm-text">
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

function EventPanel() {
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
    <div className={`bg-white rounded-[12px] p-2 shadow-xl border border-gray-100 flex flex-col items-center justify-center gap-1.5 dm-card ${className}`}>
      <span className={`${textColor} font-extrabold text-[12px] leading-none text-center px-1`}>{name}</span>

      {/* The Avatar Frame Container */}
      <div className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-md">
        {/* Gradient Border Background (Spinning) */}
        <div className="absolute inset-0 rounded-full overflow-hidden">
          <div className={`absolute -inset-[50%] bg-gradient-to-br ${gradientClass} animate-spin`} style={{ animationDuration: type === 'diamond' ? '2.5s' : '4s' }} />
        </div>

        {/* The inner hole for the avatar */}
        <div className="relative w-[52px] h-[52px] rounded-full bg-[#f8f9fa] z-10 flex items-center justify-center overflow-hidden border-[2px] border-white">
          <img src="/asah-skill-robot.svg" className="w-[85%] h-[85%] object-contain translate-y-0.5" alt="Avatar" />
        </div>

        {/* Accents */}
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

function LevelPanel() {
  return (
    <section className="w-full h-full flex flex-col relative overflow-y-auto overflow-x-hidden pt-4 pb-20">

      {/* Top Card */}
      <div className="w-full max-w-[800px] bg-[#075fd4] rounded-[24px] px-12 py-10 flex items-center shadow-lg mx-auto z-10 relative mt-4">
        <RabbitHexagon level="17" isWhite={true} className="w-[120px] h-[155px] flex-shrink-0" textClassName="text-[52px]" />
        <div className="flex-1 ml-12 flex flex-col justify-center">
          <div className="h-8 w-full rounded-full bg-[#064ca8] overflow-hidden shadow-inner">
            <div className="h-full bg-white w-[50%] rounded-full shadow-sm" />
          </div>
          <div className="flex justify-between mt-3 text-white text-[14px] font-bold px-2 tracking-wide">
            <span>2.000 / 4.000 XP</span>
            <span>2.000 XP lagi untuk level 18</span>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative w-full max-w-[800px] mx-auto mt-4">
        {/* The Line */}
        <div className="absolute left-1/2 top-0 bottom-[-50px] w-[6px] bg-[#b5d0f5] -translate-x-1/2 z-0" />

        {/* Milestone 20 */}
        <div className="relative z-10 flex items-center w-full mt-16">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="20" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center">
              <AvatarBorderReward type="silver" name="Border Perak" className="absolute -top-10 -right-4 rotate-[15deg] w-[110px] h-[125px] z-10 hover:scale-105 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Milestone 25 */}
        <div className="relative z-10 flex items-center w-full mt-24">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="25" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center">
              <AvatarBorderReward type="gold" name="Border Emas" className="absolute -top-8 right-16 -rotate-6 w-[100px] h-[115px] z-10 hover:scale-105 transition-transform cursor-pointer" />
              <AvatarBorderReward type="diamond" name="Border Berlian" className="absolute -top-12 -right-4 rotate-12 w-[100px] h-[115px] z-20 hover:scale-105 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Milestone 30 */}
        <div className="relative z-10 flex items-center w-full mt-24">
          <div className="w-1/2 flex justify-end pr-10">
            <RabbitHexagon level="30" isWhite={false} className="w-[100px] h-[130px]" textClassName="text-[42px]" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 w-[22px] h-[22px] rounded-full bg-[#075fd4] z-20" />
          <div className="w-1/2 flex justify-start pl-10">
            <div className="bg-[#075fd4] w-[260px] h-[90px] rounded-[16px] shadow-lg relative flex items-center">
              {/* Suitcase */}
              <div className="absolute -top-12 -right-2 w-[140px] h-[110px] rotate-[10deg] z-10 drop-shadow-2xl hover:scale-105 transition-transform cursor-pointer">
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

const MISI_DATA = [
  { id: 1, title: "Frontend Developer", subtitle: "Selesaikan modul HTML & CSS Dasar", progress: 45, totalSteps: 5, completedSteps: 2, icon: "layout", color: "bg-[#eef2ff] text-[#4f46e5]" },
  { id: 2, title: "UI/UX Designer", subtitle: "Buat wireframe aplikasi Kasir", progress: 80, totalSteps: 5, completedSteps: 4, icon: "edit", color: "bg-[#fff1f2] text-[#e11d48]" },
  { id: 3, title: "Backend Developer", subtitle: "Pelajari routing di Express.js", progress: 20, totalSteps: 5, completedSteps: 1, icon: "code", color: "bg-[#f0fdf4] text-[#16a34a]" },
  { id: 4, title: "Data Analyst", subtitle: "Kumpulkan dataset dari Kaggle", progress: 0, totalSteps: 5, completedSteps: 0, icon: "book", color: "bg-[#fffbeb] text-[#d97706]" },
  { id: 5, title: "Mobile Developer", subtitle: "Install Flutter SDK & Android Studio", progress: 100, totalSteps: 2, completedSteps: 2, icon: "download", color: "bg-[#f3e8ff] text-[#9333ea]" },
  { id: 6, title: "Cyber Security", subtitle: "Konfigurasi Firewall Dasar", progress: 0, totalSteps: 4, completedSteps: 0, icon: "gear", color: "bg-[#fce7f3] text-[#db2777]" },
  { id: 7, title: "Cloud Engineer", subtitle: "Setup VPS dan Nginx", progress: 0, totalSteps: 6, completedSteps: 0, icon: "layout", color: "bg-[#e0f2fe] text-[#0284c7]" },
  { id: 8, title: "Game Developer", subtitle: "Buat karakter bergerak di Unity", progress: 30, totalSteps: 5, completedSteps: 1, icon: "edit", color: "bg-[#fef3c7] text-[#b45309]" },
  { id: 9, title: "DevOps Engineer", subtitle: "Pelajari perintah dasar Docker", progress: 0, totalSteps: 3, completedSteps: 0, icon: "code", color: "bg-[#e2e8f0] text-[#475569]" },
  { id: 10, title: "Product Manager", subtitle: "Tulis PRD untuk fitur baru", progress: 60, totalSteps: 5, completedSteps: 3, icon: "book", color: "bg-[#dcfce7] text-[#15803d]" },
];

function MisiCard({ title, subtitle, progress, totalSteps, completedSteps, icon, color, onClick }) {
  const [bgClass, textClass] = color.split(" ");
  return (
    <div onClick={onClick} className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-6 dm-card">
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

function MisiPanel() {
  const [activeFilter, setActiveFilter] = useState("Semua Misi");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMission, setSelectedMission] = useState(null);

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
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Semua Misi' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dm-card'}`}
          >
            Semua Misi
          </button>
          <button
            onClick={() => setActiveFilter("Sedang Berjalan")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Sedang Berjalan' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dm-card'}`}
          >
            Sedang Berjalan
          </button>
          <button
            onClick={() => setActiveFilter("Selesai")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Selesai' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dm-card'}`}
          >
            Selesai
          </button>
        </div>

        <div className="ml-auto flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#075fd4] transition-colors w-full sm:w-auto dm-card">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input
            type="text"
            placeholder="Cari misi..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none ml-2 text-[14px] font-semibold text-gray-700 w-full sm:w-[150px]"
          />
        </div>
      </div>

      {filteredMissions.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2">
          {filteredMissions.map((misi) => (
            <MisiCard key={misi.id} {...misi} onClick={() => setSelectedMission(misi)} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <p className="text-[16px] font-bold">Misi tidak ditemukan.</p>
        </div>
      )}
      {selectedMission && (
        <MissionDetailModal mission={selectedMission} onClose={() => setSelectedMission(null)} />
      )}
    </section>
  );
}

const PEKERJAAN_DATA = [
  { id: 1, title: "Buat Landing Page UMKM", fee: "Rp 150.000", company: "PT Bensin Habis Dorong", icon: "layout", color: "bg-blue-100 text-blue-600" },
  { id: 2, title: "Edit Video Reels 30 Detik", fee: "Rp 50.000", company: "PT Rebahan Sukses Makmur", icon: "edit", color: "bg-pink-100 text-pink-600" },
  { id: 3, title: "Desain Logo Kedai Kopi", fee: "Rp 100.000", company: "PT Senyum Terpaksa Tbk", icon: "edit", color: "bg-orange-100 text-orange-600" },
  { id: 4, title: "Bikin Script Presentasi", fee: "Rp 75.000", company: "PT Maju Kena Mundur Kena", icon: "book", color: "bg-green-100 text-green-600" },
  { id: 5, title: "Input Data Laporan Bulanan", fee: "Rp 40.000", company: "PT Berkah Abadi", icon: "layout", color: "bg-purple-100 text-purple-600" },
  { id: 6, title: "Voice Over Video Animasi", fee: "Rp 85.000", company: "PT Kucing Oren", icon: "check", color: "bg-red-100 text-red-600" },
  { id: 7, title: "Bantu Setup Server Discord", fee: "Rp 50.000", company: "PT Begadang Demi UKL", icon: "gear", color: "bg-gray-200 text-gray-700" },
  { id: 8, title: "Optimasi SEO Blog Desa", fee: "Rp 120.000", company: "PT Budi Selamat Suyojono", icon: "code", color: "bg-teal-100 text-teal-600" },
];

function PekerjaanCard({ title, fee, company, icon, color }) {
  const [bgClass, textClass] = color.split(" ");
  return (
    <div className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-6 group cursor-pointer dm-card">

      <div className="flex gap-5 items-center flex-1">
        {/* Icon */}
        <div className={`w-[70px] h-[70px] rounded-[16px] ${bgClass} ${textClass} flex items-center justify-center flex-shrink-0 shadow-sm border border-white`}>
          <Icon name={icon} className="w-8 h-8" />
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] font-extrabold text-gray-800 leading-tight group-hover:text-[#075fd4] transition-colors">{title}</h3>

          <div className="flex items-center gap-2 mt-1.5">
            <span className="bg-blue-50 text-[#075fd4] px-2 py-0.5 rounded-md text-[12px] font-bold border border-blue-100">
              {fee}
            </span>
            <span className="bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded-md text-[12px] font-bold border border-yellow-100 flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              +50 XP
            </span>
          </div>

          <p className="text-[13px] font-bold text-gray-500 mt-2 flex items-center gap-1.5">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
            {company}
          </p>
        </div>
      </div>

      <button className="w-full sm:w-auto px-8 py-2.5 bg-[#f0f4f8] text-[#075fd4] font-extrabold text-[14px] rounded-full group-hover:bg-[#075fd4] group-hover:text-white transition-all shadow-sm active:scale-95 border border-[#d6e4ff] group-hover:border-[#075fd4]">
        AMBIL
      </button>
    </div>
  );
}

function PekerjaanPanel() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = PEKERJAAN_DATA.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] mr-4">Micro work</h1>

        {/* Progress Limit Indicator */}
        <div className="hidden sm:flex flex-col gap-1 w-[200px] mr-auto">
          <div className="flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
            <span>Batas Kerja Harian</span>
            <span className="text-[#075fd4]">2/10</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dm-progress">
            <div className="h-full bg-[#075fd4] rounded-full" style={{ width: '20%' }} />
          </div>
        </div>

        {/* Search Bar */}
        <div className="ml-auto flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#075fd4] transition-colors w-full sm:w-[250px] dm-card">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          <input
            type="text"
            placeholder="Cari pekerjaan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none ml-2 text-[14px] font-semibold text-gray-700 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2">
        {filteredData.length > 0 ? (
          filteredData.map((job) => (
            <PekerjaanCard key={job.id} {...job} />
          ))
        ) : (
          <div className="py-10 text-center text-gray-500 font-bold flex flex-col items-center">
            <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Tidak ada pekerjaan yang ditemukan.
          </div>
        )}
      </div>
    </section>
  );
}

function ProfilSidebar({ setActiveTab, activePengaturanMenu, setActivePengaturanMenu, activePengaturanTab, setActivePengaturanTab }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[305px] shrink-0 self-start border-r-[3px] border-[#d0d0d0] bg-white px-7 py-12 lg:flex lg:flex-col">
      <a href="#" className="flex items-center gap-2" aria-label="KerjaRia" onClick={() => setActiveTab("Beranda")}>
        <img
          src="/kerjaria-logo-mark.svg"
          alt=""
          className="h-11 w-11 object-contain"
        />
        <span className="text-[40px] font-extrabold leading-none tracking-[-0.04em] text-[#075fd4]">
          KerjaRia
        </span>
      </a>

      <nav className="mt-16 flex flex-col gap-3">
        {/* Profil Menu Button */}
        <button
          type="button"
          onClick={() => setActivePengaturanMenu('profil')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'profil'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="user" className={`h-7 w-7 ${activePengaturanMenu === 'profil' ? 'text-white' : 'text-[#343434]'}`} />
          Profil
        </button>

        {/* Profil Sub Menu */}
        <div
          className={`flex flex-col ml-12 border-l-[3px] border-[#d0d0d0] pl-5 relative overflow-hidden transition-all duration-300 ease-in-out ${activePengaturanMenu === 'profil' ? 'max-h-[120px] opacity-100 py-2 mt-1 mb-2 gap-5' : 'max-h-0 opacity-0 py-0 mt-0 gap-0'
            }`}
        >
          <div
            className="absolute -left-[3px] w-[6px] h-6 rounded-r-lg bg-[#075fd4] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ top: activePengaturanTab === 'personalInfo' ? '10px' : '58px' }}
          />
          <button
            onClick={() => setActivePengaturanTab('personalInfo')}
            className={`text-[18px] font-extrabold text-left transition-colors duration-200 ${activePengaturanTab === 'personalInfo' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Personal info
          </button>
          <button
            onClick={() => setActivePengaturanTab('profileDisplay')}
            className={`text-[18px] font-extrabold text-left transition-colors duration-200 ${activePengaturanTab === 'profileDisplay' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Profile Display
          </button>
        </div>

        {/* Tampilan Menu Button */}
        <button
          onClick={() => setActivePengaturanMenu('tampilan')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'tampilan'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="palette" className={`h-7 w-7 ${activePengaturanMenu === 'tampilan' ? 'text-white' : 'text-[#343434]'}`} />
          Tampilan
        </button>

        {/* Privasi Menu Button */}
        <button
          onClick={() => setActivePengaturanMenu('privasi')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'privasi'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="lock" className={`h-7 w-7 ${activePengaturanMenu === 'privasi' ? 'text-white' : 'text-[#343434]'}`} />
          Privasi & Data
        </button>

        {/* Saldo Menu Button */}
        <button
          className="flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02] transition-all duration-200"
        >
          Saldo
        </button>
      </nav>

      <button
        type="button"
        onClick={() => setActiveTab("Beranda")}
        className="mt-auto flex h-[48px] items-center gap-5 text-[22px] font-extrabold text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02] transition-all duration-200 rounded-[10px] p-2"
      >
        Logout
      </button>
    </aside>
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
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = themeOptions.find(o => o.value === theme) || themeOptions[0];

  return (
    <div className="px-2">
      <h2 className="text-[32px] font-extrabold dark:text-white text-[#343434] mb-10">Tema</h2>

      <div className="flex justify-between items-center">
        <span className="text-[18px] font-bold text-gray-400 dark:text-gray-400">Mode tampilan</span>

        <div className="relative" ref={dropdownRef}>
          {/* Dropdown Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border-[2px] font-bold text-[15px] min-w-[200px] justify-between transition-all duration-200 shadow-sm ${open
                ? 'border-[#075fd4] shadow-[0_0_0_3px_rgba(7,95,212,0.15)]'
                : 'border-gray-200 dark:border-gray-600 hover:border-[#075fd4]'
              } bg-white dark:bg-[#1e293b] dark:text-gray-200 text-[#343434]`}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-[18px]">{selected.icon}</span>
              <span>{selected.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div className={`absolute right-0 top-[calc(100%+8px)] min-w-[200px] bg-white dark:bg-[#1e293b] rounded-xl border-[2px] border-gray-100 dark:border-gray-600 shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden z-50 transition-all duration-200 origin-top ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
            {themeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setTheme(opt.value); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-[15px] font-bold transition-all duration-150 ${theme === opt.value
                    ? 'bg-[#075fd4] text-white'
                    : 'text-[#343434] dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-[#334155]'
                  }`}
              >
                <span className="text-[18px]">{opt.icon}</span>
                <span>{opt.label}</span>
                {theme === opt.value && (
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

function ProfilPanel({ setActiveTab, activePengaturanMenu, activePengaturanTab, theme, setTheme }) {
  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-4 mb-8 px-2">
        <button
          onClick={() => setActiveTab("Beranda")}
          className="w-10 h-10 rounded-xl bg-blue-100 text-[#075fd4] flex items-center justify-center hover:bg-[#075fd4] hover:text-white transition-all shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-[34px] font-extrabold text-[#075fd4] tracking-tight">
          {activePengaturanMenu === 'profil' ? 'Profil' : activePengaturanMenu === 'tampilan' ? 'Tampilan' : 'Privasi & Data'}
        </h1>
      </div>

      {activePengaturanMenu === 'tampilan' ? (
        <TampilanContent theme={theme} setTheme={setTheme} />
      ) : activePengaturanMenu === 'profil' ? (
        activePengaturanTab === 'personalInfo' ? (
          <div className="flex flex-col xl:flex-row gap-8 items-start px-2">
            {/* Left Card: Profile Display */}
            <div className="w-full xl:w-[320px] bg-[#075fd4] rounded-[24px] overflow-hidden flex flex-col relative shadow-lg shrink-0">
              <div className="bg-white px-4 pb-[72px] pt-4 rounded-b-[24px] relative z-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center text-[16px] font-extrabold text-[#075fd4]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#075fd4] text-white flex items-center justify-center shadow-inner text-[14px]">17</div>
                    <span>2.000 XP</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[160px] h-[160px] rounded-full border-[8px] border-[#ffd245] bg-gradient-to-br from-[#fff0a9] to-[#ffb1b1] overflow-hidden shadow-lg z-20">
                  <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
                </div>
              </div>

              <div className="pt-28 pb-8 px-6 flex flex-col items-center relative z-0">
                <div className="flex gap-2 w-full mt-2">
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border-[1.5px] border-white/40 text-white py-[7px] rounded-[10px] text-[13px] font-extrabold transition-colors">Ubah Avatar</button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border-[1.5px] border-white/40 text-white py-[7px] rounded-[10px] text-[13px] font-extrabold transition-colors">Ubah Bingkai</button>
                </div>

                <h2 className="text-[25px] font-extrabold text-white text-center leading-tight mt-7">Raffi Setiawan Putra</h2>

                <div className="mt-3 flex items-center gap-2 bg-[#e08900] px-4 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative">
                  <div className="w-3 h-3 rounded-full bg-[#fcd34d] absolute left-3"></div>
                  <span className="ml-4">Junior Explorer</span>
                  <Icon name="edit" className="w-4 h-4 ml-1 opacity-80 cursor-pointer hover:opacity-100" />
                </div>

                <Icon name="robotHead" className="w-28 h-28 text-white mt-12 mb-4" />
              </div>
            </div>

            {/* Right Card: Form */}
            <div className="flex-1 w-full bg-white border-[1.5px] border-[#d0d0d0] rounded-[24px] p-8 shadow-sm">
              <h2 className="text-[22px] font-extrabold text-[#4a4a4a] mb-6">Personal Information</h2>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Nama Pengguna</label>
                  <input type="text" value="Nathcaw" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Nama Lengkap</label>
                  <input type="text" value="Raffi Setiawan Putra" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Jenis Kelamin</label>
                  <div className="flex gap-8 items-center mt-1">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="w-5 h-5 rounded-full border-2 border-[#075fd4] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#075fd4]"></div>
                      </div>
                      <span className="text-[15px] font-bold text-gray-800">Laki-laki</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      </div>
                      <span className="text-[15px] font-bold text-gray-800">Perempuan</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-2">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[16px] font-bold text-[#4a4a4a]">Tanggal Lahir</label>
                    <input type="text" value="9 Oktober 2008" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[16px] font-bold text-[#4a4a4a]">No HP</label>
                    <input type="text" value="+62 812-3022-0688" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Domisili</label>
                  <input type="text" value="Sidoarjo, Jawa Timur" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#075fd4] rounded-[24px] p-3 flex flex-col xl:flex-row gap-3 min-h-[600px] mx-2 shadow-lg">
            {/* Left Blue Container */}
            <div className="w-full xl:w-[280px] flex flex-col items-center pt-8 pb-6 relative shrink-0 rounded-l-[20px]">
              <div className="w-full flex justify-between items-center text-[16px] font-extrabold text-white px-6">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[8px] bg-white text-[#075fd4] flex items-center justify-center shadow-sm text-[14px]">17</div>
                  <span>2.000 XP</span>
                </span>
              </div>

              <div className="w-[140px] h-[140px] rounded-full border-[6px] border-[#ffd245] bg-gradient-to-br from-[#fff0a9] to-[#ff8f8f] mt-8 shadow-md relative overflow-hidden">
                <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
              </div>

              <div className="flex gap-2 w-full px-6 mt-6">
                <button className="flex-1 bg-white/20 hover:bg-white/30 border border-white/40 text-white py-1.5 rounded-[8px] text-[12px] font-bold transition-colors">Ubah Avatar</button>
                <button className="flex-1 bg-white/20 hover:bg-white/30 border border-white/40 text-white py-1.5 rounded-[8px] text-[12px] font-bold transition-colors">Ubah Bingkai</button>
              </div>

              <h2 className="text-[22px] font-extrabold text-white text-center leading-tight mt-6">Raffi Setiawan Putra</h2>

              <div className="mt-3 flex items-center gap-2 bg-[#d97706] px-4 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative">
                <div className="w-3 h-3 rounded-full bg-[#fcd34d] absolute left-3"></div>
                <span className="ml-4">Junior Explorer</span>
                <Icon name="edit" className="w-4 h-4 ml-1 opacity-80 cursor-pointer hover:opacity-100" />
              </div>

              <div className="flex gap-6 mt-8 w-full justify-center px-4 relative z-10">
                <div className="w-[80px] bg-white rounded-t-[12px] rounded-b-[4px] shadow-md flex flex-col items-center pt-3 pb-5 relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-inner mb-1 bg-[#00c943]">
                    <Icon name="check" className="w-5 h-5" />
                  </div>
                  <strong className="text-black text-[22px] font-extrabold mt-1 leading-none">9</strong>
                  <span className="text-gray-500 text-[10px] font-bold text-center leading-tight mt-1">Job<br />Selesai</span>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 -z-10 rounded-sm shadow-[3px_3px_5px_rgba(0,0,0,0.05)]"></div>
                </div>

                <div className="w-[80px] bg-white rounded-t-[12px] rounded-b-[4px] shadow-md flex flex-col items-center pt-3 pb-5 relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-inner mb-1 bg-[#d50bb9]">
                    <Icon name="star" className="w-5 h-5" />
                  </div>
                  <strong className="text-black text-[22px] font-extrabold mt-1 leading-none">3</strong>
                  <span className="text-gray-500 text-[10px] font-bold text-center leading-tight mt-1">Skill<br />Dipelajari</span>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 -z-10 rounded-sm shadow-[3px_3px_5px_rgba(0,0,0,0.05)]"></div>
                </div>
              </div>

              <Icon name="robotHead" className="w-24 h-24 text-white mt-auto pt-6 opacity-90" />
            </div>

            {/* Right White Container */}
            <div className="flex-1 bg-white rounded-[20px] p-8 flex flex-col shadow-sm">
              <h2 className="text-[22px] font-extrabold text-[#4a4a4a] mb-6">Profile Display</h2>

              <h3 className="text-[17px] font-bold text-[#4a4a4a] mb-3">Skill yang dipelajari</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="bg-white border-[1.5px] border-gray-200 rounded-[8px] p-2 flex items-center gap-3 relative shadow-sm hover:border-[#075fd4] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-md bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <Icon name="code" className="w-5 h-5" />
                    </div>
                    <div className="text-[12px] font-extrabold text-black leading-tight">
                      Frontend<br />Developer
                    </div>
                    <div className="absolute top-1.5 right-1.5 text-[#5e239d]">
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L5 9L9 13V2C9 1.44772 8.55228 1 8 1H2C1.44772 1 1 1.44772 1 2V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-2">
                <button className="text-[13px] text-gray-500 hover:text-black font-bold">Show all</button>
              </div>

              <h3 className="text-[17px] font-bold text-[#4a4a4a] mb-3 mt-6">Hasil pekerjaan sebelumnya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white border-[1.5px] border-gray-200 rounded-[8px] p-4 relative shadow-sm hover:border-[#075fd4] transition-colors cursor-pointer">
                    <h4 className="text-[16px] font-extrabold text-black">Frontend Developer</h4>
                    <p className="text-[13px] text-gray-500 font-bold mb-3 mt-0.5">Landing page web umkm</p>
                    <div className="flex items-center gap-1.5 text-[13px] font-extrabold text-gray-700">
                      <span className="text-yellow-400 text-[14px]">⭐</span> 4/5
                    </div>
                    <div className="absolute top-4 right-4 text-[#5e239d]">
                      <svg width="12" height="16" viewBox="0 0 10 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L5 9L9 13V2C9 1.44772 8.55228 1 8 1H2C1.44772 1 1 1.44772 1 2V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-3">
                <button className="text-[13px] text-gray-500 hover:text-black font-bold">Show all</button>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <h2 className="text-[24px] font-bold text-gray-400">Pengaturan Privasi & Data</h2>
        </div>
      )}
    </section>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "Beranda";
  });

  const [activePengaturanMenu, setActivePengaturanMenu] = useState(() => {
    return localStorage.getItem("activePengaturanMenu") || "profil";
  });

  const [activePengaturanTab, setActivePengaturanTab] = useState(() => {
    return localStorage.getItem("activePengaturanTab") || "personalInfo";
  });

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("kerjaria-theme") || "light";
  });

  // Resolve effective theme (light/dark) based on setting
  const resolvedTheme = React.useMemo(() => {
    if (theme === 'system') {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return theme;
  }, [theme]);

  // Listen for system theme changes when set to "system"
  React.useEffect(() => {
    if (theme !== 'system') return;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => setTheme('system'); // re-trigger re-render
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [theme]);

  // Persist state
  React.useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  React.useEffect(() => {
    localStorage.setItem("activePengaturanMenu", activePengaturanMenu);
  }, [activePengaturanMenu]);

  React.useEffect(() => {
    localStorage.setItem("activePengaturanTab", activePengaturanTab);
  }, [activePengaturanTab]);

  React.useEffect(() => {
    localStorage.setItem("kerjaria-theme", theme);
  }, [theme]);

  const isDark = resolvedTheme === 'dark';

  return (
    <main className={`min-h-screen font-['Plus_Jakarta_Sans',sans-serif] transition-colors duration-300 ${isDark ? 'dark bg-[#0f172a] text-gray-100' : 'bg-white text-[#20242a]'}`}>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
          html, body, #root { margin: 0; min-height: 100%; background: ${isDark ? '#0f172a' : '#ffffff'}; transition: background 0.3s; }
          body { overflow-x: hidden; }

          /* === DARK MODE === */
          .dark aside { background: #1e293b !important; border-color: #334155 !important; }
          .dark aside button { color: #e2e8f0; }
          .dark aside button:hover { background: #334155 !important; }
          .dark aside a span { color: #60a5fa !important; }

          /* White bg elements → dark slate */
          .dark .dm-card { background: #1e293b !important; border-color: #334155 !important; color: #e2e8f0 !important; }
          .dark .dm-bg { background: #1e293b !important; }

          /* Text */
          .dark h1, .dark h2, .dark h3, .dark h4, .dark strong { color: #f1f5f9 !important; }
          .dark span, .dark p { color: inherit; }
          .dark .dm-text { color: #e2e8f0 !important; }
          .dark .dm-sub { color: #94a3b8 !important; }

          /* Input & form */
          .dark input { background: #0f172a !important; color: #e2e8f0 !important; border-color: #3b82f6 !important; }
          .dark label { color: #94a3b8 !important; }

          /* Progress bars */
          .dark .dm-progress { background: #334155 !important; }

          /* Scrollbar */
          .dark ::-webkit-scrollbar { width: 8px; }
          .dark ::-webkit-scrollbar-track { background: #0f172a; }
          .dark ::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
          .dark ::-webkit-scrollbar-thumb:hover { background: #475569; }
        `}
      </style>

      <div className="flex min-h-screen">
        {activeTab === "Pengaturan" ? (
          <ProfilSidebar setActiveTab={setActiveTab} activePengaturanMenu={activePengaturanMenu} setActivePengaturanMenu={setActivePengaturanMenu} activePengaturanTab={activePengaturanTab} setActivePengaturanTab={setActivePengaturanTab} />
        ) : (
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        )}

        <div className="flex min-w-0 flex-1 gap-8 px-6 py-14 lg:px-14">
          {activeTab === "Beranda" ? (
            <>
              <section className="min-w-0 flex-1 space-y-7">
                <LevelHero />
                <MissionPanel />
                <EventBanner />
              </section>
              <ProfilePanel setActiveTab={setActiveTab} />
            </>
          ) : activeTab === "Pengaturan" ? (
            <ProfilPanel setActiveTab={setActiveTab} activePengaturanMenu={activePengaturanMenu} activePengaturanTab={activePengaturanTab} theme={theme} setTheme={setTheme} />
          ) : activeTab === "Misi" ? (
            <MisiPanel />
          ) : activeTab === "Sosial" ? (
            <SosialPanel />
          ) : activeTab === "Pesan" ? (
            <PesanPanel />
          ) : activeTab === "Pekerjaan" ? (
            <PekerjaanPanel />
          ) : activeTab === "Event" ? (
            <EventPanel />
          ) : activeTab === "Level" ? (
            <LevelPanel />
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <h2 className="text-2xl font-bold text-gray-400">Halaman {activeTab} sedang dalam pengembangan</h2>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
