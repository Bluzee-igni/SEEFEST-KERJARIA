import React, { useState, useRef, useEffect } from 'react';
import Icon from '../ui/Icon';

const missions = [
  { title: "Tata letak pada wireframe", icon: "layout", color: "bg-[#d991ff]" },
  { title: "Instalasi dependency framework laravel", icon: "code", color: "bg-[#ffd58d]" },
];

export default function MissionPanel() {
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
            className={`flex min-h-[76px] items-center gap-5 px-6 py-4 ${
              index > 0 ? "border-t-[1.5px] border-[#e0e0e0]" : ""
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
