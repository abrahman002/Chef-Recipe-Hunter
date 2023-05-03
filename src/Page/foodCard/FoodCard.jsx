import React, { useState } from 'react';
import './FoodCard.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FoodCard = ({ food }) => {
    
    // console.log(food)
    const { picture, name, rating, ingredients, cooking_method } = food
    // console.log(picture)

    const handleButton = (event) => {
        toast("Added This Items!");
        event.currentTarget.disabled = true;
        return
    }
    return (
        <div className='mt-20 mb-10 w-full  food-info'>
            <div className="card card-compact w-96 bg-base-100 shadow-sm">
                <figure><img src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Rating:{rating}</p>
                    <p>Ingredients:{ingredients.map(n => <li>{n}</li>)}</p>
                    <p>Cooking-Method:{cooking_method}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={handleButton}>Favorite Button</button>
                        <ToastContainer />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;