import React, { useState } from "react";
import { connect } from "react-redux";
import { provinces } from "../../utils/constants/provinces";
import {
  ColorButton,
  ColorHome,
  ColorIndonesia,
} from "../../assets/warna/warna";
import img from "../../assets/foto/foto2.png";
import {
  updateProvinceData,
  resetProvinceData,
} from "../../redux/actions/provinceActions";

function FormPage({ updateProvinceData, resetProvinceData }) {
  const [province, setProvince] = useState("");
  const [status, setStatus] = useState("");
  const [count, setCount] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "province") {
      setProvince(value);
    } else if (id === "status") {
      setStatus(value);
    } else if (id === "count") {
      setCount(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", { province, status, count });

    const selectedProvince = provinces.find((prov) => prov.kota === province);
    if (selectedProvince) {
      updateProvinceData(province, {
        kasus: parseInt(count),
      });
    } else {
      console.error("Invalid province selected");
    }

    resetProvinceData();
    setProvince("");
    setStatus("");
    setCount("");
  };
  return (
    <div
      className="flex justify-center items-center py-8 sm:py-16 md:py-24 lg:py-32"
      style={ColorIndonesia.bg}
    >
      <div className="container px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src={img}
              alt="Image"
              className="w-full max-w-md mx-auto lg:max-w-none"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-8">
            <h1
              style={ColorHome.h1fontStyle}
              className="text-2xl sm:text-3xl md:text-4xl mb-6 text-center lg:text-left"
            >
              Formulir Covid
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Provinsi
                </label>
                <input
                  type="text"
                  id="province"
                  value={province}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Status
                </label>
                <input
                  type="text"
                  id="status"
                  value={status}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="count"
                  className="block text-sm font-medium text-gray-700"
                >
                  Jumlah
                </label>
                <input
                  type="text"
                  id="count"
                  value={count}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md py-2 px-3 mt-1 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500 block w-full shadow-sm sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = {
  updateProvinceData,
  resetProvinceData,
};

export default connect(null, mapDispatchToProps)(FormPage);
