import { React, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";
import logoIcon from "../assets/android-chrome-192x192.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "About Me",
    "Work Experience",
    "Skills",
    "Education",
    "Projects",
    "Contact",
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 pl-1.5 pr-1.5 bg-[#000000] transition-all">
      <div className="max-w-7xl mx-auto px-3 py-5 flex items-center justify-between">
        <img
          src={logoIcon}
          className="h-[3.3rem] w-[3.3rem] xl:h-[3.3rem] xl:w-[4.3rem]"
          alt="logo"
        />

        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.replaceAll(" ", "").toLowerCase()}
              smooth={true}
              duration={500}
              className="relative cursor-pointer text-md text-pink-300 hover:text-pink-400 active:text-pink-500 transition font-poppins before:absolute before:inset-x-2 before:-bottom-1 before:h-[1.5px] before:scale-x-0 before:bg-pink-400 before:origin-center before:transition-transform before:duration-300 hover:before:scale-x-100"
            >
              {item}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          {menuOpen ? (
            <FiX
              className="text-2xl cursor-pointer text-pink-300"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-2xl cursor-pointer text-pink-300"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item.replaceAll(" ", "").toLowerCase()}
              smooth={true}
              duration={500}
              className="flex justify-center items-center text-pink-300 hover:text-pink-400 active:text-pink-500 font-poppins cursor-pointer transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
