function ProfilSidebar({ setActiveTab, activePengaturanMenu, setActivePengaturanMenu, activePengaturanTab, setActivePengaturanTab }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[305px] shrink-0 self-start border-r-[3px] border-[#d0d0d0] bg-white px-7 py-12 lg:flex lg:flex-col">
      <a href="#" className="flex items-center gap-2" aria-label="KerjaRia" onClick={() => setActiveTab("Beranda")}>
        <img
          src="/kerjaria-logo-mark.svg"
          alt=""
          className="h-11 w-11 object-contain"
        />
        <span className="text-[40px] font-extrabold leading-none tracking-[-0.04em] text-[#075fd4]">
          KerjaRia
        </span>
      </a>

      <nav className="mt-16 flex flex-col gap-3">
        {/* Profil Menu Button */}
        <button
          type="button"
          onClick={() => setActivePengaturanMenu('profil')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'profil'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="user" className={`h-7 w-7 ${activePengaturanMenu === 'profil' ? 'text-white' : 'text-[#343434]'}`} />
          Profil
        </button>

        {/* Profil Sub Menu */}
        <div
          className={`flex flex-col ml-12 border-l-[3px] border-[#d0d0d0] pl-5 relative overflow-hidden transition-all duration-300 ease-in-out ${activePengaturanMenu === 'profil' ? 'max-h-[120px] opacity-100 py-2 mt-1 mb-2 gap-5' : 'max-h-0 opacity-0 py-0 mt-0 gap-0'
            }`}
        >
          <div
            className="absolute -left-[3px] w-[6px] h-6 rounded-r-lg bg-[#075fd4] transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{ top: activePengaturanTab === 'personalInfo' ? '10px' : '58px' }}
          />
          <button
            onClick={() => setActivePengaturanTab('personalInfo')}
            className={`text-[18px] font-extrabold text-left transition-colors duration-200 ${activePengaturanTab === 'personalInfo' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Personal info
          </button>
          <button
            onClick={() => setActivePengaturanTab('profileDisplay')}
            className={`text-[18px] font-extrabold text-left transition-colors duration-200 ${activePengaturanTab === 'profileDisplay' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
          >
            Profile Display
          </button>
        </div>

        {/* Tampilan Menu Button */}
        <button
          onClick={() => setActivePengaturanMenu('tampilan')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'tampilan'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="palette" className={`h-7 w-7 ${activePengaturanMenu === 'tampilan' ? 'text-white' : 'text-[#343434]'}`} />
          Tampilan
        </button>

        {/* Privasi Menu Button */}
        <button
          onClick={() => setActivePengaturanMenu('privasi')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'privasi'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="lock" className={`h-7 w-7 ${activePengaturanMenu === 'privasi' ? 'text-white' : 'text-[#343434]'}`} />
          Privasi & Data
        </button>

        {/* Wallet Menu Button */}
        <button
          onClick={() => setActivePengaturanMenu('wallet')}
          className={`flex h-[55px] items-center gap-4 rounded-[10px] px-5 text-left text-[22px] font-extrabold transition-all duration-200 ${activePengaturanMenu === 'wallet'
              ? 'bg-[#075fd4] text-white shadow-[0_7px_0_#034aa8] scale-[1.02]'
              : 'text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02]'
            }`}
        >
          <Icon name="credit-card" className={`h-7 w-7 ${activePengaturanMenu === 'wallet' ? 'text-white' : 'text-[#343434]'}`} />
          Wallet
        </button>
      </nav>

      <button
        type="button"
        onClick={() => { window.location.href = '/'; }}
        className="mt-auto flex h-[48px] items-center gap-5 text-[22px] font-extrabold text-[#343434] hover:bg-[#f0f0f0] hover:scale-[1.02] transition-all duration-200 rounded-[10px] p-2"
      >
        Logout
      </button>
    </aside>
  );
}

const themeOptions = [
  { value: 'light', label: 'Mode Terang', icon: '☀️' },
  { value: 'dark', label: 'Mode Gelap', icon: '🌙' },
  { value: 'system', label: 'Sesuai Sistem', icon: '💻' },
];

function TampilanContent({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = themeOptions.find(o => o.value === theme) || themeOptions[0];

  return (
    <div className="px-2">
      <h2 className="text-[32px] font-extrabold dark:text-white text-[#343434] mb-10">Tema</h2>

      <div className="flex justify-between items-center">
        <span className="text-[18px] font-bold text-gray-400 dark:text-gray-400">Mode tampilan</span>

        <div className="relative" ref={dropdownRef}>
          {/* Dropdown Trigger */}
          <button
            onClick={() => setOpen(!open)}
            className={`flex items-center gap-3 px-5 py-3 rounded-xl border-[2px] font-bold text-[15px] min-w-[200px] justify-between transition-all duration-200 shadow-sm ${open
                ? 'border-[#075fd4] shadow-[0_0_0_3px_rgba(7,95,212,0.15)]'
                : 'border-gray-200 dark:border-gray-600 hover:border-[#075fd4]'
              } bg-white dark:bg-[#1e293b] dark:text-gray-200 text-[#343434]`}
          >
            <span className="flex items-center gap-2.5">
              <span className="text-[18px]">{selected.icon}</span>
              <span>{selected.label}</span>
            </span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
              fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Dropdown Menu */}
          <div className={`absolute right-0 top-[calc(100%+8px)] min-w-[200px] bg-white dark:bg-[#1e293b] rounded-xl border-[2px] border-gray-100 dark:border-gray-600 shadow-[0_12px_40px_rgba(0,0,0,0.12)] overflow-hidden z-50 transition-all duration-200 origin-top ${open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
            }`}>
            {themeOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setTheme(opt.value); setOpen(false); }}
                className={`w-full flex items-center gap-3 px-5 py-3.5 text-left text-[15px] font-bold transition-all duration-150 ${theme === opt.value
                    ? 'bg-[#075fd4] text-white'
                    : 'text-[#343434] dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-[#334155]'
                  }`}
              >
                <span className="text-[18px]">{opt.icon}</span>
                <span>{opt.label}</span>
                {theme === opt.value && (
                  <svg className="w-5 h-5 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function WalletPanel() {
  return (
    <div className="flex flex-col md:flex-row gap-10 mt-6 px-4">
      {/* Saldo Card */}
      <div className="w-full md:w-[350px] shrink-0">
        <div className="bg-[#d4d4d4] rounded-[24px] p-8 flex flex-col justify-between h-[220px] shadow-sm relative overflow-hidden">
          <div>
            <span className="text-[16px] font-bold text-gray-600 flex items-baseline gap-2">
              Rp. <span className="text-[42px] font-extrabold text-[#343434] tracking-tight">0</span>
            </span>
          </div>
          <button className="w-full bg-[#343434] text-white py-3 rounded-xl font-bold text-[14px] flex items-center justify-center gap-2 hover:bg-[#202020] transition-colors shadow-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            Tarik Saldo
          </button>
        </div>
      </div>

      {/* Riwayat */}
      <div className="flex-1">
        <h2 className="text-[28px] font-extrabold text-[#343434] mb-4 border-b-2 border-gray-200 pb-2">Riwayat</h2>
        <div className="flex flex-col gap-4">
          
          {/* Item Riwayat */}
          <div className="bg-[#e5e5e5] rounded-[16px] p-4 flex gap-5 items-center">
            <div className="w-[80px] h-[80px] bg-gray-500 rounded-xl shrink-0"></div>
            <div className="flex-1 flex flex-col">
               <div className="flex justify-between items-start">
                  <span className="text-[20px] font-extrabold text-[#343434]">0</span>
                  <span className="text-[13px] font-bold text-gray-800">Selasa, 19 Mei 2026</span>
               </div>
               <span className="text-[14px] font-bold text-gray-800">Uang masuk</span>
               <span className="text-[14px] font-bold text-gray-800 mt-1">Pengirim: PT Bensin</span>
            </div>
          </div>

          <div className="bg-[#e5e5e5] rounded-[16px] p-4 flex gap-5 items-center">
            <div className="w-[80px] h-[80px] bg-gray-500 rounded-xl shrink-0"></div>
            <div className="flex-1 flex flex-col">
               <div className="flex justify-between items-start">
                  <span className="text-[20px] font-extrabold text-[#343434]">0</span>
                  <span className="text-[13px] font-bold text-gray-800">Selasa, 19 Mei 2026</span>
               </div>
               <span className="text-[14px] font-bold text-gray-800">Uang ditarik</span>
               <span className="text-[14px] font-bold text-gray-800 mt-1">Bank BCA</span>
            </div>
          </div>

          <div className="bg-[#e5e5e5] rounded-[16px] p-4 flex gap-5 items-center">
            <div className="w-[80px] h-[80px] bg-gray-500 rounded-xl shrink-0"></div>
            <div className="flex-1 flex flex-col">
               <div className="flex justify-between items-start">
                  <span className="text-[20px] font-extrabold text-[#343434]">0</span>
                  <span className="text-[13px] font-bold text-gray-800">Selasa, 19 Mei 2026</span>
               </div>
               <span className="text-[14px] font-bold text-gray-800">Uang masuk</span>
               <span className="text-[14px] font-bold text-gray-800 mt-1">Pengirim: PT Bensin</span>
            </div>
          </div>

          <div className="bg-[#e5e5e5] rounded-[16px] p-4 flex gap-5 items-center">
            <div className="w-[80px] h-[80px] bg-gray-500 rounded-xl shrink-0"></div>
            <div className="flex-1 flex flex-col">
               <div className="flex justify-between items-start">
                  <span className="text-[20px] font-extrabold text-[#343434]">0</span>
                  <span className="text-[13px] font-bold text-gray-800">Selasa, 19 Mei 2026</span>
               </div>
               <span className="text-[14px] font-bold text-gray-800">Uang masuk</span>
               <span className="text-[14px] font-bold text-gray-800 mt-1">Pengirim: PT Bensin</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ProfilPanel({ setActiveTab, activePengaturanMenu, activePengaturanTab, theme, setTheme }) {
  return (
    <section className="w-full flex flex-col h-full overflow-y-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b-[1.5px] border-[#d0d0d0] pb-4 mb-8 px-2">
        <button
          onClick={() => setActiveTab("Beranda")}
          className="w-10 h-10 rounded-xl bg-blue-100 text-[#075fd4] flex items-center justify-center hover:bg-[#075fd4] hover:text-white transition-all shadow-sm"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h1 className="text-[34px] font-extrabold text-[#075fd4] tracking-tight">
          {activePengaturanMenu === 'profil' ? 'Profil' : activePengaturanMenu === 'tampilan' ? 'Tampilan' : activePengaturanMenu === 'wallet' ? 'Wallet' : 'Privasi & Data'}
        </h1>
      </div>

      {activePengaturanMenu === 'wallet' ? (
        <WalletPanel />
      ) : activePengaturanMenu === 'tampilan' ? (
        <TampilanContent theme={theme} setTheme={setTheme} />
      ) : activePengaturanMenu === 'profil' ? (
        activePengaturanTab === 'personalInfo' ? (
          <div className="flex flex-col xl:flex-row gap-8 items-start px-2">
            {/* Left Card: Profile Display */}
            <div className="w-full xl:w-[320px] bg-[#075fd4] rounded-[24px] overflow-hidden flex flex-col relative shadow-lg shrink-0">
              <div className="bg-white px-4 pb-[72px] pt-4 rounded-b-[24px] relative z-10 shadow-[0_4px_10px_rgba(0,0,0,0.05)]">
                <div className="flex justify-between items-center text-[16px] font-extrabold text-[#075fd4]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#075fd4] text-white flex items-center justify-center shadow-inner text-[14px]">17</div>
                    <span>0 XP</span>
                  </div>
                </div>
                <div className="absolute left-1/2 -bottom-20 -translate-x-1/2 w-[160px] h-[160px] rounded-full border-[8px] border-[#ffd245] bg-gradient-to-br from-[#fff0a9] to-[#ffb1b1] overflow-hidden shadow-lg z-20">
                  <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
                </div>
              </div>

              <div className="pt-28 pb-8 px-6 flex flex-col items-center relative z-0">
                <div className="flex gap-2 w-full mt-2">
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border-[1.5px] border-white/40 text-white py-[7px] rounded-[10px] text-[13px] font-extrabold transition-colors">Ubah Avatar</button>
                  <button className="flex-1 bg-white/10 hover:bg-white/20 border-[1.5px] border-white/40 text-white py-[7px] rounded-[10px] text-[13px] font-extrabold transition-colors">Ubah Bingkai</button>
                </div>

                <h2 className="text-[25px] font-extrabold text-white text-center leading-tight mt-7">Pengguna Baru</h2>

                <div className="mt-3 flex items-center gap-2 bg-[#e08900] px-4 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative">
                  <div className="w-3 h-3 rounded-full bg-[#fcd34d] absolute left-3"></div>
                  <span className="ml-4">Junior Explorer</span>
                  <Icon name="edit" className="w-4 h-4 ml-1 opacity-80 cursor-pointer hover:opacity-100" />
                </div>

                <Icon name="robotHead" className="w-28 h-28 text-white mt-12 mb-4" />
              </div>
            </div>

            {/* Right Card: Form */}
            <div className="flex-1 w-full bg-white border-[1.5px] border-[#d0d0d0] rounded-[24px] p-8 shadow-sm">
              <h2 className="text-[22px] font-extrabold text-[#4a4a4a] mb-6">Personal Information</h2>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Nama Pengguna</label>
                  <input type="text" value="Nathcaw" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Nama Lengkap</label>
                  <input type="text" value="Pengguna Baru" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Jenis Kelamin</label>
                  <div className="flex gap-8 items-center mt-1">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="w-5 h-5 rounded-full border-2 border-[#075fd4] flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#075fd4]"></div>
                      </div>
                      <span className="text-[15px] font-bold text-gray-800">Laki-laki</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
                      </div>
                      <span className="text-[15px] font-bold text-gray-800">Perempuan</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 mt-2">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[16px] font-bold text-[#4a4a4a]">Tanggal Lahir</label>
                    <input type="text" value="9 Oktober 2008" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-[16px] font-bold text-[#4a4a4a]">No HP</label>
                    <input type="text" value="+62 812-3022-0688" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-[16px] font-bold text-[#4a4a4a]">Domisili</label>
                  <input type="text" value="Sidoarjo, Jawa Timur" readOnly className="w-full border-[1.5px] border-[#075fd4] rounded-full px-6 py-3 text-[16px] font-bold text-gray-800 outline-none" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#075fd4] rounded-[24px] p-3 flex flex-col xl:flex-row gap-3 min-h-[600px] mx-2 shadow-lg">
            {/* Left Blue Container */}
            <div className="w-full xl:w-[280px] flex flex-col items-center pt-8 pb-6 relative shrink-0 rounded-l-[20px]">
              <div className="w-full flex justify-between items-center text-[16px] font-extrabold text-white px-6">
                <span className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-[8px] bg-white text-[#075fd4] flex items-center justify-center shadow-sm text-[14px]">17</div>
                  <span>0 XP</span>
                </span>
              </div>

              <div className="w-[140px] h-[140px] rounded-full border-[6px] border-[#ffd245] bg-gradient-to-br from-[#fff0a9] to-[#ff8f8f] mt-8 shadow-md relative overflow-hidden">
                <img src="/avatar-placeholder.png" alt="Avatar" className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
              </div>

              <div className="flex gap-2 w-full px-6 mt-6">
                <button className="flex-1 bg-white/20 hover:bg-white/30 border border-white/40 text-white py-1.5 rounded-[8px] text-[12px] font-bold transition-colors">Ubah Avatar</button>
                <button className="flex-1 bg-white/20 hover:bg-white/30 border border-white/40 text-white py-1.5 rounded-[8px] text-[12px] font-bold transition-colors">Ubah Bingkai</button>
              </div>

              <h2 className="text-[22px] font-extrabold text-white text-center leading-tight mt-6">Pengguna Baru</h2>

              <div className="mt-3 flex items-center gap-2 bg-[#d97706] px-4 py-1.5 rounded-full text-white text-[13px] font-extrabold shadow-sm relative">
                <div className="w-3 h-3 rounded-full bg-[#fcd34d] absolute left-3"></div>
                <span className="ml-4">Junior Explorer</span>
                <Icon name="edit" className="w-4 h-4 ml-1 opacity-80 cursor-pointer hover:opacity-100" />
              </div>

              <div className="flex gap-6 mt-8 w-full justify-center px-4 relative z-10">
                <div className="w-[80px] bg-white rounded-t-[12px] rounded-b-[4px] shadow-md flex flex-col items-center pt-3 pb-5 relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-inner mb-1 bg-[#00c943]">
                    <Icon name="check" className="w-5 h-5" />
                  </div>
                  <strong className="text-black text-[22px] font-extrabold mt-1 leading-none">9</strong>
                  <span className="text-gray-500 text-[10px] font-bold text-center leading-tight mt-1">Job<br />Selesai</span>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 -z-10 rounded-sm shadow-[3px_3px_5px_rgba(0,0,0,0.05)]"></div>
                </div>

                <div className="w-[80px] bg-white rounded-t-[12px] rounded-b-[4px] shadow-md flex flex-col items-center pt-3 pb-5 relative">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-white shadow-inner mb-1 bg-[#d50bb9]">
                    <Icon name="star" className="w-5 h-5" />
                  </div>
                  <strong className="text-black text-[22px] font-extrabold mt-1 leading-none">3</strong>
                  <span className="text-gray-500 text-[10px] font-bold text-center leading-tight mt-1">Skill<br />Dipelajari</span>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45 -z-10 rounded-sm shadow-[3px_3px_5px_rgba(0,0,0,0.05)]"></div>
                </div>
              </div>

              <Icon name="robotHead" className="w-24 h-24 text-white mt-auto pt-6 opacity-90" />
            </div>

            {/* Right White Container */}
            <div className="flex-1 bg-white rounded-[20px] p-8 flex flex-col shadow-sm">
              <h2 className="text-[22px] font-extrabold text-[#4a4a4a] mb-6">Profile Display</h2>

              <h3 className="text-[17px] font-bold text-[#4a4a4a] mb-3">Skill yang dipelajari</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <div key={i} className="bg-white border-[1.5px] border-gray-200 rounded-[8px] p-2 flex items-center gap-3 relative shadow-sm hover:border-[#075fd4] transition-colors cursor-pointer">
                    <div className="w-9 h-9 rounded-md bg-orange-100 text-orange-500 flex items-center justify-center shrink-0">
                      <Icon name="code" className="w-5 h-5" />
                    </div>
                    <div className="text-[12px] font-extrabold text-black leading-tight">
                      Frontend<br />Developer
                    </div>
                    <div className="absolute top-1.5 right-1.5 text-[#5e239d]">
                      <svg width="10" height="14" viewBox="0 0 10 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L5 9L9 13V2C9 1.44772 8.55228 1 8 1H2C1.44772 1 1 1.44772 1 2V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-2">
                <button className="text-[13px] text-gray-500 hover:text-black font-bold">Show all</button>
              </div>

              <h3 className="text-[17px] font-bold text-[#4a4a4a] mb-3 mt-6">Hasil pekerjaan sebelumnya</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white border-[1.5px] border-gray-200 rounded-[8px] p-4 relative shadow-sm hover:border-[#075fd4] transition-colors cursor-pointer">
                    <h4 className="text-[16px] font-extrabold text-black">Frontend Developer</h4>
                    <p className="text-[13px] text-gray-500 font-bold mb-3 mt-0.5">Landing page web umkm</p>
                    <div className="flex items-center gap-1.5 text-[13px] font-extrabold text-gray-700">
                      <span className="text-yellow-400 text-[14px]">⭐</span> 4/5
                    </div>
                    <div className="absolute top-4 right-4 text-[#5e239d]">
                      <svg width="12" height="16" viewBox="0 0 10 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 13L5 9L9 13V2C9 1.44772 8.55228 1 8 1H2C1.44772 1 1 1.44772 1 2V13Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end mt-3">
                <button className="text-[13px] text-gray-500 hover:text-black font-bold">Show all</button>
              </div>
            </div>
          </div>
        )
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <h2 className="text-[24px] font-bold text-gray-400">Pengaturan Privasi & Data</h2>
        </div>
      )}
    </section>
  );
}
