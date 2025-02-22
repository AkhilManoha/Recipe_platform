import React, { useState, useEffect } from 'react';
import AddRecipe from '../components/AddRecipe';
import RecipeCard from '../components/RecipeCard';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);

  const handleAddRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, { id: prevRecipes.length + 1, ...newRecipe }]);
  };

  useEffect(() => {
    // TODO: Fetch user's recipes from API
    const sampleRecipes = [
      {
        id: 1,
        title: 'My Special Pasta',
        image: '/ban.jpg',
        description: 'My secret pasta recipe',
        author: 'Me',
        rating: 4.7
      },
      {
        id: 2,
        title: 'Grandma\'s Cookies',
        image: '/ban.jpg',
        description: 'Family recipe passed down for generations',
        author: 'Me',
        rating: 4.9
      }
    ];
    setRecipes(sampleRecipes);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">My Recipes</h2>
      <AddRecipe onAddRecipe={handleAddRecipe} />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map(recipe => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            description={recipe.description}
            author={recipe.author}
            rating={recipe.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default MyRecipes;
