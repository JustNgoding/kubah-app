import { FiMail, FiMapPin, FiGlobe } from "react-icons/fi";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
    <section className="py-12 md:py-20 bg-secondary min-h-screen">
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
                          {info.title === "Website" ? (
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

          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Kirim Pesan
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Anda"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subjek Pesan"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition"
              />

              <textarea
                name="message"
                placeholder="Pesan Anda"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
              />

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-4 rounded-lg transition-colors duration-200"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
