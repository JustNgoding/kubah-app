import { FaCheckCircle, FaShieldAlt, FaSun, FaWater } from "react-icons/fa";

type DomeItem = {
  title: string;
  description: string;
  image: string;
  features: string[];
};

const domeList: DomeItem[] = [
  {
    title: "Kubah Panel Enamel Teflon",
    description:
      "Material premium yang terbuat dari plat baja SPCC dengan finishing enamel yang diproses pada suhu 800°C. Memberikan kilau abadi dan ketahanan luar biasa terhadap cuaca ekstrem.",
    image: "./assets/images/dome-type/type1.png",
    features: ["Tahan panas hingga 800°C", "Warna abadi 20+ tahun", "Anti gores & korosi"],
  },
  {
    title: "Kubah Panel Galvalum",
    description:
      "Bahan dasar baja ringan yang dilapisi perpaduan aluminium, silikon, dan seng. Sangat efektif dalam memantulkan panas dan memiliki daya tahan tinggi terhadap karat.",
    image: "./assets/images/dome-type/type2.png",
    features: ["Refleksi panas maksimal", "Sangat ringan & kokoh", "Harga lebih ekonomis"],
  },
  {
    title: "Kubah Panel GRC",
    description:
      "Glassfibre Reinforced Concrete (GRC) adalah material komposit beton yang diperkuat dengan serat fiberglass. Menawarkan fleksibilitas desain tanpa mengorbankan kekuatan struktur.",
    image: "./assets/images/dome-type/type3.png",
    features: ["Custom detail arsitektur", "Tahan segala cuaca", "Pemasangan lebih cepat"],
  },
  {
    title: "Kubah Panel Stainless Gold",
    description:
      "Menghadirkan tampilan mewah dengan material stainless steel berkualitas tinggi yang mengandung senyawa kromium. Finishing warna emas memberikan aura kemegahan pada masjid.",
    image: "./assets/images/dome-type/type4.jpg",
    features: ["Tampilan mewah premium", "Kromium anti karat tinggi", "Kilau emas elegan"],
  },
];

const DomeType = () => {
  return (
    <section id="jenis-kubah" className="py-20 md:py-32 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 ">
        <div className="text-center mb-20 md:mb-28">
          <h2 className="text-3xl md:text-4xl font-bold text-center mx-auto mb-4 text-gray-900">
            Berbagai Jenis Bahan Kubah
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami menyediakan berbagai jenis kubah masjid dengan material pilihan untuk menjamin kekuatan dan keindahan bangunan Anda.
          </p>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {domeList.map((item, index) => (
            <div
              key={item.title}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-24`}
            >
              <div className="w-full md:w-4/12 flex justify-center">
                <div className="relative group max-w-xs md:max-w-sm">
                  <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700"></div>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 md:h-[320px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-8/12 ">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 shrink-0">
                    {index === 0 && <FaShieldAlt size={24} />}
                    {index === 1 && <FaSun size={24} />}
                    {index === 2 && <FaCheckCircle size={24} />}
                    {index === 3 && <FaWater size={24} />}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {item.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-4 group">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                        <FaCheckCircle size={14} />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomeType;
