import React from "react";

const MISSION_DETAILS = {
  1: {
    title: "Dasar Frontend Developer",
    sections: [
      { name: "Dasar HTML", items: [
        { name: "Struktur HTML", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Dasar CSS", items: [
        { name: "Struktur CSS", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  2: {
    title: "Dasar UI/UX Designer",
    sections: [
      { name: "Pengenalan UI/UX", items: [
        { name: "Prinsip Desain", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Wireframing", items: [
        { name: "Tools Wireframe", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  3: {
    title: "Dasar Backend Developer",
    sections: [
      { name: "Node.js Dasar", items: [
        { name: "Setup Environment", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Express.js", items: [
        { name: "Routing Dasar", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  4: {
    title: "Dasar Data Analyst",
    sections: [
      { name: "Python Dasar", items: [
        { name: "Variabel & Tipe Data", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Pandas", items: [
        { name: "DataFrame Dasar", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  5: {
    title: "Dasar Mobile Developer",
    sections: [
      { name: "Flutter Setup", items: [
        { name: "Install SDK", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Widget Dasar", items: [
        { name: "Stateless Widget", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  6: {
    title: "Dasar Cyber Security",
    sections: [
      { name: "Keamanan Jaringan", items: [
        { name: "Konsep Keamanan", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Firewall", items: [
        { name: "Konfigurasi Firewall", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  7: {
    title: "Dasar Cloud Engineer",
    sections: [
      { name: "Linux Dasar", items: [
        { name: "Terminal Command", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Nginx", items: [
        { name: "Setup Web Server", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  8: {
    title: "Dasar Game Developer",
    sections: [
      { name: "Unity Dasar", items: [
        { name: "Interface Unity", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "Scripting C#", items: [
        { name: "Gerakan Karakter", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  9: {
    title: "Dasar DevOps Engineer",
    sections: [
      { name: "Docker Dasar", items: [
        { name: "Container & Image", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "CI/CD", items: [
        { name: "GitHub Actions", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
  10: {
    title: "Dasar Product Manager",
    sections: [
      { name: "Product Thinking", items: [
        { name: "User Research", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
      { name: "PRD Writing", items: [
        { name: "Struktur PRD", type: "materi" },
        { name: "Quiz", type: "quiz" },
        { name: "Assignment", type: "assignment" },
      ]},
    ]
  },
};

const TYPE_STYLES = {
  materi: { bg: "bg-[#fff1f2]", text: "text-[#e11d48]", icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6H6zm7 1.5L18.5 9H13V3.5zM8 12h8v2H8v-2zm0 4h8v2H8v-2z"/></svg>
  )},
  quiz: { bg: "bg-[#eff6ff]", text: "text-[#2563eb]", icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm4 2v2h8V6H8zm0 4v2h8v-2H8zm0 4v2h5v-2H8z"/></svg>
  )},
  assignment: { bg: "bg-[#fdf2f8]", text: "text-[#db2777]", icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
  )},
};

export default function MissionDetailModal({ mission, onClose }) {
  const details = MISSION_DETAILS[mission?.id];
  if (!mission || !details) return null;

  const totalItems = details.sections.reduce((a, s) => a + s.items.length, 0);
  const completedItems = Math.round((mission.progress / 100) * totalItems);
  let counter = 0;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="relative max-w-[600px] w-full max-h-[90vh] flex flex-col animate-[fadeInScale_0.25s_ease-out]" onClick={(e) => e.stopPropagation()}>
        <style>{`@keyframes fadeInScale{from{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}`}</style>
        <span className="text-white/60 text-[12px] sm:text-[13px] font-bold mb-1 sm:mb-2 pl-1 hidden sm:block">Detail Misi</span>
        <div className="bg-white rounded-[16px] sm:rounded-[20px] border-[3px] sm:border-[4px] border-[#22c55e] overflow-hidden flex flex-col max-h-[85vh] sm:max-h-[80vh]">
          {/* Header */}
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-2 sm:gap-3 border-b border-gray-100 shrink-0">
            <button onClick={onClose} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#075fd4] text-white flex items-center justify-center hover:bg-[#064ca8] transition-colors shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-[5px] sm:rounded-[6px] bg-[#075fd4] text-white flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
              </div>
              <span className="text-[16px] sm:text-[18px] font-extrabold text-[#075fd4]">KerjaRia</span>
            </div>
          </div>

          {/* Content */}
          <div className="overflow-y-auto px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-4 sm:gap-5">
            <h2 className="text-[14px] sm:text-[15px] font-bold text-gray-500 border-b border-gray-200 pb-2 sm:pb-3">{details.title}</h2>

            {details.sections.map((section, sIdx) => (
              <div key={sIdx} className="border border-gray-200 rounded-[12px] sm:rounded-[16px] overflow-hidden bg-white">
                <h3 className="text-[18px] sm:text-[20px] font-extrabold text-gray-800 px-4 sm:px-5 pt-3 sm:pt-4 pb-2">{section.name}</h3>
                <div className="flex flex-col">
                  {section.items.map((item, iIdx) => {
                    const idx = counter++;
                    const done = idx < completedItems;
                    const style = TYPE_STYLES[item.type];
                    return (
                      <div key={iIdx} className="flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-3 border-t border-gray-50">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-[6px] sm:rounded-[8px] ${style.bg} ${style.text} flex items-center justify-center shrink-0`}>
                          {style.icon}
                        </div>
                        <span className="flex-1 text-[13px] sm:text-[15px] font-bold text-gray-700">{item.name}</span>
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-[#dcfce7]" : "bg-gray-100"}`}>
                          {done ? (
                            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                          ) : (
                            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
