import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminInterface = ({prod}) => {

const navigate=useNavigate()
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/api/rent/delete/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div >
      <div>
      <button className='button' onClick={()=>navigate("/add") }> Add product </button>
      <button className='button' onClick={()=>navigate("/") }> Signout </button>
      </div>
       <div className="product">
        {prod.map((e) => (
          <div key={e.id} className="product">
            <img  className='img' src={e.imageUrl} alt="img" />
            <h2>{e.name}</h2>
            <p>{e.description}</p>
            <span>${e.price}</span>
            <button className="delete" onClick={() => handleDelete(e.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${e.id}`}
                style={{ color: "inherit", textDecoration: "none" }}>
                Update
              </Link>
            </button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default AdminInterface
