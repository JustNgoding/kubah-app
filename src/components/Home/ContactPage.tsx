import { FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import type { IconType } from "react-icons";

type ContactItem = {
  icon: IconType;
  title: string;
  content: string[];
  color: string;
  linkType?: "whatsapp" | "email" | "website";
};

const contactInfo: ContactItem[] = [
  {
    icon: FaWhatsapp,
    title: "Whatsapp",
    content: ["0851 1760 5188"],
    color: "green",
    linkType: "whatsapp",
  },
  {
    icon: FiMail,
    title: "Email",
    content: ["domeid.ofc@gmail.com"],
    color: "blue",
    linkType: "email",
  },
  {
    icon: FiMapPin,
    title: "Alamat",
    content: [
      "Jl. Raya Suruh-Karangan Ds. Jati",
      "Kec. Karangan, Kab. Trenggalek",
    ],
    color: "amber",
  },
  {
    icon: FiGlobe,
    title: "Website",
    content: ["https://domeindonesia.id/"],
    color: "purple",
    linkType: "website",
  },
];

const colorMap = {
  green:
    "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white",
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
  purple:
    "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white",
  amber:
    "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white",
};

const ContactPage = () => {
  return (
    <section
      id="kontak"
      className="py-12 md:py-20 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="text-center mb-16">
          <h2
            id="contact-heading"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
          >
            Hubungi Kami
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Siap melayani konsultasi gratis untuk proyek kubah Anda
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info) => {
              const Icon = info.icon;

              return (
                <article
                  key={info.title}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${colorMap[info.color as keyof typeof colorMap]}`}
                    >
                      <Icon className="text-2xl" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {info.title}
                      </h3>

                      {info.content.map((text) => {
                        if (info.linkType === "whatsapp") {
                          return (
                            <a
                              key={text}
                              href={`https://wa.me/6285117605188?text=${encodeURIComponent(
                                "Halo, saya ingin konsultasi tentang kubah masjid",
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-gray-800 font-semibold text-sm hover:text-primary transition-colors"
                            >
                              {text}
                            </a>
                          );
                        }

                        if (info.linkType === "email") {
                          return (
                            <a
                              key={text}
                              href={`mailto:${text}`}
                              className="block text-gray-800 font-semibold text-sm hover:text-primary transition-colors"
                            >
                              {text}
                            </a>
                          );
                        }

                        if (info.linkType === "website") {
                          return (
                            <a
                              key={text}
                              href={text}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-gray-800 font-semibold text-sm hover:text-primary transition-colors"
                            >
                              {text.replace("https://", "")}
                            </a>
                          );
                        }

                        return (
                          <span
                            key={text}
                            className="block text-gray-800 font-semibold text-sm leading-tight"
                          >
                            {text}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="lg:col-span-2 space-y-8">
            {/* Feature */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg hover:scale-105 transition duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <FiGlobe className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Jangkauan Luas
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Melayani pengiriman & pemasangan seluruh Indonesia
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg hover:scale-105 transition duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <FaWhatsapp className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Konsultasi Gratis
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Layanan tanya jawab teknis tanpa biaya
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg hover:scale-105 transition duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <FiMapPin className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">
                    Pemasangan Ahli
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Dikerjakan oleh tim profesional berpengalaman
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-3">
                  Ingin tahu lebih banyak?
                </h4>

                <p className="text-white/80 mb-8 max-w-md">
                  Jangan ragu untuk menghubungi kami melalui tombol Whatsapp
                  untuk respon lebih cepat.
                </p>

                <a
                  href="https://wa.me/6285117605188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-secondary transition duration-300 shadow-xl hover:shadow-2xl"
                >
                  <FaWhatsapp className="text-xl" />
                  Hubungi Admin
                </a>
              </div>

              <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full group-hover:scale-125 transition duration-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
