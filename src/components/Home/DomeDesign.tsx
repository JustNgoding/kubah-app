type DesignItem = {
  title: string;
  description: string;
  image: string;
};

const designList: DesignItem[] = [
  {
    title: "Desain Kubah Modern",
    description:
      "Mengusung gaya modern dengan garis bersih dan warna minimal, cocok untuk masjid kontemporer.",
    image: "/images/design/design-modern.jpg",
  },
  {
    title: "Desain Kubah Klasik",
    description:
      "Desain tradisional dengan nuansa Timur Tengah dan detail yang kaya akan ornamen.",
    image: "/images/design/design-klasik.jpg",
  },
  {
    title: "Desain Kubah Minimalis",
    description:
      "Fokus pada bentuk sederhana dan fungsi, tanpa mengorbankan estetika.",
    image: "/images/design/design-minimalis.jpg",
  },
  {
    title: "Desain Kubah Ornamen",
    description:
      "Menonjolkan motif ukiran dan detail artistik untuk kesan megah dan sakral.",
    image: "/images/design/design-ornamen.jpg",
  },
  {
    title: "Desain Kubah Custom",
    description:
      "Desain khusus sesuai permintaan klien, menyesuaikan karakter bangunan dan lingkungan.",
    image: "/images/design/design-custom.jpg",
  },
  {
    title: "Desain Interior Kubah",
    description:
      "Referensi desain bagian dalam kubah dengan permainan warna dan pola geometris.",
    image: "/images/design/design-interior.jpg",
  },
];

const DomeDesign = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-4">
            Referensi Desain Kubah
          </h1>

          <p className="text-center mx-auto text-gray-600 max-w-2xl  mb-12">
            Berikut beberapa referensi desain kubah masjid yang dapat
            disesuaikan dengan konsep bangunan, kebutuhan estetika, dan karakter
            lingkungan.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {designList.map((item) => (
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

export default DomeDesign;
