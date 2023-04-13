import React,{useState} from 'react'
const Search = ({search ,  handelsearch}) => {
    
 
    return (
        <form onSubmit={(e)=>{search(e)}} className='searchForm'>
            <div style={{display: 'flex'}}>
            <input onChange={(e)=>{handelsearch(e)}} type="text" className='search' placeholder="looking for ..."  /> 
            <button  className='searchButton' type='submit' > search</button>
            </div>
        </form>
        // <div className='box'>
            
        //     <input type="text" placeholder="looking for ..."  />
        //     <a href='#'>
        //         <i className='fas fa-search'></i>
        //     </a>
        // </div>
    )
}
export default Search