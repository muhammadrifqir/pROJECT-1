import React, { useState, useEffect } from "react";
import { ColorButton, ColorIndonesia } from "../../../assets/warna/warna";
import { provinces as provinsiData } from "../../../utils/constants/provinces";
import HomePage from "../../Home/Home";
import FormPage from "../../Form/Form";
import TableLokal from "../../../components/Tabel/tabellokal";

function ProvinsiDataPage() {
  const [provincesData, setProvincesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const provincesPerPage = 5;

  useEffect(() => {
    try {
      setProvincesData(provinsiData);
      setIsLoading(false);
    } catch (error) {
      setError("Failed to load data");
      setIsLoading(false);
    }
  }, []);

  const totalProvinces = provincesData.length;
  const totalPages = Math.ceil(totalProvinces / provincesPerPage);

  const indexOfLastProvince = currentPage * provincesPerPage;
  const indexOfFirstProvince = indexOfLastProvince - provincesPerPage;
  const currentProvinces = Array.isArray(provincesData)
    ? provincesData.slice(indexOfFirstProvince, indexOfLastProvince)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <HomePage />
      <div className="flex justify-center items-center min-h-screen bg-white py-8 sm:py-16 md:py-24 lg:py-32">
        <div className="container px-4 sm:px-6 md:px-8 max-w-full sm:max-w-4xl lg:max-w-6xl">
          <div className="flex justify-center items-center flex-col">
            <div className="w-full text-center mb-8 sm:mb-12 md:mb-16">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4"
                style={ColorIndonesia.h1fontStyle}
              >
                Provinsi
              </h1>
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                style={ColorIndonesia.h3fontStyle}
              >
                Data Covid Berdasarkan Provinsi
              </h3>
            </div>
            <div className="w-full overflow-x-auto">
              {isLoading ? (
                <p>Memuat...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <>
                  <TableLokal
                    data={currentProvinces}
                    currentPage={currentPage}
                    provincesPerPage={provincesPerPage}
                  />
                  <div className="flex flex-col sm:flex-row justify-center items-center mt-8 sm:mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
                    <button
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                      style={ColorButton.button}
                    >
                      Sebelumnya
                    </button>
                    <button
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                      style={ColorButton.button}
                    >
                      Selanjutnya
                    </button>
                  </div>
                  <p className="mt-4 text-sm sm:text-base">
                    Halaman {currentPage} dari {totalPages}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <FormPage />
    </div>
  );
}

export default ProvinsiDataPage;
