import React from 'react';
import './FoodCard.css'

const FoodCard = ({ food }) => {
    console.log(food)
    const {picture,name,rating,ingredients,cooking_method}=food
    // console.log(picture)
    return (
        <div className='mt-20 mb-10 w-full  food-info'>
            <div className="card card-compact w-96 bg-base-100 shadow-sm">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Rating:{rating}</p>
                    <p>Ingredients:{ingredients.map(n=><li>{n}</li>)}</p>
                    <p>Cooking-Method:{cooking_method}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Favorite Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;