import React, { useState, useRef, useEffect } from 'react';
import Icon from '../ui/Icon';
import UserCard from '../ui/UserCard';
import FriendRequestCard from '../ui/FriendRequestCard';

export default function SosialPanel() {
  const [activeSosialTab, setActiveSosialTab] = useState("users");
  const users = [
    {
      name: "Raffi Setiawan Putra",
      role: "Junior Explorer",
      level: 17,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Raffi&backgroundColor=b6e3f4",
    },
    {
      name: "Evan Satria Mahardika",
      role: "Junior Explorer",
      level: 17,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Evan&backgroundColor=ffdfbf",
    },
    {
      name: "Atha Fakhri Arkana",
      role: "Junior Explorer",
      level: 18,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Atha&backgroundColor=e2e8f0",
    },
  ];

  return (
    <section className="w-full">
      <div className="mb-6 flex items-center border-b-[3px] border-[#e0e0e0] pb-0 dm-card" style={{background:'transparent', border:'none', borderBottom:'3px solid #e0e0e0'}}>
        <h1 className="text-[34px] font-extrabold text-[#075fd4] flex-1 pb-4 pl-4">
          Sosial
        </h1>
        <div className="flex items-end gap-16 pr-40">
          <div 
            className="relative pb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setActiveSosialTab("users")}
          >
            <Icon name="users" className={`h-8 w-8 ${activeSosialTab === "users" ? "text-[#075fd4]" : "text-[#a0a0a0]"}`} />
            {activeSosialTab === "users" && (
              <div className="absolute bottom-[-1.5px] left-1/2 h-1 w-14 -translate-x-1/2 rounded-t-lg bg-[#075fd4]" />
            )}
          </div>
          <div 
            className="relative pb-4 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setActiveSosialTab("userPlus")}
          >
            <Icon name="userPlus" className={`h-8 w-8 ${activeSosialTab === "userPlus" ? "text-[#075fd4]" : "text-[#a0a0a0]"}`} />
            {activeSosialTab === "userPlus" && (
              <div className="absolute bottom-[-1.5px] left-1/2 h-1 w-14 -translate-x-1/2 rounded-t-lg bg-[#075fd4]" />
            )}
          </div>
        </div>
      </div>

      {activeSosialTab === "users" && (
        <div className="mt-8 flex flex-col gap-4 pl-4 pr-10">
          {users.map((u, i) => (
            <UserCard key={i} {...u} />
          ))}
        </div>
      )}

      {activeSosialTab === "userPlus" && (
        <div className="mt-8 flex flex-col pl-4 pr-10">
          <input 
            type="text" 
            placeholder="Cari nama pengguna..." 
            className="w-full rounded-full border-[1.5px] border-[#075fd4] px-6 py-4 text-[16px] font-bold text-[#343434] outline-none placeholder:text-[#075fd4] placeholder:font-bold"
          />
          <div className="my-8 w-full h-[1px] bg-[#d0d0d0]" />
          
          <h2 className="mb-4 text-[18px] font-extrabold text-[#4a4a4a]">
            Friend request
          </h2>

          <div className="flex flex-col gap-4">
            {users.slice(2).map((u, i) => (
              <FriendRequestCard key={i} {...u} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
