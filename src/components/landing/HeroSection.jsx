export default function HeroSection() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-10 py-4 border-b">
        <h1 className="text-2xl font-bold text-blue-600">
          KerjaRia
        </h1>

        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>

          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg">
            Daftar
          </button>
        </div>
      </nav>

      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20">
        <div>
          <img
            src="https://placehold.co/400x400"
            alt="Mascot"
            className="w-80"
          />
        </div>

        <div className="max-w-lg">
          <h1 className="text-5xl font-bold leading-tight">
            Mulai Pengalaman{" "}
            <span className="text-blue-600">
              Kerja Pertamamu
            </span>{" "}
            dari Sekarang.
          </h1>

          <div className="mt-8 flex flex-col gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
              Mulai Dapat Pekerjaan
            </button>

            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl">
              Sudah Punya Akun
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}