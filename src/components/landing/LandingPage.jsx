import React from 'react';
import { motion } from 'framer-motion';

const blue = "#075fd4";

const jobCards = Array.from({ length: 7 }, () => ({
  title: "Programmer",
  description: "Menyusun banyak barisan code",
}));

const testimonials = [
  {
    quote: "Sangat membantu agar cepat untuk mendapatkan pekerjaan",
    name: "Raffi Setiawan Putra",
    role: "Project Manager",
    avatar: "from-[#ffd568] to-[#f47b6b]",
  },
  {
    quote: "Kemampuan diasah secara maksimal",
    name: "Evan Satria Mahardika",
    role: "User Interface Designer",
    avatar: "from-[#ff8078] to-[#ff3e68]",
  },
  {
    quote: "Menurut saya web ini sangat membantu para fresh graduate",
    name: "Atha Fakhril Arkana",
    role: "Frontend Developer",
    avatar: "from-[#1c315c] to-[#37b7ff]",
  },
];

const faqs = [
  {
    question: "Mengapa Tugas di SKOMDA banyak?",
    answer:
      "Karena tugas sekolah dibuat untuk melatih pemahaman, kedisiplinan, tanggung jawab, dan supaya siswa terbiasa belajar serta mengingat materi yang sudah diajarkan di kelas.",
    open: true,
  },
  { question: "Apa tujuan hidup di dunia ini?" },
  { question: "Bagaimana cara hilangkan barang bukti?" },
  { question: "Ini arahnya kemana?" },
];

function LogoMark() {
  return (
    <img
      src="/kerjaria-logo-mark.svg"
      alt=""
      aria-hidden="true"
      width="404"
      height="404"
      className="h-[30px] w-[30px] object-contain sm:h-[34px] sm:w-[34px]"
    />
  );
}

function Mascot() {
  return (
    <img
      src="https://api.builder.io/api/v1/image/assets/TEMP/618988598703904add290e75cbfbfb0ef25b3237?width=1002"
      alt="Robot KerjaRia memegang buku dan lampu"
      width="501"
      height="685"
      className="h-auto w-full max-w-[315px] object-contain sm:max-w-[400px] lg:max-w-[455px]"
    />
  );
}

function FeatureRobot({ variant = "plain" }) {
  const robotAssets = {
    skill: {
      src: "/asah-skill-robot.svg",
      width: 326,
      height: 417,
      alt: "Robot KerjaRia membawa kaca pembesar untuk Asah Skill",
      className: "max-w-[200px] sm:max-w-[235px]",
    },
    quest: {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/b60b93c103244f5109f896297eefd7e42de75bbb?width=770",
      width: 385,
      height: 472,
      alt: "Robot KerjaRia membawa pensil untuk Selesaikan Quest",
      className: "max-w-[215px] sm:max-w-[250px]",
    },
    level: {
      src: "/naik-level-robot.svg",
      width: 340,
      height: 482,
      alt: "Robot KerjaRia naik level",
      className: "max-w-[205px] sm:max-w-[240px]",
    },
    work: {
      src: "/siap-kerja-robot.svg",
      width: 395,
      height: 556,
      alt: "Robot KerjaRia membawa tas untuk Siap Kerja",
      className: "max-w-[230px] sm:max-w-[270px]",
    },
  };

  const asset = robotAssets[variant] ?? robotAssets.skill;

  return (
    <img
      src={asset.src}
      alt={asset.alt}
      width={asset.width}
      height={asset.height}
      className={`h-auto w-full object-contain ${asset.className}`}
    />
  );
}

function FeatureStep({ title, children, variant, reverse }) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="grid items-center gap-6 md:grid-cols-2 md:gap-12"
    >
      <div
        className={`flex justify-center ${
          reverse ? "md:order-2 md:justify-start" : "md:justify-end"
        }`}
      >
        <FeatureRobot variant={variant} />
      </div>
      <div
        className={`mx-auto max-w-[310px] text-center md:mx-0 ${
          reverse ? "md:order-1 md:text-right" : "md:text-left"
        }`}
      >
        <h2 className="text-[42px] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#075fd4] sm:text-[56px] lg:text-[64px]">
          {title}
        </h2>
        <p className="mt-3 text-[13px] font-semibold leading-[1.2] tracking-[0px] text-[#20242a] lg:text-[15px]">
          {children}
        </p>
      </div>
    </motion.section>
  );
}

