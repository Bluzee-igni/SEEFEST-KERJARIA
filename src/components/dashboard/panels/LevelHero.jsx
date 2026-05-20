import React, { useState, useRef, useEffect } from 'react';
import Icon from '../ui/Icon';

export default function LevelHero() {
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
