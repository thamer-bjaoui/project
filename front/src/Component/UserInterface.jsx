import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Search from './Search'

const UserInterface = ({product}) => {
  const [searchTerm, setSearchTerm] = useState('');



  const handleSearch = (event) => {
    setSearchTerm(event.target.value)}

    const handleSubmit = (event) => {
      event.preventDefault();
      const filteredProduct = product.filter((e) =>{ 
        return e.name.toLowerCase().include( searchTerm.toLowerCase())
      });
      
      
    };

  const navigate=useNavigate()

  return (
    <div>
        
        <div className="product">
          {product.map((e) => (
          <div key={e.id} className="product">
            <img className='img' src={e.imageUrl} alt="img" />
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <span>${e.price}</span>
    
            </div>
            ))}
        </div>

    </div>
  )
}

export default UserInterface