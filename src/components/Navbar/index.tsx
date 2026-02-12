import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
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
  const [activeHash, setActiveHash] = useState("#home");

  const location = useLocation();
  const navigate = useNavigate();

  const mainNav: NavItem[] = [
    { label: "Home", path: "/", icon: HiHome },
    { label: "Produk", path: "#produk", icon: HiCube },
    { label: "Tentang Kami", path: "#tentang-kami", icon: HiInformationCircle },
    { label: "Jenis Kubah", path: "#jenis-kubah", icon: HiCollection },
    { label: "Bentuk Kubah", path: "#bentuk-kubah", icon: HiCube },
    { label: "Motif Plafon", path: "#motif-plafon", icon: HiSparkles },
    { label: "Project Kami", path: "#project-kami", icon: HiFolderOpen },
    { label: "Kontak Kami", path: "#kontak-kami", icon: HiMail },
  ];

  const isHomeActive = location.pathname === "/" && activeHash === "#home";

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0 });
    setActiveHash("#home");
    setIsOpen(false);
  };

  const handleHashClick = (hash: string) => {
    setActiveHash(hash);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-40 w-full bg-primary px-4  py-8 md:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <h1 className="text-xl font-bold text-secondary">Dome.id</h1>

        <ul className="hidden items-center gap-6 font-semibold text-white lg:flex">
          {mainNav.map((item) => {
            if (item.path === "/") {
              return (
                <li key={item.label}>
                  <button
                    onClick={handleHomeClick}
                    className={`flex items-center gap-2 ${
                      isHomeActive ? "text-blue-300" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <a
                  href={item.path}
                  onClick={() => handleHashClick(item.path)}
                  className={`flex items-center gap-2 ${
                    activeHash === item.path ? "text-blue-300" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setIsOpen((p) => !p)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? " opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-4 py-4 font-semibold text-white">
          {mainNav.map((item) => {
            const Icon = item.icon;

            if (item.path === "/") {
              return (
                <button
                  key={item.label}
                  onClick={handleHomeClick}
                  className={`flex items-center gap-3 ${
                    isHomeActive ? "text-blue-300" : ""
                  }`}
                >
                  <Icon />
                  {item.label}
                </button>
              );
            }

            return (
              <a
                key={item.label}
                href={item.path}
                onClick={() => handleHashClick(item.path)}
                className={`flex items-center gap-3 ${
                  activeHash === item.path ? "text-blue-300" : ""
                }`}
              >
                <Icon />
                {item.label}
              </a>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
