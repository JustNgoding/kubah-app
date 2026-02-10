type DomeItem = {
  title: string;
  description: string;
  image: string;
};

const DomeShape = () => {
  const data: DomeItem[] = [
    {
      title: "Kubah Setengah Bola",
      description: "Bentuk paling umum, simetris, dan kuat secara struktur.",
      image: "HiCube",
    },
    {
      title: "Kubah Oval",
      description:
        "Memberi kesan elegan dan modern, sering dipakai desain kontemporer.",
      image: "HiOutlineCube",
    },
    {
      title: "Kubah Bertingkat",
      description: "Memiliki beberapa layer, terlihat megah dan klasik.",
      image: "HiOutlineViewGrid",
    },
  ];

  return (
    <>
      <section className="py-12 md:py-20 bg-secondary min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Bentuk Kubah
          </h1>

          <p className="text-center mx-auto text-gray-600 max-w-2xl mb-12">
            Berikut beberapa bentuk kubah yang umum digunakan pada masjid dan
            bangunan religius, disesuaikan dengan kebutuhan estetika dan
            struktur.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => (
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
        </div>
      </section>
    </>
  );
};

export default DomeShape;
