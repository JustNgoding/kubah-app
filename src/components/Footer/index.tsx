import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Tentang Kami",
      links: [
        { label: "Profil Perusahaan", href: "#" },
        { label: "Visi & Misi", href: "#" },
        { label: "Tim Kami", href: "#" },
        { label: "Sertifikasi", href: "#" },
      ],
    },
    {
      title: "Layanan",
      links: [
        { label: "Desain Kubah", href: "#" },
        { label: "Produksi", href: "#" },
        { label: "Pemasangan", href: "#" },
        { label: "Maintenance", href: "#" },
      ],
    },
    {
      title: "Informasi",
      links: [
        { label: "Blog", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat & Ketentuan", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: "#", label: "Facebook" },
    { icon: FiInstagram, href: "#", label: "Instagram" },
    { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              Dome Indonesia
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Perusahaan terpercaya dalam desain, produksi, dan pemasangan kubah
              masjid berkualitas tinggi di Indonesia.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-indigo-500 transition-colors text-xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-indigo-500 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FiPhone className=" mt-1 text-indigo-500" />
                <div>
                  <a
                    href="tel:085117605188"
                    className="hover:text-indigo-500 transition-colors"
                  >
                    0851 1760 5188
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiMail className=" mt-1 text-indigo-500" />
                <a
                  href="mailto:domeindonesia@gmail.com"
                  className="hover:text-indigo-500 transition-colors"
                >
                  domeindonesia@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className=" mt-1 text-indigo-500" />
                <p>
                  Jl. Raya Suruh-Karangan
                  <br />
                  Kab. Trenggalek
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Dome Indonesia. Semua hak dilindungi.
            </p>
            <div className="flex justify-start md:justify-end gap-4 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                Privasi
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                Syarat
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-indigo-500 transition-colors"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
