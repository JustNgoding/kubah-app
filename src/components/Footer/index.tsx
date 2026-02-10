import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

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
  ];

  // const socialLinks = [
  //   { icon: FiFacebook, href: "#", label: "Facebook" },
  //   { icon: FiInstagram, href: "#", label: "Instagram" },
  //   { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  // ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              Dome Indonesia
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Perusahaan terpercaya dalam desain, produksi, dan pemasangan kubah
              masjid berkualitas tinggi di Indonesia.
            </p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-400 hover:text-primary transition-colors text-xl"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div> */}
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-sm hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <FiPhone className=" mt-1 text-primary" />
                <div>
                  <a
                    href="tel:085117605188"
                    className="hover:text-primary transition-colors"
                  >
                    0851 1760 5188
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <FiMail className=" mt-1 text-primary" />
                <a
                  href="mailto:domeindonesia@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  domeindonesia@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <FiMapPin className=" mt-1 text-primary" />
                <p>
                  Jl. Raya Suruh-Karangan
                  <br />
                  Kab. Trenggalek
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Dome Indonesia. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
