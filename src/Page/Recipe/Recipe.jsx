import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {

    const {id}=useParams()

    const recipeDetails=useLoaderData()

    console.log(recipeDetails)

    return (
        <div> 
            
           




        </div>
    );
};

export default Recipe;