import React from "react";

export default function PekerjaanDetailModal({ job, onClose }) {
  if (!job) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-[700px] w-full max-h-[90vh] flex flex-col animate-[fadeInScale_0.25s_ease-out]" onClick={(e) => e.stopPropagation()}>
        <style>{`@keyframes fadeInScale{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}`}</style>
        
        {/* Modal Container */}
        <div className="bg-white rounded-[24px] overflow-hidden flex flex-col max-h-[85vh] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-gray-100">
          
          {/* Header */}
          <div className="px-6 py-5 sm:px-8 sm:py-6 flex items-start gap-4 border-b border-gray-100 shrink-0 relative bg-gradient-to-r from-gray-50 to-white">
            <button onClick={onClose} className="absolute top-6 right-6 w-9 h-9 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200 hover:text-gray-800 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
            <div className={`w-12 h-12 rounded-xl ${job.color || "bg-blue-100 text-blue-600"} flex items-center justify-center shrink-0`}>
              {/* Fallback icon if no icon provided */}
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div className="flex-1 pr-10">
              <h2 className="text-[22px] sm:text-[24px] font-extrabold text-gray-900 leading-tight">
                {job.title}
              </h2>
              <div className="flex items-center gap-2 mt-1.5">
                 <span className="text-[14px] font-bold text-gray-500 flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  {job.company}
                </span>
              </div>
            </div>
          </div>

          {/* Content Scrollable Area */}
          <div className="overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 flex flex-col gap-8">
            
            {/* Deskripsi Projek */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
              </div>
              <div>
                <h3 className="text-[17px] font-extrabold text-gray-800 mb-2">Deskripsi Projek</h3>
                <p className="text-[15px] font-medium text-gray-600 leading-relaxed">
                  {job.description || "Deskripsi tidak tersedia."}
                </p>
              </div>
            </div>

            {/* Unduh Brief */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-500 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
              </div>
              <div>
                <h3 className="text-[17px] font-extrabold text-gray-800 mb-3">Unduh brief</h3>
                <button className="flex items-center gap-3 px-4 py-2 rounded-xl border-2 border-gray-200 hover:border-[#075fd4] hover:bg-blue-50 transition-all group">
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-[#075fd4]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-5h-2l3-3 3 3h-2v5h-2z" /></svg>
                  <span className="text-[14px] font-bold text-gray-700 group-hover:text-[#075fd4]">{job.briefFile || "brief_project.docx"}</span>
                </button>
              </div>
            </div>

            {/* Deadline */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-500 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
              </div>
              <div>
                <h3 className="text-[17px] font-extrabold text-gray-800 mb-1">Deadline</h3>
                <p className="text-[16px] font-bold text-gray-700">{job.deadline || "Belum ditentukan"}</p>
              </div>
            </div>

            {/* Fee */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-500 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <div>
                <h3 className="text-[17px] font-extrabold text-gray-800 mb-1">Fee</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-[16px] font-bold text-gray-700">Rp</span>
                  <span className="text-[32px] font-extrabold text-gray-900 leading-none">{job.fee ? job.fee.replace('Rp ', '') : "0"}</span>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-100 text-teal-500 flex items-center justify-center shrink-0 mt-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"/></svg>
              </div>
              <div className="w-full">
                <h3 className="text-[17px] font-extrabold text-gray-800 mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {job.tags && job.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-100 text-gray-600 font-bold text-[13px] rounded-lg border border-gray-200">
                      {tag}
                    </span>
                  ))}
                  {(!job.tags || job.tags.length === 0) && (
                    <span className="text-sm text-gray-400 font-medium">Tidak ada tag.</span>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="px-6 py-5 sm:px-8 border-t border-gray-100 bg-gray-50 flex justify-end shrink-0">
            <button className="w-full sm:w-auto px-10 py-3 bg-[#075fd4] text-white font-extrabold text-[15px] rounded-xl shadow-[0_8px_20px_rgba(7,95,212,0.3)] hover:bg-[#064ca8] hover:scale-105 transition-all duration-200 active:scale-95">
              AMBIL PEKERJAAN
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
