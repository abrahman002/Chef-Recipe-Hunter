import React from 'react';

const RecipeDetails = ({ recipe }) => {
    return (
        <div>

            <div className="card lg:card-side bg-base-100 shadow-xl container mx-auto">
                <figure><img className='p-5' src={recipe.img_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe.name}</h2>
                    <p>Description: {recipe.description}</p>
                    <p>Number Of Recipes: {recipe.num_recipes}</p>
                    <p>Years Of Experience: {recipe.experience_year}</p>

                    <div className="card-actions justify-end items-center">
                        <p>Like: {recipe.rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;