const AboutPage = () => {
  return (
    <section
      id="tentang-kami"
      className="bg-secondary py-12 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-10 max-w-3xl">
          <h2
            id="about-heading"
            className="text-2xl md:text-3xl font-bold text-gray-800"
          >
            Apa itu Dome Indonesia?
          </h2>
        </header>

        <article className="max-w-7xl space-y-6 text-gray-700 leading-relaxed">
          <p>
            Dome Indonesia adalah perusahaan yang berfokus pada desain,
            produksi, dan pemasangan kubah masjid dengan kualitas terbaik. Kami
            percaya bahwa setiap kubah bukan sekadar elemen arsitektur, tetapi
            juga simbol kemegahan, keindahan, dan spiritualitas yang menjadi
            pusat perhatian umat.
          </p>

          <p>
            Dengan pengalaman dan dedikasi tinggi kami menghadirkan kubah yang
            menggabungkan nilai estetika, kekuatan material, serta detail seni
            Islami yang penuh makna. Proses pengerjaan dilakukan oleh tenaga
            ahli berpengalaman, menggunakan material pilihan, serta teknologi
            modern, sehingga setiap kubah yang kami hasilkan memiliki standar
            mutu tinggi, tahan lama, dan bernilai keindahan tinggi.
          </p>

          <p>
            Sejalan dengan slogan kami{" "}
            <span className="font-semibold">
              “SETIAP KUBAH YANG KAMI BANGUN, MENJADI AMANAH YANG KAMI JAGA”
            </span>
            , kami berkomitmen untuk menjaga kepercayaan setiap klien. Bagi
            kami, membangun kubah bukan hanya soal konstruksi, tetapi juga
            tanggung jawab moral dan spiritual.
          </p>

          <p>
            Dome Indonesia hadir untuk memberikan karya terbaik, agar setiap
            kubah menjadi warisan berharga yang menambah keindahan dan
            keberkahan rumah ibadah di seluruh Indonesia.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
