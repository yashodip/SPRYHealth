import { useEffect, useReducer } from "react"
import "regenerator-runtime/runtime"
import { fetchAll, flatten } from "./../utils/utils"
import ACTIONS from "./actions"
import ctx from "./weather-context"

let api_key = "31b12542256d12bfadd6c35e749b0177"

const initReducer = {
  auth: false,
  country: "IN",
  weatherInfo: [],
  cities: [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Varanasi",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Lucknow",
  ],
  citiesInfo: [],
  loading: false,
  error: null,
}

const weatherReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ACTIONS.LOGIN:
      return { ...state, auth: true }
    case ACTIONS.LOGOUT:
      return { ...state, auth: false }
    case ACTIONS.CALL_API:
      return { ...state, loading: true }
    case ACTIONS.SUCCESS:
      return { ...state, loading: false }
    case ACTIONS.ERROR:
      return { ...state, loading: false, error: payload }
    case ACTIONS.WEATHER_INFO:
      return { ...state, weatherInfo: payload }
    case ACTIONS.UPDATE_CITIES_INFO:
      let tempCitiesInfo = [...state.citiesInfo]
      /* tempCitiesInfo.concat(payload) */
      return { ...state, citiesInfo: tempCitiesInfo.concat(payload) }
  }
  return initReducer
}

const WeatherProvider = (props) => {
  const [state, dispatch] = useReducer(weatherReducer, initReducer)
  const loginHandler = () => {
    console.log("login called")
    dispatch({ type: ACTIONS.LOGIN })
  }
  const logoutHandler = () => {
    dispatch({ type: ACTIONS.LOGOUT })
  }
  async function initDataFetch() {
    let cityUrls = weatherCtx.cities.map(
      (city) =>
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`
    )
    dispatch({ type: ACTIONS.CALL_API })
    fetchAll(cityUrls)
      .then((results) => {
        const final = results.map((itemCity) => {
          console.log("inside of filter", itemCity)
          return itemCity.filter((item) => item.country == "IN")
        })
        const flattened = flatten(final)
        console.log("flatten", flattened)
        dispatch({ type: ACTIONS.UPDATE_CITIES_INFO, payload: flattened })
        console.log("results in fetchAll", final)
      })
      .catch((err) => console.log("Error", err))

    dispatch({ type: ACTIONS.SUCCESS })
    console.log("URLS", cityUrls)
  }
  async function fetchAllWeather() {
    let weatherUrls = weatherCtx.citiesInfo.map(
      (city) =>
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${api_key}`
    )
    console.log("fetchWeather calledd", weatherUrls)
    weatherUrls.length &&
      fetchAll(weatherUrls)
        .then((results) => {
          console.log("results from weather", results)
          const weatherInfo = results.map((item, index) => {
            return {
              icon: item.weather[0].icon,
              description: item.weather[0].description,
              temp: item.main.temp - 273.1,
              city: item.name,
              w_state: weatherCtx.citiesInfo[index].state,
              country: item.sys.country,
              lat: item.coord.lat,
              lon: item.coord.lon,
            }
          })
          dispatch({ type: ACTIONS.WEATHER_INFO, payload: weatherInfo })
        })
        .catch((err) => console.log("Error", err))
  }
  const weatherCtx = {
    auth: state.auth,
    country: state.country,
    weatherInfo: state.weatherInfo,
    cities: state.cities,
    citiesInfo: state.citiesInfo,
    loading: state.loading,
    error: state.error,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  }

  useEffect(() => {
    console.log("hello useE")
    initDataFetch()
  }, [])
  useEffect(() => {
    fetchAllWeather()
    console.log("fetch weather called")
  }, [weatherCtx.citiesInfo])

  /* return (
    state.weatherInfo.length && (
      <ctx.Provider value={weatherCtx}>{props.children}</ctx.Provider>
    )
  ) */
  return <ctx.Provider value={weatherCtx}>{props.children}</ctx.Provider>
}

export default WeatherProvider
