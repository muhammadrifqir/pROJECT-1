import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Color } from "../../assets/warna/warna";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "font-bold" : "";
  };
  return (
    <nav className="p-4 sm:p-6 md:p-8" style={Color.navbarStyle}>
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div
          className="text-white font-bold text-xl"
          style={Color.headfontStyle}
        >
          Covid ID
        </div>
        <button
          className="sm:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:flex flex-col sm:flex-row w-full sm:w-auto mt-4 sm:mt-0 space-y-2 sm:space-y-0 sm:space-x-6`}
          style={Color.subfontStyle}
        >
          <li>
            <Link
              to="/global"
              className={`text-white hover:text-gray-300 block ${isActive(
                "/global"
              )}`}
            >
              Global
            </Link>
          </li>
          <li>
            <Link
              to="/indonesia"
              className={`text-white hover:text-gray-300 block ${isActive(
                "/indonesia"
              )}`}
            >
              Indonesia
            </Link>
          </li>
          <li>
            <Link
              to="/provinsidata"
              className={`text-white hover:text-gray-300 block ${isActive(
                "/provinsidata"
              )}`}
            >
              Provinsi
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`text-white hover:text-gray-300 block ${isActive(
                "/about"
              )}`}
            >
              Tentang Kami
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
