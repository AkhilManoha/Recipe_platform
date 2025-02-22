import React, { useState } from 'react'

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({
    title: '',
    description: '',
    ingredients: '',
    instructions: '',
    image: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Handle recipe submission
    console.log('Recipe submitted:', recipe)
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">Add New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Recipe Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={recipe.title}
            onChange={(e) => setRecipe({...recipe, title: e.target.value})}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={recipe.description}
            onChange={(e) => setRecipe({...recipe, description: e.target.value})}
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">Ingredients</label>
          <textarea
            className="form-control"
            id="ingredients"
            rows="5"
            value={recipe.ingredients}
            onChange={(e) => setRecipe({...recipe, ingredients: e.target.value})}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="instructions" className="form-label">Instructions</label>
          <textarea
            className="form-control"
            id="instructions"
            rows="10"
            value={recipe.instructions}
            onChange={(e) => setRecipe({...recipe, instructions: e.target.value})}
            required
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image URL</label>
          <input
            type="url"
            className="form-control"
            id="image"
            value={recipe.image}
            onChange={(e) => setRecipe({...recipe, image: e.target.value})}
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Recipe</button>
      </form>
    </div>
  )
}

export default AddRecipe
