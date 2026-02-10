import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type DomeItem = {
  title: string;
  description: string;
  image: string;
};

const domeList: DomeItem[] = [
  {
    title: "Kubah Bawang",
    description:
      "Kubah klasik dengan bentuk menyerupai bawang. Umum digunakan pada masjid tradisional dan masjid bergaya Timur Tengah.",
    image: "/images/kubah-bawang.jpg",
  },
  {
    title: "Kubah Oval",
    description:
      "Bentuk kubah lonjong modern yang memberi kesan elegan dan ringan, cocok untuk masjid kontemporer.",
    image: "/images/kubah-oval.jpg",
  },
  {
    title: "Kubah Setengah Bola",
    description:
      "Desain paling umum dan stabil secara struktur. Banyak dipakai karena mudah dikombinasikan dengan berbagai gaya bangunan.",
    image: "/images/kubah-setengah-bola.jpg",
  },
  {
    title: "Kubah Limas",
    description:
      "Bentuk geometris dengan sudut tegas. Biasanya digunakan pada masjid bergaya lokal atau modern minimalis.",
    image: "/images/kubah-limas.jpg",
  },
  {
    title: "Kubah Custom",
    description:
      "Kubah dengan desain khusus sesuai permintaan klien, baik dari segi bentuk, ukuran, maupun ornamen.",
    image: "/images/kubah-custom.jpg",
  },
];

const DomeType = () => {
  return (
    <>
      <Navbar />

      <main className="pt-32 pb-20 px-4 md:px-20 bg-gray-50">
        <section className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-start mb-4">
            Jenis-Jenis Kubah
          </h1>

          <p className="text-start text-gray-600 max-w-2xl mb-12">
            Kami menyediakan berbagai jenis kubah masjid dengan desain klasik
            hingga modern, menyesuaikan kebutuhan dan karakter bangunan.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {domeList.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
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
        </section>
      </main>

      <Footer />
    </>
  );
};

export default DomeType;
