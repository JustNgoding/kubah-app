import { FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {


  const contactInfo = [
    {
      icon: FaWhatsapp,
      title: "Whatsapp",
      content: ["0851 1760 5188"],
    },
    {
      icon: FiMail,
      title: "Email",
      content: ["domeindonesia@gmail.com"],
    },
    {
      icon: FiMapPin,
      title: "Alamat",
      content: [
        "Jl. Raya Suruh-Karangan Ds. Jati",
        "Kec. Karangan, Kab. Trenggalek",
      ],
    },
    {
      icon: FiGlobe,
      title: "Website",
      content: ["https://domeindonesia.id/"],
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Siap melayani konsultasi gratis untuk proyek kubah Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isWA = info.title === "Whatsapp";
              const isEmail = info.title === "Email";
              const isWeb = info.title === "Website";

              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${isWA ? "bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white" :
                      isEmail ? "bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white" :
                        isWeb ? "bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white" :
                          "bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white"
                      }`}>
                      <Icon className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {info.title}
                      </h3>
                      {info.content.map((text, i) => (
                        <div key={i} className="text-gray-800 font-semibold text-sm">
                          {isWA ? (
                            <a
                              href={`https://wa.me/6285117605188?text=${encodeURIComponent("Halo, saya ingin konsultasi tentang kubah masjid")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {text}
                            </a>
                          ) : isWeb ? (
                            <a
                              href={text}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-primary transition-colors"
                            >
                              {text.replace("https://", "")}
                            </a>
                          ) : isEmail ? (
                            <a
                              href={`mailto:${text}`}
                              className="hover:text-primary transition-colors"
                            >
                              {text}
                            </a>
                          ) : (
                            <span className="leading-tight block">{text}</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-10 -mt-10" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg transition-transform hover:scale-105 duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <FiGlobe className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Jangkauan Luas</h4>
                  <p className="text-xs text-gray-500 mt-1">Melayani pengiriman & pemasangan seluruh Indonesia</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg transition-transform hover:scale-105 duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <FaWhatsapp className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Konsultasi Gratis</h4>
                  <p className="text-xs text-gray-500 mt-1">Layanan tanya jawab teknis tanpa biaya</p>
                </div>

                <div className="flex flex-col items-center text-center p-4 bg-secondary/10 rounded-lg transition-transform hover:scale-105 duration-300">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <FiMapPin className="text-primary text-2xl" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm">Pemasangan Ahli</h4>
                  <p className="text-xs text-gray-500 mt-1">Dikerjakan oleh tim profesional berpengalaman</p>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-3">Ingin tahu lebih banyak?</h4>
                <p className="text-white/80 mb-8 max-w-md">Jangan ragu untuk menghubungi kami melalui tombol Whatsapp untuk respon lebih cepat.</p>
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
