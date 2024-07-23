import React, { useState, useEffect } from "react";
import { ColorIndonesia } from "../../../assets/warna/warna";
import Card from "../../../components/kartu/kartu";
import HomePage from "../../Home/Home";
import RegionPage from "../Wilayah/Wilayah";
import FormPage from "../../Form/Form";

function GlobalPage() {
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
        setGlobalData(data.global);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      <HomePage />
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
                Global
              </h1>
              <h3
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl"
                style={ColorIndonesia.h3fontStyle}
              >
                Data Covid Berdasarkan Global
              </h3>
            </div>
            <div className="w-full">
              {isLoading ? (
                <p>Memuat...</p>
              ) : error ? (
                <p>Error: {error}</p>
              ) : (
                <Card data={globalData} />
              )}
            </div>
          </div>
        </div>
      </div>
      <RegionPage />
    </div>
  );
}

export default GlobalPage;
