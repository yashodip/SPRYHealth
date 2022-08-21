import React, { useReducer } from "react"
import ctx from "./weather-context"

const initReducer = {
  auth: false,
  weatherInfo: [],
}

const weatherReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, auth: true }
    case "LOGOUT":
      return { ...state, auth: false }
  }
  return initReducer
}

const WeatherProvider = (props) => {
  const [state, dispatch] = useReducer(weatherReducer, {
    auth: false,
    weatherInfo: [],
  })
  const loginHandler = () => {
    console.log("login called")
    dispatch({ type: "LOGIN" })
  }
  const logoutHandler = () => {
    dispatch({ type: "LOGOUT" })
  }
  const weatherCtx = {
    auth: state.auth,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  }

  return <ctx.Provider value={weatherCtx}>{props.children}</ctx.Provider>
}

export default WeatherProvider
