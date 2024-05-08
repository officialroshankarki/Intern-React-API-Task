import React, { useEffect, useState } from 'react'
import Coin from "./Product";
import Loader from "./Loader";
import axios from "axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
    const [coins,setCoins]= useState([]);
    useEffect (() => {
      const fetchAllCoins = async()=>{
         try{
          const {data} = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&per_page=20`);
          setCoins(data);
          setLoading(false);
          console.log(data);
        }
         catch (error) {
          alert("Not working");
         }
        };
      
      fetchAllCoins();

    },[])

  return (
    <div className='home'>
        {
       loading ? (<Loader />) : (coins.map((i)=>(
        <Coin name={i.name} 
        symbol={i.symbol} 
        imgsrc={i.image} 
        price={i.current_price}  
        key = {i.id}/>
    )
    )
        )}
    </div>
  );
};

export default Home