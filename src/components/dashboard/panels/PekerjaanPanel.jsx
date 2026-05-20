import React, { useState, useRef, useEffect } from 'react';
import PekerjaanCard from '../ui/PekerjaanCard';

export default function PekerjaanPanel() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredData = PEKERJAAN_DATA.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-6 mb-6 px-2">
        <h1 className="text-[34px] font-extrabold text-[#075fd4] mr-4">Micro work</h1>
        
        {/* Progress Limit Indicator */}
        <div className="hidden sm:flex flex-col gap-1 w-[200px] mr-auto">
           <div className="flex justify-between items-center text-[11px] font-bold text-gray-500 uppercase tracking-wide">
              <span>Batas Kerja Harian</span>
              <span className="text-[#075fd4]">2/10</span>
           </div>
           <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dm-progress">
              <div className="h-full bg-[#075fd4] rounded-full" style={{ width: '20%' }} />
           </div>
        </div>

        {/* Search Bar */}
        <div className="ml-auto flex items-center bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm focus-within:border-[#075fd4] transition-colors w-full sm:w-[250px] dm-card">
           <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
           <input 
             type="text" 
             placeholder="Cari pekerjaan..." 
             value={searchQuery}
             onChange={(e) => setSearchQuery(e.target.value)}
             className="bg-transparent border-none outline-none ml-2 text-[14px] font-semibold text-gray-700 w-full" 
           />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2">
        {filteredData.length > 0 ? (
          filteredData.map((job) => (
            <PekerjaanCard key={job.id} {...job} />
          ))
        ) : (
          <div className="py-10 text-center text-gray-500 font-bold flex flex-col items-center">
            <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Tidak ada pekerjaan yang ditemukan.
          </div>
        )}
      </div>
    </section>
  );
}
