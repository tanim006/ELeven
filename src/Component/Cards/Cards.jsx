import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({handlePlayers,coin,setCoin,players,handleSelectedPlayers}) => {
    const [cards,SetCards]= useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => SetCards(data))
    },[])
    return (
        <div className=''>

<div className='w-full grid lg:grid-cols-3 md:grid-cols-2 justify-items-center mt-10 gap-5'>
    {cards.map(card => <Card key={card.id} handleSelectedPlayers={handleSelectedPlayers} handlePlayers={handlePlayers} players={players} setCoin={setCoin} coin={coin} card={card} />)}
</div>


            
        </div>
    );
};

export default Cards;