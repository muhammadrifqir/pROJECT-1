import React, { useState, useEffect } from "react";
import { ColorIndonesia } from "../../../assets/warna/warna";
import { FaVirus, FaSmile, FaSkull } from "react-icons/fa";

function RegionPage() {
  const [globalData, setGlobalData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://covid-fe-2023.vercel.app/api/global.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGlobalData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const RegionCard = ({ region }) => (
    <div className="bg-white rounded-lg shadow-md p-4 m-2 w-full sm:w-1/2 md:w-1/3 text-center">
      <h2 className="text-xl font-bold mb-4">{region.name}</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <p className="text-green-500 text-lg font-semibold">
            Dikonfirmasi: {region.numbers.confirmed.toLocaleString()}
          </p>
          <FaVirus className="text-green-500 text-xl" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-blue-500 text-lg font-semibold">
            Pulih: {region.numbers.recovered.toLocaleString()}
          </p>
          <FaSmile className="text-blue-500 text-xl" />
        </div>
        <div className="flex items-center justify-center space-x-2">
          <p className="text-red-500 text-lg font-semibold">
            Meninggal: {region.numbers.death.toLocaleString()}
          </p>
          <FaSkull className="text-red-500 text-xl" />
        </div>
      </div>
    </div>
  );

  return (
    <div
      className="flex justify-center items-center min-h-screen py-8 sm:py-16 md:py-24 lg:py-32"
      style={ColorIndonesia.bg}
    >
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="flex justify-center items-center flex-col">
          <div className="w-full text-center mb-8 sm:mb-12 md:mb-16">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4"
              style={ColorIndonesia.h1fontStyle}
            >
              Situasi Berdasarkan Wilayah
            </h1>
            <h3
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
              style={ColorIndonesia.h3fontStyle}
            >
              Bacaan Pilihan Covid
            </h3>
          </div>
          <div className="w-full">
            {isLoading ? (
              <p>Memuat...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <div className="flex flex-wrap justify-center">
                {globalData.regions.map((region) => (
                  <RegionCard key={region.name} region={region} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegionPage;
