import React from 'react';
import './HomeCard.css'

const HomeCard = ({ data }) => {
    console.log(data)
    return (
        <div className='home-card'>

            <div className="card card-compact w-96 bg-base-100 shadow-md container mx-auto">
                <figure><img src={data.img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <h3>Years of experience:{data.experience_year}</h3>
                    <h4>Numbers of recipes:{data.num_recipes}</h4>
                    <div className="card-actions justify-end items-center">
                        <p>Like: {data.rating}k</p>
                        <button className="btn btn-primary">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;