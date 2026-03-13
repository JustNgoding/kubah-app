import React from "react";

const WelcomePage: React.FC = () => {
  return (
    <section className="bg-secondary" aria-labelledby="hero-heading">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 px-6 md:px-12 py-12 md:py-24">
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h1
            id="hero-heading"
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight"
          >
            <span className="text-primary inter font-extrabold uppercase">
              Dome Indonesia
            </span>{" "}
            - Produsen Kubah Masjid{" "}
            <span className="text-primary">Berkualitas dan Tahan Lama</span>
          </h1>

          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Dome Indonesia menyediakan berbagai jenis kubah masjid seperti kubah
            enamel, galvalum, dan stainless dengan desain indah, konstruksi
            kuat, serta material berkualitas untuk memperindah bangunan masjid
            Anda.
          </p>

          <nav
            className="flex flex-col sm:flex-row gap-4"
            aria-label="Hero actions"
          >
            <a
              href="#produk"
              className="px-8 py-3 text-center bg-primary text-white rounded-lg font-semibold transition hover:bg-primary/20 hover:text-primary hover:border-2"
            >
              Jelajahi Produk
            </a>

            <a
              href="#kontak-kami"
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold text-center transition hover:bg-blue-50"
            >
              Hubungi Kami
            </a>
          </nav>
        </div>

        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
          <figure className="w-full max-w-md">
            <img
              src="/assets/images/banner/banner2.jpeg"
              alt="Kubah masjid enamel berkualitas produksi Dome Indonesia"
              loading="lazy"
              width="600"
              height="400"
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default WelcomePage;
