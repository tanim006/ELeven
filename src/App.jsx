import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import AfterBanner from './Component/AfterBanner/AfterBanner'
import Cards from './Component/Cards/Cards'
import Selected from './Component/Selected/Selected'
import PlayerCard from './Component/PlayerCard/PlayerCard'
import SelectedPlayers from './Component/SelectedPlayers/SelectedPlayers'




function App() {
  const [count, setCount] = useState(0)
    
    const [coin,setCoin]=useState(0)
    const [item,setItem] = useState(false)

    
    

    const [available,setAvailable] =useState([])
    const [showSelected, setShowSelected] = useState(false);


    // available

    const [selectedPlayers,setSelectedPlayers] = useState([])
    const handleSelectedPlayers = selected =>{
      console.log('adding soon ')
    }

// coin update 
    const handleCoin = () =>{
      const newCoin = coin+150000
      console.log('adding coin',newCoin)
      setCoin(newCoin)}

       // select
       const [players,setPlayers] = useState([])
       const handlePlayers = player => {
           const newPlayer = [...players,player]
           setPlayers(newPlayer)}
  
  return (
    <>
     
     <div className='lg:p-20'>
          <Navbar coin={coin}></Navbar>
          <Banner handleCoin={handleCoin} ></Banner>
          <AfterBanner players={players} item={item} setItem={setItem}></AfterBanner>
          <SelectedPlayers players={players} item={item} setItem={setItem}></SelectedPlayers>
          <Cards handleSelectedPlayers={handleSelectedPlayers} item={item} setItem={setItem} handlePlayers={handlePlayers} coin={coin} players={players} setCoin={setCoin}></Cards>
          
      </div>
      
    </>
  )
}

export default App
