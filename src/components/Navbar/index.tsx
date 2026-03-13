import { useState, useEffect } from "react";
import type { IconType } from "react-icons";
import {
  HiMenuAlt3,
  HiX,
  HiHome,
  HiInformationCircle,
  HiCollection,
  HiCube,
  HiSparkles,
  HiFolderOpen,
  HiMail,
} from "react-icons/hi";

type NavItem = {
  label: string;
  path: string;
  icon: IconType;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("home");

  const mainNav: NavItem[] = [
    { label: "Home", path: "home", icon: HiHome },
    { label: "Produk", path: "produk", icon: HiCube },
    { label: "Tentang Kami", path: "tentang-kami", icon: HiInformationCircle },
    { label: "Jenis Kubah", path: "jenis-kubah", icon: HiCollection },
    { label: "Bentuk Kubah", path: "bentuk-kubah", icon: HiCube },
    { label: "Motif Plafon", path: "motif-plafon", icon: HiSparkles },
    { label: "Project Kami", path: "project-kami", icon: HiFolderOpen },
    { label: "Kontak Kami", path: "kontak-kami", icon: HiMail },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setActiveHash(id);

    const element = document.getElementById(id);

    if (!element) return;

    const offset = 100;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  // detect active section when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const item of mainNav) {
        const section = document.getElementById(item.path);

        if (!section) continue;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveHash(item.path);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 z-40 w-full bg-primary px-4 py-4 md:py-8 md:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleScrollTo("home")}
          className="relative h-10 md:h-12 w-32 md:w-48 flex items-center hover:opacity-90 transition-opacity z-50"
        >
          <img
            src="./assets/images/logo/dome_logo.png"
            alt="Dome Indonesia Produsen Kubah Masjid"
            className="absolute top-[20px] left-0 -translate-y-1/2 h-16 md:h-24 w-auto object-contain drop-shadow-md"
          />
        </button>

        {/* Desktop Nav */}
        <ul className="hidden items-center gap-6 font-semibold text-white lg:flex">
          {mainNav.map((item) => (
            <li key={item.label} className="cursor-pointer">
              <button
                onClick={() => handleScrollTo(item.path)}
                className={`transition-colors hover:text-blue-300 ${
                  activeHash === item.path ? "text-blue-300" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setIsOpen((p) => !p)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "opacity-100 max-h-[400px]" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 py-4 font-semibold text-white">
          {mainNav.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <button
                  onClick={() => handleScrollTo(item.path)}
                  className={`flex items-center gap-3 transition-colors hover:text-blue-300 ${
                    activeHash === item.path ? "text-blue-300" : ""
                  }`}
                >
                  <Icon />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
