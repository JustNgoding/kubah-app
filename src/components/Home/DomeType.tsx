type DomeItem = {
  title: string;
  description: string;
  image: string;
};

const domeList: DomeItem[] = [
  {
    title: "Kubah Panel Enamel Teflon",
    description:
      "Bahan terbuat dari plat baja SPCC dengan Finishing Teflon di oven pada suhu 800°C. tahan goncangan, mampu bertahan di suhu tinggi dan warna catnya mampu bertahan lebih dari 20 tahun.",
    image: "./assets/images/dome-type/type1.png",
  },
  {
    title: "Kubah Panel Enamel Galvalume",
    description:
      "Bahan dasar baja ringan dilapisi aluminium, silikon & seng. Kelebihannya adalah tahan terhadap panas,Tahan korosi atau karat dan bisa menetralkan cuaca panas.",
    image: "./assets/images/dome-type/type2.png",
  },
  {
    title: "Kubah Panel GRC",
    description:
      "GRC (Glassfibre Reinforced Concrete) Cement) berbahan dasar beton dan serat-serat fiberglass kemudian di campur dengan bahan penguat lainnya.Selain ringan, juga memiliki tekstur yang lunak.",
    image: "./assets/images/dome-type/type3.png",
  },
  {
    title: "Kubah Panel Stainless Gold",
    description:
      "Bahan mengandung senyawa besi dan setidaknya 12% kromium yang membuatnya tahan terhadap karat dan korosi. Finishing warna emas memberikan tampilan mewah dan elegan.",
    image: "./assets/images/dome-type/type4.jpg",
  },
];

const DomeType = () => {
  return (
    <>
      <section className="py-12 md:py-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 md:px-12 ">
          <h1 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-4">
            Jenis-Jenis Kubah
          </h1>

          <p className="text-center mx-auto text-gray-600 max-w-2xl mb-12">
            Kami menyediakan berbagai jenis kubah masjid dengan desain klasik
            hingga modern, menyesuaikan kebutuhan dan karakter bangunan.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {domeList.map((item, index) => {
              const isLast =
                index === domeList.length - 1 && domeList.length % 3 === 1;

              return (
                <div
                  key={item.title}
                  className={`bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden
        ${isLast ? "lg:col-span-3 lg:max-w-sm lg:mx-auto" : ""}`}
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
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default DomeType;
