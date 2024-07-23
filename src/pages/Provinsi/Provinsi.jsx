import React, { useState } from "react";
import { ColorButton, ColorIndonesia } from "../../assets/warna/warna";
import data from "../../utils/constants/provinces";
import Table from "../../components/Tabel/tabel";

function ProvinsiPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const provincesPerPage = 5;
  const totalProvinces = data.provinces.length;
  const totalPages = Math.ceil(totalProvinces / provincesPerPage);

  const indexOfLastProvince = currentPage * provincesPerPage;
  const indexOfFirstProvince = indexOfLastProvince - provincesPerPage;
  const currentProvinces = data.provinces.slice(
    indexOfFirstProvince,
    indexOfLastProvince
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <div className="md:text-left mb-4">
            <h1 className="text-center" style={ColorIndonesia.h1fontStyle}>
              Provinsi
            </h1>
            <h3 className="mb-8" style={ColorIndonesia.h3fontStyle}>
              Data Covid Berdasarkan Provinsi
            </h3>
          </div>
          <Table
            data={currentProvinces}
            currentPage={currentPage}
            provincesPerPage={provincesPerPage}
          />
          <div className="flex justify-center items-center mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="mr-2  text-white font-bold py-2 px-4 rounded"
              style={ColorButton.button}
            >
              Sebelumnya
            </button>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className=" text-white font-bold py-2 px-4 rounded"
              style={ColorButton.button}
            >
              Selanjutnya
            </button>
          </div>
          <p className="mt-2">
            Halaman {currentPage} dari {totalPages}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProvinsiPage;
