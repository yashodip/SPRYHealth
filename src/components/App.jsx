// No need to import "react" just for JSX in React 17+
import React, { useReducer } from "react"
import "../styles/index.scss"
import ctx from "./../store/context"
import Recipes from "./Recipes"

const init = {
  value: 5,
}
const reducer = (state, action) => {
  if (action.type == "inc") return { value: state.value + 1 }
  else {
    return { value: 1001 }
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, init)
  return (
    <>
      <ctx.Provider value={{ counter: state, dispatch: dispatch }}>
        <section className="hero"></section>
        <main>
          <section>
            <h1>Oh Herro, React.</h1>
            <Recipes />
          </section>
        </main>
      </ctx.Provider>
    </>
  )
}

export default App
