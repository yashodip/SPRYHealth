// Importing "react" is still required when using methods from it
import { useContext, useState } from "react"
import ctx from "../store/context"
const elvenShieldRecipe = {
  leatherStrips: 2,
  ironIngot: 1,
  refinedMoonstone: 4,
}

// ES7 Object spread example
const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 1,
}

const Recipes = () => {
  const [recipe, setRecipe] = useState(elvenShieldRecipe)
  const context = useContext(ctx)
  const { counter, dispatch } = context
  console.log("ctx----", context)
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(elvenShieldRecipe)}>Elven Shield</button>
      <button onClick={() => setRecipe(elvenGauntletsRecipe)}>
        Elven Gauntlets
      </button>
      <h1>{counter.value}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>Inc</button>
      <ul>
        {Object.keys(recipe).map((material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes
