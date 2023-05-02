import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {

    const {id}=useParams()

    const allData=useLoaderData()
    console.log(allData)
    return (
        <div>
            <Banner></Banner>
           <div className='mt-10  '>
           <h2 className='text-center text-5xl text-'>Chef section</h2>
             <div className='grid grid-cols-3 mt-10 gap-10 mb-10'>
             {
                allData.map(data => <HomeCard
                  key={data.id}
                  data={data}
                >
                </HomeCard>)
            }
             </div>
           </div>
        </div>
    );
};

export default Home;