import { render } from "react-dom"

import App from "./components/App"
import WeatherProvider from "./store/WeatherProvider"
render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.getElementById("root")
)
