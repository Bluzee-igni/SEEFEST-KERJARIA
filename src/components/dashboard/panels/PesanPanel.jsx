import React, { useState, useRef, useEffect } from 'react';
import Icon from '../ui/Icon';

export default function PesanPanel() {
  const [activeMessageId, setActiveMessageId] = useState(1);

  const messages = [
    {
      id: 1,
      title: "Selamat Datang di KerjaRia",
      sender: "",
      date: "18-05-2026 23:59",
      content: "Halo Natchcaw, terimakasih sudah mendaftar di KerjaRia. Hanya ini yang bisa kami berikan",
      hasAttachment: true,
    },
    {
      id: 2,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
    {
      id: 3,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
    {
      id: 4,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
    {
      id: 5,
      title: "Event “Hari Kemerdekaan “ segera berakhir",
      sender: "",
      date: "20-05-2026 10:00",
      content: "Segera selesaikan event kemerdekaan...",
      hasAttachment: false,
    },
  ];

  const activeMessage = messages.find((m) => m.id === activeMessageId);

  return (
    <section className="w-full flex flex-col h-full">
      <div className="mb-6 pb-4 border-b-[1.5px] border-[#d0d0d0]">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] pl-2">Pesan</h1>
      </div>

      <div className="flex flex-1 min-h-0">
        <div className="w-[45%] flex flex-col pr-6">
          <div className="flex-1 overflow-y-auto pr-2 space-y-4">
            {messages.map((msg) => {
              const isActive = msg.id === activeMessageId;
              return (
                <div
                  key={msg.id}
                  onClick={() => setActiveMessageId(msg.id)}
                  className={`cursor-pointer rounded-[8px] p-5 flex items-center gap-4 transition-all duration-200 hover:scale-[1.02] ${
                    isActive
                      ? "bg-[#075fd4] text-white shadow-md"
                      : "bg-white text-[#343434] border-[2px] border-[#e0e0e0] shadow-[0_5px_0_#d0d0d0] dm-card"
                  }`}
                >
                  <Icon
                    name="mail"
                    className={`h-9 w-9 shrink-0 ${isActive ? "text-white" : "text-[#075fd4]"}`}
                  />
                  <h3 className="font-extrabold text-[16px] leading-snug">{msg.title}</h3>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-full bg-[#075fd4] px-6 py-2 text-white font-extrabold text-[15px] shadow-md hover:bg-[#064ca8] transition-all duration-200 hover:scale-105">
              <Icon name="download" className="h-4 w-4" />
              Klaim Semua
            </button>
            <button className="flex items-center gap-2 rounded-full bg-[#d0d0d0] px-6 py-2 text-[#4a4a4a] font-extrabold text-[15px] shadow-md hover:bg-[#b0b0b0] transition-all duration-200 hover:scale-105">
              <Icon name="trash" className="h-4 w-4" />
              Hapus
            </button>
          </div>
        </div>

        <div className="w-[4px] bg-[#075fd4] rounded-full mx-2 shrink-0"></div>

        <div className="flex-1 pl-8 flex flex-col">
          {activeMessage && (
            <>
              <h2 className="text-[28px] font-extrabold text-[#343434] mb-4 dm-text">
                {activeMessage.title}
              </h2>
              <div className="w-full h-[1.5px] bg-[#d0d0d0] mb-4" />

              <div className="text-[18px] font-bold text-[#4a4a4a] mb-4 leading-relaxed dm-sub">
                <div>Sender: </div>
                <div>Time/Date: {activeMessage.date}</div>
              </div>

              <div className="w-full h-[1.5px] bg-[#d0d0d0] mb-4" />

              <div className="text-[18px] font-bold text-[#343434] flex-1 dm-text">
                <p>{activeMessage.content}</p>

                {activeMessage.hasAttachment && (
                  <div className="mt-12">
                    <div className="h-[90px] w-[90px] rounded-[10px] border-[3px] border-[#cecece] shadow-sm bg-white overflow-hidden p-[2px]">
                      <img
                        src="https://api.dicebear.com/7.x/adventurer/svg?seed=KerjaRia"
                        alt="Attachment"
                        className="w-full h-full object-cover rounded-[6px]"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-auto flex justify-end pt-6">
                <button className="flex items-center gap-2 rounded-full bg-[#075fd4] px-8 py-2 text-white font-extrabold text-[16px] shadow-md hover:bg-[#064ca8] transition-all duration-200 hover:scale-105">
                  <Icon name="download" className="h-5 w-5" />
                  Klaim
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
