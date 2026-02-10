type MotifItem = {
  title: string;
  description: string;
  image: string;
};

const motifList: MotifItem[] = [
  {
    title: "Motif Geometris",
    description:
      "Motif berbentuk pola geometris simetris yang memberi kesan rapi, modern, dan harmonis.",
    image: "/images/plafon/plafon-geometris.jpg",
  },
  {
    title: "Motif Kaligrafi",
    description:
      "Plafon dengan sentuhan kaligrafi Islami yang menambah nilai artistik dan spiritual.",
    image: "/images/plafon/plafon-kaligrafi.jpg",
  },
  {
    title: "Motif Ornamen Klasik",
    description:
      "Motif detail dengan ukiran khas klasik, cocok untuk masjid bergaya tradisional.",
    image: "/images/plafon/plafon-ornamen-klasik.jpg",
  },
  {
    title: "Motif Minimalis",
    description:
      "Desain sederhana dengan warna lembut, fokus pada kesan bersih dan elegan.",
    image: "/images/plafon/plafon-minimalis.jpg",
  },
  {
    title: "Motif Modern",
    description:
      "Perpaduan warna dan pola modern untuk bangunan masjid kontemporer.",
    image: "/images/plafon/plafon-modern.jpg",
  },
  {
    title: "Motif Custom",
    description:
      "Motif plafon sesuai permintaan, dapat disesuaikan dengan konsep interior masjid.",
    image: "/images/plafon/plafon-custom.jpg",
  },
];

const CellingMotif = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-secondary min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-4">
            Motif Plafon Masjid
          </h1>

          <p className="text-center mx-auto text-gray-600 max-w-2xl mb-12">
            Berbagai pilihan motif plafon masjid yang dirancang untuk
            memperindah interior dan memperkuat karakter bangunan.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {motifList.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />

                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CellingMotif;
