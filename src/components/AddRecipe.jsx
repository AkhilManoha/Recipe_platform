import React, { useState } from 'react';

const AddRecipe = ({ onAddRecipe }) => {
  const [showForm, setShowForm] = useState(false);
  const [recipe, setRecipe] = useState({
    title: '',
    ingredients: '',
    procedure: '',
    image: ''
  });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recipe.title || !recipe.ingredients || !recipe.procedure) {
      alert('Please fill in all required fields');
      return;
    }
    onAddRecipe(recipe);
    setRecipe({
      title: '',
      ingredients: '',
      procedure: '',
      image: ''
    });
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        {showForm ? (
          <>
            <h3 className="card-title mb-4">Add New Recipe</h3>
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
            <label htmlFor="ingredients" className="form-label">Ingredients</label>
            <textarea
              className="form-control"
              id="ingredients"
              rows="4"
              value={recipe.ingredients}
              onChange={(e) => setRecipe({...recipe, ingredients: e.target.value})}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="procedure" className="form-label">Procedure</label>
            <textarea
              className="form-control"
              id="procedure"
              rows="6"
              value={recipe.procedure}
              onChange={(e) => setRecipe({...recipe, procedure: e.target.value})}
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
              <button type="submit" className="btn btn-primary me-2">Add Recipe</button>
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </>
        ) : (
          <button 
            className="btn btn-primary w-100"
            onClick={() => setShowForm(true)}
          >
            Add New Recipe
          </button>
        )}
      </div>
    </div>

  );
};

export default AddRecipe;
