import React from "react"

const MainTable = () => {
  return (
    <table className="m-4 table-auto w-full ">
      <caption className="font-bold border-2 border-black ">
        Top 10 cities of India
      </caption>
      <thead>
        <tr>
          <th className="border-2 border-black ">Sr. No.</th>
          <th className="border-2 border-black ">Weather</th>
          <th className="border-2 border-black ">Temperature</th>
          <th className="border-2 border-black ">City</th>
          <th className="border-2 border-black ">Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border-2  border-black text-center">1</td>
          <td className="border-2  border-black text-center">clear sky</td>
          <td className="border-2  border-black text-center">23</td>
          <td className="border-2  border-black text-center">Pune</td>
          <td className="border-2  border-black text-center">IN</td>
        </tr>
        <tr>
          <td className="border-2  border-black text-center">2</td>
          <td className="border-2  border-black text-center">clear sky</td>
          <td className="border-2  border-black text-center">23</td>
          <td className="border-2  border-black text-center">Pune</td>
          <td className="border-2  border-black text-center">IN</td>
        </tr>
        <tr>
          <td className="border-2  border-black text-center">3</td>
          <td className="border-2  border-black text-center">clear sky</td>
          <td className="border-2  border-black text-center">23</td>
          <td className="border-2  border-black text-center">Pune</td>
          <td className="border-2  border-black text-center">IN</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MainTable
