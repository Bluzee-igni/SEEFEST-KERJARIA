import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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

function ProjectCard({ title, fee, status, icon, color, delay, onClick }) {
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
      onClick={onClick}
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

const PROJECTS = [
  {
    id: 1,
    title: 'Landing Page usaha "BintangStore"',
    fee: '50.000',
    feeDisplay: '50.000,00',
    status: 'ON PROGRESS',
    owner: 'Raffi SP',
    description:
      'Membuat landing page modern untuk website top up game "BintangStore". Website digunakan untuk layanan top up game cepat, aman, dan otomatis.',
    progressDescription:
      'Membuat landing page modern untuk website top up game "BintangStore". Website digunakan untuk layanan top up game cepat, aman, dan otomatis.',
    briefFile: 'brief_landingpage.docx',
    progressFile: 'landingpage.png',
    deadline: '20 Mei 2022',
    tags: ['Laravel', 'React JS', 'Javascript'],
    icon: <path d="M7 5v14M17 5v14M4 9h16M4 15h16" />,
    color: 'bg-[#eef2ff] text-[#4f46e5]',
  },
  {
    id: 2,
    title: 'Video Reels',
    fee: '40.000',
    feeDisplay: '40.000,00',
    status: 'ON PROGRESS',
    owner: 'Raffi SP',
    description: 'Membuat video reels promosi dengan gaya visual modern.',
    progressDescription: 'Preview reels promosi untuk kebutuhan social media.',
    briefFile: 'brief_reels.docx',
    progressFile: 'reels-preview.mp4',
    deadline: '25 Mei 2022',
    tags: ['Video', 'Reels', 'Editing'],
    icon: <path d="m15.5 4.5 4 4L9 19H5v-4z" />,
    color: 'bg-[#fff1f2] text-[#e11d48]',
  },
  {
    id: 3,
    title: 'Desain Banner Promosi',
    fee: '75.000',
    feeDisplay: '75.000,00',
    status: 'DITINJAU',
    owner: 'Raffi SP',
    description: 'Membuat banner promosi untuk kampanye musiman.',
    progressDescription: 'Konsep awal banner promosi untuk kampanye musiman.',
    briefFile: 'brief_banner.docx',
    progressFile: 'banner-konsep.png',
    deadline: '28 Mei 2022',
    tags: ['Design', 'Banner', 'Brand'],
    icon: <path d="m9 8-4 4 4 4m6-8 4 4-4 4" />,
    color: 'bg-[#f0fdf4] text-[#16a34a]',
  },
  {
    id: 4,
    title: 'Video Reels',
    fee: '40.000',
    feeDisplay: '40.000,00',
    status: 'COMPLETED',
    owner: 'Raffi SP',
    description: 'Reels lengkap untuk highlight produk terbaru.',
    progressDescription: 'Final reels siap publish untuk highlight produk terbaru.',
    briefFile: 'brief_reels_final.docx',
    progressFile: 'reels-final.mp4',
    resultFile: 'landingpage.zip',
    deadline: '10 Mei 2022',
    tags: ['Video', 'Reels', 'Social'],
    icon: <path d="m15.5 4.5 4 4L9 19H5v-4z" />,
    color: 'bg-[#fce7f3] text-[#db2777]',
  },
];

function ProjectDetailModal({ project, view, onClose, onShowProgress }) {
  const [reviewStatus, setReviewStatus] = useState('approved');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (!project) return;
    setReviewStatus('approved');
    setFeedback('');
  }, [project]);

  const statusMeta = {
    'ON PROGRESS': {
      label: 'PROGRESS',
      className: 'bg-[#fef3c7] text-[#b45309]',
      dot: 'bg-[#f59e0b]',
    },
    COMPLETED: {
      label: 'COMPLETED',
      className: 'bg-[#dcfce7] text-[#166534]',
      dot: 'bg-[#22c55e]',
    },
    DITINJAU: {
      label: 'DITINJAU',
      className: 'bg-[#ffedd5] text-[#9a3412]',
      dot: 'bg-[#fb923c]',
    },
  };

  const isCompleted = project?.status === 'COMPLETED';
  const isProgressView = view === 'progress' && !isCompleted;

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-[900px] rounded-[18px] border border-[#e5e7eb] bg-white px-8 py-7 shadow-[0_18px_60px_rgba(0,0,0,0.18)]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e7eb] pb-4">
              <h2 className="text-[16px] font-extrabold text-[#111827]">
                {isCompleted ? `View Result Project ${project.title}` : project.title}
              </h2>
              {!isCompleted && (
                <div className="flex items-center gap-3">
                  {(() => {
                    const meta = statusMeta[project.status] || statusMeta['ON PROGRESS'];
                    return (
                      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-extrabold ${meta.className}`}>
                        <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                        {meta.label}
                      </span>
                    );
                  })()}
                  <span className="text-[11px] font-bold text-gray-500">by {project.owner}</span>
                </div>
              )}
            </div>

            {isCompleted ? (
              <div className="mt-5 space-y-4">
                <div className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#e0f2fe] text-[#2563eb]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 4h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 1.5V9h3.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-extrabold text-[#111827]">Unduh Project</h3>
                      <button className="mt-2 inline-flex items-center gap-2 rounded-[8px] border border-[#b9d9ff] bg-white px-3 py-1.5 text-[11px] font-bold text-[#1f2937] shadow-sm">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1z" />
                          <path d="M5 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5z" />
                        </svg>
                        {project.resultFile || 'landingpage.zip'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#fef3c7] text-[#d97706]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm-1 14.5-4-4 1.4-1.4L11 13.7l4.6-4.6L17 10.5z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-extrabold text-[#111827]">Status</h3>
                      <div className="mt-3 flex items-center gap-6 text-[12px] font-bold text-gray-600">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="review-status"
                            value="approved"
                            checked={reviewStatus === 'approved'}
                            onChange={() => setReviewStatus('approved')}
                            className="sr-only"
                          />
                          <span className={`h-3 w-3 rounded-full border-2 ${reviewStatus === 'approved' ? 'border-[#075fd4] bg-[#075fd4]' : 'border-gray-300 bg-white'}`} />
                          Approved
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="review-status"
                            value="revisi"
                            checked={reviewStatus === 'revisi'}
                            onChange={() => setReviewStatus('revisi')}
                            className="sr-only"
                          />
                          <span className={`h-3 w-3 rounded-full border-2 ${reviewStatus === 'revisi' ? 'border-[#075fd4] bg-[#075fd4]' : 'border-gray-300 bg-white'}`} />
                          Revisi
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#fce7f3] text-[#db2777]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 6h-2v9H7v2a3 3 0 0 0 3 3h7l4 4V9a3 3 0 0 0-3-3z" />
                        <path d="M15 3H6a3 3 0 0 0-3 3v10l4-4h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-extrabold text-[#111827]">Beri Feedback</h3>
                      <textarea
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                        placeholder="Tulis feedback..."
                        className="mt-2 min-h-[110px] w-full rounded-[10px] border border-[#b9d9ff] bg-white px-4 py-3 text-[12px] font-semibold text-gray-700 outline-none transition focus:border-[#075fd4] focus:ring-2 focus:ring-[#075fd4]/20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : isProgressView ? (
              <div className="mt-5 space-y-4">
                <div className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#f3f4f6] text-[#f97316]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-extrabold text-[#111827]">Deskripsi Progress</h3>
                      <p className="mt-1 text-[12px] font-semibold text-gray-600">
                        {project.progressDescription || project.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#e0f2fe] text-[#2563eb]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 4h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 1.5V9h3.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-extrabold text-[#111827]">Bukti Progress</h3>
                      <button className="mt-2 inline-flex items-center gap-2 rounded-[8px] border border-[#b9d9ff] bg-white px-3 py-1.5 text-[11px] font-bold text-[#1f2937] shadow-sm">
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1z" />
                          <path d="M5 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5z" />
                        </svg>
                        {project.progressFile || 'progress-file'}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="rounded-[12px] border border-[#e5e7eb] bg-white px-4 py-3">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#fce7f3] text-[#db2777]">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21 6h-2v9H7v2a3 3 0 0 0 3 3h7l4 4V9a3 3 0 0 0-3-3z" />
                        <path d="M15 3H6a3 3 0 0 0-3 3v10l4-4h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[14px] font-extrabold text-[#111827]">Beri Feedback</h3>
                      <textarea
                        value={feedback}
                        onChange={(event) => setFeedback(event.target.value)}
                        placeholder="Tulis feedback..."
                        className="mt-2 min-h-[110px] w-full rounded-[10px] border border-[#b9d9ff] bg-white px-4 py-3 text-[12px] font-semibold text-gray-700 outline-none transition focus:border-[#075fd4] focus:ring-2 focus:ring-[#075fd4]/20"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-5 space-y-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#f3f4f6] text-[#f97316]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#111827]">Deskripsi Projek</h3>
                    <p className="mt-1 text-[12px] font-semibold text-gray-600">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#e0f2fe] text-[#2563eb]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 4h6l4 4v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm6 1.5V9h3.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#111827]">Unduh brief</h3>
                    <button className="mt-2 inline-flex items-center gap-2 rounded-[8px] border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-bold text-gray-600 shadow-sm">
                      <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 3a1 1 0 0 1 1 1v8.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.42l2.3 2.3V4a1 1 0 0 1 1-1z" />
                        <path d="M5 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5z" />
                      </svg>
                      {project.briefFile}
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#ede9fe] text-[#7c3aed]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v3H2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1zm15 9v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9h20z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#111827]">Deadline</h3>
                    <p className="mt-1 text-[12px] font-semibold text-gray-600">{project.deadline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#dcfce7] text-[#16a34a]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v10a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a2 2 0 0 0-2-2h-2V5a4 4 0 0 0-4-4zm-2 5V5a2 2 0 1 1 4 0v1h-4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#111827]">Fee</h3>
                    <p className="mt-1 text-[20px] font-extrabold text-[#111827]">Rp {project.feeDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-[#fee2e2] text-[#ef4444]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5 3a2 2 0 0 0-2 2v4.18a2 2 0 0 1 0 3.64V17a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.18a2 2 0 0 1 0-3.64V5a2 2 0 0 0-2-2H5zm6 5h2v2h-2V8zm0 6h2v2h-2v-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#111827]">Tags</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-bold text-gray-600">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 flex justify-end">
              {isCompleted ? (
                <button className="rounded-[8px] bg-[#075fd4] px-5 py-2 text-[11px] font-extrabold text-white shadow-[0_6px_18px_rgba(7,95,212,0.3)] hover:bg-[#064ca8]">
                  SUBMIT
                </button>
              ) : isProgressView ? (
                <button className="rounded-[8px] bg-[#075fd4] px-5 py-2 text-[11px] font-extrabold text-white shadow-[0_6px_18px_rgba(7,95,212,0.3)] hover:bg-[#064ca8]">
                  SUBMIT
                </button>
              ) : (
                <button
                  className="rounded-[8px] bg-[#075fd4] px-5 py-2 text-[11px] font-extrabold text-white shadow-[0_6px_18px_rgba(7,95,212,0.3)] hover:bg-[#064ca8]"
                  onClick={onShowProgress}
                >
                  VIEW PROGRESS
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function UMKMBerandaPanel({ onGoToPosting }) {
  const [activeTab, setActiveTab] = useState('SEMUA');
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalView, setModalView] = useState('detail');
  const tabs = ['SEMUA', 'COMPLETED', 'ON PROGRESS', 'DITINJAU'];
  const filteredProjects =
    activeTab === 'SEMUA'
      ? PROJECTS
      : PROJECTS.filter((project) => project.status === activeTab);

  const handleOpenProject = (project) => {
    setSelectedProject(project);
    setModalView('detail');
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
    setModalView('detail');
  };

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
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              fee={project.fee}
              status={project.status}
              icon={project.icon}
              color={project.color}
              delay={0.1 + index * 0.1}
              onClick={() => handleOpenProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        view={modalView}
        onClose={handleCloseProject}
        onShowProgress={() => setModalView('progress')}
      />
    </div>
  );
}

