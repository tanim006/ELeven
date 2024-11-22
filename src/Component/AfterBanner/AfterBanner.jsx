import React, { useState } from 'react';

const AfterBanner = ({players,handleAvailable,showSelected,item, setItem }) => {

    return (
        <div className='flex items-center justify-between pt-5 '>
            <h1 className='lg:text-3xl font-bold'>Available Players</h1>
            <div className='flex space-x-2'>
            <div >
                <button className='btn bg-lime-400 border text-lg border-gray-300 '>Available</button>
            </div>
            <div className='' onClick={()=> setItem(!item)}>
                {
                    item === true ? 'open' : 'close'
                }
                <button className='btn text-lg' onClick={handleAvailable}>
                    {showSelected ? "Show All Players" : `Selected: ${players.length}`}

                </button>
            </div>
            </div>
        </div>
    );
};

export default AfterBanner;