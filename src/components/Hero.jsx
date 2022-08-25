import React, { useContext } from "react"
import { Link } from "react-router-dom"
import weatherBanner from "./../images/weather-banner.png"
import ctx from "./../store/weather-context"
const Hero = () => {
  const weatherCtx = useContext(ctx)
  console.log("weatherCtx", weatherCtx)
  return (
    <div>
      <nav className="border-2 border-red-500 w-full py-6">
        <ul className="flex items-center justify-around max-w-6xl mx-auto">
          <li>
            <h1>SPRY Weather App</h1>
          </li>

          <li>
            <span className="px-6">
              <Link to="/home">Home</Link>
            </span>
            {weatherCtx.auth ? (
              <span className="px-6">
                <Link to="/searchbycity">Search By City</Link>
              </span>
            ) : (
              <></>
            )}
          </li>

          <li>
            {!weatherCtx.auth && (
              <button
                className="btn btn-primary px-6"
                onClick={weatherCtx.onLogin}
              >
                Login
              </button>
            )}
            {weatherCtx.auth && (
              <button
                className="btn btn-primary px-6"
                onClick={weatherCtx.onLogout}
              >
                Logout
              </button>
            )}
          </li>
        </ul>
      </nav>
      <section className="hero">
        <img src={weatherBanner} alt="houses on the water" className="w-full" />
      </section>
    </div>
  )
}

export default Hero
