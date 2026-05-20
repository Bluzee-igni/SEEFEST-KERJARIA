import React from 'react';

function Icon({ name, className = "h-6 w-6" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2.8,
  };

  const icons = {
    robotHead: (
      <path {...common} d="M12 2a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zM8 12v4m8-4v4" />
    )
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {icons[name] || <circle cx="12" cy="12" r="10" {...common} />}
    </svg>
  );
}

export default function UMKMPengaturanPanel({ onBack }) {
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
            Profil
          </h1>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 items-start px-2">
          {/* Left Card: Profile Display */}
          <div className="w-full xl:w-[320px] bg-[#075fd4] rounded-[24px] overflow-hidden flex flex-col relative shadow-lg shrink-0 h-[600px]">
            <div className="bg-white h-[140px] px-4 rounded-b-[24px] relative z-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
              <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[160px] h-[160px] rounded-full border-[8px] border-white bg-gradient-to-br from-[#fff0a9] to-[#ffb1b1] overflow-hidden shadow-lg z-20">
                <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
              </div>
            </div>

            <div className="pt-24 pb-8 px-6 flex flex-col items-center relative z-0 flex-1">
              <button className="bg-white/20 hover:bg-white/30 border border-white/40 text-white px-4 py-1.5 rounded-lg text-[12px] font-bold transition-colors">
                Ubah Avatar
              </button>

              <h2 className="text-[25px] font-extrabold text-white text-center leading-tight mt-6">Raffi Setiawan Putra</h2>

              {/* Robot Head Logo */}
              <div className="mt-auto opacity-90">
                <Icon name="robotHead" className="w-28 h-28 text-white" />
              </div>
            </div>
          </div>

          {/* Right Card: Form */}
          <div className="flex-1 w-full bg-white border-[1.5px] border-[#d0d0d0] rounded-[24px] p-8 shadow-sm">
            <h2 className="text-[22px] font-extrabold text-[#4a4a4a] mb-6">Personal Information</h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[16px] font-bold text-[#4a4a4a]">Nama Pengguna</label>
                <input type="text" defaultValue="Nathcaw" className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none focus:ring-4 focus:ring-blue-100 transition-all" />
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

              <div className="flex flex-col gap-2 mt-2">
                <label className="text-[16px] font-bold text-[#4a4a4a]">Deskripsi Singkat</label>
                <textarea 
                  defaultValue="Tempat untuk toptup mata uang dalam game seperti Robux, Diamond, dan lain-lain" 
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
      </div>
    </div>
  );
}
