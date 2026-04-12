import { Suspense } from 'react';
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbars/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'


const fetchPlayers = fetch('./players.json').then(res => res.json());
function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <AvailablePlayers fetchPlayers={fetchPlayers}></AvailablePlayers>
      </Suspense>
      <SelectedPlayers></SelectedPlayers>
    </>
  )
}

export default App
