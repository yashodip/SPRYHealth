import React, { useContext, useState } from "react"
import ctx from "../store/weather-context"
import CityWeather from "./CityWeather"
import Hero from "./Hero"
const Form = () => {
  const [city, setCity] = useState("")
  const weatherCtx = useContext(ctx)
  const { fetchCityWeather } = weatherCtx
  const [data, setData] = useState()
  const submitHandler = (e) => {
    e.preventDefault()
    fetchCityWeather(city)
  }
  return (
    <>
      <Hero></Hero>
      <div className="center">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Please Enter City Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="City Name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex items-center center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={submitHandler}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
      <CityWeather />
    </>
  )
}

export default Form
