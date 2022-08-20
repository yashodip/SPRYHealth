import React from "react"

const Hero = () => {
  return (
    <div className="block">
      <nav className=" w-full py-6">
        <ul className="flex items-center justify-around max-w-6xl mx-auto">
          <li>
            <h1 className="text-black">SPRY Weather App</h1>
          </li>

          <li>
            <a href="" className="text-black px-6">
              Home
            </a>
            <a href="" className="text-black px-6">
              Search By City
            </a>
            <a href="" className="text-black px-6">
              About
            </a>
          </li>

          <li>
            <a href="" className="text-black px-6">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Hero
