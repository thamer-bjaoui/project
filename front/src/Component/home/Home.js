import React,{useState,useEffect} from 'react';
import "../home/home.css"
import {useNavigate} from "react-router-dom"
function Home({prod,handle}) {
const navigate=useNavigate()
  return (
    <div className='home'>
      {prod.map((e) => (
        <div key={e.id} className="producte">
          <img className="imge" src={e.imageUrl} alt="img" />
          <h2>{e.name}</h2>
          
           <button onClick={()=>{navigate("/")
                                 handle(e)}}  >Buy</button>
          <span>${e.price}</span>
        </div>
      ))}
    </div>
  ) }
        
export default Home