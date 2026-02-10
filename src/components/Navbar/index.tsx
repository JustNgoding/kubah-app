import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import type { IconType } from "react-icons";
import {
  HiMenuAlt3,
  HiX,
  HiHome,
  HiInformationCircle,
  HiCollection,
  HiCube,
  HiPencil,
  HiSparkles,
  HiFolderOpen,
  HiMail,
  HiChevronDown,
} from "react-icons/hi";

type NavItem = {
  label: string;
  path: string;
  icon: IconType;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");
  const [productOpen, setProductOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const mainNav: NavItem[] = [
    { label: "Home", path: "/", icon: HiHome },
    { label: "Tentang Kami", path: "#tentang-kami", icon: HiInformationCircle },
    { label: "Project Kami", path: "#project-kami", icon: HiFolderOpen },
    { label: "Kontak Kami", path: "#kontak-kami", icon: HiMail },
  ];

  const productNav: NavItem[] = [
    { label: "Jenis Kubah", path: "/dome-type", icon: HiCollection },
    { label: "Bentuk Kubah", path: "/dome-shape", icon: HiCube },
    { label: "Desain Kubah", path: "/dome-design", icon: HiPencil },
    { label: "Motif Plafon", path: "/celling-motif", icon: HiSparkles },
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

        {/* DESKTOP */}
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

          {/* PRODUCTS DROPDOWN */}
          <li className="relative">
            <button
              onClick={() => setProductOpen((p) => !p)}
              className="flex items-center gap-2"
            >
              Products
              <HiChevronDown
                className={`transition-transform ${
                  productOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`absolute left-0 top-full mt-2 w-52 overflow-hidden rounded bg-white shadow-lg transition-all duration-300 ${
                productOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {productNav.map((item) => {
                return (
                  <li key={item.label}>
                    <NavLink
                      to={item.path}
                      onClick={() => setProductOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-2 hover:bg-primary/80 hover:text-white transition-all ease-in-out duration-200 ${
                          isActive
                            ? "text-white bg-primary/80"
                            : "text-gray-800"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setIsOpen((p) => !p)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
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

          {/* MOBILE PRODUCTS */}
          <div>
            <button
              onClick={() => setProductOpen((p) => !p)}
              className="flex items-center gap-2"
            >
              <HiCollection className="mr-1" />
              Products
              <HiChevronDown
                className={`transition-transform ${
                  productOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`mt-2 overflow-hidden pl-4 transition-all duration-300 ${
                productOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              {productNav.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.label}
                    to={item.path}
                    onClick={() => {
                      setIsOpen(false);
                      setProductOpen(false);
                    }}
                    className={({ isActive }) =>
                      `flex items-center gap-3 py-2 ${
                        isActive ? "text-blue-300" : ""
                      }`
                    }
                  >
                    <Icon />
                    {item.label}
                  </NavLink>
                );
              })}
            </ul>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
