import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import RecipeDetails from '../RecepiDetails/RecipeDetails';

const Recipe = () => {

    const { id } = useParams()

    const recipeDetails = useLoaderData()

    console.log(recipeDetails)
    

    return (
        <div className='mb-10 mt-10'>
            {
                recipeDetails.map(recipe=><RecipeDetails
                   key={recipe.id}
                   recipe={recipe}
                ></RecipeDetails>)
            }
        </div>
    );
};

export default Recipe;