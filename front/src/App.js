import React,{useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route,useNavigate } from "react-router-dom";
import axios from 'axios'
import AdminInterface from './Component/AdminInterface';
import UserInterface from './Component/UserInterface';
import Add from './Component/Add';
import Update from './Component/Update';
import Home from './Component/home/Home';
import Card from './Component/Card';
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import Search from './Component/Search';
import './App.css';

import { auth } from "./firebase";
function App() {
 const [product,setProduct]= useState([]);
 const[toggle,setToggle]= useState(false);
 const [userName, setUserName] = useState("");
 const [productfiltred,setProductFiltred ] = useState("")
 const[Cardprod,setCardprod]=useState([])
//  const [handelfilter,setHandelfilter] = useState(false)
 const handelToggle=()=>{
  setToggle(!toggle)
 }
 

 useEffect(() => {
  const fetshProduct = async () => {
    try {
      const res = await axios.get("http://localhost:5002/api/product");
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  fetshProduct();
}, [toggle]);


 console.log(productfiltred);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  const handleSearch = (event) => {
    setProductFiltred(event.target.value)
  };
  const handelSubmit=(event)=>{
    event.preventDefault();
    const productfilt = product.filter((e,i)=>{
      return (e.name.toLowerCase()).includes( productfiltred.toLowerCase())
    });
    setProduct(productfilt)
  };
  const hadlecard=(prod)=>{
    setCardprod(prod)
  }

  return (
   <div>
    <div>
    <div className='nav'> 
    <a href='/home' className="logo" >home</a>
         <a href='/signup' className="logo" >Signup</a>
         <a href='/login' className="logo" >login</a>
         
           <Search  search={handelSubmit} handelsearch={handleSearch}/>
        </div>
    </div>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/adminSpace" element={<AdminInterface handeltoggle={handelToggle} prod={product} />} />
          {/* <Route path="/" element={<UserInterface handle={hadlecard} product={product}/>} /> */}
          <Route path="/add" element={<Add handeltoggle={handelToggle}/>} />
          <Route path="/update/:id" element={<Update  handeltoggle={handelToggle}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Card data={Cardprod} />} />
          <Route path="/home" element={<Home handle={hadlecard} name={userName} prod={product} />} />
        </Routes>

      </BrowserRouter>
    </div>
  </div> 
  );
}

export default App;
