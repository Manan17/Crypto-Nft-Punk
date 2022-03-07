import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { CardComponent } from './components/cardcomponent/CardComponent';
import Header from './components/header/Header';
import TopComponent from './components/topcomponent/TopComponent';

function App() {
  const [punks,setPunks] = useState([]);
  useEffect(() => {
    const getPunks = async () => {
      const res = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x35a9a8ca3b2065D702F7C2dfc01D60B8385bE695&order_direction=asc');         
      setPunks(res.data.assets);
  }
  getPunks();
  },[])
  return (
    <div className="app">
      <Header />
      <TopComponent address={punks[0]?.owner.address} image_url={punks[0]?.owner.profile_img_url} />
      <div className='app__cards' >
        {     
        punks.map(punk => (
          <div key={punk.token_id}>
             <CardComponent id={punk.token_id} image_url={punk.image_url} price={punk.traits[0].value} name={punk.name} />
          </div>
        )) 
        } 
      </div>
    </div>
  );
}

export default App;


