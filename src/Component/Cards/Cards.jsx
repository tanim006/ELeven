import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = ({handlePlayers}) => {
    const [cards,SetCards]= useState([])
    useEffect(()=>{
        fetch('Data.json')
        .then(res => res.json())
        .then(data => SetCards(data))
    },[])
    return (
        <div>

<div className='w-full grid lg:grid-cols-3 md:grid-cols-2 justify-items-center mt-10 gap-5'>
    {cards.map(card => <Card key={card.id} handlePlayers={handlePlayers}  card={card} />)}
</div>

            
        </div>
    );
};

export default Cards;