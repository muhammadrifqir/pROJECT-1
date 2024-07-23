// components/tabellokal.js

import React from 'react'
import { connect } from 'react-redux'

const TableLokal = ({ provincesData }) => {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border border-gray-300 p-2">No.</th>
          <th className="border border-gray-300 p-2">Provinsi</th>
          <th className="border border-gray-300 p-2">Kasus</th>
          <th className="border border-gray-300 p-2">Sembuh</th>
          <th className="border border-gray-300 p-2">Meninggal</th>
          <th className="border border-gray-300 p-2">Dirawat</th>
        </tr>
      </thead>
      <tbody>
        {provincesData &&
          provincesData.map((province, index) => (
            <tr key={province.kota}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{province.kota}</td>
              <td className="border border-gray-300 p-2">{province.kasus}</td>
              <td className="border border-gray-300 p-2">{province.sembuh}</td>
              <td className="border border-gray-300 p-2">
                {province.meninggal}
              </td>
              <td className="border border-gray-300 p-2">{province.dirawat}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
}

const mapStateToProps = (state) => ({
  provincesData: state.provinceReducer.provinces,
})

export default connect(mapStateToProps)(TableLokal)
