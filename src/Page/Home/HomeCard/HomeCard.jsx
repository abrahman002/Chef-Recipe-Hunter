import React from 'react';
import './HomeCard.css';
import { Link } from 'react-router-dom';

const HomeCard = ({ data }) => {
    console.log(data)
    return (
        <div className='home-card'>

            <div className="container mx-auto shadow-md card card-compact w-96 bg-base-100">
                <figure><img src={data.img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.name}</h2>
                    <h3>Years of experience:{data.experience_year}</h3>
                    <h4>Numbers of recipes:{data.num_recipes}</h4>
                    <div className="items-center justify-end card-actions">
                        <p>Like: {data.rating}k</p>
                        <button className="btn btn-primary" ><Link to='/recipe'>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;