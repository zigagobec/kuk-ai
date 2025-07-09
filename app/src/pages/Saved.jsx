import { RecipeCard } from "../components/RecipeCard";

const savedRecipes = [
    {
        "title": "test",
        "ingredients": ["chicken", "rice"],
        "instructions": ["cook chicken cook rice"],
        "totalTime": 20
    },
    {
        "title": "test",
        "ingredients": ["chicken", "rice"],
        "instructions": ["cook chicken cook rice"],
        "totalTime": 20
    },
    {
        "title": "test",
        "ingredients": ["chicken", "rice"],
        "instructions": ["cook chicken cook rice"],
        "totalTime": 20
    }
]

function Saved() {
    return (
        <div className="min-h-screen pt-16">
            <div className="max-w-5xl mx-auto px-6 py-4">
                <div className="text-center mb-4">
                    <h1 className="text-2xl md:text-6xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-10">
                        My saved recipes
                    </h1>
                </div>

                <div className="max-w-5xl mx-auto space-y-8">
                    {savedRecipes.map(recipe => (
                        <RecipeCard key={index} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Saved;