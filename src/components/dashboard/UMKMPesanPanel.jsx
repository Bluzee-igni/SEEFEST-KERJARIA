import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MOCK_MESSAGES = [
  {
    id: 1,
    title: 'Selamat Datang di KerjaRia',
    sender: 'Sistem',
    date: '18-05-2026 23:59',
    content: 'Halo Natchcaw, terimakasih sudah mendaftar di KerjaRia. Hanya ini yang bisa kami berikan. Selamat menikmati pengalaman Anda bersama kami!',
    isRead: false
  },
  {
    id: 2,
    title: 'Projek "Feeds IG Promosi" telah ditinjau',
    sender: 'Review Team',
    date: '19-05-2026 10:30',
    content: 'Projek Anda telah selesai ditinjau dan dinyatakan memenuhi standar. Freelancer akan segera menerima pembayaran.',
    isRead: true
  },
  {
    id: 3,
    title: 'Projek "Video Reels" on progress',
    sender: 'Sistem',
    date: '20-05-2026 14:15',
    content: 'Freelancer "Raffi Setiawan" telah memulai pengerjaan projek Video Reels Anda. Pantau progress secara berkala.',
    isRead: true
  }
];

export default function UMKMPesanPanel() {
  const [activeMsgId, setActiveMsgId] = useState(1);
  const activeMsg = MOCK_MESSAGES.find(m => m.id === activeMsgId);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <header className="h-[72px] border-b border-gray-200 px-8 flex items-center shrink-0">
        <h1 className="text-[24px] font-extrabold text-[#075fd4]">Pesan</h1>
      </header>

      {/* Split Content */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left: Message List */}
        <div className="w-[400px] border-r border-gray-200 flex flex-col p-6 overflow-y-auto bg-[#fafafa]">
          <div className="flex flex-col gap-3">
            {MOCK_MESSAGES.map((msg, idx) => {
              const isActive = msg.id === activeMsgId;
              return (
                <motion.button
                  key={msg.id}
                  onClick={() => setActiveMsgId(msg.id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    isActive 
                      ? 'bg-[#075fd4] border-[#075fd4] text-white shadow-[0_4px_15px_rgba(7,95,212,0.3)]' 
                      : 'bg-white border-gray-200 text-gray-700 hover:border-[#075fd4] hover:shadow-sm'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${isActive ? 'bg-white text-[#075fd4]' : 'bg-[#075fd4] text-white'}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <h3 className={`text-[14px] font-extrabold truncate ${isActive ? 'text-white' : 'text-[#343434]'}`}>
                      {msg.title}
                    </h3>
                  </div>
                </motion.button>
              );
            })}
          </div>

          <div className="mt-auto pt-6">
            <button className="bg-gray-200 text-gray-500 px-6 py-2 rounded-full text-[12px] font-extrabold flex items-center gap-2 hover:bg-red-100 hover:text-red-600 transition-colors w-max">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
              Hapus
            </button>
          </div>
        </div>

        {/* Right: Message Detail */}
        <div className="flex-1 bg-white p-10 overflow-y-auto">
          <AnimatePresence mode="wait">
            {activeMsg && (
              <motion.div
                key={activeMsg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-[700px] border-l-4 border-[#075fd4] pl-8"
              >
                <h2 className="text-[28px] font-extrabold text-[#343434] mb-8 pb-4 border-b border-gray-100">
                  {activeMsg.title}
                </h2>
                
                <div className="mb-8 border-b border-gray-100 pb-6">
                  <p className="text-[14px] font-bold text-gray-500 mb-1">
                    Sender: <span className="text-[#343434]">{activeMsg.sender}</span>
                  </p>
                  <p className="text-[14px] font-bold text-gray-500">
                    Time/Date: <span className="text-[#343434]">{activeMsg.date}</span>
                  </p>
                </div>

                <div className="text-[15px] font-semibold text-gray-700 leading-relaxed">
                  {activeMsg.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
