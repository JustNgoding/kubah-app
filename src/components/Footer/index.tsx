import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navMain = [
    { label: "Home", href: "/" },
    { label: "Tentang Kami", href: "#tentang-kami" },
    { label: "Project Kami", href: "#project-kami" },
    { label: "Kontak", href: "#kontak-kami" },
  ];

  const navProduct = [
    { label: "Jenis Kubah", href: "#jenis-kubah" },
    { label: "Bentuk Kubah", href: "#bentuk-kubah" },
    { label: "Motif Plafon", href: "#motif-plafon" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              Dome Indonesia
            </h3>
            <p className="text-sm leading-relaxed">
              Spesialis desain dan pemasangan kubah masjid berkualitas dengan
              pengerjaan profesional.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navMain.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Produk</h4>
            <ul className="space-y-2">
              {navProduct.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <FiPhone className="mt-1 text-primary" />
                <a
                  href="tel:085117605188"
                  className="hover:text-primary transition-colors"
                >
                  0851 1760 5188
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FiMail className="mt-1 text-primary" />
                <a
                  href="mailto:domeindonesia@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  domeindonesia@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <FiMapPin className="mt-1 text-primary" />
                <p>
                  Jl. Raya Suruh–Karangan
                  <br />
                  Kab. Trenggalek
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {currentYear} Dome Indonesia. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
