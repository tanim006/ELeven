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




function App() {
  const [count, setCount] = useState(0)
    
    const [coin,setCoin]=useState(0)
    
    

    const [available,setAvailable] =useState([])
    const [showSelected, setShowSelected] = useState(false);


    // available

    const handleAvailable = avail =>{
      const newAvailable = [...available,avail]
      console.log('adding available')
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
           console.log('adding soon player')
           setPlayers(newPlayer)}
  
  return (
    <>
     
     <div className='lg:p-20'>
          <Navbar coin={coin}></Navbar>
          <Banner handleCoin={handleCoin} ></Banner>
          <AfterBanner players={players}></AfterBanner>
          <Cards handlePlayers={handlePlayers} coin={coin} players={players} setCoin={setCoin}></Cards>
      </div>
      
    </>
  )
}

export default App
