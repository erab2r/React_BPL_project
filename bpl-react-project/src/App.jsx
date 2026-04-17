import { Suspense } from 'react';
import { useState } from 'react';
// import { ToastContainer} from 'react-toastify';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbars/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = fetch('./players.json').then(res => res.json());
function App() {
  const [toggle,setToggle] = useState(true);
  const [availablePlayers,setAvailablePlayers] = useState(1000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);

    const removePlayer = (p) =>{
    const fileteredData = purchasedPlayers.filter(ply=> ply.player_name!==p.player_name)
    console.log(p);
    setPurchasedPlayers(fileteredData)
    setAvailablePlayers(availablePlayers+parseFloat(p.price.split("USD").join("").split(",").join("")))
  }
  
  return (
    <>
      <Navbar availablePlayers={availablePlayers}></Navbar>
      <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-2xl'>{
         toggle=== true? "Available Players": `Selected Players(${purchasedPlayers.length})`}</h1>
        <div className='font-bold'>
          <button onClick={()=> setToggle(true)}className={`py-3 px-4 border-1 rounded-l-2xl border-r-0  ${toggle === true? "bg-[#E7FE29]":""}`}>Available</button>
          <button onClick={()=> setToggle(false)} className={`py-3 px-4 border-1 rounded-r-2xl border-l-0 ${toggle === false? "bg-[#E7FE29]":""}`}>Selected  
            <span>({purchasedPlayers.length})</span></button>
        </div>
      </div>
      {
        toggle === true? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}
             availablePlayers={availablePlayers} setAvailablePlayers={setAvailablePlayers} fetchPlayers={fetchPlayers}></AvailablePlayers>
      </Suspense>:<SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer}></SelectedPlayers>
      }
      {/* <ToastContainer/> */}
    </>
  )
}

export default App