function TestimonialCard({ quote, name, role, avatar }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="flex min-h-[145px] flex-col justify-between rounded-[7px] border border-[#075fd4] bg-white px-5 py-5 shadow-[0_5px_0_0_#075fd4]"
    >
      <p className="text-[15px] font-semibold leading-[1.02] tracking-[0px] text-[#20242a]">
        &ldquo;{quote}&rdquo;
      </p>

      <div className="mt-7 flex items-center gap-2.5">
        <div
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br ${avatar} text-[14px] font-semibold text-white ring-2 ring-white shadow-[0_0_0_1px_rgba(7,95,212,0.35)]`}
        >
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="text-[8px] font-semibold leading-none tracking-[0px] text-[#20242a] sm:text-[10px]">
            {name}
          </h3>
          <p className="mt-1 text-[6px] font-semibold leading-none tracking-[0px] text-[#4b5563] sm:text-[8px]">
            {role}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function FaqRobotBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 500 500"
        aria-hidden="true"
        className="absolute bottom-[-120px] right-[-140px] w-[330px] opacity-[0.22] md:bottom-[-110px] md:right-[-120px] md:w-[430px] lg:bottom-[-90px] lg:right-[-70px] lg:w-[520px]"
      >
        <g fill="#8bb8f5">
          <ellipse
            cx="180"
            cy="90"
            rx="26"
            ry="90"
            transform="rotate(-38 180 90)"
          />
          <ellipse cx="285" cy="55" rx="24" ry="88" />

          <g transform="rotate(-15 260 250)">
            <rect x="120" y="135" width="290" height="230" rx="110" />
            <rect x="95" y="220" width="38" height="95" rx="19" />
            <rect x="397" y="220" width="38" height="95" rx="19" />
          </g>

          <rect
            x="210"
            y="245"
            width="34"
            height="92"
            rx="17"
            transform="rotate(-18 210 245)"
          />
          <rect
            x="305"
            y="225"
            width="34"
            height="92"
            rx="17"
            transform="rotate(-18 305 225)"
          />
        </g>
      </svg>
    </div>
  );
}

function FaqItem({ question, answer, open }) {
  return (
    <article
      className={`relative z-10 rounded-[22px] bg-white text-[#20242a] ${
        open ? "px-9 py-6" : "px-9 py-4"
      }`}
    >
      <div className="flex items-start justify-between gap-5">
        <div>
          <h3 className="text-[18px] font-semibold leading-[1.1] tracking-[0px]">
            {question}
          </h3>
          {open && (
            <p className="mt-5 max-w-[455px] text-[12px] font-semibold leading-[1.05] tracking-[0px] text-[#4a4f58]">
              {answer}
            </p>
          )}
        </div>

        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#075fd4] text-white">
          <span
            className={`block h-3 w-3 border-b-[4px] border-r-[4px] border-white ${
              open ? "-translate-y-0 rotate-[225deg]" : "-translate-y-1 rotate-45"
            }`}
          />
        </span>
      </div>
    </article>
  );
}

function FooterRobot() {
  return (
    <svg
      viewBox="0 0 210 190"
      role="img"
      aria-label="KerjaRia robot logo placeholder"
      className="h-auto w-full max-w-[190px]"
    >
      <defs>
        <linearGradient id="footerRobotBlue" x1="40" x2="170" y1="18" y2="172">
          <stop offset="0" stopColor="#0874f2" />
          <stop offset="0.6" stopColor="#075fd4" />
          <stop offset="1" stopColor="#04449d" />
        </linearGradient>
      </defs>
      <g transform="translate(15 0)">
        <path
          d="M72 72C60 31 64 5 73 5c10 0 25 36 19 72Z"
          fill="url(#footerRobotBlue)"
        />
        <path
          d="M127 72c-2-40 12-67 22-65 10 1 12 37-5 72Z"
          fill="url(#footerRobotBlue)"
        />
        <path
          d="M23 122c0-43 34-76 82-76 47 0 82 33 82 76v11c0 31-20 50-54 51l-75 2c-24 1-39-18-38-49Z"
          fill="url(#footerRobotBlue)"
        />
        <rect x="10" y="104" width="22" height="48" rx="10" fill={blue} />
        <rect x="178" y="103" width="22" height="48" rx="10" fill={blue} />
        <path
          d="M58 89c13 12 39 15 68 12 18-2 31-8 41-18 18 16 26 34 24 55-3 25-20 37-52 39l-75 1c-28 0-43-14-42-39 1-21 14-42 36-50Z"
          fill="#fff"
        />
        <path
          d="M58 89c13 12 39 15 68 12 18-2 31-8 41-18 18 16 26 34 24 55-3 25-20 37-52 39l-75 1c-28 0-43-14-42-39 1-21 14-42 36-50Z"
          fill="none"
          stroke={blue}
          strokeLinejoin="round"
          strokeWidth="7"
        />
        <rect x="72" y="120" width="14" height="35" rx="7" fill={blue} />
        <rect x="126" y="120" width="14" height="35" rx="7" fill={blue} />
      </g>
    </svg>
  );
}

function JobCard({ title, description, isMore, index = 0 }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 15px 0 -3px #075fd4, 0 20px 25px rgba(7,95,212,0.2)" }}
      className="flex min-h-[118px] items-start gap-4 rounded-[10px] border-2 border-[#075fd4] bg-white px-6 py-5 shadow-[0_10px_0_-3px_#075fd4,0_12px_18px_rgba(7,95,212,0.16)] cursor-pointer"
    >
      {!isMore && (
        <span className="mt-1 h-[18px] w-[18px] shrink-0 rounded-full bg-[#67c7ff]" />
      )}
      <div className={isMore ? "flex min-h-[70px] items-center pl-4" : ""}>
        <h3 className="text-[22px] font-extrabold leading-[1.1] tracking-[0px] text-[#343434]">
          {title}
        </h3>
        {description && (
          <p className="mt-4 max-w-[155px] text-[13px] font-semibold leading-[1.55] tracking-[0px] text-[#3f4752]">
            {description}
          </p>
        )}
      </div>
    </motion.article>
  );
}

export default function LandingPage({ onStartQuest, onDaftar, onLogin }) {
  return (
    <main className="min-h-screen bg-white font-['Plus_Jakarta_Sans',sans-serif] tracking-[0px] text-[#20242a]">
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap');
          html, body, #root { margin: 0; min-height: 100%; background: #ffffff; }
          body { overflow-x: hidden; }`}
      </style>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_3px_12px_rgba(0,0,0,0.08)] transition-shadow">
        <nav className="flex h-[60px] w-full items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-1.5" aria-label="KerjaRia">
            <LogoMark />
            <span className="text-[26px] font-extrabold leading-none tracking-[-0.02em] text-[#075fd4] sm:text-[34px]">
              KerjaRia
            </span>
          </a>

          <div className="flex items-center gap-3">
            <button 
              onClick={onLogin}
              className="h-[34px] min-w-[80px] rounded-[6px] bg-[#075fd4] px-5 text-[8px] font-semibold uppercase tracking-[0px] text-white shadow-[0_8px_18px_rgba(7,95,212,0.35)] hover:bg-[#064ca8] transition-colors"
            >
              Login
            </button>
            <button 
              onClick={onDaftar}
              className="h-[34px] min-w-[80px] rounded-[6px] border border-[#075fd4] px-5 text-[8px] font-semibold uppercase tracking-[0px] text-[#075fd4] hover:bg-[#075fd4] hover:text-white transition-colors"
            >
              Daftar
            </button>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-8 px-5 pb-12 pt-8 sm:px-8 md:grid-cols-[1fr_1fr] md:gap-14 md:pb-14 md:pt-7 lg:px-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <Mascot />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col items-center text-center md:items-start md:pt-12 md:text-left"
        >
          <h1 className="max-w-[492px] text-[38px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#20242a] sm:text-[46px] lg:text-[54px] lg:max-w-[600px] xl:text-[60px]">
            Mulai Pengalaman
            <span className="block text-[#075fd4]">Kerja Pertamamu</span>
            dari Sekarang.
          </h1>

          <div className="mt-16 flex w-full max-w-[230px] flex-col gap-3 md:ml-8 lg:max-w-[280px]">
            <button
              type="button"
              onClick={onStartQuest}
              className="h-[38px] lg:h-[46px] rounded-[7px] bg-[#075fd4] text-[9px] lg:text-[12px] font-semibold tracking-[0px] text-white shadow-[0_8px_16px_rgba(7,95,212,0.36)] hover:bg-[#064ca8] hover:shadow-[0_10px_20px_rgba(7,95,212,0.4)] transition-all"
            >
              Mulai Quest Sekarang
            </button>
            <button onClick={onLogin} className="h-[32px] lg:h-[40px] rounded-[6px] border border-[#075fd4] text-[9px] lg:text-[12px] font-semibold tracking-[0px] text-[#075fd4] hover:bg-blue-50 transition-colors">
              Sudah Punya Akun
            </button>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto w-full max-w-[1060px] px-5 pb-28 pt-20 sm:px-8 md:pt-20 lg:px-0">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[680px] lg:max-w-[800px] text-center text-[46px] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#075fd4] sm:text-[64px] lg:text-[72px]"
        >
          Berbagai Bidang Pekerjaan
        </motion.h2>

        <div className="mt-24 grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {jobCards.map((card, index) => (
            <JobCard
              key={`${card.title}-${index}`}
              title={card.title}
              description={card.description}
              index={index}
            />
          ))}
          <JobCard title="+24 Bidang lainnya" isMore index={7} />
        </div>

        <div className="mt-14 flex justify-center">
          <button className="flex h-[62px] items-center gap-5 rounded-[7px] bg-[#075fd4] px-9 text-[20px] font-extrabold tracking-[0px] text-white shadow-[0_8px_0_#044ca8]">
            Eksplor lebih banyak bidang lainnya
            <span aria-hidden="true" className="text-[34px] leading-none">
              &rarr;
            </span>
          </button>
        </div>
      </section>

      <section className="w-full bg-[#075fd4] text-white">
        <div className="mx-auto grid min-h-[110px] w-full max-w-[980px] grid-cols-1 items-center gap-6 px-5 py-7 text-center sm:grid-cols-3 sm:gap-0 sm:py-0">
          <div>
            <strong className="block text-[40px] font-semibold leading-none tracking-[0px] sm:text-[44px]">
              19jt
            </strong>
            <span className="mt-2 block text-[14px] font-semibold tracking-[0px]">Micro-Work</span>
          </div>
          <div>
            <strong className="block text-[40px] font-semibold leading-none tracking-[0px] sm:text-[44px]">
              1jt+
            </strong>
            <span className="mt-2 block text-[14px] font-semibold tracking-[0px]">
              Course Tersedia
            </span>
          </div>
          <div>
            <strong className="block text-[40px] font-semibold leading-none tracking-[0px] sm:text-[44px]">
              17jt+
            </strong>
            <span className="mt-2 block text-[14px] font-semibold tracking-[0px]">
              Peserta Terdaftar
            </span>
          </div>
        </div>
      </section>

      <section className="border-t-[5px] border-[#075fd4] bg-white">
        <div className="mx-auto flex w-full max-w-[760px] flex-col gap-14 px-5 py-12 sm:px-8 md:gap-7 md:py-10 lg:px-0">
          <FeatureStep title="Asah Skill" variant="skill" reverse>
            Ikuti modul interaktif yang dirancang khusus untuk kebutuhan industri
            saat ini. Kumpulkan poin dari setiap materi yang kamu selesaikan.
          </FeatureStep>

          <FeatureStep title="Selesaikan Quest" variant="quest">
            Terapkan teorimu dengan mengerjakan proyek mini (Quest) yang
            mensimulasikan tantangan nyata di dunia kerja.
          </FeatureStep>

          <FeatureStep title="Naik Level" variant="level" reverse>
            Dapatkan lencana pencapaian, naikkan level profilmu, dan buat
            portofoliomu dilirik oleh para rekruter.
          </FeatureStep>

          <FeatureStep title="Siap Kerja" variant="work">
            Gunakan profil level tinggimu untuk melamar pekerjaan nyata dari
            berbagai mitra perusahaan kami.
          </FeatureStep>
        </div>
      </section>

      <section className="bg-white px-5 pb-28 pt-5 sm:px-8 md:pb-32 md:pt-4">
        <div className="mx-auto w-full max-w-[780px]">
          <h2 className="text-center text-[34px] font-semibold leading-none tracking-[0px] text-[#075fd4] sm:text-[42px]">
            What are they say?
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-t-[14px] bg-[#075fd4] px-5 pb-16 pt-14 text-white sm:px-8 md:pb-24">
        <FaqRobotBackground />
        <div className="relative z-10 mx-auto w-full max-w-[660px]">
          <h2 className="text-center text-[40px] font-semibold leading-none tracking-[0px] sm:text-[46px]">
            FAQ&rsquo;S
          </h2>

          <div className="mt-8 flex flex-col gap-5">
            {faqs.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[550px] overflow-hidden bg-white px-5 pt-[110px] sm:min-h-[650px] lg:min-h-[750px] sm:px-8 sm:pt-[125px]">
        <div className="relative z-20 mx-auto flex w-full max-w-[720px] flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[560px] lg:max-w-[700px] text-[38px] font-extrabold tracking-[-0.02em] leading-[1.08] text-[#075fd4] sm:text-[56px] lg:text-[64px]"
          >
            Banyak Pengalaman
            <span className="block">bersama KerjaRia</span>
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            type="button"
            onClick={onStartQuest}
            className="mt-10 h-[42px] lg:h-[50px] w-full max-w-[235px] lg:max-w-[280px] rounded-[7px] bg-[#075fd4] text-[10px] lg:text-[13px] font-semibold tracking-[0px] text-white shadow-[0_9px_15px_rgba(7,95,212,0.36)] hover:bg-[#064ca8] hover:scale-105 transition-all"
          >
            Mulai Quest Sekarang
          </motion.button>
        </div>

        <svg
          viewBox="0 0 1440 310"
          preserveAspectRatio="none"
          aria-hidden="true"
          className="absolute bottom-[80px] left-0 z-0 h-[235px] w-full sm:h-[290px]"
        >
          <path
            d="M0 86H384C459 86 443 201 547 260C637 311 803 311 893 260C997 201 981 86 1056 86H1440V310H0Z"
            fill="#075fd4"
          />
        </svg>

        <div className="absolute bottom-[144px] left-1/2 z-10 w-[150px] -translate-x-1/2 sm:bottom-[160px] sm:w-[195px]">
          <FooterRobot />
        </div>

        <footer className="absolute bottom-0 left-0 z-20 w-full border-t border-[#3a83df] bg-[#075fd4] text-white">
          <div className="mx-auto flex min-h-[80px] w-full max-w-[1370px] flex-col items-center justify-between gap-4 px-8 py-5 text-center sm:flex-row sm:text-left">
            <strong className="text-[18px] font-semibold leading-none tracking-[0px]">
              KerjaRia
            </strong>
            <p className="text-[10px] font-semibold leading-none tracking-[0px]">
              &copy; 2026 KerjaRia - Team Aku isi bensin Kita Coba lagi.
              Empowering Students &amp; UMKM.
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

