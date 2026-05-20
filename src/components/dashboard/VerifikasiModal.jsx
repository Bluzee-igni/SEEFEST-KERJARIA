import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VerifikasiModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-[450px] bg-[#075fd4] rounded-[24px] p-8 shadow-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-center items-center mb-8 relative">
            <h2 className="text-[28px] font-extrabold text-white">Verifikasi</h2>
            <button className="ml-2 w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center text-[12px] hover:bg-white/30 transition-colors">
              ?
            </button>
            <button 
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          {/* Form */}
          <div className="flex flex-col gap-5">
            <input 
              type="text" 
              placeholder="Nama Sekolah" 
              className="w-full bg-[#528ce0]/80 border-2 border-white/40 rounded-xl px-5 py-4 text-white placeholder-white/80 font-bold outline-none focus:border-white focus:bg-[#528ce0] transition-all"
            />
            
            <input 
              type="text" 
              placeholder="NISN" 
              className="w-full bg-[#528ce0]/80 border-2 border-white/40 rounded-xl px-5 py-4 text-white placeholder-white/80 font-bold outline-none focus:border-white focus:bg-[#528ce0] transition-all"
            />

            <div className="w-full h-[180px] bg-[#528ce0]/80 border-2 border-white/40 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-[#528ce0] hover:border-white transition-all group">
              <span className="text-white font-bold text-[15px]">Upload Kartu Pelajar/Surat kelulusan</span>
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white/30 transition-all">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div className="absolute top-2 right-2 w-4 h-4 bg-[#075fd4] rounded-full flex items-center justify-center border-2 border-white">
                  <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-white text-[#343434] hover:bg-gray-50 py-4 rounded-xl font-extrabold text-[18px] mt-8 shadow-[0_4px_14px_rgba(0,0,0,0.1)] active:scale-95 transition-all">
            Verifikasi
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
