import React, { useState } from 'react';
import { motion } from 'framer-motion';

function WalletCard() {
  return (
    <div className="w-[300px] shrink-0 bg-[#075fd4] rounded-[24px] p-5 shadow-lg relative overflow-hidden flex flex-col justify-between">
      {/* Background shape */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-10 translate-x-10"></div>
      
      {/* Header */}
      <div className="flex items-center gap-3 relative z-10 mb-4">
        <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-white shrink-0">
          <img src="/avatar-placeholder.png" alt="Store Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
        </div>
        <div>
          <h3 className="text-[16px] font-extrabold text-white leading-tight">BintangStore</h3>
          <p className="text-[11px] text-blue-100 flex items-center gap-1">
            Raffi Setiawan Putra
            <svg className="w-3 h-3 text-blue-200" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
          </p>
        </div>
      </div>

      {/* Balance */}
      <div className="bg-white rounded-xl p-4 shadow-sm relative z-10 mb-4 flex-1 flex flex-col justify-center">
        <p className="text-[13px] font-bold text-gray-500 mb-1">Wallet</p>
        <h2 className="text-[24px] font-extrabold text-[#343434] tracking-tight">Rp. 500.000,00</h2>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 relative z-10">
        <button className="flex-1 bg-white text-[#075fd4] h-[34px] rounded-lg text-[12px] font-extrabold flex items-center justify-center gap-1.5 hover:bg-blue-50 transition-colors shadow-sm">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
          Isi Saldo
        </button>
        <button className="flex-1 bg-white text-[#075fd4] h-[34px] rounded-lg text-[12px] font-extrabold flex items-center justify-center gap-1.5 hover:bg-blue-50 transition-colors shadow-sm">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          Tarik Saldo
        </button>
      </div>
    </div>
  );
}

function StatCard({ icon, count, label, colorClass, iconColorClass }) {
  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.02 }}
      className="flex-1 bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.08)] transition-all flex items-center gap-5 cursor-default"
    >
      <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-inner ${colorClass}`}>
        <svg className={`w-7 h-7 ${iconColorClass}`} fill="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <div>
        <h4 className="text-[28px] font-extrabold text-[#343434] leading-none mb-1">{count}</h4>
        <p className="text-[14px] font-bold text-gray-500 uppercase tracking-wide">{label}</p>
      </div>
    </motion.div>
  );
}

function ProjectCard({ title, fee, status, icon, color, delay }) {
  const statusColors = {
    'COMPLETED': 'bg-green-100 text-green-700',
    'ON PROGRESS': 'bg-blue-100 text-blue-700',
    'DITINJAU': 'bg-orange-100 text-orange-700'
  };
  
  const statusColor = statusColors[status] || 'bg-gray-100 text-gray-600';
  const [bgClass, textClass] = color.split(" ");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col gap-6"
    >
      {/* Top Section — same layout as MisiCard */}
      <div className="flex gap-5 items-center">
        {/* Icon */}
        <div className={`w-[70px] h-[70px] rounded-[16px] ${bgClass} ${textClass} flex items-center justify-center flex-shrink-0`}>
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1">
          <h3 className="text-[20px] font-extrabold text-gray-800 leading-tight">{title}</h3>
          <p className="text-[13px] text-gray-500 font-bold mt-1">Fee : Rp {fee}</p>

          {/* Sub-steps dots — same as MisiCard */}
          <div className="flex items-center mt-2.5">
            {[0,1,2].map((i) => (
              <React.Fragment key={i}>
                <div className={`w-3.5 h-3.5 rounded-full border-[2px] ${i < 2 ? 'bg-gray-500 border-gray-500' : 'bg-white border-gray-300'} z-10 flex-shrink-0`} />
                {i < 2 && (
                  <div className={`w-4 h-[2px] ${i < 1 ? 'bg-gray-500' : 'bg-gray-200'} z-0 flex-shrink-0 -mx-[1px]`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom — status badge */}
      <div className="flex justify-end mt-auto">
        <span className={`px-4 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider border ${statusColor}`}>
          {status}
        </span>
      </div>
    </motion.div>
  );
}

export default function UMKMBerandaPanel({ onGoToPosting }) {
  const [activeTab, setActiveTab] = useState('SEMUA');
  const tabs = ['SEMUA', 'COMPLETED', 'ON PROGRESS', 'DITINJAU'];

  return (
    <div className="flex-1 overflow-y-auto bg-[#fafafa] p-8 pb-20">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Top Banner & Wallet */}
        <div className="flex gap-6 mb-8">
          <div className="flex-1 bg-[#075fd4] rounded-[24px] p-10 flex flex-col justify-center relative overflow-hidden shadow-lg">
            {/* Background shapes */}
            <svg className="absolute right-0 bottom-0 opacity-10" width="200" height="200" viewBox="0 0 200 200" fill="none">
              <circle cx="150" cy="150" r="100" fill="white"/>
              <circle cx="200" cy="50" r="60" fill="white"/>
            </svg>
            <h1 className="text-[34px] font-extrabold text-white leading-tight relative z-10 mb-6">
              Selamat Datang, Raffi Setiawan
            </h1>
            <div className="relative z-10">
              <button 
                onClick={onGoToPosting}
                className="bg-white text-[#075fd4] px-8 py-3 rounded-full font-extrabold text-[14px] shadow-[0_4px_15px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                Tambah
              </button>
            </div>
          </div>

          <WalletCard />
        </div>

        {/* Stats Row */}
        <div className="flex gap-6 mb-10">
          <StatCard 
            icon={<path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
            count="10" 
            label="Posted" 
            colorClass="bg-[#075fd4]" 
            iconColorClass="text-white"
          />
          <StatCard 
            icon={<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
            count="2" 
            label="Completed" 
            colorClass="bg-[#10b981]" 
            iconColorClass="text-white"
          />
          <StatCard 
            icon={<path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>}
            count="5" 
            label="On progress" 
            colorClass="bg-[#ec4899]" 
            iconColorClass="text-white"
          />
        </div>

        {/* Tabs & Add Button — pill style from MisiPanel */}
        <div className="flex items-center justify-between mb-6 border-b-[1.5px] border-[#d0d0d0] pb-6">
          <div className="flex flex-wrap items-center gap-3">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-[14px] font-bold shadow-sm transition-transform hover:scale-105 ${
                  activeTab === tab 
                    ? 'bg-[#075fd4] text-white shadow-md' 
                    : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <button 
            onClick={onGoToPosting}
            className="bg-gray-600 text-white px-6 py-2 rounded-full text-[14px] font-extrabold flex items-center gap-2 shadow-sm hover:bg-[#075fd4] hover:shadow-md hover:scale-105 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
            Tambah
          </button>
        </div>

        {/* Projects Grid — same grid as MisiPanel */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-2">
          <ProjectCard 
            title="Landing Page usaha" fee="50.000" status="COMPLETED" delay={0.1}
            icon={<path d="M7 5v14M17 5v14M4 9h16M4 15h16" />}
            color="bg-[#eef2ff] text-[#4f46e5]"
          />
          <ProjectCard 
            title="Video Reels" fee="40.000" status="ON PROGRESS" delay={0.2}
            icon={<path d="m15.5 4.5 4 4L9 19H5v-4z" />}
            color="bg-[#fff1f2] text-[#e11d48]"
          />
          <ProjectCard 
            title="Desain Banner Promosi" fee="75.000" status="DITINJAU" delay={0.3}
            icon={<path d="m9 8-4 4 4 4m6-8 4 4-4 4" />}
            color="bg-[#f0fdf4] text-[#16a34a]"
          />
          <ProjectCard 
            title="Video Reels" fee="40.000" status="ON PROGRESS" delay={0.4}
            icon={<path d="m15.5 4.5 4 4L9 19H5v-4z" />}
            color="bg-[#fce7f3] text-[#db2777]"
          />
        </div>
      </div>
    </div>
  );
}

