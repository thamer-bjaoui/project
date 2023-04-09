import React,{useState} from 'react';
import {link , useNavigate} from 'react-router-dom';
import axios from 'axios';


const Add = ({handeltoggle}) => {

 const [addProduct,setAddProduct]=useState({
  name:"",
  description:"",
  price:0,
  imageUrl:"",
  category:""
 });
 const navigate=useNavigate()
    
 const handleClick = async (e) => {
  e.preventDefault();
  try {
    await axios.post("http://localhost:5002/api/product/add", addProduct);
    navigate("/adminSpace");
    handeltoggle()
  } catch (err) {
    console.log(err);
  
  }
};




  return (
    <div className="form">
      <h1>Add</h1>
      <input 
      type='text'
      label='Name'
      onChange={(e)=>{
        setAddProduct((prev)=>({...prev,name:e.target.value}))
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
          setAddProduct((prev)=>({...prev,description:e.target.value}))
        }}
      />
      
      <input 
      className='input'
      type='number'
      label='Price'
      onChange={(e)=>{
        setAddProduct((prev)=>({...prev,price:e.target.value}))
      }}
      placeholder='Enter Price'
      />
      <input 
      className='input'
      type='text'
      label='image'
      onChange={(e)=>{
        setAddProduct((prev)=>({...prev,imageUrl:e.target.value}))
      }}
      placeholder='Enter Image'
      />
      <input 
      className='input'
      type='text'
      label='Category'
      onChange={(e)=>{
        setAddProduct((prev)=>({...prev,category:e.target.value}))
      }}
      placeholder='Enter Categoey'
      />
        <button className='button' onClick={handleClick}>Add product</button>

    </div>
  )
}

export default Add