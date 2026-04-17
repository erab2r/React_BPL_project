import React, { useState } from 'react';
import userImg from '../../assets/user_1.png';
import flagImg from '../../assets/report-1.png';
// import { toast } from 'react-toastify';

const PlayerCard = ({player, setAvailablePlayers, availablePlayers, setPurchasedPlayers, purchasedPlayers}) => {
    const [isSelected, setIsSelected] = useState(false);
    const handleSelectPlayer = (playerData) => {
        const playerPrice = parseFloat(playerData.price.split('USD').join('').split(',').join(''));
            if(availablePlayers < playerPrice){
                 alert("Not enough coins!!")
                return;
            }
            setIsSelected(true);
            setAvailablePlayers(availablePlayers - 
                    playerPrice);
            setPurchasedPlayers([...purchasedPlayers, playerData]);
            //  toast("Player purchased!")
    }
    return (
        <div className="card bg-base-100 shadow-sm p-4">
                        <figure>
                            <img
                                src={player.player_image}
                                alt="Shoes" 
                                className='w-full object-cover'/>
                        </figure>
                        <div className="mt-4">
                            <div className='flex'>
                                <img src={userImg} alt="User"  /><h2 className="card-title ml-2">{player.player_name}</h2>
                            </div>
                                <div className='flex justify-between mt-4 border-b-1 border-b-gray-400 pb-2'>
                                    <div className='flex items-center'>
                                        <img  className='w-[20px] h-[20px]'  src={flagImg} alt="Flag"  />
                                        <span className='ml-2'>{player.player_country}</span>
                                    </div>
                                    <button className="btn">{player.playing_role}</button>
                                </div>
                                <div className='flex justify-between font-bold'>
                                    <span>Rating</span>
                                    <span className='ml-2'>{player.rating}</span>
                                </div>
                                <div className='flex justify-between mt-4'>
                                    <span className='font-bold'>{player.bating_style}</span>
                                    <span className='ml-2'>{player.bowling_style}</span>
                                </div>
        
                            <div className="card-actions mt-4 flex justify-between items-center">
                                <p className='font-bold'>Price: {player.price}</p>
                                <button disabled={isSelected} onClick={()=>{
                                    handleSelectPlayer(player);
                                }} 
                                className="btn">{isSelected===true?"Selected":"Choose player"}</button>
                            </div>
                        </div>
                    </div>
    );
};

export default PlayerCard;