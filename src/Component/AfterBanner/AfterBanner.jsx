import React from 'react';

const AfterBanner = ({players}) => {
    return (
        <div className='flex items-center justify-between pt-5 '>
            <h1 className='lg:text-3xl font-bold'>Available Players</h1>
            <div className='space-x-2'>
                <button className='btn bg-lime-400 border text-lg border-gray-300 '>Available</button>
                <button className='btn text-lg'>Selected : {players.length}</button>
            </div>
        </div>
    );
};

export default AfterBanner;