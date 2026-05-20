import React from 'react';

export default function PekerjaanActionModal({ job, mode, onClose }) {
  if (!job) return null;

  // mode can be "progress" or "submit"
  const isProgress = mode === "progress";

  const titlePrefix = isProgress ? "Lapor progress" : "Submit Project";
  const borderColor = isProgress ? "border-[#0ea5e9]" : "border-gray-200"; // blue vs gray
  
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex flex-col animate-[fadeIn_0.2s_ease-out]">
      <style>{`@keyframes fadeIn{from{opacity:0}to{opacity:1}}`}</style>
      
      {/* Header */}
      <header className="h-[72px] border-b border-gray-200 flex items-center px-6 shrink-0 sticky top-0 bg-white z-10">
        <button 
          onClick={onClose}
          className="w-9 h-9 rounded-lg bg-blue-50 text-[#075fd4] flex items-center justify-center hover:bg-blue-100 transition-colors mr-4"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <div className="flex items-center gap-1.5">
          <img src="/kerjaria-logo-mark.svg" alt="" className="h-8 w-8 object-contain" />
          <span className="text-[22px] font-extrabold text-[#075fd4] tracking-tight">KerjaRia</span>
        </div>
      </header>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto bg-[#fafafa]">
        <div className="max-w-[1000px] mx-auto py-10 px-6">
          <h1 className="text-[22px] font-extrabold text-gray-900 mb-6">
            {titlePrefix} <span className="font-semibold text-gray-600">"{job.company}"</span>
          </h1>

          <div className={`bg-white rounded-[16px] border-[2px] ${borderColor} p-8 sm:p-10 shadow-sm relative`}>
            
            {isProgress ? (
              // --- MODE 1: Lapor Progress ---
              <div className="flex flex-col gap-10">
                {/* Deskripsi Progress */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-extrabold text-gray-800 mb-3">Deskripsi Progress</h3>
                    <textarea 
                      placeholder="Jelaskan progress yang sudah kamu kerjakan..."
                      className="w-full min-h-[120px] p-4 bg-gray-50 border border-gray-200 rounded-xl text-[15px] font-medium text-gray-700 outline-none focus:border-[#075fd4] focus:ring-2 focus:ring-blue-100 transition-all resize-y"
                    ></textarea>
                  </div>
                </div>

                {/* Upload Bukti */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-extrabold text-gray-800 mb-3">Upload bukti pendukung</h3>
                    <div className="w-full sm:w-[80%] h-[180px] bg-white border-[1.5px] border-[#0ea5e9] border-dashed rounded-[16px] flex flex-col items-center justify-center cursor-pointer hover:bg-sky-50 transition-colors group">
                      <svg className="w-10 h-10 text-gray-600 group-hover:text-[#0ea5e9] group-hover:-translate-y-1 transition-all" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.96-2.36L6.5 17h11l-3.54-4.71z"/>
                        <path d="M17.5 10.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/>
                      </svg>
                      <span className="text-[14px] font-bold text-gray-500 mt-2">Klik atau Drop gambar di sini</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // --- MODE 2: Submit Project ---
              <div className="flex flex-col gap-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-500 flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[18px] font-extrabold text-gray-800 mb-3">Upload Project</h3>
                    <div className="w-full sm:w-[80%] h-[200px] bg-white border-[1.5px] border-[#075fd4] border-dashed rounded-[16px] flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition-colors group">
                      <svg className="w-12 h-12 text-gray-800 group-hover:text-[#075fd4] group-hover:-translate-y-1 transition-all" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.36 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
                      </svg>
                      <span className="text-[14px] font-bold text-gray-500 mt-3">Upload file zip/rar project akhirmu</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mt-8 flex justify-end">
            <button className="px-10 py-3 bg-[#075fd4] text-white font-extrabold text-[15px] rounded-xl shadow-sm hover:bg-[#064ca8] hover:scale-105 transition-all duration-200 active:scale-95">
              SUBMIT
            </button>
          </div>

        </div>
      </main>
    </div>
  );
}
