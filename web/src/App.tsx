import {MagnifyingGlassPlus} from 'phosphor-react';

import './styles/main.css';
import logoImg from './assets/Logo-nlw-esports.svg';
import { GameBanner } from './components/GameBanner';
import { CreateAdsBanner } from './components/CreateAdsBanner';
import { useEffect, useState } from 'react';

function App() {

  const [games, setGames] = useState([])

  useEffect(() => {
    fetch('http://localhost:3333/games')
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })
  }, [])
  
  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
     <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <GameBanner bannerUrl='/game-1.png' title='League of Legends' adsCount={1} />
        <GameBanner bannerUrl='/game-2.png' title='Dota 2' adsCount={2} />
        <GameBanner bannerUrl='/game-3.png' title='CS GO' adsCount={3} />
        <GameBanner bannerUrl='/game-4.png' title='' adsCount={5} />
        <GameBanner bannerUrl='/game-5.png' title='' adsCount={4} />
        <GameBanner bannerUrl='/game-6.png' title='' adsCount={6} />
      </div>
      <CreateAdsBanner />   
  </div>
  )
}
export default App
