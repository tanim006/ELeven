import React from 'react';

const Selected = ({card}) => {
    const {name,country,image,role,battingType,bowlingType,biddingPrice}=card

    return (
        <div>
             <div>
            <div className='w-full'>
                <div>
                    <h1 className='text-2xl font-semibold'>{name}</h1>
                    <h1 className='text-gray-700'>{role}</h1>
                </div>

            </div>
        </div>
        </div>
    );
};

export default Selected;