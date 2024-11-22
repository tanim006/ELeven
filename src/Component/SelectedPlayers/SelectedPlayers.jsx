import React from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';

const SelectedPlayers = ({players,item ,setItem}) => {
    return (
        <div className={`w-full ${item ? '': 'hidden'}`}>
            <h1 className='text-4xl font-bold'>Selected Players :({players.length}/6) </h1>

            {
                players.map(players => <PlayerCard players={players}></PlayerCard>)
            }
           
        </div>
    );
};

export default SelectedPlayers;