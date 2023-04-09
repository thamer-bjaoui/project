import React,{useState} from 'react';
import { Link,useNavigate,useLocation } from 'react-router-dom';
import axios from 'axios';

const Update = ({handeltoggle}) => {

  const [updateProduct,setApdateProduct]=useState({
    name:"",
    description:"",
    price:0,
    imageUrl:"",
    category:""
   });
   const navigate=useNavigate()
   const location = useLocation();
   const productId = location.pathname.split("/")[2];
   console.log(location.pathname.split("/")[2]);
   const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5002/api/rent/update/${productId}`, updateProduct);
      navigate("/adminSpace");
      handeltoggle()
    } catch (err) {
      console.log(err);
      
    }
  };


  return (
    <div className="form">
    <h1>Update</h1>
    <input 
    type='text'
    label='Name'
    onChange={(e)=>{
      setApdateProduct((prev)=>({...prev,name:e.target.value}))
    }}
    placeholder='Enter name'
    />
    <textarea
     className='textarea'
      rows={5}
      type="text"
      placeholder="Enter Description"
      name="Description"
      onChange={(e)=>{
        setApdateProduct((prev)=>({...prev,description:e.target.value}))
      }}
    />
    
    <input 
    className='input'
    type='number'
    label='Price'
    onChange={(e)=>{
      setApdateProduct((prev)=>({...prev,price:e.target.value}))
    }}
    placeholder='Enter Price'
    />
    <input 
    className='input'
    type='text'
    label='image'
    onChange={(e)=>{
      setApdateProduct((prev)=>({...prev,imageUrl:e.target.value}))
    }}
    placeholder='Enter Image'
    />
    <input 
    className='input'
    type='text'
    label='Category'
    onChange={(e)=>{
      setApdateProduct((prev)=>({...prev,category:e.target.value}))
    }}
    placeholder='Enter Categoey'
    />
      <button className='button' onClick={handleClick}> Update </button>

  </div>
  )
}

export default Update