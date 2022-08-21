// No need to import "react" just for JSX in React 17+
import React, { useContext } from "react"
import ctx from "../store/weather-context"
import "../styles/index.scss"
import Hero from "./Hero"
import MainTable from "./MainTable"

const App = () => {
  const weatherCtx = useContext(ctx)
  return (
    <>
      {/*  <section className="hero"></section> */}

      <Hero></Hero>
      <main className="block">
        <MainTable></MainTable>
      </main>
    </>
  )
}

export default App
