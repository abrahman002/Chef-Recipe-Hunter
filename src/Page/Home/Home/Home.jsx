import React from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData, useParams } from 'react-router-dom';
import HomeCard from '../HomeCard/HomeCard';
import Work from '../Work/Work';
import Menu from '../Menu/menu'

const Home = () => {

    const {id}=useParams()

    const allData=useLoaderData()
    console.log(allData)
    return (
        <div>
            <Banner></Banner>
           <div className=' home'>
           <h2 className='text-5xl text-center text-'>Chef section</h2>
             <div className='grid md:grid-cols-3 gap-10 mt-10 mb-10'>
             {
                allData.map(data => <HomeCard
                  key={data.id}
                  data={data}
                >
                </HomeCard>)
            }
             </div>
           </div>
           <Work></Work>
           <Menu></Menu>
        </div>
    );
};

export default Home;