import { useEffect, useReducer } from "react"
import "regenerator-runtime/runtime"
import ACTIONS from "./actions"
import ctx from "./weather-context"
const initReducer = {
  auth: false,
  country: "IN",
  weatherInfo: [],
  cities: ["pune", "jaipur"],
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
    case ACTIONS.UPDATE_INFO:
      return { ...state, weatherInfo: payload }
    case ACTIONS.UPDATE_CITIES_INFO:
      let tempCitiesInfo = [...state.citiesInfo]
      tempCitiesInfo.concat(...payload)
      return { ...state, citiesInfo: tempCitiesInfo.concat(...payload) }
  }
  return initReducer
}

function initFun(init) {
  console.log("cities", init.cities)

  /* const data = resp.json()
  const citiesInIndia = data.filter((item) => item.country == "IN")
  console.log("citiesInIndia", citiesInIndia)
  //init.weatherInfo.push(...citiesInIndia)
  console.log("reducer called ", cities, init) */
  return init
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

  async function initDataFetch() {
    let api_key = "31b12542256d12bfadd6c35e749b0177"
    let urls = state.cities.map(
      (city) =>
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${api_key}`
    )
    console.log("URLS", urls)
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${state.cities[0]}&limit=5&appid=${api_key}`
    dispatch({ type: ACTIONS.CALL_API })
    return await fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SUCCESS })
        return data
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.ERROR, payload: err.message })
      })
  }

  useEffect(() => {
    console.log("hello useE")
    initDataFetch().then((data) => {
      console.log("hello fetch")

      const citiesInIndia = data.filter((item) => item.country == "IN")
      dispatch({ type: ACTIONS.UPDATE_CITIES_INFO, payload: citiesInIndia })
    })
  }, [])

  /* return (
    state.weatherInfo.length && (
      <ctx.Provider value={weatherCtx}>{props.children}</ctx.Provider>
    )
  ) */
  return <ctx.Provider value={weatherCtx}>{props.children}</ctx.Provider>
}

export default WeatherProvider
