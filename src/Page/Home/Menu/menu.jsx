import React from 'react';
import './mneu.css'

const menu = () => {
  return (
    <div className='mb-10'>
      <h1 className='text-3xl text-center'>From Our Menu </h1>
      <div className='container flex gap-10 mx-auto mt-10 menu-info'>

        <div className="shadow-sm card w-96 bg-base-100">
          <figure><img src="https://www.thedailymeal.com/img/gallery/the-ultimate-american-fast-food-restaurants-ranked/intro-1670029550.webp" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">ACAI BOWLS</h2>

          </div>
        </div>
        <div className="shadow-sm card w-96 bg-base-100">
          <figure><img src="https://www.thedailymeal.com/img/gallery/the-ultimate-american-fast-food-restaurants-ranked/arbys-1670029550.webp" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">PANINIS</h2>

          </div>
        </div>
        <div className="shadow-sm card w-96 bg-base-100">
          <figure><img src="https://www.thedailymeal.com/img/gallery/the-ultimate-american-fast-food-restaurants-ranked/wendys-1670029550.webp" alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">SMOOTHIES</h2>

          </div>
        </div>
      </div>
    </div>
  );
};

export default menu;