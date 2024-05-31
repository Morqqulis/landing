import { useEffect } from 'react'
import { useState } from 'react'
import { getRecipes } from '../utils'

const TableList = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        getRecipes().then(recipes => setRecipes(recipes.recipes))

        return () => setRecipes([])
    }, [])

    const handleRemoveRecipe = id => {
        setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id))
    }

    return (
        <section className={`py-10`}>
            <div className="container">
                <h1 className={`title mb-10`}>Table List</h1>
                <div className={`flex min-h-[calc(100vh-508px)] flex-col items-center justify-center`}>
                    <table className={`table w-full`}>
                        <thead>
                            <tr>
                                <th className={`border border-green-800 p-4`}>Id</th>
                                <th className={`border border-green-800 p-4`}>Image</th>
                                <th className={`border border-green-800 p-4`}>Name</th>
                                <th className={`border border-green-800 p-4`}>Difficulty</th>
                                <th className={`border border-green-800 p-4`}>Cuisine</th>
                                <th className={`border border-green-800 p-4`}>Time</th>
                                <th className={`border border-green-800 p-4`}>Rating</th>
                                <th className={`border border-green-800 p-4`}>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map(recipe => (
                                <tr className={`text-center`} key={recipe.id}>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.id}</td>
                                    <td className={`border border-cyan-500 p-2`}>
                                        <img
                                            className={`mx-auto block`}
                                            src={recipe.image}
                                            alt="recipe Image"
                                            width={40}
                                            height={40}
                                        />
                                    </td>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.name}</td>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.difficulty}</td>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.cuisine}</td>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.cookTimeMinutes}</td>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.rating}</td>
                                    <td className={`border border-cyan-500 p-2`}>{recipe.caloriesPerServing}</td>
                                    <td
                                        className={`border border-cyan-500 p-2 duration-300 hover:scale-110 hover:cursor-pointer`}
                                        onClick={() => handleRemoveRecipe(recipe.id)}
                                    >
                                        <img
                                            className={`mx-auto`}
                                            src={'/assets/remove.svg'}
                                            alt="remove icon"
                                            width={20}
                                            height={20}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default TableList
