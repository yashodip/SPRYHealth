import React, { useContext } from "react"
import ctx from "../store/weather-context"
const CityWeather = () => {
  const weatherCtx = useContext(ctx)
  const { cityWeather } = weatherCtx
  return (
    <div className="h-screen">
      {cityWeather.city && (
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
            <tr>
              <td className="border-2  border-black text-center">1</td>
              <td className="border-2 flex mx-auto  border-black text-center">
                <img
                  src={`http://openweathermap.org/img/wn/${cityWeather.icon}.png`}
                />{" "}
                <span className="text-center"> {cityWeather.description}</span>
              </td>
              <td className="border-2  border-black text-center">
                {cityWeather.temp.toFixed(2)}&#8451;
              </td>
              <td className="border-2  border-black text-center">
                {cityWeather.city}
              </td>
              <td className="border-2  border-black text-center">
                {cityWeather.w_state}
              </td>

              <td className="border-2  border-black text-center">
                {cityWeather.country}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  )
}

export default CityWeather
