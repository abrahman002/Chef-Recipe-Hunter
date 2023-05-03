import React from 'react';
import FoodCard from '../foodCard/FoodCard';




const RecipeDetails = ({ recipe }) => {

    const recipes=recipe.recipes
    // console.log(recipes)

    const {img_url,name,description,num_recipes,experience_year,rating}=recipe
    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto">
                <figure><img className='p-5' src={img_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Description: {description}</p>
                    <p>Number Of Recipes: {num_recipes}</p>
                    <p>Years Of Experience: {experience_year}</p>

                    <div className="card-actions justify-end items-center">
                        <p>Like: {rating}</p>
                    </div>
                </div>
            </div>

            <div className='flex container mx-auto gap-10 items-center'>
              {
                recipes.map(food=><FoodCard
                  key={food.name}
                  food={food}
                >
                </FoodCard>)
              }
            </div>

            
        </div>
        
    );
};

export default RecipeDetails;