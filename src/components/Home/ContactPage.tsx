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
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hubungi Kami
          </h2>
          <p className="text-gray-600 text-lg">
            Siap melayani konsultasi gratis untuk proyek kubah Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="text-primary text-2xl  mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {info.title}
                      </h3>
                      {info.content.map((text, i) => (
                        <p key={i} className="text-gray-600 text-sm mb-1">
                          {info.title === "Whatsapp" ? (
                            <a
                              href={`https://wa.me/6285117605188?text=${encodeURIComponent("Halo, saya ingin konsultasi tentang kubah masjid")}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {text}
                            </a>
                          ) : info.title === "Website" ? (
                            <a
                              href={text}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {text}
                            </a>
                          ) : info.title === "Email" ? (
                            <a
                              href={`mailto:${text}`}
                              className="text-primary hover:underline"
                            >
                              {text}
                            </a>
                          ) : (
                            text
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
};

export default ContactPage;
