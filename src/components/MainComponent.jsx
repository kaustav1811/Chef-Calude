import React from "react"

import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"
import { getRecipeFromMistral } from "../ai"

export default function Main() {

    const [ingredients,setIngredients] = React.useState([])

    const [recipe, setRecipe] = React.useState("")

    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            // recipeSection.current.scrollIntoView({behavior : "smooth"})
            
            const yCoord = recipeSection.current.getBoundingClientRect().top + window.scrollY
            window.scroll({
                top: yCoord,
                behavior: "smooth"
            })
        }
    }, [recipe])
    
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")/*Here we type in the name of the element we want */
        if (newIngredient === "") {
        alert("Please enter an ingredient before adding!");
        return;
        }
        setIngredients((prevIngredients) => [...prevIngredients,newIngredient])
    }

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }

    return (
        <main>
            <form action = {addIngredient} className = "add-ingredient-form">
                <input 
                type = "text"
                placeholder = "e.g. Oregano"
                aria-label = "Add ingredient"
                name = "ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients = {ingredients} 
                    getRecipe = {getRecipe}
                    ref = {recipeSection}
                />
            }

            {recipe && <ClaudeRecipe recipe = {recipe}/>}

        </main>
    )
}