import React, { use } from 'react';
import userImg from '../../assets/user_1.png';
import flagImg from '../../assets/report-1.png';

const AvailablePlayers = ({ fetchPlayers }) => {
    const  playerData = use(fetchPlayers);
    console.log(playerData);
    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex'>
                        <img src={userImg} alt="User"  /><h2 className="card-title ml-2">Virat Kohli</h2>
                    </div>
                        <div className='flex justify-between mt-4 border-b-1 border-b-gray-400 pb-2'>
                            <div className='flex items-center'>
                                <img  className='w-[20px] h-[20px]'  src={flagImg} alt="Flag"  />
                                <span className='ml-2'>India</span>
                            </div>
                            <button className="btn">All rounder</button>
                        </div>
                        <div className='flex justify-between font-bold'>
                            <span>Rating</span>
                            <span className='ml-2'>8.5</span>
                        </div>

                    <div className="card-actions mt-4 justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;