import React from 'react';
import navImg from '../../assets/logo.png'
import dollar from '../../assets/dollar.png'


const Navbar = ({availablePlayers}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
            <div className="flex-1">
                <img src={navImg} alt="Logo" className="h-[60px] w-[60px]" />
            </div>

            <div className="flex items-center">
                <span className='mr-1'>{availablePlayers.toLocaleString()}</span>
                <span className='mr-1'>Coin</span>
                <img src={dollar} alt="Dollar Icon" className="h-[20px] w-[20px]" />
            </div>
        </div>
    );
};

export default Navbar;