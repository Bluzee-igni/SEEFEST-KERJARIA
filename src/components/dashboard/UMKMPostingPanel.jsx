import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function UMKMPostingPanel({ onBack }) {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState(['Javascript', 'Figma', 'Laravel']);

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  return (
    <div className="flex flex-col h-full bg-[#fafafa]">
      {/* Header */}
      <header className="h-[72px] border-b border-gray-200 px-8 flex items-center gap-4 bg-white shrink-0">
        <button 
          onClick={onBack}
          className="w-10 h-10 rounded-xl bg-blue-50 text-[#075fd4] flex items-center justify-center hover:bg-[#075fd4] hover:text-white transition-all shadow-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
        </button>
        <h1 className="text-[24px] font-extrabold text-[#075fd4]">Posting</h1>
      </header>

      {/* Form Area */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="max-w-[800px] mx-auto bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
          
          <div className="flex flex-col gap-6">
            {/* Jenis Project */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Jenis Project</label>
              <div className="relative">
                <select className="w-full h-[50px] rounded-[14px] border-2 border-blue-200 bg-white px-5 text-[14px] font-bold text-gray-700 outline-none focus:border-[#075fd4] focus:ring-4 focus:ring-blue-50 transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Pilih Bidang</option>
                  <option value="web">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="video">Video Editing</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/></svg>
                </div>
              </div>
            </div>

            {/* Judul */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Judul</label>
              <input 
                type="text" 
                placeholder="Masukkan Judul"
                className="w-full h-[50px] rounded-[14px] border-2 border-blue-200 bg-white px-5 text-[14px] font-bold text-gray-700 outline-none focus:border-[#075fd4] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-gray-400 placeholder:font-semibold"
              />
            </div>

            {/* Deskripsi */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Deskripsi singkat</label>
              <textarea 
                placeholder="Masukkan deskripsi.."
                className="w-full h-[120px] rounded-[14px] border-2 border-blue-200 bg-white p-5 text-[14px] font-bold text-gray-700 outline-none focus:border-[#075fd4] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-gray-400 placeholder:font-semibold resize-none"
              ></textarea>
            </div>

            {/* Upload Brief */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Upload Brief</label>
              <div className="w-full h-[80px] rounded-[14px] border-2 border-dashed border-blue-300 bg-blue-50/50 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 hover:border-[#075fd4] transition-all group">
                <span className="text-[12px] font-extrabold text-blue-600 group-hover:text-[#075fd4] transition-colors">Upload PDF</span>
                <svg className="w-5 h-5 text-blue-400 mt-1 group-hover:text-[#075fd4] transition-colors" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"></path></svg>
              </div>
            </div>

            {/* Fee */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Fee</label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 font-extrabold">Rp</span>
                <input 
                  type="number" 
                  placeholder="Masukkan nominal"
                  className="w-full h-[50px] rounded-[14px] border-2 border-blue-200 bg-white pl-12 pr-5 text-[14px] font-bold text-gray-700 outline-none focus:border-[#075fd4] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-gray-400 placeholder:font-semibold"
                />
              </div>
            </div>

            {/* Deadline */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Deadline</label>
              <div className="relative">
                <input 
                  type="date" 
                  className="w-full h-[50px] rounded-[14px] border-2 border-blue-200 bg-white px-5 pr-12 text-[14px] font-bold text-gray-700 outline-none focus:border-[#075fd4] focus:ring-4 focus:ring-blue-50 transition-all appearance-none"
                />
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-blue-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </div>
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="block text-[14px] font-extrabold text-[#343434] mb-2">Masukkan tag</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Ketik tag lalu Enter..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  className="w-full h-[50px] rounded-[14px] border-2 border-blue-200 bg-white pl-10 pr-5 text-[14px] font-bold text-gray-700 outline-none focus:border-[#075fd4] focus:ring-4 focus:ring-blue-50 transition-all placeholder:text-gray-400 placeholder:font-semibold"
                />
              </div>
              
              <div className="min-h-[100px] mt-3 rounded-[14px] border-2 border-blue-200 bg-white p-4 flex flex-wrap gap-2 content-start">
                <AnimatePresence>
                  {tags.map(tag => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="bg-blue-100 text-[#075fd4] px-3 py-1.5 rounded-full text-[12px] font-extrabold flex items-center gap-1.5"
                    >
                      {tag}
                      <button 
                        onClick={() => removeTag(tag)}
                        className="w-4 h-4 rounded-full bg-blue-200 flex items-center justify-center hover:bg-[#075fd4] hover:text-white transition-colors"
                      >
                        <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </button>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {tags.length === 0 && <p className="text-[12px] font-semibold text-gray-400 italic">Belum ada tag ditambahkan</p>}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end mt-4">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#075fd4] text-white px-12 h-[50px] rounded-xl text-[16px] font-extrabold shadow-[0_6px_0_#044ca8] hover:shadow-[0_4px_0_#044ca8] hover:translate-y-[2px] transition-all"
              >
                POSTING
              </motion.button>
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}
