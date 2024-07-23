import React from "react";
import { ColorIndonesia } from "../../assets/warna/warna";
import Card from "../../components/kartu/kartu";
import data from "../../utils/constants/indonesia";

function IndonesiaPage() {
  return (
    <div
      className="flex justify-center items-center h-screen"
      style={ColorIndonesia.bg}
    >
      <div className="container">
        <div className="flex justify-center items-center flex-col">
          <div className="md:text-left mb-4">
            <h1 className="text-center" style={ColorIndonesia.h1fontStyle}>
              Indonesia
            </h1>
            <h3 className="mb-8" style={ColorIndonesia.h3fontStyle}>
              Data Covid Berdasarkan Indonesia
            </h3>
          </div>
          <Card data={data.indonesia} />
        </div>
      </div>
    </div>
  );
}

export default IndonesiaPage;
