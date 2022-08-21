import React from "react"

const init = {
  auth: false,
  country: "",
  weatherInfo: [],
  cities: [],
  citiesInfo: [],
  loading: false,
  error: null,
  onLogin: () => {},
  onLogout: () => {},
}

const ctx = React.createContext(init)

export default ctx
