import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Banner from './Component/Banner/Banner'
import AfterBanner from './Component/AfterBanner/AfterBanner'
import Cards from './Component/Cards/Cards'
import Selected from './Component/Selected/Selected'




function App() {
  const [count, setCount] = useState(0)
    
    const [coin,SetCoin]=useState(0)
    
    const [players,setPlayers] = useState([])

// coin update 
    const handleCoin = () =>{
      const newCoin = coin+150000
      console.log('adding coin',newCoin)
      SetCoin(newCoin)}

       // select
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
          <Cards handlePlayers={handlePlayers}></Cards>
        
          
      </div>
      
    </>
  )
}

export default App
