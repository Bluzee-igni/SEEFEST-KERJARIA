import React, { useState, useRef, useEffect } from 'react';
import AvatarBorderReward from '../ui/AvatarBorderReward';
import RabbitHexagon from '../ui/RabbitHexagon';

export default function LevelPanel() {
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
