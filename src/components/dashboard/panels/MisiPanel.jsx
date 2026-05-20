import React, { useState, useRef, useEffect } from 'react';
import MisiCard from '../ui/MisiCard';

export default function MisiPanel() {
  const [activeFilter, setActiveFilter] = useState("Semua Misi");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMissions = MISI_DATA.filter((misi) => {
    // 1. Filter by category
    if (activeFilter === "Sedang Berjalan") {
      if (misi.progress === 100) return false;
    } else if (activeFilter === "Selesai") {
      if (misi.progress !== 100) return false;
    }
    
    // 2. Filter by search query
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      if (!misi.title.toLowerCase().includes(query) && !misi.subtitle.toLowerCase().includes(query)) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] mr-4">Misi</h1>
        
        <div className="flex flex-wrap items-center gap-3">
          <button 
            onClick={() => setActiveFilter("Semua Misi")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Semua Misi' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dm-card'}`}
          >
            Semua Misi
          </button>
          <button 
            onClick={() => setActiveFilter("Sedang Berjalan")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Sedang Berjalan' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dm-card'}`}
          >
            Sedang Berjalan
          </button>
          <button 
            onClick={() => setActiveFilter("Selesai")}
            className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${activeFilter === 'Selesai' ? 'bg-[#075fd4] text-white shadow-md' : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50 dm-card'}`}
          >
            Selesai
          </button>
        </div>

        <div className="ml-auto flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#075fd4] transition-colors w-full sm:w-auto dm-card">
           <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           <input 
             type="text" 
             placeholder="Cari misi..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="bg-transparent border-none outline-none ml-2 text-[14px] font-semibold text-gray-700 w-full sm:w-[150px]" 
           />
        </div>
      </div>

      {filteredMissions.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2">
          {filteredMissions.map((misi) => (
            <MisiCard key={misi.id} {...misi} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
           <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
           <p className="text-[16px] font-bold">Misi tidak ditemukan.</p>
        </div>
      )}
    </section>
  );
}
