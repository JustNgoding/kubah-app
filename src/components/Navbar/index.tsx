import { useEffect, useState } from "react";
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
} from "react-icons/hi";

type NavItem = {
  label: string;
  path: string;
  icon: IconType;
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("#home");

  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { label: "Home", path: "/", icon: HiHome },
    { label: "Tentang Kami", path: "#tentang-kami", icon: HiInformationCircle },
    { label: "Jenis Kubah", path: "/jenis-kubah", icon: HiCollection },
    { label: "Bentuk Kubah", path: "/bentuk-kubah", icon: HiCube },
    { label: "Desain Kubah", path: "/desain-kubah", icon: HiPencil },
    { label: "Motif Plafon", path: "/motif-plafon", icon: HiSparkles },
    { label: "Project Kami", path: "#project-kami", icon: HiFolderOpen },
    { label: "Kontak Kami", path: "#kontak-kami", icon: HiMail },
  ];

  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll<HTMLElement>("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        let found = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            found = true;
            setActiveHash(`#${entry.target.id}`);
          }
        });

        if (!found) {
          setActiveHash("#home");
        }
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [location.pathname]);

  const isHomeActive = (): boolean => {
    return location.pathname === "/" && activeHash === "#home";
  };

  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveHash("#home");
    setIsOpen(false);
  };

  return (
    <nav className="w-full bg-primary fixed top-0 z-40 px-4 md:px-20 py-4 md:py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-secondary text-xl md:text-2xl font-bold">
          Dome.id
        </h1>

        <div className="hidden lg:block">
          <ul className="flex gap-6 text-white font-semibold">
            {navItems.map((item) => {
              const isHash = item.path.startsWith("#");

              if (item.path === "/") {
                return (
                  <li key={item.label}>
                    <button
                      onClick={handleHomeClick}
                      className={`hover:text-gray-300 transition ${
                        isHomeActive() ? "text-blue-300" : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              }

              if (isHash) {
                return (
                  <li key={item.label}>
                    <a
                      href={item.path}
                      className={`hover:text-gray-300 transition ${
                        activeHash === item.path ? "text-blue-300" : ""
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `hover:text-gray-300 transition ${
                        isActive ? "text-blue-300" : ""
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          onClick={() => setIsOpen((p) => !p)}
          className="lg:hidden text-white text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white font-semibold px-4 py-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isHash = item.path.startsWith("#");

            if (item.path === "/") {
              return (
                <li key={item.label}>
                  <button
                    onClick={handleHomeClick}
                    className={`flex items-center gap-3 hover:text-gray-300 transition ${
                      isHomeActive() ? "text-blue-300" : ""
                    }`}
                  >
                    <Icon className="text-xl" />
                    {item.label}
                  </button>
                </li>
              );
            }

            if (isHash) {
              return (
                <li key={item.label}>
                  <a
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 hover:text-gray-300 transition ${
                      activeHash === item.path ? "text-blue-300" : ""
                    }`}
                  >
                    <Icon className="text-xl" />
                    {item.label}
                  </a>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 hover:text-gray-300 transition ${
                      isActive ? "text-blue-300" : ""
                    }`
                  }
                >
                  <Icon className="text-xl" />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
