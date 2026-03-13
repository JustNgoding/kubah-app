import { FaCheckCircle, FaShieldAlt, FaSun, FaWater } from "react-icons/fa";
import type { IconType } from "react-icons";

type DomeItem = {
  title: string;
  description: string;
  image: string;
  icon: IconType;
  features: string[];
};

const domeList: DomeItem[] = [
  {
    title: "Kubah Panel Enamel",
    description:
      "Kubah enamel dibuat dari plat baja yang dilapisi kaca enamel melalui proses pembakaran suhu tinggi. Lapisan ini membuat warna lebih tajam, tahan pudar, serta memiliki daya tahan tinggi terhadap cuaca.",
    image: "./assets/images/dome-type/type1.png",
    icon: FaShieldAlt,
    features: [
      "Warna tahan lama puluhan tahun",
      "Tahan korosi dan perubahan cuaca",
      "Tampilan halus dan mengkilap",
    ],
  },
  {
    title: "Kubah Panel Galvalum",
    description:
      "Material galvalum merupakan baja ringan yang dilapisi aluminium dan seng sehingga memiliki ketahanan tinggi terhadap karat. Bobotnya ringan namun tetap kuat untuk struktur kubah masjid.",
    image: "./assets/images/dome-type/type2.png",
    icon: FaSun,
    features: [
      "Bobot ringan namun kuat",
      "Tahan korosi dan karat",
      "Biaya lebih ekonomis",
    ],
  },
  {
    title: "Kubah Panel GRC",
    description:
      "GRC (Glassfiber Reinforced Concrete) adalah beton yang diperkuat serat kaca sehingga lebih ringan dan fleksibel dibanding beton biasa. Material ini memungkinkan desain kubah dengan detail ornamen yang lebih kompleks.",
    image: "./assets/images/dome-type/type3.png",
    icon: FaCheckCircle,
    features: [
      "Mudah dibentuk untuk ornamen",
      "Struktur kuat dan stabil",
      "Cocok untuk desain custom",
    ],
  },
  {
    title: "Kubah Stainless Gold",
    description:
      "Kubah berbahan stainless steel dengan finishing warna emas yang memberikan tampilan mewah dan elegan. Material stainless memiliki ketahanan tinggi terhadap karat serta mampu bertahan di berbagai kondisi lingkungan.",
    image: "./assets/images/dome-type/type4.jpg",
    icon: FaWater,
    features: [
      "Tampilan mewah berwarna emas",
      "Material anti karat",
      "Perawatan relatif mudah",
    ],
  },
];

const DomeType = () => {
  return (
    <section
      id="jenis-kubah"
      className="py-20 md:py-32 bg-secondary/20"
      aria-labelledby="dome-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-20 md:mb-28">
          <h2
            id="dome-heading"
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Berbagai Jenis Bahan Kubah
          </h2>

          <div className="w-24 h-1 bg-primary mx-auto mb-8" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Kami menyediakan berbagai jenis kubah masjid dengan material pilihan
            untuk menjamin kekuatan dan keindahan bangunan Anda.
          </p>
        </header>

        <div className="flex flex-col gap-24 md:gap-32">
          {domeList.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`flex flex-col ${
                  index % 2 ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-24`}
              >
                <div className="w-full md:w-4/12 flex justify-center">
                  <div className="relative group max-w-xs md:max-w-sm">
                    <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-700" />

                    <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-72 md:h-[320px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-8/12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/30 shrink-0">
                      <Icon size={24} />
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed mb-10">
                    {item.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {item.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 shrink-0">
                          <FaCheckCircle size={14} />
                        </div>

                        <span className="text-gray-700 font-medium">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DomeType;
