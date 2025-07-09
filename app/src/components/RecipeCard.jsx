export function RecipeCard({ recipe, hasSave = false }) {
  const {
    title = "Delicious Recipe",
    ingredients = [],
    instructions = [],
    totalTime = 30
  } = recipe || {};

  return (
    <div className="recipe-card">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">
          {title}
        </h3>
        <div className="flex items-center text-purple-400">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm font-medium">{totalTime} mins</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="section-title">
            <svg className="section-icon text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Ingredients
          </h4>
          <ul className="space-y-2">
            {ingredients.map((ingredient, index) => (
                <li key={index} className="ingredient-item">
                  <span className="text-purple-400 mr-2 mt-1">•</span>
                  <span>{ingredient}</span>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h4 className="section-title">
            <svg className="section-icon text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Instructions
          </h4>
          <ol className="space-y-3">
            {instructions.map((instruction, index) => (
                <li key={index} className="instruction-item">
                  <span className="instruction-number">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{instruction}</span>
                </li>
              ))}
          </ol>
        </div>
      </div>

      {hasSave && (
        <div className="mt-6 pt-4 border-t border-white/10">
          <button className="save-button">
            Save Recipe
          </button>
        </div>
      )}
    </div>
  );
}
