import { render } from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import App from "./components/App"
import Form from "./components/Form"
import PageNotFound from "./components/PageNotFound"
import WeatherProvider from "./store/WeatherProvider"
render(
  <WeatherProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="searchbycity" element={<Form />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </WeatherProvider>,
  document.getElementById("root")
)
