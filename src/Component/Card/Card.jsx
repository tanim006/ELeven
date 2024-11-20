import React from 'react';
import { FaFlagCheckered } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlayerCard from '../PlayerCard/PlayerCard';

const Card = ({card,handlePlayers,coin,setCoin,players,handleSelectedPlayers}) => {
    const {name,country,image,role,battingType,bowlingType,biddingPrice}=card
    const notify = () => toast("Player Added Successfully",{ autoClose: 1000 });
    const notifyError = () => toast.error("Not enough coins to buy this player.",{ autoClose: 1000 });
    const notifyAlreadySelected = () => toast.info("Player already selected.",{ autoClose: 1000 });

    const DecreaseCoin =() =>{
        const updatedCoin = coin-biddingPrice
        setCoin(updatedCoin) 
    }
   

    // Function to handle both actions: updating coins and showing the toast
    const handleClick = () => 
    {
    const isAlreadySelected = players.some((player) => player.name === name);
    if (players.length >= 6) {
        toast.error("You can only select up to 6 players.", { autoClose: 1000 });
        return;
    }

        if(isAlreadySelected){
            notifyAlreadySelected()
            return

        }
     if(coin>= biddingPrice){
        setCoin(coin-biddingPrice)
        handlePlayers(card);  // Update the coin state
        notify();  
        handleSelectedPlayers()
            // Show the notification
     }
     else{
        notifyError()
        return
     }
    };
    return (
        <div className=''>
            <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
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
        <button className='btn bg-purple-500 text-white' onClick={()=>handleClick(players)} >Choose Player</button>
        </div>
        
        
    </div>

    </div>
  </div>
</div>
            
        </div>
    );
};

{/* <PlayerCard players={players}></PlayerCard> */}

export default Card;