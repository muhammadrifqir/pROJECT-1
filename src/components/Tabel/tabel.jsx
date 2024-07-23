import React from 'react'

const Table = ({ data, currentPage, provincesPerPage }) => {
  const startIndex = (currentPage - 1) * provincesPerPage

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
        {data.map((province, index) => (
          <tr key={province.name}>
            <td className="border border-gray-300 p-2">
              {startIndex + index + 1}
            </td>
            <td className="border border-gray-300 p-2">{province.name}</td>
            <td className="border border-gray-300 p-2">
              {province.numbers.confirmed}
            </td>
            <td className="border border-gray-300 p-2">
              {province.numbers.recovered}
            </td>
            <td className="border border-gray-300 p-2">
              {province.numbers.death}
            </td>
            <td className="border border-gray-300 p-2">
              {province.numbers.treatment}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
