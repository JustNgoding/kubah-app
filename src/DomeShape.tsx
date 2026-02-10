import { HiCube, HiOutlineCube, HiOutlineViewGrid } from "react-icons/hi";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const DomeShape = () => {
  const data = [
    {
      title: "Kubah Setengah Bola",
      desc: "Bentuk paling umum, simetris, dan kuat secara struktur.",
      icon: HiCube,
    },
    {
      title: "Kubah Oval",
      desc: "Memberi kesan elegan dan modern, sering dipakai desain kontemporer.",
      icon: HiOutlineCube,
    },
    {
      title: "Kubah Bertingkat",
      desc: "Memiliki beberapa layer, terlihat megah dan klasik.",
      icon: HiOutlineViewGrid,
    },
  ];

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-white px-6 py-24 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-4 text-3xl font-bold text-primary">Bentuk Kubah</h1>
          <p className="mb-12 max-w-2xl text-gray-600">
            Berikut beberapa bentuk kubah yang umum digunakan pada masjid dan
            bangunan religius, disesuaikan dengan kebutuhan estetika dan
            struktur.
          </p>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {data.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-lg border p-6 transition hover:shadow-lg"
                >
                  <Icon className="mb-4 text-4xl text-primary" />
                  <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DomeShape;
