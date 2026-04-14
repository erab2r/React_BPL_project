import React, { use } from 'react';
import PlayerCard from '../PlayerCard/PlayerCard';
const AvailablePlayers = ({ fetchPlayers }) => {
    const  playerData = use(fetchPlayers);
    console.log(playerData);
    return (
        <div className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                playerData.map(player =>  <PlayerCard key={player.id} player={player}></PlayerCard>)
            }
        </div>
    );
};

export default AvailablePlayers;