import React,{useState} from 'react'
const Search = ({search ,  handelsearch}) => {
    
 
    return (
        <form onSubmit={(e)=>{search(e)}} className='searchForm'>
            <input onChange={(e)=>{handelsearch(e)}} type="text" className='search' placeholder="looking for ..."  />
            <button  className='searchButton' type='submit' >&#x1F50E;</button>
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