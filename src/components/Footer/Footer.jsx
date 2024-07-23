import React from "react";
import { Color, ColorHome } from "../../assets/warna/warna";

function Footer() {
  return (
    <div className="p-4 sm:p-6 md:p-8" style={Color.navbarStyle}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <div className="text-center sm:text-left">
          <div className="text-white font-bold text-xl mb-2" style={Color.head}>
            
          </div>
          <div style={ColorHome.sub}>Developed by M Rifqi R</div>
        </div>
        <ul
          className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-6"
          style={Color.subfontStyle}
        >
          <li className="mb-2 sm:mb-0">
            <a href="#" className="text-white hover:text-gray-300">
              Global
            </a>
          </li>
          <li className="mb-2 sm:mb-0">
            <a href="#" className="text-white hover:text-gray-300">
              Indonesia
            </a>
          </li>
          <li className="mb-2 sm:mb-0">
            <a href="#" className="text-white hover:text-gray-300">
              Provinsi
            </a>
          </li>
          <li className="mb-2 sm:mb-0">
            <a href="#" className="text-white hover:text-gray-300">
              Tentang Kami
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
