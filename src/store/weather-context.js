import React from "react"

const init = {
  auth: false,
  country: "",
  weatherInfo: [],
  cities: [],
  citiesInfo: [],
  loading: false,
  error: null,
  city: "",
  cityWeather: {},
  onLogin: () => {},
  onLogout: () => {},
  fetchCityWeather: (city) => {},
}

const ctx = React.createContext(init)

export default ctx
