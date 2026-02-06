import { NavLink } from "react-router";
// import "./Navbar.css";

const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Tentang Kami", path: "/tentang-kami" },
    { label: "Jenis Kubah", path: "/jenis-kubah" },
    { label: "Bentuk Kubah", path: "/bentuk-kubah" },
    { label: "Desain Kubah", path: "/desain-kubah" },
    { label: "Motif Plafon", path: "/motif-plafon" },
    { label: "Project Kami", path: "/project-kami" },
    { label: "Kontak Kami", path: "/kontak-kami" },
  ];

  return (
    <nav className="w-full bg-primary px-20 py-8  top-0">
      <div className="w-full flex justify-between items-center">
        <div>
          <h1 className="text-secondary text-2xl font-bold">Dome.id</h1>
        </div>
        <div>
          <ul className="flex gap-6 text-white font-semibold">
            {navItems.map((item) => (
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
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
