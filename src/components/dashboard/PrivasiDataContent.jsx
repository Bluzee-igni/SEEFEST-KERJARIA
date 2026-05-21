import React from 'react';
import VerifikasiModal from './VerifikasiModal';

export default function PrivasiDataContent() {
  const [isVerifikasiOpen, setIsVerifikasiOpen] = React.useState(false);

  return (
    <div className="w-full max-w-[760px] mx-auto mt-6">
      <div className="rounded-[18px] bg-[#075fd4] p-6 pt-7 shadow-[0_12px_24px_rgba(7,95,212,0.18)]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="h-[72px] w-[72px] overflow-hidden rounded-full border-[4px] border-[#ffd246] bg-white shadow-md shrink-0">
              <img src="/avatar-placeholder.png" alt="Avatar" className="h-full w-full object-cover" onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }} />
            </div>
            <h2 className="text-[20px] font-extrabold leading-tight text-white sm:text-[22px]">
              Raffi Setiawan Putra
            </h2>
          </div>

          <button
            type="button"
            onClick={() => setIsVerifikasiOpen(true)}
            className="flex items-center gap-2 rounded-[8px] bg-white px-4 py-2 text-[12px] font-extrabold text-[#075fd4] shadow-sm transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Verifikasi
            <span className="grid h-4 w-4 place-items-center rounded-full bg-[#6b7280] text-[10px] font-bold text-white">
              ?
            </span>
          </button>
        </div>

        <div className="mt-6 rounded-[12px] bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
            <div>
              <h3 className="text-[16px] font-extrabold text-[#343434]">Email</h3>
              <p className="mt-0.5 text-[13px] font-bold text-gray-500">kanaiakasa@gmail.com</p>
            </div>
            <button className="min-w-[56px] rounded-full bg-[#075fd4] px-4 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-[#0650b3]">
              Edit
            </button>
          </div>

          <div className="flex items-start justify-between gap-4 pt-4">
            <div>
              <h3 className="text-[16px] font-extrabold text-[#343434]">Password</h3>
              <p className="mt-1 text-[13px] font-bold tracking-[4px] text-gray-500">************</p>
            </div>
            <button className="min-w-[56px] rounded-full bg-[#075fd4] px-4 py-1.5 text-[13px] font-bold text-white transition-colors hover:bg-[#0650b3]">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-end">
        <button className="rounded-[8px] bg-[#ff2b20] px-6 py-2.5 text-[14px] font-bold text-white shadow-sm transition-colors hover:bg-[#d93026]">
          Hapus Akun
        </button>
      </div>

      <VerifikasiModal isOpen={isVerifikasiOpen} onClose={() => setIsVerifikasiOpen(false)} />
    </div>
  );
}

