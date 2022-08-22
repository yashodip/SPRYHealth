import React, { useContext } from "react"
import ctx from "./../store/weather-context"
const MainTable = () => {
  const weatherCtx = useContext(ctx)
  const { weatherInfo } = weatherCtx
  return (
    <div className="h-screen">
      <table className="table-auto m-auto border-collapse border">
        <caption className="font-bold border-2 border-black ">
          My WatchList (Defuault cities added)
        </caption>
        <thead>
          <tr>
            <th className="border-2 border-black ">Sr. No.</th>
            <th className="border-2 border-black ">Weather</th>
            <th className="border-2 border-black ">Temperature</th>
            <th className="border-2 border-black ">City</th>
            <th className="border-2 border-black ">State</th>
            <th className="border-2 border-black ">Country</th>
          </tr>
        </thead>
        <tbody>
          {weatherInfo.map((item, index) => (
            <tr key={`${item.city}_${index}`}>
              <td className="border-2  border-black text-center">
                {index + 1}
              </td>
              <td className="border-2 flex mx-auto  border-black text-center">
                <img
                  src={`http://openweathermap.org/img/wn/${item.icon}.png`}
                />{" "}
                <span className="text-center"> {item.description}</span>
              </td>
              <td className="border-2  border-black text-center">
                {item.temp.toFixed(2)}&#8451;
              </td>
              <td className="border-2  border-black text-center">
                {item.city}
              </td>
              <td className="border-2  border-black text-center">
                {item.w_state}
              </td>

              <td className="border-2  border-black text-center">
                {item.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MainTable
