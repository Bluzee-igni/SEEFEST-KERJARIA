import React from 'react';
import PrivasiDataContent from './PrivasiDataContent';

export default function UMKMPrivasiPanel({ onBack }) {
  return (
    <div className="flex-1 overflow-y-auto bg-white p-8 pb-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-4 mb-8 px-2">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-xl bg-blue-100 text-[#075fd4] flex items-center justify-center hover:bg-[#075fd4] hover:text-white transition-all shadow-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <h1 className="text-[34px] font-extrabold text-[#075fd4] tracking-tight">
            Privasi & Data
          </h1>
        </div>

        <div className="px-2">
          <PrivasiDataContent />
        </div>
      </div>
    </div>
  );
}
