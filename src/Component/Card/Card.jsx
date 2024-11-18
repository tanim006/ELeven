import React from 'react';
import { FaFlagCheckered } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({card,handlePlayers}) => {
    const {name,country,image,role,battingType,bowlingType,biddingPrice}=card
    const notify = () => toast("Player Added Successfully");

    // Function to handle both actions: updating coins and showing the toast
    const handleClick = () => {
        handlePlayers();  // Update the coin state
        notify();      // Show the notification
    };
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">{name}</h2>
    <div className="card-actions flex items-center justify-between border-b-2 p-3">
        <div className='flex items-center gap-2' >
            <FaFlagCheckered></FaFlagCheckered>
            <h1>{country}</h1>
        </div>
        <button className='btn bg-green-400'>{role}</button>
    </div>
    <div>
    <div className="card-action border-b-2 p-3">
    <h1 className='mb-3'>Ratings</h1>

        <div className='flex items-center gap-2 justify-between' >
            <h1 className='font-bold'>{battingType}</h1>
            <h1>{bowlingType}</h1>
        </div>
        <div className='flex items-center justify-between mt-3'>
            <h1 className='font-semibold'>price: {biddingPrice}</h1>
        <button className='btn bg-purple-500 text-white' onClick={handleClick} >Choose Player</button>
        </div>
        
    </div>

    </div>
  </div>
</div>
            
        </div>
    );
};

// "playerId": 5,
//       "name": "Jasprit Bumrah",
//       "country": "India",
//       "image": "https://example.com/images/jasprit_bumrah.jpg",
//       "role": "Bowler",
//       "battingType": "Right-hand Bat",
//       "bowlingType": "Right-arm Fast",
//       "biddingPrice": 280000

export default Card;