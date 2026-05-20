import React, { useState, useRef, useEffect } from 'react';

export default function EventBannerKemerdekaan() {
  return (
    <div 
      className="relative h-[220px] w-full overflow-hidden rounded-[24px] bg-cover bg-left-bottom"
      style={{ backgroundImage: "url('/event-kemerdekaan-bg.svg')" }}
    >
      <div className="relative z-10 h-full px-10 flex flex-col justify-center items-start">
        <h3 className="max-w-[450px] text-[30px] font-extrabold leading-[1.15] tracking-[-0.02em] text-black">
          Selamat Hari Kemerdekaan<br/>Indonesia ke- 81
        </h3>
        <p className="mt-1.5 text-[14px] font-extrabold text-black">
          15 Agustus – 22 Agustus 2026
        </p>
        <button className="mt-4 flex items-center gap-2 rounded-full bg-[#075fd4] px-5 py-2 text-[14px] font-extrabold text-white shadow-[0_4px_10px_rgba(7,95,212,0.3)] hover:bg-[#064ca8] hover:scale-105 transition-all duration-200">
          Pergi
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7" cy="7" r="7" fill="white"/>
            <circle cx="7" cy="7" r="3.5" fill="#075fd4"/>
          </svg>
        </button>
      </div>
      <img src="/event-kemerdekaan-robot.svg" alt="" className="absolute bottom-0 right-[8%] h-[200px] w-auto object-contain pointer-events-none" />
    </div>
  );
}
