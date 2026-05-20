import React from 'react';
import VerifikasiModal from './VerifikasiModal';

export default function PrivasiDataContent() {
  const [isVerifikasiOpen, setIsVerifikasiOpen] = React.useState(false);

  return (
    <div className="w-full max-w-[800px] mx-auto mt-8">
      {/* Container Biru */}
      <div className="bg-[#075fd4] rounded-[24px] p-8 shadow-lg relative overflow-hidden">
        {/* Header Profile */}
        <div className="flex justify-between items-center mb-8 relative z-10">
          <div className="flex items-center gap-5">
            <div className="w-[80px] h-[80px] rounded-full border-4 border-[#ffd245] overflow-hidden bg-white shadow-md shrink-0">
              <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-extrabold text-white">Raffi Setiawan Putra</h2>
          </div>
          <button 
            onClick={() => setIsVerifikasiOpen(true)}
            className="bg-white text-[#075fd4] px-6 py-2.5 rounded-full font-extrabold text-[14px] flex items-center gap-2 hover:bg-blue-50 transition-colors shadow-sm active:scale-95"
          >
            Verifikasi
            <div className="w-4 h-4 rounded-full bg-gray-400 text-white flex items-center justify-center text-[10px]">?</div>
          </button>
        </div>

        {/* White Card (Email & Password) */}
        <div className="bg-white rounded-xl p-6 shadow-sm relative z-10">
          <div className="flex justify-between items-center border-b border-gray-100 pb-5 mb-5">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#343434]">Email</h3>
              <p className="text-[14px] font-bold text-gray-500 mt-0.5">kanaiakasa@gmail.com</p>
            </div>
            <button className="bg-[#075fd4] text-white px-8 py-2 rounded-full font-bold text-[14px] hover:bg-[#0650b3] transition-colors">
              Edit
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-[17px] font-extrabold text-[#343434]">Password</h3>
              <p className="text-[14px] font-bold text-gray-500 mt-1 tracking-[4px]">************</p>
            </div>
            <button className="bg-[#075fd4] text-white px-8 py-2 rounded-full font-bold text-[14px] hover:bg-[#0650b3] transition-colors">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <button className="bg-[#ff3b30] text-white px-6 py-2.5 rounded-[8px] font-bold text-[14px] hover:bg-[#d63027] transition-colors shadow-sm">
          Hapus Akun
        </button>
      </div>

      <VerifikasiModal isOpen={isVerifikasiOpen} onClose={() => setIsVerifikasiOpen(false)} />
    </div>
  );
}

