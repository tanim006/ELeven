import React from 'react';
import { MdDeleteForever } from "react-icons/md";

const PlayerCard = ({players}) => {
    const {name,country,image,role,battingType,bowlingType,biddingPrice}=players

    return (
        <div>
            <div className='w-full flex justify-between bg-gray-200 p-4 rounded-lg'>
               <div>
               <img src="" alt="" />
                <div className=''>
                    
                    <h1 className='font-bold text-lg'>Name : <span className='font-normal'>{name}</span></h1>
                    <h1 className='font-bold text-lg'>Playing as : <span className='font-normal'>{role}</span></h1>
                    
                </div>
               </div>
             <button className='btn btn-ghost'><MdDeleteForever className='text-5xl p-2 border border-orange-600 rounded-xl'></MdDeleteForever></button>
            </div>
            <button className='btn bg-green-500 mt-4'>Add Player</button>
        </div>
    );
};

export default PlayerCard;